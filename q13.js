let arr=[];
function run() {
    const input = document.getElementById("input").value;
    arr.push(input);
}
function display(){
    const output = document.getElementById("output");
    out="";
    for(let i=0;i<arr.length;i++){
        out+="Element "+i+" : "+arr[i] +"\n";
    }
    output.innerText = out;
}
    
