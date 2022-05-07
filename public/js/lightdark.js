const body = document.querySelector('body')
const lightNDarkBtn = document.querySelector('#lightNDark')
lightNDarkBtn.addEventListener('click', toggleLightDark)


function toggleLightDark() {
  body.className = body.className === "dark" ? "" : "dark"
}

function checkDarkPref() {
  if(window.matchMedia("(prefers-color-scheme:dark)").matches && body.className !== "dark")
  {
    toggleLightDark()
  }
} 

checkDarkPref()