import { FaGithub, FaTwitter } from 'react-icons/fa'

export const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-zinc-800 absolute bottom-0 w-full text-white py-2">
        <div className="flex justify-center text-2xl my-1">
          <div className="px-2">
            <a href="https://twitter.com/haruton3301" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
          <div className="px-2">
            <a href="https://github.com/kduxwr" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>
        <div className="text-center my-1">
          <span>© 2022 はるとんのブログ</span>
        </div>
      </footer>
    </>
  )
}
