fetch('./api2.json').then(e=>{
    if(e.ok){
        return e.json()
    }
}).then(e =>{
    console.log(e);
})