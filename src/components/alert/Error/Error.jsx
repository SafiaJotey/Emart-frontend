const Error = ({ children }) => {
  return (
    <div
      className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
      role="alert"
    >
      <p>{children}</p>
    </div>
  );
};

export default Error;
