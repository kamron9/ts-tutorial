// function
function  getInfo (firstname:string,lastname:string):string{
    return `ism ${firstname} familiya ${lastname}`
}
getInfo('hello', 'world')
//arrow function
const getUserInfo = (firstname:string,lastname:string) : string =>{
    return `ism ${firstname} familiya ${lastname}`
}
getUserInfo('hello', 'world')


//=================================================================
function getUser(dataUser:{firstname:string,lastname:string,age:number}){
    //error dataUser.city
    return `${dataUser.firstname} ${dataUser.lastname} ${dataUser.age}`
}
const user = {
    firstname:'Teshaboy',
    lastname:'Teshaboyev',
    city:'Andijon',
    age:32
}
getUser(user)
