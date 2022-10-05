 //Variables for each li
const left = document.getElementById('left-wing')
const center = document.getElementById('center')
const right = document.getElementById('right-wing')
// Variables for 3 left wing players
  //Carl Hagelin
    let img1 = document.createElement('img')
    img1.src = "https://media1.giphy.com/media/LPlVRhsYxc8DqMzUuv/200w.webp?cid=ecf05e47dzu02thy7mwy8o4wuxh0s72e9sqiitljoee53gle&rid=200w.webp&ct=g"
  //Alex OvechKin
    let img2 = document.createElement('img')
    img2.src = "https://media0.giphy.com/media/Bo1yZS4qNxvKbvKUIZ/200w.webp?cid=ecf05e47n0vdiuow2zy61nig78iun9dajgh6ul1zilttpoy1&rid=200w.webp&ct=g"
  //Marcus Johansson
    let img3 = document.createElement('img')
    img3.src = "https://media2.giphy.com/media/3otOKoCoW8jXXzftwQ/giphy.gif?cid=ecf05e4791pxh45buvh6acnlqmcw04olvwn5yo36z7l7nxax&rid=giphy.gif&ct=g"
//Variables for 3 center players
  // Nic Dowd
    let img1f = document.createElement('img')
    img1f.src = "https://media0.giphy.com/media/lNROS1omFybOMx5TWP/giphy.gif?cid=ecf05e47flsqy1oakny823fuz6noulh9ggdg511tctnik3u8&rid=giphy.gif&ct=g"
  //Lars Eller
    let img2f = document.createElement('img')
    img2f.src = "https://media1.giphy.com/media/jQtAq7rGnev0lcHgnI/200w.webp?cid=ecf05e47pbfi8qkn168s4byu3efp099mcrmsk1n2i77vptqz&rid=200w.webp&ct=g"
  //Evgeny Kuznetsov
    let img3f = document.createElement('img')
    img3f.src = "https://media2.giphy.com/media/VFZSfV6EmxFQ1dUyHi/200w.webp?cid=ecf05e47atq523z3n3bfhv8v0zhdw6g47hwncw41wj438tbv&rid=200w.webp&ct=g"
//Variables for 3 right wing players
  //T.J. Oshie
    let img1rw = document.createElement('img')
    img1rw.src = "https://media1.giphy.com/media/ieKD7P5B4MFLJ54ZDh/200w.webp?cid=ecf05e47qxi51bs9fowa25yd7dl9p6273tx80iuhwvk1k2hl&rid=200w.webp&ct=g"
  //Tom Wilson
    let img2rw = document.createElement('img')
    img2rw.src = "https://media2.giphy.com/media/SA0XKe3oxqjg4PC6zi/200w.webp?cid=ecf05e47yvdd8d409la6cq3z9agclqxnw7mjgagp8zpu61uq&rid=200w.webp&ct=g"
  //Garnet Hathaway
    let img3rw = document.createElement('img')
    img3rw.src = "https://media3.giphy.com/media/MF1ueXGihs4UyuRazn/200w.webp?cid=ecf05e47yfjy867u9z4gwoohfny3ex5b77dygaph62ai30eb&rid=200w.webp&ct=g"
//Assigning each frontImage to a variable
  let firstCardImg = document.getElementById('frontImage1')
  let secondCardImg = document.getElementById('frontImage2')
  let thirdCardImg = document.getElementById('frontImage3')
// Function for each li to replace image
 // Replacing leftWings
  function leftWingPlayers() {
   left.addEventListener('click', (e) => {
   e.preventDefault()
    firstCardImg.src = img1.src;
    secondCardImg.src = img2.src;
    thirdCardImg.src = img3.src;
   //  backstromDetails()
})}
 //Replacing centers
  function centerPlayers() {
   center.addEventListener('click', (e) => {
   e.preventDefault()
    firstCardImg.src = img1f.src;
    secondCardImg.src = img2f.src;
    thirdCardImg.src = img3f.src;
})}
 //Replacing rightWings
 function rightWingPlayers() {
   right.addEventListener('click', (e) => {
   e.preventDefault()
    firstCardImg.src = img1rw.src;
    secondCardImg.src = img2rw.src;
    thirdCardImg.src = img3rw.src;
})}
//Invoking the functions
leftWingPlayers();
centerPlayers();
rightWingPlayers();


const CarlHagelin = "https://statsapi.web.nhl.com/api/v1/people/8474176"
const nicklasBackstrom = "https://statsapi.web.nhl.com/api/v1/people/8473563"
const tomWilson = "https://statsapi.web.nhl.com/api/v1/people/8476880"
const alexOvechkin = "https://statsapi.web.nhl.com/api/v1/people/8471214"
const tjOshie = "https://statsapi.web.nhl.com/api/v1/people/8471698"
const larsEller= "https://statsapi.web.nhl.com/api/v1/people/8474189"
const marcusJohannson = "https://statsapi.web.nhl.com/api/v1/people/8475149"
const nicDowd = "https://statsapi.web.nhl.com/api/v1/people/8475343"
const garnetHathaway = "https://statsapi.web.nhl.com/api/v1/people/8477903"

fetch(CarlHagelin)
.then(res => res.json())
.then(data =>{
   console.log(data.people[0])
   hagelinDetails(data.people[0])
})

fetch(nicklasBackstrom)
.then(res => res.json())
.then(data =>{
   console.log(data.people[0])
   backstromDetails(data.people[0])
   //playerDetails(data.people[0])
})

fetch(tomWilson)
.then(res => res.json())
.then(data =>{
   console.log(data.people[0])
   wilsonDetails(data.people[0])
   //playerDetails(data.people[0])
})

fetch(alexOvechkin)
.then(res => res.json())
.then(data =>{
   console.log(data.people[0])
   ovechkinDetails(data.people[0])
   //playerDetails(data.people[0])
})

fetch(tjOshie)
.then(res => res.json())
.then(data =>{
   console.log(data.people[0])
   oshieDetails(data.people[0])
   //playerDetails(data.people[0])
})

fetch(larsEller)
.then(res => res.json())
.then(data =>{
   console.log(data.people[0])
   ellerDetails(data.people[0])
   //playerDetails(data.people[0])
})

fetch(marcusJohannson)
.then(res => res.json())
.then(data =>{
   console.log(data.people[0])
   johannsonDetails(data.people[0])
   //playerDetails(data.people[0])
})

fetch(nicDowd)
.then(res => res.json())
.then(data =>{
   console.log(data.people[0])
   dowdDetails(data.people[0])
   //playerDetails(data.people[0])
})

fetch(garnetHathaway)
.then(res => res.json())
.then(data =>{
   console.log(data.people[0])
   hathawayDetails(data.people[0])
   //playerDetails(data.people[0])
})

fetch("https://statsapi.web.nhl.com/api/v1/teams/15?expand=team.roster")
.then(res => res.json())
.then(data => {
   console.log(data)
}
)

function hagelinDetails(playersObj) {
   const position = document.querySelector(".position")
   const firstName = document.querySelector(".name")
   const number = document.querySelector(".number")
   const age = document.querySelector(".birthday")
   const country = document.querySelector(".country")
   position.innerHTML = playersObj.primaryPosition.name
   firstName.innerHTML = playersObj.fullName
   number.innerHTML = playersObj.primaryNumber
   age.innerHTML = playersObj.birthDate
   country.innerHTML = playersObj.birthCountry
}

function backstromDetails(playersObj) {
   const position = document.querySelector(".position1")
   const firstName = document.querySelector(".name1")
   const number = document.querySelector(".number1")
   const age = document.querySelector(".birthday1")
   const country = document.querySelector(".country1")
   position.innerHTML = playersObj.primaryPosition.name
   firstName.innerHTML = playersObj.fullName
   number.innerHTML = playersObj.primaryNumber
   age.innerHTML = playersObj.birthDate
   country.innerHTML = playersObj.birthCountry
}

function wilsonDetails(playersObj) {
   const position = document.querySelector(".position2")
   const firstName = document.querySelector(".name2")
   const number = document.querySelector(".number2")
   const age = document.querySelector(".birthday2")
   const country = document.querySelector(".country2")
   position.innerHTML = playersObj.primaryPosition.name
   firstName.innerHTML = playersObj.fullName
   number.innerHTML = playersObj.primaryNumber
   age.innerHTML = playersObj.birthDate
   country.innerHTML = playersObj.birthCountry
}

function ovechkinDetails(playersObj) {
   const position = document.querySelector(".position3")
   const firstName = document.querySelector(".name3")
   const number = document.querySelector(".number3")
   const age = document.querySelector(".birthday3")
   const country = document.querySelector(".country3")
   position.innerHTML = playersObj.primaryPosition.name
   firstName.innerHTML = playersObj.fullName
   number.innerHTML = playersObj.primaryNumber
   age.innerHTML = playersObj.birthDate
   country.innerHTML = playersObj.birthCountry
}

function oshieDetails(playersObj) {
   const position = document.querySelector(".position4")
   const firstName = document.querySelector(".name4")
   const number = document.querySelector(".number4")
   const age = document.querySelector(".birthday4")
   const country = document.querySelector(".country4")
   position.innerHTML = playersObj.primaryPosition.name
   firstName.innerHTML = playersObj.fullName
   number.innerHTML = playersObj.primaryNumber
   age.innerHTML = playersObj.birthDate
   country.innerHTML = playersObj.birthCountry
}

function ellerDetails(playersObj) {
   const position = document.querySelector(".position5")
   const firstName = document.querySelector(".name5")
   const number = document.querySelector(".number5")
   const age = document.querySelector(".birthday5")
   const country = document.querySelector(".country5")
   position.innerHTML = playersObj.primaryPosition.name
   firstName.innerHTML = playersObj.fullName
   number.innerHTML = playersObj.primaryNumber
   age.innerHTML = playersObj.birthDate
   country.innerHTML = playersObj.birthCountry
}

function johannsonDetails(playersObj) {
   const position = document.querySelector(".position6")
   const firstName = document.querySelector(".name6")
   const number = document.querySelector(".number6")
   const age = document.querySelector(".birthday6")
   const country = document.querySelector(".country6")
   position.innerHTML = playersObj.primaryPosition.name
   firstName.innerHTML = playersObj.fullName
   number.innerHTML = playersObj.primaryNumber
   age.innerHTML = playersObj.birthDate
   country.innerHTML = playersObj.birthCountry
}

function dowdDetails(playersObj) {
   const position = document.querySelector(".position7")
   const firstName = document.querySelector(".name7")
   const number = document.querySelector(".number7")
   const age = document.querySelector(".birthday7")
   const country = document.querySelector(".country7")
   position.innerHTML = playersObj.primaryPosition.name
   firstName.innerHTML = playersObj.fullName
   number.innerHTML = playersObj.primaryNumber
   age.innerHTML = playersObj.birthDate
   country.innerHTML = playersObj.birthCountry
}

function hathawayDetails(playersObj) {
   const position = document.querySelector(".position8")
   const firstName = document.querySelector(".name8")
   const number = document.querySelector(".number8")
   const age = document.querySelector(".birthday8")
   const country = document.querySelector(".country8")
   position.innerHTML = playersObj.primaryPosition.name
   firstName.innerHTML = playersObj.fullName
   number.innerHTML = playersObj.primaryNumber
   age.innerHTML = playersObj.birthDate
   country.innerHTML = playersObj.birthCountry
}



