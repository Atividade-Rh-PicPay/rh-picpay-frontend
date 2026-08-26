const AVATAR_COLORS = [
    "bg-emerald-100 text-emerald-700",
    "bg-blue-100 text-blue-700",
    "bg-amber-100 text-amber-700",
    "bg-rose-100 text-rose-700",
    "bg-violet-100 text-violet-700",
    "bg-cyan-100 text-cyan-700",
];

    function getInitials(nome: string): string {
        const partes = nome.trim().split(" ").filter(Boolean);
        const primeira = partes[0]?.[0] ?? "";
        const ultima = partes.length > 1 ? partes[partes.length - 1][0] : "";
    return (primeira + ultima).toUpperCase();
}

    function getAvatarColor(nome: string): string {
        const soma = nome.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
        return AVATAR_COLORS[soma % AVATAR_COLORS.length];
}

    interface AvatarProps {
        nome: string;
        size?: string;
    }

    export default function Avatar({ nome, size = "w-10 h-10" }: AvatarProps) {
    return (
        <div
        className={`${size} rounded-full flex items-center justify-center font-semibold text-sm shrink-0 ${getAvatarColor(
            nome
        )}`}
        >
        {getInitials(nome)}
    </div>
    );
    }