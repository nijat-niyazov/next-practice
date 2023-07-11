'use client';

// import axios from 'axios';
// import { useSearchParams } from 'next/navigation';
// import { ChangeEvent, useEffect, useState } from 'react';

const SearchUsers = () => {
  // const [search, setSearch] = useState('');
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  //     console.log(res);

  //     setPosts(res.data);
  //   };
  //   fetchData();
  // }, []);

  // const searchParams = useSearchParams();

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const value = e.target.value.trim();

  //   setSearch(value);
  // };

  return (
    <div className="w-1/2 m-auto">
      {/*<div className="grid gap-2">
         <label htmlFor="">Search Here</label>
        <input
          type="text"
          value={search}
          onChange={handleChange}
          placeholder="Search"
          className="rounded-md p-2 text-black"
        />
      </div>

      <ul className="grid gap-2">
        {posts?.map(post => (
          <li
            className="bg-amber-800 p-2 rounded-md inline-block mb-2"
            key={post.id}
          >
            <span>{post?.title}</span>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default SearchUsers;
