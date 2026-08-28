import { api } from "./api";
import { ProfileOutputDTO, UpdateProfileRequestDTO } from "./../types/profile";

export const profileService = {
  getMyProfile: () =>
    api.get<ProfileOutputDTO>("/api/v1/profile").then((r) => r.data),

  updateMyProfile: (data: UpdateProfileRequestDTO) =>
    api
      .patch<ProfileOutputDTO>("/api/v1/profile", data)
      .then((r) => r.data),
};
