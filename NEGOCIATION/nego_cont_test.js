
//export de la base de données
app.get("/exportdataset" , function (request, response){
    mongodb.MongoClient.connect(urimongo, { useUnifiedTopology: true }, function (err, client) {
        if (err) console.log("error", err);
        else {
            client.db("otakuotake").collection("characters").find().toArray(function (err, items) {
                if (err) throw err;
                response.format({
                    'application/json' : function () {
                          response.setHeader('Content-disposition' , 'attachment; filename=score.json' ); //do nothing response.set('Content-Type', 'application/json');
                          response.json(items);
                        },
                          'text/csv': function () {
                                response.setHeader('Content-disposition' , 'attachment; filename=score.csv' ); //do nothing response.set('Content-Type', 'text/csv');
                                let csv ;
                                //build a CSV string with csv-writer
                                csv = csvStringifierCharacters .getHeaderString ().concat(csvStringifierCharacters .stringifyRecords (items));
                                response.end(csv);
                            }
                  });
              });
          }
      });
})




/*
//export de la base de données
app.get("/exportdataset" , function (request, response){
    mongodb.MongoClient.connect(urimongo, { useUnifiedTopology: true }, function (err, client) {
        if (err) console.log("error", err);
        else {
            client.db("otakuotake").collection("characters").find().toArray(function (err, items) {
                if (err) throw err;
                response.format({
                    'application/json' : function () {
                          response.setHeader('Content-disposition' , 'attachment; filename=score.json' ); //do nothing response.set('Content-Type', 'application/json');
                          response.json(items);
                        },
                          'text/csv': function () {
                                response.setHeader('Content-disposition' , 'attachment; filename=score.csv' ); //do nothing response.set('Content-Type', 'text/csv');
                                let csv ;
                                //build a CSV string with csv-writer
                                csv = csvStringifierCharacters .getHeaderString ().concat(csvStringifierCharacters .stringifyRecords (items));
                                response.end(csv);
                            }
                  });
              });
          }
      });
})

*/
