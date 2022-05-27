const form1 = document.getElementsByClassName("math-form");
const form2 = document.getElementsByClassName("word-form");
const form3 = document.getElementsByClassName("random-form");
const form4 = document.getElementsByClassName("button-form");

function meanAndMedian(event, num1, num2, num3) 
{
    event.preventDefault();

    num1 = document.getElementsByClassName("num1").value;
    num2 = document.getElementsByClassName("num2").value;
    num3 = document.getElementsByClassName("num3").value;

        /* Calculating the mean */
    let sum = Number(num1) + Number(num2) + Number(num3);
    let avg = sum / 3;
    document.getElementsByClassName("mean").innerHTML = avg;

        /* Calculating the median */
    let mathArr = [num1, num2, num3];
    mathArr.sort((a, b) => a - b);
    let med = mathArr[1];
    document.getElementsByClassName("median").innerHTML = med;
}

function personalMessage(event, name, date) 
{
    event.preventDefault();

}

function randomGenerator(event, word1, word2, word3) 
{
    event.preventDefault();

}

form1.addEventListener("submit1", meanAndMedian);
form2.addEventListener("submit2", personalMessage);
form3.addEventListener("submit3", randomGenerator);