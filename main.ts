input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.lightLevel())
})
input.onButtonPressed(Button.B, function () {
    if (input.lightLevel() > 100) {
        music.startMelody(music.builtInMelody(Melodies.Wedding), MelodyOptions.Once)
    } else {
        music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
    }
})
basic.showIcon(IconNames.Heart)
