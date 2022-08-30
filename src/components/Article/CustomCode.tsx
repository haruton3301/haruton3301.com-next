import type { CodeComponent } from 'react-markdown/lib/ast-to-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

export const CustomCode: CodeComponent = ({ children, className, inline }) => {
  const style = atomDark
  const match = /language-(\w+)(:?.+)?/.exec(className || '')
  const lang = match && match[1] ? match[1] : ''
  const name = match && match[2] ? match[2].slice(1) : ''
  if (lang === 'link') {
    // blog card
  } else if (lang === 'twitter') {
    // twitter embed
  }
  return !inline && match ? (
    <>
      {name && <span className="rounded-md bg-stone-200 py-1 px-2 text-sm dark:bg-stone-600">{name}</span>}
      <SyntaxHighlighter
        style={style}
        language={lang}
        PreTag="div"
        className="border-2 text-base dark:border-stone-400 md:text-lg"
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    </>
  ) : (
    <code className="mx-1 rounded-md bg-stone-200 py-1 px-2 text-red-600 dark:bg-stone-600 dark:text-red-300">
      {children}
    </code>
  )
}
