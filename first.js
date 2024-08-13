// let a=10;
// document.write(a,'<br>');
// let b=5;
// document.write(b,'<br>');
// let sum=a+b;
// document.write(sum,'<br>');
// let difference=a-b;
// document.write(difference,'<br>');
// let product=a*b;
// document.write(product,'<br>');
// let quotient=a/b;
// document.write(quotient,'<br>');
// let remainder=a%b;
// document.write(remainder,'<br>');
// let isequal=(a==b);
// document.write(isequal,'<br>');
// let isNotequal=(a!=b);
// document.write(isNotequal,'<br>');
// let isGreater=(a>b);
// document.write(isGreater,'<br>');
// let logicalAnd=(a>b&&b<10);
// document.write(logicalAnd,'<br>');
// ---------------------------------------
// let name ="dhruv"
// document.write("hello ",name,'<br>')
// let age =30
// document.write("age: ",age,'<br>')
// let isstudent=true
// document.write(`student: ${isstudent ? "yes" : "no"} <br>`)
// let emptyvalue=null
// document.write(`about us: ${emptyvalue ||"write something"} <br>`)
// let uninitialised
// document.write(!uninitialised && "fill detail completely" )
// ----------------------------------------
// a=prompt("enter age:")
// if (a>17)
// {
//     document.write("eligible to vote","<br>")
// }
// else{
//     document.write("not eligible to vote","<br>")
// }
// document.write(a>17?`eligible to vote<br>`:"not eligible to vote")
// //------------------------------------------
// let a=prompt("enter number: ")
// if(a>0)
// {
//     console.log("positive")
// }
// else if(a<0)
// {
//     console.log("negative")
// }
// else{
//     console.log("zero")
// }
//-----------------------------------------
// let b=prompt("enter fruit name:")
// switch (b){
// case "apple":
//     console.log("you choose an apple")
//     break
// case "orange":
//     console.log("you choose an orange")
//     break
// default:
//     console.log("you choose neither apple nor orange ")
//     break
// }
//------------------------------------------
// a=null
// document.write(typeof(a),'<br>')
// b=false-true
// document.write(b)
//  c=prompt("enter your name:") //prompt function is used to take the input from the user.it is a inbuilt javascript function to take external input from the user
// document.write(c)
 //-----------------------------------------
 //simple function
//  function msg(){
//     document.write("hello dhruv:<br>")
//  }
//  msg()
//  //function expression
// let day=function(){
//     document.write("hello buddy!<br>")
// }
// day()
//  //arrow function
//  let ms=()=>{document.write("hello sherrr<br>")}
//  ms()
//  //iife function (immediate info function expression)
//  (function(){
//     document.write("hello chitta")
//  }());
function morning(){
   document.getElementById("demo").innerHTML="Good Morning"
   document.getElementById("mode").style.background="skyblue"
   document.getElementById("mode").style.color="blue"
   document.getElementById("x").style.background="red"
}
function afternoon(){
   document.getElementById("demo").innerHTML="Good Afternoon"
   document.getElementById("mode").style.background="orange"
   document.getElementById("mode").style.color="red"
}

function evening(){
   document.getElementById("demo").innerHTML="Good Evening"
   document.getElementById("mode").style.background="goldenrod"
   document.getElementById("mode").style.color="yellow"
}

function night(){
   document.getElementById("demo").innerHTML="Good Night"
    document.getElementById("mode").style.background="black"
   document.getElementById("mode").style.color="white"
}


