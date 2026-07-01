const quotes = [
    {
      quote: "The best way to get started is to quit talking and begin doing.",
      author: "Walt Disney"
    },
    {
      quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      author: "Winston Churchill"
    },
    {
      quote: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt"
    },
    {
      quote: "Dream big and dare to fail.",
      author: "Norman Vaughan"
    },
    {
      quote: "Don't watch the clock; do what it does. Keep going.",
      author: "Sam Levenson"
    },
    {
      quote: "Everything you can imagine is real.",
      author: "Pablo Picasso"
    },
    {
      quote: "Your only limit is your mind.",
      author: "Unknown"
    },
    {
      quote: "Small steps every day lead to big results.",
      author: "Unknown"
    },
    {
      quote: "Discipline beats motivation.",
      author: "Unknown"
    },
    {
      quote: "Success begins with self-belief.",
      author: "Unknown"
    },
    {
      quote: "Do something today your future self will thank you for.",
      author: "Sean Patrick Flanery"
    },
    {
      quote: "Action is the foundational key to all success.",
      author: "Pablo Picasso"
    },
    {
      quote: "Great things never come from comfort zones.",
      author: "Unknown"
    },
    {
      quote: "Difficult roads often lead to beautiful destinations.",
      author: "Unknown"
    },
    {
      quote: "Stay hungry. Stay foolish.",
      author: "Steve Jobs"
    },
    {
      quote: "The future depends on what you do today.",
      author: "Mahatma Gandhi"
    },
    {
      quote: "It always seems impossible until it's done.",
      author: "Nelson Mandela"
    },
    {
      quote: "Opportunities don't happen. You create them.",
      author: "Chris Grosser"
    },
    {
      quote: "Learn as if you will live forever.",
      author: "Mahatma Gandhi"
    },
    {
      quote: "Success is the sum of small efforts repeated daily.",
      author: "Robert Collier"
    },
    {
      quote: "Be stronger than your excuses.",
      author: "Unknown"
    },
    {
      quote: "Don't stop until you're proud.",
      author: "Unknown"
    },
    {
      quote: "Push yourself because no one else is going to do it for you.",
      author: "Unknown"
    },
    {
      quote: "Progress, not perfection.",
      author: "Unknown"
    },
    {
      quote: "Be fearless in the pursuit of what sets your soul on fire.",
      author: "Jennifer Lee"
    },
    {
      quote: "The harder you work, the luckier you get.",
      author: "Gary Player"
    },
    {
      quote: "Work hard in silence. Let success make the noise.",
      author: "Frank Ocean"
    },
    {
      quote: "Success doesn't come to you. You go to it.",
      author: "Marva Collins"
    },
    {
      quote: "Focus on progress, not perfection.",
      author: "Unknown"
    },
    {
      quote: "Every accomplishment starts with the decision to try.",
      author: "John F. Kennedy"
    },
    {
      quote: "Nothing worth having comes easy.",
      author: "Theodore Roosevelt"
    },
    {
      quote: "Failure is another stepping stone to greatness.",
      author: "Oprah Winfrey"
    },
    {
      quote: "Stay positive, work hard, make it happen.",
      author: "Unknown"
    },
    {
      quote: "A little progress each day adds up to big results.",
      author: "Satya Nani"
    },
    {
      quote: "You miss 100% of the shots you don't take.",
      author: "Wayne Gretzky"
    },
    {
      quote: "Don't limit your challenges. Challenge your limits.",
      author: "Unknown"
    },
    {
      quote: "Hard work beats talent when talent doesn't work hard.",
      author: "Tim Notke"
    },
    {
      quote: "Make each day your masterpiece.",
      author: "John Wooden"
    },
    {
      quote: "Turn your dreams into plans.",
      author: "Unknown"
    },
    {
      quote: "Be so good they can't ignore you.",
      author: "Steve Martin"
    },
    {
      quote: "Consistency creates success.",
      author: "Unknown"
    },
    {
      quote: "The secret of getting ahead is getting started.",
      author: "Mark Twain"
    },
    {
      quote: "The only way to achieve the impossible is to believe it is possible.",
      author: "Charles Kingsleigh"
    },
    {
      quote: "Success is earned, not given.",
      author: "Unknown"
    },
    {
      quote: "Keep your face always toward the sunshine.",
      author: "Walt Whitman"
    },
    {
      quote: "One day or day one. You decide.",
      author: "Unknown"
    },
    {
      quote: "Never give up on a dream because of the time it will take.",
      author: "Earl Nightingale"
    },
    {
      quote: "If you can dream it, you can do it.",
      author: "Walt Disney"
    },
    {
      quote: "Success is built one day at a time.",
      author: "Unknown"
    },
    {
      quote: "Your future is created by what you do today, not tomorrow.",
      author: "Robert Kiyosaki"
    }
  ];

  let quote = document.querySelector("#quote")
  let author = document.querySelector("#author")
  const btn = document.querySelector(".btn")

// User:
// Click Button To Genrate Quote

// Program



btn.addEventListener("click", () => {
    // Generate Random quote 
      let randomQuote =  Math.floor(Math.random() * quotes.length)
      // Display The Content
        quote.textContent = `“ ${quotes[randomQuote].quote}“`
        author.textContent = `-${quotes[randomQuote].author}-`
    
})

