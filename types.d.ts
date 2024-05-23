interface IUser {
  _id: string;
  name: string;
  email: string;
}

interface ICurrentUser {
  currentUser: IUser | null;
}
