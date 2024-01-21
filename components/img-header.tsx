interface Props {
  img: string
  title: string
  subtitle: string
}

const ImageHeader = (props: Props) => {
  return (
      <div className="relative h-screen max-h-[480px]">
        <div
          className="absolute inset-0 z-0  w-full bg-cover bg-center "
          style={{
            backgroundImage: `url("${props.img}")`,
            filter: "blur(6px)",
          }}
        />
        <div className="z-1 absolute left-0 top-0 size-full  bg-primary opacity-40"></div>
        <div className="relative z-10 flex h-[480px] flex-col items-center justify-center">
          <h1 className=" font-dmserif text-5xl font-medium text-white">
            {props.title}
          </h1>
          <h2 className=" font-dmsans text-base text-white">{props.subtitle}</h2>
        </div>
      </div>
  )
}

export default ImageHeader
