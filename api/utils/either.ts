/**
 * Class Right
 */

/**
 * Abstract class Value
 * To be extended by Left and Right
 * It's a class that represents a value of one of two possible types (a disjoint union).
 */
abstract class Value<T> {
  constructor(private readonly value: T) {}

  abstract isLeft(): boolean
  abstract isRight(): boolean
}

/**
 * Class Left
 * can be used for failure
 * Left: failure or incorrect
 */
class Left<T> extends Value<T> {
  isLeft(): boolean {
    return true
  }

  isRight(): boolean {
    return false
  }
}

/**
 * Class Right
 * Can be used for success
 * Right: success or correct
 */
class Right<T> extends Value<T> {
  isLeft(): boolean {
    return false
  }

  isRight(): boolean {
    return true
  }
}

/**
 * Class Either
 *
 * It's a class that represents a value of one of two possible types (a disjoint union).
 * An instance of either is an instance of either a left or a right.
 * Left is used for "failure" and Right is used for "success".
 *
 */
export class Either {
  /**
   * It's a factory method that takes a value and returns a Left.
   */
  static left<T>(value: T): Left<T> {
    return new Left(value)
  }

  /**
   * It's a factory method that takes a value and returns a Right.
   */
  static right<T>(value: T): Right<T> {
    return new Right(value)
  }

  /***
   * fromNullable
   * It's a factory method that takes a nullable value and returns a Left if the value is null or undefined,
   */
  static fromNullable<T>(value: T): Either {
    return value !== null && value !== undefined
      ? Either.right(value)
      : Either.left(value)
  }
}
