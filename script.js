const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.minute-hand')
const hourHand = document.querySelector('.hour-hand')

function setDate() {
    const time = new Date()
    
    const seconds = time.getSeconds()
    const secondsToDegrees = ((seconds / 60) * 360) + 90
    secondHand.style.transform = `rotate(${secondsToDegrees}deg)`

    const minutes = time.getMinutes()
    const minutesToDegrees = ((minutes / 60) * 360) + 90
    minuteHand.style.transform = `rotate(${minutesToDegrees}deg)`

    const hour = time.getHours()
    const hoursToDegrees = ((hour / 12) * 360) + 90
    hourHand.style.transform = `rotate(${hoursToDegrees}deg)`
}

setInterval(setDate, 1000)