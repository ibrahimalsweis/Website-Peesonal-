let menu_icon = document.querySelector(".menu-icon");
let close_icon = document.querySelector(".icon-close");
let ul_links = document.querySelector(".header .nav ul");

menu_icon.addEventListener("click", function () {
  menu_icon.classList.toggle("active");
  ul_links.classList.toggle("active");
});

close_icon.addEventListener("click", function () {
  ul_links.classList.remove("active");
});

let nums = document.querySelectorAll(".num");
let facts = document.querySelector(".facts");
let started = false;
window.addEventListener("scroll", function () {
  if (window.scrollY >= facts.offsetTop - 100) {
    if (!started) {
      nums.forEach(function (ele) {
        count_up(ele, ele.dataset.num);
      });
    }
    started = true;
  }
});

// Increment the numbers from 0 to the assigned number
function count_up(param, data) {
  let data_num = data;
  let count = setInterval(function () {
    param.textContent++;
    if (param.textContent === data_num) {
      clearInterval(count);
    }
  }, 2000 / data_num);
}

// Increment the width from 0 to width assigned

let skills = document.querySelector(".skills");
let skills_progress = document.querySelectorAll(".progress-value");

window.addEventListener("scroll", function () {
  if (window.scrollY >= skills.offsetTop - 300) {
    skills_progress.forEach(function (ele) {
      ele.style.width = ele.dataset.width + "%";
    });
  }
});

function Add_remove_avtive(list) {
  list.forEach(function (ele) {
    ele.addEventListener("click", () => {
      list.forEach((e) => {
        e.classList.remove("active");
      });
      ele.classList.add("active");
    });
  });
}
let categorays = document.querySelectorAll(".categorays li");
Add_remove_avtive(categorays);

categorays.forEach((e) => {
  e.addEventListener("click", function () {
    document
      .querySelectorAll(".images-portfolio .box .img")
      .forEach((img) => (img.style.display = "none"));
    document.querySelectorAll(e.dataset.categoray).forEach((cat) => {
      cat.style.display = "block";
    });
  });
});

// paginatings
let parent_box_testimonial = document.querySelector(".testimonial .col");
let paginatings = document.querySelector(".paginatings");
let testimonial_box = document.querySelectorAll(".testimonial .row .box");
current_li_active = 0;
for (let i = 0; i < testimonial_box.length; i++) {
  // Create li paginating
  let li = document.createElement("li");
  li.setAttribute("data-left", `-${current_li_active}%`);

  // Add Event Click For All lis items
  li.addEventListener("click", () => {
    parent_box_testimonial.style.left = li.dataset.left;

    document.querySelectorAll(".paginatings li").forEach((li_item) => {
      li_item.classList.remove("active");
    });
    li.classList.add("active");
  });
  current_li_active += 100;
  paginatings.appendChild(li);
}

setInterval(() => {
  let li_num = Math.floor(Math.random() * testimonial_box.length);
  document.querySelectorAll(".paginatings li")[li_num].click();
}, 3000);

// Button To Top
let ButtonToTop = document.querySelector(".toTop");
ButtonToTop.addEventListener("click", () => {
  window.scrollTo({
    top:0,
  })
  
});

window.onscroll = () => {
  if (window.scrollY >= 600) {
    ButtonToTop.classList.add("active");
  }
  else {
    ButtonToTop.classList.remove("active");
    
  }
};

// Loading 

window.onload = () => {
  document.body.classList.remove("load")
}
 