import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://internal.citigov.id/signin');
  await page.getByText('Daftar Sekarang').click();
  await page.getByPlaceholder('Masukkan nama lengkap').click();
  await page.getByPlaceholder('Masukkan nama lengkap').fill('Yuhut');
  await page.getByPlaceholder('Masukkan email').click();
  await page.getByPlaceholder('Masukkan email').fill('yuhut@teml.net');
  await page.getByPlaceholder('Kata sandi', { exact: true }).click();
  await page.getByPlaceholder('Kata sandi', { exact: true }).fill('Yuhut123_');
  await page.getByPlaceholder('Konfirmasi Kata sandi').click();
  await page.getByPlaceholder('Konfirmasi Kata sandi').fill('Yuhut123_');
  await page.getByPlaceholder('Masukkan nomor telepon /').click();
  await page.getByPlaceholder('Masukkan nomor telepon /').fill('87898789');
  await page.getByRole('button', { name: 'Daftar' }).click();
  await page.getByRole('button', { name: 'Selanjutnya' }).click();
  await page.locator('input[name="otp1"]').fill('0');
  await page.locator('input[name="otp2"]').fill('5');
  await page.locator('input[name="otp3"]').fill('9');
  await page.locator('input[name="otp4"]').fill('2');
});