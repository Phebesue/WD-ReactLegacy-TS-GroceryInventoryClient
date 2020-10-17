export interface UserData {
  user: UserDetails;
  sessionToken: string;
}

export interface UserDetails {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  admin: string;
}

export interface Groc {
  grocery: GroceryDetails[];
}

export interface GroceryDetails {
  id: number;
  upc: string;
  groceryName: string;
  storageType: string;
  storageContainer: string;
  quantity: string;
  unitOfMeasure: string;
  onHand: number;
  groceryNotes: string;
  locationId: number;
  vendorId: number;
}

export interface LocationDetails {
  id: number;
  locationName: string;
  room: string;
  place: string;
  type: string;
  locationNotes: string;
}

export interface VendorDetails {
  id: number;
  vendorName: string;
  website: string;
  address: string;
  city: string;
  state: string;
  zipcode: string;
  vendorNotes: string;
}
