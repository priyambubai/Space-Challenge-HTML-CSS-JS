document.querySelector(".expand-icon").addEventListener("click", function () {
    document.querySelector(".top-tab").style.display = "inline-block";
    document.querySelector(".close-icon").style.display = "inline-block";
})

document.querySelector(".close-icon").addEventListener("click", function () {
    document.querySelector(".top-tab").style.display = "none";
    document.querySelector(".close-icon").style.display = "none";
})