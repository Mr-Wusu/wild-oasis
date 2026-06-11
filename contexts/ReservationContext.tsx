"use client";

import { createContext, useState, use } from "react";
import { DateRange } from "react-day-picker";

interface ReservationContextType  {
  range: DateRange | undefined; 
  setRange: (range: DateRange | undefined) => void; 
  resetRange: () => void;
};


const ReservationContext = createContext<ReservationContextType | undefined>(
  undefined,
);

export function ReservationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [range, setRange] = useState<DateRange | undefined>(undefined);

  const resetRange = () => setRange(undefined);
  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

export function useReservation() {
  const context = use(ReservationContext);
  if (context === undefined)
    throw new Error("Context was used outside provider");
  return context;
}
