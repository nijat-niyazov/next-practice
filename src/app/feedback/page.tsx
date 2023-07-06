'use client';
import axios from 'axios';
import { ChangeEvent, FormEvent, useState } from 'react';
import Input from '../components/Input';
import { useRouter } from 'next/navigation';

const initialState = {
  name: '',
  email: '',
  message: '',
};

const Feedback = () => {
  const [formData, setFormData] = useState(initialState);
  const router = useRouter()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log();

    setFormData(prevData => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(JSON.stringify(formData));

    const res = await axios.post(
      'http://localhost:3000/api/feedback',
      formData
    );

    console.log(res.data);

    router.push(`/thank-you`)
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-3 w-1/2 m-auto py-20">
      {Object.keys(formData).map((field: string, i: number) => {
        return (
          <Input
            key={i}
            name={field}
            type={field === 'email' ? 'email' : 'text'}
            value={formData[field as keyof typeof formData]}
            onChange={handleChange}
          />
        );
      })}
      <button
        disabled={Object.values(formData).some(value => value === '')}
        className="bg-green-700 hover:bg-green-500 mr-auto p-2 disabled:bg-green-600 disabled:opacity-50  font-extralight inline-block rounded-md"
      >
        Submit
      </button>
    </form>
  );
};

export default Feedback;
