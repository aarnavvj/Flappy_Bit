input.onButtonPressed(Button.A, function () {
    Bird.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    // This game was based on the old classic game " Flappy Bird. "
    Bird.change(LedSpriteProperty.Y, 1)
})
let Ticks = 0
let Bird: game.LedSprite = null
Bird = game.createSprite(0, 2)
Bird.set(LedSpriteProperty.Blink, 300)
let Obstacles: game.LedSprite[] = []
let Empty_Obstacle_Y = randint(0, 4)
for (let index = 0; index <= 4; index++) {
    if (index != Empty_Obstacle_Y) {
        Obstacles.push(game.createSprite(4, index))
    }
}
basic.forever(function () {
    for (let Obstacle of Obstacles) {
        Obstacle.change(LedSpriteProperty.X, -1)
    }
    basic.pause(500)
    while (Obstacles.length > 0 && Obstacles[0].get(LedSpriteProperty.X) == 0) {
        Obstacles.removeAt(0).delete()
    }
    for (let Obstacle of Obstacles) {
        Obstacle.change(LedSpriteProperty.X, -1)
    }
    if (Ticks % 3 == 0) {
        Empty_Obstacle_Y = randint(0, 4)
        for (let index = 0; index <= 4; index++) {
            if (index != Empty_Obstacle_Y) {
                Obstacles.push(game.createSprite(4, index))
            }
        }
    }
    for (let Obstacle of Obstacles) {
        if (Obstacle.get(LedSpriteProperty.X) == Bird.get(LedSpriteProperty.X) && Obstacle.get(LedSpriteProperty.Y) == Bird.get(LedSpriteProperty.Y)) {
            game.gameOver()
        }
    }
    Ticks += 1
    basic.pause(500)
})
