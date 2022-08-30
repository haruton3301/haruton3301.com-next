import Link from 'next/link'

type Props = {
  breadcrumbs: { name: string; slug: string }[]
}

export const Breadcrumb: React.FC<Props> = (props) => {
  const { breadcrumbs } = props
  const slugs: string[] = []
  const breadcrumbDoms = breadcrumbs.map((breadcrumb, i) => {
    const { name, slug } = breadcrumb
    slugs.push(slug)
    const href = `${slugs.join('/')}`

    return breadcrumbs.length - 1 !== i ? (
      <li key={name} className="inline-block">
        <Link href={href || '/'}>
          <a>{name}</a>
        </Link>
      </li>
    ) : (
      <li key={name} className="inline-block">
        {name}
      </li>
    )
  })

  return (
    <>
      <section className="max-w-4xl mx-auto">
        <ul className="pt-4 pb-3 px-4 l-breadcrumb">{breadcrumbDoms}</ul>
      </section>
    </>
  )
}
