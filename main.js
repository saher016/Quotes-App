//Use an array to hold the value of the quotes
var arrayOfQuotes = [
    {author: 'Oscar Wilde', 
     quote: 'Be yourself; everyone else is already taken.'
    },
    {author: 'Frank Zappa', 
     quote: 'So many books, so little time.'
    },
    {author: 'Dr. Seuss', 
     quote: 'You know you are in love when you can not fall asleep because reality is finally better than your dreams.'
    },
    {author: 'Mae West', 
     quote: 'You only live once, but if you do it right, once is enough.'
    },
    {author: 'Mahatma Gandhi', 
     quote: 'Be the change that you wish to see in the world.'
    },
    {author: 'Elbert Hubbard', 
     quote: 'Do not take life too seriously. You will not get out alive.'
    },
];

function generateQuote(){
    var random = Math.floor( Math.random()*arrayOfQuotes.length )+1;
    document.getElementById("quoteOutput").innerHTML =  arrayOfQuotes[random].quote;
    document.getElementById("authorOutput").innerHTML = "--" + arrayOfQuotes[random].author;
};






