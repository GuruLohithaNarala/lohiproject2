const quotes = [
    "I shall feel rather nervous about meeting a lion",
    "Once a king or queen of Narnia, always a king or queen of Narnia",
    "Things never happen the same way twice.",
    "We must all meet the choice between what is right and what is easy.",
    "All get what they want; they do not always like it."
];

document.getElementById("randomQuote").textContent = quotes[Math.floor(Math.random() * quotes.length)];
