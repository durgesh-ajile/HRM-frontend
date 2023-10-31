import  io  from 'socket.io-client';

const socket = io(`https://braided-complex-403612.el.r.appspot.com/`);
console.log(socket)

export default socket;