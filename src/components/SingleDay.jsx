import { IonButton, IonCardTitle, IonCheckbox, IonCol, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonItemDivider, IonLabel, IonList, IonModal, IonReorder, IonReorderGroup, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import { closeCircle } from 'ionicons/icons';
import { useRef, useState } from "react";


const SingleDay = (props) => {
    const refModal = useRef();

    const [ColorSelected,setColorSelected] = useState(null);
    const [TitleActivty,setTitleActivity] = useState(null);
    const [From,setFrom] = useState(null);
    const [To,setTo] = useState(null)

    function handleReorder(event) {
       
        console.log('Dragged from index', event.detail.from, 'to', event.detail.to);

     
        event.detail.complete();
    }

    return (
        <>
            <IonCardTitle>{props.day}</IonCardTitle>
            <IonItemDivider />
            <IonList>
                <IonReorderGroup disabled={false} onIonItemReorder={handleReorder}>
                    <IonItem>
                        <IonLabel>Item 1</IonLabel>
                        <IonReorder slot="end"/>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Item 2</IonLabel>
                        <IonReorder slot="end"/>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Item 3</IonLabel>
                        <IonReorder slot="end"/>
                    </IonItem>
                   
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
                        <IonInput placeholder="Activity name" mode="md" fill="outline" />
                    </IonRow>

                    <IonRow>
                        <IonCol>
                            <IonLabel><h1>From</h1></IonLabel>
                            <input type="time" />
                        </IonCol>
                        <IonCol>
                            <IonLabel><h1>To</h1></IonLabel>
                            <input type="time" />
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonLabel><h1>Color</h1></IonLabel>
                        <nav>
                        <br/>
                        <br/>
                        <br/>

                            <IonCheckbox color="danger" checked={(ColorSelected==null)?true:(ColorSelected=="RED")?true:false}
                             onClick={(ev)=>{(ColorSelected==ev.target.value)?setColorSelected(null):setColorSelected(ev.target.value)}} value="RED">RED</IonCheckbox>
                            <IonCheckbox color="primary" checked={(ColorSelected == null) ? true : (ColorSelected =="BLUE")?true:false}
                             onClick={(ev) => {(ColorSelected==ev.target.value)?setColorSelected(null):setColorSelected(ev.target.value)}} value="BLUE">BLUE</IonCheckbox>
                            <IonCheckbox color="success" checked={(ColorSelected == null) ? true : (ColorSelected =="GREEN")?true:false}
                             onClick={(ev) => {(ColorSelected==ev.target.value)?setColorSelected(null):setColorSelected(ev.target.value)}} value="GREEN">GREEN</IonCheckbox>
                            <IonCheckbox color="warning" checked={(ColorSelected == null) ? true : (ColorSelected =="YELLOW")?true:false}
                             onClick={(ev) => {(ColorSelected==ev.target.value)?setColorSelected(null):setColorSelected(ev.target.value)}} value="YELLOW">YELLOW</IonCheckbox>
                            <IonCheckbox color="medium" checked={(ColorSelected == null) ? true : (ColorSelected =="GREY")?true:false}
                             onClick={(ev) => {(ColorSelected==ev.target.value)?setColorSelected(null):setColorSelected(ev.target.value)}} value="GREY">GREY</IonCheckbox>
                        </nav>
                    </IonRow>


                </IonContent>
                <IonButton expand="block">Add</IonButton>
            </IonModal>


        </>
    );
}

export default SingleDay;