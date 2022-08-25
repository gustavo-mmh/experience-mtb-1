import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js';
import app from './app.js';
export async function subscribeToExperienceMtb(subscription) {
    const db = getFirestore(app)
    const expereinceMTBCollection = collection(db, 'experience-mtb')
    const docRef = await addDoc(expereinceMTBCollection, subscription)
    return docRef.id
}