// Task no 1;


word = prompt('enter a word');
revWord = word.split('').reverse().join('');

document.write('<h1>',revWord,'</h1>');

if(!word){
    Swal.fire({
        title: "error!",
        text: "please enter Word Palindrome!",
        icon: "block"
        });
}
else if( word === revWord){
    Swal.fire({
                title: "Good job!",
                text: "The Word is Palindrome!",
                icon: "success"
                });

}
else{
    Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "The Word is not Palindrome!",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
}   

// Task no 2;

// var numArra =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
//  var oddNum =[];
//  var evenNum =[];

//  document.write('<h1>'+'Odd Number'+'</h1>')

//  for(i=1; i<=numArra.length; i+= 2){
//         document.write(i,',',' ')
        
//  }
 
 
//  document.write('<h1>'+'Even Number'+'</h1>')

//  for(i=2; i<=numArra.length; i+= 2){
//         document.write(i,',',' ')
        
//  }
 
// var numberArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// var evenArray = [];
// var oddArray = [];

// for(i=1; i<numberArray.length; i++){
//     if(i % 2 === 0){
//         evenArray.push(i)
//     }else{
//         oddArray.push(i)
//     }
// }
// document.write("<h1>Even Number <h1/>");
// document.write("<p>"+evenArray+','+"<p/>")

// document.write("<h1> Odd Number <h1/>");
// document.write("<p>"+oddArray+"<p/>")

// chapter no 17 to 20


// var colors = ['blue','green','black','yellow','white','purple'];
// var news = colors.slice(2,5)
// document.write(news)

// var num = +prompt('enter a number',3);
// for( i=1; i<=10; i++){
//     document.write(num , ' x ' , i ,' = ',num*i,'<br>')
// }