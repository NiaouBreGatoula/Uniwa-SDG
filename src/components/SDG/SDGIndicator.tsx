import type { IndicatorType, Section } from "../../types/sdgTypes";
import SDGSection from "./SDGSection";

interface IndicatorProps {
  indicator: IndicatorType;
}

const Indicator = ({ indicator }: IndicatorProps) => {
  return (
    <>
      <h2 className="font-semibold text-lg mb-2">
        {`${indicator.label} (Weight: ${indicator.weight})`}
      </h2>

      {indicator.sections.map((section: Section, sectionIndex: number) => (
        <div key={sectionIndex} className="mb-4">
          <SDGSection
            section={section}
            inputName={section.inputName}
            IndicatorName={indicator.label}
          />
        </div>
      ))}
    </>
  );
};

export default Indicator;
