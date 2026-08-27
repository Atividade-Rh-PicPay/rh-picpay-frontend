import Avatar from "../../ui/Avatar";
import { HeaderContainer, UserInfo, UserName, UserRole } from "./style";

interface LoggedUser {
  name: string;
  role: string;
}

const userMock: LoggedUser = {name: "Gabriel Silva", role: "Gerente de RH" };

export default function Header() {
  return (
    <HeaderContainer>
      <UserInfo>
        <UserName>{userMock.name}</UserName>
        <UserRole>{userMock.role}</UserRole>
      </UserInfo>
      <Avatar name={userMock.name} />
    </HeaderContainer>
  );
}