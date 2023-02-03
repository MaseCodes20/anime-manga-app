import { HiMoon, HiSun } from "react-icons/hi";

interface IDarkModeButton {
  theme: string;
  setTheme: (theme: string) => void;
}

const DarkModeButton = ({ theme, setTheme }: IDarkModeButton) => {
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? <HiMoon /> : <HiSun />}
    </button>
  );
};

export default DarkModeButton;
