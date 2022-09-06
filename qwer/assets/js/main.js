import { getAuth } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
import app from '../../../assets/js/firebase/app.js';
const auth = getAuth(app);
const user = auth.currentUser;
if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;
    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    const uid = user.uid;
    console.log('usuario: ', displayName, email, photoURL, emailVerified, uid);
} else {
    console.log('aaa')
}