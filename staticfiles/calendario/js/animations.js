const button = document.querySelector("#header__button")

function toggleAnimation(elementClass) {
    // const bar = document.querySelector(`.${elementClass}`)
    // bar.classList.toggle("active")
    let active = false;

    if (!active) {
        elementClass.classList.add("active")
        active = true
    } else {
        elementClass.classList.remove("active")
        active = false
    }
}

button.addEventListener("click", () => {
    toggleAnimation("lateral__bar")
    toggleAnimation("suplementar__bar")
})

//troxa