import eventEmitter from './my-event';

const event = new eventEmitter();
const event1 = event.on('click', (a,b) => {
  console.log(a,b)
});

const event2 =event.once('click', (a) => {
  console.log(a)
});

event.emit('click',1,2);

event.emit('click',1,2);
