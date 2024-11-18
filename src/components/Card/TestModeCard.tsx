import { Card, CardHeader, Image } from "@nextui-org/react";
import Ripples from "../../assets/ripples.svg"; 
const TestModeCard: React.FC = () => {
  return (
    <Card className="max-w-[400px] absolute bottom-0 left-1/4 transform -translate-x-1/2 mb-5 bg-white text-gray-900 shadow-lg border border-gray-200 transition-transform duration-300 ease-in-out hover:scale-105 select-none">
      <CardHeader className="flex gap-2 p-1">
        <Image
          alt="Test Mode Logo"
          height={20}
          radius="sm"
          src={Ripples}
          width={20}
          className="rounded-full"
        />
        <div className="flex flex-col">
          <p className="font-sans text-sm text-left">
            Test Mode: <span className="p-1 text-green-600 font-bold">Active</span>
          </p>
        </div>
      </CardHeader>
    </Card>
  );
};

export default TestModeCard;
