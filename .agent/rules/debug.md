---
trigger: model_decision
description: "When the user asks to fix bugs, analyze errors, investigate issues, or troubleshoot code."
---

# DEBUG.MD - Systematic Debugging Protocol

> **Mục tiêu**: Tìm nguyên nhân gốc rễ (Root Cause) và sửa lỗi triệt để, không vá víu tạm bợ.

---

## 🕵️ 1. INVESTIGATION PHASE (Điều tra)

1. **Read Logs**: Đọc kỹ Stack Trace. Lỗi xảy ra ở file nào, dòng nào?
2. **Reproduce**: Tìm cách tái hiện lỗi. Nếu không tái hiện được, không thể sửa được.
3. **Isolate**: Cô lập vấn đề. Tắt bớt các module khác để khoanh vùng.

---

## 🛠️ 2. FIXING PROTOCOL (Quy trình sửa)

1. **Understand WHY**: Không sửa mò (Trial & Error). Phải hiểu tại sao nó sai trước khi sửa.
2. **Minimal Change**: Sửa ít nhất có thể. Tránh Refactor lớn khi đang Hotfix.
3. **Regression Check**: Sửa xong lỗi A, có làm hỏng tính năng B không?

---

## 📝 3. POST-MORTEM (Báo cáo)

Sau khi sửa, phải giải thích cho User:
- **Nguyên nhân**: Tại sao lỗi?
- **Giải pháp**: Đã làm gì để sửa?
- **Phòng ngừa**: Làm sao để không bị lại?
