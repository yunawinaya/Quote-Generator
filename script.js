const avatars = [
  "https://i.pravatar.cc/150?img=1",
  "https://i.pravatar.cc/150?img=5",
  "https://i.pravatar.cc/150?img=9"
]

const quotes = [
  "Everything happens for a reason - Yuna",
  "Attracted for the appearance, stay for the personality - Yuna",
  "Don't judge a book by its cover - Yuna"
]

function setQuote() {
  const avatar = document.getElementById("avatar");
  const quote = document.getElementById('quote');
  const author = document.getElementById('author');
  const randomIndexAvatar = Math.floor(Math.random() * avatars.length)
  const randomIndexQuote = Math.floor(Math.random() * quotes.length)
  const randomAvatar = avatars[randomIndexAvatar]
  const randomQuote = quotes[randomIndexQuote]
  const quoteParts = randomQuote.split(' - ');
  avatar.innerHTML = avatar.src = randomAvatar;
  quote.innerHTML = quoteParts[0];
  author.innerHTML = `- ${quoteParts[1]}`;
}