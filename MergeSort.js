// Merge Sort


const mergeSort=(n)=>{
    if(n.length<2)
        return n;

    const length=n.length;
    const middle=Math.floor(length/2);
    const left = nums.slice(0,middle);
    const right=nums.slice(middle,length);


    return stitch(mergeSort(left),mergeSort(right));
}

 const stitch=(a,b)=>{
     const results=[];
     while(a.length && b.length){
         if(a[0]<=b[0]){
             results.push(a.shift());
             //shift takes the first element instead pop takes the last
         }
         else{
             results.push(b.shift)
         }
     }
     while(left.length){
            results.push(left.shift());

     }
     while(right.length)
        results.push(right.shift());

    return results;
 }