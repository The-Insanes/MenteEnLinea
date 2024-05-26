import './css/NavBarLogin.css';
import { IonIcon, IonButton, IonImg, IonLabel, IonToolbar, IonMenuButton, IonButtons, IonTitle, IonMenuToggle, IonItem, IonContent, IonMenu ,IonRouterOutlet, IonHeader} from '@ionic/react';

interface ContainerProps {
    className?: string | undefined
    
};
const paths = [
    {name: 'Log in', url: 'LoginPage'},
    {name: 'Sign up', url: 'SignupPage'},
]

const NavBarLogin: React.FC<ContainerProps> = ({className}) => {
    return (
        
        <IonToolbar className={className}>
            <IonButton className='logo_button' fill='clear' slot='start'>
                <IonImg src='logo.svg'></IonImg>
            </IonButton>
            <IonMenu contentId="main-content">
                        <IonContent className="ion-padding">
                            {paths.map((item, index)=> ( 
                                <IonMenuToggle>
                                    <IonItem routerLink={item.url} routerDirection='none'>
                                    {item.name}
                                    </IonItem>
                                </IonMenuToggle>
                            ))}
                        </IonContent>
                    </IonMenu>       
                <IonButtons  id='main-content'slot="end">
                    <IonMenuButton  className='option_button' autoHide={false} color='primary'></IonMenuButton>
                </IonButtons>
            
        </IonToolbar>
    );
};

export default NavBarLogin;