export class Connection {
  private constructor(
    /**
     * @param room_Id
     * Room id is a unique id for each room in the database
     */
    private readonly room_Id: string,
    /**
     * @param type_connection
     * Type connection is the type of connection that the user will use
     * PUBLIC - PRIVATE
     */
    private readonly type_connection: string,
    /**
     * @param options_connection
     * TODO: Create a class for this
     */
    private readonly options_connection: null | object,
    /**
     * @param channel_name
     * Channel name is the name of the channel that the user will use
     * @default [room,${roomId}]
     */
    private readonly channel_name: string | undefined
  ) {}

  public static createNewConnectionPublic(roomId: string): Connection {
    return new Connection(roomId, 'public', null, `[room,${roomId}]`)
  }

  get getChannelName(): string | undefined {
    return this.channel_name
  }

  get getType(): string | undefined {
    return this.type_connection
  }

  get getOptions(): null | object {
    return this.options_connection
  }
}
