let Temperature = 0
basic.forever(function () {
    basic.showIcon(IconNames.Yes)
    Temperature = dstemp.celsius(DigitalPin.P0)
    if (Temperature > -300) {
        serial.writeValue("Temp", Temperature)
        basic.pause(5000)
    }
})
