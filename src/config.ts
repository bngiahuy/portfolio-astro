export type Locale = "en" | "vi";

export type CapabilityGroup = {
  name: string;
  description: string;
  items: string[];
};

export type Project = {
  name: string;
  summary: string;
  problem: string;
  role: string;
  outcome: string;
  constraints?: string[];
  link?: string;
  linkLabel?: string;
  skills: string[];
};

const common = {
  siteUrl: "https://huybn.id.vn",
  siteName: "Bui Nguyen Gia Huy",
  accentColor: "#1d4ed8",
  social: {
    email: "ghuy047@gmail.com",
    linkedin: "https://linkedin.com/in/huy-bui47",
    twitter: "",
    github: "https://github.com/bngiahuy",
  },
};

export const siteConfigs = {
  en: {
    ...common,
    name: "Bui Nguyen Gia Huy",
    title: "AI Systems Engineer | Industrial AI, Computer Vision & Edge",
    pageTitle: "Bui Nguyen Gia Huy — AI Systems Engineer | Industrial AI & Computer Vision",
    description: "AI systems engineering across industrial computer vision, edge inference, AI assistants, backend integration, and deployment.",
    hero: {
      eyebrow: "Bui Nguyen Gia Huy · Software Solution Engineer",
      statement: "I build AI systems that have to survive outside the notebook.",
      supporting: "From ambiguous customer requirements to architecture, backend integration, edge inference, deployment, and field debugging.",
      primaryCta: "View work",
      secondaryCta: "Résumé",
    },
    alternatePath: "/vi/",
    alternateLabel: "VI",
    labels: { about: "About Me", projects: "Projects", experience: "Experience", education: "Education", resume: "Résumé", rights: "All rights reserved.", problem: "Problem", role: "My role", outcome: "Outcome / learning", constraints: "Constraints", technologies: "Technologies", externalLink: "View product", newTab: "Opens in a new tab" },
    aboutMe: "I’m a Software Solution Engineer at HPT Vietnam Corporation in Ho Chi Minh City, focused on applied AI and systems engineering. I help turn operational problems into deployable solutions across computer vision, AI assistants, backend services, video systems, Linux, and industrial integrations. My work spans requirements, architecture, implementation, deployment, debugging, and handover.",
    capabilities: [
      { name: "Applied AI", description: "Build retrieval and vision systems around concrete operational problems.", items: ["Computer Vision", "RAG / Retrieval Systems", "Multimodal RAG", "AI Agents"] },
      { name: "AI Systems & Edge", description: "Move models into CPU, edge, and video pipelines, then investigate their field behavior.", items: ["OpenVINO / ONNX", "CPU-only Inference", "RTSP / Video Pipelines", "Linux Deployment"] },
      { name: "Backend & Integration", description: "Connect AI outputs to APIs, databases, products, and third-party systems.", items: ["FastAPI", "Kotlin / Spring Boot", "PostgreSQL / Redis", "APIs / Plugins / VMS"] },
      { name: "Infrastructure & Deployment", description: "Deploy and debug across Linux, containers, networking, and video streams.", items: ["Linux", "Docker", "Networking", "Nginx / CI/CD"] },
    ],
    projects: [
      {
        name: "Technical Support AI Assistant",
        summary: "An internal demo for retrieving technical information across heterogeneous documents.",
        problem: "Technical information is distributed across different documents and needs fast, grounded retrieval.",
        role: "Owned delivery end to end across document ingestion, hybrid and multimodal retrieval, reranking, agentic retrieval, backend services, and frontend integration.",
        outcome: "Fast mode achieved 5 seconds average latency in the internal demo.",
        description: "An internal demo for retrieving technical information across heterogeneous documents. Owned delivery end to end across document ingestion, hybrid and multimodal retrieval, reranking, agentic retrieval, backend services, and frontend integration. Fast mode achieved 5 seconds average latency.",
        link: "",
        skills: ["Python", "FastAPI", "Hybrid RAG", "Multimodal RAG", "AI Agents"],
      },
      {
        name: "Computer Vision Application at an Ice Cream Manufacturing Plant",
        summary: "Detected logos only a few dozen pixels wide on cartons using the customer’s existing CCTV system.",
        problem: "Recognize small carton logos through existing CCTV in a production environment.",
        role: "Consulted on nearly 50 computer-vision use cases across factory sites and delivered this customer PoC with a two-person team, from requirements and data collection through model training, web app integration, Linux deployment, and on-site iteration.",
        outcome: "With two cameras, a CPU-only server using a 12th-gen Intel Core i5 sustained 15 FPS. Under field conditions, accuracy was at least 83% and response time was under 150 ms, but the PoC did not meet its requirement of at least 95% accuracy.",
        constraints: ["Logos only a few dozen pixels wide", "Customer’s existing CCTV system", "Two cameras", "CPU-only server using a 12th-gen Intel Core i5", "Field issues involved camera quality, compression, perspective, and environmental conditions", "Bitrate capped at 1024 Kbps, which was low and often caused blurring", "Two Full HD cameras running simultaneously at a minimum of over 5 FPS"],
        description: "A computer-vision PoC to detect logos only a few dozen pixels wide on cartons using the customer’s existing CCTV system. A CPU-only server with a 12th-gen Intel Core i5 sustained 15 FPS while processing two cameras. Under field conditions, accuracy was at least 83% and response time was under 150 ms; the PoC missed its requirement of at least 95% accuracy.",
        link: "",
        skills: ["RF-DETR", "YOLO", "OpenVINO", "OpenCV", "Docker", "Debian"],
      },
      {
        name: "HPT SmartTrak",
        summary: "Production work on backend APIs and AI integrations for HPT SmartTrak.",
        problem: "Connect face-recognition camera events with physical access-control workflows.",
        role: "Implemented backend APIs and fine-tuned custom object-detection models for additional customer use cases as part of a three-person team.",
        outcome: "Contributed backend and model work to the production product.",
        description: "Contributed backend APIs integrating face-recognition camera events with physical access control, and fine-tuned custom object-detection models for additional customer use cases as part of a three-person team.",
        link: "https://hpt.vn/san-pham-hpt/detail/hpt-smarttrak-nen-tang-thi-giac-ai-cho-an-ninh-va-van-hanh/15995",
        linkLabel: "Official HPT SmartTrak product page",
        skills: ["Kotlin / Spring Boot", "Python", "Face Recognition", "Object Detection", "PostgreSQL", "Redis"],
      },
    ],
    experience: [{
      company: "HPT Vietnam Corporation", title: "Software Solution Engineer", dateRange: "2024–Present",
      bullets: [
        "Translate ambiguous customer needs through discovery, on-site surveys, architecture, sizing, proposals, demos, and proofs of concept.",
        "Own the technical relationship with AIWINOPS as the sole engineering interface; communicate in English, reproduce incidents, coordinate fixes, propose features, and co-develop solution and case-study materials.",
        "Design backend services, plugins, and extensions that connect AI products to third-party Video Management Systems and customer environments.",
        "Maintain deployment architecture, sizing guidance, technical documentation, and product knowledge.",
        "Resolve post-sales issues across Linux, networking, RTSP/video pipelines, backend integrations, and deployed AI systems.",
        "Guide interns and fresh graduates through implementation and debugging.",
      ],
    }],
    education: [
      { school: "Ho Chi Minh City University of Technology (HCMUT), Vietnam National University", degree: "Master of Computer Science, AI Specialization", dateRange: "2025–Present", achievements: ["Machine Learning, Deep Learning, Networking, Distributed Systems, and AI Agents"] },
      { school: "Ho Chi Minh City University of Technology (HCMUT), Vietnam National University", degree: "Bachelor of Computer Science", dateRange: "2020–2024", achievements: ["GPA: 3.1/4.0"] },
    ],
  },
  vi: {
    ...common,
    name: "Bùi Nguyễn Gia Huy",
    title: "Kỹ sư Hệ thống AI | Industrial AI, Computer Vision & Edge",
    pageTitle: "Bùi Nguyễn Gia Huy — Kỹ sư Hệ thống AI | Industrial AI & Computer Vision",
    description: "Kỹ thuật hệ thống AI cho computer vision công nghiệp, edge inference, trợ lý AI, backend và tích hợp triển khai.",
    hero: {
      eyebrow: "Bùi Nguyễn Gia Huy · Kỹ sư Giải pháp Phần mềm",
      statement: "Tôi xây dựng các hệ thống AI phải hoạt động được ngoài môi trường notebook.",
      supporting: "Từ yêu cầu còn mơ hồ của khách hàng đến kiến trúc, tích hợp backend, edge inference, triển khai và xử lý sự cố tại hiện trường.",
      primaryCta: "Xem dự án",
      secondaryCta: "Tải CV",
    },
    alternatePath: "/",
    alternateLabel: "EN",
    labels: { about: "Về tôi", projects: "Dự án", experience: "Kinh nghiệm", education: "Học vấn", resume: "Tải CV", rights: "All Rights Reserved.", problem: "Bài toán", role: "Vai trò của tôi", outcome: "Kết quả / bài học", constraints: "Ràng buộc", technologies: "Công nghệ", externalLink: "Xem sản phẩm", newTab: "Mở trong tab mới" },
    aboutMe: "Tôi là Kỹ sư Giải pháp Phần mềm tại HPT Vietnam Corporation ở TP. Hồ Chí Minh, tập trung vào applied AI và kỹ thuật hệ thống. Tôi chuyển các bài toán vận hành thành giải pháp có thể triển khai trên computer vision, trợ lý AI, backend service, video system, Linux và tích hợp công nghiệp. Công việc của tôi bao gồm làm rõ yêu cầu, kiến trúc, triển khai, xử lý lỗi và bàn giao.",
    capabilities: [
      { name: "Applied AI", description: "Xây dựng hệ thống retrieval và computer vision xoay quanh bài toán vận hành cụ thể.", items: ["Computer Vision", "RAG / Retrieval Systems", "Multimodal RAG", "AI Agents"] },
      { name: "AI Systems & Edge", description: "Đưa model vào các pipeline CPU, edge và video; theo dõi hành vi khi triển khai thực tế.", items: ["OpenVINO / ONNX", "CPU-only Inference", "RTSP / Video Pipelines", "Linux Deployment"] },
      { name: "Backend & Integration", description: "Kết nối đầu ra AI với API, database, sản phẩm và hệ thống bên thứ ba.", items: ["FastAPI", "Kotlin / Spring Boot", "PostgreSQL / Redis", "APIs / Plugins / VMS"] },
      { name: "Infrastructure & Deployment", description: "Triển khai và debug trên Linux, container, network và luồng video.", items: ["Linux", "Docker", "Networking", "Nginx / CI/CD"] },
    ],
    projects: [
      {
        name: "Trợ lý AI cho Hỗ trợ Kỹ thuật",
        summary: "Demo nội bộ hỗ trợ truy xuất thông tin kỹ thuật từ nhiều loại tài liệu.",
        problem: "Thông tin kỹ thuật nằm rải rác trong nhiều tài liệu và cần được truy xuất nhanh, có căn cứ.",
        role: "Phụ trách toàn bộ quá trình từ xử lý tài liệu, hybrid và multimodal retrieval, reranking, agentic retrieval đến tích hợp backend và frontend.",
        outcome: "Chế độ nhanh đạt latency trung bình 5 giây trong demo nội bộ.",
        description: "Demo nội bộ hỗ trợ truy xuất thông tin kỹ thuật từ nhiều loại tài liệu. Phụ trách toàn bộ quá trình từ xử lý tài liệu, hybrid và multimodal retrieval, reranking, agentic retrieval đến tích hợp backend và frontend. Chế độ nhanh đạt latency trung bình 5 giây.",
        link: "",
        skills: ["Python", "FastAPI", "Hybrid RAG", "Multimodal RAG", "AI Agents"],
      },
      {
        name: "Ứng dụng Thị giác Máy tính trong Nhà máy Sản xuất Kem Lạnh",
        summary: "Nhận diện logo chỉ rộng vài chục pixel trên thùng hàng qua hệ thống CCTV hiện hữu của khách hàng.",
        problem: "Nhận diện logo nhỏ trên thùng hàng qua hệ thống CCTV hiện hữu trong môi trường sản xuất.",
        role: "Tư vấn gần 50 bài toán computer vision tại nhiều khu vực nhà máy và cùng một thành viên khác triển khai PoC này, từ yêu cầu, dữ liệu, huấn luyện model đến web app, Linux và kiểm thử tại hiện trường.",
        outcome: "Với hai camera, server chỉ dùng CPU Intel Core i5 thế hệ 12 duy trì 15 FPS. Trong điều kiện thực tế, độ chính xác đạt ít nhất 83% và thời gian phản hồi dưới 150 ms; tuy nhiên, PoC không đạt yêu cầu độ chính xác tối thiểu 95%.",
        constraints: ["Logo chỉ rộng vài chục pixel", "Hệ thống CCTV hiện hữu của khách hàng", "Hai camera", "Server chỉ dùng CPU trên Intel Core i5 thế hệ 12", "Vấn đề hiện trường liên quan đến chất lượng camera, nén video, góc nhìn và điều kiện môi trường", "Bitrate tối đa 1024 Kbps, khá thấp và hình ảnh thường bị nhòe", "Chạy đồng thời hai camera Full HD, tối thiểu trên 5 FPS"],
        description: "PoC nhận diện logo chỉ rộng vài chục pixel trên thùng hàng qua hệ thống CCTV hiện hữu của khách hàng. Server chỉ dùng CPU Intel Core i5 thế hệ 12 duy trì 15 FPS khi xử lý hai camera. Trong điều kiện thực tế, độ chính xác đạt ít nhất 83% và thời gian phản hồi dưới 150 ms; PoC không đạt yêu cầu độ chính xác tối thiểu 95%.",
        link: "",
        skills: ["RF-DETR", "YOLO", "OpenVINO", "OpenCV", "Docker", "Debian"],
      },
      {
        name: "HPT SmartTrak",
        summary: "Tham gia phát triển backend API và tích hợp AI cho sản phẩm HPT SmartTrak.",
        problem: "Kết nối sự kiện từ camera nhận diện khuôn mặt với quy trình kiểm soát ra vào.",
        role: "Phát triển backend API và fine-tune model object detection cho các use case khách hàng bổ sung trong nhóm ba người.",
        outcome: "Đóng góp phần backend và model cho sản phẩm đang vận hành.",
        description: "Đóng góp backend API tích hợp sự kiện nhận diện khuôn mặt với hệ thống kiểm soát ra vào, đồng thời fine-tune model object detection cho các use case khách hàng bổ sung trong nhóm ba người.",
        link: "https://hpt.vn/san-pham-hpt/detail/hpt-smarttrak-nen-tang-thi-giac-ai-cho-an-ninh-va-van-hanh/15995",
        linkLabel: "Trang sản phẩm chính thức HPT SmartTrak",
        skills: ["Kotlin / Spring Boot", "Python", "Face Recognition", "Object Detection", "PostgreSQL", "Redis"],
      },
    ],
    experience: [{
      company: "HPT Vietnam Corporation", title: "Kỹ sư Giải pháp Phần mềm", dateRange: "2024 đến nay",
      bullets: [
        "Chuyển nhu cầu chưa rõ của khách hàng thành yêu cầu kỹ thuật, kiến trúc, sizing, đề xuất và PoC thông qua khảo sát tại hiện trường.",
        "Làm đầu mối kỹ thuật duy nhất với vendor AIWINOPS tại Đài Loan: trao đổi bằng tiếng Anh, tái hiện sự cố, phối hợp xử lý, đề xuất tính năng và cùng xây dựng tài liệu giải pháp, case study.",
        "Thiết kế backend service, plugin và extension kết nối sản phẩm AI với Video Management System bên thứ ba và môi trường khách hàng.",
        "Duy trì kiến trúc triển khai, hướng dẫn sizing, tài liệu kỹ thuật và kiến thức sản phẩm.",
        "Xử lý ticket hậu mãi trên Linux, networking, luồng RTSP/video, backend service và các hệ thống AI đã triển khai.",
        "Hướng dẫn intern và fresher trong quá trình triển khai và debug.",
      ],
    }],
    education: [
      { school: "Trường Đại học Bách khoa, Đại học Quốc gia TP. Hồ Chí Minh", degree: "Thạc sĩ Khoa học Máy tính, chuyên ngành Trí tuệ Nhân tạo", dateRange: "2025 đến nay", achievements: ["Machine Learning, Deep Learning, Networking, Distributed Systems và AI Agents"] },
      { school: "Trường Đại học Bách khoa, Đại học Quốc gia TP. Hồ Chí Minh", degree: "Cử nhân Khoa học Máy tính", dateRange: "2020–2024", achievements: ["GPA: 3.1/4.0"] },
    ],
  },
} as const;

export function getSiteConfig(pathname: string) {
  return pathname.startsWith("/vi") ? siteConfigs.vi : siteConfigs.en;
}
