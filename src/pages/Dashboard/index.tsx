import {useEffect, useMemo, useState } from "react";
import {useTheme} from "styled-components";
import Avatar from "../../components/ui/Avatar";
import {EmployeeStatusEnum} from "../../types/enums";
import type {EmployeeCardOutputDTO} from "../../types/employee";
import {
  DashboardContainer,
  TopRow,
  Banner,
  BannerTitle,
  BannerSubtitle,
  BannerActions,
  PrimaryButton,
  SecondaryButton,
  StatusGrid,
  StatusCard,
  StatusLabel,
  StatusValue,
  ListsRow,
  ListCard,
  ListHeader,
  ListTitle,
  SeeMoreLink,
  EmptyMessage,
  Row,
  RowInfo,
  RowText,
  RowName,
  RowEmail,
  RowActions,
  ApproveButton,
  RejectButton,
  Badge,
} from "./style";

type StatusName = keyof typeof EmployeeStatusEnum;

function Dashboard() {
  const theme = useTheme();
  const [employees, setEmployees] = useState<EmployeeCardOutputDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const STATUS_CONFIG: Record<
    StatusName,
    { label: string; color: string; bg: string }
  > = {
    UNDER_REVIEW: {
      label: "Em análise",
      color: theme.colors.status.review,
      bg: theme.colors.status.reviewBg,
    },
    APPROVED: {
      label: "Aprovados",
      color: theme.colors.status.approved,
      bg: theme.colors.status.approvedBg,
    },
    REJECTED: {
      label: "Reprovados",
      color: theme.colors.status.rejected,
      bg: theme.colors.status.rejectedBg,
    },
    HIRED: {
      label: "Confirmados",
      color: theme.colors.status.hired,
      bg: theme.colors.status.hiredBg,
    },
  };

  async function loadEmployees() {
    setLoading(true);
    setError(null);
    try {
      setEmployees([]);
    } catch (e) {
      setError(e as Error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadEmployees();
  }, []);

  const counts = useMemo(() => {
    const base: Record<StatusName, number> = {
      UNDER_REVIEW: 0,
      APPROVED: 0,
      REJECTED: 0,
      HIRED: 0,
    };
    employees.forEach((e) => {
      const key = e.status as StatusName;
      if (base[key] !== undefined) base[key]++;
    });
    return base;
  }, [employees]);

  const underReview = useMemo(
    () => employees.filter((e) => e.status === "UNDER_REVIEW").slice(0, 6),
    [employees]
  );

  const recentlyAdded = useMemo(() => employees.slice(0, 6), [employees]);

  async function handleChangeStatus(id: number, newStatus: StatusName) {
    console.log("change status", id, newStatus);
    await loadEmployees();
  }

  if (loading) return <DashboardContainer>Carregando...</DashboardContainer>;

  if (error) {
    return (
      <DashboardContainer>
        <EmptyMessage>Não foi possível carregar os dados do dashboard.</EmptyMessage>
        <PrimaryButton onClick={loadEmployees}>Tentar novamente</PrimaryButton>
      </DashboardContainer>
    );
  }

  return (
    <DashboardContainer>
      <TopRow>
        <Banner>
          <BannerTitle>Olá, Gabriel!</BannerTitle>
          <BannerSubtitle>
            Você tem {counts.UNDER_REVIEW} candidatos aguardando análise hoje.
          </BannerSubtitle>
          <BannerActions>
            <PrimaryButton>Cadastrar funcionário</PrimaryButton>
            <SecondaryButton>Ver funcionários</SecondaryButton>
          </BannerActions>
        </Banner>

        <StatusGrid>
          {(Object.keys(STATUS_CONFIG) as StatusName[]).map((key) => (
            <StatusCard key={key}>
              <StatusLabel>{STATUS_CONFIG[key].label}</StatusLabel>
              <StatusValue $color={STATUS_CONFIG[key].color}>
                {String(counts[key]).padStart(2, "0")}
                <span>●</span>
              </StatusValue>
            </StatusCard>
          ))}
        </StatusGrid>
      </TopRow>

      <ListsRow>
        <ListCard>
          <ListHeader>
            <ListTitle>Aguardando análise</ListTitle>
            <SeeMoreLink>Ver mais</SeeMoreLink>
          </ListHeader>
          {underReview.length === 0 ? (
            <EmptyMessage>Nenhum candidato aguardando análise.</EmptyMessage>
          ) : (
            underReview.map((e) => (
              <Row key={e.id}>
                <RowInfo>
                  <Avatar name={e.name} />
                  <RowText>
                    <RowName>{e.name}</RowName>
                    <RowEmail>{e.email}</RowEmail>
                  </RowText>
                </RowInfo>
                <RowActions>
                  <ApproveButton
                    onClick={() => handleChangeStatus(e.id, "APPROVED")}
                  >
                    Aprovar
                  </ApproveButton>
                  <RejectButton
                    onClick={() => handleChangeStatus(e.id, "REJECTED")}
                  >
                    Reprovar
                  </RejectButton>
                </RowActions>
              </Row>
            ))
          )}
        </ListCard>

        <ListCard>
          <ListHeader>
            <ListTitle>Últimos cadastros</ListTitle>
            <SeeMoreLink>Ver mais</SeeMoreLink>
          </ListHeader>
          {recentlyAdded.length === 0 ? (
            <EmptyMessage>Nenhum funcionário cadastrado ainda.</EmptyMessage>
          ) : (
            recentlyAdded.map((e) => {
              const config = STATUS_CONFIG[e.status as StatusName];
              return (
                <Row key={e.id}>
                  <RowInfo>
                    <Avatar name={e.name} />
                    <RowText>
                      <RowName>{e.name}</RowName>
                      <RowEmail>{e.email}</RowEmail>
                    </RowText>
                  </RowInfo>
                  {config && (
                    <Badge $color={config.color} $bg={config.bg}>
                      {config.label}
                    </Badge>
                  )}
                </Row>
              );
            })
          )}
        </ListCard>
      </ListsRow>
    </DashboardContainer>
  );
}

export default Dashboard;