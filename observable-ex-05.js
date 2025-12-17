import { interval, timer } from "rxjs";



// const timer1$ = interval(1000);

// timer1$.subscribe(val => console.log(val));
// timer1$.subscribe(val => console.log(val));
// timer1$.subscribe(val => console.log(val));



timer(2000).subscribe(console.log);
