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
            let documentoValid = {
                pais: '',
                documento: '',
                senha: ''
            }
            console.log(docsID)
            docsID.forEach(item => {
                if (documentoValue == item.documento && senhaValue == item.senha) {

                    documentoValid = {
                        pais: item.pais,
                        documento: item.documento,
                        senha: item.senha
                    }

                }
            })

            if (documentoValue == documentoValid.documento && senhaValue == documentoValid.senha) {
                window.location.href = './qwer/'
                let mathRandom = Math.random().toString(16).substr(2)
                let token = mathRandom + mathRandom
                localStorage.setItem('token', token,)
                localStorage.setItem('documentoLogado', JSON.stringify(documentoValue))
            } else {
                loginDocumento.setAttribute('style', 'border-color: red')
                loginPassword.setAttribute('style', 'border-color: red')
                statusLogin.innerHTML = 'Documento ou Senha Inválido(a)1'
                loginDocumento.focus()
            }

        }
        else {
            loginDocumento.setAttribute('style', 'border-color: red')
            loginPassword.setAttribute('style', 'border-color: red')
            statusLogin.innerHTML = 'Documento ou Senha Inválido(a)2'
            loginDocumento.focus()
        }





        //         debugger
        //         if (item.documento == documentoValue && item.senha == senhaValue) {
        //             console.log("Doc e senha ok")
        //             window.location.href = './qwer/'
        //             let token = id
        //             return token
        //         }
        //         else {
        //             statusLogin.innerHTML = 'Documento ou Senha Inválido(a)'
        //             loginDocumento.setAttribute('style', 'border-color: red')
        //             loginPassword.setAttribute('style', 'border-color: red')
        //             loginDocumento.focus()
        //         }
        //     });
        // } else {
        //     loginDocumento.setAttribute('style', 'border-color: red')
        //     loginPassword.setAttribute('style', 'border-color: red')
        //     statusLogin.innerHTML = 'Documento ou Senha Inválido(a)'
        //     loginDocumento.focus()
        // }
    });
}
