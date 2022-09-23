//Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, 
//является ли оно простым, и выводит простое число или нет. Если введено больше 1 000, 
//то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.

let n = 879;
function checkPrimeNum (n) {
if (n > 1000 || n < 2) {
  let result = "Данные неверны";
  return result;
  }
else if (n === 2) {
        result = n + " - это простое число";
        return result;
      } 
      else for (let i = 2; i < n; i++) {
         if (n % i === 0) {
           result = n + " - не простое, составное число";
           return result;
          }
         }   
         result = n + " - это простое число";
         return result;
}
const str = `${checkPrimeNum (n)}`;
console.log (str);
