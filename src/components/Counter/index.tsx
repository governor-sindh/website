import getURL from "@/lib/getUrl";

export const Counter = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL!}/api/counter`,
    {
      cache: "no-store",
    }
  );
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
