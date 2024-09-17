export const SectionHeader = ({
 eyebrow,
 description   
}:{
    eyebrow:string;
    description:string;
    

}) => {
return (
  <>
        <div className="flex justify-center">

        <h1 className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-4xl">{eyebrow}</h1>
        </div>
        <p className="font-serif text-3xl md:text-5xl text-center mt-6 pb-2">{description}</p>
        
        </>
);
};