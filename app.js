const observer0 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.isIntersecting ? entry.target.classList.add('show') : entry.target.classList.remove('show, reveal');
    })
})

const hiddenElements0 = document.querySelectorAll('.hidden0');
hiddenElements0.forEach((el) => observer0.observe(el));

const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.isIntersecting ? entry.target.classList.add('reveal') : entry.target.classList.remove('reveal');
    })
})

const hiddenElements1 = document.querySelectorAll('.hidden1');
hiddenElements1.forEach((el) => observer1.observe(el));

window.addEventListener('load', () => {
    const end = Date.now() + (15 * 1000);

    const defaults = {
        particleCount: 2,
        colors: ['#bb0000', '#fdd4fd','#ffffff']
    };

    const frame = () => {
      confetti({
        angle: 60,
        spread: 95,
        ...defaults,
        origin:  { x: 0 },
        shapes: ["image"],
        shapeOptions: {
          image: [{
              src: "https://particles.js.org/images/fruits/apple.png",
              width: 32,
              height: 32
            }]
        },
      });
      confetti({
        angle: 120,
        spread: 95,
        ...defaults,
        origin: { x: 1 },
      });
      confetti({
        angle: 90,
        spread: 100,
        origin: { y: 0 },
        shapes: ['star'],
        ...defaults,
        scalar: 0.85,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  });

class WebpageEmbedder {
constructor(pElemId, url) {
    this.pElem = document.getElementById(pElemId);
    this.url = url;
}

embed() {
    const iframe = document.createElement("iframe");
    iframe.src = this.url;
    iframe.width = "100%";
    iframe.height = "100%";

    this.pElem.appendChild(iframe);
}
}

// const embedder = new WebpageEmbedder("embedWeb", "https://linktr.ee/cwsound/");
// embedder.embed();


// Happy Birthday
// class BirthdayChecker {
//   constructor() {
//     this.birthdayDate = new Date("2023-03-16T00:00:00Z");
//     this.currentDate = new Date();
//   }

//   checkBirthday() {
// if (this.currentDate.getUTCMonth() === 3 && this.currentDate.getUTCDate() === 16) {
//       return "Today is my birthday!";
//     } else if (this.currentDate.getUTCMonth() === 3 && this.currentDate.getUTCDate() === 17) {
//       return "Yesterday was my birthday.";
//     } else {
//       return `Today is ${this.currentDate.toUTCString()}.`;
//     }
//   }

//   printToElement(elementSelector) {
//     const element = document.querySelector(elementSelector);
//     if (element) {
//       element.textContent = this.checkBirthday();
//     }
//   }
// }

// const birthdayChecker = new BirthdayChecker();
// birthdayChecker.printToElement(".happyBD");


// if (this.currentDate.getUTCFullYear() > 2023) {
//   return `Today is my birthday but I'm now ${this.currentDate.getUTCFullYear() - 2023} years old!`;
// } else


// class BirthdayChecker {
//   constructor(birthMonth, birthDate) {
//     this.birthdayDate = new Date(`2000-${birthMonth}-${birthDate}T00:00:00Z`);
//     this.currentDate = new Date();
//   }

//   checkBirthday() {
//     const birthMonth = this.birthdayDate.getUTCMonth();
//     const birthDate = this.birthdayDate.getUTCDate();
//     const currentMonth = this.currentDate.getUTCMonth();
//     const currentDate = this.currentDate.getUTCDate();

//     if (currentMonth === birthMonth && currentDate === birthDate) {
//       return "Today is my birthday!";
//     } else if (
//       (currentMonth === birthMonth && currentDate === birthDate + 1) ||
//       (currentMonth === birthMonth + 1 && currentDate === 1)
//     ) {
//       return "Yesterday was my birthday.";
//     } else {
//       return `Today is ${this.currentDate.toUTCString()}.`;
//     }
//   }
// }

// const birthdayChecker = new BirthdayChecker(3, 15); // assuming birth month is 3 (March) and birth date is 16
// console.log(birthdayChecker.checkBirthday()); // prints the result to the console
