---
trigger: glob
glob: "**/*.{py,js,ts,go,rs,sql,php,java}"
---

# BACKEND.MD - Solid Implementation Standards

> **Mục tiêu**: Xây dựng hệ thống Backend mạnh mẽ, dễ bảo trì và mở rộng.

---

## 🏗️ 1. API DESIGN

1. **RESTful/GraphQL**: Tuân thủ chuẩn mực (GET để lấy, POST để tạo, PUT/PATCH để sửa, DELETE để xóa).
2. **Response Format**:
   - Luôn trả về JSON thống nhất:
     ```json
     {
       "success": true,
       "data": { ... },
       "error": null
     }
     ```
3. **Status Codes**: Sử dụng đúng HTTP Code (200, 201, 400, 401, 403, 404, 500).

---

## 🗄️ 2. DATABASE & PERFORMANCE

1. **Indexing**: Luôn Index các cột thường xuyên query (WHERE, JOIN).
2. **N+1 Problem**: Tránh query trong vòng lặp. Sử dụng `.include()` hoặc `.join()`.
3. **Transaction**: Bọc các tác vụ ghi dữ liệu liên quan vào Transaction để đảm bảo tính toàn vẹn (ACID).

---

## 🛡️ 3. ERROR HANDLING & LOGGING

1. **Try-Catch**: Bọc logic vào try-catch blocks.
2. **Logging**: 
   - Không dùng `console.log` bừa bãi.
   - Sử dụng Logger có cấu trúc (Winston, Pino, Loguru) với level (INFO, WARN, ERROR).
3. **Graceful Shutdown**: Xử lý việc ngắt kết nối DB khi server dừng.
