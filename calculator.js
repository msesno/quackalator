$(document).ready(function(){
    var firstNumber = false;
    var secondNumber = false;

    //Add a click listener to buttons
    $(".btn").on("click",function(){
        //var clicked = this.value;
        if($(this).hasClass("number")){
            //add the number
            firstNumber = true;
            setNumber(this.value);

        }
        else if($(this).hasClass("operator")){
            if (firstNumber == true){
            //run the operator function
            secondNumber = true;
            $("#operator").text(($(this).text()));
            // console.log(firstNumber+" "+secondNumber);
            }
            
        }
        else if($(this).hasClass("equal")){
            evaulate();
        }
        else if($(this).hasClass("clear")){
            //run the reset function
            reset();
        }

    });



    //FUNCTIONS
    function setNumber(number){
        if (!secondNumber){
            $("#first-number").append(number);            
        }
        else{
            $("#second-number").append(number);
        }

    }
    function reset(){
        console.log("reset");
    }
    
});