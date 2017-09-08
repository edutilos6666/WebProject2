var events = require("events")

var emitter = new events.EventEmitter()


var listenerNames = [
    "reading",
    "writing",
    "speaking",
    "listening"
]



for(var name of listenerNames) {
    emitter.on(name,()=> {
        console.log(`${name} was emitted.`);
    });
}



for(var name of listenerNames) {
    emitter.emit(name);
}



