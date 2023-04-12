type httpMethods = "post" | "get";

function getData(method: httpMethods, count: 1 | 2) {
  console.log(count);
}
getData("post", 1);

type age = number;
type name = string;

//object

//1
type UserListType = {
  name: string;
  age: number;
  address: {
    street: string;
    town: string;
  };
  status: string[];
  isMerried: boolean;
};

let userList: UserListType = {
  name: "Shavkat",
  age: 22,
  address: {
    street: "test",
    town: "test",
  },
  status: ["student", "programmer"],
  isMerried: false,
};

//2
type StudentType = {
  name: string;
  age: number;
  status: string;
};
type StudentId = {
  id: number;
};
type StudentTypeWithId = StudentType & StudentId;

const studentList: StudentTypeWithId = {
  name: "Zafar",
  age: 22,
  status: "programmer",
  id: 1,
};

console.log(studentList);
