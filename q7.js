function maxArray(arr){
  let max=0;
  let highest=true;
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++){
      if(j!==i){
        if(arr[i]>=arr[j]){
          highest=true;
        }
        if(arr[i]<arr[j]){
          highest=false;
          break;
        }
      }
    }
    if(highest===true){
      max=arr[i];
    }
    highest=true;
  }
  return max;
}



function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let tempArr=[];
    let arr=[];
    let bol=true;
    try {
        JSON.parse(input);
    } catch {
        bol=false;
      }
    if(bol===true)
      if(Array.isArray(JSON.parse(input)))
          tempArr=JSON.parse(input);

    while(arr.length<tempArr.length){
      let max=maxArray(tempArr);
      arr.push(max);
      tempArr[tempArr.indexOf(max)]=0;
    }
    output.innerText = arr;
}
    
