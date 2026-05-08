// // 1 - Realtime Messaging system

// const EventEmitter = require("events");
// const chatEvents = new EventEmitter(); // new -> Instance

// // on -> once it is started, it will never off.

// chatEvents.on('newMessage', (user, message) => {
//     console.log(`New message from ${user}: ${message}`);
// });



// chatEvents.emit('newMessage', "Narasimhan", "We have a session today");
// chatEvents.emit('newMessage', "Arun", "Noted. Will join on time");

// ----------------------------------------------------------------------------
// 2 - Payment Event
// We need to protect the duplicate payments

const EventEmitter = require("events");
const paymentEvent = new EventEmitter();

// once -> it will occur only once. It will automatically ignored
// the second entry

paymentEvent.once("processPayment", (amount) => {
    console.log(`Payment of ${amount} processed successfully`);
});

console.log("User clicked pay button");

paymentEvent.emit('processPayment', 599);

console.log("User clicked pay button again recheck it");
paymentEvent.emit('processPayment', 599); // second entry - it will be ignored