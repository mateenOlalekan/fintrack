import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-full  pb-4">
      <nav className="flex flex-col gap-2">
        <Link href="/dashboard" className="p-3 text-black hover:bg-[#EAF0F0] hover:text-[#437D8E] font-normal rounded-full">
          Dashboard
        </Link>
        <Link href="/transactions" className="p-3 text-black hover:bg-[#EAF0F0] hover:text-[#437D8E] font-normal rounded-full">
          Transactions
        </Link>
        <Link href="/reports" className="p-3 text-black hover:bg-[#EAF0F0] hover:text-[#437D8E] font-normal rounded-full">
          Reports
        </Link>
        <Link href="/settings" className="p-3 text-black hover:bg-[#EAF0F0] hover:text-[#437D8E] font-normal rounded-full">
          Settings
        </Link>
      </nav>
    </aside>
  );
}
