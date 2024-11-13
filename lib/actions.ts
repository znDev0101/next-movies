"use server";

export async function searchMovies(formData: FormData): Promise<void> {
  console.log(formData.get("searchMovie"));
}
