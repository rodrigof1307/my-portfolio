type sectionLayoutProps = {
  children: React.ReactNode
  title: string
}

export default function SectionLayout({
  children,
  title,
}: sectionLayoutProps) {

  return (
    <section className={`${title.toLowerCase().replace(' ', '-')} flex flex-col pt-[4.5rem] justify-center items-center`} id={title.toLowerCase().replace(' ', '-')}>
      <h2 className="mb-[2.5rem] ml-[3.125rem] mr-auto font-bold text-6xl 2xl:text-7xl uppercase text-medium-gray">{title}</h2>
      {children}
    </section>
  )
}
