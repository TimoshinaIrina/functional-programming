/*
.filter() - сортирует значения: true - оставляет значения, false - исключает
.map() - создает новый массив путем преобразования КАЖДОГО элемента старого
.hasOwnProperty() - проверяет содержит ли объект свойство или метод
.reduce() - возвращает одно значение
*/
//возвращает только четные элементы
const getEvenNumbers = (array) => array.filter(elem => elem % 2 === 0);

//возвращает кавдраты чисел
const getSquares = (array) => array.map(elem => elem * elem);

//возвращает объекты с определенным свойством
const filterObjByProperty = (objects, property) => objects.filter(obj => obj.hasOwnProperty(property));

//возвращает сумму всех элементов
const getSum = (array) => array.reduce((sum, elem) => sum + elem, 0);
//0 - стартовое значение sum

//функция высшего порядка
const highFunc = (func, array) => array.map(array => func(array));

//сумма квадратов всех четных чисел
const sumOfSquareOfEvents = (array) => {
	const evenNumbers = getEvenNumbers(array);
	const squaresOfNumbers = getSquares(evenNumbers);
	const sumOfSquares = getSum(squaresOfNumbers);
	return sumOfSquares;
}

//находит среднее арифметическое элементов больше заданного значения
const averageAboveThreshold = (array, threshold) => {
  const filteredNumbers = array.filter(elem => elem > threshold);
  return filteredNumbers.length > 0 ? getSum(filteredNumbers) / filteredNumbers.length : 0;
}

const testArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const testForObjFilter = [
	{name: 'Masha', age: 20},
	{name: 'Vasya', age: 19},
	{name: 'Petya'}
]

console.log('исходный массив', testArray);
console.log('четные элементы', getEvenNumbers(testArray));
console.log('квадраты', getSquares(testArray));
console.log('сумма элементов', getSum(testArray));

const addTwo = x => x+2;
console.log('функция высшего порядка, увеличивающая на два каждый элемент', highFunc(addTwo, testArray));

console.log('сумма квадратов четных чисел:', sumOfSquareOfEvents(testArray));
console.log('cреднее арифметическое чисел > 5:', averageAboveThreshold(testArray, 5));

console.log(testForObjFilter);
console.log('Объекты со свойством age:', filterObjByProperty(testForObjFilter, 'age'));
