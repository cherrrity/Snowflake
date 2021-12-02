import { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";
import { firebaseFireStore } from "./firebase-config";

export let category_list:any[] = [];

export const boardCategoryList = () =>{
    let rows: any[] = [];
    firebaseFireStore
    .collection('BoardList')
    .get()
    .then(querySnapshot => { 
        querySnapshot.forEach(snapshot => {
            let data = snapshot.data();
            const {id, title} = data;
            rows.push(title);
        });
        category_list = rows;
    });
}


export const boardList = (category_id: any) =>{
    let rows: FirebaseFirestoreTypes.DocumentData[] = [];
    firebaseFireStore
    .collection('BoardList')
    .where("category_ID","==", category_id)
    .get()
    .then(querySnapshot => { 
        querySnapshot.forEach(snapshot => {
            rows.push(snapshot.data());
        });
    });
    console.log(rows);
    return rows;
}

export const boardContent = (no: any) =>{
    let rows: FirebaseFirestoreTypes.DocumentData[] = [];
    firebaseFireStore
    .collection('Board')
    .where("no","==", no)
    .get()
    .then(querySnapshot => { 
        querySnapshot.forEach(snapshot => {
            rows.push(snapshot.data());
        });
    });
    console.log(rows);
    return rows;    
}

