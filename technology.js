for (var i = 0; i < document.querySelectorAll(".btn-div").length; i++) {
    document.querySelectorAll(".btn-div")[i].addEventListener("click", function () {
        changeDestination(this.firstElementChild.innerHTML);
    })
}

function changeDestination(key) {
    switch (key) {
        case "1":
            changeBody(0, "Launch vehicle", "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!");
            changeImage("launch-vehicle");
            break;

        case "2":
            changeBody(1, "Spaceport", "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.");
            changeImage("spaceport");
            break;

        case "3":
            changeBody(2, "Space capsule", "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.");
            changeImage("space-capsule");
            break;

        default:
            break;
    }
}

function changeBody(i, type, paragraph) {
    document.querySelectorAll(".btn-div")[i].classList.add("btn-div-active");
    for (var j = 0; j < document.querySelectorAll(".btn-div").length; j++) {
        if (j !== i) {
            document.querySelectorAll(".btn-div")[j].classList.remove("btn-div-active");
        }
    }
    document.querySelector(".technology-h1").innerHTML = type;
    document.querySelector(".technology-p").innerHTML = paragraph;
}

function changeImage(name) {
    document.querySelector(".technology-image-desktop").setAttribute("src", "assets/technology/image-" + name + "-portrait.jpg");
    document.querySelector(".technology-image-mobile").setAttribute("src", "assets/technology/image-" + name + "-landscape.jpg");
}