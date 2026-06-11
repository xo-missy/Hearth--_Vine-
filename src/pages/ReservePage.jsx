import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Users, MapPin, CheckCircle, Ticket } from 'lucide-react';

const ReservePage = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '2',
    name: '',
    email: '',
    specialRequest: ''
  });

  const [selectedTable, setSelectedTable] = useState(null);
  const [isBooked, setIsBooked] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  // Define tables in our interactive seating layout
  const tables = [
    { id: 1, type: 'window', name: 'Window Seat 1 (Garden View)', size: 2, x: 120, y: 130, status: 'available' },
    { id: 2, type: 'window', name: 'Window Seat 2 (Garden View)', size: 2, x: 200, y: 130, status: 'available' },
    { id: 3, type: 'window', name: 'Window Seat 3 (Sunset View)', size: 4, x: 290, y: 130, status: 'occupied' },
    { id: 4, type: 'hearth', name: 'Hearth Table 1 (Kitchen View)', size: 4, x: 120, y: 240, status: 'available' },
    { id: 5, type: 'hearth', name: 'Hearth Table 2 (Kitchen View)', size: 6, x: 220, y: 240, status: 'available' },
    { id: 6, type: 'hearth', name: 'Family Hearth Table (Main)', size: 8, x: 330, y: 240, status: 'occupied' },
    { id: 7, type: 'private', name: 'Private Lounge Alcove A', size: 2, x: 130, y: 350, status: 'available' },
    { id: 8, type: 'private', name: 'Private Lounge Alcove B', size: 4, x: 250, y: 350, status: 'available' },
    { id: 9, type: 'private', name: 'Imperial Private Chamber', size: 10, x: 350, y: 350, status: 'available' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTableSelect = (table) => {
    if (table.status === 'occupied') return;
    setSelectedTable(table.id === selectedTable?.id ? null : table);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!selectedTable) {
      alert("Please select a dining table on the seating map.");
      return;
    }
    // Generate mock reservation code
    const randCode = 'HV-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(randCode);
    setIsBooked(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-terracotta min-h-screen pt-28 pb-24"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex justify-center items-center space-x-3 mb-4">
            <div className="h-[1px] w-8 bg-accent" />
            <span className="font-cormorant italic text-sm text-accent tracking-widest uppercase">
              Table Reservations
            </span>
            <div className="h-[1px] w-8 bg-accent" />
          </div>
          <h1 className="font-playfair text-4xl md:text-6xl font-bold leading-tight text-cream mb-6">
            Secure Your <span className="text-accent italic font-normal">Hearth Seat</span>
          </h1>
          <p className="font-inter text-cream/70 text-sm md:text-base leading-relaxed font-light">
            Due to our wood-fired preparation times, we recommend booking table zones in advance. Explore our seating layout to choose your preferred experience.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {!isBooked ? (
            <motion.form 
              key="booking-form"
              onSubmit={handleBookingSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
            >
              
              {/* Left Column: Form Fields (5 columns) */}
              <div className="lg:col-span-5 bg-surface/30 border border-cream/10 p-6 md:p-8 space-y-6">
                <h3 className="font-playfair text-2xl font-bold text-cream border-b border-cream/10 pb-4">
                  Reservation Details
                </h3>

                {/* Date Selection */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="date" className="text-xs uppercase tracking-widest text-cream/60 flex items-center space-x-2">
                    <Calendar className="w-3.5 h-3.5 text-accent" />
                    <span>Select Date</span>
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full bg-terracotta border border-cream/20 text-cream py-3 px-4 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                {/* Time & Guests Selectors */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="time" className="text-xs uppercase tracking-widest text-cream/60 flex items-center space-x-2">
                      <Clock className="w-3.5 h-3.5 text-accent" />
                      <span>Select Time</span>
                    </label>
                    <select
                      id="time"
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleInputChange}
                      className="w-full bg-terracotta border border-cream/20 text-cream py-3 px-4 focus:outline-none focus:border-accent transition-colors rounded-none appearance-none"
                    >
                      <option value="">Time Slot</option>
                      <option value="12:00 PM">12:00 PM (Lunch)</option>
                      <option value="1:30 PM">1:30 PM (Lunch)</option>
                      <option value="6:00 PM">6:00 PM (Dinner)</option>
                      <option value="7:30 PM">7:30 PM (Dinner)</option>
                      <option value="9:00 PM">9:00 PM (Dinner)</option>
                    </select>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <label htmlFor="guests" className="text-xs uppercase tracking-widest text-cream/60 flex items-center space-x-2">
                      <Users className="w-3.5 h-3.5 text-accent" />
                      <span>Guests</span>
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      required
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="w-full bg-terracotta border border-cream/20 text-cream py-3 px-4 focus:outline-none focus:border-accent transition-colors rounded-none"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="6">6 Guests</option>
                      <option value="8">8+ Guests</option>
                    </select>
                  </div>
                </div>

                {/* Name & Email */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="name" className="text-xs uppercase tracking-widest text-cream/60">Your Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-terracotta border border-cream/20 text-cream placeholder-cream/35 py-3 px-4 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div className="flex flex-col space-y-2">
                  <label htmlFor="email" className="text-xs uppercase tracking-widest text-cream/60">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="reservations@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-terracotta border border-cream/20 text-cream placeholder-cream/35 py-3 px-4 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                {/* Special Requests */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="specialRequest" className="text-xs uppercase tracking-widest text-cream/60">Special Requests / Allergies</label>
                  <textarea
                    id="specialRequest"
                    name="specialRequest"
                    rows="2"
                    placeholder="E.g. Suya seasoning spice levels, wheelchair accessibility, celebrating anniversary..."
                    value={formData.specialRequest}
                    onChange={handleInputChange}
                    className="w-full bg-terracotta border border-cream/20 text-cream placeholder-cream/35 py-3 px-4 focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>

              </div>

              {/* Right Column: Interactive Seating Chart Map (7 columns) */}
              <div className="lg:col-span-7 bg-surface/30 border border-cream/10 p-6 md:p-8 flex flex-col justify-between h-full">
                <div>
                  <h3 className="font-playfair text-2xl font-bold text-cream mb-1 flex items-center justify-between">
                    <span>Interactive Seating Chart</span>
                    <span className="text-xs uppercase font-inter font-light tracking-widest text-accent flex items-center space-x-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Main Dining Hall</span>
                    </span>
                  </h3>
                  <p className="font-inter text-cream/60 text-xs font-light mb-6">
                    Click an available table to select your reservation location. Selected table highlights in gold.
                  </p>

                  {/* Seating Map SVG Grid */}
                  <div className="relative w-full aspect-[4/3] bg-terracotta/40 border border-cream/10 flex items-center justify-center p-4">
                    
                    {/* Architectural / Section Labels */}
                    <div className="absolute top-4 left-6 text-[10px] uppercase tracking-widest text-accent font-semibold">Terrace / Garden (Windows)</div>
                    <div className="absolute top-1/2 left-6 -translate-y-1/2 rotate-90 origin-left text-[10px] uppercase tracking-widest text-cream/30">Wood-Fired Hearth</div>
                    <div className="absolute bottom-4 right-6 text-[10px] uppercase tracking-widest text-cream/30">Private Lounges</div>

                    {/* SVG Seating Layout */}
                    <svg viewBox="0 0 500 450" className="w-full h-full">
                      {/* Window glass arched window line */}
                      <path d="M 50 100 Q 250 20 450 100" fill="none" stroke="rgba(248, 241, 231, 0.15)" strokeWidth="3" strokeDasharray="6,6" />
                      <text x="250" y="45" textAnchor="middle" fill="rgba(248, 241, 231, 0.25)" className="font-cormorant italic text-xs uppercase tracking-widest">Sunset Terrace Window Arches</text>

                      {/* Main Wood Fired Hearth Kitchen area representation */}
                      <rect x="50" y="190" width="30" height="100" fill="none" stroke="rgba(217, 179, 130, 0.2)" strokeWidth="1" />
                      <text x="65" y="240" writingMode="vertical-lr" textAnchor="middle" fill="rgba(217, 179, 130, 0.4)" className="font-playfair font-bold text-xs uppercase tracking-widest">FIRE HEARTH</text>

                      {/* Render tables as interactive nodes */}
                      {tables.map((table) => {
                        const isSelected = selectedTable?.id === table.id;
                        const isOccupied = table.status === 'occupied';
                        
                        let fillColor = 'rgba(248, 241, 231, 0.05)';
                        let strokeColor = 'rgba(248, 241, 231, 0.4)';
                        let cursorStyle = 'cursor-pointer';

                        if (isOccupied) {
                          fillColor = 'rgba(141, 90, 70, 0.6)';
                          strokeColor = 'rgba(141, 90, 70, 0.8)';
                          cursorStyle = 'cursor-not-allowed';
                        } else if (isSelected) {
                          fillColor = '#D9B382';
                          strokeColor = '#FFFDF9';
                        }

                        // Determine radius size based on table guest size
                        const radius = 18 + (table.size * 2);

                        return (
                          <g 
                            key={table.id} 
                            onClick={() => handleTableSelect(table)}
                            className={`${cursorStyle} transition-all duration-300`}
                          >
                            {/* Glow circle for selected table */}
                            {isSelected && (
                              <circle 
                                cx={table.x} 
                                cy={table.y} 
                                r={radius + 8} 
                                fill="none" 
                                stroke="#D9B382" 
                                strokeWidth="1" 
                                opacity="0.4"
                                className="animate-ping"
                              />
                            )}

                            {/* Table Circle */}
                            <circle
                              cx={table.x}
                              cy={table.y}
                              r={radius}
                              fill={fillColor}
                              stroke={strokeColor}
                              strokeWidth={isSelected ? "2.5" : "1.5"}
                            />

                            {/* Table Number/Label */}
                            <text
                              x={table.x}
                              y={table.y + 4}
                              textAnchor="middle"
                              fill={isSelected ? '#6F4332' : (isOccupied ? 'rgba(248, 241, 231, 0.2)' : '#FFFDF9')}
                              className="font-inter font-bold text-xs pointer-events-none"
                            >
                              T{table.id}
                            </text>

                            {/* Chairs around table */}
                            {Array.from({ length: table.size }).map((_, chairIdx) => {
                              const angle = (chairIdx * 2 * Math.PI) / table.size;
                              const chairDist = radius + 8;
                              const chairX = table.x + chairDist * Math.cos(angle);
                              const chairY = table.y + chairDist * Math.sin(angle);
                              
                              return (
                                <circle
                                  key={chairIdx}
                                  cx={chairX}
                                  cy={chairY}
                                  r="4"
                                  fill={isSelected ? '#D9B382' : (isOccupied ? 'rgba(141, 90, 70, 0.6)' : 'rgba(248, 241, 231, 0.4)')}
                                />
                              );
                            })}
                          </g>
                        );
                      })}
                    </svg>

                  </div>

                  {/* Legend guide */}
                  <div className="flex justify-center items-center space-x-6 text-[10px] uppercase tracking-wider text-cream/60 mt-4 border-t border-cream/5 pt-4">
                    <div className="flex items-center space-x-1.5">
                      <span className="w-3.5 h-3.5 rounded-full border border-cream/40 bg-cream/5" />
                      <span>Available</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <span className="w-3.5 h-3.5 rounded-full bg-accent border border-cream/10" />
                      <span>Selected</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <span className="w-3.5 h-3.5 rounded-full bg-surface border border-surface" />
                      <span>Occupied</span>
                    </div>
                  </div>
                </div>

                {/* Booking Receipt Summary Card */}
                <div className="border-t border-cream/15 pt-6 mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-widest text-cream/45 block">Selected Zone</span>
                    <span className="font-playfair text-lg text-cream font-medium">
                      {selectedTable ? selectedTable.name : 'No table selected'}
                    </span>
                    {selectedTable && (
                      <span className="block text-[10px] text-accent font-semibold uppercase tracking-wider">
                        Accommodates up to {selectedTable.size} guests
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    className={`w-full sm:w-auto font-medium text-xs tracking-widest uppercase py-4 px-8 rounded-none transition-all duration-300 shadow-xl ${
                      selectedTable 
                        ? 'bg-accent hover:bg-cream text-terracotta border border-accent cursor-pointer' 
                        : 'bg-cream/10 text-cream/30 border border-cream/10 cursor-not-allowed'
                    }`}
                    disabled={!selectedTable}
                  >
                    Confirm Table Booking
                  </button>
                </div>

              </div>

            </motion.form>
          ) : (
            // Animated Success Screen after booking
            <motion.div
              key="booking-success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-xl mx-auto bg-surface border border-cream/20 p-8 md:p-10 text-center shadow-2xl flex flex-col items-center space-y-6"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center text-accent"
              >
                <CheckCircle className="w-10 h-10" />
              </motion.div>

              <div className="space-y-2">
                <h3 className="font-playfair text-3xl font-bold text-cream">
                  Reservation Confirmed
                </h3>
                <p className="font-cormorant italic text-lg text-accent">
                  Your table at Hearth & Vine awaits you.
                </p>
              </div>

              {/* Receipt detail box */}
              <div className="w-full bg-terracotta/40 border border-cream/10 p-6 text-left space-y-4 font-inter text-sm text-cream/80">
                <div className="flex justify-between items-center border-b border-cream/10 pb-3">
                  <span className="text-xs uppercase tracking-wider text-cream/40 flex items-center space-x-1.5">
                    <Ticket className="w-3.5 h-3.5 text-accent" />
                    <span>Booking Reference</span>
                  </span>
                  <span className="font-mono font-bold text-accent">{bookingRef}</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-cream/40">Guest</span>
                    <span className="font-medium text-cream">{formData.name}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-cream/40">Guests Count</span>
                    <span className="font-medium text-cream">{formData.guests} Guests</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-cream/40">Date</span>
                    <span className="font-medium text-cream">{formData.date}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-cream/40">Time</span>
                    <span className="font-medium text-cream">{formData.time}</span>
                  </div>
                </div>
                <div className="border-t border-cream/10 pt-3">
                  <span className="block text-[10px] uppercase tracking-wider text-cream/40 mb-1">Assigned Seating</span>
                  <span className="font-medium text-accent">
                    {tables.find(t => t.id === selectedTable)?.name}
                  </span>
                </div>
              </div>

              <p className="text-xs text-cream/50 leading-relaxed max-w-sm">
                A confirmation email has been dispatched to <span className="text-cream">{formData.email}</span>. Please present this reference code on arrival.
              </p>

              <button
                onClick={() => {
                  setIsBooked(false);
                  setSelectedTable(null);
                  setFormData({
                    date: '',
                    time: '',
                    guests: '2',
                    name: '',
                    email: '',
                    specialRequest: ''
                  });
                }}
                className="bg-transparent hover:bg-cream/5 border border-cream/25 hover:border-cream text-cream font-medium text-xs tracking-widest uppercase py-3.5 px-8 rounded-none transition-colors"
              >
                Book Another Table
              </button>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.div>
  );
};

export default ReservePage;
