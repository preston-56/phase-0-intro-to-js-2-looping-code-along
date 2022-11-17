
//writeCards() returns an array of thank you messages for each name provided to the function:
function writeCards(names){
    let messages=[];
    for(let i=0;i< names.length;i++){
        messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }   
    return messages;
}

function countDown(n){
    while(n>0){
        console.log(n)
        n--;
    }
    console.log(n)
}
    
