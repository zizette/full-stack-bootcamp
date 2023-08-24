PgBtn = document.createElement('button')
bodyD = document.body;
bodyD.appendChild(PgBtn);
PgBtn.innerText = "ZizeButton";
function styling(argElement) {
    argElement.style.background = "#3498db"
    argElement.style.FontSize = "16px"
    argElement.style.text = "#ffffff"
    argElement.style.cursor = "pointer"
    argElement.style.border = "none"
    argElement.style.padding = "10px 20px"
}

PgBtn.addEventListener('click', function () {
    PgBtn.style.backgroundColor = "red";
    let rnd = Math.floor(Math.random() * 1000);
    PgBtn.innerText = `clicked, ${rnd}`

})
styling(PgBtn)
bodyD.addEventListener('click', function () {
    setTimeout(styling(PgBtn), 6000);
    PgBtn.innerText = "Time OUT"
})
// End step1

const bodyHead = document.createElement('h1')
bodyHead.style.borderWidth = "10px"
bodyHead.style.borderColor = "green"
bodyHead.style.borderStyle = "dotted"

bodyD.appendChild(bodyHead)
bodyHead.textContent = "Header "
bodyHead.style.color = "black"
// bodyHead.addEventListener('keyclick',mover(key))
// function mover(key) {
//     switch (key) {
//         case key = "A": bodyHead.style.color = "red";
//         case key = "S": bodyHead.style.Size = "10px"
//         case "D": const bodyPara = document.createElement('p')
//             bodyHead.appendChild(bodyPara)
//             bodyPara.innerContent = "Key D was pressed!"
//         case "W": toggleV(bodyHead)
//         case " ": bodyHead.style.fontSize = "larger"
//     }
// }
// function toggleV(argElement) {
//     if (argElement.display = "block") {
//         argElement.display = "none"
//     } else { argElement.display = "block" }
// }
// not testedyet
// ## Step 3:
const newform=document.createElement('form')
document.body.appendChild(newform)
let LabelName=document.createElement('label')
let LabelEmail=document.createElement('label')
let LabelPass=document.createElement('label')
let fullNameInput=document.createElement('input') 
let emailInput=document.createElement('input')
let PasswordInput=document.createElement('input')
let submitInput=document.createElement('button') 
submitInput.innerText=" Submit "
LabelName.innerText="Full Name:   "
LabelPass.innerText=" Password :  "
LabelEmail.innerText= "Email :   "
fullNameInput.type="text"
emailInput.type="email"
PasswordInput.type="password"
PasswordInput.display="none"
newform.appendChild(LabelName)
LabelName.innerText="Full Name:   "
newform.append(LabelName,fullNameInput,LabelEmail,emailInput)
newform.append(LabelPass,PasswordInput,submitInput)

submitInput.addEventListener("submit",function(){
    preventdefault()
    console.log("No server yet to submit")
    // console.log(this.target.value)
})
// "Challenge 5.1 - Done with step 3".