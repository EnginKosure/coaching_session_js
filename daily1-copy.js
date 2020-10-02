// Return the list of people with at least two common interests.
const users = [
    { id: 0, name: "Jack", interests: ["books", "sports", "movies"] },
    { id: 1, name: "Jim", interests: ["fitness", "sports", "movies"] },
    { id: 2, name: "Joe", interests: ["cats", "swimming", "movies"] },
    { id: 3, name: "Zoe", interests: ["cars"] },
    { id: 4, name: "Liv", interests: ["cats", "movies"] },
  ];
// const z= users.map(x=>x.interests.map((a,b)=>`${a}:${b}`))//.entries().next().value;
// for (const val of z){
//     console.log(val.next());
// }
console.log(z);

function findMutuals(arr,n){
    let intObj={}
    let intArr=[]
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].interests.length;j++){
            if (intObj[arr[i].interests[j]] == undefined){
                intObj[arr[i].interests[j]]=arr[i].name;
            }else{
                intObj[arr[i].interests[j]]+=(", "+arr[i].name);
            }
            
        }
    }
    // console.log(intObj);
   for(y in intObj){
       if(intObj[y].split(',').length>=n){
        var arr1=(intObj[y].split(',').sort((a,b)=>a-b))
        intArr.push(arr1);
       }
   }
//    console.log(intArr);
//    intArr.reduce((a,c,i,arr)=>arr.includes(a))

};

  const friends = findMutuals(users,2);

//   expected outcome:

// [
//   ["Jack", "Jim"],
//   ["Joe", "Liv"]
// ]