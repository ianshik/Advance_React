const xyz=new Promise ((resolve,reject)=>{
    const success =true;
    if(success) {
        resolve(success);
    }
    else reject(success);
});

const pqrs= xyz.then((data)=>{
    const booly=data;
    console.log(booly);
})

.catch((data)=>{
    console.log(data);
})

const x=async(()=>{
    try{
            await(fetch())
    }
    catch(error){
        
    }
});