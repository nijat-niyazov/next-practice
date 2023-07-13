'use server';

import axios from 'axios';
import { revalidateTag } from 'next/cache';

const addProductAction = async (e: FormData) => {
  console.log(e);
  const name = e.get('name');
  const price = e.get('price');
  if (!name || !price) return;
  const newData = {
    name,
    price,
  };

  await axios.post(
    'https://64afd584c60b8f941af4b546.mockapi.io/testing/new-features/test_data',
    newData
  );
  revalidateTag('products');
};

export { addProductAction };
