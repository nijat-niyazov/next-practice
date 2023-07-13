'use client';

import { useTransition } from 'react';
import { addProductAction } from '../../../actions/addPost';

const AddButton = () => {
  const [isPending, startTransition] = useTransition();

  const formData = new FormData();
  formData.append('name', 'Mac');
  formData.append('price', '1199');

  return (
    <button
    disabled={isPending}
      onClick={() => startTransition(() => addProductAction(formData))}
      className="bg-green-400 rounded-md p-2 disabled:opacity-50"
    >
      {isPending ? 'Adding...' : 'Add Mac'}
    </button>
  );
};

export default AddButton;
