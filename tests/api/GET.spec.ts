import {expect, test} from "@playwright/test";

test.describe('GET /api/users', () => {
    test('schema és alap üzleti contract rendben van', async ({ request }) => {
        const response = await request.get('api/users?page=1');
        expect(response.status()).toBe(200);

        const json = await response.json();

        expect(json.page).toBe(1);
        expect(json.per_page).toEqual(expect.any(Number));
        expect(json.total).toEqual(expect.any(Number));
        expect(json.total_pages).toEqual(expect.any(Number));
        expect(Array.isArray(json.data)).toBeTruthy();
        expect(json.data.length).toBeGreaterThan(0);

        for (const user of json.data) {
            expect(user.id).toEqual(expect.any(Number));
            expect(user.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
            expect(user.first_name).toEqual(expect.any(String));
            expect(user.last_name).toEqual(expect.any(String));
            expect(user.avatar).toMatch(/^https?:\/\//);
        }

        expect(json.support).toEqual(
            expect.objectContaining({
                url: expect.any(String),
                text: expect.any(String),
            })
        );
    });

    test('pagináció működik és más adat jön különböző oldalakon', async ({ request }) => {
        const page1Response = await request.get('api/users?page=1');
        const page2Response = await request.get('api/users?page=2');

        expect(page1Response.status()).toBe(200);
        expect(page2Response.status()).toBe(200);

        const page1 = await page1Response.json();
        const page2 = await page2Response.json();

        expect(page1.page).toBe(1);
        expect(page2.page).toBe(2);

        expect(Array.isArray(page1.data)).toBeTruthy();
        expect(Array.isArray(page2.data)).toBeTruthy();

        const page1Ids = page1.data.map((u: any) => u.id);
        const page2Ids = page2.data.map((u: any) => u.id);

        expect(page1Ids).not.toEqual(page2Ids);
    });

    test('nagy oldalszámnál is konzisztens választ ad', async ({ request }) => {
        const response = await request.get('api/users?page=999');
        expect(response.status()).toBe(200);

        const json = await response.json();

        expect(json.page).toBe(999);
        expect(json.per_page).toEqual(expect.any(Number));
        expect(json.total).toEqual(expect.any(Number));
        expect(json.total_pages).toEqual(expect.any(Number));
        expect(json.data).toEqual([]);
    });
});