import { test, expect } from '@playwright/test';
import { Hotel } from '../pages';
import { supportApplicationForm } from '../utils';
const chance = require('chance').Chance();

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  supportApplicationForm.randomName = chance.name();
  supportApplicationForm.randomSubject = chance.word({ length: 6 });
});

test.describe('Проверки функциональности и отображения на главной странице отеля', async () => {
  test('Проверка отправки сообщения в тех. поддержку отеля', async ({ page }) => {
    const HotelPage = new Hotel(page);
    await HotelPage.fillName(supportApplicationForm.randomName);
    await HotelPage.fillEmail(chance.email());
    await HotelPage.fillPhone(chance.phone());
    await HotelPage.fillSubject(supportApplicationForm.randomSubject);
    await HotelPage.fillMessage(chance.sentence());
    await HotelPage.clickSubmitButton();

    expect(await HotelPage.extractTextFromSupportMessage()).toBe(
      `Thanks for getting in touch ${supportApplicationForm.randomName}!We'll get back to you about${supportApplicationForm.randomSubject}as soon as possible.`
    );
  });
});
