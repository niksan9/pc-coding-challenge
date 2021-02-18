import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { chatbubblesOutline, ellipse, personCircleOutline, settingsOutline, square, triangle } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Chats from './pages/Chats';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/chats">
            <Chats />
          </Route>
          <Route exact path="/settings">
            <Settings />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route exact path="/">
            <Redirect to="/chats" />
          </Route>
        </IonRouterOutlet>          
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/chats">
            <IonIcon icon={chatbubblesOutline} />
            <IonLabel>Chats</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/settings">
            <IonIcon icon={settingsOutline} />
            <IonLabel>Einstellungen</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/profile">
            <IonIcon icon={personCircleOutline} />
            <IonLabel>Profil</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
