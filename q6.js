


function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
    let num=parseInt(input);
    let i=10;
    let arr=[];
    while(Math.floor(num)>0){
        let temp=Math.floor(num%10);
        arr.unshift(temp);
        num/=10;
    }
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]%2===0&arr[i+1]%2===0)
            arr.splice(i+1,0,"-");
    }
    out=arr.toString();
    while(out.includes(","))
        out=out.replace(",","");
    
    output.innerText = out;
}
    
