import { useState, useRef, useEffect } from "react";
import { useTheme } from "styled-components";
import Avatar from "../../components/ui/Avatar";
import EmployeeFormModal from "../../components/employers/EmployeeFormModal";
import type { EmployeeFormData } from "../../components/employers/EmployeeFormModal";
import EmployeeDetailsModal from "../../components/employers/EmployeeDetails";
import {
    EmployeesContainer,
    HeaderRow,
    Banner,
    BannerTitle,
    BannerSubtitle,
    StatsCard,
    StatsTitle,
    StatsValueRow,
    StatsValue,
    StatsSubtext,
    ActionRow,
    SearchWrapper,
    SearchInput,
    SearchIcon,
    FilterButton,
    NewEmployeeButton,
    TableContainer,
    TableGrid,
    TableHeader,
    TableRow,
    RowInfo,
    RowText,
    RowName,
    RowEmail,
    StatusBadge,
    ActionMenuButton,
    FilterDropdown,
    FilterTitle,
    FilterOption,
    ActionMenuWrapper,
    ActionsMenu,
    ActionsMenuTitle,
    ActionsMenuItem,
    ModalOverlay,
    ModalBox,
    ModalTitle,
    ModalText,
    ModalActions,
    ModalCancelButton,
    ModalDeleteButton,
    ModalIcon,
    } from "./style";

    interface Employee {
    id: number;
    name: string;
    email: string;
    role: string;
    department: string;
    status: string;
    statusColor: string;
    }

    export default function Employees() {
    const theme = useTheme();
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [openMenuId, setOpenMenuId] = useState<number | null>(null);
    const [employeeToDelete, setEmployeeToDelete] = useState<Employee | null>(null);
    const [isAddOpen, setIsAddOpen] = useState(false);
    const [employeeToEdit, setEmployeeToEdit] = useState<Employee | null>(null);
    const [employeeToView, setEmployeeToView] = useState<Employee | null>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    const mockEmployees: Employee[] = Array(5)
        .fill({
        name: "Maria Nogueira Silva",
        email: "maria.nogueira@gmail.com",
        role: "Analista Suporte",
        department: "Tecnologia",
        status: "Em análise",
        statusColor: theme.colors.status.review,
        })
        .map((emp, index) => ({ ...emp, id: index + 1 }));

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setOpenMenuId(null);
        }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    function handleViewDetails(employee: Employee) {
        setEmployeeToView(employee);
        setOpenMenuId(null);
    }

    function handleEdit(employee: Employee) {
        setEmployeeToEdit(employee);
        setOpenMenuId(null);
    }

    function handleAskDelete(employee: Employee) {
        setEmployeeToDelete(employee);
        setOpenMenuId(null);
    }

    function handleConfirmDelete() {
        console.log("excluir", employeeToDelete?.id);
        setEmployeeToDelete(null);
    }

    function handleCreateEmployee(data: EmployeeFormData) {
        console.log("criar funcionário", data);
        setIsAddOpen(false);
    }

    function handleSaveEdit(data: EmployeeFormData) {
        console.log("salvar edição", data);
        setEmployeeToEdit(null);
    }

    return (
        <EmployeesContainer>
        <HeaderRow>
            <Banner>
            <BannerTitle>Funcionários</BannerTitle>
            <BannerSubtitle>
                Gerencie os candidatos e funcionários cadastrados no sistema.
            </BannerSubtitle>
            </Banner>

            <StatsCard>
            <StatsTitle>Quantidade de Funcionários</StatsTitle>
            <StatsValueRow>
                <StatsValue>142</StatsValue>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={theme.colors.primary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
            </StatsValueRow>
            <StatsSubtext>23 cadastrados hoje</StatsSubtext>
            </StatsCard>
        </HeaderRow>

        <ActionRow>
            <SearchWrapper>
            <SearchIcon>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A0A0A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
            </SearchIcon>
            <SearchInput
                placeholder="Buscar por nome ou cargo"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            </SearchWrapper>

            <div style={{ display: "flex", gap: "16px", position: "relative" }}>
            <FilterButton onClick={() => setIsFilterOpen(!isFilterOpen)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="6" x2="20" y2="6"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
                <line x1="10" y1="18" x2="14" y2="18"></line>
                </svg>
            </FilterButton>

            {isFilterOpen && (
                <FilterDropdown>
                <FilterTitle>Filtrar por status</FilterTitle>
                <FilterOption><input type="checkbox" /> Em análise</FilterOption>
                <FilterOption><input type="checkbox" /> Aprovado</FilterOption>
                <FilterOption><input type="checkbox" /> Rejeitado</FilterOption>
                <FilterOption><input type="checkbox" /> Contratado</FilterOption>
                </FilterDropdown>
            )}

            <NewEmployeeButton onClick={() => setIsAddOpen(true)}>
                <span>+</span> Novo Funcionário
            </NewEmployeeButton>
            </div>
        </ActionRow>

        <TableContainer>
            <TableGrid>
            <TableHeader>Nome</TableHeader>
            <TableHeader>Cargo</TableHeader>
            <TableHeader>Departamento</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader style={{ textAlign: "center" }}>Ação</TableHeader>

            {mockEmployees.map((emp) => (
                <TableRow key={emp.id}>
                <RowInfo>
                    <Avatar name={emp.name} />
                    <RowText>
                    <RowName>{emp.name}</RowName>
                    <RowEmail>{emp.email}</RowEmail>
                    </RowText>
                </RowInfo>

                <div style={{ fontWeight: 500 }}>{emp.role}</div>
                <div style={{ color: theme.colors.textSecondary }}>{emp.department}</div>

                <StatusBadge $dotColor={emp.statusColor}>
                    <span className="dot" /> {emp.status}
                </StatusBadge>

                <div style={{ textAlign: "center" }}>
                    <ActionMenuWrapper ref={openMenuId === emp.id ? menuRef : undefined}>
                    <ActionMenuButton onClick={() => setOpenMenuId(openMenuId === emp.id ? null : emp.id)}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A0A0A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="12" cy="5" r="1"></circle>
                        <circle cx="12" cy="19" r="1"></circle>
                        </svg>
                    </ActionMenuButton>

                    {openMenuId === emp.id && (
                        <ActionsMenu>
                        <ActionsMenuTitle>Ações</ActionsMenuTitle>

                        <ActionsMenuItem onClick={() => handleViewDetails(emp)}>
                            Ver detalhes
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6" />
                            </svg>
                        </ActionsMenuItem>

                        <ActionsMenuItem onClick={() => handleEdit(emp)}>
                            Editar
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 20h9" />
                            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                            </svg>
                        </ActionsMenuItem>

                        <ActionsMenuItem $danger onClick={() => handleAskDelete(emp)}>
                            Excluir
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                            <path d="M10 11v6" />
                            <path d="M14 11v6" />
                            <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                            </svg>
                        </ActionsMenuItem>
                        </ActionsMenu>
                    )}
                    </ActionMenuWrapper>
                </div>
                </TableRow>
            ))}
            </TableGrid>
        </TableContainer>

        {employeeToDelete && (
            <ModalOverlay onClick={() => setEmployeeToDelete(null)}>
            <ModalBox onClick={(e) => e.stopPropagation()}>
                <ModalIcon>
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="58" viewBox="0 0 64 58" fill="none">
                    <path d="M61.0709 50.323C61.0707 49.5095 60.8555 48.7106 60.4488 48.0061L60.446 48.0003L36.0367 5.28459L36.0353 5.2803C35.6308 4.5666 35.0436 3.97279 34.3348 3.55977C33.626 3.14674 32.8197 2.92905 31.9993 2.92905C31.1792 2.92915 30.3738 3.14689 29.6652 3.55977C28.9564 3.97279 28.3692 4.56657 27.9647 5.2803L27.9618 5.28459L3.55406 48.0003L3.5512 48.0061C3.14244 48.714 2.92734 49.517 2.92907 50.3344C2.93088 51.1521 3.14923 51.9551 3.56121 52.6614C3.9731 53.3674 4.56401 53.9521 5.27459 54.3562C5.98543 54.7602 6.79108 54.9699 7.60868 54.9626H56.4371C57.2508 54.9617 58.0511 54.7464 58.7555 54.339C59.4595 53.9317 60.0439 53.346 60.4502 52.6413C60.8567 51.9365 61.0712 51.1367 61.0709 50.323ZM64 50.323C64.0002 51.6504 63.6505 52.9545 62.9874 54.1044C62.3242 55.2544 61.3706 56.2101 60.2214 56.8747C59.0722 57.5394 57.7675 57.8902 56.44 57.8916H7.62155V57.8902C6.29212 57.8998 4.98317 57.5604 3.82723 56.9033C2.66758 56.2442 1.70335 55.2895 1.03119 54.1373C0.359041 52.9851 0.00300602 51.6755 1.85418e-05 50.3416C-0.00293537 49.0077 0.347103 47.6967 1.01403 46.5415L25.4189 3.8315C26.0788 2.6689 27.0356 1.70138 28.1907 1.02831C29.3469 0.354728 30.6612 9.8766e-05 31.9993 0C33.3377 0 34.6529 0.354546 35.8093 1.02831C36.9643 1.70129 37.9198 2.66912 38.5796 3.8315L62.986 46.5415L63.2205 46.9792C63.7321 48.0171 63.9997 49.1615 64 50.323Z" fill="#E93D53"/>
                    <path d="M28.9792 32.018V19.8137C28.9792 18.1286 30.3453 16.7626 32.0303 16.7626C33.7154 16.7626 35.0814 18.1286 35.0814 19.8137V32.018C35.0814 33.7031 33.7154 35.0691 32.0303 35.0691C30.3453 35.0691 28.9792 33.7031 28.9792 32.018Z" fill="#E93D53"/>
                    <path d="M32.0601 41.1711C33.7452 41.1711 35.1112 42.5372 35.1112 44.2222C35.1112 45.9073 33.7452 47.2733 32.0601 47.2733H32.0303C30.3453 47.2733 28.9792 45.9073 28.9792 44.2222C28.9792 42.5372 30.3453 41.1711 32.0303 41.1711H32.0601Z" fill="#E93D53"/>
                </svg>
                </ModalIcon>
                <ModalTitle>Excluir funcionário?</ModalTitle>
                <ModalText>
                Você está prestes a excluir <strong>{employeeToDelete.name}</strong>. Essa ação não pode ser desfeita.
                </ModalText>
                <ModalActions>
                <ModalCancelButton onClick={() => setEmployeeToDelete(null)}>
                    Cancelar
                </ModalCancelButton>
                <ModalDeleteButton onClick={handleConfirmDelete}>
                    Excluir
                </ModalDeleteButton>
                </ModalActions>
            </ModalBox>
            </ModalOverlay>
        )}

        {isAddOpen && (
            <EmployeeFormModal
            mode="create"
            onClose={() => setIsAddOpen(false)}
            onSave={handleCreateEmployee}
            />
        )}

        {employeeToEdit && (
            <EmployeeFormModal
            mode="edit"
            initialData={employeeToEdit}
            onClose={() => setEmployeeToEdit(null)}
            onSave={handleSaveEdit}
            />
        )}

        {employeeToView && (
            <EmployeeDetailsModal
            employee={employeeToView}
            onClose={() => setEmployeeToView(null)}
            />
        )}
        </EmployeesContainer>
    );
}