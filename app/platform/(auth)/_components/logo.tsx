import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = () => {
  return (
    <div className="flex items-center gap-y-4">
      <div className="rounded-full transition">
        <Link href="/" className="flex flex-col items-center">
          <Image src="/logo.svg" alt="Platform" height={40} width={40} />
          <p className={cn("py-4 text-xs", font.className)}>Go back home</p>
        </Link>
      </div>
    </div>
  );
};
