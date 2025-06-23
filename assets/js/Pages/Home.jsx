import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm border-b border-orange-200/60 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">💎</span>
              </div>
              <span className="text-xl font-semibold text-slate-800">
                Jewelry Booking
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a
                href="#"
                className="text-slate-600 hover:text-orange-600 font-medium transition-colors"
              >
                Bookings
              </a>
              <a
                href="#"
                className="text-slate-600 hover:text-orange-600 font-medium transition-colors"
              >
                Services
              </a>
              <button className="bg-gradient-to-r from-orange-400 to-pink-400 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-200">
                New Booking
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg border border-orange-100 p-6">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              New Booking
            </h2>

            <div className="space-y-6">
              {/* Customer Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Customer Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter customer name"
                    className="w-full px-4 py-3 bg-orange-50 border border-orange-200 rounded-xl text-slate-800 placeholder:text-slate-500 focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="w-full px-4 py-3 bg-orange-50 border border-orange-200 rounded-xl text-slate-800 placeholder:text-slate-500 focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
                  />
                </div>
              </div>

              {/* Service Type */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Service Type
                </label>
                <select className="w-full px-4 py-3 bg-orange-50 border border-orange-200 rounded-xl text-slate-800 focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50">
                  <option>Select a service...</option>
                  <option>Ring Repair</option>
                  <option>Necklace Cleaning</option>
                  <option>Custom Design</option>
                  <option>Appraisal</option>
                  <option>Watch Repair</option>
                </select>
              </div>

              {/* Jewelry Details */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Jewelry Description
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe the piece (e.g., gold ring with missing stone, vintage necklace needs clasp repair...)"
                  className="w-full px-4 py-3 bg-orange-50 border border-orange-200 rounded-xl text-slate-800 placeholder:text-slate-500 focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50 resize-none"
                />
              </div>

              {/* Photo Upload */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Jewelry Photos
                </label>
                <div className="border-2 border-dashed border-orange-300 rounded-xl p-8 text-center bg-orange-50/50 hover:bg-orange-50 transition-colors">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 text-xl">📷</span>
                    </div>
                    <p className="text-slate-600 font-medium">
                      Drop photos here or click to upload
                    </p>
                    <p className="text-sm text-slate-500">
                      PNG, JPG up to 10MB each
                    </p>
                  </div>
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 bg-orange-50 border border-orange-200 rounded-xl text-slate-800 focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Preferred Time
                  </label>
                  <select className="w-full px-4 py-3 bg-orange-50 border border-orange-200 rounded-xl text-slate-800 focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50">
                    <option>Select time...</option>
                    <option>9:00 AM</option>
                    <option>10:00 AM</option>
                    <option>11:00 AM</option>
                    <option>1:00 PM</option>
                    <option>2:00 PM</option>
                    <option>3:00 PM</option>
                    <option>4:00 PM</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <button className="w-full bg-gradient-to-r from-orange-400 to-pink-400 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5">
                Schedule Booking
              </button>
            </div>
          </div>

          {/* Calendar & Recent Bookings */}
          <div className="space-y-6">
            {/* Mini Calendar */}
            <div className="bg-white rounded-2xl shadow-lg border border-orange-100 p-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">
                Calendar
              </h3>
              <div className="space-y-2">
                <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-slate-500">
                  <div>S</div>
                  <div>M</div>
                  <div>T</div>
                  <div>W</div>
                  <div>T</div>
                  <div>F</div>
                  <div>S</div>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center text-sm">
                  {Array.from({ length: 35 }, (_, i) => (
                    <div
                      key={i}
                      className={`h-8 flex items-center justify-center rounded-lg ${
                        i === 15
                          ? "bg-gradient-to-r from-orange-400 to-pink-400 text-white font-semibold"
                          : i === 12 || i === 18
                            ? "bg-orange-100 text-orange-700"
                            : "text-slate-600 hover:bg-orange-50"
                      }`}
                    >
                      {i < 6 ? "" : i - 5 > 31 ? "" : i - 5}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Bookings */}
            <div className="bg-white rounded-2xl shadow-lg border border-orange-100 p-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">
                Recent Bookings
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-xl">
                  <div className="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 text-sm">💍</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-800">
                      Sarah Chen
                    </p>
                    <p className="text-xs text-slate-500">
                      Ring repair - Today 2:00 PM
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-pink-50 rounded-xl">
                  <div className="w-10 h-10 bg-pink-200 rounded-full flex items-center justify-center">
                    <span className="text-pink-600 text-sm">📿</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-800">
                      Mike Johnson
                    </p>
                    <p className="text-xs text-slate-500">
                      Necklace cleaning - Tomorrow 10:00 AM
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-xl">
                  <div className="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 text-sm">⌚</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-800">
                      Emma Davis
                    </p>
                    <p className="text-xs text-slate-500">
                      Watch repair - Friday 3:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
