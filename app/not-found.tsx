"use client";

import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image
        src="/images/logo.svg"
        alt={`${APP_NAME} logo`}
        width={48}
        height={48}
        priority
      />
      <div className="text-center rounded-lg shadow-md w-1/3 p-6">
        <h1 className="text-3xl font-bold mb-4">Not found</h1>
        <p className="text-destructive">Counld not find requested page</p>
        <Button
          variant="outline"
          className="mt-4"
          onClick={() => router.push("/")}
        >
          Back To Home
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
