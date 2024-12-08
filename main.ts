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
function silent_input_indicator(){
    music.setVolume(0)
    record.startRecording(record.BlockingState.Nonblocking)
    basic.pause(25)
    record.playAudio(record.BlockingState.Nonblocking)
    music.stopAllSounds()
    music.setVolume(255)
} // Toggle microphone LED on and off
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
            . # # # .
            . # . # .
            . # # # .
            . . . . .
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
    } else if (menu == 10) {
        settings_selection()
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
    } else if (game_mode == 5) {
        player_5 = [game.createSprite(0, 3), game.createSprite(0, 4)]
        obstacles_5 = []
        is_game_over_5 = false
    } else if (game_mode == 6) {
        basic.clearScreen()
        game_mode_6()
    } else if (game_mode == 7) {
        basic.clearScreen()
        ghost_7 = game.createSprite(0, 0)
        pac_man_7 = game.createSprite(2, 2)
        food_7 = game.createSprite(4, 4)
        ghost_7.set(LedSpriteProperty.Blink, 200)
        food_7.set(LedSpriteProperty.Brightness, 20)
        game_mode_7()
    } else if (game_mode == 8) {
        basic.clearScreen()
        canFall_8 = true
        while (!(gameOver_8)) {
            y_8 = 0
            x_8 = randint(0, 4)
            canFall_8 = true
            led.plot(x_8, y_8)
            while (canFall_8) {
                basic.pause(delay_8)
                tryFall()
            }
        }
        basic.clearScreen()
        datalogger.log(datalogger.createCV("Tetris", score_8))
        basic.showString("S:")
        basic.showNumber(score_8)
        control.reset()
    } else if (game_mode == 9) {
        game_mode_9()
    } else if (game_mode == 10) {
        basic.clearScreen()
        led.plot(currentX_10, currentY_10)
        snake()
        getNewDot()
    }
} // Game selection
function input_selection() {
    while (true) {
        if (submenu == 0) {
            images.createImage(`
            . . . . .
            . # # . #
            # . . . .
            # . . . .
            . # # . .
            `).scrollImage(1, scroll_speed)
        } else if (submenu == 1) {
            images.createImage(`
            . . . . .
            . # # # .
            # . . . #
            . # . # .
            . # # # .
            `).scrollImage(1, scroll_speed)
        } else if (submenu == 2) {
            images.createImage(`
            . . . . .
            . # . # .
            . # . . .
            # # # . .
            . # . . .
            `).scrollImage(1, scroll_speed)
        } else if (submenu == 3) {
            images.createImage(`
            . . . . .
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            `).scrollImage(1, scroll_speed)
        } else if (submenu == 4) {
            images.createImage(`
            . . . . .
            . . . . .
            # . # . .
            . # . . #
            # . # . #
            `).scrollImage(1, scroll_speed)
        } else if (submenu == 5) {
            images.createImage(`
            . . . . .
            # . # . .
            # . # . .
            . # . . #
            # # . . #
            `).scrollImage(1, scroll_speed)
        } else if (submenu == 6) {
            images.createImage(`
            . . . . .
            # # # . .
            . # # . .
            # . . . #
            # # # . #
            `).scrollImage(1, scroll_speed)
        } else if (submenu == 7) {
            images.createImage(`
            . . . . .
            . . . . .
            # # # . .
            # . # . #
            # # # . #
            `).scrollImage(1, scroll_speed)
        } else if (submenu == 8) {
            images.createImage(`
            . . . . .
            . . . . #
            # . # . #
            . # . . .
            # . # . .
            `).scrollImage(1, scroll_speed)
        } else if (submenu == 9) {
            images.createImage(`
            . . . . .
            # . # . #
            # # # . #
            . # . . #
            # # . . .
            `).scrollImage(1, scroll_speed)
        } else if (submenu == 10) {
            images.createImage(`
            . . . . .
            # # # . #
            . # . . #
            # . . . .
            # # # . .
            `).scrollImage(1, scroll_speed)
        } else if (submenu == 11) {
            images.createImage(`
            . . . . .
            . . . . #
            # # # . #
            # . # . .
            # # # . .
            `).scrollImage(1, scroll_speed)
        }
        draw_navigation_bar()
        if (submenu == 0) {
            led.plot(0, 0)
        } else if (submenu == 1) {
            led.plot(1, 0)
        } else if (submenu == 10) {
            led.plot(3, 0)
        } else if (submenu == 11) {
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
                    submenu = 11
                } else {
                    submenu--
                }
                break
            } else if (input.buttonIsPressed(Button.B)) {
                if (submenu == 11) {
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
    } else if (submenu == 3) {
        compass_input()
    } else {
        
    }
    input_mode = submenu
} // Game selection
function settings_selection() {
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
            if (settings_sound == 0){
                images.createImage(`
                . . . . .
                . # . # .
                . . # . .
                . # . # .
                . . . . .
                `).scrollImage(1, scroll_speed)
            } else {
                images.createImage(`
                . . . . .
                . . # # .
                . . # . #
                # # # . .
                # # # . .
                `).scrollImage(1, scroll_speed)
            }
        } else if (submenu == 2) {
            if (settings_volume < 5) {
                images.createImage(`
                . . . . .
                . . . . .
                # . . . .
                # . . . .
                . . . . .
                `).scrollImage(1, scroll_speed)
                if (settings_volume >= 1) {
                    music.setVolume(50)
                    led.plotBrightness(2, 1, 50)
                }
                if (settings_volume >= 2) {
                    music.setVolume(100)
                    led.plotBrightness(3, 2, 50)
                }
                if (settings_volume >= 3) {
                    music.setVolume(150)
                    led.plotBrightness(3, 3, 50)
                }
                if (settings_volume >= 4) {
                    music.setVolume(200)
                    led.plotBrightness(2, 4, 50)
                }

            } else {
                music.setVolume(255)
                images.createImage(`
                . . . . .
                . . # . .
                # . . # .
                # . . # .
                . . # . .
                `).scrollImage(1, scroll_speed)
                music.setVolume(255)
            }
        } else if (submenu == 3) {
            if (settings_brightness == 1) {
                led.setBrightness(50)
                images.createImage(`
                . . . . .
                . . . . .
                # . . . .
                . # . # .
                . # # # .
                `).scrollImage(1, scroll_speed)
            } else if (settings_brightness == 2) {
                led.setBrightness(100)
                images.createImage(`
                . . . . .
                . # . . .
                # . . . .
                . # . # .
                . # # # .
                `).scrollImage(1, scroll_speed)
            } else if (settings_brightness == 3) {
                led.setBrightness(150)
                images.createImage(`
                . . . . .
                . # # . .
                # . . . .
                . # . # .
                . # # # .
                `).scrollImage(1, scroll_speed)
            } else if (settings_brightness == 4) {
                led.setBrightness(200)
                images.createImage(`
                . . . . .
                . # # # .
                # . . . .
                . # . # .
                . # # # .
                `).scrollImage(1, scroll_speed)
            } else if (settings_brightness == 5) {
                led.setBrightness(255)
                images.createImage(`
                . . . . .
                . # # # .
                # . . . #
                . # . # .
                . # # # .
                `).scrollImage(1, scroll_speed)
            }
        } else if (submenu == 4) {
            if (settings_soundoutput == 1) {
                images.createImage(`
                . . . . .
                . # # # .
                . # . # .
                . # # # .
                . . . . .
                `).scrollImage(1, scroll_speed)
            } else {
                images.createImage(`
                . . . . .
                # # # . .
                # . # . .
                # # # . .
                # . . . .
                `).scrollImage(1, scroll_speed)
            }
        } 
        draw_navigation_bar()
        if (submenu == 0) {
            led.plot(0, 0)
        } else if (submenu == 1) {
            led.plot(1, 0)
        } else if (submenu == 3) {
            led.plot(3, 0)
        } else if (submenu == 4) {
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
                    submenu = 4
                } else {
                    submenu--
                }
                break
            } else if (input.buttonIsPressed(Button.B)) {
                if (submenu == 4) {
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
            scroll_speed = 1
            if (submenu == 1) {
                if (settings_sound == 0) {
                    if (settings_soundoutput == 1) {
                        music.setBuiltInSpeakerEnabled(true)
                        pins.setAudioPinEnabled(false)
                    } else {
                        music.setBuiltInSpeakerEnabled(false)
                        pins.setAudioPinEnabled(true)
                    }
                    settings_sound = 1
                } else {
                    music.setBuiltInSpeakerEnabled(false)
                    pins.setAudioPinEnabled(false)
                    settings_sound = 0
                }
                flashstorage.put("sound", convertToText(settings_sound))
            } else if (submenu == 2) {
                if (settings_volume == 5) {
                    settings_volume = 1
                } else {
                    settings_volume++
                }
                flashstorage.put("volume", convertToText(settings_volume))
            } else if (submenu == 3) {
                if (settings_brightness == 5) {
                    settings_brightness = 1
                } else {
                    settings_brightness++
                }
                flashstorage.put("brightness", convertToText(settings_brightness))
            } else if (submenu == 4) {
                if (settings_soundoutput == 1) {
                    music.setBuiltInSpeakerEnabled(false)
                    pins.setAudioPinEnabled(true)
                    settings_soundoutput = 2
                } else {
                    music.setBuiltInSpeakerEnabled(true)
                    pins.setAudioPinEnabled(false)
                    settings_soundoutput = 1
                }
                flashstorage.put("soundoutput", convertToText(settings_soundoutput))
            }
            if (submenu == 0) {
                break
            }
            
        }
    }
    if (submenu == 0) {
        menu_selection()
    }
} // Settings selection
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
        if (playerCar_4.get(LedSpriteProperty.X) > 0) {
            playerCar_4.change(LedSpriteProperty.X, -1)
        }
    } else if (game_mode == 5) {
        music.play(music.createSoundExpression(WaveShape.Sawtooth, 891, 1198, 255, 0, 200, SoundExpressionEffect.None,InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        if (!(is_game_over_5)) {
            if (!(is_game_over_5)) {
                player_5[1].change(LedSpriteProperty.Y, -1)
                player_5[0].change(LedSpriteProperty.Y, -1)
            }
            basic.pause(215)
            if (!(is_game_over_5)) {
                player_5[1].change(LedSpriteProperty.Y, -1)
                player_5[0].change(LedSpriteProperty.Y, -1)
            }
            basic.pause(215)
            if (!(is_game_over_5)) {
                player_5[1].change(LedSpriteProperty.Y, -1)
                player_5[0].change(LedSpriteProperty.Y, -1)
            }
            basic.pause(215)
            if (!(is_game_over_5)) {
                player_5[1].change(LedSpriteProperty.Y, 1)
                player_5[0].change(LedSpriteProperty.Y, 1)
            }
            basic.pause(215)
            if (!(is_game_over_5)) {
                player_5[1].change(LedSpriteProperty.Y, 1)
                player_5[0].change(LedSpriteProperty.Y, 1)
            }
            basic.pause(215)
            if (!(is_game_over_5)) {
                player_5[1].change(LedSpriteProperty.Y, 1)
                player_5[0].change(LedSpriteProperty.Y, 1)
            }
        }
    } else if (game_mode == 6) {
        l_6 = 0
        s_6 = 0
    } else if (game_mode == 8) {
        led.unplot(x_8, y_8)
        if (x_8 > 0 && !(led.point(x_8 - 1, y_8))) {
            x_8 = x_8 - 1
        }
        led.plot(x_8, y_8)
    } else if (game_mode == 9) {
        if (user_9 == 0) {
            ax_9[stepA_9] = currX_9
            ay_9[stepA_9] = currY_9
            stepA_9 += 1
            user_9 = 1
            currX_9 = 2
            currY_9 = 2
        }
    } else if (game_mode == 10) {
        switch (currentDirection_10) {
            case Dir_10.Up:
                currentDirection_10 = Dir_10.Left; break
            case Dir_10.Right:
                currentDirection_10 = Dir_10.Up; break
            case Dir_10.Down:
                currentDirection_10 = Dir_10.Right; break
            case Dir_10.Left:
                currentDirection_10 = Dir_10.Down; break
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
        if (playerCar_4.get(LedSpriteProperty.X) < 4) {
            playerCar_4.change(LedSpriteProperty.X, 1)
        }
    } else if (game_mode == 5) {
        music.play(music.createSoundExpression(WaveShape.Square, 223, 1, 79, 39, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        if (!(is_game_over_5)) {
            player_5[0].change(LedSpriteProperty.Y, 1)
            basic.pause(750)
            player_5[0].change(LedSpriteProperty.Y, -1)
        }
    } else if (game_mode == 8) {
        led.unplot(x_8, y_8)
        if (x_8 < 4 && !(led.point(x_8 + 1, y_8))) {
            x_8 = x_8 + 1
        }
        led.plot(x_8, y_8)
    } else if (game_mode == 9) {
        if (user_9 == 1) {
            bx_9[stepB_9] = currX_9
            by_9[stepB_9] = currY_9
            stepB_9 += 1
            user_9 = 0
            currX_9 = 2
            currY_9 = 2
        }
    } else if (game_mode == 10) {
        switch (currentDirection_10) {
            case Dir_10.Up:
                currentDirection_10 = Dir_10.Right; break
            case Dir_10.Right:
                currentDirection_10 = Dir_10.Down; break
            case Dir_10.Down:
                currentDirection_10 = Dir_10.Left; break
            case Dir_10.Left:
                currentDirection_10 = Dir_10.Up; break
        }
    }
}) // On button B pressed
input.onButtonPressed(Button.AB, function () {
    if (game_mode == 1) {
        shoot_1 = 1
        music.play(music.createSoundExpression(WaveShape.Sawtooth, 4707, 1, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    } else if (game_mode == 9) {
        state_9 = 1
    }
}) // On buttons AB pressed

// Global setting
pins.setAudioPin(DigitalPin.P0)
// System variables
let menu = 1
let submenu = 0
let scroll_speed = 1
let game_mode = 0
let input_mode = 0
let input_view_mode = 1
let graph_meter = 1
// Read flash storage
let settings_sound = parseFloat(flashstorage.getOrDefault("sound", "0"))
if (settings_sound == 0) {
    music.setBuiltInSpeakerEnabled(false)
    pins.setAudioPinEnabled(false)
} else if (settings_sound == 1) {
    music.setBuiltInSpeakerEnabled(true)
    pins.setAudioPinEnabled(true)
}
let settings_volume = parseFloat(flashstorage.getOrDefault("volume", "5"))
if (settings_volume == 1) {
    music.setVolume(50)
} else if (settings_volume == 2) {
    music.setVolume(100)
} else if (settings_volume == 3) {
    music.setVolume(150)
} else if (settings_volume == 4) {
    music.setVolume(200)
} else if (settings_volume == 5) {
    music.setVolume(255)
}
let settings_brightness = parseFloat(flashstorage.getOrDefault("brightness", "5"))
if (settings_brightness == 1) {
    led.setBrightness(50)
} else if (settings_brightness == 2) {
    led.setBrightness(100)
} else if (settings_brightness == 3) {
    led.setBrightness(150)
} else if (settings_brightness == 4) {
    led.setBrightness(200)
} else if (settings_brightness == 5) {
    led.setBrightness(255)
}
let settings_soundoutput = parseFloat(flashstorage.getOrDefault("soundoutput", "1"))
if (settings_sound == 1) {
    if (settings_soundoutput == 1) {
        music.setBuiltInSpeakerEnabled(true)
        pins.setAudioPinEnabled(false)
    } else if (settings_soundoutput == 2) {
        music.setBuiltInSpeakerEnabled(false)
        pins.setAudioPinEnabled(true)
    }
}
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
let generate_obstacles_5 = 0
let dummy_variable_5: game.LedSprite[] = []
let is_game_over_5 = false
let obstacles_5: game.LedSprite[][] = []
let player_5: game.LedSprite[] = []
let score_5 = 0
let i_6 = 90
let s_6 = 0
let j_6 = 0
let l_6 = 0
let h_6 = [4, 4, 2, 1, 2]
let x_6 = [2, 3, 4, 4, 4, 3, 2, 1, 0, 0, 0, 1]
let y_6 = [0, 0, 1, 2, 3, 4, 4, 4, 3, 2, 1, 0]
let interval_7 = 1000
let ghost_7: game.LedSprite = null
let pac_man_7: game.LedSprite = null
let food_7: game.LedSprite = null
let rowFull_8 = false
let x_8 = 0
let y_8 = 0
let gameOver_8 = false
let canFall_8 = false
let delay_8 = 500
let score_8 = 0
let i_9 = 0
let by_9: number[] = []
let bx_9: number[] = []
let brightnessB_9 = 0
let brightnessA_9 = 0
let brightness_9 = 0
let stepB_9 = 0
let show_9 = 0
let winner_9 = 0
let currY_9 = 0
let ay_9: number[] = []
let currX_9 = 0
let stepA_9 = 0
let ax_9: number[] = []
let user_9 = 0
let winY_9: number[] = []
let winX_9: number[] = []
let state_9 = 0
state_9 = -1
winX_9 = [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 1, 1, 2, 2, 2, 3, 3, 3, 1, 2, 3, 1, 2, 3]
winY_9 = [1, 1, 1, 2, 2, 2, 3, 3, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 3, 2, 1]
enum Dir_10 { Up = 0, Down, Left, Right }
let gameSpeed_10 = 800
let gameRunning_10 = true
let currentDirection_10: Dir_10
currentDirection_10 = Dir_10.Right
let currentX_10 = 0
let currentY_10 = 2
let dotX_10: number = 0
let dotY_10: number = 0
let score_10 = 0
let snakePartsX_10: number[]
snakePartsX_10 = [0]
let snakePartsY_10: number[]
snakePartsY_10 = [2]
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
function gameOver() {
    is_game_over_5 = true
    for (let obstacle_group_3 of obstacles_5) {
        for (let an_obstacle_sprite_3 of obstacle_group_3) {
            obstacle_group_3.removeAt(obstacle_group_3.indexOf(an_obstacle_sprite_3)).delete()
        }
        dummy_variable_5 = obstacles_5.removeAt(obstacles_5.indexOf(obstacle_group_3))
    }
    for (let player_sprite_2 of player_5) {
        player_5.removeAt(player_5.indexOf(player_sprite_2)).delete()
    }
    basic.clearScreen()
    datalogger.log(datalogger.createCV("Dinasour Game", score_5))
    basic.showString("S:")
    basic.showNumber(score_5)
    control.reset()
} // Dinasour game
basic.forever(function () {
    if (game_mode == 5) {
        if (!(is_game_over_5)) {
            basic.pause(225)
            for (let obstacle_group_1 of obstacles_5) {
                for (let an_obstacle_sprite_1 of obstacle_group_1) {
                    if (an_obstacle_sprite_1.get(LedSpriteProperty.X) == 0) {
                        obstacle_group_1.removeAt(obstacle_group_1.indexOf(an_obstacle_sprite_1)).delete()
                        score_5 += 1
                        music.play(music.createSoundExpression(WaveShape.Noise, 2294, 2294, 238, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                    } else {
                        an_obstacle_sprite_1.change(LedSpriteProperty.X, -1)
                    }
                }
                if (obstacle_group_1.length == 0) {
                    dummy_variable_5 = obstacles_5.removeAt(obstacles_5.indexOf(obstacle_group_1))
                }
            }
        }
    }
}) // Dinasour game
basic.forever(function () {
    if (game_mode == 5) {
        if (!(is_game_over_5)) {
            basic.pause(1750)
            generate_obstacles_5 = randint(0, 4)
            if (generate_obstacles_5 == 0) {
                obstacles_5.push([game.createSprite(4, 3), game.createSprite(4, 4)])
            } else if (generate_obstacles_5 == 1) {
                obstacles_5.push([game.createSprite(4, 4)])
            } else if (generate_obstacles_5 == 2) {
                obstacles_5.push([game.createSprite(4, 3)])
            } else if (generate_obstacles_5 == 3) {
                obstacles_5.push([game.createSprite(4, 2)])
            } else {
                obstacles_5.push([game.createSprite(4, 1)])
            }
        }
    }
}) // Dinasour game
basic.forever(function () {
    if (game_mode == 5) {
        if (!(is_game_over_5)) {
            for (let obstacle_group_2 of obstacles_5) {
                for (let an_obstacle_sprite_2 of obstacle_group_2) {
                    for (let player_sprite_1 of player_5) {
                        if (an_obstacle_sprite_2.isTouching(player_sprite_1)) {
                            music.play(music.createSoundExpression(WaveShape.Sawtooth, 321, 0, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                            gameOver()
                        }
                    }
                }
            }
        }
    }
}) // Dinasour game
function game_mode_6() {
    while (!(j_6 == 0 && l_6 == 6)) {
        let w = 0
        basic.pause(i_6)
        if (j_6) {
            led.unplot(2, h_6[j_6])
            j_6 += 1
            if (j_6 > 3) {
                j_6 = 0
            }
        }
        led.plot(2, h_6[j_6])
        if (w == 0) {
            led.unplot(x_6[l_6], y_6[l_6])
            l_6 += 1
            if (l_6 == 12) {
                l_6 = 0
            }
            led.plot(x_6[l_6], y_6[l_6])
        }
        if (!(j_6) && input.buttonIsPressed(Button.B)) {
            j_6 = 1
        }
        if (l_6 == 6) {
            music.play(music.createSoundExpression(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            s_6 += 1
            i_6 += -0.5
        }
    }
    datalogger.log(datalogger.createCV("Jumping Rope", s_6))
    basic.showNumber(s_6)
    basic.clearScreen()
    game_mode_6()
} // Jumping rope game
function game_mode_7() {
    while (true) {
        basic.pause(interval_7)
        if (ghost_7.get(LedSpriteProperty.X) < pac_man_7.get(LedSpriteProperty.X)) {
            ghost_7.change(LedSpriteProperty.X, 1)
        } else if (ghost_7.get(LedSpriteProperty.X) > pac_man_7.get(LedSpriteProperty.X)) {
            ghost_7.change(LedSpriteProperty.X, -1)
        }
        if (ghost_7.get(LedSpriteProperty.Y) < pac_man_7.get(LedSpriteProperty.Y)) {
            ghost_7.change(LedSpriteProperty.Y, 1)
        } else if (ghost_7.get(LedSpriteProperty.Y) > pac_man_7.get(LedSpriteProperty.Y)) {
            ghost_7.change(LedSpriteProperty.Y, -1)
        }
        if (input.acceleration(Dimension.X) > 200) {
            pac_man_7.change(LedSpriteProperty.X, 1)
        } else if (input.acceleration(Dimension.X) < -200) {
            pac_man_7.change(LedSpriteProperty.X, -1)
        }
        if (input.acceleration(Dimension.Y) > 200) {
            pac_man_7.change(LedSpriteProperty.Y, 1)
        } else if (input.acceleration(Dimension.Y) < -200) {
            pac_man_7.change(LedSpriteProperty.Y, -1)
        }
        if (pac_man_7.isTouching(food_7)) {
            music.play(music.createSoundExpression(WaveShape.Noise, 2294, 2294, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            game.addScore(1)
            interval_7 += -10
            food_7.set(LedSpriteProperty.X, randint(0, 4))
            food_7.set(LedSpriteProperty.Y, randint(0, 4))
            if (food_7.get(LedSpriteProperty.X) > 2 && food_7.get(LedSpriteProperty.Y) > 2) {
                ghost_7.set(LedSpriteProperty.X, 0)
                ghost_7.set(LedSpriteProperty.Y, 0)
            } else if (food_7.get(LedSpriteProperty.X) < 2 && food_7.get(LedSpriteProperty.Y) < 2) {
                ghost_7.set(LedSpriteProperty.X, 4)
                ghost_7.set(LedSpriteProperty.Y, 4)
            } else if (food_7.get(LedSpriteProperty.X) > 2 && food_7.get(LedSpriteProperty.Y) < 2) {
                ghost_7.set(LedSpriteProperty.X, 0)
                ghost_7.set(LedSpriteProperty.Y, 4)
            } else {
                ghost_7.set(LedSpriteProperty.X, 4)
                ghost_7.set(LedSpriteProperty.Y, 0)
            }
        }
        if (ghost_7.isTouching(pac_man_7)) {
            game.pause()
            music.play(music.createSoundExpression(WaveShape.Sawtooth, 321, 0, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            datalogger.log(datalogger.createCV("Pac-Man", game.score()))
            basic.clearScreen()
            basic.showString("S:")
            basic.showNumber(game.score())
            control.reset()
        }
    }
} // Pac-Man game
function tryFall() {
    canFall_8 = y_8 < 4 && !(led.point(x_8, y_8 + 1))
    if (canFall_8) {
        led.unplot(x_8, y_8)
        y_8 = y_8 + 1
        led.plot(x_8, y_8)
    } else {
        gameOver_8 = y_8 == 0
    }
    checkFullRow()
} // Tetris
function checkFullRow() {
    rowFull_8 = true
    for (let xx = 0; xx <= 5 - 1; xx++) {
        if (!(led.point(xx, 4))) {
            rowFull_8 = false
        }
    }
    if (rowFull_8) {
        delay_8 += -10
        score_8 += 1
        music.play(music.createSoundExpression(WaveShape.Noise, 2294, 2294, 238, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        for (let xx2 = 0; xx2 <= 5 - 1; xx2++) {
            led.unplot(xx2, 4)
        }
        for (let yy = 3; yy > 0; yy--) {
            for (let xx3 = 0; xx3 < 5; xx3++) {
                if (led.point(xx3, yy)) {
                    led.unplot(xx3, yy)
                    led.plot(xx3, yy + 1)
                }
            }
        }
    }
} // Tetris
function game_mode_9() {
    if (state_9 == 0) {
        basic.showLeds(`
            . # . # .
            # # # # #
            . # . # .
            # # # # #
            . # . # .
            `)
    } else if (state_9 == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        for (let i = 0; i <= 4; i++) {
            led.plotBrightness(i, 0, 1)
        }
        for (let i = 0; i <= 4; i++) {
            led.plotBrightness(i, 4, 1)
        }
        for (let i = 0; i <= 4; i++) {
            led.plotBrightness(0, i, 1)
        }
        for (let i = 0; i <= 4; i++) {
            led.plotBrightness(4, i, 1)
        }
        state_9 = 2
        currX_9 = 2
        currY_9 = 2
    } else if (state_9 == 2) {
        if (input.isGesture(Gesture.LogoUp)) {
            if (currY_9 < 3) {
                currY_9 += 1
            }
        } else if (input.isGesture(Gesture.LogoDown)) {
            if (currY_9 > 1) {
                currY_9 += -1
            }
        } else if (input.isGesture(Gesture.TiltLeft)) {
            if (currX_9 > 1) {
                currX_9 += -1
            }
        } else if (input.isGesture(Gesture.TiltRight)) {
            if (currX_9 < 3) {
                currX_9 += 1
            }
        }
        if (show_9 == 0) {
            brightness_9 = 0
            show_9 = 1
        } else {
            if (user_9 == 0) {
                brightness_9 = brightnessA_9
            } else {
                brightness_9 = brightnessB_9
            }
            show_9 = 0
        }
        clearall()
        led.plotBrightness(currX_9, currY_9, brightness_9)
        showall()
        winner_check()
    } else {
        init()
    }
    basic.pause(500)
    game_mode_9()
} // Tic-Tac-Toe
function init() {
    state_9 = 0
    user_9 = 0
    winner_9 = -1
    show_9 = 0
    stepA_9 = 0
    stepB_9 = 0
    brightness_9 = 0
    brightnessA_9 = 255
    brightnessB_9 = 5
    ax_9 = [-1, -1, -1, -1, -1]
    ay_9 = [-1, -1, -1, -1, -1]
    bx_9 = [-1, -1, -1, -1, -1
    ]
    by_9 = [-1, -1, -1, -1, -1]
} // Tic-Tac-Toe
function clearall() {
    for (let i = 0; i <= 2; i++) {
        led.plotBrightness(i + 1, 1, 0)
        led.plotBrightness(i + 1, 2, 0)
        led.plotBrightness(i + 1, 3, 0)
    }
} // Tic-Tac-Toe
function winner_check() {
    for (let index = 0; index <= 7; index++) {
        i_9 = index
        winner_case()
        if (winner_9 != -1) {
            break;
        }
    }
    if (winner_9 != -1) {
        state_9 = -1
        led.setBrightness(255)
        basic.showString("WINNER")
        for (let index = 0; index < 3; index++) {
            if (winner_9 == 0) {
                basic.showString("A")
            } else {
                basic.showString("B")
            }
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.pause(100)
        }
    } else {
        if (stepA_9 == 5) {
            state_9 = -1
            led.setBrightness(255)
            basic.showString("TIE")
        }
    }
} // Tic-Tac-Toe
function winner_case() {
    for (let check1 = 0; check1 <= 4; check1++) {
        if (ax_9[check1] == winX_9[i_9 * 3 + 0] && ay_9[check1] == winY_9[i_9 * 3 + 0]) {
            for (let check2 = 0; check2 <= 4; check2++) {
                if (ax_9[check2] == winX_9[i_9 * 3 + 1] && ay_9[check2] == winY_9[i_9 * 3 + 1]) {
                    for (let check3 = 0; check3 <= 4; check3++) {
                        if (ax_9[check3] == winX_9[i_9 * 3 + 2] && ay_9[check3] == winY_9[i_9 * 3 + 2]) {
                            check3 = 5
                            winner_9 = 0
                            return 1
                        }
                    }
                    check2 = 5
                }
            }
            check1 = 5
        }
    }
    for (let check1 = 0; check1 <= 4; check1++) {
        if (bx_9[check1] == winX_9[i_9 * 3 + 0] && by_9[check1] == winY_9[i_9 * 3 + 0]) {
            for (let check2 = 0; check2 <= 4; check2++) {
                if (bx_9[check2] == winX_9[i_9 * 3 + 1] && by_9[check2] == winY_9[i_9 * 3 + 1]) {
                    for (let check3 = 0; check3 <= 4; check3++) {
                        if (bx_9[check3] == winX_9[i_9 * 3 + 2] && by_9[check3] == winY_9[i_9 * 3 + 2]) {
                            check3 = 5
                            winner_9 = 1
                            return 1
                        }
                    }
                    check2 = 5
                }
            }
            check1 = 5
        }
    }
    return 0
} // Tic-Tac-Toe
function showall() {
    for (let i = 0; i <= 4; i++) {
        led.plotBrightness(ax_9[i], ay_9[i], brightnessA_9)
        led.plotBrightness(bx_9[i], by_9[i], brightnessB_9)
    }
} // Tic-Tac-Toe
function snake() {
    loops.everyInterval(gameSpeed_10, () => {
        if (gameRunning_10) {
            let nextX = currentX_10
            let nextY = currentY_10
            switch (currentDirection_10) {
                case Dir_10.Up:
                    nextY--; break
                case Dir_10.Right:
                    nextX++; break
                case Dir_10.Down:
                    nextY++; break
                case Dir_10.Left:
                    nextX--; break
            }
            if (!hitDot(nextX, nextY) && led.point(nextX, nextY)) {
                loseGame()
            } else {
                currentX_10 = nextX
                currentY_10 = nextY
                if (currentX_10 == 5) {
                    currentX_10 = 0
                }
                if (currentY_10 == 5) {
                    currentY_10 = 0
                }
                if (currentX_10 == -1) {
                    currentX_10 = 4
                }
                if (currentY_10 == -1) {
                    currentY_10 = 4
                }
                led.plot(currentX_10, currentY_10)
                snakePartsX_10.push(currentX_10);
                snakePartsY_10.push(currentY_10);
                if (hitDot(currentX_10, currentY_10)) {
                    score_10++
                    music.play(music.createSoundExpression(WaveShape.Noise, 2294, 2294, 238, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                    getNewDot()
                    if (score_10 % 1 == 0 && gameSpeed_10 > 500) {
                        gameSpeed_10 = gameSpeed_10 - 25
                    } else {
                        dropTail()
                    }
                } else {
                    dropTail()
                }
            }
        }
        basic.pause(gameSpeed_10)
    })
} // Snake
function getNewDot() {
    let pointTail = getNotLit()
    dotX_10 = pointTail.X;
    dotY_10 = pointTail.Y;
    led.plotBrightness(dotX_10, dotY_10, 100)
} // Snake
function getNotLit(): { X: number, Y: number } {
    let x = randint(0, 4)
    let y = randint(0, 4)
    while (led.point(x, y)) {
        x = randint(0, 4)
        y = randint(0, 4)
    }
    return { X: x, Y: y }
} // Snake
function hitDot(x: number, y: number) {
    return x == dotX_10 && y == dotY_10
} // Snake
function dropTail() {
    led.unplot(snakePartsX_10[0], snakePartsY_10[0])
    snakePartsX_10.shift()
    snakePartsY_10.shift()
} // Snake
function loseGame() {
    music.play(music.createSoundExpression(WaveShape.Sawtooth, 321, 0, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    basic.showAnimation(`
        ..... ..... ..... ..... #####
        ..... ..... ..... ##### ##### 
        ..... ..... ##### ##### ##### 
        ..... ##### ##### ##### ##### 
        ##### ##### ##### ##### ##### 
        `, 80)
    basic.clearScreen()
    datalogger.log(datalogger.createCV("Snake", score_10))
    basic.pause(300)
    basic.showString("S:")
    basic.showNumber(score_10, 100)
    control.reset()
} // Snake
function compass_input() {
    
}