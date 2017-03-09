/**
 * Created by Mukul on 07/03/17.
 */

var firstString;
var secondString;
var secondStringArr = [];

function clickedNumber(num) {
    if(secondString == undefined || secondString.indexOf("=")==-1){
        getValues();
        if (firstString == 0 || firstString == ' + ' || firstString == ' - ' || firstString == ' X ' || firstString == ' / ') {
            if (num != 0) {
                firstString = num;
            }
        }
        else {
                firstString += num;
        }

        if(secondString==0){
            if(num != 0){
                secondString=num;
            }

        }
        else{
            secondString+=num;
        }
        displayValues();
    }
    else{
        firstString = num;
        secondString = num;
        displayValues();
    }
}

function operator(operator){

    if(secondString.indexOf("=")==-1){
        getValues();
        firstString = " " + operator + " ";
        secondString += " " + operator + " ";
        displayValues();
    }
    else{
        getValues();
        firstString = " " + operator + " ";
        secondString = secondString.split(" = ")[1] + " " + operator + " ";
        displayValues();
    }
}

function ac(){
    firstString = "0";
    secondString = "0";
    displayValues();
}

function addDec(){
    getValues();
    if(firstString.indexOf('.')==-1){
        firstString += '.';
        secondString += '.';
    }
    displayValues();
}

function ce(){
    getValues();
    firstString = "0";
    secondString = secondString.trim();
    secondStringArr = secondString.split(' ');
    if(secondStringArr.pop()==' '){
     secondStringArr.pop();
    }
    console.log(secondStringArr);
    if (secondStringArr.length==0){
        secondString = "0";
    }
    else{
        secondString = secondStringArr.join(' ') + ' ';
    }

    displayValues();
}

function evaluateExp(){
    getValues();
    if(secondString.indexOf('=') == -1){
        firstString = Math.round(eval(secondString.replace(/X/gi,'*')) * 100) / 100 + '';
        secondString += " = " + firstString;
    }
    displayValues();
}

function getValues(){
    firstString = document.getElementById("line1").innerHTML;
    secondString = document.getElementById("line2").innerHTML;
}

function displayValues(){
    if (firstString.length + 1 > 17 || secondString.length + 1 > 33){
        document.getElementById('line0').style.visibility = "visible";
        setTimeout(function() {
            document.getElementById('line0').style.visibility = "hidden";
        }, 1000);
    }
    else{
        document.getElementById("line1").innerHTML = firstString;
        document.getElementById("line2").innerHTML = secondString;
    }
}

// console.log(firstString);

