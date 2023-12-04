

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