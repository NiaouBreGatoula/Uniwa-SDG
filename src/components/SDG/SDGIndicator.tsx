import type { IndicatorType, Section } from "../../types/sdgTypes";
import SDGSection from "./SDGSection";

interface IndicatorProps {
  indicator: IndicatorType;
  updateIndicatorSection: (
    indicatorIndex: number,
    sectionIndex: number,
    value: string
  ) => void;
  indicatorIndex: number;
}

const Indicator = ({
  indicator,
  updateIndicatorSection,
  indicatorIndex,
}: IndicatorProps) => {
  return (
    <>
      <h2 className="font-semibold text-lg mb-2">
        {`${indicator.label} (Weight: ${indicator.weight})`}
      </h2>

      {indicator.sections.map((section: Section, sectionIndex: number) => (
        <div key={sectionIndex} className="mb-4">
          <SDGSection
            section={section}
            inputName={}
          />
        </div>
      ))}
    </>
  );
};

export default Indicator;
