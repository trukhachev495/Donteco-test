import { test, expect } from '@playwright/test';
const chance = require('chance').Chance();

test.describe('API test hotel', () => {
  let testData: { name: string; email: string; phone: string; subject: string; description: string };
  test.beforeAll(() => {
    testData = {
      name: chance.name(),
      email: chance.email(),
      phone: chance.phone(),
      subject: chance.word({ length: 6 }),
      description: chance.sentence()
    };
  });
  test('Проверка отправки сообщения в тех. поддержку отеля через API', async ({ request }) => {
    // Отправляем GET-запрос
    const response = await request.post('https://automationintesting.online/message/', {
      data: testData
    });

    expect(response.status()).toBe(201);
    expect(await response.json()).toMatchObject(testData);
  });
});
