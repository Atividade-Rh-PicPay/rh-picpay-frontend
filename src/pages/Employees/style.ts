import styled from "styled-components";
import heroCard from "./assets/hero-card-bg.svg";
export const EmployeesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const HeaderRow = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 24px;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
}
`;

export const Banner = styled.div`
    border-radius: 20px;
    padding: 40px;
    background: url(${heroCard}) no-repeat center center / cover;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const BannerTitle = styled.h1`
    margin: 0 0 12px;
    font-size: 36px;
    font-weight: 700;
`;

export const BannerSubtitle = styled.p`
    margin: 0;
    max-width: 400px;
    color: rgba(255, 255, 255, 0.9);
    font-size: 16px;
    line-height: 1.4;
`;

export const StatsCard = styled.div`
    background: ${({theme}) => theme.colors.surface};
    border-radius: 20px;
    padding: 24px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    border-top: 12px solid ${({theme}) => theme.colors.primary};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const StatsTitle = styled.h2`
    font-size: 16px;
    font-weight: 500;
    margin: 0 0 16px;
    color: ${({theme}) => theme.colors.textPrimary};
`;

export const StatsValueRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
`;

export const StatsValue = styled.span`
    font-size: 56px;
    font-weight: 700;
    line-height: 1;
    color: ${({theme}) => theme.colors.textPrimary};
`;

export const StatsSubtext = styled.p`
    margin: 0;
    font-size: 14px;
    color: ${({theme}) => theme.colors.textSecondary};
`;

export const ActionRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    margin-top: 16px;
`;

export const SearchWrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 400px;
`;

export const SearchIcon = styled.div`
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    pointer-events: none;
    `;

    export const SearchInput = styled.input`
    width: 100%;
    padding: 14px 16px 14px 48px;
    border-radius: 30px;
    border: none;
    background: ${({theme}) => theme.colors.surface};
    color: ${({theme}) => theme.colors.textPrimary};
    font-size: 15px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
    outline: none;

    &::placeholder {
        color: ${({theme}) => theme.colors.textSecondary};
    }
    `;

    export const FilterButton = styled.button`
    width: 48px;
    height: 48px;
    border: none;
    border-radius: 50%;
    background: ${({theme}) => theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform 0.2s;

&:hover {
    transform: scale(1.05);
}
`;

export const FilterDropdown = styled.div`
    position: absolute;
    top: 60px;
    right: 180px;
    background: ${({ theme }) => theme.colors.surface};
    border-radius: 16px;
    padding: 16px;
    width: 220px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    z-index: 10;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const FilterTitle = styled.p`
    margin: 0 0 4px;
    font-size: 13px;
    color: ${({theme}) => theme.colors.textSecondary};
    font-weight: 600;
`;

export const FilterOption = styled.label`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    color: ${({theme}) => theme.colors.textPrimary};
    cursor: pointer;

input {
    cursor: pointer;
    width: 16px;
    height: 16px;
}
`;

export const NewEmployeeButton = styled.button`
    padding: 0 24px;
    height: 48px;
    border: none;
    border-radius: 30px;
    background: ${({theme}) => theme.mode === 'dark' ? '#ffffff' : '#000000'};
    color: ${({theme}) => theme.mode === 'dark' ? '#070416' : '#ffffff'};
    font-size: 14px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    transition: opacity 0.2s, transform 0.2s;

    &:hover {
        opacity: 0.85;
        transform: translateY(-1px);
    }

    span {
        font-size: 18px;
        font-weight: 300;
    }
    `;
export const TableContainer = styled.div`
    background: ${({theme}) => theme.colors.surface};
    border-radius: 20px;
    padding: 24px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
    overflow-x: auto;
`;

export const TableGrid = styled.div`
    display: grid;
    grid-template-columns: 2.5fr 1.5fr 1.5fr 1fr 80px;
    width: 100%;
    min-width: 800px;
`;

export const TableHeader = styled.div`
    color: ${({theme}) => theme.colors.primary};
    font-weight: 600;
    font-size: 14px;
    padding-bottom: 16px;
    border-bottom: 1px solid ${({theme}) => theme.colors.border};
`;

export const TableRow = styled.div`
    display: contents;

> div {
    padding: 16px 0;
    border-bottom: 1px solid ${({theme}) => theme.colors.border};
    display: flex;
    align-items: center;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.textPrimary};
}

&:last-child > div {
    border-bottom: none;
}
`;

export const RowInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    min-width: 0;
`;

export const RowText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const RowName = styled.span`
    font-weight: 600;
`;

export const RowEmail = styled.span`
    font-size: 13px;
    color: ${({ theme }) => theme.colors.textSecondary};
`;

export const StatusBadge = styled.div<{ $dotColor: string }>`
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 500;

.dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({ $dotColor }) => $dotColor};
}
`;

export const ActionMenuButton = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    &:hover {
    background: ${({ theme }) => theme.colors.background};
}
`;

export const ActionMenuWrapper = styled.div`
    position: relative;
    display: inline-block;
`

export const ActionsMenu = styled.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    width: 220px;
    background: ${({ theme }) => theme.colors.surface};
    border-radius: 16px;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.16);
    padding: 16px;
    z-index: 20;
    text-align: left;
`;

export const ActionsMenuTitle = styled.p`
    margin: 0 0 12px;
    font-size: 14px;
    color: ${({theme}) => theme.colors.textSecondary};
    padding-bottom: 12px;
    border-bottom: 1px solid ${({theme}) => theme.colors.border};
`

export const ActionsMenuItem = styled.button<{$danger?: boolean }>`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: none;
    background: transparent;
    padding: 10px 4px;
    font-size: 15px;
    cursor: pointer;
    color: ${({theme, $danger}) => ($danger ? theme.colors.status.rejected : theme.colors.textPrimary)};

    &:hover {
        opacity: 0.75;
    }
`;

export const ModalOverlay = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 50;
`;

export const ModalBox = styled.div`
    width: 100%;
    max-width: 380px;
    background: ${({theme}) => theme.colors.surface};
    border-radius: 20px;
    padding: 28px;
    text-align: center;
`;

export const ModalTitle = styled.h2`
    margin: 0 0 8px;
    font-size: 18px;
    font-weight: 700;
    color: ${({theme}) => theme.colors.textPrimary};
`;

export const ModalText = styled.p`
    margin: 0 0 24px;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.textSecondary};

strong {
    color: ${({ theme }) => theme.colors.textPrimary};
}
`;

export const ModalActions = styled.div`
    display: flex;
    gap: 12px;
`;

export const ModalCancelButton = styled.button`
    flex: 1;
    padding: 12px;
    border-radius: 30px;
    border: 1px solid ${({theme}) => theme.colors.border};
    background: transparent;
    color: ${({theme}) => theme.colors.textPrimary};
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
`;

export const ModalDeleteButton = styled.button`
    flex: 1;
    padding: 12px;
    border-radius: 30px;
    border: none;
    background: ${({theme}) => theme.colors.status.rejected};
    color: #ffffff;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
`;