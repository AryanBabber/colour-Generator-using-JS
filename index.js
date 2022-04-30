let container = document.getElementById('container')
let bgButton = document.getElementById('bg-button')
let hexCode = document.getElementById('hex')

function colourGenerator(){
    newColour= `#${(Math.random()*0xFFFFFF<<0).toString(16).toUpperCase()}`
    console.log(newColour.length)
    if(newColour.length < 7){
        colourGenerator()
    }
}

function colourChange(){
    colourGenerator()
    document.body.style.backgroundColor = newColour
    bgButton.style.color = newColour
    hexCode.innerText = 'Hex Code: ' + newColour

}