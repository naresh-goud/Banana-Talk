var btnTranslate= document.querySelector("#btn-translate")
var txtInput=document.querySelector("#txt-Input")
console.log(txtInput)

btnTranslate.addEventListener ( "click", clickHandler())

function clickHandler() {
    return function clickEventHandler() {
        console.log("clicked")
        console.log("input", txtInput.value);
    }
}
