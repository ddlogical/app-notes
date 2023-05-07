const dbName = 'notesDatabase';
const storeName = 'notes';

function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(dbName, 1);

    request.onerror = function(event) {
      reject('Can\'t open DB');
    };

    request.onsuccess = function(event) {
      const db = event.target.result;
      resolve(db);
    };

    request.onupgradeneeded = function(event) {
      const db = event.target.result;
      db.createObjectStore(storeName, { keyPath: 'id', autoIncrement: true });
    };
  });
}

function addData(data) {
  return new Promise((resolve, reject) => {
    openDB()
      .then(db => {
        const transaction = db.transaction([storeName], 'readwrite');
        const objectStore = transaction.objectStore(storeName);
        const request = objectStore.add(data);
        request.onsuccess = function(event) {
          resolve();
        };

        request.onerror = function(event) {
          reject('Can\'t add data to DB');
        };
      })
      .catch(error => {
        reject(error);
      });
  });
}

function editData(newData, key)  {
  return new Promise((resolve, reject) => {
    openDB()
      .then(db => {
        const transaction = db.transaction([storeName], 'readwrite');
        const objectStore = transaction.objectStore(storeName);

        const request = objectStore.put(newData);

        request.onsuccess = function(event) {
          resolve();
        };

        request.onerror = function(event) {
          reject('Can\'t edit data');
        };
      })
      .catch(error => {
        reject(error);
      });
  });
}

function getAllData(data) {
  return new Promise((resolve, reject) => {
    openDB()
      .then(db => {
        const transaction = db.transaction([storeName], 'readonly');
        const objectStore = transaction.objectStore(storeName);

        const request = objectStore.getAll();

        request.onsuccess = function(event) {
          const data = event.target.result;
          resolve(data);
        };

        request.onerror = function(event) {
          reject('Can\'t find data');
        };
      })
      .catch(error => {
        reject(error);
      });
  });
}

function deleteData(data) {
  return new Promise((resolve, reject) => {
    openDB()
      .then(db => {
        const transaction = db.transaction([storeName], 'readwrite');
        const objectStore = transaction.objectStore(storeName);

        const request = objectStore.delete(data.id);

        request.onsuccess = function(event) {
          resolve();
        };

        request.onerror = function(event) {
          reject('Can\'t find data');
        };
      })
      .catch(error => {
        reject(error);
      });
  });
}

export {addData, editData, getAllData, deleteData};