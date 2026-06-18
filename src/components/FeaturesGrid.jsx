// "use client";

// import { 
//   LuSearch, 
//   LuTrendingUp, 
//   LuAward, 
//   LuBookmark, 
//   LuZap, 
//   LuFileText, 
//   LuLayers, 
//   LuCompass 
// } from "react-icons/lu";

// export default function FeaturesGrid() {
//   // ৪টি কলাম ও ২টি রো-এর মোট ৮টি প্রিমিয়াম ই-বুক ফিচার
//   const features = [
//     {
//       title: "Smart Search",
//       description: "Find your ideal book with advanced semantic filters.",
//       icon: <LuSearch className="h-5 w-5 text-violet-400" />,
//     },
//     {
//       title: "Reading Insights",
//       description: "Get real reading analytics to track your weekly progress.",
//       icon: <LuTrendingUp className="h-5 w-5 text-violet-400" />,
//     },
//     {
//       title: "Top Publishers",
//       description: "Access premium releases directly from world-class authors.",
//       icon: <LuAward className="h-5 w-5 text-violet-400" />,
//     },
//     {
//       title: "Saved Books",
//       description: "Manage bookmarks & favorites directly on your dashboard.",
//       icon: <LuBookmark className="h-5 w-5 text-violet-400" />,
//     },
//     {
//       title: "One-Click Download",
//       description: "Simplify your offline reading with seamless one-click downloads.",
//       icon: <LuZap className="h-5 w-5 text-violet-400" />,
//     },
//     {
//       title: "Interactive Notes",
//       description: "Create and export professional annotations and summaries.",
//       icon: <LuFileText className="h-5 w-5 text-violet-400" />,
//     },
//     {
//       title: "Genre Matching",
//       description: "Discover books that match your specific taste and skill level.",
//       icon: <LuLayers className="h-5 w-5 text-violet-400" />,
//     },
//     {
//       title: "Career Resources",
//       description: "Boost your professional loop with curated technical guides.",
//       icon: <LuCompass className="h-5 w-5 text-violet-400" />,
//     },
//   ];

//   return (
//     <section className="bg-[#0B0B0F] py-20 text-white">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
//         {/* HEADER SECTION (ডিজাইনের সেন্ট্রাল টেক্সট) */}
//         <div className="mb-16 text-center space-y-3">
//           <span className="text-xs font-semibold tracking-widest text-violet-500 uppercase flex items-center justify-center gap-2">
//             ▪ FEATURES BOOK ▪
//           </span>
//           <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white">
//             Everything you need <br /> to succeed
//           </h2>
//         </div>

//         {/* 4-COLUMN GRID LAYOUT (হুবহু ডিজাইনের মতো) */}
//         <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//           {features.map((feature, index) => (
//             <div 
//               key={index} 
//               className="group flex gap-4 transition-all duration-300"
//             >
//               {/* ICON BLOCK (ডিজাইনের সেই ছোট ডার্ক স্কয়ার বক্সটি) */}
//               <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/5 bg-[#12121A] transition-colors duration-300 group-hover:border-violet-500/30 group-hover:bg-[#161622] shadow-md shadow-black/50">
//                 {feature.icon}
//               </div>

//               {/* TEXT CONTENT */}
//               <div className="space-y-1">
//                 <h3 className="text-base font-bold tracking-wide text-white transition-colors duration-300 group-hover:text-violet-400">
//                   {feature.title}
//                 </h3>
//                 <p className="text-sm leading-relaxed text-gray-400 max-w-[220px]">
//                   {feature.description}
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

import { 
  LuSearch, 
  LuTrendingUp, 
  LuAward, 
  LuBookmark, 
  LuZap, 
  LuFileText, 
  LuLayers, 
  LuCompass 
} from "react-icons/lu";

export default function FeaturesGrid() {
  const features = [
    {
      title: "Smart Search",
      description: "Find your ideal book with advanced semantic filters.",
      icon: <LuSearch className="h-5 w-5 text-violet-400" />,
    },
    {
      title: "Reading Insights",
      description: "Get real reading analytics to track your weekly progress.",
      icon: <LuTrendingUp className="h-5 w-5 text-violet-400" />,
    },
    {
      title: "Top Publishers",
      description: "Access premium releases directly from world-class authors.",
      icon: <LuAward className="h-5 w-5 text-violet-400" />,
    },
    {
      title: "Saved Books",
      description: "Manage bookmarks & favorites directly on your dashboard.",
      icon: <LuBookmark className="h-5 w-5 text-violet-400" />,
    },
    {
      title: "One-Click Download",
      description: "Simplify your offline reading with seamless one-click downloads.",
      icon: <LuZap className="h-5 w-5 text-violet-400" />,
    },
    {
      title: "Interactive Notes",
      description: "Create and export professional annotations and summaries.",
      icon: <LuFileText className="h-5 w-5 text-violet-400" />,
    },
    {
      title: "Genre Matching",
      description: "Discover books that match your specific taste and skill level.",
      icon: <LuLayers className="h-5 w-5 text-violet-400" />,
    },
    {
      title: "Career Resources",
      description: "Boost your professional loop with curated technical guides.",
      icon: <LuCompass className="h-5 w-5 text-violet-400" />,
    },
  ];

  return (
    <section className="bg-[#0B0B0F] py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION */}
        <div className="mb-16 text-center space-y-3">
          <span className="text-xs font-semibold tracking-widest text-violet-500 uppercase flex items-center justify-center gap-2">
            ▪ FEATURES BOOK ▪
          </span>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
            Everything you need <br /> to succeed
          </h2>
        </div>

        {/* 4-COLUMN GRID LAYOUT */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group flex gap-4 transition-all duration-300"
            >
              {/* ICON BLOCK - হোভার গ্লো ইফেক্ট বাড়ানো হয়েছে */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/5 bg-[#12121A] transition-all duration-300 group-hover:border-violet-500/50 group-hover:bg-[#161622] group-hover:shadow-lg group-hover:shadow-violet-500/5 shadow-md shadow-black/50">
                {feature.icon}
              </div>

              {/* TEXT CONTENT */}
              <div className="space-y-1">
                <h3 className="text-base font-bold tracking-wide text-white transition-colors duration-300 group-hover:text-violet-400">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-400 max-w-[220px]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  ); 
}