import { Pagination, Button } from "@nextui-org/react";
import HeartIcon from "../../assets/love.svg";
import { allSDGs } from "../../constants/sdgPages";

interface CardPaginationProps {
  currentSDGPage: number;
  handlePageChange: (page: number) => void;
  calculateScore: () => void;
  loading: boolean;
  language: string;
}

const CardPagination = ({
  currentSDGPage,
  handlePageChange,
  calculateScore,
  loading,
  language,
}: CardPaginationProps) => {
  return (
    <div className="flex flex-col items-center mt-auto space-y-4">
      <div className="select-none">
        <Pagination
          showControls
          total={allSDGs.length}
          initialPage={1}
          page={currentSDGPage}
          onChange={handlePageChange}
          className="select-none"
        />
      </div>

      {currentSDGPage === allSDGs.length && (
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
            <span className="font-bold text-sm text-gray-700">Handmade</span> by
            Uniwa students with <div className="inline-block w-[2px]" />
            {/* I changed the color of the SVG Heart Icon by modifying the fill attribute in the love.svg file. */}
            <img
              src={HeartIcon}
              alt="Heart Icon"
              className="inline h-4 w-4 select-none"
            />{" "}
          </>
        ) : (
          <>
            <span className="font-bold text-sm text-gray-700">Χειροποίητο</span>{" "}
            από φοιτητές Uniwa με{" "}
            {/* I changed the color of the SVG Heart Icon by modifying the fill attribute in the love.svg file. */}
            <img
              src={HeartIcon}
              alt="Heart Icon"
              className="inline h-4 w-4 select-none"
            />{" "}
          </>
        )}
      </div>
    </div>
  );
};

export default CardPagination;
