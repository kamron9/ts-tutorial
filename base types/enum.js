"use strict";
var statusCode;
(function (statusCode) {
    statusCode[statusCode["success"] = 0] = "success";
    statusCode[statusCode["proccess"] = 1] = "proccess";
    statusCode[statusCode["failed"] = 2] = "failed";
})(statusCode || (statusCode = {}));
function action(status) {
    return status;
}
action(statusCode.failed);
let res2 = 1 /* Railway.admin */;
