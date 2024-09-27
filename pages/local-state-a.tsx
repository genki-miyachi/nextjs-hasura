import { VFC } from 'react'
import { Layout } from '../components/layout'
import { LocalStateA } from '../components/LocalStateA'

const LocalStatePageA: VFC = () => {
  return (
    <Layout title="Local State A">
      <LocalStateA />
    </Layout>
  )
}

export default LocalStatePageA
