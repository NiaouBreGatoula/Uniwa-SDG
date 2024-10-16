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
  Line: string;
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
  Line,
  setIsDarkMode,
  handlePageChange,
  calculateScore,
  loading,
  language,
}: MyCardProps) => {
  return (
    <div
      ref={cardRef}
      style={{
        width: 500, // Modify Card's Width from here
        position: "absolute", // Χρησιμοποιούμε absolute για ελεύθερη μετακίνηση
        left: `${position.x}px`, // Θέση x
        top: `${position.y}px`, // Θέση y
        cursor: dragging ? "grabbing" : "default",
        transition: dragging ? "none" : "transform 0.3s ease",
      }}
      className="z-20"
    >
      <Card
        draggable="true"
        className={`flex flex-col justify-between w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl max-h-[80vh] p-4 sm:p-6 md:p-8 shadow-2xl rounded-lg mt-8 mb-8 relative overflow-hidden ${
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

        {/* Here is the Card's Title */}
        <h2 className="text-2xl font-extrabold text-center mb-8 tracking-wide">
          {sdgData[currentSDGPage - 1].label}
        </h2>

        {/* Here is the Card's Content */}
        <ScrollShadow
          size={100}
          className="w-full h-[400px] mb-4 overflow-y-scroll scrollbar-hide"
        >
          {/* Here we are the SDG Indicators. Inside the Indicator Component the SDG
          Section Components are been rendered. */}

          {sdgData[currentSDGPage - 1].indicators.map((indicator) => (
            <div
              key={`${indicator.label}-${currentSDGPage}`}
              className="mb-6 bg-gray-100 p-4 rounded-lg shadow-md"
            >
              <Indicator indicator={indicator} />
            </div>
          ))}
        </ScrollShadow>
        {/* Here we are using the Pagination Component from NextUI to navigate through the SDGs. */}
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
