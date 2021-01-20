var library = [ 
  { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
  { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
  { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
  ];

function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let exist=false;
    let arr=[];
    for(let i=0; i<library.length;i++){
      if(library[i].hasOwnProperty(input)){
        arr.push(library[i][input]);
        exist=true;
      }
    }
    if(exist===false)
      output.innerText = "no such property as "+input;
    else
      output.innerText= arr;
}
    
