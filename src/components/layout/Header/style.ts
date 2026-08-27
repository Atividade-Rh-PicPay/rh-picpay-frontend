import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 12px;
    padding: 20px 32px;
`;

export const UserInfo = styled.div`
    text-align: right;
`;

export const UserName = styled.p`
    margin: 0;
    font-weight: 600;
    font-size: 14px;
    color: ${({theme}) => theme.colors.textPrimary};
`;

export const UserRole = styled.p`
    margin: 0;
    font-size: 12px;
    color: ${({theme}) => theme.colors.textSecondary};
`;
