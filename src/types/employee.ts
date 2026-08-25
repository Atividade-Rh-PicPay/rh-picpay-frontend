export interface EmployeeRequestDTO {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: string;
  department: string;
  salary: number;
  city: string;
  status?: number;
}

export interface EmployeeDetailsOutputDTO {
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

export interface EmployeeCardOutputDTO {
  id: number;
  name: string;
  email: string;
  role: string;
  department: string;
  status: string;
}

export interface FindManyEmployeesQueryParamsDTO {
  name?: string;
  email?: string;
  role?: string;
  status?: number;
  take?: number;
  skip?: number;
}

export interface FindManyEmployeesOutputDTO {
  employees: EmployeeCardOutputDTO[];
  totalCount: number;
}
