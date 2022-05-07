const body = document.querySelector('body')
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