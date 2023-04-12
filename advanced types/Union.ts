function getId(id:string | number | boolean){
    //Norrowing
    if(typeof id ==='string'){
        console.log(id.toUpperCase()) //id: string
    }
    else if(typeof id === 'number'){
        console.log(id) //id: number
    }
    else{
        console.log(id) //id: boolean
    }
}
getId(1)
getId('1')
getId(true)


function getError(err:string | string[]){
    if (Array.isArray(err)){
        console.log(err) //err: string[]
    }
    else{
        console.log(id)
    }
}
getError('something went wrong')
getError(['erro1','error2','error3'])


function getObj(obj:{ a: number } | { b:number }){
    if('a' in obj){
        console.log(obj.a)
    }
    else{
        console.log(obj.b)
    }
}

