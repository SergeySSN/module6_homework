//Дан массив. Нужно вывести в консоль количество чётных и нечётных 
//элементов в массиве. Если в массиве есть нулевой элемент, то он 
//учитывается и выводится отдельно. 
//При выполнении задания необходимо учесть, что массив может содержать 
//не только числа, но и, например, знаки, null и так далее.
//На этот раз оформите решение в виде функции, постарайтесь дать 
//этой функции корректное название, вызовите функцию, 
//проанализируйте синтаксис.

let myArray = [1,2,3,4,0,0,"2", null, NaN, 1984];

function countOddEven (myArray) {
let zeroCount = 0;
let evenCount = 0;
let oddCount = 0;
for (let i=0; i < myArray.length; i++)
{   
    if ( typeof (myArray[i]) == 'number' && !isNaN(myArray[i]))
    {
        if (myArray[i] === 0) 
        {zeroCount = zeroCount +1;   
        }
        else if (myArray[i] % 2 === 0) 
        {evenCount = evenCount +1;    
        }
             else 
             {oddCount = oddCount +1;   
             }
    }
}
let str = `${zeroCount} - нули,\n
${evenCount} - четные,\n
${oddCount} - нечетные`;
return str;
}
console.log(countOddEven(myArray));