import { InfinitySpin } from "react-loader-spinner";
export function Loader() {
  return (
    <div className="fixed grid inset-0 pt-80 justify-items-center">
      <InfinitySpin width="200" color="#2596be" />
    </div>
  );
}
