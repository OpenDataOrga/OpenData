
var fs = require('fs')



function searchOne(nomVille,file){
    let openFile = fs.readFileSync(file)
    let bioScore = JSON.parse(openFile)

    let res = []
    bioScore.forEach(x => {
        if (x.libellecommune == nomVille){
            res.push(x.scoreBio)
        }
    })

    return res.reduce((partialSum, a) => partialSum + a, 0)

}

console.log(searchOne('ARANDAS','Data/bioScore.json'))
