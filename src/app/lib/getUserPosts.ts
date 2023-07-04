export default async function getUserPosts(userId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    {
      // cache: 'force-cache',
      // * this is default and means this data is cached and no need to fetch again and again
      // ! it must be avoided when data is consttantly changing

      //  cache: 'no-store'
      // ? this is for not caching data and always dynamic data

      next: { revalidate: 60 },
      // * refresh data to check if there is an update for each 60 seconds can be applied to ssg || ssr
    }
  );

  if (!res.ok) return undefined;

  return res.json();
}
