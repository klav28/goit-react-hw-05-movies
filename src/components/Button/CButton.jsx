export const CButton = ({ bgcolor, children }) => {
  return (
    <div
      className={`${bgcolor} h-full w-full cursor-pointer p-2 text-center text-black`}
    >
      {children}
    </div>
  );
};
