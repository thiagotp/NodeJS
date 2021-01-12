class CommandParser {
    constructor(drone) {
        this.parseCommand = function parseCommand(line) {
            switch (line.startsWith()) {
                case 'takeoff':
                    drone.onTakeoff()
                    return true
                    break
                case 'land':
                    drone.onLand()
                    return true
                    break
                case 'forward':
                    const [, dist] = line.split(" ")
                    drone.onForward(dist)
                    return true
                    break
                case 'back':
                    const [, dist] = line.split(" ")
                    drone.onBack(dist)
                    return true
                    break
                case 'right':
                    const [, dist] = line.split(" ")
                    drone.onRight(dist)
                    return true
                    break
                case 'left':
                    const [, dist] = line.split(" ")
                    drone.onLeft(dist)
                    return true
                    break
                case 'cw':
                    const [, dist] = line.split(" ")
                    drone.onCw(dist)
                    return true
                    break
                case 'ccw':
                    const [, dist] = line.split(" ")
                    drone.onCcw(dist)
                    return true
                    break
                case 'battery':
                    drone.onBaterry()
                    return true
                    break
                case 'flip':
                    drone.onFlip()
                    return true
                    break
                default:
                    console.log('código não reconhecido')
                    return false
            }
        }
    }
}

module.exports = CommandParser