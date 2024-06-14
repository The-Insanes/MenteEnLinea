import { IonContent, IonHeader, IonPage, IonToolbar, IonFooter, IonMenu,IonTitle, IonItem } from '@ionic/react';
import './css/SignupPage.css'
import Login from '../components/Login';
import FooterPage from '../components/footerPage/FooterPage';
import Signup from './ authentication/signupForm/Signup';

const paths = [
  {name: 'Log in', url: '/LoginPage'},
  {name: 'Sign up', url: '/SignupPage'},
]

const SignupPage: React.FC = () => {
    return(
    <IonPage>
    <IonContent className='fondo-singup'>
      <div className='centered-content-singup'>
        <Signup src_logo='public/images/logo.svg'></Signup>
      </div>
    </IonContent>

    <IonFooter translucent={true}>
      <FooterPage src_logo='public/Images/dark_logo.svg' phone_number='+569999999' email='mail@example.cl' background='primary'></FooterPage>
    </IonFooter>
    </IonPage>
    );
};


export default SignupPage;