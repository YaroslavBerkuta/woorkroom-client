import {
  FlatList,
  GET_USER_COMPANIES_LIST,
  graphqlFetcher,
  Icon,
  PrimaryButton,
  type ICompany,
  type IGetUserCompaniesListResponse,
  type IUserCompany,
} from "@/shared";
import styles from "./index.module.scss";
import { useQuery } from "@tanstack/react-query";
import { useStore } from "@/shared/context";

function SelectCompany() {
  const { setCompany, user } = useStore();

  const { data, isLoading } = useQuery<{
    data: { getUserCompaniesList: IGetUserCompaniesListResponse };
  }>({
    queryKey: ["getUserCompaniesList"],
    queryFn: () =>
      graphqlFetcher(GET_USER_COMPANIES_LIST, {
        userId: user?.id,
        page: 1,
        limit: 10,
      }),
  });

  const handleSelectCompany = (company: ICompany) => {
    localStorage.setItem("selectCompany", JSON.stringify(company.id));
    setCompany(company);
  };

  return (
    <div className={styles.wrapper}>
      <FlatList
        isLoading={isLoading}
        data={data?.data?.getUserCompaniesList?.list || []}
        renderItem={(item: IUserCompany) => (
          <PrimaryButton
            label={item?.companyInfo?.name}
            onClick={() => handleSelectCompany(item.companyInfo)}
          />
        )}
        keyExtractor={(item) => item?.companyInfo?.id.toString()}
        listStyle={{ maxWidth: "425px", width: "100%" }}
        ListHeaderComponent={
          <p>
            <span>Select your company</span>
            <Icon icon="company" size={40} color="#3f8cff" />
          </p>
        }
        ListFooterComponent={
          <PrimaryButton
            label="Add new company"
            onClick={() => {}}
            rightIcon={<Icon icon="add" size={24} color="#fff" />}
          />
        }
        ListEmptyComponent={
          <div>
            <p>No companies found</p>
            <PrimaryButton
              label="Add new company"
              onClick={() => {}}
              rightIcon={<Icon icon="add" size={24} color="#fff" />}
            />
          </div>
        }
      />
    </div>
  );
}

export default SelectCompany;
