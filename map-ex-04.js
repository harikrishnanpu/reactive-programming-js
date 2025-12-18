
const { fromEvent, of } = rxjs;
const { concatMap, delay, tap ,  mergeMap} = rxjs.operators;

const btn = document.getElementById('btn');
const btn2 = document.getElementById('btn2');


fromEvent(btn, 'click')
  .pipe(
    concatMap(() =>
      of('API response').pipe(
        delay(1000),
        tap(() => console.log('API call finished'))
      )
    )
  )
  .subscribe(response => {
    console.log(response);
  });



  fromEvent(btn2, 'click')
  .pipe(
    mergeMap(() =>
      of('API response 2').pipe(
        delay(1000),
        tap(() => console.log('API call finished 2'))
      )
    )
  )
  .subscribe(response => {
    console.log(response);
  });