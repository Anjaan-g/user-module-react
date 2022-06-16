import {
    signInWithPopup,
    onAuthStateChanged,
    GoogleAuthProvider,
    FacebookAuthProvider,
    fetchSignInMethodsForEmail,
  } from 'firebase/auth';
  import { auth } from './index';
  import { responseErrorCode } from './config';
  
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    display: 'popup',
  });
  
  const facebookProvider = new FacebookAuthProvider();
  facebookProvider.setCustomParameters({
    display: 'popup',
  });
  
  const googleSignIn = () =>
    signInWithPopup(auth, provider)
      .then(result => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const { user } = result;
        return { result, token };
        // ...
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const { email } = error;
        const credential = GoogleAuthProvider.credentialFromError(error);
        return {
          error: responseErrorCode(errorCode),
          credential,
        };
      });
  
  const fbSignIn = async () =>
    signInWithPopup(auth, facebookProvider)
      .then(result => {
        // The signed-in user info.
        const { user } = result;
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const { accessToken } = credential;
        return { result, accessToken };
        // ...
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);
        return {
          error: responseErrorCode(errorCode),
          credential,
        };
      });
  
  const processSignIn = value => {
    const user = auth.currentUser;
    console.log({ user });
    if (value === 'fb') {
      return fbSignIn();
    }
    return googleSignIn();
  };
  
  export { processSignIn };