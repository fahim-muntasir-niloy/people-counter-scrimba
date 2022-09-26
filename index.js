// document.getElementById("people").innerText = 6;

let add = document.getElementById("increment")
let rmv = document.getElementById("decrement")
let rrst = document.getElementById("rst")
let ppl = document.getElementById("people")
let sv = document.getElementById("save")
let entries = document.getElementById("p_counts")

let count = 0


function increment() {
    count += 1
    console.log("incremented")
    ppl.innerHTML = count
}

function decrement() {
    count -= 1
    console.log("decremented")
    if (count < 0) {
        ppl.textContent = "No People Today"
        count = 0
    }
    else{
        ppl.innerHTML = count
    }
    
}
function save(){
    // entries.innerText += count+" -- "
    entries.textContent += count+ " -- "
    console.log(count);
}

function reset() {
    count = 0
    // entries.textContent = 
    console.log("reset")
    ppl.innerHTML = count
}