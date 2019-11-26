// database.ref('notes').push({
//   title: 'notes title 2',
//   body: 'notes body 2 content',
// });
// const firebaseNotes = {
//   notes: {
//     aasdfkljas: {
//       title: 'note 1',
//       body: 'note 1 content',
//     },
//     adkdsf83: {
//       title: 'note 2',
//       body: 'note 2 content',
//     },
//   },
// };

// // child_removed
// database.ref('expenses').on('child_removed', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });
// database.ref('expenses').on('child_changed', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });
// database.ref('expenses').on('child_added', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').push({
//   description: 'neat',
//   notes: '',
//   amount: 12345,
//   createdAt: 132343423,
// });
// database.ref('expenses').on(
//   'value',
//   snapshot => {
//     const expenses = [];
//
//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val(),
//       });
//     });
//
//     console.log(expenses);
//   },
//   error => {
//     console.log('error', error);
//   }
// );
// database
//   .ref('expenses')
//   .once('value')
//   .then(snapshot => {
//     const expenses = [];
//
//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val(),
//       });
//     });
//
//     console.log(expenses);
//   })
//   .catch(e => {
//     console.log('error', e);
//   });

// database.ref('expenses').push({
//   description: 'monthly utility bill',
//   notes: '',
//   amount: 1000,
//   createdAt: 15000,
// });
// database.ref('notes/-LuRNeG5WivZDvm2t33W').remove();

//
// const notes = [
//   {
//     id: '12',
//     title: 'my first note',
//     body: 'The content of my first note',
//   },
//   {
//     id: '12abe2',
//     title: 'my second note',
//     body: 'The content of my second note',
//   },
// ];
//
// database.ref('notes').set(notes);
// // database.ref().on(
// //   'value',
// //   snapshot => {
// //     const val = snapshot.val();
// //     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// //   },
// //   error => {
// //     console.log('Error with data fetching', error);
// //   }
// // );
// //
// // setTimeout(() => {
// //   database
// //     .ref()
// //     .update({
// //       name: 'Jane Doe',
// //       'job/title': 'Janitor',
// //       'job/company': 'McDonalds',
// //     })
// //     .then(() => {
// //       console.log('User info successfully updated');
// //     })
// //     .catch(error => {
// //       console.log('Error updating user data', error);
// //     });
// // }, 3000);
// // // const onValueChange = database.ref().on(
// // //   'value',
// // //   snapshot => {
// // //     console.log(snapshot.val());
// // //   },
// // //   error => {
// // //     console.log('Error with data fetching', error);
// // //   }
// // // );
// // //
// // // setTimeout(() => {
// // //   database.ref('age').set(10);
// // // }, 3000);
// // //
// // // setTimeout(() => {
// // //   database.ref().off('value', onValueChange);
// // // }, 6000);
// // //
// // // setTimeout(() => {
// // //   database.ref('age').set(30);
// // // }, 9000);
// // // // database.ref().on()
// // // //   .then(snapshot => {
// // // //     const val = snapshot.val();
// // // //     console.log(val);
// // // //   })
// // // //   .catch(e => {
// // // //     console.log('failed fetch', e);
// // // //   });
// // // database
// // //   .ref()
// // //   .set({
// // //     name: 'John Doe',
// // //     age: 40,
// // //     stressLevel: 7,
// // //     job: {
// // //       title: 'CFO',
// // //       company: 'Atari',
// // //     },
// // //     location: {
// // //       city: 'LA',
// // //       country: 'US',
// // //     },
// // //   })
// // //   .then(() => {
// // //     console.log('Data is saved');
// // //   })
// // //   .catch(error => {
// // //     console.log('This failed!!', error);
// // //   });
// // //
// // // // database
// // // //   .ref()
// // // //   .update({
// // // //     stressLevel: 9,
// // // //     'job/company': 'Wells Fargo',
// // // //     'location/city': 'San Diego',
// // // //   })
// // // //   .then(() => {
// // // //     console.log('update worked');
// // // //   })
// // // //   .catch(e => {
// // // //     console.log('update failed because of', e);
// // // //   });
