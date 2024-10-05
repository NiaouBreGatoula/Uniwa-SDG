import { useState, useEffect, useRef } from "react";
import {
  ScrollShadow,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  CircularProgress,
  RadioGroup,
  Radio,
  Button,
  Card,
  User,
  Link,
  Pagination,
  ButtonGroup,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Input,
} from "@nextui-org/react";
import videoBg from "../src/assets/video.mp4";
import HeartIcon from "../src/assets/love.svg";
import Line from "../src/assets/line.svg";
import ThemeSwitch from "../src/ThemeSwitch.tsx";
import RestartIcon from "../src/assets/restart.svg";
import LanguageIcon from "../src/assets/lang.svg";
import AboutUs from "../src/assets/about.svg";

interface Section {
  possibleValues?: string[];
  selectedValue: string | null;
  isTextField?: boolean;
}

interface Indicator {
  label: string;
  weight: number;
  formulaType: string;
  sections: Section[];
  textField?: string;
}

interface SDG {
  name: string;
  indicators: Indicator[];
}

const sdgData: SDG[] = [
  {
    name: "SDG 01",
    indicators: [
      {
        label: "Indicator I1",
        weight: 0.125,
        formulaType: "poverty",
        sections: [
          { possibleValues: ["0", "0.25", "1"], selectedValue: null },
          { possibleValues: ["0", "1"], selectedValue: null },
          { possibleValues: ["0", "1"], selectedValue: null },
        ],
      },
      {
        label: "Indicator I2",
        weight: 0.125,
        formulaType: "poverty",
        sections: [
          { possibleValues: ["0", "0.25", "1"], selectedValue: null },
          { possibleValues: ["0", "1"], selectedValue: null },
          { possibleValues: ["0", "1"], selectedValue: null },
        ],
      },
    ],
  },
  {
    name: "SDG 01",
    indicators: [
      {
        label: "Indicator I1",
        weight: 0.125,
        formulaType: "poverty",
        sections: [
          { possibleValues: ["0", "1", "0.25", "1"], selectedValue: null },
          { isTextField: true, selectedValue: null },
          { possibleValues: ["0", "1"], selectedValue: null },
        ],
      },
    ],
  },
  {
    name: "SDG 03",
    indicators: [
      {
        label: "Indicator I3",
        weight: 0.5,
        formulaType: "health",
        sections: [{ possibleValues: ["0", "0.5", "1"], selectedValue: null }],
      },
    ],
  },
];

const App = () => {
  const [completedPages, setCompletedPages] = useState<number[]>([]);
  const [sdgDataState, setSdgDataState] = useState<SDG[]>(sdgData);
  const [currentSDGPage, setCurrentSDGPage] = useState<number>(1);
  const [indicators, setIndicators] = useState<Indicator[]>(
    sdgData[0].indicators
  );
  const [result, setResult] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragStartPos, setDragStartPos] = useState({ x: 0, y: 0 });
  const [cardStartPos, setCardStartPos] = useState({ x: 0, y: 0 });
  const [language, setLanguage] = useState("en");
  const cardRef = useRef<HTMLDivElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    setIndicators(sdgDataState[currentSDGPage - 1].indicators);
  }, [currentSDGPage, sdgDataState]);

  const handlePageChange = (page: number) => {
    setCurrentSDGPage(page);
  };

  const updateIndicatorSection = (
    indicatorIndex: number,
    sectionIndex: number,
    value: string
  ) => {
    const updatedIndicators = [...indicators];
    updatedIndicators[indicatorIndex].sections[sectionIndex].selectedValue =
      value;

    setIndicators(updatedIndicators);

    checkAndNavigateNextPage(updatedIndicators);
  };

  const checkAndNavigateNextPage = (updatedIndicators: Indicator[]) => {
    const allFilled = updatedIndicators.every((indicator) =>
      indicator.sections.every((section) => section.selectedValue !== null)
    );

    const hasTextField = updatedIndicators.some((indicator) =>
      indicator.sections.some((section) => section.isTextField)
    );

    if (allFilled && !hasTextField) {
      const isAlreadyComplete = completedPages.includes(currentSDGPage);

      if (!isAlreadyComplete) {
        const newSDGDataState = [...sdgDataState];
        newSDGDataState[currentSDGPage - 1].indicators = updatedIndicators;
        setSdgDataState(newSDGDataState);

        setCompletedPages([...completedPages, currentSDGPage]);

        if (currentSDGPage < sdgData.length) {
          setCurrentSDGPage(currentSDGPage + 1);
        }
      }
    }
  };

  const calculateScore = () => {
    setLoading(true);
    setTimeout(() => {
      let totalScore = 0;
      indicators.forEach((indicator) => {
        indicator.sections.forEach((section) => {
          if (section.selectedValue !== null) {
            const value = parseFloat(section.selectedValue);
            totalScore += value * indicator.weight;
          }
        });
      });
      setResult(totalScore);
      setLoading(false);
    }, 3000);
  };

  const handleRestart = () => {
    const resetSDGData = sdgDataState.map((sdg) => ({
      ...sdg,
      indicators: sdg.indicators.map((indicator) => ({
        ...indicator,
        sections: indicator.sections.map((section) => ({
          ...section,
          selectedValue: null,
        })),
      })),
    }));

    setSdgDataState(resetSDGData);
    setCurrentSDGPage(1);
    setResult(null);
  };

  const handleLanguageChange = (key: string) => {
    setLanguage(key);
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging]);

  useEffect(() => {
    if (cardRef.current && leftPanelRef.current) {
      const cardWidth = cardRef.current.offsetWidth;
      const cardHeight = cardRef.current.offsetHeight;
      const panelWidth = leftPanelRef.current.offsetWidth;
      const panelHeight = leftPanelRef.current.offsetHeight;
  
      const headerHeight = 100; 
      const minY = headerHeight; 
      const maxY = panelHeight - cardHeight;
      const centerX = (panelWidth - cardWidth) / 2;
      const centerY = Math.max(minY, Math.min((panelHeight - cardHeight) / 2, maxY));
      setPosition({ x: centerX, y: centerY });
    }
  }, []);
  

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    setDragStartPos({ x: e.clientX, y: e.clientY });
    setCardStartPos({ x: position.x, y: position.y });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (dragging) {
      const deltaX = e.clientX - dragStartPos.x;
      const deltaY = e.clientY - dragStartPos.y;
  
      if (cardRef.current && leftPanelRef.current) {
        const cardWidth = cardRef.current.offsetWidth;
        const cardHeight = cardRef.current.offsetHeight;
        const panelWidth = leftPanelRef.current.offsetWidth;
        const panelHeight = leftPanelRef.current.offsetHeight;
        const headerHeight = 100; 
        const minY = headerHeight; 
        const maxY = panelHeight - cardHeight; 
        const newX = Math.max(0,Math.min(cardStartPos.x + deltaX, panelWidth - cardWidth));
        const newY = Math.max(minY, Math.min(cardStartPos.y + deltaY, maxY));
        setPosition({ x: newX, y: newY });
      }
    }
  };
  

  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <div className="relative flex min-h-screen">
      <video
        src={videoBg}
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover -z-10 select-none"
      />

      <div ref={leftPanelRef} className="flex-1 p-8 relative z-10">
        <header className="fixed top-0 left-0 w-full bg-blue-900 bg-opacity-80 text-white p-6 shadow-lg flex justify-between items-center z-20 backdrop-blur-sm select-none">
          <div className="flex items-center space-x-4 select-none">
            <img
              src="https://i.postimg.cc/vmzH8ksb/1-1-2.png"
              alt="Logo"
              className="h-10 w-10 object-cover select-none"
            />
            <h1 className="text-xl font-bold select-none">
              {language === "en"
                ? "Uniwa - Educational Technology and Teaching of Informatics"
                : "Uniwa - Εκπαιδευτική τεχνολογία και διδακτική της πληροφορικής"}
            </h1>
          </div>
          <nav className="select-none">
            <ul className="flex space-x-4 select-none">
              <ButtonGroup className="select-none">
                <Button
                  color="primary"
                  variant="shadow"
                  radius="sm"
                  onPress={handleRestart}
                  className="select-none"
                >
                  <img
                    src={RestartIcon}
                    alt="Restart Icon"
                    className="inline-block mr-2 h-4 w-4 select-none"
                  />
                  {language === "en" ? "Restart" : "Επανεκκίνηση"}
                </Button>
                <Button
                  color="primary"
                  variant="shadow"
                  radius="sm"
                  onPress={onOpen}
                  className="select-none"
                >
                  <img
                    src={AboutUs}
                    alt="About Us"
                    className="inline-block mr-2 h-4 w-4 select-none"
                  />
                  {language === "en" ? "About Us" : "Σχετικά με εμάς"}
                </Button>
                <Modal
                  backdrop="opaque"
                  isOpen={isOpen}
                  onOpenChange={onOpenChange}
                  classNames={{
                    backdrop:
                      "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20 select-none",
                  }}
                >
                  <ModalContent>
                    {(onClose) => (
                      <>
                        <ModalHeader className="flex flex-col gap-1 select-none">
                          Uniwa SDG Evaluation Project
                        </ModalHeader>
                        <ModalBody className="select-none">
                          {language === "en" ? (
                            <>
                              <p>
                                <strong>This project was created by two students</strong>{" "}
                                from the{" "}
                                <strong>
                                  Department of Computer Science and Engineering
                                  at UniWA
                                </strong>
                                . It is part of the course{" "}
                                <strong>
                                  "Educational Technology & Teaching of
                                  Informatics"
                                </strong>
                                .
                              </p>
                              <p>
                                The main goal of the project is to develop a
                                website that evaluates how well an educational
                                institution integrates the{" "}
                                <strong>Sustainable Development Goals (SDGs)</strong>.
                                The website collects data, calculates scores,
                                and provides a final weighted evaluation based
                                on multiple indicators related to{" "}
                                <strong>sustainability performance</strong>.
                              </p>
                            </>
                          ) : (
                            <>
                              <p>
                                <strong>
                                  Αυτό το έργο δημιουργήθηκε από δύο φοιτητές
                                </strong>{" "}
                                του{" "}
                                <strong>
                                  Τμήματος Μηχανικών Πληροφορικής και Υπολογιστών
                                  του Πανεπιστημίου Δυτικής Αττικής
                                </strong>
                                . Είναι μέρος του μαθήματος{" "}
                                <strong>
                                  "Εκπαιδευτική Τεχνολογία και Διδακτική της
                                  Πληροφορικής"
                                </strong>
                                .
                              </p>
                            </>
                          )}
                        </ModalBody>
                        <ModalFooter className="select-none">
                          <Button
                            color="danger"
                            variant="light"
                            onPress={onClose}
                            className="select-none"
                          >
                            {language === "en" ? "Close" : "Κλείσιμο"}
                          </Button>
                        </ModalFooter>
                      </>
                    )}
                  </ModalContent>
                </Modal>
                <Dropdown className="select-none">
                  <DropdownTrigger>
                    <Button
                      color="primary"
                      variant="shadow"
                      radius="sm"
                      className="select-none"
                    >
                      <img
                        src={LanguageIcon}
                        alt="Language Icon"
                        className="inline-block mr-2 h-4 w-4 select-none"
                      />
                      {language === "en" ? "Language" : "Γλώσσα"}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Language Selection" className="select-none">
                    <DropdownItem
                      key="gr"
                      onClick={() => handleLanguageChange("gr")}
                      className="select-none"
                    >
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/32px-Flag_of_Greece.svg.png"
                        alt="Greek Flag"
                        className="inline-block mr-2 h-4 w-6 select-none"
                      />
                      GR
                    </DropdownItem>
                    <DropdownItem
                      key="en"
                      onClick={() => handleLanguageChange("en")}
                      className="select-none"
                    >
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/32px-Flag_of_the_United_States.svg.png"
                        alt="English Flag"
                        className="inline-block mr-2 h-4 w-6 select-none"
                      />
                      EN
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </ButtonGroup>
            </ul>
          </nav>
        </header>

        <div
  ref={cardRef}
  style={{
    position: "absolute", // Χρησιμοποιούμε absolute για ελεύθερη μετακίνηση
    left: `${position.x}px`,  // Θέση x
    top: `${position.y}px`,   // Θέση y
    cursor: dragging ? "grabbing" : "default",
    transition: dragging ? "none" : "transform 0.3s ease",
  }}
  className="z-20"
>
  <Card
    className={`flex flex-col justify-between w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto max-h-[70vh] p-4 sm:p-6 md:p-8 shadow-2xl rounded-lg mt-8 mb-8 relative overflow-hidden ${
      isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
    } select-none ${
      indicators.every((indicator) =>
        indicator.sections.every((section) => section.selectedValue !== null)
      ) && currentSDGPage !== sdgData.length
        ? "border-2 border-green-300"
        : ""
    }`}
  >

            <div
              className="absolute top-2 right-2 cursor-move select-none"
              onMouseDown={handleMouseDown}
            >
              <img
                src={Line}
                alt="Drag Icon"
                className="h-6 w-6 select-none"
                onDragStart={(e) => e.preventDefault()}
              />
            </div>

            <div className="absolute top-2 left-2 select-none">
              <ThemeSwitch
                checked={isDarkMode}
                onChange={() => setIsDarkMode(!isDarkMode)}
              />
            </div>

            <h2 className="text-2xl font-extrabold text-center mb-8 tracking-wide">
              {sdgData[currentSDGPage - 1].name}
            </h2>

            <ScrollShadow
              size={100}
              className="w-full h-[400px] mb-4 overflow-y-scroll scrollbar-hide"
            >
              {indicators.map((indicator, indicatorIndex) => (
                <div
                  key={indicatorIndex}
                  className="mb-6 bg-gray-100 p-4 rounded-lg shadow-md"
                >
                  <h2 className="font-semibold text-lg mb-2">
                    {`${indicator.label} (Weight: ${indicator.weight})`}
                  </h2>

                  {indicator.sections.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="mb-4">
                      <h3 className="font-medium text-sm mb-2">
                        Section {sectionIndex + 1}
                      </h3>

                      {section.isTextField ? (
                        <Input
                          size="lg"
                          type="number"
                          label=""
                          placeholder="Enter a number"
                          value={section.selectedValue || ""}
                          onChange={(e) =>
                            updateIndicatorSection(
                              indicatorIndex,
                              sectionIndex,
                              e.target.value
                            )
                          }
                          className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
                        />
                      ) : (
                        <RadioGroup
                          orientation="horizontal"
                          value={section.selectedValue || ""}
                          onChange={(event) =>
                            updateIndicatorSection(
                              indicatorIndex,
                              sectionIndex,
                              event.target.value
                            )
                          }
                          className="space-x-4"
                        >
                          {section.possibleValues?.map((value, valueIndex) => (
                            <Radio
                              key={valueIndex}
                              value={value}
                              className="hover:bg-gray-200 focus:ring-blue-500"
                            >
                              {value}
                            </Radio>
                          ))}
                        </RadioGroup>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </ScrollShadow>

            <div className="flex flex-col items-center mt-auto space-y-4">
              <div className="select-none">
                <Pagination
                  showControls
                  total={sdgData.length}
                  initialPage={1}
                  page={currentSDGPage}
                  onChange={handlePageChange}
                  className="select-none"
                />
              </div>

              {currentSDGPage === sdgData.length && (
                <Button
                  className="select-none py-2 px-4 rounded-md bg-blue-500 text-white font-semibold hover:bg-blue-600"
                  onPress={calculateScore}
                  isLoading={loading}
                >
                  {language === "en"
                    ? "Calculate Evaluation"
                    : "Υπολογισμός Αξιολόγησης"}
                </Button>
              )}

              <div className="text-center text-xs text-gray-500">
                {language === "en" ? (
                  <>
                    <span className="font-bold text-sm text-gray-700">
                      Handmade
                    </span>{" "}
                    by Uniwa students with{" "}
                    <img
                      src={HeartIcon}
                      alt="Heart Icon"
                      className="inline h-4 w-4 select-none"
                    />{" "}
                  </>
                ) : (
                  <>
                    <span className="font-bold text-sm text-gray-700">
                      Χειροποίητο
                    </span>{" "}
                    από φοιτητές Uniwa με{" "}
                    <img
                      src={HeartIcon}
                      alt="Heart Icon"
                      className="inline h-4 w-4 select-none"
                    />{" "}
                  </>
                )}
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div
        className={`flex-1 flex items-center justify-center transition-all ${
          loading || result !== null ? "backdrop-blur-sm" : "bg-transparent"
        } select-none`}
      >
        {loading ? (
          <div className="flex flex-col items-center text-white mt-4 select-none">
            <CircularProgress label="Loading..." className="select-none" />
          </div>
        ) : result !== null ? (
          <h1 className="text-8xl font-extrabold text-white select-none">
            {result?.toFixed(2)}
          </h1>
        ) : null}
      </div>

      <div className="absolute bottom-5 right-5 flex flex-col space-y-4 z-20 select-none">
        <div className="opacity-20 hover:opacity-100 transition-opacity duration-300 select-none">
          <User
            name=""
            description={
              <Link
                isBlock
                showAnchorIcon
                href="https://github.com/NiaouBreGatoula"
                size="sm"
                isExternal
                className="font-bold text-white select-none"
              >
                George M.
              </Link>
            }
            avatarProps={{
              src: "https://i.postimg.cc/d0hxHTVd/DALL-E-2024-10-02-13-39-11-A-premium-looking-cat-dressed-as-a-hacker-sitting-in-front-of-multiple.jpg",
            }}
          />
        </div>

        <div className="opacity-20 hover:opacity-100 transition-opacity duration-300 select-none">
          <User
            name=""
            description={
              <Link
                isBlock
                showAnchorIcon
                href=""
                size="sm"
                isExternal
                className="font-bold text-white select-none"
              >
                Evangelia D.
              </Link>
            }
            avatarProps={{
              src: "https://i.postimg.cc/dQj499jp/2024-10-03-14-55-31-ONEpiece-Google-Search.png",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
