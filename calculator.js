$(document).ready(function(){
    var isFirstNumber = false;
    var isSecondNumber = false;
    var firstNumber = "";
    var secondNumber  = "";
    var operator = "";
    var result = "";
    var frozen = false;
    //Add a click listener to buttons
    $(".btn").on("click",function(){
        //var clicked = this.value;
       if(!frozen){
        if($(this).hasClass("number")){
            //add the number
            isFirstNumber = true;
            setNumber(this.value);

        }
        else if($(this).hasClass("operator")){
            if (isFirstNumber == true){
            //run the operator function
            isSecondNumber = true;
            operator = this.value;
            $("#operator").text(($(this).text()));
            // console.log(firstNumber+" "+secondNumber);
            }
            
        }
        else if($(this).hasClass("equal")){
            evaluate();
        }
        
       }
       if($(this).hasClass("clear")){
        //run the reset function
        reset();
    }

    });



    //FUNCTIONS
    function setNumber(number){
        if (!isSecondNumber){
            $("#first-number").append(number);            
        }
        else{
            $("#second-number").append(number);
        }

    }
    function evaluate(){
        frozen = true;
        console.log(frozen);
        firstNumber = parseInt($("#first-number").text());
        secondNumber = parseInt($("#second-number").text());
        if(operator == "plus"){
            result = firstNumber + secondNumber;
        }
        else if( operator == "minus"){
            result = firstNumber - secondNumber;
        }
        else if (operator == "times"){
            result = firstNumber * secondNumber;
        }
        else if (operator == "divide"){
            result  = firstNumber/secondNumber;
        }
        else if (operator == "power"){
            result = Math.pow(firstNumber,secondNumber);
        }
        $("#result").text(result);
    }
    function reset(){
        isFirstNumber = true;
        isSecondNumber = false;
        firstNumber = "";
        secondNumber  = "";
        operator = "";
        result = "";
        frozen = false;
        $("#first-number").text("");
        $("#second-number").text("");
        $("#operator").text("");
        $("#result").text("");
    }
});