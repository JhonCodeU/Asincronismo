const doSomethingAsync = async (numFunt) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Do something async '+numFunt);
        }, 1000);
    })
};

const doSomethingElseAsync = async () => {
    const something = await doSomethingAsync(1);
    console.log(something);
}

console.log('before');
doSomethingElseAsync();
console.log('after');

const anotherFuction = async () => {
    try {
        const something = await doSomethingAsync(2);
        console.log(something);
    } catch (error) {
        console.log(error);
    }
}

console.log('before');
anotherFuction();
console.log('after');