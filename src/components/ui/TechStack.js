export default function TechStack() {
  return (
    <div className="grid grid-cols-3 gap-2 md:flex md:justify-between mt-5">
      <p className="flex gap-1 items-center mr-4 border-gray-500 tracking-wide hover:border-amber-500 text-white cursor-pointer rounded-md border-2 p-1">
        <img src="/React_logo.png" alt="react" className="h-5 w-5" />
        ReactJs
      </p>
      <p className=" flex gap-1 items-center mr-4 border-gray-500 tracking-wide hover:border-amber-500 text-white cursor-pointer rounded-md border-2 p-1">
        <img src="/js-logo.webp" alt="javascript" className="h-5 w-5" />
        Javascript
      </p>
      <p className="flex gap-1 items-center mr-4 border-gray-500 tracking-wide hover:border-amber-500 text-white cursor-pointer rounded-md border-2 p-1">
        <img
          src="/tailwind-css-logo.svg"
          alt="tailwind"
          className="h-5 w-full"
        />
        Tailwindcss
      </p>
      <p className="flex gap-1 items-center mr-4 border-gray-500 tracking-wide hover:border-amber-500 text-white cursor-pointer rounded-md border-2 p-1">
        <img src="/Python_logo.png" alt="python" className="h-5 w-full" />
        Python
      </p>
      <p className="flex gap-1 items-center mr-4 border-gray-500 tracking-wide hover:border-amber-500 text-white cursor-pointer rounded-md border-2 p-1">
        <img src="/flask-logo.png" alt="flask" className="h-5 w-full" />
        {/* Flask */}
      </p>
      <p className="flex gap-1 items-center mr-4 border-gray-500 tracking-wide hover:border-amber-500 text-white cursor-pointer rounded-md border-2 p-1">
        <img src="/sqlalchemy-logo.jpg" alt="sqlalchemy" className="h-5 w-15" />
        {/* SQLAlchemy */}
      </p>
      <p className="flex gap-1 items-center mr-4 border-gray-500 tracking-wide hover:border-amber-500 text-white cursor-pointer rounded-md border-2 p-1">
        <img
          src="/Firebase_Logo.svg"
          alt="firebase"
          className="h-5 w-full bg-white"
        />
        {/* Firebase */}
      </p>
    </div>
  );
}
