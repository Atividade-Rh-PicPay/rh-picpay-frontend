import { useEffect, useState } from "react";
import axios from "axios";
import { employeeService } from "../../services/employees.service";
import { EmployeeDetailsOutputDTO } from "../../types/employee";
import {
    ModalOverlay,
    FormModalBox,
    ModalTitle,
    DetailsGrid,
    DetailBlock,
    DetailLabel,
    DetailValue,
    ModalFormActions,
    ModalCancelButton,
    FormError,
} from "../../pages/Employees/style";

type EmployeeDetailsModalProps = {
    employeeId: number;
    onClose: () => void;
};

export default function EmployeeDetailsModal({ employeeId, onClose }: EmployeeDetailsModalProps) {
    const [employee, setEmployee] = useState<EmployeeDetailsOutputDTO | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        employeeService
            .findOne(employeeId)
            .then(setEmployee)
            .catch((err) => {
                if (axios.isAxiosError(err)) {
                    const raw = err.response?.data?.message;
                    setError(typeof raw === "string" ? raw : raw?.message ?? "Erro ao buscar funcionário");
                } else {
                    setError("Erro inesperado ao buscar funcionário");
                }
            })
            .finally(() => setLoading(false));
    }, [employeeId]);

    return (
        <ModalOverlay onClick={onClose}>
            <FormModalBox onClick={(e) => e.stopPropagation()}>
                <ModalTitle>Detalhes do Funcionário</ModalTitle>

                {loading && <DetailValue>Carregando...</DetailValue>}
                {error && <FormError>{error}</FormError>}

                {employee && !loading && (
                    <DetailsGrid>
                        <DetailBlock $fullWidth>
                            <DetailLabel>Nome</DetailLabel>
                            <DetailValue>{employee.name}</DetailValue>
                        </DetailBlock>

                        <DetailBlock $fullWidth>
                            <DetailLabel>E-mail</DetailLabel>
                            <DetailValue>{employee.email}</DetailValue>
                        </DetailBlock>

                        <DetailBlock>
                            <DetailLabel>Telefone</DetailLabel>
                            <DetailValue>{employee.phone}</DetailValue>
                        </DetailBlock>

                        <DetailBlock>
                            <DetailLabel>Status</DetailLabel>
                            <DetailValue>{employee.status}</DetailValue>
                        </DetailBlock>

                        <DetailBlock>
                            <DetailLabel>Cargo</DetailLabel>
                            <DetailValue>{employee.role}</DetailValue>
                        </DetailBlock>

                        <DetailBlock>
                            <DetailLabel>Departamento</DetailLabel>
                            <DetailValue>{employee.department}</DetailValue>
                        </DetailBlock>

                        <DetailBlock>
                            <DetailLabel>Salário</DetailLabel>
                            <DetailValue>
                                {employee.salary.toLocaleString("pt-BR", {
                                    style: "currency",
                                    currency: "BRL",
                                })}
                            </DetailValue>
                        </DetailBlock>

                        <DetailBlock>
                            <DetailLabel>Cidade</DetailLabel>
                            <DetailValue>{employee.city}</DetailValue>
                        </DetailBlock>
                    </DetailsGrid>
                )}

                <ModalFormActions>
                    <ModalCancelButton
                        type="button"
                        onClick={onClose}
                        style={{ flex: "none", marginLeft: "auto" }}
                    >
                        Fechar
                    </ModalCancelButton>
                </ModalFormActions>
            </FormModalBox>
        </ModalOverlay>
    );
}
