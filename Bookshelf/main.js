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

  var bookContainer = document.querySelector('.container');
  // var description = document.querySelector('#description');


  records.forEach(function(record) {
    console.log('Retrieved', record.get('title'), record.fields);


    var book = document.createElement("div");
    book.classList.add("book-container");
    document.querySelector(".container").append(book);


    var bookTitle= document.createElement('div');
    bookTitle.classList.add('book-title');
    bookTitle.innerHTML = record.fields.title;


    var description = document.createElement('div');
    description.classList.add('description');
    description.innerHTML = record.fields.description;


    var coverImage = document.createElement('img');
    coverImage.classList.add('cover-image');
    coverImage.src = record.fields.cover_image[0].url;
    // book.style.backgroundImage = 'url(' + coverImageUrl + ')';


    book.addEventListener('click',function(){
      window.open(record.fields.more_info);
      //change to insert the URL, since sometimes it will not work when clicking command+Click
    } );

    book.append(bookTitle);
    book.append(description);
    book.append(coverImage);
    bookContainer.append(book);

    book.addEventListener("mouseover", function() {
      description.classList.toggle("active");
      coverImage.classList.toggle("active");
    });
    //change css of active and remove 

    book.addEventListener("mouseleave", function() {
      description.classList.remove("active");
      coverImage.classList.remove("active");
      });



  });


  fetchNextPage();

}, function done(err) {
  if (err) { console.error(err); return; }
});


