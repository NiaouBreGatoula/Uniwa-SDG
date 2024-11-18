import { ScrollShadow, Card } from "@nextui-org/react";
import ThemeSwitch from "../theme/ThemeSwitch";
import Indicator from "../SDG/SDGIndicator";
import CardPagination from "./CardPagination";
import { IndicatorType } from "../../types/SDG_Indicators";
import { Section } from "../../types/SDG_Sections";
import { SDG } from "../../types/SDG_Types";

interface MyCardProps {
  cardRef: React.RefObject<HTMLDivElement>; 
  position: { x: number; y: number };
  dragging: boolean;
  isDarkMode: boolean;
  indicators: IndicatorType[];
  currentSDGPage: number;
  sdgData: SDG[];
  handleMouseDown: (event: React.MouseEvent) => void;
  handleResizeMouseDown: (e: React.MouseEvent) => void;
  Line: string;
  Resize: string;
  setIsDarkMode: (value: boolean) => void;
  updateIndicatorSection: (
    indicatorIndex: number,
    sectionIndex: number,
    value: string
  ) => void;
  handlePageChange: (page: number) => void;
  calculateScore: () => void;
  loading: boolean;
  language: string;
  size: { width: number };
}

const MyCard = ({
  cardRef,
  position,
  dragging,
  isDarkMode,
  indicators,
  currentSDGPage,
  sdgData,
  handleMouseDown,
  handleResizeMouseDown,
  Line,
  Resize,
  setIsDarkMode,
  handlePageChange,
  calculateScore,
  loading,
  language,
  size,
}: MyCardProps) => {
  return (
    <div
      ref={cardRef}
      style={{
        width: size.width, // Modify Card's Width from here
        position: "absolute", // Χρησιμοποιούμε absolute για ελεύθερη μετακίνηση
        left: `${position.x}px`, // Θέση x
        top: `${position.y}px`, // Θέση y
        cursor: dragging ? "grabbing" : "default",
        transition: dragging ? "none" : "transform 0.3s ease",
      }}
      className="z-20"
    >
     <Card
        // draggable="true"
        className={`flex flex-col justify-between w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto max-h-[70vh] p-4 sm:p-6 md:p-8 shadow-2xl rounded-lg mt-8 mb-8 relative overflow-hidden ${
          isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
        } select-none ${
          indicators.every((indicator) =>
            indicator.sections.every(
              (section: Section) => section.value !== null
            )
          ) && currentSDGPage !== sdgData.length
            ? "border-2 border-green-300"
            : ""
        }`}
      >
        <div className="absolute top-2 right-2 cursor-move select-none" onMouseDown={handleMouseDown}>
          <img
            src={Line}
            alt="Drag Icon"
            className="h-6 w-6 select-none"
            onDragStart={(e) => e.preventDefault()}
          />
        </div>

        <div
          onMouseDown={handleResizeMouseDown}
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            cursor: "ew-resize",
            padding: "10px",
          }}
        >
          <img
            src={Resize} 
            alt="Resize Handle"
            style={{ width: "20px", height: "20px" }} 
          />
        </div>

        <div className="absolute top-2 left-2 select-none">
          <ThemeSwitch
            checked={isDarkMode}
            onChange={() => setIsDarkMode(!isDarkMode)}
          />
        </div>

        <h2 className="text-2xl font-extrabold text-center mb-8 tracking-wide">
          {sdgData[currentSDGPage - 1].label}
        </h2>

        <ScrollShadow
          size={100}
          className="w-full h-[400px] mb-4 overflow-y-scroll scrollbar-hide"
        >
          {sdgData[currentSDGPage - 1].indicators.map((indicator) => (
            <div
              key={`${indicator.label}-${currentSDGPage}`}
              className={`mb-6 p-4 rounded-lg shadow-md ${
                isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
              }`}
            >
              <Indicator indicator={indicator} />
            </div>
          ))}
        </ScrollShadow>

        <CardPagination
          calculateScore={calculateScore}
          currentSDGPage={currentSDGPage}
          handlePageChange={handlePageChange}
          language={language}
          loading={loading}
        />
      </Card>
    </div>
  );
};

export default MyCard;
