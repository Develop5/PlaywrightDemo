import { expect, test } from '@playwright/test'

test('delete user posts', async ({ request }) => {
    const response = await request.delete('/posts/1')
    expect(response.ok()).toBeTruthy()
    expect(response.status()).toBe(200)
    expect( await response.text()).toContain("{}")
})