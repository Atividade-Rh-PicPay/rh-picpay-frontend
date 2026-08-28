export interface ProfileOutputDTO {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: string;
  department: string;
  salary: number;
  city: string;
  status: string;
}

export interface UpdateProfileRequestDTO {
  name?: string;
  email?: string;
  password?: string;
  phone?: string;
  city?: string;
}

export interface UpdateProfileFormValues extends UpdateProfileRequestDTO {
  confirmPassword?: string;
}
