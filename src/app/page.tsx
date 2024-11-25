import TableProducts from "@/components/table_products";
import Link from "next/link";


export default async function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        
         <h1 className="text-blue-500 font-bold text-2xl">Product List</h1>
         <Link href="/product/add">Add</Link>

         <TableProducts/>
      </main>
  
    </div>
  );
}
