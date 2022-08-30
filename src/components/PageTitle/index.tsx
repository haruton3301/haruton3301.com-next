type Props = {
  title: string
}

export const PageTitle: React.FC<Props> = (props) => {
  const { title } = props

  return (
    <>
      <section className="max-w-4xl mx-auto">
        <h1 className="text-3xl text-white  bg-rainbow text-center p-5">{title}</h1>
      </section>
    </>
  )
}
