import Carousel from "@/app/ui/carousel";
import { ReactNode } from "react";

const slides: ReactNode[] = [
  <div
    key={1}
    className="w-[600px] h-[240px] bg-red-500 flex justify-center items-center">
    <div className="font-bold text-3xl text-white">1</div>
  </div>,
  <div
    key={2}
    className="w-[600px] h-[240px] bg-green-500 flex justify-center items-center">
    <div className="font-bold text-3xl text-white">2</div>
  </div>,
  <div
    key={3}
    className="w-[600px] h-[240px] bg-blue-500 flex justify-center items-center">
    <div className="font-bold text-3xl text-white">3</div>
  </div>,
  <div
    key={4}
    className="w-[600px] h-[240px] bg-orange-500 flex justify-center items-center">
    <div className="font-bold text-3xl text-white">4</div>
  </div>,
  <div
    key={5}
    className="w-[600px] h-[240px] bg-cyan-500 flex justify-center items-center">
    <div className="font-bold text-3xl text-white">5</div>
  </div>,
];

const slides_sm: ReactNode[] = [
  <div
    key={1}
    className="w-[300px] h-[520px] bg-red-500 flex justify-center items-center">
    <div className="font-bold text-3xl text-white">1</div>
  </div>,
  <div
    key={2}
    className="w-[300px] h-[520px] bg-green-500 flex justify-center items-center">
    <div className="font-bold text-3xl text-white">2</div>
  </div>,
  <div
    key={3}
    className="w-[300px] h-[520px] bg-blue-500 flex justify-center items-center">
    <div className="font-bold text-3xl text-white">3</div>
  </div>,
  <div
    key={4}
    className="w-[300px] h-[520px] bg-orange-500 flex justify-center items-center">
    <div className="font-bold text-3xl text-white">4</div>
  </div>,
  <div
    key={5}
    className="w-[300px] h-[520px] bg-cyan-500 flex justify-center items-center">
    <div className="font-bold text-3xl text-white">5</div>
  </div>,
];

export default function Home() {
  return (
    <div>
      <div className="hidden md:block">
        <Carousel slides={slides} width={600} />
      </div>
      <div className="block md:hidden">
        <Carousel slides={slides_sm} width={300} />
      </div>
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam amet
        quidem quod adipisci ad quam, mollitia assumenda molestias, quisquam
        nulla sed cum? Praesentium saepe odio, ut inventore nostrum numquam
        iure.
      </div>
    </div>
  );
}
