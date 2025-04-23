
/*
const promise = new Promise((resolve, reject) =>{
    const allWentWell = false;

    if(allWentWell) {
        resolve('All things wwent well!')
    } else {
        reject('Opps! Something went wrong!')
    }
});
*/

const promise = new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 10);

    setTimeout(() => { 
        if(randomNumber < 4) {
            resolve('Well Done!!!')
        }else {
            reject('Oops! You Guessed Wrong!!!, Sorry')
        }
    })
});

promise.then((value) => {
    console.log(value)
}).catch((error) => {
    console.log(error)
});