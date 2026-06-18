// "use client";

// import { LuBookOpen, LuCpu, LuShieldAlert } from "react-icons/lu";

// export default function StepsSection() {
//   const steps = [
//     {
//       id: "01",
//       title: "The Great Gatsby",
//       description: "Explore the classic story of triumph and tragedy in the roaring twenties digital edition.",
//       icon: <LuBookOpen className="h-6 w-6 text-violet-400" />,
//     },
//     {
//       id: "02",
//       title: "Mastering Next.js 16",
//       description: "Dive deep into server components, App Router, and expert modern web development architectures.",
//       icon: <LuCpu className="h-6 w-6 text-violet-400" />,
//     },
//     {
//       id: "03",
//       title: "The Cyber Frontier",
//       description: "Learn essential security practices and secure your applications against modern digital threats.",
//       icon: <LuShieldAlert className="h-6 w-6 text-violet-400" />,
//     },
//   ];

//   return (
//     <section className=" py-16 text-white">
//       <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8 bg-[#0b0b0fd2] py-16">
        
//         {/* SECTION HEADER */}
//         <div className="space-y-3 mb-12">
//           <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
//             Top Featured Books
//           </h2>
//           <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto">
//             Discover our handpicked premium ebooks of the week.
//           </p>
//         </div>

//         {/* 3-COLUMN CARD GRID (DARK LOOK) */}
//         <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
//           {steps.map((step) => (
//             <div
//               key={step.id}
//               className="relative flex flex-col items-center rounded-3xl border border-white/10 bg-[#12121A] p-8 shadow-2xl transition-all duration-300 hover:border-violet-500/50 hover:bg-[#161622]"
//             >
//               {/* NUMBER BADGE */}
//               <span className="absolute right-6 top-6 flex h-6 w-6 items-center justify-center rounded-full bg-violet-600 text-[10px] font-bold text-white shadow-lg shadow-violet-600/30">
//                 {step.id}
//               </span>

//               {/* ICON WRAPPER */}
//               <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white/5 border border-white/10">
//                 {step.icon}
//               </div>

//               {/* CARD TEXT */}
//               <div className="space-y-2">
//                 <h3 className="text-xl font-bold tracking-tight text-white">
//                   {step.title}
//                 </h3>
//                 <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
//                   {step.description}
//                 </p>
//               </div>

//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

"use client";

import { LuBookOpen, LuCpu, LuShieldAlert } from "react-icons/lu";

export default function StepsSection() {
  const steps = [
    {
      id: "01",
      title: "The Great Gatsby",
      description: "Explore the classic story of triumph and tragedy in the roaring twenties digital edition.",
      icon: <LuBookOpen className="h-6 w-6 text-violet-400" />,
    },
    {
      id: "02",
      title: "Mastering Next.js 16",
      description: "Dive deep into server components, App Router, and expert modern web development architectures.",
      icon: <LuCpu className="h-6 w-6 text-violet-400" />,
    },
    {
      id: "03",
      title: "The Cyber Frontier",
      description: "Learn essential security practices and secure your applications against modern digital threats.",
      icon: <LuShieldAlert className="h-6 w-6 text-violet-400" />,
    },
  ];

  return (
    <section className="bg-[#0B0B0F] py-16 text-white overflow-hidden">
      {/* মূল কন্টেইনারটিকে বর্ডার এবং নিখুঁত রাউন্ডেড কোণা দেওয়া হলো */}
      <div className="mx-auto max-w-7xl rounded-3xl border border-white/5 bg-[#0B0B0F]/60 px-6 py-16 backdrop-blur-xl sm:px-8 lg:px-12">
        
        {/* SECTION HEADER */}
        <div className="mb-14 text-center space-y-3">
          <span className="text-xs font-semibold tracking-widest text-violet-500 uppercase">
            ✦ CHOOSE YOUR PATH ✦
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
            Top Featured Books
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto leading-relaxed">
            Discover our handpicked premium ebooks of the week.
          </p>
        </div>

        {/* 3-COLUMN CARD GRID */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.id}
              className="group relative flex flex-col items-center justify-between rounded-2xl border border-white/10 bg-[#12121A]/80 p-8 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-[#161622] hover:shadow-violet-600/5"
            >
              
              {/* NUMBER BADGE (ডিজাইন অনুযায়ী গ্লোয়িং ইফেক্ট) */}
              <span className="absolute right-5 top-5 flex h-6 w-6 items-center justify-center rounded-full bg-violet-600 text-[10px] font-black text-white shadow-md shadow-violet-600/50">
                {step.id}
              </span>

              {/* ICON WRAPPER */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-colors duration-300 group-hover:border-violet-500/30 group-hover:bg-violet-500/10">
                {step.icon}
              </div>

              {/* CARD TEXT */}
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold tracking-wide text-white transition-colors duration-300 group-hover:text-violet-400">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-400 max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

