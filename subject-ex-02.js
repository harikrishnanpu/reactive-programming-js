const { BehaviorSubject } = require("rxjs");



const behaviourSubject = new BehaviorSubject('intialvalue ');

behaviourSubject.subscribe(v => console.log("sub1: "+v));

behaviourSubject.next(5)


behaviourSubject.subscribe(v => console.log("sub2: "+v));

behaviourSubject.next(6)