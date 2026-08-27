import styled from "styled-components";
import bgBoxSidebar from "../Sidebar/assets/bg-box-sidebar.svg";
import {NavLink} from "react-router-dom";

export const Aside = styled.aside`
    width: 260px;
    background: ${({ theme }) => theme.colors.surface};
    border-right: 1px solid ${({ theme }) => theme.colors.border};
    display: flex;
    flex-direction: column;
    padding: 24px;
    transition: background 0.2s ease, border-color 0.2s ease;
`;

export const LogoRow = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 32px;
    min-height: 32px;
`;

export const SectionLabel = styled.p`
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin: 0 0 12px;
`;

export const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-bottom: 32px;
`;

export const NavItemLink = styled(NavLink)`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 12px;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    color: ${({theme}) => theme.colors.textSecondary};

    &.active {
        color: ${({theme}) => theme.colors.primary};
        background: ${({theme}) => theme.colors.primary}14;
}
`;

export const PreferenceRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    color: ${({theme}) => theme.colors.textSecondary};
    margin-bottom: 12px;
`;

export const ToggleTrack = styled.button<{ $isDark: boolean }>`
    width: 48px;
    height: 24px;
    border-radius: 30px;
    border: none;
    background: ${({theme}) => theme.colors.border};
    display: flex;
    align-items: center;
    padding: 3px;
    cursor: pointer;
    justify-content: ${({$isDark}) => ($isDark ? "flex-end" : "flex-start")};
`;

export const ToggleThumb = styled.div`
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: ${({theme}) => theme.colors.primary};
`;

export const BottomCard = styled.div`
    margin-top: auto;
    height: 200px;
    border-radius: 20px;
    padding: 20px;
    background: url(${bgBoxSidebar});
    color: #ffffff;
`;

export const BottomCardLabel = styled.p`
    margin: 0 0 4px;
    text-align: center;
    font-size: 12px;
    font-weight: 500;
    color: #ffffff;
`;

export const BottomCardValue = styled.p`
    margin: 0 0 16px;
    text-align: center;
    font-size: 48px;
    font-weight: 700;
`;

export const BottomCardButton = styled.button`
    width: 100%;
    padding: 15px;
    border: none;
    border-radius: 30px;
    background: #ffffff;
    color: #070416;
    font-size: 10px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;

    span{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: ${({ theme }) => theme.colors.primary};
        color: #ffffff;
        font-size: 16px;
        font-weight: 700;
        line-height: 1;
    }
`;
