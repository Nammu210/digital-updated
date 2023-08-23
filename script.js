
let runH = document.getElementById("h")
let runM = document.getElementById("m")
let runS = document.getElementById("s")
let ampm = document.getElementById("namrata1")
let clock = () =>{
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    let msg = document.getElementById("box7")
if(hours>8 && hours<12){
    msg.innerText = "Wake up good morning"
}else if(hours>12 && hours<17){
    msg.innerHTML = "have lunch, good afternoon"
}else if(hours>17 && hours<24){
    msg.innerHTML = "good evening, go club and do party"
}else{
    msg.innerText = "have dinner, good night"
}
  
    runH.innerHTML = hours;
    runM.innerHTML = minutes;
    runS.innerHTML = seconds;
}
setInterval(() =>{
    clock();
}, 1000)


let wake = document.getElementById("wakeup")
let lunch = document.getElementById("lunch")
let nap = document.getElementById("nap")
let night = document.getElementById("night")
let button = document.getElementById("box4")
let msg2 = document.getElementById("box3")
let img = document.getElementById("box8")

button.addEventListener("click", () =>{
    console.log("namu");
    let time = new Date();
    let hours = time.getHours();
    console.log(hours);
    console.log("lunch.val:",lunch.value);
    if(hours === parseInt(wake.value)){
        msg2.innerHTML = "have coffee"
       
    }else if(hours === parseInt(lunch.value)){
        console.log("In Lunch")
        msg2.innerHTML = "have some tasty food in a lunch"
        img.src="./Component 31 – 1.png"
    }else if(hours === parseInt(nap.value)){
        msg2.innerHTML = "take some nap after lunch"
        img.src="./lunch_image.png"
    }else if(hours === parseInt(night.value)){
        msg2.innerHTML = "Go and sleep"
        img.src="./Component 32 – 1.png";
    }
    let bt = document.getElementById("wakeup");
    let btext = bt.options[bt.selectedIndex].textContent;
    let bPrint = document.querySelector('#bt');
    bPrint.textContent = btext ;


    let lt = document.getElementById("lunch");
    let ltext = lt.options[lt.selectedIndex].textContent;
    let lPrint = document.querySelector('#lt');
    lPrint.textContent = ltext ;

    let nt = document.getElementById("nap");
    let ntext = nt.options[nt.selectedIndex].textContent;
    let nPrint = document.querySelector('#nt');
    nPrint.textContent = ntext ;

    let wt = document.getElementById("night");
    let wtext = wt.options[wt.selectedIndex].textContent;
    let wPrint = document.querySelector('#wt');
    wPrint.textContent = wtext ;
})

