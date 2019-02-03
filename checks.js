// Встроенный в Node.JS модуль для проверок
var assert = require('assert');

// Подключаем свою функцию
var lib = require('./index.js');

// Коллекция данных
var friends = [
    {
        name: 'Сэм',
        gender: 'Мужской',
        email: 'luisazamora@example.com',
        favoriteFruit: 'Картофель'
    },
    {
        name: 'Эмили',
        gender: 'Женский',
        email: 'example@example.com',
        favoriteFruit: 'Яблоко'
    },
    {
        name: 'Мэт',
        gender: 'Мужской',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Яблоко'
    },
    {
        name: 'Брэд',
        gender: 'Мужской',
        email: 'newtonwilliams@example.com',
        favoriteFruit: 'Банан'
    },
    {
        name: 'Шерри',
        gender: 'Женский',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Картофель'
    },
    {
        name: 'Керри',
        gender: 'Женский',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Апельсин'
    },
    {
        name: 'Стелла',
        gender: 'Женский',
        email: 'waltersguzman@example.com',
        favoriteFruit: 'Картофель'
    }
];

// Выполняем фильтрацию с помощью нашего конструктора
var result = lib.query(
    friends,
    lib.filterIn('favoriteFruit', ['Картофель','Апельсин']),
    lib.filterIn('favoriteFruit', ['Картофель'])
);

// Сравниваем полученный результат с ожидаемым
assert.deepEqual(result, [
    {
        name: 'Сэм',
        gender: 'Мужской',
        email: 'luisazamora@example.com',
        favoriteFruit: 'Картофель'
    },
    {
        name: 'Шерри',
        gender: 'Женский',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Картофель'
    },
    {
        name: 'Стелла',
        gender: 'Женский',
        email: 'waltersguzman@example.com',
        favoriteFruit: 'Картофель'
    }
]);
// Выполняем фильтрацию по двум свойствам с помощью нашего конструктора
result = lib.query(
    friends,
    lib.filterIn('favoriteFruit', ['Картофель','Апельсин']),
    lib.filterIn('gender', ['Женский'])
);

// Сравниваем полученный результат с ожидаемым
assert.deepEqual(result, [
    {
        name: 'Шерри',
        gender: 'Женский',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Картофель'
    },
    {
        name: 'Керри',
        gender: 'Женский',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Апельсин'
    },
    {
        name: 'Стелла',
        gender: 'Женский',
        email: 'waltersguzman@example.com',
        favoriteFruit: 'Картофель'
    }
]);
// передаем только обьект
result = lib.query(
    friends
);

// Сравниваем полученный результат с ожидаемым
assert.deepEqual(result, [
    {
        name: 'Сэм',
        gender: 'Мужской',
        email: 'luisazamora@example.com',
        favoriteFruit: 'Картофель'
    },
    {
        name: 'Эмили',
        gender: 'Женский',
        email: 'example@example.com',
        favoriteFruit: 'Яблоко'
    },
    {
        name: 'Мэт',
        gender: 'Мужской',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Яблоко'
    },
    {
        name: 'Брэд',
        gender: 'Мужской',
        email: 'newtonwilliams@example.com',
        favoriteFruit: 'Банан'
    },
    {
        name: 'Шерри',
        gender: 'Женский',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Картофель'
    },
    {
        name: 'Керри',
        gender: 'Женский',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Апельсин'
    },
    {
        name: 'Стелла',
        gender: 'Женский',
        email: 'waltersguzman@example.com',
        favoriteFruit: 'Картофель'
    }
]);
// Выполняем выборку и фильтрацию с помощью нашего конструктора
result = lib.query(
    friends,
    lib.select('name','gn','email'),
    lib.filterIn('favoriteFruit', ['Картофель','Апельсин']),
    lib.filterIn('gender', ['Женский'])
);

// Сравниваем полученный результат с ожидаемым
assert.deepEqual(result, [
    {
        name: 'Шерри',
        email: 'danamcgee@example.com',
    },
    {
        name: 'Керри',
        email: 'danamcgee@example.com',
    },
    {
        name: 'Стелла',
        email: 'waltersguzman@example.com',
    }
]);
console.info('OK!');
