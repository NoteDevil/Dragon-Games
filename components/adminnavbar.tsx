import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

function AdminNavBar() {
  return (
    <div className="flex min-w-[100px] h-screen">
      <div className="w-32 max-h-screen">
        <div className="flex justify-center">
          <Link href="/">
            <Image src="/logo.webp" alt="logo" width={100} height={100} />
          </Link>
        </div>
        <div className="flex flex-col justify-center max-h-80">
          <Button>
            <Link href="/adminpanel/server">Сервера</Link>
          </Button>
          <Button>Ранг</Button>
          <Button>Logout</Button>
          <Button>Logout</Button>
        </div>
      </div>
    </div>
  );
}

export default AdminNavBar;
