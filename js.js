let h1Elem = document.querySelector('.title')
let butElem =document.querySelector('.btn-1')

h1Elem.addEventListener('click', clickTitle)
butElem.addEventListener('click', buttonEvent)


function clickTitle (){
    console.log('AAA')
}

function buttonEvent () {
    h1Elem.style.color= 'gray'
    h1Elem.style.fontSize = '40px'
}