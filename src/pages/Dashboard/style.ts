import styled from "styled-components";
import bgHeader from "./assets/bg-header.svg";

export const DashboardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const TopRow = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 16px;

@media (max-width: 1024px) {
    grid-template-columns: 1fr;
}
`;

export const Banner = styled.div`
    border-radius: 20px;
    padding: 46px;
    background: url(${bgHeader}) no-repeat center center / cover;
);
    height: 40vh;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const BannerTitle = styled.h1`
    margin: 0 0 8px;
    font-size: 54px;
    font-weight: 700;
`;

export const BannerSubtitle = styled.p`
    margin: 0 0 24px;
    max-width: 420px;
    color: rgba(255, 255, 255, 0.9);
    font-size: 24px;
    font-weight: 400;
`;

export const BannerActions = styled.div`
    display: flex;
    gap: 12px;
`;

export const PrimaryButton = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 30px;
    background: #ffffff;
    color: #070416;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
`;

export const SecondaryButton = styled.button`
    padding: 10px 20px;
    border: 1px solid rgba(255, 255, 255, 0.7);
    border-radius: 30px;
    background: transparent;
    color: #ffffff;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
`;

export const StatusGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
`;

export const StatusCard = styled.div`
    background: ${({theme}) => theme.colors.surface};
    border-radius: 16px;
    padding: 18px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
    transition: background 0.2s ease;
`;

export const StatusLabel = styled.p`
    margin: 0 0 8px;
    color: ${({theme}) => theme.colors.textSecondary};
    font-size: 14px;
    font-weight: 500;
`;

export const StatusValue = styled.div<{ $color: string }>`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 36px;
    font-weight: 700;
    color: ${({theme}) => theme.colors.textPrimary};

span {
    color: ${({$color}) => $color};
    font-size: 16px;
}
`;

export const ListsRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;

@media (max-width: 1024px) {
    grid-template-columns: 1fr;
}
`;

export const ListCard = styled.div`
    background: ${({theme}) => theme.colors.surface};
    border-radius: 16px;
    padding: 20px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
    transition: background 0.2s ease;
`;

export const ListHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
`;

export const ListTitle = styled.h2`
    margin: 0;
    font-size: 16px;
    font-weight: 700;
    color: ${({theme}) => theme.colors.textPrimary};
`;

export const SeeMoreLink = styled.a`
    font-size: 14px;
    color: ${({theme}) => theme.colors.textSecondary};
    text-decoration: none;
    cursor: pointer;
    font-weight: 500;
`;

export const EmptyMessage = styled.p`
    color: ${({theme}) => theme.colors.textSecondary};
    text-align: center;
    padding: 24px 0;
`;

export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 0;
    border-bottom: 1px solid ${({theme}) => theme.colors.border};

&:last-child {
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
min-width: 0;

p {
    margin: 0;
}
`;

export const RowName = styled.p`
    font-weight: 600;
    color: ${({theme}) => theme.colors.textPrimary};
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const RowEmail = styled.p`
    color: ${({theme}) => theme.colors.textSecondary};
    font-size: 13px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const RowActions = styled.div`
    display: flex;
    gap: 8px;
    flex-shrink: 0;
`;

export const ApproveButton = styled.button`
    padding: 6px 14px;
    border: none;
    border-radius: 30px;
    background: ${({theme}) => theme.colors.primary};
    color: #ffffff;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
`;

export const RejectButton = styled.button`
    padding: 6px 14px;
    border-radius: 30px;
    border: 1px solid ${({theme}) => theme.colors.status.rejected};
    background: transparent;
    color: ${({theme}) => theme.colors.status.rejected};
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
`;

export const Badge = styled.span<{$color: string}>`
    padding: 4px 10px;
    border-radius: 30px;
    font-size: 12px;
    font-weight: 600;
    color: ${({$color}) => $color};
`;
