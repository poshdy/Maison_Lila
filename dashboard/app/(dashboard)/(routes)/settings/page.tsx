import { getData } from "@/fetchers";
import AdminsTable from "@/components/PageComponents/admin-table/admins-table";
import UsersTable from "@/components/PageComponents/user-table/users-table";

const SettingsPage = async () => {
  const admins = await getData("/manager/admin");
  const users = await getData("/manager/user");

  return (
    <section>
      <div className="space-y-10">
        {admins && <AdminsTable data={admins} />}
        {users && <UsersTable data={users} />}
      </div>
    </section>
  );
};

export default SettingsPage;
