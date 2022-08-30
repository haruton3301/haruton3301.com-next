export const MainVisual: React.FC = () => {
  return (
    <section className="max-w-4xl px-3 lg:px-0 mx-auto mb-8 ">
      <div className="mockup-code">
        <pre data-prefix="$">
          <code>npm i haruton3301.com</code>
        </pre>
        <pre data-prefix=">" className="text-warning">
          <code>installing...</code>
        </pre>
        <pre data-prefix=">" className="text-success">
          <code>Done!</code>
        </pre>
        <pre data-prefix="$">
          <code></code>
        </pre>
        <pre data-prefix="$">
          <code>haruton3301.com --help</code>
        </pre>
        <pre data-prefix=">">
          <code>
            このサイトは、はるとん(
            <a href="https://twitter.com/haruton3301/" target="_blank" rel="noopener noreferrer">
              @haruton3301
            </a>
            )が技術的なメモをつらつらと書くブログです。
          </code>
        </pre>
        <pre data-prefix="$">
          <code></code>
        </pre>
      </div>
    </section>
  )
}
