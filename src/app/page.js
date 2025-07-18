import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col row-start-2 items-center sm:items-start">

          <Image 
          src="/logo_legacy.png"
          width="75"
          height="75"
          alt="logo"
          />
        <ul className="mt-[25px]">
          <li className="text-lg">Applications:</li>
          <li><a href="https://account.re1.pl">manage account <span className="text-red-600">[offline]</span></a></li>
          <li><a href="https://cloud.re1.pl/iot">iot dashboard <span className="text-red-600">[offline]</span></a></li>

          <div className="mb-[25px]"></div>
          <li className="text-lg">Experiments:</li>
          <li><a href="https://iot-echo.re1.pl/">request logging api</a></li>

          <div className="mb-[25px]"></div>
          <li className="text-lg">Services:</li>
          <li><a href="https://jenkins.524531.xyz/login" target="_blank" rel="noopener noreferrer">jenkins <span className="text-green-600"></span></a></li>
          <li><a href="https://status.re1.pl/">statuspage</a></li>

          <div className="mb-[25px]"></div>
          <li className="text-lg">Contact:</li>
          <li><a href="mailto:ntds@re1.pl">ntds@re1.pl</a></li>
          <li><a href="https://github.re1.pl/" target="_blank" rel="noopener noreferrer">github.com/re1-pl</a></li>
          <li><a href="https://github.com/ntds">github.com/ntds</a></li>
            
          <div className="mb-[25px]"></div>
          <li className="text-lg">Private websites:</li>
          <li><a href="https://524531.xyz/" className="text-blue-600" target="_blank">ntds's blog <span className="text-blue-600"></span></a></li>
          <li><a href="https://storage.524531.xyz/s/GKdBCRkDmZGMX5G" target="_blank" className="text-gray-200">adam's file share</a></li>
          <li className="text-xs">&copy; 2025</li>
        </ul>
      </main>
    </div>
  );
}
