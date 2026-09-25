export type Locale = "en" | "vi";

export type CapabilityGroup = {
  name: string;
  description: string;
  items: string[];
};

export type ProofMetric = {
  value: string;
  label: string;
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
    description: "Portfolio of Bui Nguyen Gia Huy, a Software Solution Engineer working across applied AI, computer vision, backend development, and system integration.",
    hero: {
      eyebrow: "Bui Nguyen Gia Huy · Software Solution Engineer",
      statement: "I build AI systems that have to survive outside the notebook.",
      supporting: "From ambiguous customer requirements to architecture, backend integration, edge inference, deployment, and field debugging.",
      primaryCta: "View work",
      secondaryCta: "Résumé",
    },
    proofMetrics: [
      { value: "~50", label: "Computer vision use cases consulted across factory sites" },
      { value: "15 FPS", label: "CPU-only inference on a 12th-gen Intel Core i5" },
      { value: "5 s", label: "Average fast-mode latency in an internal demo" },
    ],
    alternatePath: "/vi/",
    alternateLabel: "VI",
    labels: { about: "About Me", projects: "Projects", experience: "Experience", education: "Education", resume: "Résumé", rights: "All rights reserved." },
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
        name: "Computer Vision for Manufacturing",
        summary: "A customer computer-vision PoC from requirements through on-site testing, using CPU-only inference.",
        problem: "Evaluate visual inspection under factory conditions and constrained edge compute.",
        role: "Consulted on nearly 50 computer-vision use cases across factory sites and delivered this customer PoC with a two-person team, from requirements and data collection through model training, web app integration, Linux deployment, and on-site iteration.",
        outcome: "CPU-only inference sustained 15 FPS on a 12th-gen Intel Core i5. Field conditions increased false detections, so the pilot did not meet requirements.",
        constraints: ["CPU-only inference", "Field issues involved camera quality, compression, perspective, and environmental conditions"],
        description: "A customer computer-vision PoC from requirements through on-site testing, using CPU-only inference. The pipeline sustained 15 FPS on a 12th-gen Intel Core i5; field conditions increased false detections, so the pilot did not meet requirements.",
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
        "Work directly with customers on site surveys, requirements, architecture, sizing, proposals, presentations, demos, and proofs of concept.",
        "Serve as the sole engineering interface with the Taiwan-based AIWINOPS vendor, reproducing incidents, coordinating fixes, proposing features, and developing technical material in English.",
        "Design backend services, plugins, extensions, and integrations connecting AI products with third-party Video Management Systems and customer environments.",
        "Support deployed systems across Linux, networking, RTSP and video pipelines, backend integrations, and data flows.",
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
    description: "Portfolio của Bùi Nguyễn Gia Huy, kỹ sư giải pháp phần mềm làm việc với applied AI, thị giác máy tính, backend và tích hợp hệ thống.",
    hero: {
      eyebrow: "Bùi Nguyễn Gia Huy · Kỹ sư Giải pháp Phần mềm",
      statement: "Tôi xây dựng các hệ thống AI phải hoạt động được ngoài môi trường notebook.",
      supporting: "Từ yêu cầu còn mơ hồ của khách hàng đến kiến trúc, tích hợp backend, edge inference, triển khai và xử lý sự cố tại hiện trường.",
      primaryCta: "Xem dự án",
      secondaryCta: "Tải CV",
    },
    proofMetrics: [
      { value: "Gần 50", label: "Bài toán computer vision được tư vấn tại các nhà máy" },
      { value: "15 FPS", label: "Inference chỉ dùng CPU trên Intel Core i5 thế hệ 12" },
      { value: "5 giây", label: "Latency trung bình ở chế độ nhanh trong demo nội bộ" },
    ],
    alternatePath: "/",
    alternateLabel: "EN",
    labels: { about: "Về tôi", projects: "Dự án", experience: "Kinh nghiệm", education: "Học vấn", resume: "Tải CV", rights: "Bảo lưu mọi quyền." },
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
        name: "Ứng dụng Thị giác Máy tính trong Nhà máy",
        summary: "PoC computer vision cho khách hàng từ làm rõ yêu cầu đến kiểm thử tại hiện trường, dùng inference chỉ bằng CPU.",
        problem: "Đánh giá việc kiểm tra hình ảnh trong điều kiện nhà máy và giới hạn edge compute.",
        role: "Tư vấn gần 50 bài toán computer vision tại nhiều khu vực nhà máy và cùng một thành viên khác triển khai PoC này, từ yêu cầu, dữ liệu, huấn luyện model đến web app, Linux và kiểm thử tại hiện trường.",
        outcome: "Inference chỉ dùng CPU duy trì 15 FPS trên Intel Core i5 thế hệ 12. Điều kiện thực tế làm tăng false detection nên pilot không đạt yêu cầu.",
        constraints: ["Inference chỉ dùng CPU", "Vấn đề hiện trường liên quan đến chất lượng camera, nén video, góc nhìn và điều kiện môi trường"],
        description: "PoC computer vision cho khách hàng từ làm rõ yêu cầu đến kiểm thử tại hiện trường, dùng inference chỉ bằng CPU. Pipeline duy trì 15 FPS trên Intel Core i5 thế hệ 12; điều kiện thực tế làm tăng false detection nên pilot không đạt yêu cầu.",
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
        "Làm việc trực tiếp với khách hàng trong quá trình khảo sát, xác định yêu cầu kỹ thuật, thiết kế kiến trúc, sizing, xây dựng đề xuất, trình bày, demo và thực hiện PoC.",
        "Là đầu mối kỹ thuật duy nhất làm việc với vendor AIWINOPS tại Đài Loan, tái hiện lỗi, phối hợp xử lý, đề xuất tính năng và xây dựng tài liệu kỹ thuật bằng tiếng Anh.",
        "Thiết kế backend service, plugin, extension và các phần tích hợp giữa sản phẩm AI, Video Management System của bên thứ ba và môi trường khách hàng.",
        "Hỗ trợ các hệ thống đã triển khai trên Linux, networking, luồng RTSP và video, tích hợp backend và luồng dữ liệu.",
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
