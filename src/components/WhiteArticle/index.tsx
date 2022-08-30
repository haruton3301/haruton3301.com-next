type Props = {
  children: React.ReactNode
}

export const WhiteArticle: React.FC<Props> = (props) => {
  const { children } = props

  return (
    <>
      <section className="max-w-4xl mx-auto mt-5">
        <article className="bg-white px-8 py-7 white-article">{children}</article>
      </section>
    </>
  )
}
