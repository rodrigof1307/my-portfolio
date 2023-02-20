type sectionLayoutProps = {
  children: React.ReactNode
  title: string,
  isStickySection?: boolean
}

export default function SectionLayout({
  children,
  title,
  isStickySection = false
}: sectionLayoutProps) {

  return (
    <section className={`${title.toLowerCase().replace(' ', '-')} flex flex-col pt-[4.5rem] justify-center items-center`} 
    id={title.toLowerCase().replace(' ', '-')}>
      <h2 className="mb-[1rem] lg:mb-[1.5rem] xl:mb-[2.5rem] ml-[3%] mr-auto font-bold text-2xl lg:text-4xl xl:text-6xl 2xl:text-7xl uppercase text-medium-gray">{title}</h2>
      <div className={`scale-[0.55] lg:scale-75 ${!isStickySection ? '0.5xl:scale-[0.9]' : '0.5xl:scale-100'} xl:scale-100 origin-top`}>
        {children}
      </div>
    </section>
  )
}
