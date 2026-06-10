// DateSelector.tsx
"use client";

import { isWithinInterval } from "date-fns";
import { DayPicker, DateRange } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useReservation } from "@/contexts/ReservationContext";

// Helper function to check if dates are already booked
function isAlreadyBooked(range: DateRange, bookedDates: Date[]) {
  return (
    range.from &&
    range.to &&
    bookedDates.some((date) =>
      isWithinInterval(date, { start: range.from!, end: range.to! }),
    )
  );
}

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

  // Calculate number of nights if dates are selected
  const numNights =
    range.from && range.to
      ? Math.ceil(
          (range.to.getTime() - range.from.getTime()) / (1000 * 60 * 60 * 24),
        )
      : 0;

  const regularPrice = cabin.regularPrice;
  const discount = cabin.discount;
  const cabinPrice = numNights * (regularPrice - discount);

  // Disable already booked dates
  const disabledDays = {
    before: new Date(),
    ...(bookedDates.length > 0 && {
      after: undefined,
      daysOfWeek: undefined,
      // Custom matcher for booked dates
      matcher: (date: Date) => {
        return bookedDates.some(
          (bookedDate) => bookedDate.toDateString() === date.toDateString(),
        );
      },
    }),
  };

  return (
    <div className="flex flex-col justify-between">
      <DayPicker
        className="pt-12 place-self-center"
        mode="range"
        onSelect={setRange}
        selected={range}
        min={settings.minBookingLength + 1}
        max={settings.maxBookingLength}
        fromMonth={new Date()}
        fromDate={new Date()}
        toYear={new Date().getFullYear() + 5}
        captionLayout="dropdown"
        numberOfMonths={2}
        disabled={disabledDays}
        modifiers={{
          booked: bookedDates,
        }}
        modifiersStyles={{
          booked: {
            backgroundColor: "#fef08a",
            color: "#854d0e",
            textDecoration: "line-through",
          },
        }}
      />

      <div className="flex items-center justify-between px-8 bg-accent-500 text-primary-800 h-18">
        <div className="flex items-baseline gap-6">
          <p className="flex gap-2 items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-2xl">${regularPrice - discount}</span>
                <span className="line-through font-semibold text-primary-700">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-2xl">${regularPrice}</span>
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

        {range.from || range.to ? (
          <button
            className="border border-primary-800 py-2 px-4 text-sm font-semibold"
            onClick={resetRange}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
