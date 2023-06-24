function print(number) {  /*this is for printing the number */
    document.getElementById("output").value += number;
}
function reset(){     /*this is all about reset button */
    document.getElementById("output").value =0;
}

function back(){   /*this is all about back space button */
    var val=document.getElementById("output");
    var res=val.value;
    res=res.slice(0,-1);  //is removes last char
    val.value=res;

}
function calculate(){  /*this is all about computing the value */
    var value=document.getElementById("output").value;
    var result=eval(value);
    document.getElementById("output").value =result;

}
function change(){   /*this is all about toggle button to change css properties */
    document.getElementById("cont").style.backgroundColor="rgb(21, 27, 46)";
    document.getElementById("toggle").innerHTML='<i class="bi bi-toggle2-on"></i>';
    document.getElementById("calBody").style.background="rgb(21, 27, 46)";

}