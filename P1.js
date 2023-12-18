 let increasebtn = document.getElementById("btn1")
let decreasebtn = document.getElementById("btn2")
let counter = document.getElementById("myH2")
let rstbtn = document.getElementById("rstbtn")

let count = 0
increasebtn.onclick = function(){
    count +=1
    counter.innerHTML = count
    if(count >=0 ){
        counter.style.backgroundColor = "green"
    }
}

decreasebtn.onclick = function(){
    count -=1
    counter.innerHTML = count
    if(count <0){
        counter.style.backgroundColor = "red"
    }
}

rstbtn.onclick = function(){
    count = 0
    counter.innerHTML = count
    counter.style.backgroundColor = "grey"
}