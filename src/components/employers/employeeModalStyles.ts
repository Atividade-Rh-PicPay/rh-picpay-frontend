import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 50;
    `;

export const Box = styled.div`
    width: 100%;
    max-width: 480px;
    max-height: 90vh;
    overflow-y: auto;
    background: ${({ theme }) => theme.colors.surface};
    border-radius: 24px;
    padding: 32px;
    `;

export const Title = styled.h2`
    margin: 0 0 24px;
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.textPrimary};
`;

export const FormRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Label = styled.label`
    font-size: 15px;
    color: ${({ theme }) => theme.colors.textPrimary};
    `;

export const Value = styled.span`
    font-size: 15px;
    color: ${({ theme }) => theme.colors.textSecondary};
    `;

export const Input = styled.input`
    border: none;
    outline: none;
    background: transparent;
    text-align: right;
    font-size: 15px;
    color: ${({ theme }) => theme.colors.textPrimary};
    flex: 1;
    margin-left: 16px;

    &::placeholder {
        color: ${({ theme }) => theme.colors.textSecondary};
    }
    `;

export const DepartmentSection = styled.div`
    margin-top: 24px;
    `;

export const DepartmentTitle = styled.p`
    margin: 0 0 12px;
    font-size: 18px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.textPrimary};
    `;

export const SaveButton = styled.button`
    width: 100%;
    margin-top: 24px;
    padding: 16px;
    border: none;
    border-radius: 30px;
    background: ${({theme}) => theme.colors.textPrimary};
    color: ${({theme}) => theme.colors.surface};
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    `;

export const CloseButton = styled.button`
    width: 100%;
    margin-top: 12px;
    padding: 14px;
    border-radius: 30px;
    border: 1px solid ${({theme}) => theme.colors.border};
    background: transparent;
    color: ${({theme}) => theme.colors.textPrimary};
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
`;