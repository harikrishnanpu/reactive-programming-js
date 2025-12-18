const { of, mergeMap, from, map, forkJoin } = require("rxjs");



// const mergeMap$ = of(1, 2, 3, 4, 5)

// mergeMap$.pipe(mergeMap(e => of(e * 2))).subscribe(console.log);




const result$ = of(null).pipe(
  mergeMap(() =>
    forkJoin({
      post: from(
        fetch('https://jsonplaceholder.typicode.com/posts/1')
          .then(res => res.json())
      ),
      comments: from(
        fetch('https://jsonplaceholder.typicode.com/comments')
          .then(res => res.json())
      )
    })
  )
);

result$.subscribe(console.log);
