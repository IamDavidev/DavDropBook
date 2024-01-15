interface LiveConnectionConfigurations {
  /**
   * Name of the channel to connect to the server
   */
  nameChannel: string
}

const WAIT_CHUNK = `retry: 1000\n\n`

export function getNewLiveConnection<T>(
  params: LiveConnectionConfigurations
): ReadableStream<Uint8Array> {
  const { nameChannel } = params
  const channel = new BroadcastChannel(nameChannel)

  const stream = new ReadableStream({
    start(controller) {
      controller.enqueue(WAIT_CHUNK)
      channel.onmessage = e => {
        const data = e
        controller.enqueue(`data: ${JSON.stringify(data)}\n\n`)
      }
    },
    cancel() {
      channel.close()
    },
  })

  const res = stream.pipeThrough(new TextEncoderStream())

  return res
}
