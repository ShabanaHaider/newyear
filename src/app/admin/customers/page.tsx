
import AdminCustomerList from "../../components/AdminCustomerList";

export default function AdminCustomersPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard - Customers</h1>
      <AdminCustomerList />
    </div>
  );
}
