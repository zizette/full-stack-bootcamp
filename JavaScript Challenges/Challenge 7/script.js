const bodyE = document.body;
const br1 = document.createElement("br");
const e_h = document.createElement('h1');
e_h.innerText = "Sign up NOW!"


const e_h3 = document.createElement('h3');

e_h3.innerText = " Enter your details"

bodyE.appendChild(e_h3);
bodyE.appendChild(br1)
const div1 = document.createElement('div');
document.body.appendChild(div1);
div1.classList.add("container");
const div2 = document.createElement('div');
div1.appendChild(div2);
div2.classList.add("login__container");
div2.styleJustify="center"
const div3 = document.createElement('div');
div2.appendChild(div3);
div3.classList.add("login__signin");
const div4 = document.createElement('div');
div3.appendChild(div4);
div4.classList.add("login__signin-now");
div4.appendChild(e_h)
div4.appendChild(e_h3);
// newform in Div ok
const Newform = document.createElement('form');
div4.appendChild(Newform);
let EmailLabel = document.createElement('label');
let NewEmail = document.createElement("input");
let PassLabel = document.createElement('label');
let NewPass = document.createElement('input')
let LabelConfirm = document.createElement('label');
let PassConfirm = document.createElement('input')
let submitInput=document.createElement('button');
Newform.append(EmailLabel,NewEmail);
Newform.append(PassLabel,NewPass,LabelConfirm ,PassConfirm,submitInput);
NewEmail.classList.add('input-field');
NewEmail.setAttribute('id','submit-btn');
submitInput.classList.add('filled-btn');
submitInput.id.add('submit-btn');
NewEmail.required = true;
NewEmail.type="email"
EmailLabel.innerText = "Email :   "
submitInput.innerHTML=" Submit "
PassLabel.innerText="Password :   "
// NewPass.append(br1, br1);
LabelConfirm.innerText=" Confirm Password :  "
NewPass.type="Password"
NewPass.styleDisplay="none"
PassConfirm.type="cPassword"
PassConfirm.styleDisplay="none"
NewEmail.classList.add("input-field");


// NewEmail.append(br1, br1)


// dONE WITH STEP1