
console.log('find me in main.js');


var Airtable = require('airtable');

Airtable.configure({
  apiKey: 'keyFxvwCW8U8MxKns',
  endpointUrl: 'https://api.airtable.com'
});
var base = Airtable.base('appMHd0Kxdec8oG17');

base('Table 1').select({
  maxRecords: 200,
  view: 'Grid view'
}).eachPage(function page(records, fetchNextPage) {
  var placeContainer = document.querySelector('#place-container');

   records.forEach(function(record) {
    console.log('Retrieved', record.get('title'), record.fields);


    var place = document.createElement('div');
    var label = document.createElement('div');
    var photoUrl = record.fields.photo[0].url;

    label.classList.add('place__label');
    label.innerHTML = record.fields.title;

    place.classList.add('place');
    place.style.backgroundImage = 'url(' + photoUrl + ')';


    place.append(label);
    placeContainer.append(place);
  });

  fetchNextPage();
}, function done(err) {
  if (err) { console.error(err); return; }
});
