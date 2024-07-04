import fs from "fs/promises"
import path from "path"
import fsn from "fs"
const folder="C:\\Users\\codea\\Documents\\Web Development\\File organiser\\Unorganised Files"

let files=await fs.readdir(folder)
for (const file of files) {
    let fileName=file
    let fileExtension=path.extname(file).split(".")[1]
    let oldFilePath=path.join(folder,fileName)
    let targetFolder=path.join(folder,fileExtension)
    if(fsn.existsSync(targetFolder)){
        // move file
        fs.rename(oldFilePath,path.join(folder,fileExtension,fileName))
        console.log('File Moved SuccesFully');
        
    }
    else{
        fs.mkdir(targetFolder)        
        fs.rename(oldFilePath,path.join(folder,fileExtension,fileName))

    }
    console.log('Thanks For Using it');
        
}