import useGetBrandColor from "../hooks/useGetBrandColor";

const ClearLocalStorage = () => {
  //clear local storage from all items
  const handleLocalStorageClear = () => {
    localStorage.clear();
    window.location.reload();
  };
  const brandColor = useGetBrandColor();
  return (
    <button
      type="button"
      className={`rounded-full ml-5 px-4 bg-[${brandColor}] p-1.5 text-white shadow-sm text-xs hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[${brandColor}]`}
      onClick={handleLocalStorageClear}
    >
      Reset local storage
    </button>
  );
};

export default ClearLocalStorage;
