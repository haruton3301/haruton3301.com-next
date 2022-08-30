import Link from 'next/link'
import { BsFillShieldFill, BsFillTagFill } from 'react-icons/bs'
import { FaHome, FaWindowMaximize } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
import { RiAccountCircleFill } from 'react-icons/ri'

export const Navigation: React.FC = () => {
  const navListA = [
    { icon: <FaHome />, name: 'Home', href: '/' },
    { icon: <FaWindowMaximize />, name: '記事一覧', href: '/articles' },
    { icon: <BsFillTagFill />, name: 'タグ一覧', href: '/tags' }
  ]

  const navListB = [
    { icon: <RiAccountCircleFill />, name: '運営者情報', href: '/profile' },
    { icon: <BsFillShieldFill />, name: 'プライバシーポリシー', href: '/policy' },
    { icon: <GrMail />, name: 'お問合わせ', href: '/contact' }
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
