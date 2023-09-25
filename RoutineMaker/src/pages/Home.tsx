import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import SingleDay from '../components/SingleDay';
import './Home.css';
import { useEffect, useState } from 'react';

const Home: React.FC = () => {

  let [DaysOfWeek, setDaysOfWeek] = useState(Array);

  function getWeekDays() {
    var baseDate = new Date(Date.UTC(2017, 0, 2)); // just a Monday
    var weekDays = [];
    for (let i = 0; i < 7; i++) {
      weekDays.push(baseDate.toLocaleDateString("en-En", { weekday: 'long' }));
      baseDate.setDate(baseDate.getDate() + 1);
    }
    setDaysOfWeek(weekDays)

    return weekDays;
  }

  useEffect(() => {
    getWeekDays()
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Time scheduler</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        <IonGrid>
          <IonRow>
            {DaysOfWeek?.map((s, index) => (
              <IonCol>
                <SingleDay
                  key={index}
                  indx={index}
                  day={s}
                />

              </IonCol>
            ))}
          </IonRow>
        </IonGrid>

      </IonContent>
    </IonPage>
  );
};

export default Home;
