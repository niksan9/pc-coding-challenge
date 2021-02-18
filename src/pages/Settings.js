import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const Settings = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Einstellungen</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen></IonContent>
    </IonPage>
  );
};

export default Settings;
