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
}
function draw_navigation_bar() {
    led.plotBrightness(0, 0, 20)
    led.plotBrightness(1, 0, 20)
    led.plotBrightness(2, 0, 20)
    led.plotBrightness(3, 0, 20)
    led.plotBrightness(4, 0, 20)
}
function clear_navigation_bar() {
    led.unplot(0, 0)
    led.unplot(1, 0)
    led.unplot(2, 0)
    led.unplot(3, 0)
    led.unplot(4, 0)
}
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
}
let menu = 1
let scroll_speed = 1

loading()
basic.pause(30)
basic.clearScreen()
menu_selection()