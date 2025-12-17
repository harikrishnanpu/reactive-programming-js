import { from } from "rxjs";


from([1, 2, 3]).subscribe(console.log);


// Multiple explicit values	        of(1,2,3)
// Array	                        from([1,2,3])
// Promise	                        from(promise)
// Iterable	                        from(iterable)

// const promise = fetch("https://jsonplaceholder.typicode.com/posts");

// from(promise).subscribe(console.log);



from([1, 2, 3, 4])
  .pipe(
    filter(x => x % 2 === 0),
    map(x => x * 10)
  )
  .subscribe(console.log);

