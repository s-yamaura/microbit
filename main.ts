let strip = neopixel.create(DigitalPin.P0, 7, NeoPixelMode.RGB)
strip.setBrightness(5)
strip.easeBrightness()
strip.showRainbow(1, 360)
basic.forever(function () {
    strip.rotate(1)
    strip.show()
    basic.pause(100)
})
