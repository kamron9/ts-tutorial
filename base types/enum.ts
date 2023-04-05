enum statusCode {
    success,
    proccess,
    failed
}
function action(status:statusCode){
    return status
}
action(statusCode.failed)

//constant enum

const enum Railway{
    passanger,
    admin
}
let res2 = Railway.admin