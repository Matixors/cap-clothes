import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../../utils/firebase/firebase.utils';
import SignUpForm from '../../sign-up-form/sign-up-form.component';

export default function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocumentRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>SignIn Page</h1>
      <button onClick={logGoogleUser}>Sign-in with Google popup</button>
      <SignUpForm />
    </div>
  );
}
