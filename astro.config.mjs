// Cấu hình Astro: dùng Tailwind 4 qua plugin Vite. Trang tĩnh, không cần server.
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Link thật của trang: dùng cho link tuyệt đối (og:image). Đổi khi có tên miền riêng.
  site: 'https://trang-quan-nho.nhannguyenqna2002.workers.dev',
  vite: { plugins: [tailwindcss()] },
});
