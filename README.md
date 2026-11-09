# Trang quán nhỏ

Khung trang web mẫu cho quán nhỏ, doanh nghiệp nhỏ. Một khung dùng chung, có 3 kiểu ngành:

| Ngành | Đường dẫn | Màu, font tiêu đề |
|---|---|---|
| Quán cà phê | `/` | nâu cà phê + cam đất, Fraunces |
| Quán ăn | `/quan-an/` | đỏ gạch + vàng nghệ, Be Vietnam Pro đậm |
| Tiệm dịch vụ (nail, tóc) | `/tiem-dich-vu/` | tím than + hồng, Playfair Display nghiêng |

Công nghệ: Astro + Tailwind 4 + pnpm, deploy Cloudflare Workers (file tĩnh trong `dist/`).

## Làm trang cho khách mới

1. Sửa `src/data/noi-dung.json`: tên quán, khẩu hiệu, menu/bảng giá, giờ mở cửa, địa chỉ, số Zalo.
2. Chọn `nganh` (`ca-phe`, `quan-an`, `dich-vu`). Muốn màu khác thì thêm một khối `[data-nganh="..."]` trong `src/styles/global.css`.
3. Bỏ dải "Trang mẫu, xem kiểu khác" ở đầu `src/components/TrangQuan.astro` khi giao cho khách.

## Chạy thử

```bash
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # ra thư mục dist/
```

## Xu hướng đã dùng (2026)

- Lưới bento ở đầu trang: món bán chạy, giờ mở cửa, địa chỉ trong một màn.
- Chữ tiêu đề lớn kiểu poster, màu ấm, nền có hạt (grain) bằng SVG.
- Ô gradient lưới (mesh gradient) thay ảnh khi quán chưa có ảnh đẹp.
- Hiện dần khi cuộn bằng CSS (`animation-timeline: view()`), dải chữ chạy, icon động (hơi nóng bốc lên, lấp lánh) bằng CSS thuần.
- Ưu tiên điện thoại: thanh nút dính đáy Gọi · Zalo · Chỉ đường; chấm "Đang mở cửa" theo giờ Việt Nam.
- Cuộn mượt khi bấm link `#`, tắt hết hiệu ứng khi máy bật "giảm chuyển động". Có nút sáng/tối.
