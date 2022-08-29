import Link from 'next/link'
import { FaHome } from 'react-icons/fa'

export const Navigation: React.FC = () => {
  const navListA = [
    { icon: <FaHome />, name: 'Home', href: '/' },
    { icon: <FaHome />, name: '記事一覧', href: '/' },
    { icon: <FaHome />, name: 'タグ一覧', href: '/' }
  ]

  const navListB = [
    { icon: <FaHome />, name: '運営者情報', href: '/' },
    { icon: <FaHome />, name: 'プライバシーポリシー', href: '/' },
    { icon: <FaHome />, name: 'お問合わせ', href: '/' }
  ]

  return (
    <>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <nav className="h-screen rounded w-72 bg-white py-4 text-base-content">
          <ul className="divide-y">
            <div>
              {navListA.map(({ href, icon, name }) => {
                return (
                  <li key={name} className="m-2">
                    <Link href={href}>
                      <a>
                        <button className="btn btn-ghost lex justify-start items-center text-md w-full">
                          <span className="text-2xl mr-4">{icon}</span>
                          {name}
                        </button>
                      </a>
                    </Link>
                  </li>
                )
              })}
            </div>
            <div>
              {navListB.map(({ href, icon, name }) => {
                return (
                  <li key={name} className="m-2">
                    <Link href={href}>
                      <a>
                        <button className="btn btn-ghost lex justify-start items-center text-md w-full">
                          <span className="text-2xl mr-4">{icon}</span>
                          {name}
                        </button>
                      </a>
                    </Link>
                  </li>
                )
              })}
            </div>
          </ul>
        </nav>
      </div>
    </>
  )
}
