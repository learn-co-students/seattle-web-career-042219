
























// //BACK END FUNCTIONS

// //random number 12 or less

// //(1..12).to_a.sample

// function generateNumber() {
//     return Math.ceil(Math.random() * 12);
// }

// //random hex color
// function randomColor() {
//     return '#' + '0123456789abcdef'.split('').map(function (v, i, a) {
//         return i > 5 ? null : a[Math.floor(Math.random() * 16)]
//     }).join('');
// }

// const textColor = "lightgreen";
// const shadowColor = "#ccff00";
// const backgroundColor = "#010e04f0";
// // const textColor = randomColor();
// // const shadowColor = randomColor();
// // const backgroundColor = randomColor();

// // FRONT END CODE
// document.addEventListener("DOMContentLoaded", () => {

//     document.body.style.fontFamily = "comic sans ms";

// // update ids
//     document.querySelectorAll("li").forEach((item) => {
//         let shortName = item.textContent.split(" ");
//         item.id = shortName[shortName.length-1].toLowerCase();
//     });


// //add cat list
//     var newDiv = document.createElement("div");
//     var newList = document.createElement("ul");
//     newDiv.appendChild(newList);
//     setInterval(() => {
//         for(var i=0;i<2;i++) {
//             const numberOfCats = generateNumber();
//             var thisItem = document.createElement("li");
//             thisItem.className = "cat";
//             thisItem.innerText = `Here are ${numberOfCats} cats. Shall we dance? `;
//             for(var j=0;j<numberOfCats;j++) {
//                 thisItem.innerText += " 🐈 ";
//             }
//             newList.appendChild(thisItem);
//         }
//     }, 200)
//     document.querySelector(".container").appendChild(newDiv);


// // //clear cat list
// //     setInterval(() => {
// //         document.querySelectorAll("li.cat").forEach((x) => {
// //             x.parentElement.removeChild(x);
// //         })
// //     },3000)


// // add new colors
//     document.body.style.backgroundColor = backgroundColor;
//     document.body.style.color = textColor;
//     // document.getElementById("salmon").style.color = "red";
//     document.body.style.textShadow = `0px 3px 12px ${shadowColor}`;

// // add image
//     const catGif = document.createElement("img");
//     catGif.id = "picture";
//     catGif.src = "https://media3.giphy.com/media/CjmvTCZf2U3p09Cn0h/giphy.gif?cid=790b76115cf02c073650366355eafb88&rid=giphy.gif";
//     catGif.style.cssFloat = "right"
//     document.querySelector("h1").appendChild(catGif)

// // screen flicker
//     setInterval(() => {
//         document.querySelectorAll("li").forEach((item) => {
//             item.style.opacity = (generateNumber() + 8) / 12;
//             // var rect = item.getBoundingClientRect();
//             // console.log(rect.top, rect.right, rect.bottom, rect.left);            
//             // item.style.opacity = rect.top/window.innerHeight;
//         })
//         // document.getElementById("salmon").style.color === "blue" ? 
//         //     document.getElementById("salmon").style.color = "red" :
//         //     document.getElementById("salmon").style.color = "blue";
//     }, 80)
// });