import { useState } from "react";
import {
    Overlay,
    Box,
    Title,
    FormRow,
    Label,
    Input,
    DepartmentSection,
    DepartmentTitle,
    SaveButton,
} from "../employeeModalStyles";

const DEPARTMENTS = ["Mentoring", "Mathematics", "Add Maths", "Computer Science", "History"];

export interface EmployeeFormData {
    id?: number;
    name: string;
    email: string;
    role: string;
    department: string;
}

interface EmployeeFormModalProps {
    mode: "create" | "edit";
    initialData?: EmployeeFormData;
    onClose: () => void;
    onSave: (data: EmployeeFormData) => void;
}

export default function EmployeeFormModal({ mode, initialData, onClose, onSave }: EmployeeFormModalProps) {
    const [name, setName] = useState(initialData?.name ?? "");
    const [email, setEmail] = useState(initialData?.email ?? "");
    const [role, setRole] = useState(initialData?.role ?? "");
    const [department, setDepartment] = useState(initialData?.department ?? "");

    function handleSave() {

    onSave({ id: initialData?.id, name, email, role, department });
}

    return (
        <Overlay onClick={onClose}>
        <Box onClick={(e) => e.stopPropagation()}>
            <Title>{mode === "create" ? "Adicionar funcionário" : "Editar funcionário"}</Title>

            <FormRow>
            <Label htmlFor="employee-name">Nome</Label>
            <Input
                id="employee-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Fulano da Silva"
            />
            </FormRow>

            <FormRow>
            <Label htmlFor="employee-email">Email</Label>
            <Input
                id="employee-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="fulano@picpay.com"
            />
            </FormRow>

            <FormRow>
            <Label htmlFor="employee-role">Cargo</Label>
            <Input
                id="employee-role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="Analista Júnior"
            />
            </FormRow>

            <DepartmentSection>
            <DepartmentTitle>Departamento</DepartmentTitle>
            <FormRow>
            <Label htmlFor="employee-role">Departamento</Label>
            <Input
                id="employee-department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                placeholder="Analista Júnior"
            />
            </FormRow>
            </DepartmentSection>

            <SaveButton onClick={handleSave}>Salvar</SaveButton>
        </Box>
        </Overlay>
    );
}
