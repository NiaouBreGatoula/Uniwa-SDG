import { CircularProgress } from "@nextui-org/react";
import useGlobalState from "../../contexts/useGlobalState";
import { indicatorsResultCategories } from "../../constants/sdgPages";
import { useEffect, useMemo, useState } from "react";
import { SimpleIndicator, SpecialIndicator } from "../../types/SDG_Indicators";
import { result } from "lodash";
import { getIndicatorSectionsSum } from "../../utils/indicatorUtils";

interface ResultsSectionProps {
  loading: boolean;
  result: number | null;
}

interface IndicatorMessage {
  message: "More things can be done";
  indicatorLabel: string;
  indicatorValue: number;
  indicatorColor?: "white" | "pink" | "green";
}

const ResultsSection = ({ loading, result }: ResultsSectionProps) => {
  const { appState } = useGlobalState();
  const [indicatorMessages, setIndicatorMessages] = useState<
    IndicatorMessage[]
  >([]);

  const onlyIndicators = useMemo(() => {
    console.log("RESULT SECTION RE-RENDERED");
    console.log("appState: ", appState);

    return [...new Set(appState.values())];
  }, [appState, result]);

  const onlySpecialIndicators = useMemo(
    () => [
      ...new Set(
        onlyIndicators.filter(
          (indicator) => indicator !== null && indicator.type !== "simple"
        )
      ),
    ],
    [onlyIndicators]
  );

  const onlySimpleIndicators = useMemo(
    () => [
      ...new Set(
        onlyIndicators.filter(
          (indicator) => indicator !== null && indicator.type === "simple"
        )
      ),
    ],
    [onlyIndicators]
  );

  useEffect(() => {
    console.log("useEffect - onlySimpleIndicators: ", onlySimpleIndicators);
    console.log("useEffect - onlySpecialIndicators: ", onlySpecialIndicators);
    console.log("useEffect - onlyIndicators: ", onlyIndicators);
    console.log("useEffect - indicator Messages: ", indicatorMessages);

    const resetState = () => {
      setIndicatorMessages([]);
    };

    const updateState = (indicator: SimpleIndicator | SpecialIndicator) => {
      setIndicatorMessages((prev): IndicatorMessage[] => {
        const color = indicator.type === "simple" ? "white" : indicator.type;
        if (!prev) {
          return [
            {
              message: "More things can be done",
              indicatorLabel: indicator.label,
              indicatorValue: indicator.score ? indicator.score : 0,
              indicatorColor: color,
            },
          ];
        }
        return [
          ...prev,
          {
            message: "More things can be done",
            indicatorLabel: indicator.label,
            indicatorValue: indicator.score ? indicator.score : 0,
            indicatorColor: color,
          },
        ];
      });
    };

    resetState();

    onlySimpleIndicators.forEach((indicator) => {
      if (indicator !== null) {
        if (indicator.type === "simple" && indicator.score !== null) {
          if (
            indicatorsResultCategories.categoryA.includes(indicator.label) &&
            getIndicatorSectionsSum(indicator) <= 2.25
          ) {
            updateState(indicator);
          } else if (
            indicatorsResultCategories.categoryB.includes(indicator.label) &&
            getIndicatorSectionsSum(indicator) <= 2.0
          ) {
            updateState(indicator);
          }
        }
      }
    });

    onlySpecialIndicators.forEach((indicator) => {
      if (indicator !== null) {
        if (indicator.score !== null) {
          if (indicator.score <= 0) {
            updateState(indicator);
          }
        }
      }
    });
  }, [onlySimpleIndicators, onlySpecialIndicators]);

  return (
    <div
      className={`flex-1 flex items-center justify-center transition-all ${
        loading || result !== null ? "backdrop-blur-md" : "bg-transparent"
      } select-none`}
    >
      {loading ? (
        <div className="flex flex-col items-center text-white mt-4 select-none">
          <CircularProgress label="Loading..." className="select-none" />
        </div>
      ) : result !== null ? (
        <article className="flex flex-col justify-center items-center gap-2 h-screen">
          <section className="flex flex-col justify-center items-center gap-2">
            <h1 className="text-8xl font-extrabold text-white select-text">
              {result?.toFixed(2)}
            </h1>
            <h3 className="text-xl font-extrabold text-white select-none">
              SDG Final Score
            </h3>
          </section>

          <div className="w-full h-2 bg-slate-50 my-4" />

          <section className="overflow-auto mt-2 mb-4 h-1/2 p-2 ">
            {indicatorMessages !== null ? (
              <div className="flex flex-col gap-4">
                {indicatorMessages.map((indicator, index) => (
                  <div
                    className="text-white text-xl select-text "
                    key={`${indicator.indicatorLabel}-${index}`}
                  >
                    <div className="flex justify-between gap-6">
                      <span
                        className="font-semibold"
                        style={{
                          color: indicator.indicatorColor,
                          textShadow:
                            indicator.indicatorColor === "green"
                              ? "0.5px 0.5px 0.5px white"
                              : "0.5px 0.5px 0.5px black",
                        }}
                      >
                        {`${indicator.indicatorLabel} (${indicator.indicatorValue}):`}
                      </span>
                      <span> {`${indicator.message}`}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              "something went wrong"
            )}
          </section>

          <section className="flex flex-col justify-center items-center text-white font-semibold text-2xl mt-4">
            <p>
              {indicatorMessages.length} out of {onlyIndicators.length}
            </p>
            <p>Can be Improved</p>
          </section>
        </article>
      ) : null}
    </div>
  );
};

export default ResultsSection;
