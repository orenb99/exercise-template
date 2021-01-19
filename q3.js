function run() {
    const input = document.getElementById("input").value;
    const input2 = document.getElementById("input2").value;
    const output = document.getElementById("output");
    let bol=true;
    let tempArr=[];
    let finalArr=[];
    let num=0;
    try {
          JSON.parse(input);
    } catch {
          bol=false;
        }
    if(bol===true)
        if(Array.isArray(JSON.parse(input)))
            tempArr=JSON.parse(input);
    if(parseInt(input2)>0){
        if(input2>tempArr.length)
            num=tempArr.length;
        else
            num=input2;
        for(let i=0;i<num;i++)
            finalArr.push(tempArr[i]);
    }
    else
        finalArr.push(tempArr[0]);
    output.innerText = finalArr;
}
    
