export const Counter = async () => {
  const response = await fetch("http://localhost:3000/api/counter", {
    cache: "no-cache",
  });
  const data = await response.json();

  return (
    <>
      {data.counter !== 0 ? (
        <div className="mt-4 flex w-full flex-col items-center sm:mt-0">
          <div className="flex-col text-center text-xl font-semibold tracking-widest text-main sm:text-3xl">
            <div className="w-36">{data.counter}</div>
          </div>

          <div className="text-center text-xs tracking-wider text-main sm:mb-0 sm:text-sm">
            Accepted Applications
          </div>
        </div>
      ) : null}
    </>
  );
};
