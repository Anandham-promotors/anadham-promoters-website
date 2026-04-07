function AboutCompanySection() {
  return (
    <div className="p-8 lg:p-16 w-full lg:w-1/2 lg:border-r border-black">
      <div className="max-w-xl py-6 lg:py-11">
        <p className="font-bold mb-3">ABOUT OUR COMPANY</p>
        <h2 className="mb-6">We show the growth</h2>
        <span>
          Anandham Promoters and Developers is Chennai's first data led land promoter...
        </span>
      </div>

      <button className="contact-button uppercase flex items-center gap-3 group">
        <span className="px-2">Contact us</span>
        <FaArrowRight className="text-xl transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </div>
  );
}