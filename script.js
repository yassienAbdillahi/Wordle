let pageBody = document.getElementsByTagName("body")[0];
let instructionsSection = document.getElementById("instructions");

function hideInstructionsSection () {
    instructionsSection.style.display = "none";
}

pageBody.addEventListener("click", hideInstructionsSection);