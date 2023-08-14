let strip = neopixel.create(DigitalPin.P0, 7, NeoPixelMode.RGB)
strip.setBrightness(5)
strip.easeBrightness()
basic.forever(function () {
    for (let index = 0; index < 50; index++) {
        strip.showColor(neopixel.rgb(randint(0, 255), randint(0, 255), randint(0, 255)))
        strip.show()
        basic.pause(100)
    }
    for (let index = 0; index < 50; index++) {
        strip.setPixelColor(randint(0, 6), neopixel.rgb(randint(0, 255), randint(0, 255), randint(0, 255)))
        strip.show()
        basic.pause(100)
    }
    strip.showRainbow(1, 360)
    for (let index = 0; index < 2; index++) {
        for (let カウンター = 0; カウンター <= 4; カウンター++) {
            for (let index = 0; index < カウンター * 4 + 1; index++) {
                strip.rotate(1)
                strip.show()
                basic.pause(100)
            }
            for (let index = 0; index < カウンター * 4 + 1; index++) {
                strip.rotate(-1)
                strip.show()
                basic.pause(100)
            }
        }
    }
})
