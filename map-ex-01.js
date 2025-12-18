const { map, of } = require("rxjs");


of(1, 2).pipe(map(e => e)).subscribe(console.log);


