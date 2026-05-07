document.addEventListener("DOMContentLoaded", () => {
    const lateralBar = document.querySelector(".suplementar__bar")
    const elements = document.querySelectorAll(".dia__mes")

    elements.forEach((element) => {
        element.addEventListener("click", () => {
                toggleAnimation(lateralBar)
                lateralBar.innerHTML = element.textContent
        })
    })
})