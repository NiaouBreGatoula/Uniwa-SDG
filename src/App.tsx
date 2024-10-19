import { useState, useEffect, useRef } from "react";
import Preloader from "./components/Preloader/Preloader"; 
import { useDisclosure, User, Link } from "@nextui-org/react";
import videoBg from "./assets/video.mp4";
import Line from "../src/assets/line.svg";
import Resize from "../src/assets/resize.svg";
import type { SDG } from "./types/SDG_Types";
import MyHeader from "./components/Navbar/MyHeader";
import { allSDGs } from "./constants/sdgPages";
import MyCard from "./components/Card/MyCard";
import { calcFinalSDGScore } from "./utils/sdgCalculationUtils";
import useGlobalState from "./contexts/useGlobalState";
import TestModeCard from "./components/Card/TestModeCard";
import { IndicatorType,SimpleIndicator,SpecialIndicator,} from "./types/SDG_Indicators";
import { Section } from "./types/SDG_Sections";
import ResultsSection from "./components/ResultsSection/ResultsSection";

const App = () => {
  const [completedPages, setCompletedPages] = useState<number[]>([]);
  const [sdgDataState, setSdgDataState] = useState<SDG[]>(allSDGs);
  const [currentSDGPage, setCurrentSDGPage] = useState<number>(1);
  const [indicators, setIndicators] = useState<IndicatorType[]>(
    allSDGs[0].indicators
  );
  const [result, setResult] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false); 
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragStartPos, setDragStartPos] = useState({ x: 0, y: 0 });
  const [cardStartPos, setCardStartPos] = useState({ x: 0, y: 0 });
  const [language, setLanguage] = useState("en");
  const [resizing, setResizing] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [size, setSize] = useState({ width: 400 });
  const [isPreloaderVisible, setIsPreloaderVisible] = useState<boolean>(true);


  const { appState, testingMode } = useGlobalState();
 
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPreloaderVisible(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 20); 
    return () => clearTimeout(timer);
  }, []);

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
    const updatedIndicators = [...indicators] as
      | SimpleIndicator[]
      | SpecialIndicator[];
    updatedIndicators[indicatorIndex].sections[sectionIndex].value =
      Number(value);

    setIndicators(updatedIndicators);

    checkAndNavigateNextPage(updatedIndicators);
  };

  const checkAndNavigateNextPage = (
    updatedIndicators: SimpleIndicator[] | SpecialIndicator[]
  ) => {
    const allFilled = updatedIndicators.every((indicator) =>
      indicator.sections.every((section: Section) => section.value !== null)
    );

    const hasTextField = updatedIndicators.some((indicator) =>
      indicator.sections.some(
        (section: Section) => section.type === "NumberField"
      )
    );

    if (allFilled && !hasTextField) {
      const isAlreadyComplete = completedPages.includes(currentSDGPage);

      if (!isAlreadyComplete) {
        const newSDGDataState = [...sdgDataState];
        newSDGDataState[currentSDGPage - 1].indicators = updatedIndicators;
        setSdgDataState(newSDGDataState);

        setCompletedPages([...completedPages, currentSDGPage]);

        if (currentSDGPage < allSDGs.length) {
          setCurrentSDGPage(currentSDGPage + 1);
        }
      }
    }
  };

  const calculateScore = () => {
    setLoading(true);
    setTimeout(() => {
      if (!appState) {
        console.error(
          "While trying to calculate the Total SDG Score: Global State not found"
        );
        return;
      }
      try {
        const totalScore = calcFinalSDGScore(appState);
        setResult(totalScore);
      } catch (error) {
        console.error("Error while calculating the Total SDG Score: ", error);
      } finally {
        setLoading(false);
      }
    }, 1000);
    console.log("App State: ", appState);
  };

  const handleRestart = () => {
    const resetSDGData = sdgDataState.map((sdg) => ({
      ...sdg,
      indicators: sdg.indicators.map((indicator) => {
        if (indicator.type === "simple") {
          return {
            ...indicator,
            sections: indicator.sections.map((section) => ({
              ...section,
              value: null,
            })),
          } as SimpleIndicator;
        } else if (indicator.type === "pink" || indicator.type === "green") {
          return {
            ...indicator,
            sections: indicator.sections.map((section) => ({
              ...section,
              value: null,
            })),
          } as SpecialIndicator;
        }
        return indicator; // Handle any other types if necessary
      }),
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dragging]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && currentSDGPage < allSDGs.length) {
        setCurrentSDGPage((prev) => prev + 1);
      }
      if (e.key === 'ArrowLeft' && currentSDGPage > 1) {
        setCurrentSDGPage((prev) => prev - 1);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    //remove listener after calling it again
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
  }, [currentSDGPage, allSDGs.length]);
  

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
  }, [isPreloaderVisible, cardRef, leftPanelRef]);

  useEffect(() => {
    document.addEventListener("mousemove", handleResizeMouseMove);
    document.addEventListener("mouseup", handleResizeMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleResizeMouseMove);
      document.removeEventListener("mouseup", handleResizeMouseUp);
    };
  }, [resizing]);


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

  const handleResizeMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setResizing(true);
  };

  const handleResizeMouseMove = (e: MouseEvent) => {
    if (resizing && cardRef.current && leftPanelRef.current) {
      const newWidth = Math.max(200, Math.min(e.clientX - cardRef.current.offsetLeft, leftPanelRef.current.offsetWidth - cardRef.current.offsetLeft));
      setSize((prevSize) => ({ ...prevSize, width: newWidth })); // Update only the width
    }
  };

  const handleResizeMouseUp = () => {
    setResizing(false);
  };

  

  return (
    <div className="relative flex min-h-screen">
      <div className={`preloader-overlay ${isPreloaderVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-opacity duration-1000 ease-in-out fixed top-0 left-0 w-full h-full z-50`}>
        {isPreloaderVisible && <Preloader />}
      </div>
      <video
        src={videoBg}
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover -z-10 select-none"
      />

      <div ref={leftPanelRef} className="flex-1 p-8 relative z-10">
        <MyHeader
          handleLanguageChange={handleLanguageChange}
          handleRestart={handleRestart}
          isOpen={isOpen}
          language={language}
          onOpen={onOpen}
          onOpenChange={onOpenChange}
        />

        <MyCard
          Line={Line}
          Resize={Resize}
          calculateScore={calculateScore}
          cardRef={cardRef}
          currentSDGPage={currentSDGPage}
          dragging={dragging}
          handleMouseDown={handleMouseDown}
          handleResizeMouseDown = {handleResizeMouseDown}
          handlePageChange={handlePageChange}
          indicators={indicators}
          isDarkMode={isDarkMode}
          language={language}
          loading={loading}
          position={position}
          sdgData={allSDGs}
          setIsDarkMode={setIsDarkMode}
          updateIndicatorSection={updateIndicatorSection}
          size={size}
        />
      </div>
      

      <ResultsSection loading={loading} result={result} />
      {testingMode && <TestModeCard />} 


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
                Lilian D.
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
