const Button = ({ label, iconURL }) => {
  return (
    <button className="flex justify-center items-center gap-2 bg-coral-red border-coral-red text-white text-lg px-7 py-4 rounded-full font-montserrat leading-none ">
      {label}
      {iconURL && <img src={iconURL} alt={label} className="w-5 h-5 ml-2" />}
    </button>
  );
};

export default Button;
