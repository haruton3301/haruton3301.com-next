type Props = {
  children: React.ReactNode
}

export const WhiteArticle: React.FC<Props> = ({ children }) => {
  return (
    <section className="max-w-4xl mx-auto mt-5">
      <article className="bg-white px-3 md:px-8  py-7 white-article">
        {children}
      </article>
    </section>
  )
}
