import Avatar from "../ui/Avatar.tsx";

interface UsuarioLogado {
    nome: string;
    cargo: string;
}

const usuarioMock: UsuarioLogado = { nome: "Gabriel Silva", cargo: "Gerente de RH" };

export default function Header() {
    return (
    <header className="flex justify-end items-center gap-3 px-8 py-4">
        <div className="text-right">
        <p className="font-semibold text-textPrimary text-sm">{usuarioMock.nome}</p>
        <p className="text-textSecondary text-xs">{usuarioMock.cargo}</p>
        </div>
        <Avatar nome={usuarioMock.nome} />
    </header>
);
}