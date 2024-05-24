import './css/PsychologistPresentation.css'
import { IonPage, IonContent, IonHeader, IonFooter, IonImg, IonLabel } from "@ionic/react";
import FooterPage from "../components/FooterPage";
import NavBarLogin from "../components/NavBarLogin";
import ProfileLabel from "../components/ProfileLabel";
import CommentLabel from '../components/CommentLabel';

const PychologistPage: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <NavBarLogin></NavBarLogin>
            </IonHeader>

            <IonContent>
                <div className="profile_presentation">
                    <ProfileLabel price="XXXXX" method="Online" psychologist_name="Barbara"></ProfileLabel>
                </div>

                <CommentLabel></CommentLabel>
                <IonLabel> Opiniones: </IonLabel>
            </IonContent>

            <IonFooter>
                <FooterPage src_logo="dark_logo.svg" phone_number='+569999999' email='mail@example.cl' background='primary'></FooterPage>
            </IonFooter>
        </IonPage>
    );
};

export default PychologistPage;