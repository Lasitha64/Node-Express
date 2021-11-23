const {readFile, writeFile} = require('fs')

readFile('./content/first.txt','utf8', (err, result) => {
if(err){
    console.log(err)
    return
}
const first = result
//console.log(result)
readFile('./content/first.txt','utf8', (err, result) => {
    if(err){
        console.log(err)
        return
    }
    const second = result

    writeFile(
        './content/nex.txt', `Here is the result :${first}, ${second}`
    ,(err,result) =>{
        if(err){
            console.log(err)
            return
        }
    })
    })
})