import { addProductAction } from '../../../actions/addPost';
import AddButton from './AddButton';

interface Datatype {
  name: string;
  id: number;
  price: number;
}

const FormTest = async () => {
  const res = await fetch(
    'https://64afd584c60b8f941af4b546.mockapi.io/testing/new-features/test_data',
    {
      cache: 'no-cache',
      next: { tags: ['products'] },
    }
  );

  const data: Datatype[] = await res.json();

  return (
    <div className="w-full h-screen bg-slate-100 text-black">
      <div className="w-1/2 m-auto">
        <h1 className="mb-10">Welcome</h1>

        {/*// ! Functions  can't be send to component. Function has to have 'use server'  */}
        <form action={addProductAction} className=" grid gap-3 ">
          <div className="grid gap-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Product name"
              className="border-2 border-gray-300 rounded-md text-black p-2"
            />
          </div>
          <AddButton />
          <div className="grid gap-2">
            <label htmlFor="name">Product price</label>
            <input
              type="text"
              name="price"
              placeholder="Product price"
              className="border-2 border-gray-300 rounded-md text-black p-2"
            />
          </div>
          <button className="bg-green-300 rounded-md py-2">Submit</button>
        </form>

        {data && (
          <div className="flex my-5 flex-wrap gap-3">
            {data?.reverse().map((product: Datatype, i: number) => (
              <div key={i} className="bg-gray-300 grid gap-2  p-3">
                <span>{product.name}</span>
                <span>$ {product.price}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FormTest;
