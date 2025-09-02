
$(document).ready(function(){

const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");
const closeSidebar = document.querySelector(".closeSidebar");
const closeSidebar2 = document.querySelector(".closeSidebar2")

closeSidebar.addEventListener("click", function(){
  sidebar.classList.remove("show-sidebar");
})
closeSidebar2.addEventListener("click", function(){
  sidebar.classList.remove("show-sidebar");
})

// add fixed class to navbar
window.addEventListener("scroll",  ()=>{
  if (window.scrollY > 80) {
    navbar.classList.add("navbar-fixed");
  } else {   
    navbar.classList.remove("navbar-fixed");
  }
});
// show sidebar
navBtn.addEventListener("click", ()=> {
  sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", ()=> {
  sidebar.classList.remove("show-sidebar");
});

date.innerHTML = new Date().getFullYear();
});

function copyToClipboard() {
  var copyText = document.getElementById("copyText").innerText;
  navigator.clipboard.writeText(copyText)
    .catch(err => {
      console.error('Unable to copy to clipboard', err);
    });
}

function copyToClipboard() {
  var copyText = document.getElementById("copyText").innerText;
  var copyNotification = document.getElementById("copyNotification");

  navigator.clipboard.writeText(copyText)
    .then(() => {
      copyNotification.style.display = "grid";
      setTimeout(() => {
        copyNotification.style.display = "none";
      }, 2000);
    })
    .catch(err => {
      console.error('Unable to copy to clipboard', err);
    });
}

