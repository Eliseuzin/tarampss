const form = document.getElementById("form");
const UserName = document.getElementById("Username");
// const userEmail = document.getElementById("userEmail");
// const Password = document.getElementById("Password");
const cnpj=document.getElementById("cnpj");
const phone=document.getElementById("phone");
const city=document.getElementById("Cidade");
const labelnome=document.getElementById("labelnome");
const labelcnpj=document.getElementById("labelcnpj");
const labelcelular=document.getElementById("labelcelular");
const labelcidade=document.getElementById("labelcidade");
// const PasswordConfirmation = document.getElementById("PasswordConfirmation");
const send = document.getElementById("send");
// const formm=document.getElementsByTagName("form");
// const checkdados=document.getElementById("check")
const success = document.getElementById("success");
const error = document.getElementById("error");
//quando começar o formulario e nao estiver nada preenchido
let validUserNAME=false;
let validcnpj=false;
let validphone=false;
let validcity=false;

UserName.addEventListener('keyup',()=>{
  const UserNameValue = UserName.value;

  if (UserNameValue === "") {
    setErrorFor(UserName, " The username is obligatory.");
    validUserNAME=false;
    // UserName.setAttribute(setErrorFor, " The username is obligatory.")
  } else if (UserName.value.length <= 3) {
    setErrorFor(UserName, "Enter a name validate.");
    validUserNAME=false;
    // UserName.setAttribute(setErrorFor, " The username is obligatory.")
  } else {
    setSuccessFor(UserName);
    validUserNAME=true;
    // UserName.setAttribute(setSuccessFor)
  }
})
cnpj.addEventListener('keyup',()=>{
  const cnpjValue=cnpj.value;

  if (cnpjValue===""){
    setErrorFor(cnpj,"Inseri um CNPJ valido, por favor!");
    validcnpj=false;
  }else if (cnpjValue.length<=13){
    setErrorFor(cnpj,"CNPJ deve conter no minimo 14 digitos");
    validcnpj=false;
  }else if(cnpjValue.length>=15){
    setErrorFor(cnpj,"CNPJ deve conter no máximo 14 digitos")
  }else{
    setSuccessFor(cnpj);
    validcnpj=true;
  }
})
phone.addEventListener('keyup',()=>{
  const phoneValue=phone.value;

  if (phoneValue===""){
    setErrorFor(phone,"Número existente, por favor!");
    validphone=false;
  }else if (phoneValue.length<=10){
    setErrorFor(phone,"Deve conter 11 números, seguir o ex.:31999990000");
    validphone=false;
  }else if (phoneValue.length>=12){
    setErrorFor(phone,"Não é possivel inseriri números de outros paises");
    validphone=false;
  }else{
    setSuccessFor(phone);
    validphone=true;
  }
})

city.addEventListener('keyup',()=>{
  const cityValue=city.value;

  if(cityValue===""){
    setErrorFor(city,"Uma cidade existente, por favor!");
    validcity=false;
  }else if(cityValue.length<=5){
    setErrorFor(city,"Sua cidade dever ter no minimo 6 careacteres");
    validcity=false;
  }else{
    setSuccessFor(city);
    validcity=true;
  }

})
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if(validUserNAME && validcnpj && validcity && validphone){
    //message successfully
    success.setAttribute('style','display:block');
    success.innerHTML="Cadastrando usuário..."
    error.setAttribute('style','display:none');
    error.innerHTML="";
    // alert("Deu bom!")
  }else{
    // alert("Preenchar os campos corretamente, por favor!")
    //message unsuccessful
    error.setAttribute('style','display:block');
    error.innerHTML="Preenchar os campos corretamente, por favor!";
    success.setAttribute('style','display:none');
    success.innerHTML=""
  }
});
// function cadastrar(){
//   // alert('botao clicado');
//   if(validUserNAME && validcnpj && validcity && validphone){
//     success.setAttribute('style','display:block')
//     // alert("Deu bom!")
//   }else{
//     // alert("Preenchar os campos corretamente, por favor!")
//     error.setAttribute('style','display:block')

//   }
// }
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  //Add message of error
  small.innerText = message;

  //Add the class of error
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  //Add the class of success
  formControl.className = "form-control success";
}

// function ValidateEmail(email) {
//   var emailPattern =
//     /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
//   return emailPattern.test(email);
// }


// function checkInputs() {
  // const UserNameValue = UserName.value;
  // const phoneValue=phone.value;
  // const cityValue=city.value;
  // const cnpjValue=cnpj.value;
  // const userEmailValue = userEmail.value;
  // const PasswordValue = Password.value;
  // const PasswordConfirmationValue = PasswordConfirmation.value;

  // if (UserNameValue === "") {
  //   setErrorFor(UserName, " The username is obligatory.");
  // } else if (UserName.value.length <= 3) {
  //   setErrorFor(UserName, "Enter a name validate.");
  // } else if (UserName === Number) {
  //   setErrorFor(UserName, "Name can't has number.");
  // } else {
  //   setSuccessFor(UserName);
  // }
  // let validNAME = false;


  // if (userEmailValue === "") {
  //   setErrorFor(userEmail, " Mandatory email");
  // } else if (!ValidateEmail(userEmailValue)) {
  //   setErrorFor(userEmail, "Enter an email validate.");
  // }
  // // else if (use)
  // else {
  //   setSuccessFor(userEmail);
  // }

  //validate phone, news dados
  // if (phoneValue===""){
  //   setErrorFor(phone,"Número existente, por favor!");
  // }else if (phoneValue.length<=10){
  //   setErrorFor(phone,"O número dever seguir o ex:31999990000");
  // }else if (phoneValue.length>=12){
  //   setErrorFor(phone,"Não é possivel inseriri números de outros paises");
  // }else{
  //   setSuccessFor(phone)
  // }

  // if (cnpjValue===""){
  //   setErrorFor(cnpj,"Inseri um CNPJ valido, por favor!")
  // }else if (cnpjValue.length<=16){
  //   setErrorFor(cnpj,"CNPJ dever conter no minimo 17 caracteres")
  // }else{
  //   setSuccessFor(cnpj)
  // }

  //validate city, news dados

  // if(cityValue===""){
  //   setErrorFor(city,"Uma cidade existente, por favor!");
  // }else if(cityValue.length<=5){
  //   setErrorFor(city,"Sua cidade dever ter no minimo 6 careacteres");
  // }else{
  //   setSuccessFor(city);
  // }

  // if (PasswordValue === "") {
  //   setErrorFor(Password, "Mandatory password ");
  // } else if (Password.value.length <= 6) {
  //   setErrorFor(Password, "Password must has minimum 6 characters.");
  // } else {
  //   setSuccessFor(Password);
  // }

  // if (PasswordConfirmationValue === "") {
  //   setErrorFor(PasswordConfirmation, "Mandatory password");
  // } else if (PasswordConfirmationValue === PasswordValue) {
  //   setSuccessFor(PasswordConfirmation);
  // } else setErrorFor(PasswordConfirmation, "Must be the same of Password");

  //VALIDATE ALL

  // const formControls = form.querySelectorAll(".form-control");
  // const formIsValid = [...formControls].every((formControl) => {
  //   return formControl.className === "form-control.success";
  // });
  // if (formIsValid) {
  //   // console.log("tudo ok");
  // }