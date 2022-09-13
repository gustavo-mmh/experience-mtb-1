//Upload de imagens
export let imgRef;
export function getImgRef(input) {
    input.addEventListener('change', (e) => {
        let fileName = e.target.files[0].name;
        //pega a data de hj
        const today = new Date()
        let data = today.toISOString();
        let hj = data.replace(/\.|\:|\-/g, '');
        console.log("aqui:" + hj)
        console.log(e)
        //adiciona a data ao nome
        let namerplace = fileName.replace('.', "-" + hj + ".")
        imgRef = namerplace.replace(' ', "_")
    })
}
