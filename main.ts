input.onButtonPressed(Button.A, function () {
    basic.showString("Light: " + input.lightLevel())
})
music.playTone(185, music.beat(BeatFraction.Whole))
basic.showString("LIGHT LEVEL")
basic.showString("DETECTER")
