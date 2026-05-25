import { getCountries } from "@/lib/data-service";
import { Country } from "@/types";

interface SelectCountryProps {
  defaultCountry: string;
  name: string;
  id: string;
  className: string;
}

export async function SelectCountry({
  defaultCountry,
  name,
  id,
  className,
}: SelectCountryProps) {
  const countries = await getCountries();
  const flag =
    countries.find((country: Country) => country.name === defaultCountry)
      ?.flag ?? "";

  return (
    <>
      <label className="text-primary-10" htmlFor={id}>
        Country
      </label>
      <select
        name={name}
        id={id}
        aria-label="Select country"
        // Here we use a trick to encode BOTH the country name and the flag into the value. Then we split them up again later in the server action
        defaultValue={`${defaultCountry}%${flag}`}
        className={className}
      >
        <option value="">Select country...</option>
        {countries.map((c: Country) => (
          <option key={c.name} value={`${c.name}%${c.flag}`}>
            {c.name}
          </option>
        ))}
      </select>
    </>
  );
}

export default SelectCountry;
