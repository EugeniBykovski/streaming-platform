import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-x-4 hover:opacity-75 transition">
        <div className="p-1 mr-10 shrink-0 lg:mr-0 lg:shrink">
          <Image src="/logo.svg" alt="Platform" height={32} width={32} />
        </div>
        <div className={cn("hidden lg:block", font.className)}>
          <p className="uppercase font-semibold text-sm">Streming platform</p>
          <p className=" text-xs text-muted-foreground">Let&apos;s play</p>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
