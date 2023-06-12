export default function BannerMenu() {
  return (
    <div
      className="w-screen object-cover h-[622px] flex justify-end items-center"
      id="banner_hero"
    >
      <div className="flex flex-col item gap-6 pr-32">
        <div>
          <h1 className="font-semibold text-[5rem] text-black-400 ">
            Tênis Casual
          </h1>
          <span className="font-medium text-6xl  text-orange-600">
            Masculino
          </span>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col">
            <span className="font-medium text-2xl text-black-400 opacity-60">
              A partir de
            </span>
            <span className="font-bold text-5xl leading-[4.688rem]">
              R$ 79,99
            </span>
          </div>
          <button className="w-[16.063rem] py-2 bg-linear-gradient-header rounded-sm uppercase font-normal text-lg text-white">
            Aproveite
          </button>
        </div>
      </div>
    </div>
  )
}
