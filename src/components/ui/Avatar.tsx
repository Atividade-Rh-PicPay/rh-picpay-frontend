import styled from "styled-components";

const AVATAR_COLORS = [
    {bg: "#D1FAE5", text: "#047857"},
    {bg: "#DBEAFE", text: "#1D4ED8"},
    {bg: "#FEF3C7", text: "#B45309"},
    {bg: "#FCE7F3", text: "#BE185D"},
    {bg: "#EDE9FE", text: "#6D28D9"},
    {bg: "#CFFAFE", text: "#0E7490"},
];

function getInitials(name: string): string {
    const parts = name.trim().split(" ").filter(Boolean);
    const first = parts[0]?.[0] ?? "";
    const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
    return (first + last).toUpperCase();
}

function getColor(name: string) {
    const sum = name.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
    return AVATAR_COLORS[sum % AVATAR_COLORS.length];
}

const Circle = styled.div<{$bg: string; $text: string; $size: number}>`
    width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size}px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    font-weight: 600;
    font-size: ${({ $size }) => $size * 0.4}px;
    background: ${({ $bg }) => $bg};
    color: ${({ $text }) => $text};
`;

interface AvatarProps {
    name: string;
    size?: number;
}

export default function Avatar({name, size = 40}: AvatarProps) {
    const {bg, text} = getColor(name);
    return (
        <Circle $bg={bg} $text={text} $size={size}>
        {getInitials(name)}
    </Circle>
);
}