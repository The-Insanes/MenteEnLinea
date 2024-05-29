import { IonContent, IonHeader, IonPage, IonToolbar, IonFooter, IonMenu,IonTitle, IonItem } from '@ionic/react';
import './css/SignupPage.css'
import Login from '../components/Login';
import FooterPage from '../components/FooterPage';
import Signup from '../components/Signup';

const paths = [
  {name: 'Log in', url: '/LoginPage'},
  {name: 'Sign up', url: '/SignupPage'},
]

const SignupPage: React.FC = () => {
    return(
    <IonPage>
    <IonContent fullscreen h-full w-full>
      <div className='centered-content'>
        <Signup src_logo='public/Images/logo.svg'></Signup>
      </div>
    </IonContent>

    <IonFooter translucent={true}>
      <FooterPage src_logo='public/Images/dark_logo.svg' phone_number='+569999999' email='mail@example.cl' background='primary'></FooterPage>
    </IonFooter>
    </IonPage>
    );
};


export default SignupPage;