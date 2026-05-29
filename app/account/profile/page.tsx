import { SelectCountry } from "@/app/_components/Reservations/SelectCountry";
import { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";


export const metadata: Metadata = {
  title: "Update profile / The Wild Oasis",
};

function Profile() {
  const countryFlag = "/bg.png";
  const nationality = "portugal";
  return (
    <div className="font-josefineSans pt-28 pb-12 px-10">
      <h2 className="font-semibold text-2xl text-primary-9 mb-4">
        Update your guest profile
      </h2>

      <p className="text-lg mb-8 text-primary-9">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>

      <form className="pt-8 pb-6 px-12 text-lg max-w-3xl mx-auto flex gap-6 flex-col bg-primary-1 rounded-2xl">
        <div className="space-y-2">
          <label className="text-primary-10" htmlFor="fullname">
            Full name
          </label>
          <input
            id="fullname"
            disabled={false}
            className="px-5 py-3 bg-primary-200 bg-white text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400 focus:ring-2 focus:ring-primary-9 focus:outline-none"
          />
        </div>

        <div className="space-y-2">
          <label className="text-primary-10" htmlFor="email">
            Email address
          </label>
          <input
            id="email"
            disabled={false}
            className="px-5 py-3 bg-white text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400 focus:ring-2 focus:ring-primary-9 focus:outline-none"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-primary-10" htmlFor="nationality">
              Where are you from?
            </label>
            <Image
              src={countryFlag}
              alt="Country flag"
              className="rounded-sm"
              width={30}
              height={55}
              style={{ width: "auto", height: "auto" }}
            />
          </div>

          <Suspense
            fallback={
              <div className="flex items-center justify-center text-primary-10 font-josefineSans">
                Loading countries
              </div>
            }
          >
            <SelectCountry
              name="nationality"
              id="nationality"
              className="px-4 py-3 bg-white text-primary-10 w-full shadow-sm rounded-sm focus:ring-2 focus:ring-primary-9 focus:outline-none"
              defaultCountry={nationality}
            />
          </Suspense>
        </div>

        <div className="space-y-2">
          <label className="text-primary-10" htmlFor="nationalID">
            National ID number
          </label>
          <input
            id="nationalID"
            name="nationalID"
            className="px-5 py-3 bg-white text-primary-800 w-full shadow-sm rounded-sm focus:ring-2 focus:ring-primary-9 focus:outline-none"
          />
        </div>

        <div className="flex justify-end items-center gap-6">
          <button
            className="bg-primary-6 hover:bg-primary-7 duration-300 rounded-md px-8 py-2.5 text-white font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300 cursor-pointer"
            type="submit"
          >
            Update profile
          </button>
        </div>
      </form>
    </div>
  );
}

export default Profile;
