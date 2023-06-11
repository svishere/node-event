const events=require('events')
const eventEmitter=new events.EventEmitter();
myEventHandle=()=>{
  console.log('I hear a scream!');
}

eventEmitter.on('scream',myEventHandle);
eventEmitter.emit('scream')
