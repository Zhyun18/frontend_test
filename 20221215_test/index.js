let btnList = document.querySelectorAll(".btnList li")

btnList.forEach((btn,idx) => {
    btn.addEventListener("click", function() {
        document.querySelector(".slideList").style.transform = `translate(${idx * -100}%) `
    });
});

let gnb = document.getElementById("gnb");
gnb.addEventListener("click", function(e) {
    if(e.target === e.currentTarget)
    setTimeout(function() {
        gnb.classList.remove("on");
    },2000);
});