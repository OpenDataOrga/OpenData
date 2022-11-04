
var fs = require('fs')



function searchOneBio(nomVille,file){
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

console.log(searchOneBio('ARANDAS','Data/bioScore.json'))


function mergeJson(){
    let openFranceJson = fs.readFileSync('Data/france.json')
    let franceJson = JSON.parse(openFranceJson)

    let res = []
    franceJson.forEach(x=> {
        let tmp = new Object()
        tmp.codeCommune = x.Code_commune_INSEE
        tmp.nomCommune  = x.Nom_commune
        res.push(tmp)
    })

    return res

}


var dataTest = mergeJson()


console.log(dataTest)

console.log(typeof(dataTest))

console.log(typeof(dataTest[0]))


var data = JSON.stringify(dataTest)


fs.writeFile("Data/test.json", data, function(err) {
    if (err) {
        console.log(err)
    }
})

