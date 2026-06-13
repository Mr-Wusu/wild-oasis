"use client"

import { useReservation } from '@/contexts/ReservationContext';
import { IoClose } from "react-icons/io5";
import { format } from 'date-fns';

function ReservationReminder() {

  const { range, resetRange } = useReservation()

  if (!range || !range.from || !range.to) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 py-5 px-8 rounded-full bg-primary-7 text-primary-1 font-semibold shadow-xl shadow-slate-900 flex gap-8 items-center">
      <p>
        <span>👋</span> Don&apos;t forget to reserve your dates <br /> from{" "}
        {format(new Date(range.from), "MMM dd yyyy")} to{" "}
        {format(new Date(range.to), "MMM dd yyyy")}
      </p>
      <button
        title="close"
        className="rounded-full cursor-pointer p-1 hover:bg-primary-1 transition-all"
        onClick={resetRange}
      >
        <IoClose className="h-6 w-6 bg-primary-1 text-primary-9 rounded-full" />
      </button>
    </div>
  );
}

export default ReservationReminder;
