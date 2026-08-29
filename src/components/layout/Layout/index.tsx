import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import Header from "../Header";
import { LayoutContainer, Content, Main, LoadingOverlay } from "./style";
import { useGlobalLoading } from "../../../hooks/useGlobalLoading";
import Spinner from "./../../../components/Spinner";

export default function Layout() {
  const [employeeCount, setEmployeeCount] = useState(0);
  const isLoading = useGlobalLoading();

  return (
    <>
      <LayoutContainer>
        <Sidebar employeeCount={employeeCount} />
        <Content>
          <Header />
          <Main>
            <Outlet context={{ setEmployeeCount }} />
          </Main>
        </Content>
      </LayoutContainer>

      {isLoading && (
        <LoadingOverlay>
          <Spinner size={48} />
        </LoadingOverlay>
      )}
    </>
  );
}
