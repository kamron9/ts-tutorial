"use strict";
var RequestMethods;
(function (RequestMethods) {
    RequestMethods["Post"] = "post";
    RequestMethods["Get"] = "get";
})(RequestMethods || (RequestMethods = {}));
function getMethod(method, count) {
    console.log(count);
}
getMethod('post', 1);
let method = 'post';
// getMethod(method,1) error = method o'zgaruvchisini tipi string, funksyaga faqat literalda qiymat berish kerak yoki letni constga o'zgartirish kerak
getMethod(method, 1); // no error
