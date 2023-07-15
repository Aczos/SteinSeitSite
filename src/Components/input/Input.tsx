

interface InputProps {
  label?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputCard = ({ label, value, onChange }: InputProps) => {
  return (
    <div className="h-1/6">
      <label className="text-[24px] font-bold  flex  uppercase p-5">{label} </label>
      <input className="bg-primeryColor border-b-2 border-black    mx-auto lg:w-2/3"   type="text" value={value} onChange={onChange} />
    </div>
  );
};

interface TextAreaProps {
  label?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
export const TextAreaCard = ({ label, value, onChange }: TextAreaProps) => {
  return (
    <div>
      <label className="text-1xl font-bold  flex  uppercase p-5">{label}</label>
      <textarea
        className="bg-primeryColor  border-b-2 border-black   mx-auto lg:w-2/3"
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
};