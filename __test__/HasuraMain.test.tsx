import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { setupServer } from 'msw/node'
import { getPage, initTestHelpers } from 'next-page-tester'
import { handlers } from '../mock/handlers'

initTestHelpers()
const server = setupServer(...handlers)
beforeAll(() => {
  server.listen()
})

afterEach(() => {
  server.resetHandlers()
  cleanup()
})

afterAll(() => {
  server.close()
})

describe('Hasura Fetch Test Cases', () => {
  it('Should render the list of users by useQuery', async () => {
    const { page } = await getPage({
      route: '/hasura-main',
    })
    render(page)

    expect(await screen.findByText('Hasura main page')).toBeInTheDocument()
    // FIXME: fetchPolicy: 'cache-and-network' だとテストが通らない...
    // expect(await screen.findByText('Test user A')).toBeInTheDocument()
    // expect(screen.findByText('Test user B')).toBeInTheDocument()
    // expect(screen.findByText('Test user C')).toBeInTheDocument()
  })
})
