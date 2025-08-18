import { useStore } from "../context";
import { UserStatus, type LoginDto } from "../types";

class AuthService {
  public async login(dto: LoginDto) {
    try {
      // const { data } = await graphqlFetcher<
      //   { data: { signIn: LoginResponse } },
      //   { dto: LoginDto }
      // >(LOGIN, { dto });

      // if (data.signIn) {
      //   localStorage.setItem("token", data.signIn.accessToken);
      //   useStore.getState().login(data.signIn.user, null);
      // }
      useStore.getState().login({
        id: 5,
        name: "Yaroslav",
        email: "yaroslavberkuta@gmail.com",
        phoneNumber: "+380976666666",
        status: UserStatus.ACTIVE,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    } catch (error) {
      console.log(error);
    }
  }

  public logout() {
    useStore.getState().logout();
    localStorage.removeItem("token");
    localStorage.removeItem("selectCompany");
  }
}

export const authService = new AuthService();
