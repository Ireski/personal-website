// function setProgress(percentage) {
//   const circle = document.querySelector(".progress");
//   const offset = 100 - percentage;
//   circle.style.strokeDashoffset = offset;
//   document.querySelector(".percentage").textContent = percentage + "%";
// }

// setProgress(48); // Set the initial value

// function setProgress2(percentage) {
//   const circle = document.querySelector("#progress2");
//   const offset = 100 - percentage;
//   circle.style.strokeDashoffset = offset;
//   document.querySelector("#text-percentage2").textContent = percentage + "%";
// }

// setProgress2(98); // Set the initial value

const progressElements = [
  { id: "progress1", textId: "text-percentage1", percentage: 91 },
  { id: "progress2", textId: "text-percentage2", percentage: 86 },
  { id: "progress3", textId: "text-percentage3", percentage: 78 },
  { id: "progress4", textId: "text-percentage4", percentage: 95 },
  { id: "progress5", textId: "text-percentage5", percentage: 34 },
];

// // Function to update progress dynamically
// function setProgress(element) {
//   const circle = document.querySelector(`#${element.id}`);
//   const offset = 100 - element.percentage;
//   circle.style.strokeDashoffset = offset;
//   document.querySelector(`#${element.textId}`).textContent =
//     element.percentage + "%";
// }

// progressElements.map(setProgress);

function setProgress(element) {
  const circle = document.querySelector(`#${element.id}`);
  const text = document.querySelector(`#${element.textId}`);
  const targetPercentage = element.percentage;
  let currentPercentage = 0;

  // Set initial stroke dash offset for the progress circle
  circle.style.strokeDashoffset = 100;

  // Use setInterval to animate the progress
  const interval = setInterval(() => {
    if (currentPercentage < targetPercentage) {
      currentPercentage++;
      const offset = 100 - currentPercentage;
      circle.style.strokeDashoffset = offset;
      text.textContent = `${currentPercentage}%`;
    } else {
      clearInterval(interval); // Stop the interval once the target is reached
    }
  }, 20); // Adjust the speed of counting (20ms interval)
}

// Using map to update all progress elements
progressElements.map(setProgress);

// function filterItem(category) {
//   const items = document.querySelectorAll(".item");
//   items.forEach((item) => {
//     if (category === "") {
//       item.style.opacity = "1";
//       item.style.visibilty = "visible";
//       // item.style.transform = "scaleY(1)"
//       item.style.width = "100%";
//       item.style.display = "block";
//     } else if (category === item.getAttribute("data-filter")) {
//       item.style.opacity = "1";
//       item.style.visibilty = "visible";
//       // item.style.transform = "scaleY(1)"
//       item.style.width = "100%";
//       item.style.display = "block";
//     } else {
//       item.style.opacity = "0";
//       item.style.visibilty = "hidden";
//       // item.style.transform = "scaleY(0)"
//       item.style.width = "0";
//       item.style.display = "none";
//     }
//   });
//   document
//     .querySelectorAll(".pbtn")
//     .forEach((btn) => btn.classList.remove("active"));
//   this.classList.add("active");
// }

// Handle active link highlighting on scroll
const sections = document.querySelectorAll("div");
const menuLinks = document.querySelectorAll(".nav");

function highlightMenu() {
  let scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 80; // Adjust for fixed nav
    const sectionId = sections.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      menuLinks.forEach((link) => link.id.remove("active"));
      document.querySelector(`a[href="#${sectionId}"]`).id.add("active");
    }
  });
}

window.addEventListener("scroll", highlightMenu);

// Handle active link highlighting on scroll
const sections2 = document.querySelectorAll("div");
const menuLinks2 = document.querySelectorAll(".nav");

function highlightMenu() {
  let scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 80; // Adjust for fixed nav
    const sectionId = sections.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      menuLinks.forEach((link) => link.id.remove("active"));
      document.querySelector(`a[href="#${sectionId}"]`).id.add("active");
    }
  });
}

window.addEventListener("scroll", highlightMenu);

// TAB
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".pbtn").forEach((item) => {
    item.addEventListener("click", function () {
      const value = this.getAttribute("data-filter");

      document.querySelectorAll(".port").forEach((post) => {
        if (value === "all") {
          // post.style.opacity = "1";
          post.style.display = "block";

          post.style.transition = "all .9s ease-in-out";
        } else {
          // post.style.opacity = post.classList.contains(value) ? "1" : "0";
          post.style.display = post.classList.contains(value)
            ? "block"
            : "none";
          post.style.transition = "all .9s ease-in-out";
        }
      });

      document
        .querySelectorAll(".pbtn")
        .forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");
    });
  });
});

function downloadCV() {
  const link = document.createElement("a");
  link.href = "cv/Main CV.docx"; // Replace with your CV file URL
  link.download = "Main CV.docx"; // File name when downloaded
  link.click();
}

function sendToWhatsApp(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const subject = document.getElementById("subject").value;

  const phoneNumber = "2349068351922"; // Replace with your WhatsApp number (include country code, no "+")
  const textMessage = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    textMessage
  )}`;
  window.open(whatsappURL, "_blank");
}
