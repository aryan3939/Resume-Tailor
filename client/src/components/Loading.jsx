function Loading({ message = "Processing..." }) {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
      <p className="text-gray-600">{message}</p>
      <p className="text-xs text-gray-500 mt-2">This may take a few moments</p>
    </div>
  );
}

export default Loading;
