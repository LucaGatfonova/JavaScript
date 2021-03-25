var a = Math.floor((Math.random() - 0.5) * 20);
var b = Math.floor((Math.random() - 0.5) * 20);

console.log(a)
console.log(b)
if (a>=0 && b>=0) {
    console.log('Разность: '+ (a-b));
} else if (a<0 && b<0) {
    console.log('Произведение: '+ (a*b));
} else if (a>=0 && b<0 || a<0 && b>=0){
    console.log('Сумма: '+ (a+b));
}