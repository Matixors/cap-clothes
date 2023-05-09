import { signInWithGooglePopup } from '../../../utils/firebase/firebase.utils';

export default function SignIn() {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response)
  };

  return (
    <div>
      <h1>SignIn Page</h1>
      <button onClick={logGoogleUser}>Sign-in with Google popup</button>
    </div>
  );
}
