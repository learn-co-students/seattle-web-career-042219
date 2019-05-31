//BACK END FUNCTIONS

//random number 12 or less
function generateNumber() {
    return Math.ceil(Math.random() * 12);
}

const textColor = "lightgreen";
const shadowColor = "#ccff00";
const backgroundColor = "#010e04f0";

// FRONT END CODE
document.addEventListener("DOMContentLoaded", () => {

// update ids
    document.querySelectorAll("li").forEach((item) => {
        let shortName = item.textContent.split(" ");
        item.id = shortName[shortName.length-1].toLowerCase();
    });


//add cat list
    var newDiv = document.createElement("div");
    var newList = document.createElement("ul");
    newDiv.appendChild(newList);
    setInterval(() => {
        for(var i=0;i<2;i++) {
            const numberOfCats = generateNumber();
            var thisItem = document.createElement("li");
            thisItem.className = "cat";
            thisItem.innerText = `Here are ${numberOfCats} cats. Shall we dance? `;
            for(var j=0;j<numberOfCats;j++) {
                thisItem.innerText += " 🐈 ";
            }
            newList.appendChild(thisItem);
        }
    }, 400)
    document.querySelector(".container").appendChild(newDiv);


//clear cat list
    setInterval(() => {
        document.querySelectorAll("li.cat").forEach((x) => {
            x.parentElement.removeChild(x);
        })
    },10000)

    
// add new colors
    document.body.style.backgroundColor = backgroundColor;
    document.body.style.color = textColor;
    document.body.style.textShadow = `0px 3px 12px ${shadowColor}`;
    
// add image
    const catGif = document.createElement("img");
    catGif.id = "picture";
    catGif.src = "https://media3.giphy.com/media/CjmvTCZf2U3p09Cn0h/giphy.gif?cid=790b76115cf02c073650366355eafb88&rid=giphy.gif";
    catGif.style.cssFloat = "right"
    document.querySelector("h1").appendChild(catGif)

// screen flicker
    setInterval(() => {
        document.querySelectorAll("li").forEach((item) => {
            var rect = item.getBoundingClientRect();
            item.style.opacity = rect.top/window.innerHeight;
        })
    }, 10)
});