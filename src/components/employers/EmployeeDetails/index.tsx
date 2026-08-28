import {
    Overlay,
    Box,
    Title,
    FormRow,
    Label,
    Value,
    DepartmentSection,
    DepartmentTitle,
    CloseButton,
    } from "../employeeModalStyles";
    import type {EmployeeFormData} from "../EmployeeFormModal";
    
    interface EmployeeDetailsModalProps {
    employee: EmployeeFormData;
    onClose: () => void;
    }
    
    export default function EmployeeDetailsModal({ employee, onClose }: EmployeeDetailsModalProps) {
        return (
        <Overlay onClick={onClose}>
            <Box onClick={(e) => e.stopPropagation()}>
            <Title>Detalhes do funcionário</Title>
    
            <FormRow>
                <Label>Nome</Label>
                <Value>{employee.name}</Value>
            </FormRow>
    
            <FormRow>
                <Label>Email</Label>
                <Value>{employee.email}</Value>
            </FormRow>
    
            <FormRow>
                <Label>Cargo</Label>
                <Value>{employee.role}</Value>
            </FormRow>
    
            <DepartmentSection>
                <DepartmentTitle>Departamento</DepartmentTitle>
                <FormRow>
                    <label>Departamento</label>
                    <Value>{employee.department}</Value>
                </FormRow>
            </DepartmentSection>
    
            <CloseButton onClick={onClose}>Fechar</CloseButton>
            </Box>
        </Overlay>
        );
    }