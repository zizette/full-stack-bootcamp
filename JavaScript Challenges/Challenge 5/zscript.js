// const menu = document.querySelector(".menu");
// const headers = document.querySelector('header');
// const footers = document.querySelector('footer');



// const myElement = document.querySelectorAll(body);
// alert("length of myElement", myElement.length);
// for (const child of myElement){
//   console.log(child.tagName);
// }
const collection = document.body.children;

let text = "";
for (let i = 0; i < collection.length; i++) {
    console.log(i, collection[i])
  text += collection[i].tagName + "<br>";
  for (let j=0; j < collection[i].length;j++) { console.log(collection[i][j].tagName)}
}
const newDIV = document.createElement("div");
text="";
const para = document.createElement("p");
para.innerHTML = `Hello, World!`;
newDIV.appendChild(para);


newDiv.className="container"
newDiv.style.color="white";
newDiv.style.backgroundColor="blue";
newDIV.style.border="1px solid black";
newDIV.style.fontSize="24px";
newDIV.style.fontFamily="Helvetica";
// End "Challenge 5 - Done with step 1".
