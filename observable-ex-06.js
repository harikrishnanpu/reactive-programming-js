

const { fromEvent } = rxjs;
const { map, distinctUntilChanged } = rxjs.operators;




const event$ = fromEvent(document.getElementById('btn'), 'click');

const input$ = fromEvent(document.getElementById('input'), 'input');


input$.pipe(map(e => e.target.value), distinctUntilChanged(), map(v => document.getElementById('inp-text').textContent = v)).subscribe()

event$.subscribe(e => console.log(e.target)); 