//Choose a random color
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']

function cb() {
const colorIndex= parseInt(Math.random()*colors.length)
document.body.style.background = colors[colorIndex]
}
