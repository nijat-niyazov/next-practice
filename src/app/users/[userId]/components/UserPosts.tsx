import { FC } from 'react';

type Props = {
  promise: Promise<Post[]>;
};

const UserPosts: FC<Props> = async ({ promise }) => {
  // ! if file name is not page.tsx it means that it's not available to the public
  const posts = await promise;

  return (
    <div className="grid gap-10">
      {posts.map(post => (
        <article className="grid gap-1" key={post.id}>
          <h2 className='font-bold'>{post.title}</h2>
          <p className='italic text-sm'>{post.body}</p>
        </article>
      ))}
    </div>
  );
};

export default UserPosts;
