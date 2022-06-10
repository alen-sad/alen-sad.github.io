    // Mean and Median Section //
const form1 = document.getElementById("submit1");

function meanMedianAndTotal(event, num1, num2, num3) 
{
    event.preventDefault();

    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    num3 = document.getElementById("num3").value;

        /* Calculating the mean */
    let sum = Number(num1) + Number(num2) + Number(num3);
    let avg = sum / 3;
    let decimal = avg.toFixed(6);
    document.getElementById("mean").innerHTML = decimal;

        /* Calculating the median */
    let mathArr = [num1, num2, num3];
    mathArr.sort((a, b) => a - b);
    let med = mathArr[1];
    document.getElementById("median").innerHTML = med;

        /* Calculating the total */
    let totalSum = Number(num1) + Number(num2) + Number(num3);

    document.getElementById("total").innerHTML = totalSum;
}
form1.addEventListener("click", meanMedianAndTotal);


    // Personal Message Section //
const form2 = document.getElementById("submit2");

function personalMessage(event, name1, date1) 
{
    event.preventDefault();

    word1 = document.getElementById("name1").value;
    date1 = document.getElementById("date1").value;

    /* Formatting the Message */
    document.getElementById("personal-message").innerHTML = 
    `Thank you so much ${word1} for visiting my portfolio/resume site on ${date1}! 
    I am always trying to add more to it and  keep updating it!`;
}
form2.addEventListener("click", personalMessage)


    // Random Message Generator //
const form3 = document.getElementById("submit3");

function randomMessage(event, option1, option2, option3)
{
    event.preventDefault();

    option1 = document.getElementById("first-option").value;
    option2 = document.getElementById("second-option").value;
    option3 = document.getElementById("third-option").value;

    /* Randomly Generate a Message */
    let randomArr = [`Holy crap! That is one ${option1} monster! It looks so ${option2}! I've never seen something so ${option3}.`,
                     `Oh god! What is that ${option1} looking thing over there?! It seems to be really ${option2}. Want to see how ${option3} it is?`,
                     `No way! How did this ${option1} thing get here?! Do you think it's ${option2}? This is so ${option3}!`,
                     `I can't believe this! There is a ${option1} looking animal over there! Why is that ${option2} thing looking this way?! It's too ${option3}`];
    
    let randomNum = Math.floor(Math.random() * 4);
    document.getElementById("random-result").innerHTML = randomArr[randomNum];
}
form3.addEventListener("click", randomMessage);

    // Button Section //
const firstButton = document.getElementById("button1");
const secondButton = document.getElementById("button2");
const thirdButton = document.getElementById("button3");
const reset = document.getElementById("button4");

function randomColor() 
{
    /* Random RGB Color */
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let color = `rgb(${r}, ${g}, ${b})`;
    return color;
}

function changeButtoncolor(event) 
{
    event.preventDefault();
    event.target.style.backgroundColor = randomColor();
}

function changeTextColor(event) 
{
    event.preventDefault();

    document.getElementById("second-button").style.color = randomColor();
    document.getElementById("button2").style.color = randomColor();
    event.target.style.backgroundColor = randomColor();
}

function changeBackgroundColor(event) 
{
    event.preventDefault();

    document.getElementById("third-button").style.color = randomColor();
    document.getElementById("button3").style.color = randomColor();
    document.getElementById("button-section").style.backgroundColor = randomColor();
    document.getElementById("button-title").style.color = randomColor();
    document.getElementById("button-title").style.backgroundColor = randomColor();
    event.target.style.backgroundColor = randomColor();
}

function resetColors(event) 
{
    event.preventDefault();

    document.getElementById("first-button").style.color = "black";
    document.getElementById("button1").style.color = "white";
    document.getElementById("button1").style.backgroundColor = "black";
    document.getElementById("second-button").style.color = "black";
    document.getElementById("button2").style.color = "white";
    document.getElementById("button2").style.backgroundColor = "black";
    document.getElementById("third-button").style.color = "black";
    document.getElementById("button3").style.color = "white";
    document.getElementById("button3").style.backgroundColor = "black";
    document.getElementById("button-title").style.color = "white";
    document.getElementById("button-title").style.backgroundColor = "slategray";
    document.getElementById("button-section").style.backgroundColor = "slategray";
}
firstButton.addEventListener("click", changeButtoncolor);
secondButton.addEventListener("click", changeTextColor);
thirdButton.addEventListener("click", changeBackgroundColor);
reset.addEventListener("click", resetColors);

    // Ball Section //
const ballSection = document.getElementById("ball-section");
const ball = document.getElementById("ball");

function ballUp(event) {

    event.preventDefault();

    ball.style.bottom = "9rem";
}

function ballDown(event) {

    event.preventDefault();

    ball.style.bottom = "0rem";
}
ballSection.addEventListener("mousedown", ballUp);
ballSection.addEventListener("mouseup", ballDown);
ballSection.addEventListener("touchstart", ballUp);
ballSection.addEventListener("touchend", ballDown);