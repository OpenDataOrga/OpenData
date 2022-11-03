var XLSX = require('xlsx');
var fs = require('fs');
var workbook = XLSX.readFile('Data/internet.xlsx');

var debitName = workbook.SheetNames[2];
var debitSheet = workbook.Sheets[debitName];

var debitSheet_json = XLSX.utils.sheet_to_json(debitSheet);

console.log(debitSheet_json[1])


var debit_json = [];
var round = 2;

for(var i = 1; i < debitSheet_json.length; i++) {

    var item = debitSheet_json[i];
    /* console.log(typeof (item["Pourcentage d'éligibles par classe de débit"])); */

    var first = (item["Pourcentage d'éligibles par classe de débit"]);
    var second = (item["__EMPTY_2"]);
    var third = (item["__EMPTY_3"]);
    var fourth = (item["__EMPTY_4"]);
    var fifth = (item["__EMPTY_5"]);
    var sixth = (item["__EMPTY_6"]);

    /* on transforme les valeurs en nombres arrondis en amont car erreur si le fonction .toFixed est
    directement utilisée dans le push */
    if ((typeof first =='number') && (typeof second =='number') && (typeof third =='number')
      && (typeof fourth =='number') && (typeof fifth =='number') && (typeof sixth =='number')) {
        var first_round = Number(first.toFixed(round));
        var second_round = Number(second.toFixed(round));
        var third_round = Number(third.toFixed(round));
        var fourth_round = Number(fourth.toFixed(round));
        var fifth_round = Number(fifth.toFixed(round));
        var sixth_round = Number(sixth.toFixed(round));
    /*console.log(typeof first_round);*/

    debit_json.push({
        'Code INSEE' : item["Données utilisées dans les formules. Ne pas effacer"],
        'Commune' : item["__EMPTY"],
        '0,5 Mbits/s' : first_round,
        '3 Mbits/s' : second_round,
        '8 Mbits/s' : third_round,
        '30 Mbits/s' : fourth_round,
        '100 Mbits/s' : fifth_round,
        '1 Gbits/s' : sixth_round,
        'Score Internet' : Number((first_round*0.05 + second_round*0.15 + third_round*0.2 +
                            fourth_round*0.25 + fifth_round*0.25 + sixth_round*0.1).toFixed(round))
    });
  }
}

console.log(debit_json);

fs.writeFile("Data/internet.json", JSON.stringify(debit_json), function(err) {
    if (err) {
        console.log(err);
    }
});

/* .toFixed(round) */
