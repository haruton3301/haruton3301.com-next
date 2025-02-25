import type { NextPage } from "next/types"

import { Breadcrumb } from "@/components/Breadcrumb"
import { PageTitle } from "@/components/PageTitle"
import { WhiteArticle } from "@/components/WhiteArticle"
import { Layout } from "@/contents/Layout"

const Profile: NextPage = () => {
  return (
    <Layout
      title="運営者情報"
      description="運営者情報のページです。"
      type="article"
      url="profile"
    >
      <Breadcrumb
        breadcrumbs={[
          { name: "Home", slug: "" },
          { name: "運営者情報", slug: "profile" },
        ]}
      />
      <PageTitle title="運営者情報" />
      <WhiteArticle>
        <>
          <p>
            このサイトは、はるとん(
            <a
              href="https://twitter.com/haruton3301/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @haruton3301
            </a>
            )が技術的なメモをつらつらと書くブログです。
          </p>
          <p>
            当サイトで引用している文章・画像について、著作権は引用元にあります。
          </p>
          <p>
            ただ万が一、不適切な記事や画像、リンク等がありましたら早急に削除等の対応を致しますので、
            当サイトの『お問合わせ』からご連絡下さい。
          </p>
          <p>また、その他ご意見ご感想なども『お問合わせ』からお願いします。</p>
        </>
      </WhiteArticle>
    </Layout>
  )
}

export default Profile
