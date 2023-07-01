function calculate(){
    
    var num1 = Number(prompt("Enter the num1"));
    var opo= prompt("Select an operation + - * /");
    var num2 = Number(prompt("Enter the num2"));

    if(opo =="+" ){
        var sum1 = num1 +num2;
        document.getElementById("results").innerHTML=`<p> ${num1} + ${num2} = ${sum1}</p>`;   
    }else if(opo =="-" ){
        var sub1 = num1 -num2;
        document.getElementById("results").innerHTML=`<p> ${num1} - ${num2} = ${sub1}</p>`;   
    }else if(opo =="*" ){
        var mul1 = num1 *num2;
        document.getElementById("results").innerHTML=`<p> ${num1} * ${num2} = ${mul1}</p>`;   
    }else if(opo =="/" ){
        var div1 = num1 /num2;
        document.getElementById("results").innerHTML=`<p> ${num1} / ${num2} = ${div1}</p>`;   
    }else{
        document.getElementById("results").innerHTML=`<p> invalid operator</p>`
    }

 
    var mul = num1 *num2;
    var div = num1 / num2;
    var sub = num1 - num2;
    var sum = num1 +num2;
     
    //add the + - * / operations

    document.getElementById("resultsList").innerHTML=`
    <h2> All operations </h2>
    <p> ${num1} + ${num2} = ${sum}</p>
    <p> ${num1} - ${num2} = ${sub}</p>
    <p> ${num1} x ${num2} = ${mul}</p>
    <p> ${num1} / ${num2} = ${div}</p>
    `
};