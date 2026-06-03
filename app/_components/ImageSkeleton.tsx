
function ImageSkeleton() {
  return (
    <div className="relative w-full h-full bg-primary-800 animate-pulse">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-3 border-accent-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
}

export default ImageSkeleton;
