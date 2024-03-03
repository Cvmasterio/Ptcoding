let words = document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length -1;
words[currentWordIndex].style.opacity = "1";

let changeText = ()=>{
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter,i)=>{
        setTimeout(() => {
            letter.className = "letter out";
        },i * 80);
    });
    nextWord.style.opacity="1";
    Array.from(nextWord.children).forEach((letter,i)=>{
        letter.className = "letter behind";
        setTimeout(() => {
            letter.className = "letter in";
        },340 + i * 80);
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};
changeText();
setInterval(changeText,3000)


// circle skilll ////////////////////////
const circles = document.querySelectorAll('.circle');
circles.forEach(elem => {
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360 / dots;

    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;
    const pointsMarked = elem.querySelectorAll('.points');
    for(let i =0; i<percent ; i++){
        pointsMarked[i].classList.add('marked')
    }
});

// mix it up porfolio sectoion
document.addEventListener('DOMContentLoaded', function() {
    var mixer = mixitup('.porfolio-gallery');
});


// active menu
let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll",activeMenu);

//sticky navbar///////////////////////////
const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",this.window.scrollY > 50)
})

//toogle navbar///////////////////////////
let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}


document.addEventListener("DOMContentLoaded", function() {
    const serviceBtns = document.querySelectorAll('.service-btn');

    serviceBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const popup = this.querySelector('.popup-overlay');
            popup.style.display = 'block';
        });
    });

    const closeBtns = document.querySelectorAll('.close-btn');

    closeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const popup = this.closest('.popup-overlay');
            popup.style.display = 'none';
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Ambil tombol skill
    const skillButton = document.getElementById('skillButton');

    // Ambil semua lingkaran keterampilan
    const skillCircles = document.querySelectorAll('.circle');

    // Tambahkan event listener ke tombol skill
    skillButton.addEventListener('click', function() {
        // Iterasi melalui setiap lingkaran keterampilan
        skillCircles.forEach(circle => {
            // Tambahkan kelas "rotate" untuk memulai animasi putaran
            circle.classList.add('rotate');
        });
    });
});
