# Forge 2 Qualifier Architecture

## Agents
- **OpenClaw** (hands): Coding agent, writes/runs code
- **Hermes** (brain): Orchestrator, planned but encountered setup issues

## Slack Channels
- `#agent-logs`: OpenClaw works here, reports progress
- `#hermes-control`: Attempted Hermes setup
- `#all-forge`: General coordination

## Tech Stack (100% FREE)
- **Models**: Groq (openai/gpt-oss-120b), Ollama (qwen2.5-coder)
- **Frontend**: React + Vite
- **Backend**: Laravel + SQLite
- **Communication**: Slack
- **Hosting**: Vercel (frontend) + Render/Railway (backend)

## Model Routing
- Hermes (brain): Groq openai/gpt-oss-120b (attempted)
- OpenClaw (hands): Groq openai/gpt-oss-120b (active)

## Human-in-the-Loop
All agent activity visible in Slack channels. Human reviews each step before approval.