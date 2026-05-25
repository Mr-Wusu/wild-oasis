import { ClipLoader } from "react-spinners";
function loading() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center text-primary-10">
      <ClipLoader
        color="#D92D2C"
        size={40}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default loading;
