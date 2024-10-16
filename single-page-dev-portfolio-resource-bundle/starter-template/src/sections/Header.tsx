export const Header = () => {
  return <div className="flex justify-center items-center fixed top-3 w-full z-10">
    <nav className="flex gap-3 p-3 border border-white/15 rounded-full backdrop-blur text-md">
      <a href="#hero" className=".nav-item">Home</a>
      <a href="#about" className=".nav-item">About</a>
      <a href="#projects" className=".nav-item">Projects</a>
      <a href="#education/experience" className=".nav-item">Education/Experience</a>
      <a href="#testimonials" className=".nav-item">Testimonials</a>
      <a href="#contact" className=".nav-item bg-white text-gray-900 hover:bg-white hover:text-gray-900 rounded">Contact</a>
    </nav>
  </div>;
};
