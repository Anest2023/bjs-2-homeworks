"use strict"
function solveEquation(a, b, c) {
  let arr = [0];
  let discriminant = b**2 - 4 * a * c;

  if (discriminant < 0) {
    arr = [];
  }

  else if (discriminant === 0) {
    arr[0] = -b/(2 * a);
  }

  else {
    arr[0] = (-b + Math.sqrt(discriminant)) / (2 + a);
    arr[0] = (-b - Math.sqrt(discriminant)) / (2 + a);
  }

  return arr;
}



"use strict";

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  let p = parseInt(percent) / 100 / 12// процентная ставка
  let cntrb = parseInt(contribution) // первоначальный взнос
  let  amnt = parseInt(amount) // сумма кредита
  let nm = parseInt(countMonths) // количество месяцев

  if (isNaN(p) || p < 0) {
    return `Параметр "Процентная ставка" - введено неверное значение "$(persent)"`;
  }
  else if (isNaN(cntrb) || cntrb < 0) {
    return `Параметр "Первоначальный взнос" - введено неверное значение "$(contribution)"`;
  }
  else if (isNaN(amnt) || amnt < 0) {
    return `Параметр "Сумма кредита" - введено неверное значение "$(amount)"`;
  }
  else if (isNaN(nm) || nm < 0) {
    return `Параметр "Количество месяцев" - введено неверное значение "$(countMonths)"`;
  }

  else {
    
  
  let s = amnt - cntrb; // тело кредита - сумма которую нужно вернуть банку//

 let monthlyPay = s * (p + (p / (((1 + p)**nm) - 1))) // ежемесячная оплата //
  let totalPay = (monthlyPay * nm).toFixed(2);


  
  console.log(calculateTotalMortgage(percent, contribution, amount, countMonths));

    return totalPay

}
}
