import { Observable } from "rxjs";

const observable = new Observable(subscriber => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
});

observable.subscribe({
  next(val) {
    console.log(val);
  },
  complete() {
    console.log("complete");
  },
});