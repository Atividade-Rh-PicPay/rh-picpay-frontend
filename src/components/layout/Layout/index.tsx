import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import Header from "../Header";
import { LayoutContainer, Content, Main } from "./style";

export default function Layout() {
  const [employeeCount, setEmployeeCount] = useState(0);

  return (
    <LayoutContainer>
      <Sidebar employeeCount={employeeCount} />

      <Content>
        <Header />

        <Main>
          <Outlet context={{ setEmployeeCount }} />
        </Main>
      </Content>
    </LayoutContainer>
  );
}
