import './authentication.styles.scss';
import SignInForm from '../../sign-in-form/sign-in-form.component';
import SignUpForm from '../../sign-up-form/sign-up-form.component';

export default function Authentication() {
  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
}
