import Image from "next/image";
import loader from "@/assets/loader.gif";

const LoadingPage = () => {
  return (
    <div className="flex-center min-h-screen bg-white">
      <Image src={loader} alt="Loading..." width={150} height={150} priority />
    </div>
  );
};

export default LoadingPage;
