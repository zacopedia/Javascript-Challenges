let btn = document.getElementById('btn');
let ouTput = document.getElementById('output');
let quotes = [
   "“All our dreams can come true, if we have the courage to pursue them.” – Walt Disney –",
   "“The secret of getting ahead is getting started.” – Mark Twain",
   "“I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life and that is why I succeed.” – Michael Jordan",
   "“Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.” – Mary Kay Ash",
   "“The best time to plant a tree was 20 years ago. The second best time is now.” – Chinese Proverb",
   "“Only the paranoid survive.” – Andy Grove",
   "“It’s hard to beat a person who never gives up.” – Babe Ruth",
   "“I wake up every morning and think to myself, ‘how far can I push this company in the next 24 hours.’” – Leah Busque",
   "“If people are doubting how far you can go, go so far that you can’t hear them anymore.” – Michele Ruiz",
   "“We need to accept that we won’t always make the right decisions, that we’ll screw up royally sometimes – understanding that failure is not the opposite of success, it’s part of success.” – Arianna Huffington",
   "“Write it. Shoot it. Publish it. Crochet it, sauté it, whatever. MAKE.” – Joss Whedon",
   "“You’ve gotta dance like there’s nobody watching, love like you’ll never be hurt, sing like there’s nobody listening, and live like it’s heaven on earth.” ― William W. Purkey",
   "“Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.”― Neil Gaiman",
   "“Everything you can imagine is real.”― Pablo Picasso",
   "“When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.” ― Helen Keller",
   "“Do one thing every day that scares you.”― Eleanor Roosevelt",
   "“It’s no use going back to yesterday, because I was a different person then.”― Lewis Carroll",
   "“Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers.” – Socrates",
   "“Do what you feel in your heart to be right – for you’ll be criticized anyway.”― Eleanor Roosevelt",
   "“Happiness is not something ready made. It comes from your own actions.” ― Dalai Lama XIV",
   "“Whatever you are, be a good one.” ― Abraham Lincoln",
   "“The same boiling water that softens the potato hardens the egg. It’s what you’re made of. Not the circumstances.” – Unknown",
   "“If we have the attitude that it’s going to be a great day it usually is.” – Catherine Pulsifier",
   "“You can either experience the pain of discipline or the pain of regret. The choice is yours.”  – Unknown",
];


btn.addEventListener("click", function () {
    
   var randomQuotes = quotes[Math.floor(Math.random() * quotes.length)];
    ouTput.innerHTML = randomQuotes;
    
})

