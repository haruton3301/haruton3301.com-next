import type { NextPage } from "next/types"

import { Breadcrumb } from "@/components/Breadcrumb"
import { PageTitle } from "@/components/PageTitle"
import { Layout } from "@/contents/Layout"

const PageNotFound: NextPage = () => {
  return (
    <Layout title="404" description="エラーページです。" type="blog" url="">
      <Breadcrumb
        breadcrumbs={[
          { name: "Home", slug: "" },
          { name: "エラーページ", slug: "" },
        ]}
      />
      <PageTitle title="404 Page not found." />
    </Layout>
  )
}

export default PageNotFound
