const colorChoice = document.getElementById('color-choice')
const schemeOption = document.getElementById('options')
const numberOption = document.getElementById('number-selector')
const colorPalate = document.getElementById('color-palate')

document.getElementById('gen-button').addEventListener('click', function () {
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorChoice.value.replace("#", "")}&mode=${schemeOption.value}&count=${numberOption.value}`)
        .then(res => res.json())
        .then(data => {
            colorPalate.innerHTML = ""
            for (let i = 0; i < data.colors.length; i++) {
                let color = data.colors[i].hex.value
                let element = document.createElement(`div`)
                element.style.backgroundColor = color
                element.innerText = color
                element.addEventListener('click', function () {
                    navigator.clipboard.writeText(color).then(() => {
                        alert(`Copied ${color} to clipboard`)
                    })
                })
                colorPalate.appendChild(element)
            }
        })
})



