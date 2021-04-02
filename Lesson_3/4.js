// Вариант 1
let row = 'x';
for (let i = 0; i < 20; i++){
    console.log(row);
    row += 'x';
}

// Вариант 2
var arr = [];
var end = 0;
while (end < 20){
    end++;
    arr.push('x');
    let str = arr.join('');
    console.log(str);
}