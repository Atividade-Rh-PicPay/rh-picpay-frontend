import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        mode: "light" | "dark";
        colors: {
            primary: string;
            primaryDark: string;
            primaryLight: string;
            surface: string;
            background: string;
            textPrimary: string;
            textSecondary: string;
            border: string;
            status: {
                review: string;
                reviewBg: string;
                approved: string;
                approvedBg: string;
                rejected: string;
                rejectedBg: string;
                hired: string;
                hiredBg: string;
            };
        };
    }
}