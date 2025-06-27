import { Head, Link, useForm } from "@inertiajs/react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

export default function New() {
  const { data, setData, post, processing, errors } = useForm({
    name: "",
    email: "",
    phone: "",
    address: "",
    notes: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post("/clients");
  };

  return (
    <>
      <Head title="New Client" />
      
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 p-8">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <Link href="/clients" className="text-orange-600 hover:text-orange-700 mb-4 inline-block">
              ← Back to Clients
            </Link>
            <h1 className="text-4xl font-bold text-slate-800 mb-2">Add New Client</h1>
            <p className="text-slate-600">Create a new client profile</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Name *
                </label>
                <Input
                  id="name"
                  type="text"
                  value={data.name}
                  onChange={(e) => setData("name", e.target.value)}
                  placeholder="Enter client name"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={data.email}
                  onChange={(e) => setData("email", e.target.value)}
                  placeholder="Enter email address"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                  Phone
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={data.phone}
                  onChange={(e) => setData("phone", e.target.value)}
                  placeholder="Enter phone number"
                />
                {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-slate-700 mb-2">
                  Address
                </label>
                <textarea
                  id="address"
                  value={data.address}
                  onChange={(e) => setData("address", e.target.value)}
                  placeholder="Enter address"
                  rows={3}
                  className="flex w-full rounded-xl border border-orange-200 bg-orange-50/50 px-3 py-2 text-sm text-slate-800 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-300 focus-visible:border-orange-300 disabled:cursor-not-allowed disabled:opacity-50"
                />
                {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address}</p>}
              </div>

              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-slate-700 mb-2">
                  Notes
                </label>
                <textarea
                  id="notes"
                  value={data.notes}
                  onChange={(e) => setData("notes", e.target.value)}
                  placeholder="Enter any additional notes"
                  rows={4}
                  className="flex w-full rounded-xl border border-orange-200 bg-orange-50/50 px-3 py-2 text-sm text-slate-800 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-300 focus-visible:border-orange-300 disabled:cursor-not-allowed disabled:opacity-50"
                />
                {errors.notes && <p className="mt-1 text-sm text-red-600">{errors.notes}</p>}
              </div>

              <div className="flex gap-4 pt-4">
                <Button type="submit" disabled={processing} size="lg">
                  {processing ? "Creating..." : "Create Client"}
                </Button>
                <Link href="/clients">
                  <Button variant="outline" size="lg">Cancel</Button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}