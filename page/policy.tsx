import type { NextPage } from "next/types"

import { Breadcrumb } from "@/components/Breadcrumb"
import { PageTitle } from "@/components/PageTitle"
import { WhiteArticle } from "@/components/WhiteArticle"
import { Layout } from "@/contents/Layout"

const Policy: NextPage = () => {
  return (
    <Layout
      title="プライバシーポリシー"
      description="プライバシーポリシーのページです。"
      type="article"
      url="policy"
    >
      <Breadcrumb
        breadcrumbs={[
          { name: "Home", slug: "" },
          { name: "プライバシーポリシー", slug: "policy" },
        ]}
      />
      <PageTitle title="プライバシーポリシー" />
      <WhiteArticle>
        <>
          <p>
            当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を使用しています。
          </p>
          <p>
            このGoogleアナリティクスはデータの収集のためにCookieを使用しています。このデータは匿名で収集されており、個人を特定するものではありません。
          </p>
          <p>
            この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。
          </p>
          <p>
            この規約に関しての詳細は
            <a
              href="https://marketingplatform.google.com/about/analytics/terms/jp/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Googleアナリティクスサービス利用規約
            </a>
            や
            <a
              href="https://policies.google.com/technologies/ads?hl=ja"
              rel="noopener noreferrer"
              target="_blank"
            >
              Googleのポリシーの規約
            </a>
            をご覧ください。
          </p>
        </>
      </WhiteArticle>
    </Layout>
  )
}

export default Policy
