import { getCollection, getExperienceMtbdocsID } from "../firebase/experience-mtb.js";
import { formLogin, loginDocumento } from "../ui.js";
export async function login() {
    formLogin.addEventListener('submit', async (e) => {
        e.preventDefault();
        debugger
        let documento = loginDocumento.value
        // Previne a submissão do formulário:
        const docsID = await getExperienceMtbdocsID()
        const docID = docsID.includes(documento)
        console.log(docID)
        if (docsID.includes(documento) == true) {
            console.log('chegou aqui')
        } else {
            console.log('erro');
        }
    });
}