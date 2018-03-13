import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export {firebase, database as default};

// database.ref('expenses').on('value', (els) => {
//   let expenses = [];

//   els.forEach((el) => {
//     expenses.push({
//       id: el.key,
//       ...el.val()
//     });
//   });
//   console.log("Store changed")
//   console.log(expenses)
// });


// database.ref('expenses').set({
// }).then(() => {
//  console.log("Data Cleared!!!!!")  
// }).catch((e) => {
//   console.log('Request Failed');
// })

// database.ref('expenses').push({ 
//   amount: 232,
//   description: 'description',
//   createdAt: 123123,
//   note: 'note',
// });

// database.ref('expenses').push({ 
//   amount: 232,
//   description: 'description',
//   createdAt: 123123,
//   note: 'note',
// });

// database.ref('expenses').push({ 
//   amount: 232,
//   description: 'description',
//   createdAt: 123123,
//   note: 'note',
// });

// database.ref('expenses').push({ 
//   amount: 232,
//   description: 'description',
//   createdAt: 123123,
//   note: 'note',
// });

// database.ref('expenses').push({ 
//   amount: 232,
//   description: 'description',
//   createdAt: 123123,
//   note: 'note',
// });

// database.ref().set('notes').then(() => {
//  console.log("Data Cleared")  
// }).catch((e) => {
//   console.log('Request Failed');
// })

// database.ref('notes').push({ 
//   title: 'To Do1',
//   body: 'To Do1 body',
// });

// database.ref('notes').push({ 
//   title: 'To Do2',
//   body: 'To Do2 body',
// });

// database.ref('notes').push({ 
//   title: 'To Do3',
//   body: 'To Do3 body',
// });
// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(val);
// })

// database.ref().set({
//   name: 'Mike Dot'
// }).then(() => {
//  console.log("Data Written")  
// }).catch((e) => {
//   console.log('Request Failed');
// })

// database.ref().update({
//   location: {
//     city: "Ponta delgada",
//     country: "Portugal"
//   }
// }).then(() => {
//  console.log("Data Written")  
// }).catch((e) => {
//   console.log('Request Failed');
// })

// database.ref("users").update({
//   'location/city': "Angra"
//   }
// ).then(() => {
//  console.log("Data Written")  
// }).catch((e) => {
//   console.log('Request Failed');
// })

