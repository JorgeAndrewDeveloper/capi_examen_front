export interface UserModel {
  id: number;
  name: string;
  email: string;
  birthday: string;
  age: number;
  user_addresses: UserAdressModel;
}

export interface UserAdressModel {
  adress: string;
  exterior_number: number;
  suburb: string;
  zipcode: number;
  city: string;
}