import { ChangeEvent, FC } from 'react';

interface InputProps {
  type: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const Input: FC<InputProps> = ({ type, value, onChange, name }) => {
  return (
    <>
      <label htmlFor={name}>{name}:</label>
      <input
        id={name}
        className="text-black px-3 py-1 rounded-md"
        type={type}
        value={value}
        onChange={onChange}
        name={name}
      />
    </>
  );
};

export default Input;
