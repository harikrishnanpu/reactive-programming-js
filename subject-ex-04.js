const { AsyncSubject } = require("rxjs");



const a = new AsyncSubject();
a.next(1); a.next(2);
a.complete();


a.subscribe(console.log);