function sum(number1, number2) {
  return number1 + number2;
}

function calculate(number1, number2, callback) {
  return callback(number1, number2);
}

console.log(calculate(1, 2, sum));

function date(callback) {
    console.log(new Date());
    setTimeout(() => {
        let date = new Date();
        callback(date);
    }, 3000);
}

function printDate (dateNow) {
    console.log(dateNow);
}

date(printDate);