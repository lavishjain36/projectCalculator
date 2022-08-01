function clearform(){
    document.getElementById("first").value="";
    document.getElementById("second").value="";
}


function add(){
    let num1=document.getElementById("first").value;
    let num2=document.getElementById("second").value;
    let result=parseInt(num1)+parseInt(num2);
    console.log(result);

    let res=document.getElementsByClassName("output")[0];
    res.innerHTML=`Addition of ${num1} and ${num2} is ${result}`;

    clearform();
}


function sub(){
    let num1=document.getElementById("first").value;
    let num2=document.getElementById("second").value;
    let result=parseInt(num1)-parseInt(num2);
    console.log(result);

    let res=document.getElementsByClassName("output")[0];
    res.innerHTML=`Subtraction of ${num1} and ${num2} is ${result}`;

    clearform();

}

function mul(){
    let num1=document.getElementById("first").value;
    let num2=document.getElementById("second").value;
    let result=parseInt(num1)*parseInt(num2);
    console.log(result);

    let res=document.getElementsByClassName("output")[0];
    res.innerHTML=`Multiplication of ${num1} and ${num2} is ${result}`;

    clearform();

}

function div(){
    let num1=document.getElementById("first").value;
    let num2=document.getElementById("second").value;
    let result=parseInt(num1)/parseInt(num2);
    console.log(result);

    let res=document.getElementsByClassName("output")[0];
    res.innerHTML=`Division of ${num1} and ${num2} is ${result}`;

    clearform();

}