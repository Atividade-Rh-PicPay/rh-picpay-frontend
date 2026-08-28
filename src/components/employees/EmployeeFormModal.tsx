import { FormEvent, useState } from "react";
import axios from "axios";
import { employeeService } from "../../services/employees.service";
import { EmployeeRequestDTO } from "../../types/employee";
import { EmployeeStatusEnum } from "../../types/enums";
import { normalizeStatus, statusOptions } from "../../utils/employee.status";
import {
    ModalOverlay,
    FormModalBox,
    ModalTitle,
    FormGrid,
    FormGroup,
    FormLabel,
    FormInput,
    FormError,
    ModalFormActions,
    ModalCancelButton,
    ModalSubmitButton,
} from "../../pages/Employees/style";

type EmployeeFormModalProps = {
    mode: "create" | "edit";
    employeeId?: number;
    initialData?: Partial<EmployeeRequestDTO>;
    onClose: () => void;
    onSuccess: () => void;
};

const emptyForm: EmployeeRequestDTO = {
    name: "",
    email: "",
    password: "",
    phone: "",
    role: "",
    department: "",
    salary: 0,
    city: "",
    status: EmployeeStatusEnum.UNDER_REVIEW,
};

function extractErrorMessage(err: unknown, fallback: string): string {
    if (axios.isAxiosError(err)) {
        const raw = err.response?.data?.message;
        return typeof raw === "string" ? raw : raw?.message ?? fallback;
    }
    return fallback;
}

export default function EmployeeFormModal({
    mode,
    employeeId,
    initialData,
    onClose,
    onSuccess,
}: EmployeeFormModalProps) {
    const [form, setForm] = useState<EmployeeRequestDTO>({
        ...emptyForm,
        ...initialData,
        status: normalizeStatus(initialData?.status) ?? emptyForm.status,
    });
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    function handleChange(field: keyof EmployeeRequestDTO, value: string) {
        setForm((prev) => ({
            ...prev,
            [field]: field === "salary" || field === "status" ? Number(value) : value,
        }));
    }

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setSubmitting(true);
        setError(null);

        if (mode === "create") {
            employeeService
                .register(form)
                .then(onSuccess)
                .catch((err) => setError(extractErrorMessage(err, "Erro ao cadastrar funcionário")))
                .finally(() => setSubmitting(false));
            return;
        }

        const { password: _password, ...rest } = form;
        employeeService
            .partialUpdate(employeeId as number, rest)
            .then(onSuccess)
            .catch((err) => setError(extractErrorMessage(err, "Erro ao atualizar funcionário")))
            .finally(() => setSubmitting(false));
    }

    return (
        <ModalOverlay onClick={onClose}>
            <FormModalBox onClick={(e) => e.stopPropagation()}>
                <ModalTitle>
                    {mode === "create" ? "Novo Funcionário" : "Editar Funcionário"}
                </ModalTitle>

                <form onSubmit={handleSubmit}>
                    <FormGrid>
                        <FormGroup $fullWidth>
                            <FormLabel htmlFor="name">Nome</FormLabel>
                            <FormInput
                                id="name"
                                required
                                value={form.name}
                                onChange={(e) => handleChange("name", e.target.value)}
                            />
                        </FormGroup>

                        <FormGroup $fullWidth>
                            <FormLabel htmlFor="email">E-mail</FormLabel>
                            <FormInput
                                id="email"
                                type="email"
                                required
                                value={form.email}
                                onChange={(e) => handleChange("email", e.target.value)}
                            />
                        </FormGroup>

                        {mode === "create" && (
                            <FormGroup $fullWidth>
                                <FormLabel htmlFor="password">Senha</FormLabel>
                                <FormInput
                                    id="password"
                                    type="password"
                                    required
                                    value={form.password}
                                    onChange={(e) => handleChange("password", e.target.value)}
                                />
                            </FormGroup>
                        )}

                        {mode === "edit" && (
                            <FormGroup $fullWidth>
                                <FormLabel htmlFor="status">Status</FormLabel>
                                <FormInput
                                    as="select"
                                    id="status"
                                    required
                                    value={form.status}
                                    onChange={(e) => handleChange("status", e.target.value)}
                                >
                                  {statusOptions.map((option: { label: string; value: EmployeeStatusEnum }) => (
                                    <option key={option.value} value={option.value}>
                                      {option.label}
                                    </option>
                                  ))}
                                </FormInput>
                            </FormGroup>
                        )}

                        <FormGroup>
                            <FormLabel htmlFor="phone">Telefone</FormLabel>
                            <FormInput
                                id="phone"
                                required
                                value={form.phone}
                                onChange={(e) => handleChange("phone", e.target.value)}
                            />
                        </FormGroup>

                        <FormGroup>
                            <FormLabel htmlFor="role">Cargo</FormLabel>
                            <FormInput
                                id="role"
                                required
                                value={form.role}
                                onChange={(e) => handleChange("role", e.target.value)}
                            />
                        </FormGroup>

                        <FormGroup>
                            <FormLabel htmlFor="department">Departamento</FormLabel>
                            <FormInput
                                id="department"
                                required
                                value={form.department}
                                onChange={(e) => handleChange("department", e.target.value)}
                            />
                        </FormGroup>

                        <FormGroup>
                            <FormLabel htmlFor="salary">Salário</FormLabel>
                            <FormInput
                                id="salary"
                                type="number"
                                min={0}
                                step="0.01"
                                required
                                value={form.salary}
                                onChange={(e) => handleChange("salary", e.target.value)}
                            />
                        </FormGroup>

                        <FormGroup $fullWidth>
                            <FormLabel htmlFor="city">Cidade</FormLabel>
                            <FormInput
                                id="city"
                                required
                                value={form.city}
                                onChange={(e) => handleChange("city", e.target.value)}
                            />
                        </FormGroup>
                    </FormGrid>

                    {error && <FormError>{error}</FormError>}

                    <ModalFormActions>
                        <ModalCancelButton type="button" onClick={onClose} disabled={submitting}>
                            Cancelar
                        </ModalCancelButton>
                        <ModalSubmitButton type="submit" disabled={submitting}>
                            {submitting
                                ? "Salvando..."
                                : mode === "create"
                                ? "Cadastrar"
                                : "Salvar alterações"}
                        </ModalSubmitButton>
                    </ModalFormActions>
                </form>
            </FormModalBox>
        </ModalOverlay>
    );
}
