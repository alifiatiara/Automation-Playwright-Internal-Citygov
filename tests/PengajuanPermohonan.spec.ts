import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://internal.citigov.id/signin');
  await page.getByPlaceholder('Masukkan email').fill('yuhut@teml.net');
  await page.getByRole('button', { name: 'Kata sandi' }).click();
  await page.getByPlaceholder('Masukan kata sandi').click();
  await page.getByPlaceholder('Masukan kata sandi').fill('Yuhut123_');
  await page.getByRole('button', { name: 'Masuk' }).click();
  await page.getByRole('link', { name: 'Pelayanan', exact: true }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });

  //Kebutuhan Test
  await page.getByText('Soal Software Development').first().click();
  await page.getByText('Pilih Jenis Pemohon').click();
  await page.getByText('Pemilik', { exact: true }).click();
  await page.getByText('WNI').click();
  await page.getByText('Swasta', { exact: true }).click();
  await page.getByText('Permanen').click();
  await page.getByText('Bando Jalan').click();
  await page.getByPlaceholder('Masukkan No. KTP').click();
  await page.getByPlaceholder('Masukkan No. KTP').fill('111111111111');
  await page.getByPlaceholder('Masukkan Paspor').click();
  await page.getByPlaceholder('Masukkan Paspor').fill('11111111111111');
  await page.getByPlaceholder('Masukkan Nama Lengkap').click();
  await page.getByPlaceholder('Masukkan Nama Lengkap').fill('Yuhut');
  await page.getByPlaceholder('Masukkan Tempat Lahir').click();
  await page.getByPlaceholder('Masukkan Tempat Lahir').fill('Jakarta');
  await page.getByPlaceholder('Masukkan Tanggal').click();
  await page.getByRole('cell', { name: '01' }).first().click();
  await page.getByPlaceholder('Masukkan Alamat Pemohon').fill('Jalan Angkasa');
  await page.getByPlaceholder('Masukkan Negara Pemohon').click();
  await page.getByPlaceholder('Masukkan Negara Pemohon').fill('Indonesia');

  //Wilayah
  //Provinsi
  await page.getByText('Pilih Provinsi Provinsi', { exact: true }).click();
  await page.getByText('JAWA BARAT', { exact: true }).click();
  //Kabupaten/Kota Provinsi
  await page.getByText('Pilih Provinsi Kabupaten/ Kota Provinsi', { exact: true }).click();
  await page.getByText('JAWA TENGAH', { exact: true }).click();
  await page.getByText('Pilih Kabupaten/ Kota Kabupaten/ Kota Provinsi', { exact: true }).click();
  await page.getByText('KABUPATEN BANJARNEGARA', { exact: true }).click();
  //Kecamatan
  await page.getByText('Pilih Provinsi Kecamatan', { exact: true }).click();
  await page.getByText('BALI', { exact: true }).click();
  await page.getByText('Pilih Kabupaten/ Kota Kecamatan', { exact: true }).click();
  await page.getByText('KABUPATEN BADUNG', { exact: true }).click();
  await page.getByText('Pilih Kecamatan Kecamatan', { exact: true }).click();
  await page.getByText('ABIANSEMAL', { exact: true }).click();
  //Kelurahan
  await page.getByText('Pilih Provinsi Kelurahan', { exact: true }).click();
  await page.getByText('JAWA TIMUR', { exact: true }).click();
  await page.getByText('Pilih Kabupaten/ Kota Kelurahan', { exact: true }).click();
  await page.getByText('KABUPATEN BANGKALAN', { exact: true }).click();
  await page.getByText('Pilih Kecamatan Kelurahan', { exact: true }).click();
  await page.getByText('AROSBAYA', { exact: true }).click();
  await page.getByText('Pilih Kelurahan Kelurahan', { exact: true }).click();
  await page.getByText('BALUNG', { exact: true }).click();

  await page.getByPlaceholder('Masukkan No Telepon Pemohon').click();
  await page.getByPlaceholder('Masukkan No Telepon Pemohon').fill('08889999');
  await page.getByPlaceholder('Masukkan No. HP Pemohon').click();
  await page.getByPlaceholder('Masukkan No. HP Pemohon').fill('08888888');
  await page.getByPlaceholder('Masukkan Email Pemohon').click();
  await page.getByPlaceholder('Masukkan Email Pemohon').fill('test@email.com');
  await page.getByPlaceholder('Masukkan Keterangan Pekerjaan').click();
  await page.getByPlaceholder('Masukkan Keterangan Pekerjaan').fill('Swasta');
  await page.getByPlaceholder('Masukkan Nama Kuasa').click();
  await page.getByPlaceholder('Masukkan Nama Kuasa').fill('Yuyu');
  await page.getByPlaceholder('Masukkan Nomor Identitas Kuasa').click();
  await page.getByPlaceholder('Masukkan Nomor Identitas Kuasa').fill('1111111111111111');
  await page.getByPlaceholder('Masukkan Telepon Kuasa').click();
  await page.getByPlaceholder('Masukkan Telepon Kuasa').fill('08899889');

  //Identitas Perusahaan
  await page.getByPlaceholder('Masukkan NPWP Perusahaan').click();
  await page.getByPlaceholder('Masukkan NPWP Perusahaan').fill('1111111122222222');
  await page.getByPlaceholder('Masukkan Nama Perusahaan').click();
  await page.getByPlaceholder('Masukkan Nama Perusahaan').fill('PT Sejahtera');
  await page.getByPlaceholder('Masukkan Alamat Perusahaan').click();
  await page.getByPlaceholder('Masukkan Alamat Perusahaan').fill('Jalan Bahagia');
  await page.getByPlaceholder('Masukkan Negara Perusahaan').click();
  await page.getByPlaceholder('Masukkan Negara Perusahaan').fill('Indonesia');

  //Wilayah Perusahaan
  //Provinsi Wilayah Perusahaan
  await page.getByText('Pilih Provinsi Provinsi Wilayah Perusahaan', { exact: true }).click();
  await page.getByText('SUMATERA UTARA', { exact: true }).click();

  //Kabupaten Kota Wilayah Perusahaan
  await page.getByText('Pilih Provinsi Kabupaten/ Kota Wilayah Perusahaan', { exact: true }).click();
  await page.getByText('SUMATERA BARAT', { exact: true }).click();
  await page.getByText('Pilih Kabupaten/ Kota Kabupaten/ Kota Wilayah Perusahaan', { exact: true }).click();
  await page.getByText('KABUPATEN AGAM', { exact: true }).click();

  //Kecamatan Wilayah Perusahaan
  await page.getByText('Pilih Provinsi Kecamatan Wilayah Perusahaan', { exact: true }).click();
  await page.getByText('KALIMANTAN SELATAN', { exact: true }).click();
  await page.getByText('Pilih Kabupaten/ Kota Kecamatan Wilayah Perusahaan', { exact: true }).click();
  await page.getByText('KABUPATEN BALANGAN', { exact: true }).click();
  await page.getByText('Pilih Kecamatan Kecamatan Wilayah Perusahaan', { exact: true }).click();
  await page.getByText('AWAYAN', { exact: true }).click();

  //Kelurahan Wilayah Perusahaan
  await page.getByText('Pilih Provinsi Kelurahan Wilayah Perusahaan', { exact: true }).click();
  await page.getByText('LAMPUNG', { exact: true }).click();
  await page.getByText('Pilih Kabupaten/ Kota Kelurahan Wilayah Perusahaan', { exact: true }).click();
  await page.getByText('KABUPATEN MESUJI', { exact: true }).click();
  await page.getByText('Pilih Kecamatan Kelurahan Wilayah Perusahaan', { exact: true }).click();
  await page.getByText('MESUJI', { exact: true }).click();
  await page.getByText('Pilih Kelurahan Kelurahan Wilayah Perusahaan', { exact: true }).click();
  await page.getByText('SIDOMULYO', { exact: true }).click();

  await page.getByPlaceholder('Masukkan Kode Pos Perusahaan').click();
  await page.getByPlaceholder('Masukkan Kode Pos Perusahaan').fill('11111');
  await page.getByPlaceholder('Masukkan No Telepon Perusahaan').click();
  await page.getByPlaceholder('Masukkan No Telepon Perusahaan').fill('021121121');
  await page.getByPlaceholder('Masukkan No Fax Perusahaan').click();
  await page.getByPlaceholder('Masukkan No Fax Perusahaan').fill('02111122');
  await page.getByPlaceholder('Masukkan Email Perusahaan').click();
  await page.getByPlaceholder('Masukkan Email Perusahaan').fill('sejahtera@teml.com');
  await page.getByPlaceholder('Masukkan Judul Reklame').click();
  await page.getByPlaceholder('Masukkan Judul Reklame').fill('Bahagia Sejahtera');
  await page.getByPlaceholder('Masukkan Jumlah').click();
  await page.getByPlaceholder('Masukkan Jumlah').fill('5');
  await page.locator('span').filter({ hasText: 'Ukuran Reklame' }).locator('span').nth(1).click();
  await page.getByPlaceholder('Masukkan Panjang').click();
  await page.getByPlaceholder('Masukkan Panjang').fill('10');
  await page.getByPlaceholder('Masukkan Lebar').click();
  await page.getByPlaceholder('Masukkan Lebar').fill('10');
  await page.getByPlaceholder('Masukkan Sisi').click();
  await page.getByPlaceholder('Masukkan Sisi').fill('10');
  await page.getByRole('button', { name: 'Tambah' }).click();
  await page.locator('span').filter({ hasText: 'Lama Pemasangan' }).locator('span').nth(1).click();
  await page.getByPlaceholder('Masukkan Tanggal').nth(1).click();
  await page.getByRole('cell', { name: '01' }).first().click();
  await page.getByPlaceholder('Masukkan Tanggal').nth(2).click();
  await page.getByRole('cell', { name: '08' }).first().click();
  await page.getByRole('button', { name: 'Tambah' }).click();
  await page.getByPlaceholder('Masukkan Letak Reklame').click();
  await page.getByPlaceholder('Masukkan Letak Reklame').fill('Pinggir Jalan');
  await page.locator('span').filter({ hasText: 'Data Izin Reklame' }).locator('span').nth(1).click();
  await page.getByPlaceholder('Masukkan Kota/Kabupaten').click();
  await page.getByPlaceholder('Masukkan Kota/Kabupaten').fill('Jakarta');
  await page.getByPlaceholder('Masukkan Kecamatan Reklame').click();
  await page.getByPlaceholder('Masukkan Kelurahan/Desa').fill('Gambir');
  await page.getByPlaceholder('Masukkan Alamat', { exact: true }).click();
  await page.getByPlaceholder('Masukkan Alamat', { exact: true }).fill('Jalan Mulia');
  await page.getByRole('button', { name: 'Tambah' }).click();
});