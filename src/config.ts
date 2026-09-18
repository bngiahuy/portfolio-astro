export type Locale = "en" | "vi";

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
    title: "AI Solutions & Software Engineer",
    description: "Portfolio of Bui Nguyen Gia Huy, an AI solutions and software engineer working across applied AI, backend, computer vision, and system integration.",
    greeting: "Hello! 👋",
    alternatePath: "/vi/",
    alternateLabel: "VI",
    labels: { about: "About Me", projects: "Projects", experience: "Experience", education: "Education", resume: "Résumé", intro: "I'm", rights: "All rights reserved." },
    aboutMe: "I’m an AI solutions and software engineer at HPT Vietnam Corporation in Ho Chi Minh City. I work across the full delivery process, from discovery and architecture to backend development, deployment, debugging, and support. I usually take ownership of the technical path: clarify the problem, test the assumptions, decide what needs to be built, and follow the work through implementation.",
    skills: ["Python", "RAG", "Computer Vision", "FastAPI", "Node.js", "PostgreSQL", "OpenVINO", "Docker", "Linux", "RTSP", "Networking"],
    projects: [
      {
        name: "Technical Support AI Assistant",
        description: "Built an end-to-end assistant with document ingestion, hybrid and multimodal RAG, reranking, agentic retrieval, backend services, and frontend integration. Fast mode returned responses in about 5 seconds on average during internal testing.",
        link: "",
        skills: ["Python", "FastAPI", "Hybrid RAG", "Multimodal RAG", "AI Agents"],
      },
      {
        name: "Computer Vision for Manufacturing",
        description: "Helped deliver a factory PoC covering requirements, data collection, model training, a web application, Linux deployment, and on-site testing. The CPU-only pipeline reached 20 FPS, accuracy above 92%, and recall above 90%. The pilot did not meet its requirements because field conditions increased false detections.",
        link: "",
        skills: ["RF-DETR", "YOLO", "OpenVINO", "MobileNetV3-Small", "OpenCV", "Docker"],
      },
      {
        name: "HPT SmartTrak",
        description: "Developed backend business logic, APIs, and product features. Also fine-tuned AI models, deployed the system, and planned backup and restore procedures. The solution is being registered for intellectual property protection.",
        link: "https://hpt.vn/san-pham-hpt/detail/hpt-smarttrak-nen-tang-thi-giac-ai-cho-an-ninh-va-van-hanh/15995",
        skills: ["Kotlin Spring Boot", "Python", "Face Recognition", "PostgreSQL", "Redis"],
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
      { school: "Ho Chi Minh City University of Technology (HCMUT), Vietnam National University", degree: "Bachelor of Computer Science", dateRange: "2020–2025", achievements: ["GPA: 3.1/4.0"] },
    ],
  },
  vi: {
    ...common,
    name: "Bùi Nguyễn Gia Huy",
    title: "Kỹ sư Giải pháp AI và Phần mềm",
    description: "Portfolio của Bùi Nguyễn Gia Huy, kỹ sư giải pháp AI và phần mềm làm việc với Applied AI, backend, thị giác máy tính và tích hợp hệ thống.",
    greeting: "Xin chào! 👋",
    alternatePath: "/",
    alternateLabel: "EN",
    labels: { about: "Về tôi", projects: "Dự án", experience: "Kinh nghiệm", education: "Học vấn", resume: "Tải CV", intro: "Tôi là", rights: "Bảo lưu mọi quyền." },
    aboutMe: "Tôi là kỹ sư giải pháp AI và phần mềm tại HPT Vietnam Corporation ở TP. Hồ Chí Minh. Tôi tham gia toàn bộ quá trình triển khai, từ khảo sát, thiết kế kiến trúc đến phát triển backend, triển khai, xử lý lỗi và hỗ trợ vận hành. Tôi thường nhận trách nhiệm cho phần kỹ thuật xuyên suốt: làm rõ vấn đề, kiểm tra các giả định, xác định phần cần xây dựng và theo sát quá trình triển khai.",
    skills: ["Python", "RAG", "Computer Vision", "FastAPI", "Node.js", "PostgreSQL", "OpenVINO", "Docker", "Linux", "RTSP", "Networking"],
    projects: [
      {
        name: "Trợ lý AI cho Hỗ trợ Kỹ thuật",
        description: "Xây dựng toàn bộ ứng dụng gồm xử lý tài liệu, hybrid và multimodal RAG, reranking, agentic retrieval, backend và frontend. Trong kiểm thử nội bộ, chế độ nhanh phản hồi trung bình trong khoảng 5 giây.",
        link: "",
        skills: ["Python", "FastAPI", "Hybrid RAG", "Multimodal RAG", "AI Agents"],
      },
      {
        name: "Ứng dụng Thị giác Máy tính trong Nhà máy",
        description: "Tham gia triển khai PoC gồm thu thập yêu cầu, dữ liệu, huấn luyện model, web app, Linux và kiểm thử tại hiện trường. Pipeline chỉ dùng CPU đạt 20 FPS, độ chính xác trên 92% và recall trên 90%. Pilot không đạt yêu cầu vì điều kiện hiện trường làm tăng số trường hợp nhận diện sai.",
        link: "",
        skills: ["RF-DETR", "YOLO", "OpenVINO", "MobileNetV3-Small", "OpenCV", "Docker"],
      },
      {
        name: "HPT SmartTrak",
        description: "Phát triển business logic, API và các tính năng backend cho sản phẩm. Đồng thời fine-tune model AI, triển khai hệ thống và xây dựng kế hoạch backup và restore. Giải pháp đang được đăng ký quyền sở hữu trí tuệ.",
        link: "https://hpt.vn/san-pham-hpt/detail/hpt-smarttrak-nen-tang-thi-giac-ai-cho-an-ninh-va-van-hanh/15995",
        skills: ["Kotlin Spring Boot", "Python", "Face Recognition", "PostgreSQL", "Redis"],
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
      { school: "Trường Đại học Bách khoa, Đại học Quốc gia TP. Hồ Chí Minh", degree: "Cử nhân Khoa học Máy tính", dateRange: "2020–2025", achievements: ["GPA: 3.1/4.0"] },
    ],
  },
} as const;

export function getSiteConfig(pathname: string) {
  return pathname.startsWith("/vi") ? siteConfigs.vi : siteConfigs.en;
}
