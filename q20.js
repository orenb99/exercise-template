
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
    
    let temp=[];
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(i!==j&&arr[i]===arr[j]&&!temp.includes(arr[i])){
                temp.push(arr[i]);
                break;
            }
        }
    }
        output.innerText = temp;
}
    
