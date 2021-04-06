function NumberObj(n) {
    if (!Number.isInteger(n) || n < 0 || n > 999) {
        console.log('Число не подходит под условие, введите число от 0 до 999');
        return {};
    }

    return {
        'единицы': n % 10,
        'десятки': Math.floor(n / 10) % 10,
        'сотни': Math.floor(n / 100),
    }
}

console.log(NumberObj(245))