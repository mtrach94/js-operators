let sum = 0.1 + 0.2;
console.log('сума ' + sum.toFixed(2) );


let str = Number('1');
let numb = 2;

console.log('сума ' + (str + numb));


let gb = prompt('Вкажіть обсяг флешки в ГБ');
let mb = Math.floor((gb * 1024) / 820);

console.log('к-ть файлів ' + mb);


let cash = prompt('Вкажіть суму грошей в гаманці');
let price = prompt('Вкажіть ціну шоколадки');
let quantity = Math.floor(cash/price);

console.log('кількість ' + quantity);

let money = quantity * price;
let balance = cash - money;
 
console.log('здача ' + balance);


let a = prompt("Сума вкладу");
let m = prompt("Кількість місяців");
let r = a * 0.05;
let d = r/12;
let pr = d*m;

console.log('нараховані відсотки ' + pr);
