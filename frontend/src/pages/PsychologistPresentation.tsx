import './css/PsychologistPresentation.css'
import { IonPage, IonContent, IonHeader, IonFooter, IonImg } from "@ionic/react";
import FooterPage from "../components/FooterPage";
import NavBarLogin from "../components/NavBarLogin";
import ProfileLabel from "../components/ProfileLabel";

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
            </IonContent>

            <IonFooter>
                <FooterPage src_logo="dark_logo.svg" phone_number='+569999999' email='mail@example.cl' background='primary'></FooterPage>
            </IonFooter>
        </IonPage>
    );
};

export default PychologistPage;