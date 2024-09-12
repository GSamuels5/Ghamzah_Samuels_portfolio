import StarIcon from "@/assets/icons/star.svg"
const words = [
  "Web Development",
  "User Experience",
  "User Interphase",
  "Maintainable",
  "Resilient",
  "Secure",
  "Search Optimized"
]

export const TapeSection = () => {
  return (
  <div className="py-16">
    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 overflow-x-clip transform-left-to-right">
      <div className="flex">
    <div className="flex flex-none gap-4">{words.map(word =>(
    <div key={word} className="inline-flex items-center gap-4">
      <span className="text-gray-900 uppercase font-extrabold text-sm">{word}</span>
      <StarIcon classname="size-6" />

    </div>
  ))} 
  </div>
  </div>
  </div>
  </div>
  );
};
