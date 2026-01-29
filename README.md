# Google Antigravity

[English](./README.md) | [Tiếng Việt](./README.vi.md)

> **The Ultimate AI Agent Brain.**  
> *A comprehensive collection of Rules, Skills, and Workflows for modern AI Agents.*

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Google Antigravity** is the core intelligence engine for building AI Agents. It provides a CLI tool (`npx`) to instantly scaffold agent-ready projects equipped with comprehensive professional skills and robust operational rules.

## 📦 Installation

### Quick Start

Open your Terminal and run:

```sh
npx google-antigravity create my-agent-project
```

Follow the interactive prompts to customize your agent.

### Skip Prompts (Use Defaults)

```sh
npx google-antigravity create my-project --skip-prompts
```

## 🤖 Works with Google Gemini

**All 550+ skills are Gemini-compatible!**

```javascript
// Your Gemini agent gets all skills automatically
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ 
  model: "gemini-2.0-flash-exp"
});

// Skills are in .agent/skills/ - ready to use!
```

**Why Gemini + Antigravity IDE?**
- ✅ **Universal Skills**: Works with any AI model
- ✅ **Large Context**: Gemini 1.5 Pro handles 2M tokens
- ✅ **Production-Ready**: 550+ battle-tested skills

See [GEMINI.md](./GEMINI.md) for complete guide.

## 🚀 Core Features

### 🧠 **The Agent Brain (.agent)**
The heart of the system is the `.agent` folder, which contains:
- **Professional Skills**: Production-ready capabilities for Development, DevOps, Security, and Data interactions.
- **Universal Compatibility**: Optimized for **Gemini Pro**, **Claude 3.5 Sonnet**, and **GPT-4o**.
- **Operational Rules**: Pre-defined protocols for safe and effective agent behavior.

### ⚡ **Project Scaffolding (CLI)**
A lightweight CLI tool to bootstrap new projects:
- **Interactive Setup**: Choose your agent's strictness (Strict/Balanced/Flexible).
- **Skill Selection**: Auto-install relevant skillsets (e.g., Web Dev + AI).
- **Fast**: Minimal footprint, no "bloatware" dependencies.

## 📂 Project Structure

```text
antigravity-ide/
├── .agent/           # 🧠 THE BRAIN: Configs & 2500+ Skills (Enhanced)
└── THIRD_PARTY_NOTICES.md  # 📜 Crediting the giants we stand on
```



## 📜 Attribution & License

This project adheres to the MIT License.

*   This project is a derivative work of [Antigravity Kit](https://github.com/vudovn/antigravity-kit) by [vudovn](https://github.com/vudovn).
*   Please see [LICENSE](./LICENSE) for full attribution details and third-party license information.

---
*Created with ❤️ by Dokhacgiakhoa*
