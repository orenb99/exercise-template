function remove(arr,str){
    let a1=[];
    for(let i=0;i<arr.indexOf(str);i++){
        a1.push(arr[i]);
    }
    for(let i=arr.indexOf(str)+1;i<arr.length;i++){
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
    let input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let arr=[];
    let out = "";
    let bol=true;
    while(input.includes("undefined")){
        input=input.replace("undefined","");
    }
    while(input.includes("NaN")){
        input.replace("NaN","");
    }
    try {
        JSON.parse(input);
  } catch {
        bol=false;
      }
    if(bol===true)
      if(Array.isArray(JSON.parse(input)))
          arr=JSON.parse(input);


    for(let i=0;i<arr.length;i++){
        if(arr[i]==="")
            arr[i]=0;
        }
    arr=removeAll(arr,null);
    arr=removeAll(arr,0);
    arr=removeAll(arr,false);
    output.innerText = arr;


}
    
