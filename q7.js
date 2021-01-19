function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
    let tempArr=[];
    
    let bol=true;
    try {
        JSON.parse(input);
    } catch {
        bol=false;
      }
    if(bol===true)
      if(Array.isArray(JSON.parse(input)))
          tempArr=JSON.parse(input);

    let arr=[];
    output.innerText = tempArr;
}
    
