input.onButtonPressed(Button.A, function () {
    catcher.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    catcher.change(LedSpriteProperty.X, 1)
})
let egg: game.LedSprite = null
let catcher: game.LedSprite = null
game.setScore(0)
catcher = game.createSprite(2, 4)
// loop for creating a new egg
// loop until game over
//                 
while (true) {
    egg = game.createSprite(randint(0, 0), 0)
    egg.set(LedSpriteProperty.Blink, 1)
    // loop for making the egg fall to bottom
    while (egg.get(LedSpriteProperty.Y) < 4) {
        basic.pause(500)
        egg.change(LedSpriteProperty.Y, 1)
    }
    // the egg reached bottom row here
    basic.pause(500)
    if (egg.get(LedSpriteProperty.X) == catcher.get(LedSpriteProperty.X)) {
        game.addScore(1)
    }
    if (game.score() == 3) {
        game.gameOver()
    }
    egg.delete()
}
