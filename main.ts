let strip = neopixel.create(DigitalPin.P0, 7, NeoPixelMode.RGB)
strip.setBrightness(5)
strip.easeBrightness()
strip.showRainbow(1, 360)
basic.forever(function () {
    for (let index = 0; index < 21; index++) {
        strip.rotate(1)
        strip.show()
        basic.pause(100)
    }
    for (let index = 0; index < 21; index++) {
        strip.rotate(-1)
        strip.show()
        basic.pause(100)
    }
})
