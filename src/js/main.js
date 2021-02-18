class Course {
   constructor() {
      this.body = document.querySelector('body');
      this.containerHeader = document.querySelector('header');
      this.containerMainHeader = document.querySelector('.main-header');

      this.hamburgerBtn = document.querySelector('.hamburger-nav--btn');
      this.hamburgerInput = document.getElementById('menu_checkbox');
      this.hamburgerMenu = document.querySelector('.hamburger-nav-list');
      this.hamburgerItem = document.querySelectorAll('.hamburger-nav-item a');

      // this.form = document.querySelector(".field_form");
      // this.formBtn = this.form.querySelector(".form_btn");

      window.onscroll = () => {
         this.heightHeader();
      }
      window.onresize = () => this.deleteHamburgerMenu();

      this.hamburgerBtn.onclick = () => this.addHamburgerMenu();
      this.hamburgerItem.forEach((item) => {
         item.onclick = () => this.deleteHamburgerMenu();
      })

      // this.formBtn.onclick = (a) => this.validationForm();
   }

   // -------------- Hamburger Menu -----------
   addHamburgerMenu() {
      this.hamburgerInput.onchange = () => {
         if (this.hamburgerInput.checked) {
            setTimeout(() => this.hamburgerMenu.classList.add('hamburger-list--active'), 500);
         } else {
            setTimeout(() => this.hamburgerMenu.classList.remove('hamburger-list--active'), 500);
         }
      }
   }

   deleteHamburgerMenu() {
      this.hamburgerInput.checked = false;
      setTimeout(() => this.hamburgerMenu.classList.remove('hamburger-list--active'), 500);
   }
   // ----------------- Height and background header -------------
   heightHeader() {
      if (window.pageYOffset >= 150) {
         this.containerMainHeader.classList.add('main-header--height');
         this.containerMainHeader.classList.add('header--color');
      } else {
         this.containerMainHeader.classList.remove('main-header--height');
         this.containerMainHeader.classList.remove('header--color');
      }
   }

   //------------------ Validation Form
   // validationForm() {
   //    event.preventDefault()
   //    let name = this.form.querySelector('.field_name');
   //    let nameLabel = this.form.querySelector(".label_name");
   // }


};
let course = new Course();

// ------------------ Form -------------------------------
//------------------ Hide Label of change
let entryField = document.querySelectorAll('.entry_field');
entryField.forEach(function (e) {
   e.addEventListener('input', function () {
      let idElement = e.id;
      let labelField = document.querySelector(`.label_${idElement}`);
      e.onchange = () => {
         (e.value.length === 0) ? removeLabel() : setLabel()
      };

      function removeLabel() {
         labelField.classList.remove("label_hidden");
      };
      function setLabel() {
         labelField.classList.add("label_hidden");
      };
   });
});


// ------------------------- Swipe slider -------------------------
// let mySwiper = new Swiper('.swiper-container', {
//    slidesPerView: 1,
//    spaceBetween: 1000,
//    mousewheel: true,
//    keyboard: {
//       enabled: true,
//    },
//    pagination: {
//       el: '.swiper-pagination',
//       clickable: false,
//    },
//    navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//    },
// });



