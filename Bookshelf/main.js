console.log('find me in main.js');


var Airtable = require('airtable');
Airtable.configure({
  apiKey: 'keyFxvwCW8U8MxKns',
  endpointUrl: 'https://api.airtable.com'
});

var base = Airtable.base('appgb5iFrE9gy01nL');

base('Books').select({
  maxRecords: 200,
  view: 'Grid view'
}).eachPage(function page(records, fetchNextPage) {


  var bookContainer = document.querySelector('#book-container');
  var description = document.querySelector('#description');



  records.forEach(function(record) {
    console.log('Retrieved', record.get('title'), record.fields);

    var book = document.createElement('div');
    var label = document.createElement('div');
    var coverImageUrl = record.fields.cover_image[0].url;

    label.classList.add('book__label');
    label.innerHTML = record.fields.title;

    book.classList.add('book');
    book.style.backgroundImage = 'url(' + coverImageUrl + ')';

    book.addEventListener('mouseover',function(){
      description.innerHTML = record.fields.description;
    } );

  
    book.addEventListener('click',function(){
      window.open(record.fields.more_info);
    } );


    book.append(label);
    bookContainer.append(book);
  });


  fetchNextPage();

}, function done(err) {
  if (err) { console.error(err); return; }
});
