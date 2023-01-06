new Swiper(".mySwiper", {
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

const type = document.querySelector("#type");
const duration = document.querySelector("#duration");
const money = document.querySelector("#money");

duration.appendChild(new Option("6 месяцев - 20%", "0.1"));
duration.appendChild(new Option("1 год - 22%", "0.22"));
duration.appendChild(new Option("1,5 года - 15%", "0.225"));
duration.appendChild(new Option("2 года - 10%", "0.2"));

type.addEventListener("change", (event) => {
  switch (event.target.value) {
    case "1":
      /*optt.setAttribute("style", "display:none");*/
      while (duration.firstChild) {
        duration.removeChild(duration.firstChild);
      }
      duration.appendChild(new Option("6 месяцев - 20%", "0.1"));
      duration.appendChild(new Option("1 год - 22%", "0.22"));
      duration.appendChild(new Option("1,5 года - 15%", "0.225"));
      duration.appendChild(new Option("2 года - 10%", "0.2"));
      break;
    case "2":
      while (duration.firstChild) {
        duration.removeChild(duration.firstChild);
      }
      duration.appendChild(new Option("3 месяца - 20%", "0.05"));
      duration.appendChild(new Option("6 месяцев - 22%", "0.11"));
      duration.appendChild(new Option("9 месяцев - 23%", "0.1725"));
      duration.appendChild(new Option("1 год - 24%", "0.24"));
      duration.appendChild(new Option("1,5 года - 18%", "0.27"));
      duration.appendChild(new Option("2 года - 15%", "0.3"));
      break;
  }
});

const result = document.querySelector(".result");

document.querySelector("#calculate").addEventListener("click", (event) => {
  console.log("hehheheeh");
  if (money.value == "" || money.value < 0) {
    result.textContent = "Введите корректную сумму!";
  } else {
    result.textContent = `Вклад "${
      type.options[type.selectedIndex].text
    }" на срок "${duration.options[duration.selectedIndex].text}" на сумму ${
      money.value
    } руб.\n
    В конце срока вы получите ${
      parseFloat(money.value) +
      parseFloat(
        money.value * parseFloat(duration.options[duration.selectedIndex].value)
      )
    } руб.`;
  }
});
