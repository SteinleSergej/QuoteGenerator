const quoteTXT = document.getElementById('quote');
const btnNewQuotes = document.getElementById('quote-btn');
const btnTwitter = document.getElementById('twitter-btn');
const author = document.getElementById('author');


btnNewQuotes.addEventListener('click', ()=>{
    newQuote();
});

btnTwitter.addEventListener('click', ()=>{
//   https://twitter.com/intent/tweet
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteTXT.textContent} - ${author.textContent}`;

    window.open(twitterUrl,'_blank');
});
let apiQuotes = [];

//Show new Quote
function newQuote(){
    quoteTXT.innerHTML = ''
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    quoteTXT.innerHTML = quote['text'];
    
    if(!quote.author){
        author.innerHTML = "Unknown"
    }else{
        author.innerHTML = quote['author'];
    }


}
//Get Quotes From API
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';

    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
    }catch(error){

    }
}


//On Load
getQuotes();