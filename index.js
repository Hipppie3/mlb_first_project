var cards = document.getElementsByClassName('cardRow')
for(var i=0;i<cards.length;i++) {
  var color = "hsla("+Math.floor(Math.random()*360)+", 50%, 50%, 1)"
  cards[i].style.background = color
}



fetch("https://statsapi.web.nhl.com/api/v1/people/8477474?stats=statsSingleSeason&season=19801981%22")
.then(Response => Response.json())
.then(data => console.log(data))
