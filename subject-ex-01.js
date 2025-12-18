const { Subject } = require("rxjs");

const subject = new Subject();

subject.next(5)


subject.subscribe(console.log);

subject.subscribe(console.log);

subject.next(4)
subject.next(3.5)

subject.subscribe(v => console.log("sub: "+v))
