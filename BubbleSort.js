/* Write Bubble Sort */



const bubbleSort=(n)=>{
    do{
            var swapped=false;
            for(var i=0;i<n.length;i++)
            {   
                if(n[i]>n[i+1]){
                    var t=n[i];
                    n[i]=n[i+1];
                    n[i+1]=t;
                    swapped=true;
                }
                
            }
    }while(swapped)
    return n;
}