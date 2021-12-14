let bearing = 0
basic.forever(function () {
    bearing = input.compassHeading()
    if (bearing < 45 || bearing > 315) {
        basic.showString("N")
    } else {
        bearing = input.compassHeading()
        if (bearing < 45 || bearing > 135) {
            basic.showString("E")
        } else {
            bearing = input.compassHeading()
            if (bearing < 135 || bearing > 225) {
                basic.showString("S")
            } else {
                bearing = input.compassHeading()
                if (bearing < 225 || bearing > 315) {
                    basic.showString("w")
                }
            }
        }
    }
})
