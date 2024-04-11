function firstElements<T, T2>(item: T[], item2: T2[]): [T, T2] {
  return [item[0], item2[0]];
}

// optional type declaration
firstElements<number, string>([1], ["hello"]);
