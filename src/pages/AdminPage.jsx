import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Users, Clock, Search, Trash2, Check, X, Database, ShieldAlert, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminPage = () => {
  const [reservations, setReservations] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDate, setFilterDate] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  // Load reservations from localStorage on mount
  useEffect(() => {
    loadReservations();
  }, []);

  const loadReservations = () => {
    try {
      const stored = localStorage.getItem('hearth_vine_reservations');
      if (stored) {
        setReservations(JSON.parse(stored));
      } else {
        setReservations([]);
      }
    } catch (err) {
      console.error('Error loading reservations:', err);
    }
  };

  // Seed sample data for preview
  const seedSampleData = () => {
    const todayStr = new Date().toISOString().split('T')[0];
    const tomorrowStr = new Date(Date.now() + 86400000).toISOString().split('T')[0];

    const sampleData = [
      {
        bookingRef: 'HV-783621',
        name: 'Alhaji Ibrahim',
        email: 'ibrahim@example.com',
        date: todayStr,
        time: '7:30 PM',
        guests: '4',
        specialRequest: 'Suya yaji extra hot, celebrating birthday.',
        tableId: 5,
        tableName: 'Hearth Table 2 (Kitchen View)',
        tableType: 'hearth',
        status: 'Confirmed',
        createdAt: new Date().toISOString()
      },
      {
        bookingRef: 'HV-192834',
        name: 'Chioma Nwachukwu',
        email: 'chioma@example.com',
        date: todayStr,
        time: '6:00 PM',
        guests: '2',
        specialRequest: 'Garden window seat preferred.',
        tableId: 1,
        tableName: 'Window Seat 1 (Garden View)',
        tableType: 'window',
        status: 'Confirmed',
        createdAt: new Date().toISOString()
      },
      {
        bookingRef: 'HV-884910',
        name: 'Tunde Bakare',
        email: 'tunde@example.com',
        date: tomorrowStr,
        time: '9:00 PM',
        guests: '6',
        specialRequest: 'Needs wheelchair access near entrance.',
        tableId: 8,
        tableName: 'Private Lounge Alcove B',
        tableType: 'private',
        status: 'Confirmed',
        createdAt: new Date().toISOString()
      },
      {
        bookingRef: 'HV-334812',
        name: 'Dr. Funmi Adebayo',
        email: 'funmi@example.com',
        date: todayStr,
        time: '1:30 PM',
        guests: '2',
        specialRequest: 'No peanut oils, severe allergy.',
        tableId: 7,
        tableName: 'Private Lounge Alcove A',
        tableType: 'private',
        status: 'Arrived',
        createdAt: new Date().toISOString()
      }
    ];

    try {
      localStorage.setItem('hearth_vine_reservations', JSON.stringify(sampleData));
      setReservations(sampleData);
    } catch (err) {
      console.error('Error seeding data:', err);
    }
  };

  // Update reservation status
  const updateStatus = (bookingRef, newStatus) => {
    const updated = reservations.map(res => {
      if (res.bookingRef === bookingRef) {
        return { ...res, status: newStatus };
      }
      return res;
    });
    localStorage.setItem('hearth_vine_reservations', JSON.stringify(updated));
    setReservations(updated);
  };

  // Delete reservation
  const deleteReservation = (bookingRef) => {
    if (window.confirm('Are you sure you want to delete this reservation record?')) {
      const updated = reservations.filter(res => res.bookingRef !== bookingRef);
      localStorage.setItem('hearth_vine_reservations', JSON.stringify(updated));
      setReservations(updated);
    }
  };

  // Clear all reservations
  const clearAllReservations = () => {
    if (window.confirm('WARNING: Are you sure you want to delete ALL reservation records? This cannot be undone.')) {
      localStorage.removeItem('hearth_vine_reservations');
      setReservations([]);
    }
  };

  // Filters logic
  const filteredReservations = reservations.filter(res => {
    const matchesSearch = 
      res.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      res.bookingRef.toLowerCase().includes(searchTerm.toLowerCase()) ||
      res.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDate = filterDate ? res.date === filterDate : true;
    
    const matchesStatus = statusFilter === 'All' ? true : res.status === statusFilter;

    return matchesSearch && matchesDate && matchesStatus;
  });

  // Calculate Metrics
  const todayStr = new Date().toISOString().split('T')[0];
  const todayReservations = reservations.filter(res => res.date === todayStr);
  const totalGuestsToday = todayReservations
    .filter(res => res.status !== 'Cancelled')
    .reduce((sum, res) => sum + parseInt(res.guests || 0, 10), 0);

  const activeReservationsCount = reservations.filter(res => res.status !== 'Cancelled').length;
  const occupancyPercentage = Math.min(Math.round((todayReservations.filter(res => res.status !== 'Cancelled').length / 9) * 100), 100);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-terracotta min-h-screen pt-28 pb-24"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-cream/10 pb-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 text-accent mb-2">
              <Award className="w-4 h-4" />
              <span className="font-cormorant italic text-sm tracking-widest uppercase font-semibold">
                Owner's Portal
              </span>
            </div>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-cream">
              Hearth Seating <span className="text-accent italic font-normal">Dashboard</span>
            </h1>
            <p className="font-inter text-cream/70 text-xs md:text-sm font-light mt-1">
              Welcome back, Chef-Owner <span className="text-accent font-medium">Oladipo Twinee</span>. Manage your wood-fire seating layout.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={seedSampleData}
              className="bg-accent/10 hover:bg-accent/20 border border-accent/30 text-accent font-medium text-[10px] tracking-widest uppercase py-3 px-5 transition-all duration-300 flex items-center space-x-2"
            >
              <Database className="w-3.5 h-3.5" />
              <span>Seed Sample Data</span>
            </button>
            
            {reservations.length > 0 && (
              <button
                onClick={clearAllReservations}
                className="bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 font-medium text-[10px] tracking-widest uppercase py-3 px-5 transition-all duration-300 flex items-center space-x-2"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear All Records</span>
              </button>
            )}
          </div>
        </div>

        {/* KPIs Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Card 1 */}
          <div className="bg-surface/30 border border-cream/10 p-6 flex flex-col justify-between">
            <span className="text-[10px] uppercase tracking-widest text-cream/50 block">Active Bookings</span>
            <div className="flex justify-between items-baseline mt-4">
              <span className="text-4xl font-bold font-playfair text-cream">{activeReservationsCount}</span>
              <span className="text-xs text-accent">Total Active</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-surface/30 border border-cream/10 p-6 flex flex-col justify-between">
            <span className="text-[10px] uppercase tracking-widest text-cream/50 block">Today's Expected Guests</span>
            <div className="flex justify-between items-baseline mt-4">
              <span className="text-4xl font-bold font-playfair text-cream">{totalGuestsToday}</span>
              <span className="text-xs text-accent">Lagos Diners</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-surface/30 border border-cream/10 p-6 flex flex-col justify-between">
            <span className="text-[10px] uppercase tracking-widest text-cream/50 block">Today's Seating Load</span>
            <div className="flex justify-between items-baseline mt-4">
              <span className="text-4xl font-bold font-playfair text-cream">{todayReservations.length} / 9</span>
              <span className="text-xs text-accent">Tables Blocked</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-surface/30 border border-cream/10 p-6 flex flex-col justify-between">
            <span className="text-[10px] uppercase tracking-widest text-cream/50 block">Estimated Occupancy</span>
            <div className="flex justify-between items-baseline mt-4">
              <span className="text-4xl font-bold font-playfair text-cream">{occupancyPercentage}%</span>
              <div className="w-16 bg-cream/10 h-1.5 rounded-full overflow-hidden">
                <div className="bg-accent h-full" style={{ width: `${occupancyPercentage}%` }} />
              </div>
            </div>
          </div>

        </div>

        {/* Filter Panel */}
        <div className="bg-surface/25 border border-cream/10 p-5 md:p-6 mb-8 flex flex-col lg:flex-row gap-4 justify-between items-stretch lg:items-center">
          
          {/* Search bar */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cream/45" />
            <input
              type="text"
              placeholder="Search by name, reference, or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-terracotta border border-cream/15 text-cream placeholder-cream/35 py-3 pl-11 pr-4 focus:outline-none focus:border-accent text-sm transition-colors rounded-none"
            />
          </div>

          {/* Date Picker Filter */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center space-x-2 bg-terracotta border border-cream/15 px-4 py-3 min-w-[180px]">
              <Calendar className="w-4 h-4 text-accent" />
              <input
                type="date"
                value={filterDate}
                onChange={(e) => setFilterDate(e.target.value)}
                className="bg-transparent text-cream focus:outline-none text-xs w-full cursor-pointer"
              />
              {filterDate && (
                <button onClick={() => setFilterDate('')} className="text-cream/50 hover:text-cream text-xs pl-1">&times;</button>
              )}
            </div>

            {/* Status Select Filter */}
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-terracotta border border-cream/15 text-cream text-xs px-4 py-3 focus:outline-none focus:border-accent rounded-none appearance-none cursor-pointer min-w-[140px]"
            >
              <option value="All">All Statuses</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Arrived">Arrived</option>
              <option value="Pending">Pending</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>

        </div>

        {/* Bookings Table list */}
        <div className="bg-surface/20 border border-cream/10 overflow-x-auto">
          {filteredReservations.length > 0 ? (
            <table className="w-full text-left border-collapse text-cream">
              <thead>
                <tr className="border-b border-cream/10 text-[10px] uppercase tracking-widest text-cream/50">
                  <th className="py-4 px-6 font-semibold">Ref</th>
                  <th className="py-4 px-6 font-semibold">Guest</th>
                  <th className="py-4 px-6 font-semibold">Date & Time</th>
                  <th className="py-4 px-6 font-semibold">Seating</th>
                  <th className="py-4 px-6 font-semibold">Notes / Requests</th>
                  <th className="py-4 px-6 font-semibold text-center">Status</th>
                  <th className="py-4 px-6 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-cream/5 font-inter text-sm font-light">
                <AnimatePresence initial={false}>
                  {filteredReservations.map((res) => (
                    <motion.tr
                      key={res.bookingRef}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="hover:bg-cream/[0.02] transition-colors"
                    >
                      {/* Booking Code */}
                      <td className="py-5 px-6 font-mono font-bold text-accent">{res.bookingRef}</td>
                      
                      {/* Guest Details */}
                      <td className="py-5 px-6">
                        <div className="font-semibold text-cream">{res.name}</div>
                        <div className="text-xs text-cream/50 mt-0.5">{res.email}</div>
                      </td>

                      {/* Date & Time */}
                      <td className="py-5 px-6">
                        <div className="flex items-center space-x-1.5 text-cream/90">
                          <Calendar className="w-3.5 h-3.5 text-accent/75" />
                          <span>{res.date}</span>
                        </div>
                        <div className="flex items-center space-x-1.5 text-cream/60 text-xs mt-1">
                          <Clock className="w-3.5 h-3.5 text-accent/50" />
                          <span>{res.time}</span>
                        </div>
                      </td>

                      {/* Seating Area */}
                      <td className="py-5 px-6">
                        <div className="font-medium text-cream">{res.tableName}</div>
                        <div className="flex items-center space-x-1.5 text-xs text-accent mt-1 uppercase tracking-wider font-semibold">
                          <Users className="w-3 h-3" />
                          <span>Table T{res.tableId} &middot; {res.guests} Guests</span>
                        </div>
                      </td>

                      {/* Requests */}
                      <td className="py-5 px-6 max-w-xs truncate text-xs text-cream/75 italic">
                        {res.specialRequest ? `"${res.specialRequest}"` : <span className="text-cream/30">None</span>}
                      </td>

                      {/* Status badge */}
                      <td className="py-5 px-6 text-center">
                        <span className={`inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-none ${
                          res.status === 'Arrived' 
                            ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
                            : res.status === 'Confirmed' 
                            ? 'bg-accent/15 text-accent border border-accent/25' 
                            : res.status === 'Pending'
                            ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                            : 'bg-red-500/10 text-red-400 border border-red-500/20'
                        }`}>
                          {res.status}
                        </span>
                      </td>

                      {/* Admin Actions */}
                      <td className="py-5 px-6 text-right space-x-1">
                        {res.status !== 'Arrived' && res.status !== 'Cancelled' && (
                          <button
                            onClick={() => updateStatus(res.bookingRef, 'Arrived')}
                            className="bg-transparent hover:bg-green-500/10 p-2 text-green-400 transition-colors border border-transparent hover:border-green-500/25"
                            title="Check-in Guest"
                          >
                            <Check className="w-4 h-4" />
                          </button>
                        )}
                        {res.status !== 'Cancelled' && (
                          <button
                            onClick={() => updateStatus(res.bookingRef, 'Cancelled')}
                            className="bg-transparent hover:bg-red-500/10 p-2 text-red-400 transition-colors border border-transparent hover:border-red-500/25"
                            title="Cancel Booking"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        )}
                        <button
                          onClick={() => deleteReservation(res.bookingRef)}
                          className="bg-transparent hover:bg-cream/10 p-2 text-cream/60 hover:text-cream transition-colors"
                          title="Delete Record"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          ) : (
            // No bookings message
            <div className="py-20 text-center flex flex-col items-center justify-center space-y-4">
              <ShieldAlert className="w-12 h-12 text-cream/35" />
              <div className="space-y-1">
                <h4 className="font-playfair text-xl font-bold text-cream">No Reservations Found</h4>
                <p className="font-inter text-cream/50 text-xs font-light max-w-xs">
                  {reservations.length === 0 
                    ? "Your booking database is currently empty. Click 'Seed Sample Data' to generate dummy reservations for testing."
                    : "No records match your search query or selected date filters."}
                </p>
              </div>
            </div>
          )}
        </div>

      </div>
    </motion.div>
  );
};

export default AdminPage;
