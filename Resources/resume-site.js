const form = document.getElementByClassName("math-form");
form.addEventListener("submit", meanAndMedian);

function meanAndMedian(event, num1, num2, num3) 
{
    event.preventDefault();

    num1 = document.getElementByClassName().value;
    num2 = document.getElementByClassName().value;
    num3 = document.getElementByClassName().value;

        /* Calculating the mean */
    let sum = Number(num1) + Number(num2) + Number(num3);
    let avg = sum / 3;
    document.getElementByClassName("mean").innerHTML = avg;

        /* Calculating the median */
    let mathArr = [num1, num2, num3];
    mathArr.sort((a, b) => a - b);
    let med = mathArr[1];
    document.getElementByClassName("median").innerHTML = med;
}

