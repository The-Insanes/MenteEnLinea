import { IonContent, IonHeader, IonPage, IonToolbar, IonFooter } from '@ionic/react';
import './css/SignupPage.css'
import NavBarLogin from '../components/NavBarLogin';
import Login from '../components/Login';
import FooterPage from '../components/FooterPage';
import Signup from '../components/Signup';
import NavbarSignup from '../components/NavbarSignup';


const SignupPage: React.FC = () => {
    return(
    <IonPage>
    <IonHeader>
      <IonToolbar>
        <NavbarSignup></NavbarSignup>
      </IonToolbar>
    </IonHeader>

    <IonContent fullscreen>
      <div className='centered-content'>
        <Signup src_logo='logo.svg'></Signup>
      </div>
    </IonContent>

    <IonFooter translucent={true}>
      <FooterPage src_logo='dark_logo.svg' phone_number='+569999999' email='mail@example.cl' background='primary'></FooterPage>
    </IonFooter>
    </IonPage>
    );
};


export default SignupPage;