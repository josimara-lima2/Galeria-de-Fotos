import { Photo } from "../types/Photo"
import { storage } from "../libs/firebase"
import { ref, listAll, getDownloadURL,uploadBytes,deleteObject} from 'firebase/storage'
import { v4 as createId } from "uuid"
export const getAll = async () => {
    let list:Photo[]= []
    //referencia a pasta images
    const imagesFolder = ref(storage,'images')
    //listando tudo enconntrado na referencia
    const photoList = await listAll(imagesFolder)

    for(let i in photoList.items){
        let photoUrl = await getDownloadURL(photoList.items[i])
        list.push({
            name: photoList.items[i].name,
            url: photoUrl
        })
    }

    return list
}

export const insert = async (file:File) => {
    if(['image/jpeg','image/jpg','image/png'].includes(file.type)){
        let randomName= createId()
        let newFile=ref(storage,`images/${randomName}`)
        let upload = await uploadBytes(newFile,file)
        let photoUrl = await getDownloadURL(upload.ref)
        return {
            name:upload.ref.name,
            url:photoUrl

        } as Photo
    }else{
        return  new Error('Tipo de arquivo nao permitido')
    }
}

export const deleteFile = async (file:File) => {
    let newFile=ref(storage,`images/${file.name}`)

    let del = await deleteObject(newFile)
}