/* ДЗ 2 - работа с массивами и объектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   forEach([1, 2, 3], (el) => console.log(el))
 */
function forEach(array, fn) {
    for (let i = 0; i < array.length; i++) {
        fn(array[i], i, array);
    }
};

let arr = ['a', 'b', 'c', 'd', 'e'];

forEach(arr, (el) => {
    console.log(el);
});

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   map([1, 2, 3], (el) => el ** 2) // [1, 4, 9]
 */
function map(array, fn) {
    let ms = [];
    for(let i = 0; i < array.length; i++) {
        ms[i] = fn(array[i], i, array);
    }
    return ms;
}

map([1, 2, 3], (el) => el ** 2);

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   reduce([1, 2, 3], (all, current) => all + current) // 6
 */
function reduce(array, fn, initial) {
    let i = initial ? 0 : 1;
    let total = initial ? initial : array[0];
    for(; i < array.length; i++) {
        total = fn(total, array[i], i, array);
    }
    return total;

}

reduce([1, 2, 3], (all, current) => all + current);

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
    let newObj = [];
    let i = 0;
    for(let key in obj) {
        newObj[i] = key.toUpperCase();
        i++;
    }
    return newObj;
}

let ms = upperProps({ name: 'Сергей', lastName: 'Петров' });

console.log(ms);
/*
 Задание 5 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат

 Пример:
   const obj = createProxy({});
   obj.foo = 2;
   console.log(obj.foo); // 4
 */
function createProxy(obj) {
    return new Proxy(obj, {
        set(obj, key, value) {
            obj[key] = Math.pow(value, 2);
            return true;
        }
    });
}

const obj = createProxy({});
obj.foo = 2;
console.log(obj);
console.log(obj.foo);

export { forEach, map, reduce, upperProps, createProxy };
