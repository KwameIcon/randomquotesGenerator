document.addEventListener('DOMContentLoaded', () =>{

    const quotes = [
        "The only way to do great work is to love what we do. - Steve Jobs",
        "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
        "Believe you can and you'er halfway there. - Thoedore Roosevelt",
        "The best way to predict the future is to create it. - peter Drucker",
        "In the middle of every difficulty lies opportunity. - Albert Einstein",
        "You miss 100% of the shots you don't take. - Wayne Gretzky",
        "The only limit to our realization of tomorrow will be our doubts today. - Frankline D. Roosevelt",
        "The greatest glory in living lies not in never faling, but in rising every time we fall. - Nelson Mandela",
        "The secret of getting ahead is getting started. - Mark Twain"
    ];

    const quoteContainer = document.getElementById('quote');
        quoteContainer.innerHTML = quotes[0];


    function generateQuotes(){
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];

        quoteContainer.innerHTML = randomQuote;
    }

    
    setInterval(generateQuotes, 20000);

})