


function getHistory (){
   return document.getElementById("history-value").innerText
}

function printHistory(num){
    document.getElementById("history-value").innerText=num;
}


function getOutput(){
    return document.getElementById("output-value").innerText;

}

function printOutput(num) {
     document.getElementById("output-value").innerText =num;
    }
function getFormattedNumber(num){
    var n = Number (num);
    var value = n.toLocaleString("en");
    return value;
}

function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}
var operator = document.getElementsByClassName("operator");
for (var a = 0; a < operator.length; a++){
    operator[a].addEventListener('click', function(){
    if (this.id=="clear"){
        printHistory("");
        printOutput("");
    }
    else if (this.id == "backspace") {
        var output = reverseNumberFormat(getOutput()).toString();
        if (output) 
            output = output.substr(0, output.length - 1);
            printOutput(output);
        }
        }
    else {
        var output = getOutput();
        var history = getHistory();
        if (output=="")
    }

var number = document.getElementsByClassName("number");
for (var a = 0; a < number.length; a++) {
    number[a].addEventListener('click', function () {
    if (output!=NaN){
    var output = reverseNumberFormat(getOutput());
    output= output+this.id;
    printOutput(output);
    })}
    

$('.number').on('click', function () {

    $("#output-value").text(this.innerhtml)
})