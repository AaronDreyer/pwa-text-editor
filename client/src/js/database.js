import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
// Establishes the PUT request to allow for changes or updates to content
export const putDb = async (content) => {
console.log('Post to the jate database');
// connect to database and which version
const jateDb = await openDB('jate', 1);
// making new transactions and ensuring we can make changes through readWrite
const tx = jateDb.transaction('jate', 'readwrite');
// open the object store
const store = tx.objectStore('jate');
// using .add() to allow changes to content
const request = store.add({ id: 1, value: content });\
// fetch data
const result = await request;
console.log('data saved to the database', result);
console.error('putDb not implemented');
};

// TODO: Add logic for a method that gets all the content from the database
// Esyablishes the GET request to allow data to be retrieved
export const getDb = async () => {
console.log('Get all from the jate database');
// connect to database and which version
const jateDb = await openDB('jate', 1);
// making new transactions and ensuring we cannot make changes
const tx = jateDb.transaction('jate', 'readonly');
// open the object store
const store = tx.objectStore('jate');
// using .getAll() to retrieve all data
const request = store.getAll();
// fetch data
const result = await request;
console.log('result.value', result);
console.error('getDb not implemented');
};

initdb();
