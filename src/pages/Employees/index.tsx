import {useState, useRef, useEffect} from "react";
import {useTheme} from "styled-components";
import Avatar from "../../components/ui/Avatar";
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
    } from "./style";
import { employeeApi } from "../../api/employeeApi";

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

    function handleViewDetails(id: number) {
        console.log("ver detalhes", id);
        setOpenMenuId(null);
    }

    function handleEdit(id: number) {
        console.log("editar", id);
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

            <NewEmployeeButton>
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

                        <ActionsMenuItem onClick={() => handleViewDetails(emp.id)}>
                            Ver detalhes
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6" />
                            </svg>
                        </ActionsMenuItem>

                        <ActionsMenuItem onClick={() => handleEdit(emp.id)}>
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
        </EmployeesContainer>
    );
}