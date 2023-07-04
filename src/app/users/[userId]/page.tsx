import { getAllUsers } from '@/app/lib';
import getUser from '@/app/lib/getUser';
import getUserPosts from '@/app/lib/getUserPosts';
import { Metadata } from 'next';
import { FC, Suspense } from 'react';
import UserPosts from './components/UserPosts';
import { notFound } from 'next/navigation'

// ! folder name must be param that will be used

type Params = {
  params: {
    userId: string;
  };
};

// ? Dynamic metada ⤵
export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId);
  const user = await userData;

  if (!user?.name) {
    return {
      title: 'User not found',
    };
  }
  // ! this is metadata for not found user

  return {
    title: user.name,
    description: `This is page of ${user.name}`,
  };
  // * this returned object will be applied to head and meta tags
}

const UserPage: FC<Params> = async ({ params: { userId } }) => {
  // * params plays the role of useParams that we use in react and params must be equal to folder name

  const userData: Promise<User> = getUser(userId);
  const userPostsData: Promise<Post[]> = getUserPosts(userId);

  // const [user,userPosts] = await Promise.all([userData,userPostsData]);
  // ? This is called paralel request

  const user = await userData;

  if(!user?.name) return notFound()


  return (
    <div>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<h2>Loading...</h2>}>
        <UserPosts promise={userPostsData} />
        {/* // * we send promise instead of fetched data. because we want incrementally send request and reduce unnecessary requests. so we need to send request when we route to user  */}
      </Suspense>
    </div>
  );
};

export default UserPage;

export const generateStaticParams = async () => {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;

  return users.map(user => ({
    userId: user.id.toString(),
  }));
  // in our User id is number that's why we return by map as string
};
