basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) <= 7) {
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        basic.pause(200)
        basic.pause(200)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    }
})
