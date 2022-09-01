import { getExperienceMtbdocs, subscribeToExperienceMtb } from './firebase/experience-mtb.js';
import { getStorageImage } from './firebase/experience-mtb.js';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-storage.js"

const txtPais = document.getElementById('txtPais');
const txtNome = document.getElementById('txtNome');
const txtDocumento = document.getElementById('txtDocumento');
const txtDataNascimento = document.getElementById('txtDataNascimento');
const txtEmail = document.getElementById('txtEmail');
const txtCidade = document.getElementById('txtCidade');
const txtWhatsApp = document.getElementById('txtWhatsApp');
const txtTamanhoCamiseta = document.getElementById('txtTamanhoCamiseta');
const txtModalidade = document.getElementById('txtModalidade');
const txtModalidadeRacing = document.getElementById('txtModalidadeRacing');
const txtModalidadeChallenge = document.getElementById('txtModalidadeChallenge');
const txtNomeEquipe = document.getElementById('txtNomeEquipe');
const txtSenha = document.getElementById('txtSenha');
const txtFotoCard = document.getElementById('txtFotoCard');
const formCadstro = document.getElementById('formCadstro');
const btnCadastrar = document.getElementById('btnCadastrar');
const error = document.querySelector('.error');
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
formCadstro.addEventListener('submit', async (event) => {
    // Previne a submissão do formulário:
    event.preventDefault();
    const docsID = await getExperienceMtbdocs()
    const ID = txtPais.value + txtDocumento.value
    if (docsID.includes(ID) == true) {
        alert("Esse Documento já existe")
        txtDocumento.focus();
    } else {
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
            }
            subscribeToExperienceMtb(subscription, ID);
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
            }
            subscribeToExperienceMtb(subscription, ID);
            alert("Cadastro Feito com Sucesso!!!")
            limparDados()
        }
    }
});
//Upload de imagens
const storage = getStorage();

const input = document.querySelector('input[type=file]');

input.addEventListener('change', (e) => {
    let file = e.target.files[0];

    const storageRef = ref(storage, `images/${e.target.files[0].name}`)
    // // .put(e.target.files[0]);
    // // 'file' comes from the Blob or File API
    // // uploadBytes(storageRef, file).then((snapshot) => {
    console.log(storageRef);
    // // });


    // Create the file metadata
    /** @type {any} */
    const metadata = {
        contentType: 'image/jpeg'
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
                console.log('File available at', downloadURL);
            });
        }
    );

});