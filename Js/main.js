$("#open").click(function(){
    $(".sideBar").css("left","0")
    $(".content").css("margin-left", "250px")
});

$(".close").click(function(){
    $(".sideBar").css("left","-250px")
    $(".content").css("margin-left", "0px")
})

$(".singer").click(function(){
    $(this).next().slideToggle(500);
    $(".singerInfo").not($(this).next()).slideUp(500);
})

let countDownDate = new Date("Sep 20, 2024 00:00:00").getTime();
let x = setInterval(function() {
let now = new Date().getTime();
let distance = countDownDate - now;

let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);
$("#day").html(days + "D")
$("#hour").html(hours + "H")
$("#minute").html(minutes + "M")
$("#second").html(seconds + "S")
});

let textAreaValue = document.querySelector("textarea");
let charMessage = document.querySelector("#charMessage");
let charNum = document.querySelector("#charNum");
textAreaValue.addEventListener("keyup", function(){
    if(textAreaValue.value != ""){
        charNum.innerHTML = 100 - textAreaValue.value.length;
        if(charNum.innerHTML < 0){
            charNum.innerHTML = "Out of Charachters";
            charMessage.innerHTML = ""
        }
        else{
            charNum.innerHTML =charNum.innerHTML = 100 - textAreaValue.value.length;
            charMessage.innerHTML = "Character Remaining";
        }
        
    }
})


$(".loading").fadeOut(1500, function () {
    $(".loading").removeClass("d-flex")
})

document.getElementById("singer-4").addEventListener("click", function() {
    let singerElement = this; 
    if (singerElement.style.borderBottom === "none") {
        setTimeout(function() {
            singerElement.style.borderBottom = "1px solid black";
        }, 501);
    } else {
        singerElement.style.borderBottom = "none";
    }
});