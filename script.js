            //callback function
            //and nested
function myFuction( a , b){
    console.log(  a + b)
}

function myFunction2 ( a , b , sum){
    sum ( a , b)
}
console.log(myFunction2( 2 , 5 ,myFuction))

setTimeout(()=>{
    console.log("hello yeasin")
},1000)
                //loop nested
    for(let i = 0 ; i < 10 ; i++){
        let x = "";
        for(let y = 0 ; y < 10 ; y++){
            x = x + y
        }
        console.log(i,x)
    }

let age = 16 ;
if( age <= 10){
    if( age <= 40){
        console.log("you are old man")
    }else{
        console.log("you are yuang")
    }
}else{
    console.log("child")
}
    //callback hell function
function getdata (data , nextdata){
    setTimeout(()=>{
        console.log("data is" , data)
        if(nextdata){
            nextdata()
        }
    },2000)
}
getdata(1 , ()=>{
    getdata(2,()=>{
        getdata(3,()=>{
            getdata(4)
        })
    })
})

            //promise and promise chain
    function getPromise (data){
        return new Promise(( resolve , reject)=>{
            setTimeout(()=>{
                console.log("data is" , data);
                resolve("200")
                //reject("ami err")
            },10000)
        })
    }
    getPromise(1).then((res)=>{
       return getPromise(2)
    }).then((res)=>{
       return getPromise(3)
    }).then((res)=>{
       return getPromise(4)
    }).then((res)=>{
       return getPromise(5)
    })
    /*getPromise().catch((err)=>{
        console.log(err);
    })*/

                //async and await

    function getAwait(val){
        return new Promise(( resolve , reject)=>{
            setTimeout(()=>{
                console.log("data is" , val);
                resolve("200")
                //reject("ami err")
             },10000)
        })
    }
    
    async function Async(){
        await getAwait(10)
    }
    Async()