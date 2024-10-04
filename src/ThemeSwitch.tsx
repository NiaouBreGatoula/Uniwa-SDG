import { useSwitch, VisuallyHidden, SwitchProps } from "@nextui-org/react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";

const ThemeSwitch = (props: SwitchProps) => {
  const {
    Component,
    slots,
    isSelected, 
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch(props);

  return (
    <div className="flex flex-col gap-2">
      <Component {...getBaseProps()}>
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <div
          {...getWrapperProps()}
          className={slots.wrapper({
            class: [
              "w-8 h-8",  /* prepei na to ftiakse */
              "flex items-center justify-center",
              "rounded-lg bg-default-100 hover:bg-default-200", 
            ],
          })}
        >
          {isSelected ? <SunIcon /> : <MoonIcon />} 
        </div>
      </Component>
    </div>
  );
};

export default ThemeSwitch;
