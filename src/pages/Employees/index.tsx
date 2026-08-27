import {useState} from "react";
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
    FilterOption
} from "./style";

export default function Employees() {
    const theme = useTheme();
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [search, setSearch] = useState("");

    const mockEmployees = Array(5).fill({
        name: "Maria Nogueira Silva",
        email: "maria.nogueira@gmail.com",
        role: "Analista Suporte",
        department: "Tecnologia",
        status: "Em análise",
        statusColor: theme.colors.status.review
    }).map((emp, index) => ({ ...emp, id: index + 1 }));

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
                    <ActionMenuButton>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A0A0A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="12" cy="5" r="1"></circle>
                        <circle cx="12" cy="19" r="1"></circle>
                    </svg>
                    </ActionMenuButton>
                </div>
                
                </TableRow>
            ))}
        </TableGrid>
        </TableContainer>
    </EmployeesContainer>
    );
}