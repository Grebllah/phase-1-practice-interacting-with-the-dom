const counter = document.querySelector("#counter")
const plusButton = document.querySelector("#plus")
const minusButton = document.querySelector("#minus")
const pauseButton = document.querySelector("#pause")
const submitButton = document.querySelector("#submit")
const heartButton = document.querySelector("#heart")
const subtmitButton = document.querySelector("#submit")
const ul = document.querySelector(".likes")
const pausables = document.querySelectorAll(".pausable")
const form = document.querySelector("#comment-form")
const list = document.querySelector("#list")
const input = document.querySelector("#comment-input")
const likeCount = {}
let intervalID = 0

const counterStart = (e) => {
    if(pauseButton.innerText === "Resume"){
        pauseButton.innerText = "Pause"
        pausables.forEach(pausable => pausable.disabled = false)
    }
    intervalID = setInterval(function(){
        const count = counter.innerText
        counter.innerText = parseInt(`${count}`) + 1
    }, 1000)
}
window.addEventListener("DOMContentLoaded", counterStart)

plusButton.addEventListener("click", function(){
    const count = counter.innerText
    counter.innerText = parseInt(`${count}`) + 1})

minusButton.addEventListener("click", function(){
    const count = counter.innerText
    counter.innerText = parseInt(`${count}`) - 1})

pauseButton.addEventListener("click", function(){
    if(intervalID){
        clearInterval(intervalID)
        intervalID = 0
        pauseButton.innerText = "Resume"
        pausables.forEach(pausable => pausable.disabled = true)       
    }
    else counterStart()
})

form.addEventListener("submit", function(e){
    e.preventDefault()
    const li = list.appendChild(document.createElement("li"))
    li.innerText = input.value
    })

const heartButtonHandler = (e) => {
    const count = counter.innerText
    let key = count
    const li = ul.appendChild(document.createElement("li"))
    
    if (!likeCount[key]) likeCount[key] = 1
    else likeCount[key]++
    li.innerText = `${count} has been liked ${likeCount[key]} times`
}

heartButton.addEventListener("click", heartButtonHandler)