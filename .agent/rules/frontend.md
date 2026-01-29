---
trigger: glob
glob: "**/*.{js,jsx,ts,tsx,css,scss,html,vue,svelte}"
---

# FRONTEND.MD - Premium UI/UX Standards

> **Mục tiêu**: Đảm bảo giao diện luôn đạt chuẩn Premium, mượt mà và nhất quán.

---

## 🎨 1. AESTHETICS (Thẩm mỹ)

1. **Color Palette**: 
   - Không dùng màu gốc (plain red, plain blue).
   - Sử dụng HSL hoặc Hex đã tinh chỉnh (ví dụ: Thay vì `#0000FF`, dùng `#3B82F6`).
2. **Spacing**:
   - Sử dụng hệ thống lưới 4px/8px (System 8).
   - Luôn có khoảng thở (Whitespace) hợp lý.
3. **Typography**:
   - Ưu tiên font hiện đại (Inter, Roboto, SF Pro).
   - Hệ thống Type Scale rõ ràng (H1 > H2 > H3).

---

## ⚡ 2. PERFORMANCE & INTERACTION

1. **Micro-interactions**:
   - Mọi nút bấm (Button) phải có trạng thái `:hover` và `:active`.
   - Sử dụng transition mượt (ví dụ: `transition-all duration-200`).
2. **Skeleton Loading**:
   - Không để màn hình trắng. Luôn hiển thị Skeleton khi đang tải dữ liệu.
3. **Responsive**:
   - Mobile-First: Code cho mobile trước, sau đó media query cho PC.

---

## 🛡️ 3. CODE QUALITY

1. **Component**: 
   - Chia nhỏ Component (< 200 dòng).
   - Đặt tên theo PascalCase (`UserProfile.tsx`).
2. **State Management**:
   - Tránh Prop Drilling quá 3 cấp.
   - Sử dụng Context hoặc State Manager (Zustand/Redux) khi cần.
