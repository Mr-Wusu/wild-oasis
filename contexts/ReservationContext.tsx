"use client";

import { createContext, ReactNode, useState, use } from "react";



interface ReservationContextType {
  range: { from: Date | undefined; to: Date | undefined };
  setRange: (range: { from: Date | undefined; to: Date | undefined }) => void;
  resetRange: () => void;
}

const ReservationContext = createContext<ReservationContextType | undefined>(
  undefined,
);

interface RangeState {
  from: Date | undefined;
  to: Date | undefined;
}

const initialState: RangeState = { from: undefined, to: undefined };

interface ReservationProviderProps {
  children: ReactNode;
}

export function ReservationProvider({ children }: ReservationProviderProps) {
  const [range, setRange] = useState(initialState);
  const resetRange = () => setRange(initialState);

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
