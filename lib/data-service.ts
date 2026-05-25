/////////////
// GET

export async function getCabin(id: string) {
  console.log(id);
}

export async function getCabinPrice(id: string) {
  console.log(id);
}

export const getCabins = async function () {};

export async function getGuest(email: string) {
  console.log(email);
  
}
export async function getBooking(id: string) {
  console.log(id);
}

export async function getBookings(guestId: string) {
  console.log(guestId);
  
}

export async function getBookedDatesByCabinId(cabinId: string) {
  console.log(cabinId);
  
}

export async function getCountries() {
  try {
    const res = await fetch(
      "https://restcountries.com/v2/all?fields=name,flag",
    );
    const countries = await res.json();
    return countries;
  } catch {
    throw new Error("Could not fetch countries");
  }
}
// CREATE
export async function createGuest(newGuest: string) {
  console.log(newGuest);
  
}

export async function createBooking(newBooking: string) {
  console.log(newBooking);
  
}

// UPDATE
export async function updateBooking(id: string, updatedFields: string) {
  console.log(id, updatedFields);
}

// DELETE
export async function deleteBooking(id: string) {
  console.log(id);
  
}