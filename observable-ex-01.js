




const observable = { 
    subscribe(observer) {
        observer.next(1);
        observer.next(2);
        observer.next(3);
        observer.complete();
    }
}



const hai = observable.subscribe({
    next(val) {
        console.log(val);
    },
    complete() {
        console.log('complete');
    }
})

