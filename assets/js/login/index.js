import { getCollection, getExperienceMtbdocsID } from "../firebase/experience-mtb.js";
import { formLogin, loginDocumento, loginPais, loginPassword, statusLogin } from "../ui.js";
export async function login() {
    formLogin.addEventListener('submit', async (e) => {
        e.preventDefault();
        // Previne a submissão do formulário:
        let documentoValue = loginDocumento.value
        let senhaValue = loginPassword.value
        let id = loginPais.value + documentoValue
        let docs = await getExperienceMtbdocsID()
        debugger
        if (docs.includes(id) == true) {
            let docsID = await getCollection(documentoValue)
            console.log(docsID)
            docsID.forEach(item => {
                debugger
                if (item.documento == documentoValue && item.senha == senhaValue) {
                    console.log("Doc e senha ok")
                    window.location.href = './qwer/'
                    let token = id
                    return token
                }
                else {
                    statusLogin.innerHTML = 'Documento ou Senha Inválido(a)'
                    loginDocumento.setAttribute('style', 'border-color: red')
                    loginPassword.setAttribute('style', 'border-color: red')
                    loginDocumento.focus()
                }
            });
        } else {
            loginDocumento.setAttribute('style', 'border-color: red')
            loginPassword.setAttribute('style', 'border-color: red')
            statusLogin.innerHTML = 'Documento ou Senha Inválido(a)'
            loginDocumento.focus()
        }
    });
}