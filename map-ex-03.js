


const { fromEvent, of, interval } = rxjs;
const { exhaustMap, take } = rxjs.operators;



const exhaustMap$ = fromEvent(document.getElementById('login'), 'click')

exhaustMap$.pipe(exhaustMap(e => interval(1000).pipe(take(1)))).subscribe(console.log)