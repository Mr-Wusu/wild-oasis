"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface ButtonProps {
  filter: string;
  activeFilter: string;
  handleFilter: (filter: string) => void;
  children: React.ReactNode;
}

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = searchParams.get("capacity") ?? "all";

  function handleFilter(filter: string) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }
  return (
    <div className="ml-auto flex space-x-0.5 text-white w-fit items-center justify-center mb-4">
      <Button
        filter="all"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        all cabins
      </Button>
      <Button
        filter="small"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        1-2 guests
      </Button>
      <Button
        filter="medium"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        3-5 guests
      </Button>
      <Button
        filter="large"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        6&mdash;12 guests
      </Button>
    </div>
  );
}

function Button({ filter, handleFilter, activeFilter, children }: ButtonProps) {
  return (
    <button
      className={`hover:bg-primary-4  px-1 transition-colors duration-300 h-full ease-out py-0.5 cursor-pointer text-sm ${activeFilter === filter ? " bg-primary-5" : "bg-primary-3 text-primary-9"}`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}

export default Filter;
