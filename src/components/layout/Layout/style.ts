import styled from "styled-components";

export const LayoutContainer = styled.div`
    display: flex;
    min-height: 100vh;
    background: ${({ theme }) => theme.colors.background};
    transition: background 0.2s ease;
`;

export const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

export const Main = styled.main`
    flex: 1;
    padding: 32px;
`;
