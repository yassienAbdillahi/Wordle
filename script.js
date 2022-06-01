import { validWords } from "./words.js";

let pageBody = document.getElementsByTagName("body")[0];
let instructionsSection = document.getElementById("instructions");

function hideInstructionsSection () {
    instructionsSection.style.display = "none";
}

pageBody.addEventListener("click", hideInstructionsSection);

document.getElementById("guess1Letter1").innerHTML = validWords[0];