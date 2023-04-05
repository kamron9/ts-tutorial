"use strict";
// function
function getInfo(firstname, lastname) {
    return `ism ${firstname} familiya ${lastname}`;
}
getInfo('hello', 'world');
//arrow function
const getUserInfo = (firstname, lastname) => {
    return `ism ${firstname} familiya ${lastname}`;
};
getUserInfo('hello', 'world');
//=================================================================
function getUser(dataUser) {
    //error dataUser.city
    return `${dataUser.firstname} ${dataUser.lastname} ${dataUser.age}`;
}
const user = {
    firstname: 'Teshaboy',
    lastname: 'Teshaboyev',
    city: 'Andijon',
    age: 32
};
getUser(user);
