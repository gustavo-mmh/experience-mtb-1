import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
import { authLogin } from './experience-mtb';
const auth = authLogingin();
async function createAccount() {
    const login = txtEmail.value

    const password = txtSenha.value
    try {
        await createUserWithEmailAndPassword(auth, login, password)
            .then(data => {
                const uid = data.user.uid
            })
        console.log('Cadastro funcionou')
    }
    catch (error) {
        console.log(`There was an error: ${error}`)
    }
}

async function loginDocumentPassword() {
    const loginDoc = loginDocumento.value;
    const loginPass = loginPassword.value;
    try {
        // const userCredential = await signInWithEmailAndPassword(auth, loginDoc, loginPass);
        // console.log(userCredential.user);
        // monitorAuthState()
        // location.href = "./qwer/";
        await signInWithEmailAndPassword(auth, loginDoc, loginPass).then(async (data) => {
            debugger
            const uid = data.user.uid
            console.log('UID:', uid);
            const doc = await getExperienceMtbdocs(uid)
            console.log('DocsID:', doc);
            try {
                statusLogin.innerHTML = JSON.stringify(doc);

                console.log(`chegou aqui`)
            } catch (e) {
                console.log('erro de login')
            }
        });

    } catch (error) {
        debugger
        statusLogin.innerHTML = `Error: ${error}`;
    }
}
// Monitor auth state
async function monitorAuthState() {
    onAuthStateChanged(auth, user => {
        if (user) {
            console.log(user)
            showLoginState(user)
            hideLoginError()
        }
        else {
            showLoginForm()
            showLoginError()
            statusLogin.innerHTML = `You're not logged in.`
        }
    })
}

