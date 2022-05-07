const body = document.querySelector('body')
const lightNDarkBtn = document.querySelector('#lightNDark')

let dark = localStorage.getItem('dark')

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('dark');
  // 2. Update darkMode in localStorage
  localStorage.setItem('dark', 'enabled');
}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('dark');
  // 2. Update darkMode in localStorage 
  localStorage.setItem('dark', null);
}

if (dark === 'enabled') {
  enableDarkMode();
}

lightNDarkBtn.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('dark'); 
  
  // if it not current enabled, enable it
  if (dark !== 'enabled') {
    enableDarkMode();
  // if it has been enabled, turn it off  
  } else {  
    disableDarkMode(); 
  }
});
