export default function LinkGit() {
  return (
    <div className="flex gap-2">
      <a
        href="https://www.linkedin.com/in/benny-mathew"
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center border-2 border-white hover:border-amber-500 w-full underline text-center text-white items-center mx-auto"
      >
        <img src="/linkedin.svg" alt="linkedin" className="h-7 w-7" />
        {/* My LinkedIn */}
      </a>
      <a
        href="https://www.github.com/coderbenny"
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center border-2 border-white hover:border-amber-500 w-full underline text-center text-white items-center mx-auto"
      >
        <img src="/github.svg" alt="linkedin" className="h-7 w-7" />
        {/* My Github */}
      </a>
    </div>
  );
}
