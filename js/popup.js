let loginButton = document.querySelector('.button');
let PopUp = document.querySelector('.login-popup');
// let CloseButton = document.querySelector('.popup-close');

console.log('button');
console.log('loginPopUp');


loginButton.addEventListener('click', showPopUp);
// loginCloseButton.addEventListener('click', close);

function showPopUp(evt){
  console.log(evt);
  evt.preventDefault();
  PopUp.classList.toggle('show-popup')
};

// function close{
//   loginPopUp.classList.remove('show-popup')
// }

// loginPopUp.addEventListener('click', (e)=>{
//   if (e.target.classList.contains('show-popup')){
//     close();
//   }
// })