let nameEl = document.getElementById("in1-el")
let passEl = document.getElementById("in2-el")
let mailEl = document.getElementById("in3-el")
let btnEl = document.getElementById("btn-el")

let p1El = document.getElementById("p1_")
let div_sgn = document.querySelector(".sgn-div")
let signEl = document.querySelector(".sign1")

let up1El = document.querySelector(".up1")
let up2El = document.querySelector(".up2")
let up3El = document.querySelector(".up3")
let up4El = document.querySelector(".up4")

let in1El = document.querySelector(".in1")
let in2El = document.querySelector(".in2")
let in3El = document.querySelector(".in3")

let x1 = 0
let x2 = 0
let count = 0

function signup(){
    if((nameEl.value.length == 0 || passEl.value.length == 0 || mailEl.value.length == 0) && count == 0){
        alert('Enter all fields')
        count = 1
    }
    else if((nameEl.value.length == 0 || passEl.value.length == 0 || mailEl.value.length == 0) && count >= 1){
        alert('Enter all fields')
        count++
    }
    else{
        count = 0
        nameEl.value = ""
        passEl.value = ""
        mailEl.value = ""
        div_sgn.innerHTML = "<p class='pop'>Succesfully signed up. Now sign in</p>"
        x2 = 1
    }
}

function signin1(){
    if((nameEl.value.length == 0 || passEl.value.length == 0) && count == 0){
        alert('Enter all fields')
        count = 1
    }
    else if((nameEl.value.length == 0 || passEl.value.length == 0) && count >= 1){
        alert('Enter all fields')
        count++
    }
    else{
        up1El.remove()
        up2El.remove()
        up3El.remove()
        up4El.remove()
        in1El.remove()
        in2El.remove()
        in3El.remove()
        div_sgn.innerHTML = "<p class='pop'>Succesfully Signed in</p>"
        p1El.innerHTML = ""
        x2 = -1
        count = 0
    }
}

function signin(){
    if(x1 === 0 && x2 === 0){
        div_sgn.innerHTML = "<button id='btn-el' onclick='signin1()' class='sgn-up'>SignIn</button>"
        p1El.textContent = "Don't have an account? SignUp"
        x1 = 1
    }
    else if(x1 === 0 && x2 === 1){
        div_sgn.innerHTML = "<button id='btn-el' onclick='signin1()' class='sgn-up'>SignIn</button>"
        p1El.textContent = "Don't have an account? SignUp"
        x1 = 1
    }
    else if(x1 === 1 && x2 === -1){
        div_sgn.innerHTML = "<button id='btn-el' onclick='signup()' class='sgn-up'>SignUp</button>"
        p1El.textContent = "Have an account? SignIn"
        x1 = 0
    }
    else{
        div_sgn.innerHTML = "<button id='btn-el' onclick='signup()' class='sgn-up'>SignUp</button>"
        p1El.textContent = "Have an account? SignIn"
        x1 = 0
    }
}