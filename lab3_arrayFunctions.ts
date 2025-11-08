//фильтрация массива чисел по принципу кратности заданному
const filterByMultiplicity = (array: number[], specified: number): number[] => {
  return array.filter(num => num % specified === 0);
}

//объединение массива строк в одну с заданным разделителем между словами
const combiningStrings = (array: string[], separator: string): string => {
  return array.join(separator);//.join() объединяет все элементы массива в одну строку с заданным разделителем.
}

//сортировка объектов произвольного типа по задданному свойству с использованием generics
const sortByProperty = <T>(objects: T[], property: keyof T): T[] => {
  return [...objects].sort((a, b) => {
    if (a[property] < b[property]) return -1;
    if (a[property] > b[property]) return 1;
    return 0;
  });
};

//функция с использованием логирования
const withLogging = <T extends any[], R>(
  fn: (...args: T) => R,
  logger: (args: T, result: R) => void = (args, result) => {
    console.log(`вызов функции с аргументами:`, args);
    console.log(`результат:`, result);
  }
): ((...args: T) => R) => {
  return (...args: T): R => {
    const result = fn(...args);
    logger(args, result);
    return result;
  };
};

//тесты
//1. фильтр кратности
const numbers = [4, 12, 21, 35, 42, 5, 69, 77, 84, 9];
console.log('исходный массив:', numbers);
console.log('кратные 7:', filterByMultiplicity(numbers, 7));

//2. объединение строк
const strings = ['TipeScript', 'is', 'a', 'programming', 'language'];
console.log('исходный массив:', strings);
console.log('объединенная строка:', combiningStrings(strings, '_'));

//3. сортировка объектов
interface Car {
  brand: string;
  year: number;
}

const cars: Car[] = [
  {brand: 'Mersedes', year: 2022},
  {brand: 'BMW', year: 2019},
  {brand: 'Cherry', year: 2025}
];

const sortedByYear = sortByProperty(cars, 'year');
console.log('отсортировано по году выпуска:', sortedByYear);

const sortedByBrand = sortByProperty(cars, 'brand');
console.log('отсортировано по марке:', sortedByBrand);

console.log('stop');//для просмотра массива объектов в vscode

//4. функция с логированием
const multiply = (a: number, b: number): number => a * b;

// логирующая обёртка с дефолтным логгером
const loggedMultiply = withLogging(multiply);

const result = loggedMultiply(3, 4);


// кастомный логгер
const customLogger = (args: [number, number], result: number) => {
  console.log(`Умножаем ${args[0]} на ${args[1]}, получается ${result}`);
};

const customLoggedMultiply = withLogging(multiply, customLogger);

customLoggedMultiply(5, 6);