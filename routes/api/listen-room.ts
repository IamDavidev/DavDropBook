import { Handlers } from "$fresh/server.ts";

const WAIT_CHUNK = `retry: 1000\n\n`;

export const handler: Handlers = {
  GET(_req, ctx) {
    const channel = new BroadcastChannel("editor-room");

    const body = new ReadableStream({
      start(controller) {
        controller.enqueue(WAIT_CHUNK);
        channel.onmessage = (e) => {
          const data = e;
          controller.enqueue(`data: ${JSON.stringify(data)}\n\n`);
        };
      },
      cancel() {
        channel.close();
      },
    });

    const response = body.pipeThrough(new TextEncoderStream());

    return new Response(response, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
      },
    });
  },
};
