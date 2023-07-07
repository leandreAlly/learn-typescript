class ArrayUtils {
  static wrapInArray<T>(value: T) {
    return [value];
  }
}

const numbers = ArrayUtils.wrapInArray<string>("juice");

console.log(numbers);
