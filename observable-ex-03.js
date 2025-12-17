import { of } from "rxjs";

const numbers$ = of(1, 2, 3);
const strings$ = of('ndnd', 'dkndind', 'djibhud');

const sample$ = of([3,5], 'ef', 45, 3/4, Math.floor(4.5), 5.3, Promise.resolve(4), {name: 'hari', k: { k : 'ff'}});


// numbers$.subscribe({
//     next: v => console.log(v)
// });

// strings$.subscribe({
//     next: v => console.log(v)
// });

sample$.subscribe({
    next: v => console.log(v)
});


// of(5, 10).subscribe(console.log);

