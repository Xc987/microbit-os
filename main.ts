function loading() {
    led.toggle(2, 0)
    basic.pause(30)
    led.toggle(3, 0)
    basic.pause(30)
    led.toggle(4, 1)
    basic.pause(30)
    led.toggle(4, 2)
    basic.pause(30)
    led.toggle(4, 3)
    basic.pause(30)
    led.toggle(3, 4)
    basic.pause(30)
    led.toggle(2, 4)
    basic.pause(30)
    led.toggle(1, 4)
    basic.pause(30)
    led.toggle(0, 3)
    basic.pause(30)
    led.toggle(0, 2)
    basic.pause(30)
    led.toggle(0, 1)
    basic.pause(30)
    led.toggle(1, 0)
    basic.pause(30)
} // Loading animation
function draw_navigation_bar() {
    led.plotBrightness(0, 0, 20)
    led.plotBrightness(1, 0, 20)
    led.plotBrightness(2, 0, 20)
    led.plotBrightness(3, 0, 20)
    led.plotBrightness(4, 0, 20)
} // Draw 5 LED navigation bar at the top
function clear_navigation_bar() {
    led.unplot(0, 0)
    led.unplot(1, 0)
    led.unplot(2, 0)
    led.unplot(3, 0)
    led.unplot(4, 0)
} // Clear an 5 LED or 3 LED navigation bar at the top
function menu_selection() {
    while (true) {
        if (menu == 1) {
            images.createImage(`
            . . . . .
            . . # . .
            . # # # .
            # # # # #
            # . . . #
            `).scrollImage(1, scroll_speed)
        } else if (menu == 2) {
            images.createImage(`
            . . . . .
            . # . . .
            # . . . .
            . # . # .
            # . # . .
            `).scrollImage(1, scroll_speed)
        } else if (menu == 3) {
            images.createImage(`
            . . . . .
            . . # . .
            # # # # #
            . # # # .
            # . # . #
            `).scrollImage(1, scroll_speed)
        } else if (menu == 4) {
            images.createImage(`
            . . . . .
            . . . . .
            . . . . #
            . . # . #
            # . # . #
            `).scrollImage(1, scroll_speed)
        } else if (menu == 5) {
            images.createImage(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `).scrollImage(1, scroll_speed)
        } else if (menu == 6) {
            images.createImage(`
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            # . # . #
            `).scrollImage(1, scroll_speed)
        } else if (menu == 7) {
            images.createImage(`
            . . . . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `).scrollImage(1, scroll_speed)
        } else if (menu == 8) {
            images.createImage(`
            . . . . .
            . . # . .
            # . # # .
            . # # . #
            # . # # .
            `).scrollImage(1, scroll_speed)
        } else if (menu == 9) {
            images.createImage(`
            . . . . .
            # . # . #
            # # # # #
            # . # . #
            # # # # #
            `).scrollImage(1, scroll_speed)
        } else if (menu == 10) {
            images.createImage(`
            . . . . .
            . . . . .
            # # . # #
            . # # # .
            # # . # #
            `).scrollImage(1, scroll_speed)
        }
        draw_navigation_bar()
        if (menu == 1) {
            led.plot(0, 0)
        } else if (menu == 2) {
            led.plot(1, 0)
        } else if (menu == 9) {
            led.plot(3, 0)
        } else if (menu == 10) {
            led.plot(4, 0)
        } else  {
            led.plot(2, 0)
        }
        if (scroll_speed == 1){
            basic.pause(300)
        }  
        while (true) {
            if (input.buttonIsPressed(Button.A)) {
                scroll_speed = 1
                if (menu == 1) {     
                    menu = 10
                } else {
                    menu--
                }
                break
            } else if (input.buttonIsPressed(Button.B)) {
                if (menu == 10) {
                    scroll_speed = 1
                    menu = 1
                } else {
                    scroll_speed = 35
                    menu++
                }
                break
            } else if (input.logoIsPressed()) {
                break
            }
        }
        clear_navigation_bar()
        if (input.logoIsPressed()) {
            break
        }
    }
    if (menu == 1) {
        game_selection()
    }
} // Menu selection at boot
function game_selection() {
    while (true) {
        if (submenu == 0) {
            images.createImage(`
            . . . . .
            . # . . .
            # # # # #
            . # . . #
            . . . # #
            `).scrollImage(1, scroll_speed)
        } else if (submenu == 1) {
            images.createImage(`
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            . . # . .
            `).scrollImage(1, scroll_speed)
        } else if (submenu == 2) {
            images.createImage(`
            . . . . .
            . . . # .
            . . . # .
            . # . . .
            . . . # .
            `).scrollImage(1, scroll_speed)
        } else if (submenu == 3) {
            images.createImage(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . # # . .
            `).scrollImage(1, scroll_speed)
        } else if (submenu == 4) {
            images.createImage(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `).scrollImage(1, scroll_speed)
        } else if (submenu == 5) {
            images.createImage(`
            . . . . .
            . . . . .
            . . . # .
            # . . . .
            # . . . .
            `).scrollImage(1, scroll_speed)
        } else if (submenu == 6) {
            images.createImage(`
            . . . . .
            . . . . .
            . . . . #
            . . . . .
            . . # . .
            `).scrollImage(1, scroll_speed)
        } else if (submenu == 7) {
            images.createImage(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            # . . . .
            `).scrollImage(1, scroll_speed)
        } else if (submenu == 8) {
            images.createImage(`
            . . . . .
            . . . . .
            # . . . .
            # # . . #
            # # . # #
            `).scrollImage(1, scroll_speed)
        } else if (submenu == 9) {
            images.createImage(`
            . . . . .
            . . . . .
            # # # . #
            . # . . #
            . # . . #
            `).scrollImage(1, scroll_speed)
        } else if (submenu == 10) {
            images.createImage(`
            . . . . .
            . . # # #
            . . # . #
            . # # . #
            . . . . #
            `).scrollImage(1, scroll_speed)
        }
        draw_navigation_bar()
        if (submenu == 0) {
            led.plot(0, 0)
        } else if (submenu == 1) {
            led.plot(1, 0)
        } else if (submenu == 9) {
            led.plot(3, 0)
        } else if (submenu == 10) {
            led.plot(4, 0)
        } else {
            led.plot(2, 0)
        }
        if (scroll_speed == 1) {
            basic.pause(300)
        }
        while (true) {
            if (input.buttonIsPressed(Button.A)) {
                scroll_speed = 1
                if (submenu == 0) {
                    submenu = 10
                } else {
                    submenu--
                }
                break
            } else if (input.buttonIsPressed(Button.B)) {
                if (submenu == 10) {
                    scroll_speed = 1
                    submenu = 0
                } else {
                    scroll_speed = 35
                    submenu++
                }
                break
            } else if (input.logoIsPressed()) {
                break
            }
        }
        clear_navigation_bar()
        if (input.logoIsPressed()) {
            break
        }
    }
    if (submenu == 0) {
        menu_selection()
    }
    game_mode = submenu
    if (game_mode == 1) {
        for (let index2 = 0; index2 <= 4; index2++) {
            enemyX_1[index2] = randint(0, 4)
            enemyY_1[index2] = index2 * -1
            killed_1[index2] = 0
        }
        basic.clearScreen()
    } else if (game_mode == 2) {
        bird_2 = game.createSprite(0, 2)
        bird_2.set(LedSpriteProperty.Blink, 150)
        obstacles_2 = []
        let index_2 = 0
        game_mode_2()
    } else if (game_mode == 3) {
        game_mode_3()
    }
} // Game selection
input.onButtonPressed(Button.A, function() {
    if (game_mode == 1) {
        if (px_1 > 0) {
            led.unplot(px_1, py_1)
            px_1 += -1
        }
    } else if (game_mode == 2) {
        bird_2.change(LedSpriteProperty.Y, 1)
        music.play(music.createSoundExpression(WaveShape.Sawtooth, 891, 1198, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    } else if (game_mode == 3) {
        if (bar_x_3 > 0) {
            led.unplot(bar_x_3 + 1, 4)
            bar_x_3 = bar_x_3 - 1
            led.plot(bar_x_3, 4)
        }
    } else if (game_mode == 4) {
        if (car_move_4 == true) {
            if (playerCar_4.get(LedSpriteProperty.X) > 0) {
                playerCar_4.change(LedSpriteProperty.X, -1)
            }
        }
    }
}) // On button A pressed
input.onButtonPressed(Button.B, function () {
    if (game_mode == 1) {
        if (px_1 < 4) {
            led.unplot(px_1, py_1)
            px_1 += 1
        }
    } else if (game_mode == 2) {
        bird_2.change(LedSpriteProperty.Y, -1)
        music.play(music.createSoundExpression(WaveShape.Sawtooth, 891, 1198, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    } else if (game_mode == 3) {
        if (bar_x_3 < 3) {
            led.unplot(bar_x_3, 4)
            bar_x_3 = bar_x_3 + 1
            led.plot(bar_x_3 + 1, 4)
        }
    } else if (game_mode == 4) {
        if (car_move_4 == true) {
            if (playerCar_4.get(LedSpriteProperty.X) < 4) {
                playerCar_4.change(LedSpriteProperty.X, 1)
            }
        }
    }
}) // On button B pressed
input.onButtonPressed(Button.AB, function () {
    if (game_mode == 1) {
        shoot_1 = 1
        music.play(music.createSoundExpression(WaveShape.Sawtooth, 4707, 1, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    }
}) // On buttons AB pressed

// System variables
let menu = 1
let submenu = 0
let scroll_speed = 1
let game_mode = 0
// Game specific variables // [NAME]_[GAME_NUMBER]
let acc_1 = 0
let time_1 = 0
let killed_1: number[] = []
let enemyX_1: number[] = []
let enemyY_1: number[] = []
let speed_1 = 50
let shoot_1 = 0
let my_1 = 3
let px_1 = 2
let py_1 = 4
let obstacles_2: game.LedSprite[] = []
let bird_2: game.LedSprite = null
let interval_2 = 1200
let ticks_2 = 0
let score_2 = 0
let empty_obstacle_2 = 0
let bar_x_3 = 0
let playerCar_4: game.LedSprite = null
let var_4: number
let gameOn_4 = false
let car_move_4 = false

loading()
basic.pause(30)
basic.clearScreen()
menu_selection()

basic.forever(function () {
    if (game_mode == 1) {
        led.plotBrightness(px_1, py_1, 255)
        for (let index2 = 0; index2 <= 4; index2++) {
            if (killed_1[index2] == 0) {
                led.unplot(enemyX_1[index2], enemyY_1[index2] - 1)
                led.plot(enemyX_1[index2], enemyY_1[index2])
            }
        }
        if (shoot_1 == 1) {
            led.plotBrightness(px_1, my_1, 20)
            for (let index3 = 0; index3 <= 4; index3++) {
                if (killed_1[index3] == 0 && (px_1 == enemyX_1[index3] && my_1 == enemyY_1[index3])) {
                    killed_1[index3] = 1
                    music.play(music.createSoundExpression(WaveShape.Noise, 2294, 2294, 238, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                }
            }
            basic.pause(25)
            led.unplot(px_1, my_1)
            my_1 += -1
        }
        if (time_1 > speed_1) {
            time_1 = 0
            acc_1 += 1
            for (let index4 = 0; index4 <= 4; index4++) {
                enemyY_1[index4] = enemyY_1[index4] + 1
            }
        }
        if (my_1 < 0) {
            shoot_1 = 0
            my_1 = 5
        }
        for (let index5 = 0; index5 <= 4; index5++) {
            if (killed_1[index5] == 0) {
                if (enemyY_1[index5] > 4) {
                    basic.clearScreen()
                    music.play(music.createSoundExpression(WaveShape.Sawtooth, 321, 0, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                    datalogger.log(datalogger.createCV("Space Invaders", acc_1))
                    basic.showString("S:")
                    basic.showNumber(acc_1)
                    control.reset()
                }
            }
        }
        time_1 += 1
        if (acc_1 % 5 == 0) {
            speed_1 += -3
            acc_1 += 1
        }
        for (let index6 = 0; index6 <= 4; index6++) {
            if (enemyY_1[index6] > 4) {
                enemyY_1[index6] = -1
                enemyX_1[index6] = randint(0, 4)
                killed_1[index6] = 0
            }
        }
    }
}) // Space Invaders game
function game_mode_2() {
    while (obstacles_2.length > 0 && obstacles_2[0].get(LedSpriteProperty.X) == 0) {
        obstacles_2.removeAt(0).delete()
    }
    for (let obstacle_2 of obstacles_2) {
        obstacle_2.change(LedSpriteProperty.X, -1)
    }
    if (ticks_2 % 3 == 0) {
        empty_obstacle_2 = randint(0, 4)
        for (let index_2 = 0; index_2 <= 4; index_2++) {
            if (index_2 != empty_obstacle_2) {
                obstacles_2.push(game.createSprite(4, index_2))
            }
        }
    }
    for (let obstacle_2 of obstacles_2) {
        if (obstacle_2.get(LedSpriteProperty.X) == bird_2.get(LedSpriteProperty.X) && obstacle_2.get(LedSpriteProperty.Y) == bird_2.get(LedSpriteProperty.Y)) {
            game.pause()
            basic.clearScreen()
            music.play(music.createSoundExpression(WaveShape.Sawtooth, 321, 0, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            datalogger.log(datalogger.createCV("Flappy Bird", score_2))
            basic.showString("S:")
            basic.showNumber(score_2)
            control.reset()
        }
    }
    ticks_2 += 1
    score_2 += 0.25
    interval_2 += -0.2
    basic.pause(interval_2)
    game_mode_2()
} // Flapy bird game
function game_mode_3() {
    basic.clearScreen()
    let point_3 = 0
    let interval_step_3 = 1
    let interval_3 = 400
    let ball_x_3 = 3
    let ball_y_3 = 4
    let ball_dx_3 = -1
    let ball_dy_3 = -1
    bar_x_3 = 0
    led.plot(ball_x_3, ball_y_3)
    led.plot(bar_x_3, 4)
    led.plot(bar_x_3 + 1, 4)
    let in_game_3 = true
    while (in_game_3 == true) {
        if (ball_x_3 + ball_dx_3 > 4) {
            ball_dx_3 = ball_dx_3 * -1
        } else if (ball_x_3 + ball_dx_3 < 0) {
            ball_dx_3 = ball_dx_3 * -1
        }
        if (ball_y_3 + ball_dy_3 < 0) {
            ball_dy_3 = ball_dy_3 * -1
        } else if (ball_y_3 + ball_dy_3 > 3) {
            if (led.point(ball_x_3 + ball_dx_3, ball_y_3 + ball_dy_3)) {
                ball_dy_3 = ball_dy_3 * -1
                point_3 = point_3 + 1
                music.play(music.createSoundExpression(WaveShape.Square, 223, 1, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                if (interval_3 - interval_step_3 >= 0) {
                    interval_3 = interval_3 - interval_step_3
                }
            } else {
                in_game_3 = false
            }
        }
        if (in_game_3 == true) {
            led.plot(ball_x_3 + ball_dx_3, ball_y_3 + ball_dy_3)
            led.unplot(ball_x_3, ball_y_3)
            ball_x_3 = ball_x_3 + ball_dx_3
            ball_y_3 = ball_y_3 + ball_dy_3
            basic.pause(interval_3)
        } else {
            music.play(music.createSoundExpression(
                WaveShape.Sawtooth,
                321,
                0,
                255,
                0,
                100,
                SoundExpressionEffect.None,
                InterpolationCurve.Linear
            ), music.PlaybackMode.InBackground)
            datalogger.log(datalogger.createCV("Pong", point_3))
            basic.clearScreen()
            basic.showString("S:")
            basic.showNumber(point_3)
            control.reset()
        }
    }
} // Ping pong game
basic.forever(function () {
    if (game_mode == 4) {
        var_4 = 5000
        game.setScore(0)
        playerCar_4 = game.createSprite(2, 4)
        car_move_4 = true
        gameOn_4 = true
        while (gameOn_4 == true) {
            basic.pause(100)
        }
        game.pause()
        music.play(music.createSoundExpression(WaveShape.Sawtooth, 321, 0, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        datalogger.log(datalogger.createCV("Cars Game", game.score()))
        basic.clearScreen()
        basic.showString("S:")
        basic.showNumber(game.score())
        control.reset()
    }
}) // Cars game
function game_mode_4(car_4: game.LedSprite) {
    basic.pause(randint(0, var_4))
    while (gameOn_4 == true) {
        if (car_4.get(LedSpriteProperty.Y) == 4) {
            if (playerCar_4.isTouching(car_4)) {
                gameOn_4 = false
            } else {
                music.play(music.createSoundExpression(WaveShape.Noise, 2294, 2294, 238, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                game.setScore(game.score() + 1)
                var_4 += -1
                car_4.set(LedSpriteProperty.Y, 0)
                basic.pause(randint(0, var_4))
            }
        } else {
            car_4.change(LedSpriteProperty.Y, 1)
            basic.pause(500)
        }
    }
    game_mode_4(car_4)
} // Cars game
basic.forever(function () {
    if (game_mode == 4) {
        basic.pause(100)
        if (gameOn_4 == true) {
            let car0_4 = game.createSprite(0, 0)
            car0_4.set(LedSpriteProperty.Brightness, 20)
            game_mode_4(car0_4)
        }
    }
}) // Cars game
basic.forever(function () {
    if (game_mode == 4) {
        basic.pause(100)
        if (gameOn_4 == true) {
            let car1_4 = game.createSprite(1, 0)
            car1_4.set(LedSpriteProperty.Brightness, 20)
            game_mode_4(car1_4)
        }
    }
}) // Cars game
basic.forever(function () {
    if (game_mode == 4) {
        basic.pause(100)
        if (gameOn_4 == true) {
            let car2_4 = game.createSprite(2, 0)
            car2_4.set(LedSpriteProperty.Brightness, 20)
            game_mode_4(car2_4)
        }
    }
}) // Cars game
basic.forever(function () {
    if (game_mode == 4) {
        basic.pause(100)
        if (gameOn_4 == true) {
            let car3_4 = game.createSprite(3, 0)
            car3_4.set(LedSpriteProperty.Brightness, 20)
            game_mode_4(car3_4)
        }
    }
}) // Cars game
basic.forever(function () {
    if (game_mode == 4) {
        basic.pause(100)
        if (gameOn_4 == true) {
            let car4_4 = game.createSprite(4, 0)
            car4_4.set(LedSpriteProperty.Brightness, 20)
            game_mode_4(car4_4)
        }
    }
}) // Cars game