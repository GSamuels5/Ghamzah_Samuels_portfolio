import StarIcon from "@/assets/icons/star.svg"
const words = [
  "Web Development",
  "User Experience",
  "User Interphase",
  "Maintainable",
  "Resilient",
  "Secure",
  "Search Optimized",
  "Performance",
  "Accessible"
]

export const TapeSection = () => {
  return (
  <div className="py-16 lg:py-16">
    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 overflow-x-clip -rotate-3 -mx-1">
      <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
    <div className="flex flex-none gap-4 py-3">{words.map(word =>(
    <div key={word} className="inline-flex items-center gap-4">
      <span className="text-gray-900 uppercase font-extrabold text-sm">{word}</span>
      <StarIcon classname="size-6 text-gray-900 -rotate-12" />

    </div>
  ))} 
  </div>
  </div>
  </div>
  </div>
  );
};
