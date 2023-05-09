import {
  signInWithGooglePopup,
  creatUserDocumentFromAuth,
} from '../../../utils/firebase/firebase.utils';

export default function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocumentRef = await creatUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>SignIn Page</h1>
      <button onClick={logGoogleUser}>Sign-in with Google popup</button>
    </div>
  );
}
