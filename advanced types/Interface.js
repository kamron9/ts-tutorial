"use strict";
const UsersList = {
    name: 'Zafar',
    age: 22,
    status: 'programmer',
    id: 1,
    loggger: (id) => {
        return 'test';
    }
};
console.log(UsersList.loggger(1));
