import { IonButton, IonCard, IonCardSubtitle, IonCardTitle, IonCheckbox, IonCol, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonItemDivider, IonLabel, IonList, IonModal, IonReorder, IonReorderGroup, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import { closeCircle } from 'ionicons/icons';
import { useRef, useState } from "react";
import "../theme/SingleDay.css";

const SingleDay = (props) => {
    const refModal = useRef();

    const [ColorSelected, setColorSelected] = useState(null);
    const [TitleActivty, setTitleActivity] = useState(null);
    const [From, setFrom] = useState(null);
    const [To, setTo] = useState(null);

    //
    const [Activities, setActivities] = useState([]);

    function handleReorder(event) {

        console.log('Dragged from index', event.detail.from, 'to', event.detail.to);

        event.detail.complete();
    }



    function addNewActivity() {

        let t = new Array();
        t.push({
            "Title": TitleActivty,
            "From": From,
            "To": To,
            "Color": ColorSelected
        })
        setActivities([...Activities, ...t]);
    }


    return (
        <>
            <IonCardTitle
                className={(props.indx + 1 == new Date().getDay()) ? "TODAY HeaderDay" :"HeaderDay"}
            >{props.day}</IonCardTitle>
            <IonItemDivider />
            <IonList>
                <IonReorderGroup disabled={false} onIonItemReorder={handleReorder}>
                    {
                        Activities?.map(s => (
                            <IonCard className="ion-padding" color={s.Color}>
                                <IonCardTitle>{s.Title}</IonCardTitle>
                                <IonItem>
                                    <IonReorder slot="end" />
                                    <IonCardSubtitle>{s.From}---{s.To}</IonCardSubtitle>

                                </IonItem>
                            </IonCard>
                        ))
                    }
                </IonReorderGroup>

            </IonList>

            <IonButton
                color="dark"
                expand="block"
                id={"newActivity" + props.day}
            >
                Add new activity
            </IonButton>

            <IonModal trigger={"newActivity" + props.day} ref={refModal}>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Add an activity</IonTitle>
                        <IonButton color="danger" slot="end" onClick={() => refModal?.current?.dismiss()}>
                            <IonIcon icon={closeCircle} />
                        </IonButton>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <IonRow>

                        <IonLabel><h1>Subject</h1></IonLabel>
                        <IonInput placeholder="Activity name" mode="md" fill="outline" onIonInput={(ev) => setTitleActivity(ev.target.value)} />
                    </IonRow>

                    <IonRow>
                        <IonCol>
                            <IonLabel><h1>From</h1></IonLabel>
                            <IonInput mode="md" fill="outline" type="time" onIonInput={(ev) => setFrom(ev.target.value)} />
                        </IonCol>
                        <IonCol>
                            <IonLabel><h1>To</h1></IonLabel>
                            <IonInput mode="md" fill="outline" type="time" onIonInput={(ev) => setTo(ev.target.value)} />
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonLabel><h1>Color</h1></IonLabel>
                        <nav>
                            <br />
                            <br />

                            <IonCheckbox color="danger" checked={(ColorSelected == null) ? true : (ColorSelected == "danger") ? true : false}
                                onClick={(ev) => { (ColorSelected == ev.target.value) ? setColorSelected(null) : setColorSelected(ev.target.value) }} value="danger">RED</IonCheckbox>

                            <IonCheckbox color="primary" checked={(ColorSelected == null) ? true : (ColorSelected == "primary") ? true : false}
                                onClick={(ev) => { (ColorSelected == ev.target.value) ? setColorSelected(null) : setColorSelected(ev.target.value) }} value="primary">BLUE</IonCheckbox>

                            <IonCheckbox color="success" checked={(ColorSelected == null) ? true : (ColorSelected == "success") ? true : false}
                                onClick={(ev) => { (ColorSelected == ev.target.value) ? setColorSelected(null) : setColorSelected(ev.target.value) }} value="success">GREEN</IonCheckbox>

                            <IonCheckbox color="warning" checked={(ColorSelected == null) ? true : (ColorSelected == "warning") ? true : false}
                                onClick={(ev) => { (ColorSelected == ev.target.value) ? setColorSelected(null) : setColorSelected(ev.target.value) }} value="warning">YELLOW</IonCheckbox>

                            <IonCheckbox color="medium" checked={(ColorSelected == null) ? true : (ColorSelected == "medium") ? true : false}
                                onClick={(ev) => { (ColorSelected == ev.target.value) ? setColorSelected(null) : setColorSelected(ev.target.value) }} value="medium">GREY</IonCheckbox>

                        </nav>
                    </IonRow>


                </IonContent>
                <IonButton expand="block" mode="ios" color="dark" onClick={() => addNewActivity()}>Add</IonButton>
            </IonModal>


        </>
    );
}

export default SingleDay;