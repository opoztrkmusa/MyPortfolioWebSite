const div = document.getElementById("page-wrapper");
const bars = document.querySelector("#bars");
const x = document.querySelector("#x");
const navbar = document.querySelector("#navbar-responsive")
document.body.classList.add("body");

document.addEventListener("DOMContentLoaded",() =>{
    setTimeout(() => {
        div.style.top = "10px";
        div.style.opacity = 1; 
    }, 100);
});




bars.addEventListener("click",() => {
    bars.classList.toggle("hidden");
    x.classList.toggle("hidden");
    x.classList.toggle("rotate-180");



    navbar.classList.toggle("-left-64");

    navbar.classList.toggle("w-full");
});

x.addEventListener("click",() =>{
    navbar.classList.toggle("-left-64");

    navbar.classList.toggle("w-full");
    bars.classList.toggle("hidden");
    x.classList.toggle("hidden");
    x.classList.toggle("rotate-180");
})

const textElements = document.querySelectorAll(".text");

const contents = ["Berat Musa Öpöztürk", "Web Developer"];
let currentIndex = 0;

function animate(htmlElement, content, delay) {
    let counter = 0;

    function addNextCharacter() {
        if (counter < content.length) {
            htmlElement.innerHTML += content[counter];
            counter++;
            setTimeout(addNextCharacter, delay);
        } else {
            setTimeout(deleteText, delay); // Metnin silinmesi için bekleniyor
        }
    }

    function deleteText() {
        let text = htmlElement.innerHTML;
        if (text.length > 0) {
            text = text.slice(0, -1);
            htmlElement.innerHTML = text;
            setTimeout(deleteText, delay);
        } else {
            counter = 0; // Yeniden başlamak için sayaç sıfırlanır
            currentIndex = (currentIndex + 1) % contents.length; // Bir sonraki içeriğe geç
            setTimeout(() => {
                // Yeni bir metin eklemek için animate fonksiyonu tekrar çağırılır
                animate(htmlElement, contents[currentIndex], delay);
            }, delay);
        }
    }

    addNextCharacter(); // Yazılmaya başlanır
}

// Her bir text elementi için animate fonksiyonu çağrılır
textElements.forEach((item) => {
    animate(item, contents[currentIndex], 100); // Her karakterin arasında 100ms bekleme süresi
});
