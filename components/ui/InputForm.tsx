import { menuItem } from "../@types/menuItem.t";
import useGetBrandColor from "../hooks/useGetBrandColor";

const InputItem = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

InputItem.WithLink = ({
  menuItem,
  onChange,
}: {
  menuItem: menuItem;
  onChange: (id: string, field: string, value: string) => void;
}) => {
  const brandColor = useGetBrandColor();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange(menuItem.id, name, value);
  };

  return (
    <div className="isolate -space-y-px rounded-md shadow-sm flex-1">
      <div
        className={`relative rounded-md rounded-b-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-[${brandColor}]`}
      >
        <label
          htmlFor={`title-${menuItem.id}`}
          className="block text-xs font-medium text-gray-500"
        >
          Title
        </label>
        <input
          id={`title-${menuItem.id}`}
          name="name"
          type="text"
          value={menuItem.name}
          onChange={handleChange}
          placeholder="Website builder"
          className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
        />
      </div>
      <div
        className={`relative rounded-md rounded-t-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-[${brandColor}]`}
      >
        <label
          htmlFor={`link-${menuItem.id}`}
          className="block text-xs font-medium text-gray-500"
        >
          Link
        </label>
        <input
          id={`link-${menuItem.id}`}
          name="href"
          type="text"
          value={menuItem.href || ""}
          onChange={handleChange}
          placeholder="Awesome website to build your own website"
          className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

export default InputItem;
