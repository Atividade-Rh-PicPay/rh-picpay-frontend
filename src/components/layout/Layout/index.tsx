import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import Header from "../Header";
import { LayoutContainer, Content, Main } from "./style";

export default function Layout() {
  return (
    <LayoutContainer>
      <Sidebar />
      <Content>
        <Header />
        <Main>
          <Outlet />
        </Main>
      </Content>
    </LayoutContainer>
  );
}