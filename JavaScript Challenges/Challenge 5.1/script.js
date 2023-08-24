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
    argElement.style.padding = "10px 20px"}

    

    PgBtn.addEventListener('click',function(){ 
        PgBtn.style.backgroundColor="red";
        let rnd= Math.floor(Math.random() * 1000);
    PgBtn.innerText=`clicked, ${rnd}`
    
} )
styling(PgBtn)
bodyD.addEventListener('click',function(){ 
setTimeout(styling(PgBtn),6000);
PgBtn.innerText="Time OUT"
})

