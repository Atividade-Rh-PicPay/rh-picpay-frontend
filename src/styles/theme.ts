import type {DefaultTheme} from "styled-components";
 
export const lightTheme: DefaultTheme = {
  mode: "light",
  colors: {
    primary: "#13C76F",
    primaryDark: "#32855D",
    primaryLight: "#05FF86",
    surface: "#FFFFFF",
    background: "#F8F8F8",
    textPrimary: "#070416",
    textSecondary: "#7F7E87",
    border: "#F0F0F0",
    status: {
        review: "#FFCD4D",
        reviewBg: "#FEF3C7",
        approved: "#34C759",
        approvedBg: "#D1FAE5",
        rejected: "#E93D53",
        rejectedBg: "#FCE8EB",
        hired: "#4F46E5",
        hiredBg: "#EDE9FE",
    },
    },
};

export const darkTheme: DefaultTheme = {
    mode: "dark",
    colors: {
        primary: "#13C76F",
        primaryDark: "#32855D",
        primaryLight: "#05FF86",
        surface: "#161C2D",
        background: "#0B101E",
        textPrimary: "#FFFFFF",
        textSecondary: "#85888F",
        border: "#232B3E",
        status: {
            review: "#FFCD4D",
            reviewBg: "rgb(255, 183, 0)",
            approved: "#34C759",
            approvedBg: "rgba(0, 255, 64, 0.47)",
            rejected: "#FF6B7A",
            rejectedBg: "rgba(233, 61, 84, 0.51)",
            hired: "#9B93FF",
            hiredBg: "rgba(97, 85, 245, 0.2)",
        },
},
};
