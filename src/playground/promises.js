const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'John Doe',
      age: 100,
    });
    // reject(new Error('Houston, we have a problem!'));
  }, 5000);
});

console.log('before');

promise
  .then(data => {
    console.log('1', data);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('This is my 2nd "chained" Promise!');
      }, 5000);
    });
  })
  .then(str => {
    // this is a chained Promise
    console.log(`Here is my data: ${str}`);
  })
  .catch(error => {
    console.log(error);
  });

console.log('after');
