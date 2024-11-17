import {
  SiReact,
  SiJavascript,
  // SiTailwindcss,
  SiPython,
  SiFlask,
  SiSqlalchemy,
  SiFirebase,
} from "react-icons/si";
import { SiNginx } from "react-icons/si"; // Nginx icon
import { SiMysql } from "react-icons/si"; // MySQL icon

export default function TechStack() {
  return (
    <div className="grid grid-cols-3 gap-2 md:flex md:justify-between mt-5">
      <p className="flex gap-1 items-center mr-4 border-gray-500 tracking-wide hover:border-amber-500 text-white cursor-pointer rounded-md border-2 p-1">
        <SiReact className="h-5 w-5 text-blue-400" />
        ReactJS
      </p>
      <p className="flex gap-1 items-center mr-4 border-gray-500 tracking-wide hover:border-amber-500 text-white cursor-pointer rounded-md border-2 p-1">
        <SiJavascript className="h-5 w-5 text-yellow-300" />
        JavaScript
      </p>
      {/* <p className="flex gap-1 items-center mr-4 border-gray-500 tracking-wide hover:border-amber-500 text-white cursor-pointer rounded-md border-2 p-1">
        <SiTailwindcss className="h-5 w-5 text-teal-400" />
        TailwindCSS
      </p> */}
      <p className="flex gap-1 items-center mr-4 border-gray-500 tracking-wide hover:border-amber-500 text-white cursor-pointer rounded-md border-2 p-1">
        <SiPython className="h-5 w-5 text-blue-600" />
        Python
      </p>
      <p className="flex gap-1 items-center mr-4 border-gray-500 tracking-wide hover:border-amber-500 text-white cursor-pointer rounded-md border-2 p-1">
        <SiFlask className="h-5 w-5 text-black" />
        Flask
      </p>
      <p className="flex gap-1 items-center mr-4 border-gray-500 tracking-wide hover:border-amber-500 text-white cursor-pointer rounded-md border-2 p-1">
        <SiSqlalchemy className="h-5 w-5 text-yellow-500" />
        SQLAlchemy
      </p>
      <p className="flex gap-1 items-center mr-4 border-gray-500 tracking-wide hover:border-amber-500 text-white cursor-pointer rounded-md border-2 p-1">
        <SiFirebase className="h-5 w-5 text-orange-400" />
        Firebase
      </p>
      <p className="flex gap-1 items-center mr-4 border-gray-500 tracking-wide hover:border-amber-500 text-white cursor-pointer rounded-md border-2 p-1">
        <SiNginx className="h-5 w-5 text-green-500" />
        Nginx
      </p>
      <p className="flex gap-1 items-center mr-4 border-gray-500 tracking-wide hover:border-amber-500 text-white cursor-pointer rounded-md border-2 p-1">
        <SiMysql className="h-5 w-5 text-blue-600" />
        MySQL
      </p>
    </div>
  );
}
