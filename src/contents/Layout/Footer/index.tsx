import { siteTitle } from "@/libs/constants"
import { FaGithub } from "react-icons/fa"

export const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-zinc-800 w-full text-white py-2">
        <div className="flex justify-center text-2xl my-1">
          <div className="px-2">
            <a
              href="https://github.com/haruton3301"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <div className="text-center my-2 text-sm">
          <span>© 2025 {siteTitle}</span>
        </div>
      </footer>
    </>
  )
}
