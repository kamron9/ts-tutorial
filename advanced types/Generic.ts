const num: Array<number> = [1, 2, 3, 4]; //numberdan tashkil topgan array degani

function genericFunc<T>(data: T): T {
  return data;
}
genericFunc(1);
