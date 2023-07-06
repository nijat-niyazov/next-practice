import { Metadata } from 'next';
import Link from 'next/link';
import { FC } from 'react';
import getAllUsers from '../lib/getAllUsers';

export const metadata: Metadata = {
  title: 'Users',
};

const UsersPage: FC = async () => {
  // * because it's server component and that's why we can add async
  const usersData: Promise<User[]> = getAllUsers();

  const users = await usersData;

  // ! when we hover over element it send request for info and we can save time for waiting request data

  return (
    <section>
      <h2>
        <Link href="/">Back to Home</Link>
      </h2>
      <br />
      {users.map(user => (
        <p className="bg-yellow-700 p-2 rounded-md m-2 " key={user.id}>
          <Link
            // prefetch={false}
            // * prefetch is used for fetch data in advance and it's default is true. True is generally used for CSR
            // replace={true}
            // * if replace is true there is no go back to prev page
            // scroll={false}
            // * Scroll to the top of the page after a navigation. Defaults to true

            href={`/users/${user.id}`}
          >
            {user.name}
          </Link>
        </p>
      ))}
    </section>
  );
};

export default UsersPage;
