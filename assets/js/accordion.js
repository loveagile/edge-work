let accordions = document.getElementsByClassName("accordion-question");

for (let i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;

    if (getComputedStyle(panel).display === "flex") {
      panel.style.display = "none";
    } else {
      panel.style.display = "flex";
    }
  });
}
