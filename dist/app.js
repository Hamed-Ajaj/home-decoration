const bars = document.getElementById("all-categories")
const DropDown = document.getElementById("dropdown")

bars.addEventListener("click", () => {
    if(DropDown.style.opacity === '0'){
        DropDown.style.opacity = '1'
        DropDown.style.pointerEvents = 'all'
    }
    else{
        DropDown.style.opacity = '0'
        DropDown.style.pointerEvents = 'none'
    }
})