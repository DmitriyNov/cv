import './styles/main.scss'

document.body.classList.add('loaded');

const dropdowns = document.querySelectorAll(".info__dropdown--container");

dropdowns.forEach((dropdown) => {
    const button = dropdown.querySelector(".info__dropdown--button");
    const content = dropdown.querySelector(".info__dropdown");

    button.addEventListener("click", () => {
        button.classList.toggle("info__dropdown--buttonActive");
        content.classList.toggle("info__dropdown--active");

        if (content.classList.contains("info__dropdown--active")) {
            content.style.height = content.scrollHeight + "px";
        } else {
            content.style.height = 0;
        }
    });
});
