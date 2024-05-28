import { IonContent, IonHeader, IonPage, IonToolbar, IonFooter, IonMenu,IonTitle, IonItem } from '@ionic/react';
import './css/SignupPage.css'
import NavBarLogin from '../components/NavBarLogin';
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
    <IonMenu contentId="main-content" side='end'>
                <IonHeader >
                <IonToolbar>
                    <IonTitle>Mente en Linea</IonTitle>
                </IonToolbar>
                </IonHeader>
                <IonContent>{paths.map((item,index) =>(
                  <IonItem routerLink={item.url} routerDirection='none'>{item.name}</IonItem>
                ))}
                </IonContent>
            </IonMenu> 
    <IonHeader>
      <IonToolbar>
        <NavBarLogin></NavBarLogin>
      </IonToolbar>
    </IonHeader>

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