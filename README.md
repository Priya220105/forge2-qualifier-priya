# Forge 2 Edition 1 Qualifier Submission

## Overview

This repository demonstrates a multi-agent AI workflow using OpenClaw and Hermes with Slack as the communication interface.

The objective of this setup is to allow a human to interact with AI agents through Slack, where agents receive instructions, execute tasks, maintain visible logs, and provide responses in a human-in-the-loop workflow.

---

# Agent System Architecture

## OpenClaw (Execution Agent)

Responsibilities:
- Receives commands from Slack channels
- Processes user requests
- Executes coding-related tasks
- Creates and modifies files
- Provides execution feedback through Slack and terminal logs

Status:
- Successfully connected with Slack
- Responded to user mentions
- Demonstrated code generation and file creation

---

## Hermes (Planning / Orchestration Agent)

Responsibilities:
- Intended as the higher-level planning and orchestration layer
- Manages gateway initialization and agent coordination

Status:
- Gateway initialization and configuration were tested during development

---

# Models Used (100% Free)

## OpenClaw
- Google Gemini 2.5 Flash

## Additional Model Configuration
- Groq GPT-OSS-120B (tested during setup)

No paid models or APIs were used.

---

# Communication Flow

Human User  
↓  
Slack Channel (#agent-logs)  
↓  
OpenClaw Agent  
↓  
Task Execution / Code Generation  
↓  
Terminal Logs & Slack Response  
↓  
Human Review

---

# Features Demonstrated

- Slack-based agent communication
- Human-to-agent task delegation
- OpenClaw execution workflow
- Agent terminal session monitoring
- Gateway initialization
- Human-in-the-loop visibility
- Agent execution evidence
- Reusable skill implementation

---

# Repository Structure

```
.
├── README.md
├── ARCHITECTURE.md
├── agent-log.md
├── commands.md
├── notes.md
│
├── skills/
│   └── status-report/
│       └── SKILL.md
│
└── slack-export/
    ├── 01-slack-roundtrip.png
    ├── 02-openclaw-task-execution.png
    ├── 03-hermes-gateway.png
    ├── 04-openclaw-terminal.png
    └── 05-openclaw-gateway-logs.png
```

---

# Running Locally

## Prerequisites

Install:
- Node.js
- OpenClaw
- Hermes
- Slack application credentials
- A supported free AI model provider (Gemini or Groq)

---

## Start OpenClaw

```bash
openclaw gateway
```

Expected output:

```
local ready | idle
agent main | session main
```

---

## Start Hermes

```bash
hermes gateway
```

This starts the Hermes gateway for messaging platform integration.

---

# Evidence

The `slack-export` directory contains screenshots demonstrating:

- Slack communication between the user and OpenClaw
- OpenClaw receiving and executing commands
- Hermes gateway initialization
- OpenClaw active terminal session
- Slack socket connection and gateway logs

Additional documentation:

- `ARCHITECTURE.md` explains the agent roles and system design
- `agent-log.md` records important agent interactions and execution history
- `skills/status-report/SKILL.md` contains the reusable status reporting skill

---

# Human-in-the-Loop Design

All agent actions remain visible through Slack channels and terminal logs. The human user can observe agent activity, provide new instructions, and guide the workflow when required.

---

# Security

No private API keys, Slack tokens, or secret environment variables are included in this repository.

Configuration files should use environment variables and placeholder values only.

---

# Development Timeline

The repository was developed incrementally with multiple commits showing the setup process, configuration attempts, evidence collection, and documentation improvements.

---

# Video Demonstration

A 60–90 second walkthrough video is provided with the submission showing:

- Repository structure
- Agent architecture
- Slack communication
- OpenClaw execution
- Gateway logs
- Reusable skill implementation

---

# Submission Notes

This submission focuses on demonstrating a transparent multi-agent workflow, Slack communication loop, agent execution evidence, and reusable skills using free AI models.
