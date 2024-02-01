export function ResetBtn({ onClick }) {
  return (
    <button
      type="button"
      className="cursor-pointer mt-3  border border-gray-500 py-1 px-3 rounded"
      onClick={onClick}
    >
      Reset
    </button>
  );
}
