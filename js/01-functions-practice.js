//STEP 1
function halfOf(num) {
    var half = num / 2;
    console.log("Half of " + num + " is " +  half);
    return half;
}

halfOf(5);

//STEP 2
function squareNumber(num) {
    var square = num * num;
    console.log("The result of squaring the number " + num + " is " + square);
    return square;
}
squareNumber(3);

//STEP 3
function percentOf(num1, num2) {
    var percent = (num1/num2) * 100;
    console.log(num1 + " is " + percent + "% of " + num2);
    return percent; 
}
percentOf(2, 4);

//STEP 4
function findModulus(num3, num4) {
    var modulus = num3 % num4;
    console.log(modulus + " is the modulus of " + num3 + " and " + num4);
    return modulus;
}
findModulus(10, 4);
