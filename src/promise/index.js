const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Stuff worked');
        } else {
            reject('It broke');
        }
  });
}

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('Stuff worked 2');
            }, 2000);
        } else {
            const error = new Error('It broke 2');
            reject(error);
        }
    });
}

somethingWillHappen()
    .then((message) => {console.log(message)})
    .catch((error) => { console.log(error) });
    
try {
    const message = somethingWillHappen2()
    console.log(message);
} catch (error) {
    console.log(error);
}

Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then((response) => {
        console.log('Array of responses', response);
    })
    .catch((error) => {
        console.log(error);
    }
);