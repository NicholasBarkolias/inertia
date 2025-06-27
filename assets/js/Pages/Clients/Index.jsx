import { Head, Link } from "@inertiajs/react";
import { Button } from "../../components/ui/button";

export default function Index({ clients }) {
  return (
    <>
      <Head title="Clients" />
      
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold text-slate-800 mb-2">Clients</h1>
              <p className="text-slate-600">Manage your jewelry business clients</p>
            </div>
            <Link href="/clients/new">
              <Button size="lg">Add New Client</Button>
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {clients.length === 0 ? (
              <div className="p-12 text-center">
                <div className="text-slate-400 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-700 mb-2">No clients yet</h3>
                <p className="text-slate-500 mb-6">Get started by adding your first client</p>
                <Link href="/clients/new">
                  <Button>Add Your First Client</Button>
                </Link>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-orange-50 border-b border-orange-100">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Name</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Email</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Phone</th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-slate-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {clients.map((client) => (
                      <tr key={client.id} className="hover:bg-orange-25 transition-colors">
                        <td className="px-6 py-4">
                          <div className="font-medium text-slate-900">{client.name}</div>
                        </td>
                        <td className="px-6 py-4 text-slate-600">{client.email}</td>
                        <td className="px-6 py-4 text-slate-600">{client.phone}</td>
                        <td className="px-6 py-4 text-right space-x-2">
                          <Link href={`/clients/${client.id}`}>
                            <Button variant="ghost" size="sm">View</Button>
                          </Link>
                          <Link href={`/clients/${client.id}/edit`}>
                            <Button variant="outline" size="sm">Edit</Button>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}