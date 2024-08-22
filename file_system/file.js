const fsPromise = require('fs').promises;

const path = require('path');

const filesops = async() =>{
  try{
    const data = await fsPromise.readFile(path.join(__dirname,'files','bal.txt'),'utf-8');
    console.log(data);
    await fsPromise.unlink(path.join(__dirname,'files','bal.txt'))
    await fsPromise.writeFile(path.join(__dirname,'files','promiseWrite.txt'),data);
    await fsPromise.appendFile(path.join(__dirname,'files','promiseWrite.txt'),'\n\nNice to meet you bara.');
    await fsPromise.rename(path.join(__dirname,'files','promiseWrite.txt'),path.join(__dirname,'files','promiseComplete.txt'));
    const newData = await fsPromise.readFile(path.join(__dirname,'files','promiseComplete.txt'),'utf-8');
    console.log(newData);
  }
  catch(err){
    console.log(err);
  }
}

filesops();

// console.log("hello....");

// fs.writeFile(path.join(__dirname, 'files','bc.txt'), 'Hey amar bara', (err)=>{
//   if(err) throw err;
//   console.log('Write complete');
// })
// process.on('uncaughtException',err=>{
//   console.log(`there are uncaught error:${err}`);
//   process.exit(1);
// })

