let header = document.querySelector(".header");
let menuBar = document.querySelector(".header .bar");
let menuNav = document.querySelector(".header .nav");
let menuClose = document.querySelector(".header .close");
let bgImg = document.querySelector('.home .img')
let homeContent = document.querySelector(".home .container .content");
let icons = document.querySelectorAll(".home .icon");
window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    header.classList.add("fixed")
    homeContent.classList.add('joining')
  } else {
    header.classList.remove("fixed");
    homeContent.classList.remove("joining");

  }
})
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky")
  }
});
menuBar.addEventListener('click', () => {
  menuNav.classList.add('active')
})
menuClose.addEventListener('click', () => {
  menuNav.classList.remove("active");
})
let idx = 1
setInterval(() => {
    if (idx > 3-1) {
        idx = 1
    } else {
        idx++
    }
}, 6000)
bgImg.style.backgroundImage = `url("img/${idx}.jpg")`;
var swiper = new Swiper(".mySwiper", {
  // slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//---------------------------menu---------------------------

let menuHeart = document.querySelectorAll('.menu .cards .card .heart i')
menuHeart.forEach(heart => {
  heart.addEventListener('click', () => {
    heart.classList.toggle('fa-solid')
  })
});

let shop = document.querySelector('.header .shop')
let shopping = document.querySelector(".shopping")
let menuCards = document.querySelectorAll(".menu .cards .card");
let shoppingCards = document.querySelector(".shopping .cards");
let shoppingCardsItem = document.querySelectorAll(".shopping .cards .card");
let closeShop = document.querySelector(".shopping .shop-header .icon");
let shopCount = document.querySelector(".header .icons .shop-icon .count");
let shopCountIdx = 0
shop.addEventListener("click", () => {
  shopping.classList.add('active')
})
closeShop.addEventListener("click", () => {
  shopping.classList.remove("active");
})
menuCards.forEach(card => {
  card.addEventListener('click', (e) => {
    e.preventDefault()
    if (
      e.target.classList.contains("btn") ||
      e.target.classList.contains("fi-rr-shopping-cart-add")
    ) {
      document.querySelector(".shopping .cards").innerHTML += `
      <div class="card">
                        <label><input type="checkbox"><span class="custom-checkbox"></span></label>
                        <div class="main">
                            <img src=${card.querySelector("img").src} alt="">
                            <div class="desc">
                                <h4>${card.querySelector("h3").textContent}</h4>
                                <div class="cost">${
                                  card.querySelector("span").textContent
                                }<span>${"$22.00"}</span></div>
                            </div>
                        </div>
                        <i class="fi fi-rr-trash-xmark delete"></i>
                    </div>`;
      shopCountIdx ++
      shopCount.textContent = shopCountIdx
      shopCount.style.display = 'block'
      // let shopIdx = 0;
      // let startShopIdx = document.querySelector(".shopping .right span b");
      // let span = document.querySelector(".shopping .cards .card .cost b");
      // shopIdx += +span.textContent
      // startShopIdx.textContent = shopIdx
      // console.log(shopIdx);
    }
  })
})
// let headerCheckbox = document.querySelector('.shopping .left input')
// let cardCheckbox = document.querySelectorAll(".shopping .cards input");
// headerCheckbox.addEventListener("click", () => {
//   cardCheckbox.forEach((item) => {
//     item.setAttribute("checked", "");
//   });
// })

shoppingCards.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove()
    shopCountIdx--
    shopCount.textContent = shopCountIdx;
   if (shopCountIdx === 0) {
    shopCount.style.display = 'none';
   }
  }
})

let ovr2 = document.querySelector(".menu .overlay-2");
let menuImg = document.querySelectorAll(".menu .cards .card .img");
menuImg.forEach((item) => {
  item.addEventListener("click", () => {
    ovr2.querySelector("img").src = item.querySelector('img').src
    ovr2.classList.add("active");
  });
})
document.querySelector(".menu .overlay-2 i").addEventListener("click", () => {
  ovr2.classList.remove("active");
})
let menuTitles = document.querySelectorAll(".menu .title .item")
menuTitles.forEach(item => {
  item.addEventListener("click", () => {
    document.querySelector(".menu .title .item.active").classList.remove("active")
    item.classList.add("active");
      menuCards.forEach(card => {
        card.style.display = "none"
        if (card.classList.contains(item.textContent)) {
          card.style.display = "block"
        } else if (item.textContent == "all") {
          card.style.display = "block";
        }
      })
  })
})