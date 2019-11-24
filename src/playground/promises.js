const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({
    //   name: 'John Doe',
    //   age: 100,
    // });
    reject(new Error('Houston, we have a problem!'));
  }, 2000);
});

console.log('before');

promise
  .then(data => {
    console.log('1', data);
  })
  .catch(error => {
    console.log(error);
  });

console.log('after');
