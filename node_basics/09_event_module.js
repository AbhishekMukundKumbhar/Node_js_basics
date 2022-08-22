const EventEmitter = require('events');

const customeEmiter  = new EventEmitter();

//listening to the event
customeEmiter.on('performEvent',(name, id)=>{
    console.log(`performEvent is called and name is ${name} with id ${id}`);
})
//we can have many functions for the same event
customeEmiter.on('performEvent',()=>{
    console.log("some other logic here");
})

//emitting to the event
customeEmiter.emit('performEvent', 'abhishek', 19);

//if we emit the event before difining it's response it will not trigger the callback as shown in below example
customeEmiter.emit('clicked')

customeEmiter.on('clicked',()=>{
    console.log("clicked event is trigered is called");
})