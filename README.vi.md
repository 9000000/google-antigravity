# Google Antigravity

[English](./README.md) | [Tiếng Việt](./README.vi.md)

> **Bộ Não AI Agent Tối Ưu.**  
> *Bộ sưu tập toàn diện các Quy tắc, Kỹ năng và Quy trình làm việc cho AI Agent hiện đại.*

[![Giấy Phép: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Google Antigravity** là động cơ trí tuệ cốt lõi để xây dựng các AI Agent. Nó cung cấp công cụ CLI (`npx`) giúp bạn tạo lập tức thì các dự án sẵn sàng cho Agent với bộ kỹ năng chuyên nghiệp toàn diện và các quy tắc vận hành chặt chẽ.

## 📦 Cài Đặt

### Bắt đầu nhanh

Mở Terminal và chạy lệnh:

```sh
npx google-antigravity create my-agent-project
```

Làm theo hướng dẫn để tùy chỉnh Agent của bạn.

### Bỏ qua câu hỏi (dùng mặc định)

```sh
npx google-antigravity create my-project --skip-prompts
```

## 🤖 Tương thích với Google Gemini

**Tất cả 550+ skills đều hoạt động với Gemini!**

```javascript
// Gemini agent tự động có sẵn tất cả skills
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ 
  model: "gemini-2.0-flash-exp"
});

// Skills nằm trong .agent/skills/ - sẵn sàng dùng ngay!
```

**Tại sao chọn Gemini + Antigravity IDE?**
- ✅ **Universal Skills**: Hoạt động với mọi AI model
- ✅ **Large Context**: Gemini 1.5 Pro xử lý được 2M tokens
- ✅ **Production-Ready**: 550+ skills đã qua kiểm chứng thực tế

👉 Xem [GEMINI.md](./GEMINI.md) để biết hướng dẫn chi tiết.

## 🚀 Tính năng Cốt lõi

### 🧠 **Bộ Não Agent (.agent)**
Trái tim của hệ thống là thư mục `.agent`, chứa:
- **Kỹ năng Chuyên nghiệp**: Các kỹ năng sẵn sàng cho Production (Dev, DevOps, Security, Data).
- **Tương thích Đa nền tảng**: Tối ưu hóa cho **Gemini Pro**, **Claude 3.5 Sonnet**, và **GPT-4o**.
- **Quy tắc Vận hành**: Các giao thức định nghĩa sẵn để Agent hoạt động an toàn và hiệu quả.

### ⚡ **Khởi tạo Dự án (CLI)**
Công cụ CLI nhẹ nhàng để bootstrap dự án mới:
- **Cài đặt Tương tác**: Chọn độ nghiêm ngặt của Agent (Strict/Balanced/Flexible).
- **Lựa chọn Kỹ năng**: Tự động cài đặt các bộ kỹ năng phù hợp (ví dụ: Web Dev + AI).
- **Nhanh gọn**: Tối giản, không cài đặt các thành phần dư thừa.

## 📂 Cấu trúc dự án

```text
antigravity-ide/
├── .agent/           # 🧠 BỘ NÃO: Config & 550+ Skills
└── cli/              # ⚡ CLI TOOL: Tạo project
```



## 📚 Tài liệu

- [**README.md**](./README.md) - Phiên bản tiếng Anh
- [**SKILLS.md**](./SKILLS.md) - Danh sách 550+ skills
- [**GEMINI.md**](./GEMINI.md) - Hướng dẫn tích hợp Gemini
- [**COPYRIGHT.md**](./COPYRIGHT.md) - Thông tin bản quyền

## 📜 Giấy phép & Ghi nhận

Dự án này sử dụng giấy phép MIT.

*   Phát triển dựa trên [Antigravity Kit](https://github.com/vudovn/antigravity-kit) của [vudovn](https://github.com/vudovn).
*   Xem [LICENSE](./LICENSE) để biết chi tiết về giấy phép.
*   Xem [COPYRIGHT.md](./COPYRIGHT.md) để đọc giải thích bằng tiếng Việt.

---
*Được tạo với ❤️ bởi Dokhacgiakhoa*
