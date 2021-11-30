const fs = require('fs');
require('express-zip');
exports.createFile = (req,res)=>{
    let file_name = new Date().toLocaleString().split(' ').join('_').split('/').join('_').split(':').join('_').split(',').join('');
    fs.writeFile(`${__dirname}\\..\\files\\${file_name}.txt`, file_name, function (err) {
        if (err) throw err;
        console.log(`Saved! File ${file_name}.txt`);
    });
    res.json({message: `Saved! File ${file_name}.txt`}).status(200);
}
exports.fetchFiles = (req,res)=>{
    let directoryPath = `${__dirname}\\..\\files\\`;
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