import { collection, doc, getDocs, getFirestore, setDoc } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js';
import { getStorage, ref } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-storage.js";
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js'
import app from './app.js';
export async function subscribeToExperienceMtb(subscription, ID) {
    const db = getFirestore(app)
    const expereinceMTBCollection = collection(db, 'experience-mtb')
    // const docRef = await addDoc(expereinceMTBCollection, subscription) // ID Aleatório
    const docRef = await setDoc(doc(expereinceMTBCollection, ID), subscription);
    return docRef
}

export async function getExperienceMtbdocs() {
    const db = getFirestore(app)
    const expereinceMTBCollection = collection(db, 'experience-mtb')
    // Get a list of cities from your database
    const experienceMtbSnapshot = await getDocs(expereinceMTBCollection);
    const docsID = experienceMtbSnapshot.docs.map(doc => doc.id);
    return docsID;
}
export function getStorageImage() {
    const storage = getStorage(app);
    console.log(storage)
    const storageRef = ref(storage);
    return storage;
}
export function authLogin() {
    // Initialize Firebase Authentication and get a reference to the service
    const auth = getAuth(app);
    return auth
}