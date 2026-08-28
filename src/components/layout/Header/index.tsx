import { useEffect, useState } from "react";
import Avatar from "../../ui/Avatar";
import { profileService } from "../../../services/profile.service";
import { ProfileOutputDTO } from "../../../types/profile";
import { HeaderContainer, UserInfo, UserName, UserRole } from "./style";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<ProfileOutputDTO | null>(null);

  useEffect(() => {
    profileService
      .getMyProfile()
      .then(setProfile)
      .catch(() => {
        navigate("/login")
      });
  }, []);

  return (
    <HeaderContainer>
      <UserInfo>
        <UserName>{profile?.name ?? "..."}</UserName>
        <UserRole>{profile?.role ?? ""}</UserRole>
      </UserInfo>
      <Avatar name={profile?.name ?? ""} />
    </HeaderContainer>
  );
}
