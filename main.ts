input.onButtonPressed(Button.A, function () {
    radio.sendString("cccccccccccc")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(226)
basic.forever(function () {
	
})
