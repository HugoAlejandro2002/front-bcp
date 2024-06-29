const Teaser = ({ title, children }) => {
  return (
    <div className="wrapper bg-white p-6 shadow-md rounded-lg">
      <h2 className="title text-2xl mb-4 text-primary-dark bg-primary p-2 rounded">{title}</h2>
      <div className="items-wrapper">
        <div className="list-wrapper flex flex-wrap">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Teaser;