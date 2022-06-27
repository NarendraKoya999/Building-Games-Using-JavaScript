const cardArray=[
    {
        name:'fries',
        img:'images/fries.png',
    },
    {
        name:'cheeseburger',
        img:'images/cheeseburger.png'
    },
    {
        name:'hotdog',
        img:'images/hotdog.png'
    },
    {
        name:'ice-cream',
        img:'images/ice-cream.png'
    },
    {
        name:'milkshake',
        img:'images/milkshake.png'
    },
    {
        name:'pizza',
        img:'images/pizza.png'
    },
    {
        name:'fries',
        img:'images/fries.png',
    },
    {
        name:'cheeseburger',
        img:'images/cheeseburger.png'
    },
    {
        name:'hotdog',
        img:'images/hotdog.png'
    },
    {
        name:'ice-cream',
        img:'images/ice-cream.png'
    },
    {
        name:'milkshake',
        img:'images/milkshake.png'
    },
    {
        name:'pizza',
        img:'images/pizza.png'
    }
]
cardArray.sort(() => 0.5 - Math.random())
const gridDisplay=document.querySelector('#grid')
const resultDispaly=document.querySelector('#result')
let cardsChoosen=[]
let cardsChoosenIds=[]
const cardsWon=[]

function createBoard(){
    for(let i=0; i<cardArray.length; i++){
        const card=document.createElement('img')
        card.setAttribute('src','images/blank.png')
        card.setAttribute('data-id',i)
        card.addEventListener('click',flipCard)
        gridDisplay.appendChild(card)
        //console.log(card,i)
    }
}
createBoard()
function checkMatch(){
   const cards= document.querySelectorAll('img')
   const optionOneId=cardsChoosenIds[0]
   const optionTwoId=cardsChoosenIds[1]
   console.log(cards)
    console.log('Check For Match')
    if(optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src','images/blank.png')
        cards[optionTwoId].setAttribute('src','images/blank.png')
        alert('You have clicked the same image')
    }
    if(cardsChoosen[0] == cardsChoosen[1]){
        alert('You found a match')
        cards[optionOneId].setAttribute('src','images/white.png')
        cards[optionTwoId].setAttribute('src','images/white.png')
        cards[optionOneId].removeEventListener('click',flipCard)
        cards[optionTwoId].removeEventListener('click',flipCard)
        cardsWon.push(cardsChoosen)
    }else{
        cards[optionOneId].setAttribute('src','images/blank.png')
        cards[optionTwoId].setAttribute('src','images/blank.png')
        alert('Sorry Try again!')
    }
    resultDispaly.textContent=cardsWon.length
    cardsChoosen=[]
    cardsChoosenIds=[]
    if(cardsWon.length == cardArray.length/2){
        resultDispaly.textContent='Congratulations you found them all!!'
    }
}
function flipCard(){
    //console.log(cardArray)
    const cardId=this.getAttribute('data-id')
   // console.log(cardArray[cardId].name)
   cardsChoosen.push(cardArray[cardId].name)
   cardsChoosenIds.push(cardId)
   console.log(cardsChoosen)
   console.log(cardsChoosenIds)
    //console.log('clicked',cardId)
    //console.log(cardsChoosen)
    this.setAttribute('src',cardArray[cardId].img)
    if(cardsChoosen.length === 2){
        setTimeout(checkMatch,500)
    }
}
//console.log(cardArray)
//console.log(gridDisplay)