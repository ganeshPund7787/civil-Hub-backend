export interface ClientType {
  _id: string;
  role: string;
  isAdmin: Boolean;
  fullName: string;
  email: string;
  phoneNumber?: string;
  company?: string;
  address?: {
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  profilePictureUrl?: string;
  website?: string;
  bio?: string;
}
