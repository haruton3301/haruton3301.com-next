import { Breadcrumb } from "@/components/Breadcrumb"
import { MetaTags } from "@/components/MetaTags"
import { PageTitle } from "@/components/PageTitle"

export default function NotFound() {
  return (
    <>
      <MetaTags title="404" description="エラーページです。" type="blog" />
      <Breadcrumb breadcrumbs={[{ name: "エラーページ" }]} />
      <PageTitle title="404 Page not found." />
    </>
  )
}
