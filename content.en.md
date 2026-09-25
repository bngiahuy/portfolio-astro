# Portfolio Content: English Draft

> Working copy for rewriting. English is the default language.
>
> Text marked `[REVIEW]` needs confirmation or a personal rewrite before publishing.
> The public draft intentionally omits the phone number.

---

## 1. Metadata

### Browser title

Bui Nguyen Gia Huy — AI Systems Engineer | Industrial AI & Computer Vision

### Meta description

AI systems engineering across industrial computer vision, edge inference, AI assistants, backend integration, and deployment.

### Social preview title

Bui Nguyen Gia Huy — AI Systems Engineer | Industrial AI & Computer Vision

### Social preview description

AI systems engineering across industrial computer vision, edge inference, AI assistants, backend integration, and deployment.

### Social preview image alt text

Portfolio preview for Bui Nguyen Gia Huy, AI Systems Engineer focused on industrial AI and computer vision.

---

## 2. Header

### Brand

BGH.

### Navigation labels

- About
- Work
- Experience
- Education
- Contact

### Language control

- EN
- VI

### Language control accessible label

Choose language

### Skip link

Skip to main content

---

## 3. Hero

### Eyebrow

AI Systems Engineer | Industrial AI, Computer Vision & Edge

### Headline

I build AI systems that have to survive outside the notebook.

### Introduction

From ambiguous customer requirements to architecture, backend integration, edge inference, deployment, and field debugging.

### Primary call to action

View work

### Secondary call to action

Résumé

### Availability

I am open to suitable opportunities in Applied AI and Software Engineering.

---

## 4. Proof Points

### Proof point 1

**Value:** ~50

**Label:** Computer-vision use cases consulted across factory sites

### Proof point 2

**Value:** 15 FPS

**Label:** CPU-only inference on a 12th-generation Intel Core i5

### Proof point 3

**Value:** 5 seconds

**Label:** Average fast-mode latency in the internal demo

---

## 5. About

### Section heading

About me

### Main copy

I’m a Software Solution Engineer at HPT Vietnam Corporation in Ho Chi Minh City, focused on applied AI and systems engineering. My work often starts with a problem that is not fully defined: a customer workflow that does not fit the product, a camera feed that behaves differently on site, or an integration that crosses several systems and teams.

I work across the full delivery process, from discovery and architecture to backend development, deployment, debugging, and support. I spend time with models and APIs, but also with Linux servers, RTSP streams, network constraints, and vendor coordination. Those details often determine whether a system works reliably in its intended environment.

I usually take ownership of the technical path: clarify the problem, test the assumptions, decide what needs to be built, and follow the work through implementation.

### Short personal note

I work best on problems that require both software engineering and practical system integration.

### Location

Ho Chi Minh City, Vietnam

---

## 6. Selected Work

### Section heading

A few things I’ve built

### Section note

Selected projects that show the range of my work.

### Project 1: Technical Support AI Assistant

**Display label:** Solo build | Internal demo | Applied AI

**Title:** Technical Support AI Assistant

**Short description:**

Technical support documents were spread across different sources, which made relevant information difficult to find. I built the application end to end, including document ingestion, hybrid and multimodal RAG, reranking, agentic retrieval, backend services, and frontend integration.

**Outcome:**

During internal testing, fast mode returned responses in about 5 seconds on average. Agent mode took 20 to 30 seconds when a query required a deeper retrieval workflow.

**Extended case-study copy:**

I owned the project end to end as a team of one. The system combined document ingestion, retrieval components, LLM APIs, application logic, and a FastAPI backend. I used hybrid retrieval, multimodal RAG, reranking, and agentic workflows to support different query types while keeping response time practical.

Internal testing measured roughly 5 seconds per response in fast mode and 20–30 seconds in agent mode.

**Technology labels:**

- Python
- FastAPI
- RAG
- Hybrid retrieval
- Multimodal RAG
- Reranking
- AI agents
- LLM APIs

**Project link:**

A demo video will be added later.

**Confidentiality note:**

Public documentation and images will be added after sensitive information has been reviewed.

---

### Project 2: Computer Vision PoC for a Manufacturing Facility

**Display label:** Team of 2 | Customer PoC | Computer Vision

**Title:** Computer Vision for Manufacturing

**Short description:**

The model was one part of the project. The rest involved requirements, data collection, camera quality, video compression, perspective, deployment, and repeated on-site testing.

**Outcome:**

A CPU-only inference pipeline sustained 15 FPS on a 12th-generation Intel Core i5. The field pilot did not meet its requirements after on-site conditions increased false detections.

**Extended case-study copy:**

I consulted on nearly 50 computer-vision use cases across multiple factory sites and helped deliver an end-to-end inspection proof of concept. The work covered requirements, data collection, model training, a web application, Linux deployment, and customer iteration.

We investigated camera quality, video compression, viewing perspective, and environmental conditions to understand why inference results changed between development tests and the factory environment.

**Technology labels:**

- Python 3.12
- RF-DETR
- YOLO
- OpenVINO
- MobileNetV3-Small
- OpenCV
- Docker
- Debian

**Project link:**

[REVIEW: Confirm whether this customer PoC may be described publicly and whether any sanitized media can be shared.]

**Confidentiality note:**

[REVIEW: Remove or generalize customer, factory, product, dataset, and performance details that are covered by an NDA.]

---

### Project 3: HPT SmartTrak

**Display label:** Team of 3 | Production | System Integration

**Title:** HPT SmartTrak

**Short description:**

I implemented backend APIs integrating face-recognition camera events with physical access control and fine-tuned custom object-detection models for additional customer use cases.

**Outcome:**

My contribution covered backend API integration and custom object-detection model fine-tuning.

**Extended case-study copy:**

I contributed backend APIs integrating face-recognition camera events with physical access control and fine-tuned custom object-detection models for additional customer use cases.

**Technology labels:**

- Kotlin Spring Boot
- Face recognition
- Object detection
- Python 3.12
- Dahua Access Control
- PostgreSQL
- Redis

**Project link:**

https://hpt.vn/san-pham-hpt/detail/hpt-smarttrak-nen-tang-thi-giac-ai-cho-an-ninh-va-van-hanh/15995

**Confidentiality note:**

The public product page is the source for information shown here.

---

## 7. Experience

### Section heading

Experience

### Employer

HPT Vietnam Corporation

### Role

Software Solution Engineer

### Location

Ho Chi Minh City, Vietnam

### Date range

2024–Present

### Role introduction

I work across pre-sales discovery, solution design, implementation, and post-sales support for enterprise AI systems. The role connects customers, internal teams, deployed technology, and external vendors, so technical issues often span several layers.

### Responsibilities and contributions

- Work directly with customers on discovery, on-site surveys, pain-point analysis, technical requirements, architecture, sizing, proposals, presentations, demos, and proofs of concept.
- Serve as the sole engineering interface with the Taiwan-based AIWINOPS vendor, communicating technical issues and customer use cases in English, reproducing incidents, coordinating fixes, proposing features, and co-developing solution and case-study materials.
- Design backend services, plugins, extensions, and integrations connecting AI products with third-party Video Management Systems and customer environments.
- Maintain deployment architecture, sizing guidance, technical documentation, and product knowledge.
- Provide post-sales engineering support from ticket intake through diagnosis and resolution across Linux, networking, RTSP and video pipelines, backend integrations, data flows, and deployed AI applications.
- Turn ambiguous customer problems into implementable technical solutions and independently research unfamiliar areas when needed.
- Guide interns and fresh graduates through implementation and debugging tasks.

### Employer or role link

https://hpt.vn/

---

## 8. Skills

### Section heading

Tools I work with

### Section introduction

These are the tools and technical areas I have used across my work. My level of experience varies by tool and project.

### Applied AI and GenAI

- Python
- Retrieval-Augmented Generation (RAG)
- Hybrid retrieval
- Reranking
- Multimodal RAG
- AI agents
- LangChain
- LlamaIndex
- OpenAI API
- Embedding models

### Machine Learning and Computer Vision

- PyTorch
- Ultralytics YOLO
- OpenVINO
- ONNX
- OpenCV
- Hugging Face
- scikit-learn

### Backend and Data

- FastAPI
- Node.js
- PostgreSQL
- MySQL
- MongoDB
- Redis
- Elasticsearch
- REST APIs

### Systems and Integration

- Docker
- Linux
- Git
- RTSP
- Networking
- Nginx
- CI/CD

### Languages

- Vietnamese: Native
- English: Working proficiency

### Skills review note

[REVIEW: Remove tools you do not want recruiters to treat as current core strengths. Reorder each group by confidence and relevance.]

---

## 9. Education

### Section heading

Education

### Degree 1

**Institution:** Ho Chi Minh City University of Technology (HCMUT), Vietnam National University

**Degree:** Master of Computer Science, AI Specialization

**Date range:** 2025–Present

**Location:** Ho Chi Minh City, Vietnam

**Additional detail:**

- Major: Computer Science
- Areas of interest: Machine Learning, Deep Learning, Networking, Distributed Systems, and AI Agents

### Degree 2

**Institution:** Ho Chi Minh City University of Technology (HCMUT), Vietnam National University

**Degree:** Bachelor of Computer Science

**Date range:** 2020–2024

**Location:** Ho Chi Minh City, Vietnam

**Additional detail:**

- GPA: 3.1/4.0

---

## 10. Contact

### Section heading

Get in touch

### Contact copy

If you would like to discuss an Applied AI, computer-vision, backend, or system-integration role or project, contact me by email or LinkedIn.

### Primary contact action

Send me an email

### Secondary contact action

Connect on LinkedIn

### Email

ghuy047@gmail.com

### LinkedIn

https://linkedin.com/in/huy-bui47

### GitHub

https://github.com/bngiahuy

### Resume download label

Download résumé

### Resume download file

`public/bui-nguyen-gia-huy-resume.pdf`

---

## 11. Footer

### Name

Bui Nguyen Gia Huy

### Role

AI Systems Engineer | Industrial AI, Computer Vision & Edge

### Closing line

AI Systems Engineer focused on industrial AI and computer vision, based in Ho Chi Minh City, Vietnam.

### Copyright

© [YEAR] Bui Nguyen Gia Huy. All rights reserved.

### Footer navigation

- About
- Work
- Experience
- Education
- Contact

---

## 12. Accessibility and Interface Labels

### Social links

- Email Bui Nguyen Gia Huy
- View Bui Nguyen Gia Huy on LinkedIn
- View Bui Nguyen Gia Huy on GitHub

### Project links

- View the Technical Support AI Assistant case study
- View the Industrial Computer Vision Inspection case study
- View the HPT Smarttrak case study

### External-link indicator

Opens in a new tab

### Language status

- English selected
- Switch to Vietnamese

### Navigation controls

- Open navigation menu
- Close navigation menu

### Section navigation

- Go to About
- Go to Selected Work
- Go to Experience
- Go to Education
- Go to Contact

### Resume link

Download Bui Nguyen Gia Huy’s résumé as a PDF

---

## 13. Final Review Checklist

- [ ] Rewrite any sentence that does not sound like me.
- [ ] Confirm that the AI Systems Engineer positioning accurately reflects my work.
- [ ] Confirm project confidentiality and publication permissions.
- [ ] Add public links, screenshots, demos, or sanitized architecture diagrams where available.
- [ ] Remove skills I do not want positioned as current strengths.
- [ ] Review every metric and preserve the context around it.
- [ ] Approve this English version before drafting the Vietnamese version.
