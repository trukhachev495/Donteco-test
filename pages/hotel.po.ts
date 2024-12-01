import { Page } from '@playwright/test';

export class Hotel {
  private readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  readonly locators = {
    field: {
      name: '#name',
      email: '#email',
      phone: '#phone',
      subject: '#subject',
      message: '#description'
    },
    buttons: {
      submit: '#submitContact'
    },
    messageSupport: '.col-sm-5>div'
  };

  /** Вводит значение в поле "Имя"*/
  async fillName(name: string) {
    await this.page.locator(this.locators.field.name).fill(name);
  }

  /** Вводит значение в поле "Email"*/
  async fillEmail(email: string) {
    await this.page.locator(this.locators.field.email).fill(email);
  }

  /** Вводит значение в поле "Телефон"*/
  async fillPhone(phone: string) {
    await this.page.locator(this.locators.field.phone).fill(phone);
  }

  /** Вводит значение в поле "Тема"*/
  async fillSubject(subject: string) {
    await this.page.locator(this.locators.field.subject).fill(subject);
  }

  /** Вводит значение в поле "Сообщение"*/
  async fillMessage(message: string) {
    await this.page.locator(this.locators.field.message).fill(message);
  }

  /** Кликает на кнопку "Sumbit"*/
  async clickSubmitButton() {
    await this.page.click(this.locators.buttons.submit);
  }

  /** Извлекает текст из присланного сообещния от тех.поддержки*/
  async extractTextFromSupportMessage() {
    return await this.page.locator(this.locators.messageSupport).textContent();
  }
}
