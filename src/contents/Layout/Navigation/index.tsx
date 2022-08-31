import Link from 'next/link'
import { BsFillShieldFill, BsFillTagFill } from 'react-icons/bs'
import { FaHome, FaWindowMaximize } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
import { RiAccountCircleFill } from 'react-icons/ri'

type Props = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const Navigation: React.FC<Props> = (props) => {
  const { isOpen, setIsOpen } = props
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
      <div
        className={
          'fixed left-0 top-0 w-screen h-screen z-30 bg-black transform ease-in-out duration-300 ' +
          (isOpen
            ? 'transition-opacity opacity-30 pointer-events-auto'
            : ' transition-opacity opacity-0 pointer-events-none')
        }
        onClick={() => {
          setIsOpen(false)
        }}
      ></div>
      <div
        className={
          'fixed left-0 top-0 z-40 transform ease-in-out duration-200 transition-transform  -translate-x-72' +
          (isOpen ? 'transition-opacity opacity-100 translate-x-0' : ' transition-all  -translate-x-72')
        }
      >
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
