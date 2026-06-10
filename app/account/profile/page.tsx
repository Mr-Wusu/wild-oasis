import SelectCountry from "@/app/_components/Reservations/SelectCountry";
import UpdateProfileForm from "@/app/_components/UpdateProfileForm";
import { Metadata } from "next";
import { Suspense } from "react";



export const metadata: Metadata = {
  title: "Update profile / The Wild Oasis",
};

function Profile() {
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
      <UpdateProfileForm>
        
       <Suspense
         fallback={
           <div className="flex items-center justify-center text-primary-10 font-josefineSans">
             Loading countries
           </div>
         }
       ><SelectCountry
          name="nationality"
          id="nationality"
          className="px-4 py-3 bg-white text-primary-10 w-full shadow-sm rounded-sm focus:ring-2 focus:ring-primary-9 focus:outline-none"
          defaultCountry={nationality}
        />
       </Suspense>
      </UpdateProfileForm>
    </div>
  );
}

export default Profile;
