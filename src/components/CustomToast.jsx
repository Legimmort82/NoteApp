const CustomToast = ({ text, color,isDelete,onClick }) => {
  return (
    <div
      className="px-10 py-6 bg-white rounded-lg  border-red-500"
      style={{ borderLeft: `8px solid ${color}`, borderColor: color }}
    >
      <p className="text-lg font-semibold">{text}</p>
      {isDelete && (
        <div className="flex justify-between mt-3">
          <button className="px-4 py-2 rounded-lg bg-green-600 text-white" onClick={onClick}>
            Yes
          </button>
          <button className="px-4 py-2 rounded-lg bg-red-600 text-white">
            No
          </button>
        </div>
      )}
    </div>
  );
};

export default CustomToast;
