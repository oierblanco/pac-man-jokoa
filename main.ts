let pacman = game.createSprite(2, 4)
let gost = game.createSprite(2, 2)
let janaria = game.createSprite(randint(0, 4), randint(0, 4))
gost.set(LedSpriteProperty.Blink, 5)
gost.set(LedSpriteProperty.Brightness, 100)
janaria.set(LedSpriteProperty.Brightness, 100)
basic.forever(function () {
    if (pacman.isTouching(gost)) {
        game.gameOver()
    }
})
basic.forever(function () {
    if (pacman.isTouching(janaria)) {
        game.addScore(1)
        janaria.delete()
        janaria = game.createSprite(randint(0, 4), randint(0, 4))
        janaria.set(LedSpriteProperty.Brightness, 100)
    }
})
basic.forever(function () {
    basic.pause(400)
    gost.move(1)
    gost.ifOnEdgeBounce()
})
basic.forever(function () {
    if (input.acceleration(Dimension.X) > 200) {
        pacman.move(1)
        basic.pause(200)
    }
    if (input.acceleration(Dimension.X) < -200) {
        pacman.move(-1)
        basic.pause(200)
    }
    if (input.acceleration(Dimension.Y) > 200) {
        pacman.change(LedSpriteProperty.Y, 1)
        basic.pause(200)
    }
    if (input.acceleration(Dimension.Y) < -200) {
        pacman.change(LedSpriteProperty.Y, -1)
        basic.pause(200)
    }
})
