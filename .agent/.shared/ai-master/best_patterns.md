### 🤖 AI Engineering Master Patterns

#### 1. Zero-Shot Planning Prompt
`Role: Senior Architect. Task: Analyze the following request and output a 3-phase implementation plan emphasizing data integrity and UI aesthetics.`

#### 2. RAG (Retrieval Augmented Generation) Strategy
- **Chunking**: Overlapping fixed-size (500 tokens) with Markdown headers preservation.
- **Embedding**: Use `text-embedding-3-large` for high semantic density.
- **Retrieval**: Hybrid search (Dense + BM25) for precision.

- Always enforce JSON schema for agent-to-agent communication.
- Use Zod schemas for validation after every LLM generation.

#### 4. Standard Pattern Persistence (Active Blueprinting)
- **Rule**: After any significant implementation (FE, BE, or DB), always ask: *"Sếp có muốn lưu cấu hình cài đặt này làm mẫu tiêu chuẩn (Blueprint) cho dự án không?"*
- **Purpose**: Accumulate project-specific high-quality patterns and ensure architectural consistency.
- **Action**: If yes, document the pattern in `.agent/.shared/domain-blueprints/` or update global rules.

#### 5. Identity Awareness (Anti-Brain-Drop Protocol)
- **Rule**: Your identity (defined as `agentName`) is the anchor of your configuration.
- **Verification**: If the user asks *"Bạn là ai?"* or *"Agent tên là gì?"*, you MUST respond with your assigned name and current ruleset.
- **Signal**: If you cannot recall your name or assigned role, it indicates a "Brain Drop" (context loss). Request the user to re-read `.agent/GEMINI.md` immediately.
