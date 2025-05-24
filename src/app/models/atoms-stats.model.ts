export interface AtomsStats {
  name: string;
  default: string;
  description: string;
}

export interface UserModel {
  name: string;
  username: string;
  email: string;
  is_active: boolean;
  is_superuser: boolean;
  is_staff: boolean;
}
