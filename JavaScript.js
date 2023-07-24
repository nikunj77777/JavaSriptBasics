let factorial = (number) =>{
    let factMultiplication=1
    for(let i=1;i<=number;i++)
    {
        factMultiplication*=i
    }
    console.log(factMultiplication)
}

let primeNumber = (number) =>{
    let isPrime=1
    for(let i=2;i<=number/2;i++)
    {
        if (number%i==0)
        {
            console.log("It is not a Prime Number")
            isPrime=0
            break
        }
    }
    if(isPrime==1)
    {
        console.log("It is a Prime Number");
    }
}

let fibonacci = ()=>{
    let firstNumber=0
    let secondNumber=1
    let sumOfNumber=0
    for(let i=0;i<5000;i++)
    {
        sumOfNumber=firstNumber+secondNumber
        firstNumber=secondNumber
        secondNumber=sumOfNumber
    }
    console.log(sumOfNumber)
}

let evenOddZero=(arrayNumber)=>{
    let countEven=0
    let countOdd=0
    let countZero=0
    for(let i=0;i<arrayNumber.length;i++)
    {
        
        if(arrayNumber[i]%2==0)
        {
            countEven++
        }
        if(arrayNumber[i]%2!=0)
        {
            countOdd++
        }
        if(arrayNumber[i]==0)
        {
            countZero++
        }
       
    }
    console.log("Even Number Count =",countEven)
    console.log("Odd Number Count =",countOdd)
    console.log("Zero Number Count =",countZero)
}


let armstrongNumber=()=>{
    console.log("ArmStrong Number from 1 to 100000 are : ")
    for (let i = 1; i <= 100000; i++)
    {
        let numberOfDigits = i.toString().length;
        let sumOfDigits = 0;
        let temporary = i;
        while (temporary > 0) 
        {
            let remainder = temporary % 10
            sumOfDigits += remainder ** numberOfDigits
            temporary = parseInt(temporary / 10)
        }
        if (sumOfDigits == i)
        {
            console.log(i)
        }
    }
}


