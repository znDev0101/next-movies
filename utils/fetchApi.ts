export async function fetchFromAPI<T>(
  endpoint: string,
): Promise<T | undefined> {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/${endpoint}`);

    if (response.ok) {
      console.log("Promise resolved and HTTP status is successful");
      return response.json();
    } else {
      if (response.status === 404) throw new Error("404, Not found");
      if (response.status === 500)
        throw new Error("500, internal server error");
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }
}
