
// side bar minimize

let siderMinBtn = document.querySelectorAll(".nav-toggle");
let mainApp = document.querySelector(".main-app");

siderMinBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (window.innerWidth < 992) {
      // للشاشات الصغيرة
      mainApp.classList.toggle("nav_open");
    } else {
      // للشاشات الكبيرة
      mainApp.classList.toggle("side-bar-minimize");
    }
  });
});

// لما يتغير حجم الشاشة
window.addEventListener("resize", () => {
  if (window.innerWidth >= 992) {
    // لو الشاشة كبيرة نشيل nav_open
    mainApp.classList.remove("nav_open");
  } else {
    // لو الشاشة صغيرة نشيل side-bar-minimize
    mainApp.classList.remove("side-bar-minimize");
  }
});


// 
let navMinBtn = document.querySelector(".nav-toggle-dots");
let mainNav = document.querySelector(".content-app");

if(navMinBtn){

  
navMinBtn.addEventListener("click", () => {
  if (window.innerWidth < 992) {
    // للشاشات الصغيرة
    console.log("ghjhu");

    mainNav.classList.toggle("bar-open");
  } else {
    // للشاشات الكبيرة
    console.log("ghjhuttttttt");
  }
});

}


// 





document.querySelectorAll('.more-btn').forEach(btn => {
  btn.addEventListener('click', function (e) {
    const menu = this.nextElementSibling;
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    btn.parentElement.parentElement.classList.add('active');
  });
});

// إخفاء القائمة عند الضغط خارجها
document.addEventListener('click', function(e) {
  document.querySelectorAll('.dropdown-menu').forEach(menu => {
    if (!menu.previousElementSibling.contains(e.target) && !menu.contains(e.target)) {
      menu.style.display = 'none';
    }
  });
});
