function run() {
    const input = document.getElementById("input").value;
    const input2 = document.getElementById("input2").value;
    const output = document.getElementById("output");
    let out="";
    let minYear=Math.min(input,input2);
    let maxYear=Math.max(input,input2);
    for(let i=minYear;i<=maxYear;i++){
    let leap=false;
        if (i%4!==0) 
            leap=false;

        else if (i%100!==0) 
            leap=true;
            
        else if (i%400!==0) 
            leap=false;

        else 
            leap=true;
        if(leap===true)
            out+=i+"\n";
    }


    output.innerText = out;
}
    
