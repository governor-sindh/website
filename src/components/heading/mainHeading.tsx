function MainHeading({ name }: { name: string }) {
  return (
    <div className="text_shadow relative text-6xl font-bold text-[#045084] sm:text-4xl lg:text-5xl">
      <h1 className="relative z-20">{name}</h1>
    </div>
  );
}

export default MainHeading;
