export const responseErrorCode = errorCode => {
	switch (errorCode) {
	  case 'auth/invalid-email':
		return 'Invalid Email';
	  case 'auth/wrong-password':
		return 'Wrong Password';
	  case 'auth/user-not-found':
		return 'Email not found';
	  case 'auth/account-exists-with-different-credential':
		return `User's email already exists`;
	  default:
		return errorCode;
	}
  };

const firebaseConfig = {
	apiKey: "AIzaSyBgPQzcs1yznYMPonMKT4DRx1W6Ek48vkw",
	authDomain: "user-module-5248d.firebaseapp.com",
	projectId: "user-module-5248d",
	storageBucket: "user-module-5248d.appspot.com",
	messagingSenderId: "998176548423",
	appId: "1:998176548423:web:f1690f203fe4916d417362",
	measurementId: "G-JP27BH883M"
  };