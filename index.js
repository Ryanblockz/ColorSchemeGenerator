const colorChoice = document.getElementById('color-choice')
const schemeOption = document.getElementById('options')


document.getElementById('gen-button').addEventListener('click', function () {
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorChoice.value.replace("#", "")}&mode=${schemeOption.value}&count=5`)
        .then(res => res.json())
        .then(data => {
            document.getElementById('pal-1').style.backgroundColor = data.colors[0].hex.value
            document.getElementById('pal-2').style.backgroundColor = data.colors[1].hex.value
            document.getElementById('pal-3').style.backgroundColor = data.colors[2].hex.value
            document.getElementById('pal-4').style.backgroundColor = data.colors[3].hex.value
            document.getElementById('pal-5').style.backgroundColor = data.colors[4].hex.value
            document.getElementById('pal-1').innerText = data.colors[0].hex.value
            document.getElementById('pal-2').innerText = data.colors[1].hex.value
            document.getElementById('pal-3').innerText = data.colors[2].hex.value
            document.getElementById('pal-4').innerText = data.colors[3].hex.value
            document.getElementById('pal-5').innerText = data.colors[4].hex.value

        })
})