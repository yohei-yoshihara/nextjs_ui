"use client";
import Link from "next/link";
import { useToast } from "@/app/ui/toast";
import PulldownSelection from "@/app/ui/pulldown-selection";
import PulldownMenu from "@/app/ui/pulldown-menu";
import Popover from "@/app/ui/popover";
import { HoverMenu, HoverMenuItem } from "@/app/ui/hover-menu";
import DatePicker from "@/app/ui/date-picker/date-picker";
import Accordion from "@/app/ui/accordion";
import { AccordionGroup, AccordionItem } from "@/app/ui/accordion-group";

export default function Home() {
  const toast = useToast();

  const handleShowToast = () => {
    toast.open({
      component: (
        <div className="border-1 border-zinc-300 p-2 rounded-2xl shadow-sm">
          <h3 className="text-gray-600 text-sm font-bold">Title</h3>
          <p className="text-gray-500 text-sm">This is a toast.</p>
        </div>
      ),
      duration: 5000,
    });
  };

  return (
    <div className="bg-white w-screen h-screen p-10">
      <h1 className="text-bold text-2xl text-gray-700 mb-10">
        React/Next.js UI Components from Scratch
      </h1>

      <div className="mb-10">
        <h2 className="text-xl text-gray-600 mb-3">Toast</h2>
        <button
          className="text-white bg-blue-500 p-2 font-bold rounded-lg"
          onClick={handleShowToast}
        >
          Show Toast
        </button>
      </div>

      <div className="mb-10">
        <h2 className="text-xl text-gray-600 mb-3">Pulldown Selection</h2>
        <PulldownSelection
          items={["Project 1", "Project 2", "Project 3"]}
          defaultSelected={0}
          onSelect={(index) => {
            console.log(index);
          }}
        />
      </div>

      <div className="mb-10">
        <h2 className="text-xl text-gray-600 mb-3">Pulldown Menu</h2>
        <PulldownMenu
          items={["Menu 1", "Menu 2", "Menu 3"]}
          onSelect={(index) => {
            console.log(index);
          }}
        />
      </div>

      <div className="mb-10">
        <h2 className="text-xl text-gray-600 mb-3">Popover</h2>
        <div>
          <Popover
            content={
              <div className="text-white bg-blue-500 p-5">
                This is the popover content!
              </div>
            }
          >
            <p className="text-xl">Show Popover</p>
          </Popover>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-xl text-gray-600 mb-3">Hover Menu</h2>
        <div className="bg-blue-500">
          <HoverMenu>
            <HoverMenuItem itemKey="1" title="About">
              <Link
                className="block text-gray-600 hover:text-blue-700"
                href="/about"
              >
                About
              </Link>
              <Link
                className="block text-gray-600 hover:text-blue-700"
                href="/company"
              >
                Company
              </Link>
              <Link
                className="block text-gray-600 hover:text-blue-700"
                href="/access"
              >
                Access
              </Link>
            </HoverMenuItem>
            <HoverMenuItem itemKey="2" title="Product">
              <Link
                className="block text-gray-600 hover:text-blue-700"
                href="/service"
              >
                Service
              </Link>
              <Link
                className="block text-gray-600 hover:text-blue-700"
                href="/products"
              >
                Products
              </Link>
              <Link
                className="block text-gray-600 hover:text-blue-700"
                href="/technology"
              >
                Technology
              </Link>
            </HoverMenuItem>
          </HoverMenu>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-xl text-gray-600 mb-3">Hamberger Menu</h2>
        <Link className="text-gray-600" href="/hamberger_menu">
          Go to sample page
        </Link>
      </div>

      <div className="mb-10">
        <h2 className="text-xl text-gray-600 mb-3">Date Picker</h2>
        <DatePicker />
      </div>

      <div className="mb-10">
        <h2 className="text-xl text-gray-600 mb-3">Carousel</h2>
        <Link className="text-gray-600" href="/carousel">
          Go to sample page
        </Link>
      </div>

      <div className="mb-10">
        <h2 className="text-xl text-gray-600 mb-3">Alert Dialog</h2>
        <Link className="text-gray-600" href="/alert_dialog">
          Go to sample page
        </Link>
      </div>

      <div className="mb-10">
        <h2 className="text-xl text-gray-600 mb-3">Accordion</h2>
        <Link className="text-gray-600" href="/accordion">
          Go to sample page
        </Link>
      </div>
    </div>
  );
}
