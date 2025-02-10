import legallyImg from "../assets/legally.png";

const Navbar = () => {
  return (
    <div className="bg-linear-65 from-orange-500 to-yellow-200 pb-[3px] shadow-xl shadow-black-500/50">
      <div className="flex justify-between align-center p-4 bg-white">
        <img src={legallyImg} alt="" className="h-10 w-50 object-cover" />
        <div className="flex gap-5">
          <button className="box-border px-5 py-2 rounded-md font-medium inset-ring-2 inset-ring-yellow-500 cursor-pointer hover:bg-linear-65 from-orange-500 to-yellow-200 hover:border-transparent">
            Contact
          </button>
          <button className="bg-linear-65 from-orange-500 to-yellow-200 px-5 py-2 rounded-md font-medium text-black cursor-pointer transition-all duration-300 hover:from-orange-400 hover:to-yellow-200">
            Book demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
