import { api } from "./api";
import {
  EmployeeDetailsOutputDTO,
  EmployeeRequestDTO,
  FindManyEmployeesOutputDTO,
  FindManyEmployeesQueryParamsDTO,
} from "../types/employee";

export const employeeService = {
  findMany: (query: FindManyEmployeesQueryParamsDTO) =>
    api
      .get<FindManyEmployeesOutputDTO>("/api/v1/employees", { params: query })
      .then((r) => r.data),

  findOne: (id: number) =>
    api
      .get<EmployeeDetailsOutputDTO>(`/api/v1/employees/${id}`)
      .then((r) => r.data),

  register: (data: EmployeeRequestDTO) =>
    api
      .post<EmployeeDetailsOutputDTO>("/api/v1/employees", data)
      .then((r) => r.data),

  fullUpdate: (id: number, data: EmployeeRequestDTO) =>
    api
      .put<EmployeeDetailsOutputDTO>(`/api/v1/employees/${id}`, data)
      .then((r) => r.data),

  partialUpdate: (id: number, data: Partial<EmployeeRequestDTO>) =>
    api
      .patch<EmployeeDetailsOutputDTO>(`/api/v1/employees/${id}`, data)
      .then((r) => r.data),

  deleteOne: (id: number) =>
    api.delete<void>(`/api/v1/employees/${id}`).then((r) => r.data),
};
