import type {
    EmployeeRequestDTO,
    EmployeeDetailsOutputDTO,
    EmployeeCardOutputDTO,
    FindManyEmployeesQueryParamsDTO,
    FindManyEmployeesOutputDTO,
  } from "../types/employee";
  
  const BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8080";
  
  function buildQueryString(params: FindManyEmployeesQueryParamsDTO = {}): string {
    const query = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        query.append(key, String(value));
      }
    });
    const str = query.toString();
    return str ? `?${str}` : "";
}

export const employeeApi = {
    async findMany(
        params?: FindManyEmployeesQueryParamsDTO
    ): Promise<FindManyEmployeesOutputDTO> {
        const res = await fetch(`${BASE_URL}/employees${buildQueryString(params)}`);
        if (!res.ok) throw new Error("Failed to fetch employees");
        return res.json();
    },

    async findById(id: number): Promise<EmployeeDetailsOutputDTO> {
        const res = await fetch(`${BASE_URL}/employees/${id}`);
        if (!res.ok) throw new Error("Employee not found");
        return res.json();
    },

    async create(dto: EmployeeRequestDTO): Promise<EmployeeCardOutputDTO> {
        const res = await fetch(`${BASE_URL}/employees`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dto),
    });
    if (!res.ok) throw new Error("Failed to create employee");
        return res.json();
    },

    async update(
        id: number,
        dto: EmployeeRequestDTO
    ): Promise<EmployeeDetailsOutputDTO> {
    const res = await fetch(`${BASE_URL}/employees/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dto),
    });
        if (!res.ok) throw new Error("Falha ao atualizar funcionário");
            return res.json();
    },

    async updateStatus(
        id: number,
        status: number
    ): Promise<EmployeeDetailsOutputDTO> {
    const res = await fetch(`${BASE_URL}/employees/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
    });
    if (!res.ok) throw new Error("Falha ao atualizar status");
        return res.json();
    },

    async remove(id: number): Promise<void> {
        const res = await fetch(`${BASE_URL}/employees/${id}`, { method: "DELETE" });
        if (!res.ok) throw new Error("Falha ao deletar funcionário");
    },
};