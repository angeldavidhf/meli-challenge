interface IInput {
  type: string;
  name: string;
  id?: string;
  placeholder: string;
  onChange(e: any): void;
  value: string;
}

export default function Input({ type, name, id, placeholder, onChange, value }: IInput) {

  return (
    <input type={type} name={name} id={id} placeholder={placeholder} value={value} onChange={onChange} />
  );
}