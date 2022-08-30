import type { NextPage } from 'next/types'

import { Breadcrumb } from '~/components/Breadcrumb'
import { PageTitle } from '~/components/PageTitle'
import { WhiteArticle } from '~/components/WhiteArticle'
import { Layout } from '~/contents/Layout'

const Contact: NextPage = () => {
  return (
    <Layout title="お問合わせ" description="お問合わせページです。" type="article" url="contact">
      <Breadcrumb
        breadcrumbs={[
          { name: 'Home', slug: '' },
          { name: '問い合わせ', slug: 'contact' }
        ]}
      />
      <PageTitle title="お問合わせ" />
      <WhiteArticle>
        <iframe
          id="em-form"
          title="em-form"
          frameBorder={0}
          // allowtransparency={true}
          scrolling="no"
          style={{ width: '100%', height: '400px' }}
          src="https://em-form.web.app/api/tVjIPSYYo5MjqPUvoNp15P7bTss2-BTxlKJphAJiMF10ye8Zn?k=mZpEMrMVH7WKKujxJfeq"
        ></iframe>
      </WhiteArticle>
    </Layout>
  )
}

export default Contact
