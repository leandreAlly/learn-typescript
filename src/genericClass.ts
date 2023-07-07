class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}

let pair = new KeyValuePair<number, string>(1, "john");

console.log(pair.value.charAt(0));
