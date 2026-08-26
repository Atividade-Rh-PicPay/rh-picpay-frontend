import { NavLink } from "react-router-dom";

interface NavItem {
    to: string;
    label: string;
    icon: string;
}

const navItems: NavItem[] = [
    { to: "/", label: "Indicadores", icon: "▣" },
    { to: "/funcionarios", label: "Funcionários", icon: "👥" },
];

export default function Sidebar() {
    return (
        <aside className="w-64 bg-surface border-r border-gray-100 flex flex-col p-6">
        <div className="flex items-center gap-2 mb-8">
        {/* meter a logo */}
        </div>

        <p className="text-xs font-semibold text-textSecondary tracking-wide mb-3">PÁGINAS</p>
        <nav className="flex flex-col gap-1 mb-8">
        {navItems.map((item) => (
            <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium ${
                isActive ? "text-primary bg-primary/5" : "text-textSecondary"
                }`
            }
            >
            <span>{item.icon}</span>
            {item.label}
        </NavLink>
        ))}
        </nav>

        <p className="text-xs font-semibold text-textSecondary tracking-wide mb-3">PREFERÊNCIA</p>
        <div className="flex items-center justify-between text-sm text-textSecondary mb-3">
        <span>Modo Claro</span>
            <div className="w-12 h-6 rounded-full bg-gray-100 flex items-center px-1">
            <div className="w-4 h-4 rounded-full bg-primary" />
        </div>
        </div>

        <div className="flex items-center justify-between text-sm text-textSecondary mb-8">
        <span>Idioma</span>
        <span>Português (BR)</span>
        </div>

        <div className="mt-auto bg-gradient-to-br from-primary-dark to-primary rounded-2xl p-5 text-white">
        <p className="text-xs text-white/80 mb-1">Quantidade de Funcionários</p>
        <p className="text-3xl font-bold mb-4">142</p>
        <button className="w-full bg-white text-textPrimary rounded-full py-2 text-sm font-medium">
            + Cadastrar funcionários
        </button>
        </div>
    </aside>
    );
}