function run() {
    const input = document.getElementById("input").value;
    const input2 = document.getElementById("input2").value;
    const output = document.getElementById("output");
    let arr=[];
    let bol=true;
    try {
        JSON.parse(input);
  } catch {
        bol=false;
      }
    if(bol===true)
      if(Array.isArray(JSON.parse(input)))
          arr=JSON.parse(input);

    arr=arr.sort();
    let num=parseInt(input2);
    let index=Math.floor(arr.length/2);
    let low=0;
    let high=arr.length-1;

    switch(num){
        case arr[0]:
            index=0;
            break;
        case arr[arr.length-1]:
            index=arr.length-1;
            break;
    }

    if(!arr.includes(num))
        output.innerText = +num+ " isn't in the array";
    else{
    while(arr[index]!==num&&low<high){
        if(arr[index]>num){
            high=index;
            index=Math.floor((index-low)/2);
        }
        else if(arr[index]<num){
            low=index;
            index=index+Math.floor((high-index)/2);
        }

    }  
    output.innerText = index;
}
}
    
