function getMethod(method: "post" | "get", count: 1 | 2) {
  console.log(count);
}
getMethod("post", 1);

let method = "post";
// getMethod(method,1) error = method o'zgaruvchisini tipi string, funksyaga faqat literalda qiymat berish kerak yoki letni constga o'zgartirish kerak

getMethod(method as "get", 1); // no error
