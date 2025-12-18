const { ReplaySubject } = require("rxjs");

const r = new ReplaySubject(2);
r.next(1);
r.next(2);
r.next(3);
r.subscribe(console.log);
