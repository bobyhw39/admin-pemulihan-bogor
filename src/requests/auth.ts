import { endPoint } from "../utils/env";
import services from "./services";

export const login = (data: any) => {
  return services.extPost(`${endPoint.pemulihanEkonomiUrl.v1}login-admin`, data);
};

export const logout = (data: any) => {
  return services.getLogout(`${endPoint.pemulihanEkonomiUrl.v1}logout`, data);
};