const Success = ({ children }) => {
  return (
    <div
      className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4"
      role="alert"
    >
      <p>{children}</p>
    </div>
  );
};

export default Success;
