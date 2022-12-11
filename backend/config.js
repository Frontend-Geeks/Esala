const { initializeApp } = require('@firebase/app');

const firebaseConfig = {
	apiKey: 'AIzaSyCmFFnSKWJbTsI9GDjzBnG58E0wsCZoN1k',
	authDomain: 'esala-40674.firebaseapp.com',
	projectId: 'esala-40674',
	storageBucket: 'esala-40674.appspot.com',
	messagingSenderId: '298129931581',
	appId: '1:298129931581:web:866eb8d8a7021db2951954',
	measurementId: 'G-Z8YTJF5QNN',
};

const app = initializeApp(firebaseConfig);

module.export = app;
