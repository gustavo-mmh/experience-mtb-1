import { getFirestore, collection, doc, setDoc, getDocs } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js';
import app from './app.js';
export async function subscribeToExperienceMtb(subscription, ID) {
    const db = getFirestore(app)
    const expereinceMTBCollection = collection(db, 'experience-mtb')
    // const docRef = await addDoc(expereinceMTBCollection, subscription) // ID Aleatório
    const docRef = await setDoc(doc(expereinceMTBCollection, ID), subscription);
    const querySnapshot = await getDocs(expereinceMTBCollection);
    var getID = querySnapshot.forEach((doc) => {
        console.log(doc.id)
    });

    return docRef
}