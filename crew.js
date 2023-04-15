for (var i = 0; i < document.querySelectorAll(".crew-page-selector").length; i++) {
    document.querySelectorAll(".crew-page-selector")[i].addEventListener("click", function () {
        changeDestination(this.getAttribute("href")); //this.getAttribute("href") returns #1. #2.....
    })
}

function changeDestination(key) {
    switch (key) {
        case "#1":
            changeDesignation(0, "Commander");
            changeBody("Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.");
            changeImage("douglas-hurley");
            break;

        case "#2":
            changeDesignation(1, "Mission Specialist");
            changeBody("Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.")
            changeImage("mark-shuttleworth");
            break;

        case "#3":
            changeDesignation(2, "Pilot");
            changeBody("Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.");
            changeImage("victor-glover");
            break;

        case "#4":
            changeDesignation(3, "Engineer");
            changeBody("Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.")
            changeImage("anousheh-ansari");
            break;

        default:
            break;
    }
}

function changeDesignation(i, designation) {
    document.querySelectorAll(".crew-page-selector")[i].classList.add("crew-page-selector-active");
    for (var j = 0; j < document.querySelectorAll(".crew-page-selector").length; j++) {
        if (j !== i) {
            document.querySelectorAll(".crew-page-selector")[j].classList.remove("crew-page-selector-active");
        }
    }
    document.querySelector(".crew-body-designation").innerHTML = designation;
}

function changeBody(paragraph) {
    document.querySelector(".crew-body-p").innerHTML = paragraph;
}

function changeImage(name) {
    document.querySelector(".crew-image").setAttribute("src", "assets/crew/image-" + name + ".webp");
}