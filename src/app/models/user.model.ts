export interface UserModel {
  id: number;
  name: string;
  email: string;
  birthday: string;
  age: number;
  userAdress: UserAdressModel;
}

interface UserAdressModel {
  adress: string;
  exteriorNumber: number;
  suburb: string;
  zipcode: number;
  city: string;
}