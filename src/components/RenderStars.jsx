const RenderStars = ({ rating }) => {
  return (
    <div className="flex justify-center">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-yellow-500' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975a1 1 0 00.95.69h4.181c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.363 1.118l1.286 3.974c.3.921-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.84-.197-1.54-1.118l1.286-3.974a1 1 0 00-.363-1.118L2.464 9.402c-.783-.57-.38-1.81.588-1.81h4.181a1 1 0 00.95-.69l1.286-3.975z" />
        </svg>
      ))}
    </div>
  );
};

export default RenderStars;
