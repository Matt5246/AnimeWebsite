import { expect, test, vi, describe } from 'vitest'
import { render } from '@testing-library/react'
import { redirect } from 'next/navigation';
import Page from '../app/page'

vi.mock('next/navigation', () => ({
  redirect: vi.fn(),
}));

describe('Page component', () => {
  test('calls redirect to the specified route', () => {
    render(<Page />);

    expect(redirect).toHaveBeenCalledWith('/home');
  });
});