"use client";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useReservation } from "@/contexts/ReservationContext";
import "@/app/_styles/date-selector.css";
import { useEffect, useState } from "react";

interface DateSelectorProps {
  settings: {
    minBookingLength: number;
    maxBookingLength: number;
  };
  cabin: {
    regularPrice: number;
    discount: number;
  };
  bookedDates: Date[];
}

function DateSelector({ settings, cabin, bookedDates }: DateSelectorProps) {
  const { range, setRange, resetRange } = useReservation();

  const [isLargeScreen, setIsLargeScreen] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(min-width: 1024px)").matches,
  );
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const handler = (e: MediaQueryListEvent) => setIsLargeScreen(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const fromDate = range?.from;
  const toDate = range?.to;

  const numNights =
    fromDate && toDate
      ? Math.ceil(
          (toDate.getTime() - fromDate.getTime()) / (1000 * 60 * 60 * 24),
        )
      : 0;

  const cabinPrice = numNights * (cabin.regularPrice - cabin.discount);

  const disabledDays = [{ before: new Date() }, ...bookedDates];

  return (
    <div className="flex flex-col justify-between">
      <DayPicker
        className="pt-4 lg:pt-12 place-self-center [&_svg]:text-primary-4"
        mode="range"
        onSelect={setRange}
        selected={range}
        min={settings.minBookingLength + 1}
        max={settings.maxBookingLength}
        startMonth={new Date()}
        endMonth={new Date(new Date().getFullYear() + 5, 11, 31)}
        captionLayout="dropdown"
        numberOfMonths={isLargeScreen ? 2 : 1}
        disabled={disabledDays}
        modifiers={{ booked: bookedDates }}
      />

      <div className="flex items-center justify-between px-8 bg-primary-2 text-primary-800 h-18">
        <div className="flex items-baseline gap-6">
          <p className="flex gap-2 items-baseline">
            {cabin.discount > 0 ? (
              <>
                <span className="text-2xl">
                  ${cabin.regularPrice - cabin.discount}
                </span>
                <span className="line-through font-semibold text-primary-700">
                  ${cabin.regularPrice}
                </span>
              </>
            ) : (
              <span className="text-2xl">${cabin.regularPrice}</span>
            )}
            <span className="">/night</span>
          </p>
          {numNights > 0 ? (
            <>
              <p className="bg-accent-600 px-3 py-2 text-2xl">
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p>
                <span className="text-lg font-bold uppercase">Total</span>{" "}
                <span className="text-2xl font-semibold">${cabinPrice}</span>
              </p>
            </>
          ) : null}
        </div>

        {(fromDate || toDate) && (
          <button
            className="border border-primary-3 py-2 px-4 text-sm font-semibold"
            onClick={resetRange}
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
}

export default DateSelector;
