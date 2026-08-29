import { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import Avatar from "../../components/ui/Avatar";
import { EmployeeStatusEnum } from "../../types/enums";
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
import { ProfileOutputDTO } from "../../types/profile";
import { profileService } from "../../services/profile.service";
import { useNavigate, useOutletContext } from "react-router-dom";
import { employeeService } from "../../services/employees.service";
import { CountEmployeeStatusOutputDTO, EmployeeCardOutputDTO } from "../../types/employee";
import { getStatusInfo } from "../../utils/employee.status";

type StatusName = keyof typeof EmployeeStatusEnum;

interface LayoutContext {
  setEmployeeCount: React.Dispatch<React.SetStateAction<number>>;
}

function Dashboard() {
  const navigate = useNavigate();
  const theme = useTheme();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [profile, setProfile] = useState<ProfileOutputDTO | null>(null);
  const [underReview, setUnderReview] = useState<EmployeeCardOutputDTO[]>([]);
  const [recentlyAdded, setRecentlyAdded] = useState<EmployeeCardOutputDTO[]>([]);
  const [employeeStatus, setEmployeeStatus] = useState<CountEmployeeStatusOutputDTO | null>(null);
  const { setEmployeeCount } = useOutletContext<LayoutContext>();

  useEffect(() => {
    profileService
    .getMyProfile()
    .then(setProfile)
    .catch(() => {
      navigate("/login");
    });
  }, []);

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

  async function loadDashboardLists() {
    setLoading(true);
    setError(null);
    try {
      const [reviewResult, recentResult, statusResult, countResult] = await Promise.all([
        employeeService.findMany({ status: 1, take: 6, skip: 0, sortDirection: 1 }),
        employeeService.findMany({ take: 6, skip: 0, sortDirection: 1 }),
        employeeService.status(),
        employeeService.count()
      ]);
      setUnderReview(reviewResult?.employees ?? []);
      setRecentlyAdded(recentResult?.employees ?? []);
      setEmployeeStatus(statusResult);
      setEmployeeCount(countResult.count);
    } catch (e) {
      setError(e as Error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadDashboardLists();
  }, []);

  async function handleChangeStatus(id: number, newStatus: StatusName) {
    try {
      await employeeService.partialUpdate(id, {
        status: EmployeeStatusEnum[newStatus]
      });
      await loadDashboardLists();
    } catch (err) {
      console.error("Erro ao alterar status", err);
      alert("Erro ao alterar o status do funcionário.");
    }
  }

  if (loading) return <DashboardContainer>Carregando...</DashboardContainer>;

  if (error) {
    return (
      <DashboardContainer>
      <EmptyMessage>Não foi possível carregar os dados do dashboard.</EmptyMessage>
      <PrimaryButton onClick={loadDashboardLists}>Tentar novamente</PrimaryButton>
      </DashboardContainer>
    );
  }

  return (
    <DashboardContainer>
    <TopRow>
    <Banner>
    <BannerTitle>Olá, {profile?.name}!</BannerTitle>
    <BannerSubtitle>
    Você tem {employeeStatus?.UNDER_REVIEW} candidatos aguardando análise hoje.
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
      {String(employeeStatus?.[key]).padStart(2, "0")}
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
      const status = getStatusInfo(e.status);
      return (
        <Row key={e.id}>
        <RowInfo>
        <Avatar name={e.name} />
        <RowText>
        <RowName>{e.name}</RowName>
        <RowEmail>{e.email}</RowEmail>
        </RowText>
        </RowInfo>
        <Badge $color={status.color}>
          {status.label}
        </Badge>
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
