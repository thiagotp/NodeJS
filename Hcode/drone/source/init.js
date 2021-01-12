const readLine = require("readline")
const { createSocket } = require('dgram')
const CommandParser = require("./commandParser")
const Commander = require("./commander")
const { Console } = require("console")


const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

const TELLO_CMD_PORT = 8889
const TELLO_HOST = '192.168.10.1'

const getSocker = ()=>{
    const socket = createSocket('udp4')
    socket.bind(TELLO_CMD_PORT)
    return socket
}
(async function start(){
    const socket = getSocker()
    const cmder = new Commander(socket, TELLO_HOST, TELLO_CMD_PORT)
    await cmder.sendIntCommand()
    const cmdp = new CommandParser({
        onTakeoff: async() => {await cmder.sendTakeOff()},
        onLand: async() => {await cmder.sendLand()},
        onForward: async(dist) => {await cmder.sendForward(dist)},
        onBack: async(dist) => {await cmder.sendBack(dist)},
        onRight: async(dist) => {await cmder.sendRight(dist)},
        onLeft: async(dist) => {await cmder.sendLeft(dist)},
        onCw: async(dist) => {await cmder.sendCw(dist)},
        onCcw: async(dist) => {await cmder.sendCcw(dist)},
        onFlip: async() => {await cmder.sendFlip()},
        onBattery: async() => {await cmder.sendBattery()}
    })
    Console.log("Iniciando!")
    socket.on('message', (msg)=>{
        console.log(`DJI Tello: ${msg.toLocaleString}`)
    })
    socket.on('error', (err)=>{
        console.log(`DJI Tello: ${err}`)
    })
    socket.on('listening', ()=>{
        console.log(`DJI Tello socket is listening !`)
    })

    console.log("Enter a command: ")
    rl.on('line', (line)=>{
        if(!cmdp.parseCommand(line)){
            if(line == 'exit'){
                console.log("Bye")
                process.exit(0)
            }
            console.log("Not a valid command")
        }
    })
})()