



let arrayBooks = [{title:'Harry Potter',
    language:'French',
    author:'J.K. Rowling',
},

{   title:'Twilight',
    language:'French',
    author:'Stephenie Meyer',
},

{   title:'Hamlet',
    language:'English',
    author:'Shakespeare',
},

{   title:'Matilda',
    language:'English',
    author:'Roald Dahl',
},

{   title:'The Hobbit',
    language:'English',
    author:'J.R.R. Tolkien',
},

{   title:'Tintin',
    language:'French',
    author:'Herge',
},

{   title:'Le Club des Cinq',
    language:'French',
    author:'enid Blyton',
},

{   title:'Oui-Oui',
    language:'French',
    author:'Enid Blyton',
},

{   title:'Bob et Bobette',
    language:'French',
    author:'Willy Vandersteen',
},

{   title:'Le Petit Prince',
    language:'French',
    author:'Saint-Exupery',
}];


let arrayImg = [
    {"Harry_Potter" : "https://www.vanityfair.fr/uploads/images/thumbs/201849/6e/vf_harry_potter_2478.jpeg_north_1323x718_transparent.jpg"}, 
    {"Twilight":"http://fr.web.img6.acsta.net/r_1024_576/medias/nmedia/18/73/05/75/19474476.jpg"},
    {"Hamlet":"https://pb2.jegy.hu/imgs/system-4/program/000/074/780/william-shakespeare-hamlet-szindarab-vetitese-original-88424.jpg"},
    {"Matilda":"https://s3.amazonaws.com/busites_www/woodlandscenter2016com/pages/MATILDA2.jpg"},
    {"The_Hobbit":"https://i5.walmartimages.com/asr/3f1fb1d8-5c86-46d5-8cc9-006497cab8aa_1.7cc5a2345392998c0cfd9a38c4a50a63.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF"},
    {"Tintin":"http://www.tintin.com/tintin/persos/tintin/tintin.jpg"},
    {"Le_Club_des_cinq":"https://images-na.ssl-images-amazon.com/images/I/81PFcaHXupL.jpg"},
    {"Oui_Oui":"https://i.ytimg.com/vi/u8MtbpPyeZI/hqdefault.jpg"},
    {"Bob_et_Bobette":"https://cdn1.booknode.com/book_cover/2662/bob-et-bobette-le-loup-qui-rit-2662092-264-432.jpg"},
    {"Le_Petit_Prince":"https://images-na.ssl-images-amazon.com/images/I/71lWtUcX47L.jpg"},

];

function book() { 
for (let i = 0; i < arrayBooks.length; i++) {
  let li = document.createElement("li");
  let text = document.createTextNode(arrayBooks[i]);
  //li.appendChild(text);
  document.getElementById("myUl").appendChild(li);
  let title = document.createElement("h1");
        title.innerHTML = arrayBooks[i].title;
        li.appendChild(title);
        let language = document.createElement("p");
        language.innerHTML = arrayBooks[i].language;
        li.appendChild(language);
        let author = document.createElement("p");
        author.innerHTML = arrayBooks[i].author;
        li.appendChild(author);
 //adding images        
for (let j = 0; j <arrayImg.length; j++) {
Object.keys(arrayImg)};
}}
book();


//const x = document.getElementById('my_books');
//x.innerHTML="My books"
//const ul = document.createElement('ul');
//x.appendChild(ul);
//const li = document.createElement('li');
//ul.appendChild(li);

//li.appendChild(books);

