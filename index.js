// Variables for each li
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

  //Red PIll


//Assigning each frontImage to a variable
  let firstCardImg = document.getElementById('frontImage1')
  let secondCardImg = document.getElementById('frontImage2')
  let thirdCardImg = document.getElementById('frontImage3')


// Function for each li to replace image
//  Replacing leftWings
  function leftWingPlayers() {
   left.addEventListener('click', (e) => {
   e.preventDefault()
    firstCardImg.src = img1.src;
    secondCardImg.src = img2.src;
    thirdCardImg.src = img3.src;
})}


 //Replacing centers
  function centerPlayers() {
   center.addEventListener('click', (e) => {
   e.preventDefault()
    firstCardImg.src = img1f.src;
    secondCardImg.src = img2f.src;
    thirdCardImg.src = img3f.src;
})}
//  Replacing rightWings
//  function rightWingPlayers() {
//    right.addEventListener('click', (e) => {
//    e.preventDefault()
//     firstCardImg.src = img1rw.src;
//     secondCardImg.src = img2rw.src;
//     thirdCardImg.src = img3rw.src;
// })}

// // Invoking the functions
// leftWingPlayers();
// centerPlayers();
// rightWingPlayers(); 



//Create an onClick for each children under the parent(#navigation) li
//Once clicked, a new image of that position will appear in each card from parent(.allCards) 





// Right Wing
fetch("https://statsapi.web.nhl.com/api/v1/people/8476880")
.then(res => res.json())
.then(data => 
tom(data))



const firstDes = document.querySelector('.position1')
function tom(data) {
right.addEventListener('click', (e) => {
   e.preventDefault() 
const num1 = document.getElementById('number1')
const firstPara = document.getElementById('firstP')
const firstParap = document.getElementById('firstPP')
const firstParapp = document.getElementById('firstPPP')
const firstParappp = document.getElementById('firstPPPP')
const firstName = data.people[0]
num1.textContent = `${'# '} ${firstName.primaryNumber}`
firstPara.textContent = `${'Full Name: '} ${firstName.fullName}`
firstParap.textContent = `${'Birth Date: '} ${firstName.birthDate}`
firstParapp.textContent = `${'Nationality: '} ${firstName.nationality}`
firstParappp.textContent = `${'Age: '} ${firstName.currentAge}`
     firstCardImg.src = img1rw.src;
    secondCardImg.src = img2rw.src;
    thirdCardImg.src = img3rw.src;;
})}

fetch("https://statsapi.web.nhl.com/api/v1/people/8471698")
.then(res => res.json())
.then(data => 
tj(data))

const secondDes = document.querySelector('.position2')
function tj(data) {
right.addEventListener('click', (e) => {
   e.preventDefault() 
const num2 = document.getElementById('number2')
const secondPara = document.getElementById('secondP')
const secondParap = document.getElementById('secondPP')
const secondParapp= document.getElementById('secondPPP')
const secondParappp = document.getElementById('secondPPPP')
const firstName = data.people[0]
num2.textContent = `${'# '} ${firstName.primaryNumber}`
secondPara.textContent = `${'Full Name: '} ${firstName.fullName}`
secondParap.textContent = `${'Birth Date: '} ${firstName.birthDate}`
secondParapp.textContent = `${'Nationality: '} ${firstName.nationality}`
secondParappp.textContent = `${'Age: '} ${firstName.currentAge}`
     firstCardImg.src = img1.src;
     firstCardImg.src = img1rw.src;
    secondCardImg.src = img2rw.src;
    thirdCardImg.src = img3rw.src;;
})}

fetch("https://statsapi.web.nhl.com/api/v1/people/8477903")
.then(res => res.json())
.then(data => 
garnet(data))

const thirdDes = document.querySelector('.position3')
function garnet(data) {
right.addEventListener('click', (e) => {
   e.preventDefault()
const num3 = document.getElementById('number3') 
const thirdPara = document.getElementById('thirdP')
const thirdParap = document.getElementById('thirdPP')
const thirdParapp = document.getElementById('thirdPPP')
const thirdParappp = document.getElementById('thirdPPPP')
const firstName = data.people[0]
num3.textContent = `${'# '} ${firstName.primaryNumber}`
thirdPara.textContent = `${'Full Name: '} ${firstName.fullName}`
thirdParap.textContent = `${'Birth Date: '} ${firstName.birthDate}`
thirdParapp.textContent = `${'Nationality: '} ${firstName.nationality}`
thirdParappp.textContent = `${'Age: '} ${firstName.currentAge}`
    firstCardImg.src = img1rw.src;
    secondCardImg.src = img2rw.src;
    thirdCardImg.src = img3rw.src;;
})}




//Center
fetch("https://statsapi.web.nhl.com/api/v1/people/8475343")
.then(res => res.json())
.then(data => 
nic(data))

const firstsDes = document.querySelector('.position1')
function nic(data) {
center.addEventListener('click', (e) => {
   e.preventDefault() 
const num1 = document.getElementById('number1')
const firstPara = document.getElementById('firstP')
const firstParap = document.getElementById('firstPP')
const firstParapp = document.getElementById('firstPPP')
const firstParappp = document.getElementById('firstPPPP')
const firstName = data.people[0]
num1.textContent = `${'# '} ${firstName.primaryNumber}`
firstPara.textContent = `${'Full Name: '} ${firstName.fullName}`
firstParap.textContent = `${'Birth Date: '} ${firstName.birthDate}`
firstParapp.textContent = `${'Nationality: '} ${firstName.nationality}`
firstParappp.textContent = `${'Age: '} ${firstName.currentAge}`
    firstCardImg.src = img1f.src;
    secondCardImg.src = img2f.src;
    thirdCardImg.src = img3f.src;;
})}

fetch("https://statsapi.web.nhl.com/api/v1/people/8474189")
.then(res => res.json())
.then(data => 
lars(data))

const secondsDes = document.querySelector('.position2')
function lars(data) {
center.addEventListener('click', (e) => {
   e.preventDefault() 
const num2 = document.getElementById('number2')
const secondPara = document.getElementById('secondP')
const secondParap = document.getElementById('secondPP')
const secondParapp= document.getElementById('secondPPP')
const secondParappp = document.getElementById('secondPPPP')
const firstName = data.people[0]
num2.textContent = `${'# '} ${firstName.primaryNumber}`
secondPara.textContent = `${'Full Name: '} ${firstName.fullName}`
secondParap.textContent = `${'Birth Date: '} ${firstName.birthDate}`
secondParapp.textContent = `${'Nationality: '} ${firstName.nationality}`
secondParappp.textContent = `${'Age: '} ${firstName.currentAge}`
     firstCardImg.src = img1.src;
     firstCardImg.src = img1f.src;
    secondCardImg.src = img2f.src;
    thirdCardImg.src = img3f.src;;
})}

fetch("https://statsapi.web.nhl.com/api/v1/people/8475744")
.then(res => res.json())
.then(data => 
ev(data))

const thirdsDes = document.querySelector('.position3')
function ev(data) {
center.addEventListener('click', (e) => {
   e.preventDefault()
const num3 = document.getElementById('number3') 
const thirdPara = document.getElementById('thirdP')
const thirdParap = document.getElementById('thirdPP')
const thirdParapp = document.getElementById('thirdPPP')
const thirdParappp = document.getElementById('thirdPPPP')
const firstName = data.people[0]
num3.textContent = `${'# '} ${firstName.primaryNumber}`
thirdPara.textContent = `${'Full Name: '} ${firstName.fullName}`
thirdParap.textContent = `${'Birth Date: '} ${firstName.birthDate}`
thirdParapp.textContent = `${'Nationality: '} ${firstName.nationality}`
thirdParappp.textContent = `${'Age: '} ${firstName.currentAge}`
     firstCardImg.src = img1f.src;
    secondCardImg.src = img2f.src;
    thirdCardImg.src = img3f.src;;
})}


// Left Wing

fetch("https://statsapi.web.nhl.com/api/v1/people/8474176")
.then(res => res.json())
.then(data => 
carl(data))

const firstyDes = document.querySelector('.position1')
function carl(data) {
left.addEventListener('click', (e) => {
   e.preventDefault() 
const num1 = document.getElementById('number1')
const firstPara = document.getElementById('firstP')
const firstParap = document.getElementById('firstPP')
const firstParapp = document.getElementById('firstPPP')
const firstParappp = document.getElementById('firstPPPP')
const firstName = data.people[0]
num1.textContent = `${'# '} ${firstName.primaryNumber}`
firstPara.textContent = `${'Full Name: '} ${firstName.fullName}`
firstParap.textContent = `${'Birth Date: '} ${firstName.birthDate}`
firstParapp.textContent = `${'Nationality: '} ${firstName.nationality}`
firstParappp.textContent = `${'Age: '} ${firstName.currentAge}`
     firstCardImg.src = img1.src;
    secondCardImg.src = img2.src;
    thirdCardImg.src = img3.src;;
})}

fetch("https://statsapi.web.nhl.com/api/v1/people/8471214")
.then(res => res.json())
.then(data => 
alex(data))

const secondyDes = document.querySelector('.position2')
function alex(data) {
left.addEventListener('click', (e) => {
   e.preventDefault() 
const num2 = document.getElementById('number2')
const secondPara = document.getElementById('secondP')
const secondParap = document.getElementById('secondPP')
const secondParapp= document.getElementById('secondPPP')
const secondParappp = document.getElementById('secondPPPP')
const firstName = data.people[0]
num2.textContent = `${'# '} ${firstName.primaryNumber}`
secondPara.textContent = `${'Full Name: '} ${firstName.fullName}`
secondParap.textContent = `${'Birth Date: '} ${firstName.birthDate}`
secondParapp.textContent = `${'Nationality: '} ${firstName.nationality}`
secondParappp.textContent = `${'Age: '} ${firstName.currentAge}`
     firstCardImg.src = img1.src;
    secondCardImg.src = img2.src;
    thirdCardImg.src = img3.src;;
})}

fetch("https://statsapi.web.nhl.com/api/v1/people/8475149")
.then(res => res.json())
.then(data => 
marc(data))

const thirdyDes = document.querySelector('.position3')
function marc(data) {
left.addEventListener('click', (e) => {
   e.preventDefault()
const num3 = document.getElementById('number3') 
const thirdPara = document.getElementById('thirdP')
const thirdParap = document.getElementById('thirdPP')
const thirdParapp = document.getElementById('thirdPPP')
const thirdParappp = document.getElementById('thirdPPPP')
const firstName = data.people[0]
num3.textContent = `${'# '} ${firstName.primaryNumber}`
thirdPara.textContent = `${'Full Name: '} ${firstName.fullName}`
thirdParap.textContent = `${'Birth Date: '} ${firstName.birthDate}`
thirdParapp.textContent = `${'Nationality: '} ${firstName.nationality}`
thirdParappp.textContent = `${'Age: '} ${firstName.currentAge}`
     firstCardImg.src = img1.src;
    secondCardImg.src = img2.src;
    thirdCardImg.src = img3.src;;
})}

//button

function button() {
   document.getElementById('image')
   .style.display = "block";
   document.getElementById('button')
   .style.display = "none";
}

//3rd event listener 

const title = document.querySelector(".players")

function alertTitle () {
alert ('2018 Stanley Cup Champs!')
}

title.addEventListener("click", alertTitle, false)


















































//right wing fetch
// const fetchTom = fetch("https://statsapi.web.nhl.com/api/v1/people/8471698")
// .then(res => res.json())
// const fetchTJ = fetch("https://statsapi.web.nhl.com/api/v1/people/8476880")
// .then(res => res.json())
// const fetchGarnet = fetch("https://statsapi.web.nhl.com/api/v1/people/8477903")
// .then(res => res.json())

//center
// const fetchNic = fetch("https://statsapi.web.nhl.com/api/v1/people/8475343")
// .then(res => res.json())
// const fetchLars = fetch("https://statsapi.web.nhl.com/api/v1/people/8474189")
// .then(res => res.json())
// const fetchEv = fetch("https://statsapi.web.nhl.com/api/v1/people/8475744")
// .then(res => res.json())

//left wing
// const fetchCarl = fetch("https://statsapi.web.nhl.com/api/v1/people/8474176")
// .then(res => res.json())
// const fetchAlex = fetch("https://statsapi.web.nhl.com/api/v1/people/8471214")
// .then(res => res.json())
// const fetchMarcus = fetch("https://statsapi.web.nhl.com/api/v1/people/8475149")
// .then(res => res.json())