import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import ChatPreview from "../components/Chats/ChatPreview";

import { dummyPreviews } from "../dummyData/Chats";
import Chat from "./Chat";

const Chats = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <IonPage>
      <Chat isOpen={showChat} closeCallback={() => setShowChat(false)} />
      <IonHeader>
        <IonToolbar>
          <IonTitle>Chats</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {dummyPreviews.map((preview) => (
            <ChatPreview
              openChatCallback={() => setShowChat(true)}
              key={preview.id}
              name={preview.name}
              text={preview.text}
              img={preview.img}
            />
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Chats;
