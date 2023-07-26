const avatar = document.querySelector(".avatar")
const tip = document.querySelector(".tip")

avatar.addEventListener('mouseover', () => {
    tip.style.display = 'flex'
})

avatar.addEventListener('mouseout', () => {
    tip.style.display = 'none'
})