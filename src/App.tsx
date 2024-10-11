import { useState, useEffect, useRef } from "react";
import { useDisclosure, CircularProgress, User, Link } from "@nextui-org/react";
import videoBg from "./assets/video.mp4";
import Line from "../src/assets/line.svg";
import type { SDG, IndicatorType, Section } from "./types/sdgTypes";
import MyHeader from "./components/Navbar/MyHeader";
import { sdgData } from "./constants/sdgData";
import MyCard from "./components/Card/MyCard";

const App = () => {
  const [completedPages, setCompletedPages] = useState<number[]>([]);
  const [sdgDataState, setSdgDataState] = useState<SDG[]>(sdgData);
  const [currentSDGPage, setCurrentSDGPage] = useState<number>(1);
  const [indicators, setIndicators] = useState<IndicatorType[]>(
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

  const checkAndNavigateNextPage = (updatedIndicators: IndicatorType[]) => {
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
        sections: indicator.sections.map((section: Section) => ({
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      const centerY = Math.max(
        minY,
        Math.min((panelHeight - cardHeight) / 2, maxY)
      );
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
        const newX = Math.max(
          0,
          Math.min(cardStartPos.x + deltaX, panelWidth - cardWidth)
        );
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
          calculateScore={calculateScore}
          cardRef={cardRef}
          currentSDGPage={currentSDGPage}
          dragging={dragging}
          handleMouseDown={handleMouseDown}
          handlePageChange={handlePageChange}
          indicators={indicators}
          isDarkMode={isDarkMode}
          language={language}
          loading={loading}
          position={position}
          sdgData={sdgData}
          setIsDarkMode={setIsDarkMode}
          updateIndicatorSection={updateIndicatorSection}
        />
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
