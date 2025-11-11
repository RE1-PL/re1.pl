export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <ul className="mt-[25px]">
          <li className="text-lg">RE1.PL</li>
          <li></li>
          <li><a href="https://status.re1.pl/" className="no-underline hover:underline text-blue-900">statuspage</a></li>
          <li>email: <a href="mailto:ntds@re1.pl" className="no-underline hover:underline text-blue-900">ntds@re1.pl</a></li>
          <li className="text-xs">&copy; 2025</li>
        </ul>
      </main>
    </div>
  );
}
