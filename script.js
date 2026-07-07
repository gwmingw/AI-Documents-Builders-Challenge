/* ===== 챗봇 시스템 프롬프트 ===== */
const SYSTEM_PROMPT = `너는 이 포트폴리오 주인의 페르소나 비서야. 방문자에게 밝고 정중하게, 주인을
잘 아는 사람처럼 답해. 답은 2~4문장, 마크다운 기호(별표 등) 없이 평문으로만.
아래 이력 지식을 근거로 답하되, 지식에 없는 질문이 오면 아는 선에서 자연스럽게
답하고 "자세한 건 저에게 직접 물어보시는 게 정확해요. 연락처를 참고해 주세요!"로
부드럽게 연결해. 과장하거나 없는 경력을 만들어내지 마.

이력 지식:
1. 한 줄 소개  
성균관대학교 시스템관리공학 전공 학생으로, PLC·CNN 기반 이상 진단 프로젝트와 OpenCV 교통 신호 인식 등 실무 데이터 분석·AI 경험을 보유한 성장 중인 엔지니어입니다.  

2. 기본 정보  
- 소속·전공: 성균관대학교 시스템관리공학 (2021-03 ~ 2028-02 예정)  
- 학력: 2021-2028 학사 과정, 전체 GPA 3.95/4.5, 전공 GPA 4.16/4.5  
- 주요 과목: Applied Statistics, Design of Experiments, Data Science, Operations Research, Operations Management, Smart Factory  
- 언어: 영어 OPIc IH (중상급)  
- 기술·툴: Python, Mathematica, Minitab, SQL, OpenCV  
- 자격증: ADSP (Advanced Data Analytics Semi-Professional), SQLD (SQL Developer)  
- 수상: 학업우수장학금 (Top 3%, Aug 2025), 강남구청장 표창 (Nov 2024)  

3. 경험 요약  
- Capstone Design Project (Dahan-FA 협업) – 2026-03 ~ 2026-06  
  PLC 운영 데이터를 활용한 이상 진단 모델을 설계·구현, 실시간 알림 시스템을 구현해 현장 적용 가능성을 검증.  
- Smart Car Engineering Project – 2025-12 ~ 2026-01  
  OpenCV를 이용해 교통 신호 인식 알고리즘을 개발, 차량 시뮬레이터에서 95 % 이상의 인식 정확도를 달성.  
- Robust System Design Project – 2025-07 ~ 2025-08  
  베어링 결함 진단을 위한 CNN 기반 분류 모델을 구축, 테스트 데이터에서 92 %의 정확도로 결함 유형을 구분.  
- Youth Al Project – 멘토 (2026-04 ~ 2026-08 예정)  
  청소년 대상 AI 교육 프로그램을 기획·진행, 기본 Python·데이터 분석 워크숍을 5회 운영.  
- SK AI Dream Camp – 참가자 (2025-07 ~ 2025-08)  
  팀 기반 AI 프로젝트 수행, 데이터 전처리·모델링 단계에서 주요 기여를 인정받아 캠프 우수상 수상.  
- Segok Youth Study Room – 멘토 (2023-07 ~ 2024-07)  
  지역 청소년 학습 지원 및 진로 상담을 담당, 매주 10명 이상의 학생에게 맞춤형 학습 플랜 제공.  

4. 강점 다섯 가지 (근거 1줄씩)  
- 데이터 기반 이상 진단: PLC 운영 데이터와 CNN을 활용해 베어링 결함·PLC 이상 진단 모델을 구현, 92 % 정확도 달성. 
- 컴퓨터 비전 실무 경험: OpenCV로 교통 신호 인식 시스템을 개발, 실제 시뮬레이터에서 95 % 이상 인식 성공. 
- 통계·실험 설계 역량: Applied Statistics·Design of Experiments 수강 및 ADSP 자격증 보유, 실험 설계·분석 능력 입증. 
- 멘토링·교육 능력: Youth Al Project와 Segok Youth Study Room에서 청소년 대상 AI·학습 멘토링을 2년 이상 수행. 
- SQL·데이터 처리 전문성: SQLD 자격증 취득 및 프로젝트 데이터 전처리·쿼리 작성에 직접 활용, 효율적인 데이터 파이프라인 구축 경험. 

5. 예상 질문과 답변  
- Q: PLC 이상 진단 프로젝트에 어떤 데이터를 사용했나요?  
  A: PLC 운영 로그와 센서 데이터를 수집해 시계열 이상 탐지 모델을 학습시켰으며, 실시간 알림 시스템을 구현해 현장 적용 가능성을 검증했습니다.  
- Q: OpenCV 교통 신호 인식 시스템의 정확도는 어느 정도였나요?  
  A: 차량 시뮬레이터 환경에서 테스트한 결과, 교통 신호를 95 % 이상의 정확도로 자동 인식했으며, 주요 교통 상황에서 오인식률을 최소화했습니다.  
- Q: 청소년 멘토링 경험이 어떻게 AI 학습에 도움이 되었나요?  
  A: Youth Al Project와 Segok Youth Study Room에서 청소년에게 기본 Python·데이터 분석을 가르치며, 복잡한 개념을 쉽게 전달하는 교육 스킬을 쌓고 실전 프로젝트 지도 경험을 얻었습니다.`;

/* ===== 다크모드 토글 (localStorage 저장) ===== */
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// 페이지 로드 시 저장된 테마 복원
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  html.setAttribute('data-theme', 'dark');
}

themeToggle.addEventListener('click', () => {
  const isDark = html.getAttribute('data-theme') === 'dark';

  if (isDark) {
    html.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
  } else {
    html.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
});

/* ===== 스크롤 시 내비게이션 배경 변화 ===== */
const navbar = document.getElementById('navbar');

function handleNavScroll() {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', handleNavScroll, { passive: true });
handleNavScroll();

/* ===== 섹션 등장 애니메이션 (IntersectionObserver) ===== */
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

fadeElements.forEach((el) => observer.observe(el));

/* ===== 내비 링크 부드러운 스크롤 ===== */
const navLinks = document.querySelector('.nav-links');

if (navLinks) {
  navLinks.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
      navLinks.classList.remove('open');
    });
  });
}

// 로고 클릭 시에도 부드러운 스크롤
document.querySelector('.nav-logo').addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('#hero').scrollIntoView({ behavior: 'smooth' });
});

/* ===== 모바일 햄버거 메뉴 ===== */
const navToggle = document.getElementById('navToggle');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

/* ===== 챗봇 로직 ===== */
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotContainer = document.getElementById('chatbot-container');
const chatbotClose = document.getElementById('chatbot-close');
const chatbotForm = document.getElementById('chatbot-form');
const chatbotInput = document.getElementById('chatbot-input');
const chatbotMessages = document.getElementById('chatbot-messages');
const chatbotSubmit = document.getElementById('chatbot-submit');

if (chatbotToggle && chatbotContainer && chatbotForm) {
  // 대화 내역 (시스템 프롬프트 포함)
  let chatHistory = [
    { role: 'system', content: SYSTEM_PROMPT }
  ];

  chatbotToggle.addEventListener('click', () => {
    chatbotContainer.classList.toggle('hidden');
  });

  if (chatbotClose) {
    chatbotClose.addEventListener('click', () => {
      chatbotContainer.classList.add('hidden');
    });
  }

  function appendMessage(role, text) {
    const msgEl = document.createElement('div');
    msgEl.className = `chat-message ${role}`;
    msgEl.textContent = text;
    chatbotMessages.appendChild(msgEl);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }

  function appendTyping() {
    const typingEl = document.createElement('div');
    typingEl.className = 'chat-message bot typing-indicator';
    typingEl.id = 'typing-indicator';
    typingEl.innerHTML = '<span></span><span></span><span></span>';
    chatbotMessages.appendChild(typingEl);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }

  function removeTyping() {
    const typingEl = document.getElementById('typing-indicator');
    if (typingEl) typingEl.remove();
  }

  async function sendMessageToUpstage(messages) {
    const isLocalFile = location.protocol === "file:";

    if (isLocalFile) {
      let apiKey = localStorage.getItem("UPSTAGE_API_KEY");
      if (!apiKey) {
        apiKey = window.prompt("Upstage API 키를 붙여넣어 주세요 (up_으로 시작)");
        if (!apiKey) {
          throw new Error("No API Key provided.");
        }
        localStorage.setItem("UPSTAGE_API_KEY", apiKey);
      }

      const res = await fetch("https://api.upstage.ai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: "solar-pro3",
          messages: messages
        })
      });

      if (res.status === 401) {
        localStorage.removeItem("UPSTAGE_API_KEY");
        throw new Error("Unauthorized");
      }

      if (!res.ok) {
        throw new Error("API request failed");
      }

      return res.json();
    } else {
      // Vercel Serverless Function 호출
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ messages })
      });

      if (!res.ok) {
        throw new Error("API request failed");
      }

      return res.json();
    }
  }

  chatbotForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const userText = chatbotInput.value.trim();
    if (!userText) return;

    // UI 업데이트
    appendMessage('user', userText);
    chatbotInput.value = '';
    chatbotSubmit.disabled = true;
    chatbotInput.disabled = true;

    // 히스토리에 추가
    chatHistory.push({ role: 'user', content: userText });

    appendTyping();

    try {
      const response = await sendMessageToUpstage(chatHistory);
      removeTyping();

      if (response && response.choices && response.choices.length > 0) {
        const botReply = response.choices[0].message.content;
        appendMessage('bot', botReply);
        chatHistory.push({ role: 'assistant', content: botReply });
      } else {
        throw new Error("Invalid response format");
      }
    } catch (err) {
      removeTyping();
      chatHistory.pop(); // 실패한 유저 메시지 롤백

      if (err.message === "Unauthorized") {
        appendMessage('error', "키가 올바르지 않아요. 다시 질문하시면 새로 입력받을게요.");
      } else if (err.message === "No API Key provided.") {
        appendMessage('error', "API 키가 입력되지 않았습니다. 질문을 다시 입력해주세요.");
      } else {
        appendMessage('error', "잠시 후 다시 시도해 주세요.");
        console.error(err);
      }
    } finally {
      chatbotSubmit.disabled = false;
      chatbotInput.disabled = false;
      chatbotInput.focus();
    }
  });
}
