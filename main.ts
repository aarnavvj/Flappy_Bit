input.onButtonPressed(Button.A, function () {
    Bird.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    // This game was based on the old classic game " Flappy Bird. "
    Bird.change(LedSpriteProperty.Y, 1)
})
let Empty_Obstacle_Y = 0
let Ticks = 0
let Bird: game.LedSprite = null
game.setLife(3)
let Index = 0
let Obstacles: game.LedSprite[] = []
Bird = game.createSprite(0, 2)
Bird.set(LedSpriteProperty.Blink, 300)
basic.forever(function () {
    while (Obstacles.length > 0 && Obstacles[0].get(LedSpriteProperty.X) == 0) {
        Obstacles.removeAt(0).delete()
    }
    for (let Obstacle of Obstacles) {
        Obstacle.change(LedSpriteProperty.X, -1)
    }
    if (Ticks % 5 == 0) {
        Empty_Obstacle_Y = randint(0, 4)
        for (let Index_2 = 0; Index_2 <= 4; Index_2++) {
            if (Index_2 != Empty_Obstacle_Y) {
                Obstacles.push(game.createSprite(4, Index_2))
            }
        }
    }
    for (let Obstacle_2 of Obstacles) {
        if (Obstacle_2.get(LedSpriteProperty.X) == Bird.get(LedSpriteProperty.X) && Obstacle_2.get(LedSpriteProperty.Y) == Bird.get(LedSpriteProperty.Y)) {
            game.removeLife(1)
        }
    }
    Ticks += 1
    basic.pause(440)
})
