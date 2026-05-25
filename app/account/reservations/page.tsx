import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resevations / The Wild Oasis",
};

function Reservations() {
  const bookings: any[] = [];
  return (
    <div className="pt-28 px-9 font-josefineSans text-primary-10 min-h-screen">
      <h2 className="text-2xl mb-7">Your reservations</h2>
      {bookings.length === 0 ? (
        <p>
          You have no reservation yet. Check out our{" "}
          <Link className="underline" href="/cabins">
            luxury cabins &rarr;
          </Link>
        </p>
      ) : (
        <ul className="space-y-6">
          {bookings.map((booking) => (
            <li key={booking.id}></li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Reservations;
