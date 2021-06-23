const order = false;

const breakfastPromise = new Promise( (resolve, reject) => {
    setTimeout(() => {
        if(order) {
            resolve('Your order is ready');
        } else {
            reject( Error('Your order cannot be made'));
        }
        //resolve('Your order is ready.');
        //reject('Oh no! There was a problem');
    }, 3000);
});

console.log(breakfastPromise);
//breakfastPromise.then( val => console.log(val))
//breakfastPromise.then( val => console.log(val)).catch( err => console.log(err))
breakfastPromise
    .then( val => console.log(val))
    .catch( err => console.log(err))

