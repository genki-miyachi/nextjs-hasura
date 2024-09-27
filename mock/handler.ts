import { graphql } from 'msw'

export const handlers = [
  graphql.query('GetUsers', (req, res, ctx) => {
    return res(
      ctx.data({
        users: [
          {
            __typename: 'users',
            id: '550e8400-e29b-41d4-a716-446655440000',
            name: 'Test user A',
            created_at: '2022-01-15T09:30:00Z',
          },
          {
            __typename: 'users',
            id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
            name: 'Test user B',
            created_at: '2023-04-22T14:45:00Z',
          },
          {
            __typename: 'users',
            id: '6ba7b810-9dad-11d1-80b4-00c04fd430c8',
            name: 'Test user C',
            created_at: '2023-06-03T18:20:00Z',
          },
        ],
      }),
    )
  }),
  graphql.query('GetUsers', (req, res, ctx) => {
    return res(
      ctx.data({
        users: [
          {
            __typename: 'users',
            id: '550e8400-e29b-41d4-a716-446655440000',
          },
          {
            __typename: 'users',
            id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
          },
          {
            __typename: 'users',
            id: '6ba7b810-9dad-11d1-80b4-00c04fd430c8',
          },
        ],
      }),
    )
  }),
  graphql.query('GetUserById', (req, res, ctx) => {
    const { id } = req.variables
    if (id === '550e8400-e29b-41d4-a716-446655440000') {
      return res(
        ctx.data({
          users_by_pk: {
            __typename: 'users',
            id: '550e8400-e29b-41d4-a716-446655440000',
            name: 'Test user A',
            created_at: '2022-01-15T09:30:00Z',
          },
        }),
      )
    }

    if (id === '550e8400-e29b-41d4-a716-446655440000') {
      return res(
        ctx.data({
          users_by_pk: {
            __typename: 'users',
            id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
            name: 'Test user B',
            created_at: '2023-04-22T14:45:00Z',
          },
        }),
      )
    }

    if (id === '6ba7b810-9dad-11d1-80b4-00c04fd430c8') {
      return res(
        ctx.data({
          users_by_pk: {
            __typename: 'users',
            id: '6ba7b810-9dad-11d1-80b4-00c04fd430c8',
            name: 'Test user C',
            created_at: '2023-06-03T18:20:00Z',
          },
        }),
      )
    }
  }),
]
