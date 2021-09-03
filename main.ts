//WOODPECKER
basic.showIcon(IconNames.SmallHeart);
basic.clearScreen()
let isDefective = true
let pauseDuration = 50
let repeats = 10
radio.setGroup(7)
radio.onReceivedString(function (receivedString: string) {
    if (receivedString == "systemtest") {
        if (!isDefective) {
            correct()
        } else {
            correct()
            basic.pause(500)
            for (let i = 0; i < repeats * 2; i++) {
                //led.toggleAll()
                OrchestraInstrument.callActuateThumpBit(0)
                basic.pause(randint(20, pauseDuration * 4))
            }
            basic.showString("K", 0);
            stringIsShowing = true
            stringOnTime = input.runningTime()

        }
    }
})
let stringOnTime = 0;
let stringIsShowing = false;
let stringDuration = 2000;
input.onButtonPressed(Button.A, function () {
    radio.sendString("systemtest")
})

basic.forever(function () {
    if (stringIsShowing) {
        if (input.runningTime() > stringOnTime + stringDuration) {
            basic.clearScreen();
            stringIsShowing = false;
        }
    }
})

function correct() {
    for (let i = 0; i < repeats; i++) {
        OrchestraInstrument.callActuateThumpBit(0)
        basic.pause(pauseDuration)
    }
    basic.pause(500)
    for (let i = 0; i < repeats; i++) {
        OrchestraInstrument.callActuateThumpBit(0)
        basic.pause(pauseDuration)
    }
}