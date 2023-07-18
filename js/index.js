
var quote = document.getElementById('quote');
var auther = document.getElementById('auther');

var quotsOption = [
    {
        quote: 'Life is what happens when you are busy making other plans',
        auther: '-John Lennon'
    },
    {
        quote: 'Spread love everywhere you go. Let no one ever come to you without leaving happier',
        auther: '-Mother Teresa'
    },
    {
        quote: 'Always remember that you are absolutely unique. Just like everyone else',
        auther: '-Margaret Mead'
    },
    {
        quote: '"Never let the fear of striking out keep you from playing the game"',
        auther: '-Babe Ruth'
    },
    {
        quote: '"Live in the sunshine, swim the sea, drink the wild air"',
        auther: '-Ralph Waldo Emerson'
    },
    {
        quote: '"The only impossible journey is the one you never begin"',
        auther: '-Tony Robbins'
    }


]


function getQuots(){

    var randomQuots= Math.floor(Math.random() * (quotsOption.length) );

    quote.innerHTML= quotsOption[randomQuots].quote;
    auther.innerHTML= quotsOption[randomQuots].auther;


    
    

}