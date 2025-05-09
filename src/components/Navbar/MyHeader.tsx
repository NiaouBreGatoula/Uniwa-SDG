import NavbarOptions from "./NavbarOptions";
import PADA from  "../../assets/pada.png";
interface MyHeaderProps {
  language: string;
  handleLanguageChange: (key: string) => void;
  onOpen: () => void;
  isOpen: boolean;
  onOpenChange: () => void;
  handleRestart: () => void;
}

const MyHeader = ({
  language,
  handleLanguageChange,
  onOpen,
  isOpen,
  onOpenChange,
  handleRestart,
}: MyHeaderProps) => {
  return (
    <header className="fixed top-0 left-0 w-full bg-blue-900 bg-opacity-80 text-white p-6 shadow-lg flex justify-between items-center z-20 backdrop-blur-sm select-none">
      <div className="flex items-center space-x-4 select-none">
    <img
      src={PADA}
      alt="Logo"
      className="w-12 h-auto"
    />
    <h1 className="text-xl font-bold select-none">
      {language === "en"
        ? "Uniwa - Educational Technology and Teaching of Informatics"
        : "Uniwa - Εκπαιδευτική τεχνολογία και διδακτική της πληροφορικής"}
    </h1>
    </div>
      <NavbarOptions
        handleLanguageChange={handleLanguageChange}
        language={language}
        onOpen={onOpen}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        handleRestart={handleRestart}
      />
    </header>
  );
};

export default MyHeader;
