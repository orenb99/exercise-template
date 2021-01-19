function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let arr=[];
    let out = "";
    let bol=true;
    try {
        JSON.parse(input);
  } catch {
        bol=false;
      }
    if(bol===true)
      if(Array.isArray(JSON.parse(input)))
          arr=JSON.parse(input);
    
    output.innerText = out;
}
    
