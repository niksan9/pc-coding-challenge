import { IonAvatar, IonItem, IonLabel } from "@ionic/react";
import React from "react";

const ChatPreview = ({ name, text, openChatCallback, img }) => {
  return (
    <IonItem onClick={() => openChatCallback()}>
      <IonAvatar slot='start'>
        <img src={img || "https://i.pravatar.cc/300"} />
      </IonAvatar>
      <IonLabel>
        <h2>{name}</h2>
        <p>{text}</p>
      </IonLabel>
    </IonItem>
  );
};

export default ChatPreview;
