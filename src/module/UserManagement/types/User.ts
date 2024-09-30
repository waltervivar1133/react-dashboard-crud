export interface User {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  phone: string;
  cell: string;
  picture: Picture ;
  nat: string;
}

interface Location {
  street: Street;
  city: string;
  state: string;
  country: string;
  postcode: string;
}
interface Street {
  number: number;
  name: string;
}

interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

interface Name {
  title: string;
  first: string;
  last: string;
}