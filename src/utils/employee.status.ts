import { EmployeeStatusEnum } from "../types/enums";

export function normalizeStatus(raw: unknown): EmployeeStatusEnum | undefined {
    if (typeof raw === "number") return raw as EmployeeStatusEnum;
    if (typeof raw === "string" && raw in EmployeeStatusEnum) {
        return EmployeeStatusEnum[raw as keyof typeof EmployeeStatusEnum];
    }
    return undefined;
}

export function getStatusInfo(status: unknown): { label: string; color: string } {
    switch (normalizeStatus(status)) {
        case EmployeeStatusEnum.APPROVED:
            return { label: "Aprovado", color: "#17C777" };
        case EmployeeStatusEnum.HIRED:
            return { label: "Contratado", color: "#17C777" };
        case EmployeeStatusEnum.REJECTED:
            return { label: "Rejeitado", color: "#F04438" };
        case EmployeeStatusEnum.UNDER_REVIEW:
        default:
            return { label: "Em análise", color: "#F5A623" };
    }
}

export const statusOptions: { value: EmployeeStatusEnum; label: string }[] = [
    { value: EmployeeStatusEnum.UNDER_REVIEW, label: "Em análise" },
    { value: EmployeeStatusEnum.APPROVED, label: "Aprovado" },
    { value: EmployeeStatusEnum.REJECTED, label: "Rejeitado" },
    { value: EmployeeStatusEnum.HIRED, label: "Contratado" },
];

