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
bodyHead.addEventListener('keyclick',mover(key))
function mover(key) {
    switch (key) {
        case key = "A": bodyHead.style.color = "red";
        case key = "S": bodyHead.style.Size = "10px"
        case "D": const bodyPara = document.createElement('p')
            bodyHead.appendChild(bodyPara)
            bodyPara.innerContent = "Key D was pressed!"
        case "W": toggleV(bodyHead)
        case " ": bodyHead.style.fontSize = "larger"
    }
}
function toggleV(argElement) {
    if (argElement.display = "block") {
        argElement.display = "none"
    } else { argElement.display = "block" }
}
// not testedyet 