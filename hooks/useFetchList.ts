export default async function useFetchList(
  typeMedia: string,
  type: string,
  page: string,
): Promise<any> {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/${typeMedia}/${type}?api_key=${process.env.API_KEY}&page=${page}`,
    );

    const { results } = await response.json();

    return results;
  } catch (error) {
    console.log(error);
  }
}
