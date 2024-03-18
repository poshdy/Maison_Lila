import { getData } from "@/fetchers";
import AdminsTable from "@/components/PageComponents/admin-table/admins-table";
import UsersTable from "@/components/PageComponents/user-table/users-table";
import Wrapper from "@/components/ui/wrapper";

const SettingsPage = async () => {
  const admins = await getData("/manager/admin");
  const users = await getData("/manager/user");

  return (
    <Wrapper>
      {admins && <AdminsTable data={admins} />}
      {users && <UsersTable data={users} />}
    </Wrapper>
  );
};

export default SettingsPage;
