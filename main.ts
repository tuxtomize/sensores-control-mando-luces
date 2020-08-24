maqueen.IR_callbackUser(function (message) {
    if (message == 25) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    }
    if (message == 23) {
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    }
    if (message == 10) {
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    }
    if (message == 27) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    }
    if (message == 17) {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    }
    if (message == 15) {
        strip.showColor(neopixel.colors(NeoPixelColors.Violet))
    }
    if (message == 4) {
        strip.showColor(neopixel.colors(NeoPixelColors.Purple))
    }
    if (message == 21) {
        strip.showColor(neopixel.colors(NeoPixelColors.White))
    }
    if (message == 13) {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
    if (message == 77) {
        for (let index = 0; index < 4; index++) {
            basic.showIcon(IconNames.Diamond)
            basic.pause(500)
            basic.showIcon(IconNames.Target)
            basic.pause(500)
            basic.showIcon(IconNames.SmallDiamond)
            basic.pause(500)
        }
        basic.clearScreen()
    }
    if (message == 0) {
        for (let index = 0; index < 4; index++) {
            basic.showIcon(IconNames.Heart)
            basic.pause(500)
            basic.showIcon(IconNames.SmallHeart)
            basic.pause(500)
        }
        basic.clearScreen()
    }
    if (message == 26) {
        for (let index = 0; index < 4; index++) {
            basic.showIcon(IconNames.Happy)
            basic.pause(500)
            basic.showIcon(IconNames.Asleep)
            basic.pause(500)
            basic.showIcon(IconNames.Sad)
            basic.pause(500)
            basic.showIcon(IconNames.Angry)
            basic.pause(500)
        }
        basic.clearScreen()
    }
    if (message == 12) {
        for (let index = 0; index < 4; index++) {
            basic.showIcon(IconNames.Square)
            basic.pause(500)
            basic.showIcon(IconNames.SmallSquare)
            basic.pause(500)
        }
        basic.clearScreen()
    }
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) <= 7) {
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        basic.pause(200)
        basic.pause(200)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    }
})
