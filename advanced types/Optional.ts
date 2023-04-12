interface IOpitonalUser {
  login: string;
  password?: number; // ? bunday belgini ishlatgandan keyin obyektga password keyini yozish ixtiyoriy bo'ladi agar ? bo'lmasa yozish shart
}
const opitonalUser: IOpitonalUser = {
  login: "hello",
};

function pilus(sum1: number, sum2?: number): number {
  // return sum1 * sum2; opitonal belgisi qo'yilgandan keyin bu xolatda xatolik chiqachi shunuchun quyidagicha yozish kerak
  if (!sum2) {
    return sum1 * sum1;
  }
  return sum1 * sum2;
}
pilus(1);

interface IOptionalAdmin {
  login: string;
  password?: {
    type: "admin" | "user";
  };
}
const opitonalAdmin: IOptionalAdmin = {
  login: "test",
  password: {
    type: "admin",
  },
};
function optionalTestUser(user: IOptionalAdmin) {
  const pw = user.password?.type;
}

optionalTestUser(opitonalAdmin);
