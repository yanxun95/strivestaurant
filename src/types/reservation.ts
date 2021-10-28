interface IReservation {
  _id: number;
  name: string;
  phone: string;
  numberOfPersons: number;
  smoking: boolean;
  dateTime: string;
  specialRequests: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export default IReservation;
