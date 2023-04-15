for (var i = 0; i < document.querySelectorAll(".destination-body-heading-tab").length; i++) {
    document.querySelectorAll(".destination-body-heading-tab")[i].addEventListener("click", function () {
        changeDestination(this.innerHTML);
    })
}

function changeDestination(key) {
    switch (key) {
        case "Moon":
            changeBody(0, "Moon", "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.");
            changeFooter("384,400 km", "3 days");
            changeImage("moon");
            break;

        case "Mars":
            changeBody(1, "Mars", "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!");
            changeFooter("225 mil. km", "9 months");
            changeImage("mars");
            break;

        case "Titan":
            changeBody(2, "Titan", "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.");
            changeFooter("1.6 bil. km", "7 years");
            changeImage("titan");
            break;

        case "Europa":
            changeBody(3, "Europa", "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.");
            changeFooter("628 mil. km", "3 years");
            changeImage("europa");
            break;

        default:
            break;
    }
}

function changeBody(i, destination, paragraph) {
    document.querySelectorAll(".destination-body-heading-tab")[i].classList.add("destination-body-heading-active-tab");
    for (var j = 0; j < document.querySelectorAll(".destination-body-heading-tab").length; j++) {
        if (j !== i) {
            document.querySelectorAll(".destination-body-heading-tab")[j].classList.remove("destination-body-heading-active-tab");
        }
    }
    document.querySelector(".destination-body-h1").innerHTML = destination;
    document.querySelector(".destination-body-p").innerHTML = paragraph;
}

function changeFooter(distance, time) {
    document.querySelector(".destination-body-footer1 .destination-body-footer-h2").innerHTML = distance;
    document.querySelector(".destination-body-footer2 .destination-body-footer-h2").innerHTML = time;
}

function changeImage(name) {
    document.querySelector(".destination-image").setAttribute("src", "assets/destination/image-" + name + ".webp");
}