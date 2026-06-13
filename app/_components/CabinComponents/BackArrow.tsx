"use client";

import { IoReturnUpBackOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

function BackArrow() {
  const router = useRouter();
  function goBack() {
    router.back();
  }
  return (
    <div className="bg-primary-1 absolute text-4xl -top-4.5 p-2 -left-5 z-40 cursor-pointer rounded-full drop-shadow-md hover:scale-105 transition-transform">
      <IoReturnUpBackOutline
        className=" fill-primary-8 hover:fill-primary-7 "
        onClick={() => goBack()}
      />
    </div>
  );
}

export default BackArrow;
