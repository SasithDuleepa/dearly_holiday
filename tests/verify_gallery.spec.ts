import { test, expect } from '@playwright/test';

test.describe('Admin Gallery', () => {
  test('should allow image upload and deletion for each category', async ({ page }) => {
    await page.goto('http://localhost:3000/admin/gallery');

    // Login
    await page.fill('input[id="username"]', '11');
    await page.fill('input[id="password"]', '11');
    await page.click('button[type="submit"]');
    await page.waitForURL('http://localhost:3000/admin/gallery');

    // Handle the delete confirmation dialog
    page.on('dialog', dialog => dialog.accept());

    // Create dummy files to upload
    const filesToUpload = [
      { name: 'test-cooking.jpg', category: 'cooking-class' },
      { name: 'test-guest-house.jpg', category: 'guest-house' },
      { name: 'test-safari.jpg', category: 'safari' },
    ];

    for (const file of filesToUpload) {
      // Upload
      await page.setInputFiles('input[type="file"]', {
        name: file.name,
        mimeType: 'image/jpeg',
        buffer: Buffer.from('test'),
      });
      await page.selectOption('select', file.category);
      await page.click('form button[type="submit"]');

      // Verify upload
      const imageSelector = `img[src*="${file.name.replace('.jpg', '')}"]`;
      const image = page.locator(imageSelector);
      await expect(image).toBeVisible({ timeout: 10000 });

      // Delete
      const imageWrapper = image.locator('..'); // parent is <div class="relative group">
      await imageWrapper.hover();
      await imageWrapper.locator('button').click();

      // Verify deletion
      await expect(image).not.toBeVisible({ timeout: 10000 });
    }

    await page.screenshot({ path: 'tests/screenshots/admin-gallery.png' });
  });
});
