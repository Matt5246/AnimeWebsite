import { expect, test, vi, describe } from 'vitest'
import { render } from '@testing-library/react'
import { redirect } from 'next/navigation'

import AuthPage from '../../app/auth/page'

vi.mock('next/navigation', () => ({
  redirect: vi.fn(),
}))

describe('Auth page component', () => {
  test('calls redirect to the specified route', () => {
    render(<AuthPage />)

    expect(redirect).toHaveBeenCalledWith('/auth/sign-in')
  })
})
