const rateOptions = document.querySelector(".rate-options")
const thankYou = document.querySelector (".thank-you")
const submitButton = document.querySelector (".btn-submit")
const rating = document.getElementById ("rating")
const rates = document.querySelectorAll (".btn")

submitButton.addEventListener ("click", () => {
    thankYou.classList.remove ("hidden")
    rateOptions.style.display = "none"
})

rates.forEach ((rate) => {
    rate.addEventListener ("click", () =>
        rating.innerHTML = rate.innerHTML    
)})