export default function Photos() {
  return (
    <div className="flex justify-between items-center">
      <div className="paw-image-1 w-16 h-32 -translate-x-8 translate-y-24 sm:w-24 sm:h-40 md:w-36 md:h-52 md:translate-y-20 lg:translate-y-28 sm:-translate-x-10" />
      <div className="paw-image-2 w-16 h-32 sm:w-24 sm:h-40 md:w-36 md:h-56" />
      <div className="paw-image-3 w-16 h-32 sm:w-24 sm:h-40 md:w-36 md:h-56" />
      <div className="paw-image-4 w-16 h-32 sm:w-24 sm:h-40 translate-y-16 md:w-36 md:h-56 md:translate-y-16 lg:translate-y-24" />
    </div>
  );
}
