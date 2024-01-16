export class Connection {
  /**
   * Channel name to subscribe and establish a connection
   */
  private channelName: string | undefined
  /**
   * Type of connection to verify if is public or private
   */
  private type: string | undefined
  /**
   * Options to establish a connection
   * @Actions: define the type of options
   */
  private options: null | object = null

  /**
   * Room id to establish a connection
   */
  private roomId: string | undefined

  private constructor(
    private readonly room_Id: string,
    private readonly type_connection: string,
    private readonly options_connection: null | object,
    private readonly channel_name: string | undefined
  ) {
    this.roomId = room_Id
    this.type = type_connection
    this.options = options_connection
    this.channelName = channel_name
  }

  public static createNewConnectionPublic(roomId: string): Connection {
    return new Connection(roomId, 'public', null, `[room,${roomId}]`)
  }

  get getChannelName(): string | undefined {
    return this.channelName
  }

  get getType(): string | undefined {
    return this.type
  }

  get getOptions(): null | object {
    return this.options
  }
}
