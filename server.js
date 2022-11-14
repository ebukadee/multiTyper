const io = require('socket.io')


io.on('connecton', (msg)=>{
    console.log('someone connected')
})
