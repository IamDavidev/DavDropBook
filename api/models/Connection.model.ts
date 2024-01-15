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

  private constructor(
    private readonly roomId: string,
    private readonly typeConnection: string,
    private readonly optionsConnection: null | object
  ) {
    this.genNewChannelName(roomId)
    this.type = typeConnection
    this.options = optionsConnection
  }

  private genNewChannelName(roomId: string): void {
    this.channelName = `[room,${roomId}]`
  }

  public static createNewConnectionPublic(roomId: string): Connection {
    return new Connection(roomId, 'public', null)
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
