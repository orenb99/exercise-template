function remove(arr,slot){
    let a1=[];
    for(let i=0;i<arr.indexOf(slot);i++){
        a1.push(arr[i]);
    }
    for(let i=arr.indexOf(slot)+1;i<arr.length;i++){
        a1.push(arr[i]);
    }
    return a1;
}
function removeAll(arr,str){
    while(arr.includes(str)){
        arr=remove(arr,str)
    }
    return arr;
    }

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
            if(i!=j&&arr[i]===arr[j]){
                temp.push(arr[i]);
            }
        }
    }
    let final=[]
    do{
        let c=temp[0];
        final.push(c);
        removeAll(temp,c);
    }
    while(temp!==[])
    output.innerText = final;
}
    
