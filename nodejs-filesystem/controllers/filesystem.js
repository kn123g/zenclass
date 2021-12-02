const fs = require('fs');
require('express-zip');
exports.createFile = async (req,res)=>{
  let result;
    if (fs.existsSync(`${__dirname}/../files/`)) {
      result = await writeFile()
      res.json(result).status(200);
    }
    else{
      fs.promises.mkdir(`${__dirname}/../files/`, { recursive: true })
      .then(async ()=>{
        result = await writeFile()
        res.json(result).status(200);
      })
      .catch(console.error);
    }

    
}
exports.fetchFiles = (req,res)=>{
    let directoryPath = `${__dirname}/../files/`;
    console.log(`scanning path  ${directoryPath}`)
    fs.readdir(directoryPath,async function (err, files) {
        if (err) {
          res.status(500).send({
            message: "Unable to scan files! May be no files exist",
          });
        }
    
        let fileInfos = [];
    
        await files.forEach((file) => {
          fileInfos.push({
            name: file,
            path: `${__dirname}/../files/${file}`,
          });
        });
        res.zip(fileInfos);
      });
}

async function writeFile(){
  let file_name = new Date().toLocaleString().split(' ').join('_').split('/').join('_').split(':').join('_').split(',').join('');
  let result ;
  await new Promise((resolve, reject) => {
    fs.writeFile(`${__dirname}/../files/${file_name}.txt`, file_name, function (err) {
    if (err) {
        console.log(`failed to save ! File ${file_name}.txt`);
        result = {message: `failed to save ! File ${file_name}.txt`};
        resolve()
        // throw err;
    }
    else{        
        console.log(`Saved! File ${file_name}.txt`);
        result = {message: `Saved! File ${file_name}.txt`};
        resolve()
    }
  });
  });
  return result;
}