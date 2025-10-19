export default {
    duration: '持续时间',
    period: '时间',
    leftbar: {
        skills: '技能',
    },
    education: {
        title: '教育经历',
        period: '时间',
        school: '学校',
        degree: '学位',
        major: '计算机科学与技术',
        uni: '清华大学',
        hi: '北京大学附属中学',

        // 三类课程分组标题
        math: '数学与基础科学类',
        programming: '程序设计与人工智能类',
        systems: '系统与网络类',

        // 所有课程
        courses: {
        calculus: '高等数学',
        linearAlgebra: '线性代数',
        advLinearAlgebra: '高等线性代数',
        physics: '大学物理',
        discreteMath: '离散数学',
        probability: '概率论与数理统计',
        complex: '复变函数',

        progFund: '程序设计基础',
        oop: '面向对象程序设计',
        dataStruct: '数据结构',
        os: '操作系统',
        ai: '人工智能导论',
        ann: '人工神经网络',

        digitalLogic: '数字逻辑电路',
        automata: '形式语言与自动机',
        arch: '计算机体系结构',
        compiler: '编译原理',
        org: '计算机组成原理',
        network: '计算机网络原理',
        websec: '网络安全导论'
        }
    },
    language: {
        title: '标准化考试',
        toefl: '托福',
        r: "阅读",
        w: "写作",
        l: "听力",
        s: "口语",
        gre: 'GRE',
        v: "语文",
        q: "数学",
        total: "总分",
    },
    connect: {
        title: '实践交流',
        uni: '牛津大学玛格丽特夫人学院夏季课程',
        major: '计算机视觉',
        description: '学习从基础CNN到yolo、transformer原理和技术演变，深度学习、强化对比学习等多种算法和模型在计算视觉上的应用，完成多个复现任务，最终课程评价A-',
    },
research: {
    title: '科研经历',
    SRT: {
        professor: '胡晓林 教授',
        position: '本科科研实习生',
        time: '2023.11 - 2024.02',
        description: '本项目利用神经网络处理由光学显微镜采集的人脑结构图。通过使用 CLIP、Hugging Face 等神经网络模型，我掌握了从图形处理到图结构分析任务的应用技能。',
    },
    LYY: {
        professor: '兰艳艳 教授',
        position: '本科科研实习生',
        time: '2024.11 - 2025.04',
        description: '在该研究组中，我进一步探索了人工智能在药物领域的应用。目前主要负责基于神经网络的药物分子级搜索与匹配分析工作。',
    },
},

    projects: {
        title: '项目经历',
        QAQ: {
            time: '2024.04 - 2024.06',
            title:'实时通信web软件',
            description: '采用react.js+django的前后端分离技术，以websocket为通信基础，实现多人实时文字聊天、文件传输等功能。支持多平台浏览器访问，具备良好的用户体验和界面设计。\n在项目中积累前后端交互经验，熟悉web开发技术栈，提升了团队协作和项目管理能力。'
        },        
        RAG: {
            time: '2024.10 - 2024.12',
            title:'RAG增强的diffusion模型抗体配对预测任务',
            description: 'ai与生化交叉项目。diffusion模型能够一定程度上预测抗原抗体配对能力，通过RAG增强引入分子结构信息，优化性能并提升模型准确率。\n负责数据处理与模型训练，调研分子结构信息引入方法，设计实验方案，最终确认方案有效。'
        },
        INF: {
            time: '2025.05',
            title: '基于大模型的学术研究辅助工具',
            description: '开发面向学术研究的报告撰写工具，集成文献检索、资料整理、内容生成等功能，辅助用户高效完成学术综述和调研报告。\n独立负责前端实现，包括页面设计、用户交互逻辑和后端交互。前端渲染美观，与后端高效连接。自学桌面软件打包流程，实现跨平台部署'
        }
    },
    internships: {
        title: '实习经历',
        hw: {
            time: '',
            company: '华为技术有限公司小艺终端部',
            title: 'ai算法实习生',
            description: '调研并设计优化视频翻译流水线，实现语音识别、大模型自动化文本翻译、支持声色克隆的音频合成、音频文本对齐并嵌入全流程。\n综合运用多种大模型和深度神经网络算法，解决工程问题。',
        },
        yp: {
            time: '2025.05 - 至今',
            company: '寅谱（北京）计算有限公司',
            title: '软件开发实习生',
            description: '开发面向学术研究和商业调研的工作平台。利用大模型自动化整合本地资料，搜索引擎和论文数据库，经过推理与思考，撰写报告，最终形成专业的综述论文或调研报告。\n独立完成前端开发，包括页面逻辑、ui设计、用户管理系统开发与后端连接后部署到云。负责接入丽蟾云上的Nvidia NIM生态，实现容器化的NIM在Inf Research平台上的集成。',
        }
    },
    others: {
        title: '其他',
    }
}