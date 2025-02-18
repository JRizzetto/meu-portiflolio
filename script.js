// Efeito menu de hamburrger
const menuHamburger = document.getElementById("menu-hamburger");
const faXmark = document.getElementById("fa-xmark");
const toggleMenu = document.getElementById("toggle-menu");
const ulHidden = document.getElementById("ul-hidden");

function setToggle() {
    toggleMenu.classList.toggle("hidden");
}

menuHamburger.addEventListener("click", setToggle);
faXmark.addEventListener("click", setToggle);
ulHidden.addEventListener("click", setToggle);



// Nome e texto inicial 
const typewriterName = document.getElementById("typewriter-name");
const typewriterFront = document.getElementById("typewriter-front");
const typewriterText = "<Jefferson Rizzetto>";
const typewriFront = "<Front-end>";

let index = 0;
let indexFront = 0;

function typewriter() {
    if(index < typewriterText.length) {
        typewriterName.innerHTML += typewriterText.charAt(index);
        index++
        setTimeout(typewriter, 100);
    }else {
        setTimeout(typewriterFrontEffect, 500)
    }

    function typewriterFrontEffect() {
        if(indexFront < typewriFront.length) {
            typewriterFront.innerHTML += typewriFront.charAt(indexFront);
            indexFront++
            setTimeout(typewriterFrontEffect, 100);
        }
    }
}

window.onload = () => {
    typewriterName.innerHTML = "";
    typewriterFront.innerHTML = "";
    typewriter();
}

// Mostrar mais projetos
const mostrarMais = document.getElementById("mostrar-mais");
const imagemHidden = document.querySelectorAll(".imagem-container");
let mostrar = 6;
let mostrandoMais = false;

mostrarMais.addEventListener("click", () => {
    if(!mostrandoMais) {
        for(let i = mostrar; i< mostrar + 3; i++) {
            if(imagemHidden[i]) {
                imagemHidden[i].classList.remove("hidden");
            }
        }
        mostrar += 3;

        if(mostrar >= imagemHidden.length) {
            document.getElementById("textButton").innerText = "Mostrar menos";
            document.getElementById("icone-up").classList.remove("hidden");
            document.getElementById("icone-down").style.display = "none";
            mostrandoMais = true;
        }
    }else  {
        for(let i = imagemHidden.length - 1; i >= 6; i--) {
            if(imagemHidden[i]) {
                imagemHidden[i].classList.add("hidden");
            }
        }
        mostrar = 6;
        document.getElementById("textButton").innerText = "Mostrar mais";
        document.getElementById("icone-up").classList.add("hidden");
        document.getElementById("icone-down").style.display = "block";
        mostrandoMais = false;    }
})

//Copiar número do celular
function copyPhone(event) {
    event.preventDefault();
    const phoneNumber = "(11) 94629-8477"

    navigator.clipboard.writeText(phoneNumber).then(() => {
        const message = document.getElementById("copyMessage");

        message.style.display = "flex";
        setTimeout(() => {
            message.style.display = "none";
        }, 2000)
    })
}

// Abrir seção de projetos 
const clickContainer = document.querySelectorAll("#click-container");
const openClass = document.getElementById("open-class");
const xmarkClose = document.getElementById("xmark-close");
const openClassImg = document.getElementById("open-class-img");
const openClassGithub = document.getElementById("open-class-github");

function hiddenProject() {
    openClass.classList.toggle("hidden");
    return;
}

clickContainer.forEach(container => {
    container.addEventListener("click", (e)=> {
        hiddenProject();
        openClassImg.src = e.target.src;
        
        const textGit = container.querySelector(".textLink");
        if(textGit) {
            openClassGithub.href = textGit.textContent;
        }
    })
})

xmarkClose.addEventListener("click", () => {
    hiddenProject();
})

window.addEventListener("click", (e) => {
    if(e.target == openClass) {
        hiddenProject();
    }
})

