export class Right<T> {
  readonly value: T

  constructor(value: T) {
    this.value = value
  }

  isLeft(): this is Left<T> {
    return false
  }

  isRight(): this is Right<T> {
    return true
  }
}

export class Left<T> {
  readonly value: T

  constructor(value: T) {
    this.value = value
  }

  isLeft(): this is Left<T> {
    return true
  }

  isRight(): this is Right<T> {
    return false
  }
}

export class Either {
  static left<T>(value: T): Left<T> {
    return new Left(value)
  }

  static right<T>(value: T): Right<T> {
    return new Right(value)
  }

  static fromNullable<T>(value: T): Either {
    return value !== null && value !== undefined
      ? Either.right(value)
      : Either.left(value)
  }
}
