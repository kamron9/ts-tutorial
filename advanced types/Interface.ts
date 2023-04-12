interface UsersType {
  name: string;
  age: number;
  status: string;
  loggger: (id: number) => string;
}

interface UsersId {
  id: number;
}

interface UsersTypeWithId extends UsersType, UsersId {}

const UsersList: UsersTypeWithId = {
  name: "Zafar",
  age: 22,
  status: "programmer",
  id: 1,
  loggger: (id) => {
    return "test";
  },
};

//interface bilan typeni farqi

interface IUser {
  id: number;
}
interface IUser {
  name: string;
}
//1
//bu xolatda ikkita interface bir biriga qo'shiladi, typeda esa xatolik beradi
// interface IUser {
//   id: number;
//   name: string;
// }

type ID = string | number;
//interface ID = string | number  = interfaceda bunday yozishni ilaji yo'q

interface I {
  id: number | string;
} //faqat obyekt va classlar uchun, type oddiy tiplar bilan xam ishlaydi
