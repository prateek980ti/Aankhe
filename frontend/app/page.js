import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-4 justify-center items-center text-white h-[44vh] px-5 md:px-0">
        <div className="font-bold md:text-5xl text-3xl flex gap-1 items-center justify-center">Aankhe<span><img className="w-16" src="images/eye.gif" alt="" /></span></div>
        <p className="text-center md:text-base">A computer vision-based eye care system that monitors eye strain and provides real-time alerts.
        </p>
        <div>
          <Link href={"/start"}>
            <button type="button" className="text-white bg-gradient-to-r from-red-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Now</button>
          </Link>

          <Link href={"/about"}>
            <button type="button" className="text-white bg-gradient-to-r from-red-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
          </Link>
        </div>
      </div>
      {/* white border */}
      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto py-7 px-10">
        <h2 className="text-3xl font-bold text-center mb-7">"Protect your eyes with real-time alerts!"</h2>

        {/* Item group */}
        <div className="flex gap-5 justify-around">
          {/* Items */}
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="rounded-full p-1 bg-red-600 text-black w-[100px] h-[100px] object-cover" src="images/strainedeye.jpg" alt="" />
            <p className="font-bold text-center">Monitor Your Eye Health</p>
            <p className="text-center">Keep your eyes healthy with real-time strain detection.</p>
          </div>

          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="rounded-full p-1 bg-red-600 text-black w-[100px] h-[100px] object-cover" src="images/man.png" alt="" />
            <p className="font-bold text-center">Stay Alert, Stay Fresh</p>
            <p className="text-center">Get instant alerts for prolonged screen time and fatigue.</p>
          </div>

          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="rounded-full p-1 bg-red-600 text-black w-[100px] h-[100px] object-cover" src="images/blink.gif" alt="" />
            <p className="font-bold text-center">Don't Forget to Blink!</p>
            <p className="text-center">Smart reminders to blink and prevent digital eye strain.</p>
          </div>
        </div>

      </div>
      {/* item section 2 */}
      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto py-7 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold mb-7 text-center">Learn more about us</h2>

        {/* Item group */}
        <iframe className="w-auto md:w-[560px] md:h-[315px]" src="demo.mp4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>

    </>
  );
}
