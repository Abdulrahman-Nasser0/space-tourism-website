
import { useNavigation } from "../NavigationContext";
import PureButton from "./PureButton";

const NavigationButton = ({ text = "MENU", handleCloseMenu }) => {
  const { handleSectionChange, currentSection } = useNavigation();
  const extractedText = text.replace(/^\d+\s+/, "").toLowerCase();
  const isActive = extractedText === currentSection;

  return (
    <PureButton
      text={text}
      onClick={() => {
        handleSectionChange(extractedText);
        handleCloseMenu();
      }}
      isActive={isActive}
      variant="navigation"
    />
  );
};

export default NavigationButton;