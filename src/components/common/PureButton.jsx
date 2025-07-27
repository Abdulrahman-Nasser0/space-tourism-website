// Reusable button
const PureButton = ({
  text = "BUTTON",
  onClick,
  isActive = false,
  variant = "navigation", //"navigation", "tab", "secondary", etc.
  className = "",
}) => {
  const baseStyles = `
    font-barlow-condensed uppercase cursor-pointer 
    transition-all duration-500 ease-in-out
    mx-2 whitespace-nowrap tracking-[0.125rem]
    
    
  `;

  const variants = {
    navigation: `
      text-left w-full md:w-fit 
      border-r-4 md:border-r-0 md:border-b-4
      h-[2.5rem] md:h-[4rem]
      ${isActive ? "border-white" : "border-transparent hover:border-white/50"}
    `,
    tab: `
      md:w-fit
      border-b-4
      h-[3.5rem] w-full
      text-blue-300
      text-[0.875rem] font-barlow-condensed
      traking-[0.132rem]
      ${isActive ? "border-white text-white" : "border-transparent hover:border-white/50"}
    `,
    
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant] || ""} ${className}`}
    >
      {text}
    </button>
  );
};

export default PureButton;
