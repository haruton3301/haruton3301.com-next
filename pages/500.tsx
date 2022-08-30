import type { NextPage } from 'next/types'

import { Breadcrumb } from '~/components/Breadcrumb'
import { PageTitle } from '~/components/PageTitle'
import { Layout } from '~/contents/Layout'

const InternalServerError: NextPage = () => {
  return (
    <Layout title="500" description="エラーページです。" type="blog" url="">
      <Breadcrumb
        breadcrumbs={[
          { name: 'Home', slug: '' },
          { name: 'エラーページ', slug: '' }
        ]}
      />
      <PageTitle title="500 Internal server error." />
    </Layout>
  )
}

export default InternalServerError
