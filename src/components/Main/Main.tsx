export default function Main() {
  return (
    <main className="w-full flex flex-col items-center pt-32 gap-28">
      <div className="w-[82.071rem] flex justify-between items-center gap-4">
        <div
          id="banner_cacados_femininos"
          className="w-[41.759rem] h-[38.883rem] flex justify-start items-end pl-12 bg-linear-gradient-banner rounded-[3px]"
        >
          <h2 className="w-[16.625rem] text-5xl leading-[4.188rem] uppercase text-white drop-shadow-sm">
            calçados femininos
          </h2>
        </div>
        <div className="flex flex-col gap-14 items-end">
          <p className="w-[37.5rem] text-right text-[1.375rem] leading-9 ">
            Escolher o seu sapato favorito entre nossa variedade de modelos e
            cores não será uma tarefa fácil, mas o que uma mulher não consegue
            fazer?{' '}
          </p>
          <button className="w-[16.063rem] bg-linear-gradient-button rounded-sm py-2 uppercase font-bold text-lg text-white">
            Conferir
          </button>
        </div>
      </div>
      <div className="w-[82.071rem] flex justify-between items-center gap-4">
        <div className="flex flex-col gap-14 items-start">
          <p className="w-[37.5rem] text-[1.375rem] leading-9 ">
            Tenha em seu guarda roupa sapatos de qualidade e confortáveis, para
            o dia a dia, trabalho e até mesmo para praticar esportes!
          </p>
          <button className="w-[16.063rem] bg-linear-gradient-button rounded-sm py-2 uppercase font-bold text-lg text-white">
            Conferir
          </button>
        </div>
        <div
          id="banner_cacados_masculinos"
          className="w-[41.759rem] h-[38.883rem] flex justify-end items-end pr-12 bg-linear-gradient-banner rounded-[3px]"
        >
          <h2 className="w-[16.625rem] text-5xl leading-[4.188rem] uppercase text-white drop-shadow-sm">
            calçados masculino
          </h2>
        </div>
      </div>
    </main>
  )
}
