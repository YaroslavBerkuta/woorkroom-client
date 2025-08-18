import { getNotification } from "@/shared/providers";
import axios, { AxiosError } from "axios";
import { gql } from "graphql-request";

export const graphqlFetcher = async function <TData, TVariables>(
  query: string,
  variables?: TVariables
): Promise<TData> {
  try {
    const res = await axios.post("http://localhost:3000/graphql", {
      query,
      variables,
    });
    return res.data;
  } catch (error) {
    if ((error as AxiosError).code === "ERR_NETWORK") {
      getNotification().error({
        message: "The server is not responding!",
      });
    }
    throw error;
  }
};

export const REGISTER = gql`
  mutation Register(dto: RegisterDto!) {
    register(dto: $dto)
  }
`;

export const LOGIN = gql`
  mutation Login($dto: AuthDto!) {
    signIn(dto: $dto) {
      accessToken
      refreshToken
      user {
        id
        name
        email
        phoneNumber
        status
        createdAt
        updatedAt
      }
    }
  }
`;

export const GET_USER_COMPANIES_LIST = gql`
  query getUserCompaniesList($userId: Int!, $page: Int!, $limit: Int!) {
    getUserCompaniesList(userId: $userId, page: $page, limit: $limit) {
      list {
        id
        companyId
        userId
        role
        createdAt
        updatedAt
        companyInfo {
          id
          name
          peopleInCompany
          direction
          createdAt
          updatedAt
        }
      }
      count
    }
  }
`;
