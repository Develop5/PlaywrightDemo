import { expect, test } from '@playwright/test'

test('update user post', async ({ request }) => {
    const response = await request.put('/posts/1', {
        data: {
            id: 1,
            title: 'Existing Post',
            body: 'This is a post',
            userId: 1
        }
    })

    expect(response.ok()).toBeTruthy()
    expect(response.status()).toBe(200)
    expect(await response.json()).toEqual(expect.objectContaining( {
        "body" : "This is a post",
        "id" : 1,
        "title" : "Existing Post",
        "userId" : 1
    } ))
})

