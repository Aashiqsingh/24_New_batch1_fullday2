

// arr.forEach((a)=>{

//     console.log(a.toUpperCase());
    
// })


// var x = arr.map((a)=>{

//     return a
// })

// console.log(x);

// var x = arr.filter((a)=>{

//     return a.length>5
// })

// console.log(x);


// var name = "ankit"

// var x = arr.filter((a)=>{

//     return a!=name 
// })
// console.log(x);
// var arr = ["ram","roshan","rahul","ankit","aadarsh","ketan"];






// var str = "royal technosoft"





// var name = "roshan"

// const deleteUser = (name)=>{

//     // var x = arr.filter((a)=>a!=name)
//     // return x;


//     return arr.filter((a)=>a!=name)
// }


// var x = deleteUser(name)
// console.log(x);


var num = [541,234,567,223,422,454]
var rev = 0;

var x = num.filter((n)=>{


    for(let i=0;i<num.length;i++){
        rem = i % 10;
        rev = (rev * 10) + rem;
        i = Math.floor(i / 10);
    }

   return n === rev
    

})
console.log(x);

