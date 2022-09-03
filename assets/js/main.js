import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-storage.js";
import app from './firebase/app.js';
import { authLogin, getExperienceMtbdocs, subscribeToExperienceMtb } from "./firebase/experience-mtb.js";
import { btnCadstro, formCadstro, formLogin, loginDocumento, loginPassword, showLoginError, txtCidade, txtConfirmaSenha, txtDataNascimento, txtDocumento, txtEmail, txtFotoCard, txtModalidade, txtModalidadeChallenge, txtModalidadeRacing, txtNome, txtNomeEquipe, txtPais, txtSenha, txtTamanhoCamiseta, txtWhatsApp } from './ui.js';
const storage = getStorage();
const auth = getAuth(app);
function limparDados() {
    txtNome.value = ''
    txtDocumento.value = ''
    txtDataNascimento.value = ''
    txtEmail.value = ''
    txtCidade.value = ''
    txtWhatsApp.value = ''
    txtNomeEquipe.value = ''
    txtSenha.value = ''
    txtFotoCard.value = ''
}

async function createAccount() {
    const login = txtEmail.value
    const password = txtSenha.value
    console.log(auth);
    try {
        await createUserWithEmailAndPassword(auth, login, password)
        console.log('Cadastro funcionou')
    }
    catch (error) {
        console.log(`There was an error: ${error}`)
        showLoginError(error)
    }
}

formCadstro.addEventListener('submit', async (event) => {
    event.preventDefault();
    txtSenha.onchange = validatePassword();
    txtConfirmaSenha.onkeyup = validatePassword();
    if (!formCadstro.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
        formCadstro.classList.add('was-validated')
    }
    else {
        const ID = txtPais.value + txtDocumento.value
        // Previne a submissão do formulário:
        const docsID = await getExperienceMtbdocs()
        if (docsID.includes(ID) == true) {
            alert("Esse Documento já existe")
            txtDocumento.focus();
        }
        else {
            if (txtModalidade.value == "Racing") {
                const subscription = {
                    pais: txtPais.value,
                    nome: txtNome.value,
                    documento: txtDocumento.value,
                    dataNascimento: txtDataNascimento.value,
                    email: txtEmail.value,
                    cidade: txtCidade.value,
                    whatsapp: txtWhatsApp.value,
                    tamanhoCamiseta: txtTamanhoCamiseta.value,
                    modalidade: txtModalidade.value,
                    modalidadeRacing: txtModalidadeRacing.value,
                    nomeEquipe: txtNomeEquipe.value,
                    senha: txtSenha.value,
                    fotoCard: txtFotoCard.value,
                    comprovante: '',
                    tipoPagmento: '',
                    comprovantePagamento: '',
                    status: 'Pendente',
                }
                subscribeToExperienceMtb(subscription, ID);
                createAccount();
                alert("Cadastro Feito com Sucesso!!!")
                limparDados()
            } else {
                const subscription = {
                    pais: txtPais.value,
                    nome: txtNome.value,
                    documento: txtDocumento.value,
                    dataNascimento: txtDataNascimento.value,
                    email: txtEmail.value,
                    cidade: txtCidade.value,
                    whatsapp: txtWhatsApp.value,
                    tamanhoCamiseta: txtTamanhoCamiseta.value,
                    modalidade: txtModalidade.value,
                    modalidadeChallenge: txtModalidadeChallenge.value,
                    nomeEquipe: txtNomeEquipe.value,
                    senha: txtSenha.value,
                    fotoCard: txtFotoCard.value,
                    comprovante: '',
                    tipoPagmento: '',
                    comprovantePagamento: '',
                    status: 'Pendente',
                }

                subscribeToExperienceMtb(subscription, ID);
                alert("Cadastro Feito com Sucesso!!!")
                limparDados()
            }
        }

    }
}, false);
//Upload de imagens
txtFotoCard.addEventListener('change', (e) => {
    let file = e.target.files[0];
    let fileName = e.target.files[0].name;
    const today = new Date()
    let data = today.toISOString();
    let hj = data.replace(/\.|\:|\-/g, '');
    console.log("aqui:" + hj)
    let newName = fileName.replace('.', "-" + hj + ".")
    const storageRef = ref(storage, `images/${newName}`)
    // // .put(e.target.files[0]);
    // // 'file' comes from the Blob or File API
    // // uploadBytes(storageRef, file).then((snapshot) => {
    console.log("otro" + storageRef);
    // // });
    // Create the file metadata
    /** @type {any} */
    const metadata = {
        contentType: 'image/jpeg',
    };
    // Upload file and metadata to the object 'images/mountains.jpg'
    // const storageRef = ref(storage, 'images/' + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on('state_changed',
        (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
            }
        },
        (error) => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
                case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    break;
                case 'storage/canceled':
                    // User canceled the upload
                    break;

                // ...

                case 'storage/unknown':
                    // Unknown error occurred, inspect error.serverResponse
                    break;
            }
        },
        () => {
            // Upload completed successfully, now we can get the download URL
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('URL da img:', downloadURL);
                // // Create file metadata to update
                // const newMetadata = {

                // };
                // // Update metadata properties
                // updateMetadata(storageRef, newMetadata)
                //     .then((metadata) => {
                //         // Updated metadata for 'images/forest.jpg' is returned in the Promise
                //         console.log(metadata)
                //     }).catch((error) => {
                //         // Uh-oh, an error occurred!
                //     });
            });
        }
    );

});
// ------------Login------------------

formLogin.addEventListener("submit", (e) => {
    debugger
    e.preventDefault();
    loginDocumentPassword
});
const loginDocumentPassword = async () => {
    const loginDoc = loginDocumento.value;
    const loginPass = loginPassword.value;
    console.log('aqui:', loginDoc, loginPass)
    try {
        const userCredential = await signInWithEmailAndPassword(auth, loginDoc, loginPass); console.log(userCredential.user);
    } catch (error) {
        console.log(error);
    }
}

