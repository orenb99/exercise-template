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
    while(input.includes("NaN")){
        input=input.replace("NaN","0");
    }

    arr=eval(input);
    arr=removeAll(arr,null);
    arr=removeAll(arr,0);
    arr=removeAll(arr,false);
    //arr=removeAll(arr,NaN);
    arr=removeAll(arr,undefined);
    for(let i=0;i<arr.length;i++){
        if(arr[i]==="")
            arr[i]=0;
        }
    output.innerText = arr;
}
    
