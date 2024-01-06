import { FormEvent } from "react";

interface TextProps {
  defaultValue?: string | number;
  label?: string;
  name?: string;
  type?: "tel" | "text";
  placeholder?: string;
  children?: React.ReactNode;
  className?: string;
}
interface TelProps extends TextProps {
  pattern?: string;
  required: boolean;
}
interface EmailProps extends TelProps {}

interface NumberProps extends TextProps {
  disabled?: boolean;
}

interface TextareaProps extends TextProps {
  rows?: number;
}

interface ContainerProps extends TextProps {
  className?: string;
}

interface SelectProps extends TextProps {
  key?: number | string;
  className?: string;
  onChange?: (event: FormEvent<HTMLSelectElement>) => void;
  options?: string[] | any;
}

export function Text({ label, defaultValue, name, placeholder }: TextProps) {
  return (
    <>
      <label htmlFor={name} className="block text-sm font-medium text-gray-400">
        {label}
      </label>
      <input
        autoComplete="on"
        type="text"
        placeholder={placeholder}
        name={name}
        id={name}
        defaultValue={defaultValue}
        className="border outline-none border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
      />
    </>
  );
}
export function Tel({ label, name, placeholder, pattern }: TelProps) {
  return (
    <>
      <label htmlFor={name} className="block text-sm font-medium text-gray-400">
        {label}
      </label>
      <input
        autoComplete="on"
        type={"tel"}
        pattern={pattern}
        required
        placeholder={placeholder}
        name={name}
        id={name}
        className="border outline-none border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
      />
    </>
  );
}
export function Email({ label, name, placeholder, pattern }: EmailProps) {
  return (
    <>
      <label htmlFor={name} className="block text-sm font-medium text-gray-400">
        {label}
      </label>
      <input
        autoComplete="on"
        type={"email"}
        pattern={pattern}
        required
        placeholder={placeholder}
        name={name}
        id={name}
        className="border outline-none border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
      />
    </>
  );
}

export function Number({ label, name, disabled, placeholder }: NumberProps) {
  return (
    <>
      <label htmlFor={name} className="block text-sm font-medium text-gray-400">
        {label}
      </label>
      <input
        disabled={disabled}
        type="number"
        placeholder={placeholder}
        name={name}
        id={name}
        className="border outline-none border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
      />
    </>
  );
}
export function Textarea({ rows, label, name, placeholder }: TextareaProps) {
  return (
    <>
      <label htmlFor={name} className="block text-sm font-medium text-gray-400">
        {label}
      </label>
      <textarea
        rows={rows}
        placeholder={placeholder}
        name={name}
        id={name}
        className="border outline-none border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
      />
    </>
  );
}

export function Select({ label, name, onChange, options, key }: SelectProps) {
  return (
    <>
      <label htmlFor={name} className="block text-sm font-medium text-gray-400">
        {label}
      </label>
      <select
        key={key}
        onChange={onChange}
        name={name}
        id={name}
        className=" border outline-none border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
      >
        {options.map((option: string[] | any) => (
          <>
            <option>{option}</option>
          </>
        ))}
      </select>
    </>
  );
}

export function Container({ className, children }: ContainerProps) {
  return (
    <>
      <div className={`${className}`}>{children}</div>
    </>
  );
}
