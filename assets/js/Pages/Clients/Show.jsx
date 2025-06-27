import { Head, Link } from "@inertiajs/react";
import { Button } from "../../components/ui/button";

export default function Show({ client }) {
  return (
    <>
      <Head title={`Client: ${client.name}`} />
      
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/clients" className="text-orange-600 hover:text-orange-700 mb-4 inline-block">
              ← Back to Clients
            </Link>
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-4xl font-bold text-slate-800 mb-2">{client.name}</h1>
                <p className="text-slate-600">Client Details</p>
              </div>
              <div className="space-x-2">
                <Link href={`/clients/${client.id}/edit`}>
                  <Button variant="outline">Edit Client</Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Client Information */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-semibold text-slate-800 mb-6">Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-600 mb-1">Name</label>
                    <p className="text-slate-900 font-medium">{client.name}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-600 mb-1">Email</label>
                    <p className="text-slate-900">{client.email || "Not provided"}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-600 mb-1">Phone</label>
                    <p className="text-slate-900">{client.phone || "Not provided"}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-600 mb-1">Address</label>
                    <p className="text-slate-900 whitespace-pre-line">{client.address || "Not provided"}</p>
                  </div>
                </div>
                {client.notes && (
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-slate-600 mb-1">Notes</label>
                    <p className="text-slate-900 whitespace-pre-line">{client.notes}</p>
                  </div>
                )}
              </div>

              {/* Recent Bookings */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-semibold text-slate-800 mb-6">Recent Bookings</h2>
                {client.bookings && client.bookings.length > 0 ? (
                  <div className="space-y-4">
                    {client.bookings.slice(0, 5).map((booking) => (
                      <div key={booking.id} className="border border-orange-100 rounded-xl p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium text-slate-900">
                              {new Date(booking.scheduled_at).toLocaleDateString()}
                            </p>
                            <p className="text-sm text-slate-600">{booking.status}</p>
                          </div>
                          <Link href={`/bookings/${booking.id}`}>
                            <Button variant="ghost" size="sm">View</Button>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-slate-500">No bookings yet</p>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Link href={`/bookings/new?client_id=${client.id}`} className="block">
                    <Button variant="outline" className="w-full justify-start">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      New Booking
                    </Button>
                  </Link>
                  <Link href={`/tasks/new?client_id=${client.id}`} className="block">
                    <Button variant="outline" className="w-full justify-start">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      New Task
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Client Stats */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Statistics</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Total Bookings</span>
                    <span className="font-medium">{client.bookings?.length || 0}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Active Tasks</span>
                    <span className="font-medium">{client.tasks?.length || 0}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Photos</span>
                    <span className="font-medium">{client.photos?.length || 0}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}