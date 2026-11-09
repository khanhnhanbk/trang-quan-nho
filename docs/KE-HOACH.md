# Kế hoạch trang quán nhỏ

Cập nhật: 09/11/2026. Thread "Làm trang demo cho quán nhỏ".

## Đã chốt
- Hướng: một khung, 3 kiểu ngành (cà phê, quán ăn, tiệm dịch vụ). Novian chọn 09/11/2026.
- Khung giống trang giáo viên: Astro 7 + Tailwind 4 + pnpm, Cloudflare Workers, `wrangler.jsonc` có `"previews": {}`.
- Nội dung tách ở `src/data/noi-dung.json` để MyADE tự sinh trang sau này.

## Đã làm (PR đầu tiên)
- 3 trang mẫu, nút sáng/tối, cuộn mượt, icon động bằng CSS, ảnh chụp ở `docs/screenshots/`.

## Việc tiếp theo (chưa làm)
1. Kết nối repo với Cloudflare Workers Builds để có link thật + link xem trước mỗi PR (Novian làm trên dashboard Cloudflare).
2. Thay ô gradient "Không gian" bằng ảnh thật khi có khách (thêm trường `anh` vào JSON).
3. Thêm ngành khác nếu có khách: tiệm bánh, tiệm sửa xe, spa.
4. Trang bán gói cho quán nhỏ (giá, quy trình), tách khỏi trang mẫu.
