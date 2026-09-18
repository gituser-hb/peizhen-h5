const IMAGE_API = "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image";

function imageUrl(prompt, size = "landscape_16_9") {
  return `${IMAGE_API}?prompt=${encodeURIComponent(prompt)}&image_size=${size}`;
}

const assets = {
  hero: imageUrl(
    "Realistic editorial photo for a Chinese healthcare service website, a warm professional female medical companion in a mint green uniform helping an elderly Chinese woman walk through a bright modern hospital lobby, clear natural daylight, trustworthy calm mood, subjects placed on the right half, generous clean pale aqua wall space on the left for Chinese headline text, crisp commercial photography, no text, no logo",
  ),
  familyCare: imageUrl(
    "Realistic lifestyle photo for a Chinese home nursing service banner, young professional nurse in pale blue uniform checking an elderly Chinese woman's blood pressure in a bright clean living room, warm daylight, caring interaction, wide composition, no text, no logo",
  ),
  certificate: imageUrl(
    "Realistic close-up photograph of a generic Chinese healthcare vocational qualification certificate on a clean desk, fictional unreadable personal information, teal official accents, no real names, no logo, professional documentation photography",
    "landscape_4_3",
  ),
  training: imageUrl(
    "Realistic close-up photograph of a generic hospital patient care training completion certificate, fictional unreadable information, light blue and green accents, clean desk, no real names, no logo",
    "landscape_4_3",
  ),
};

const services = [
  {
    id: "half-day",
    title: "半天专业陪诊",
    shortTitle: "半天陪诊",
    price: 268,
    duration: "4小时",
    icon: "clipboard-check",
    tag: "热门",
    color: "mint",
    description: "门诊全流程陪同，协助挂号、缴费、候诊、检查和取药。",
    image: imageUrl(
      "Realistic Chinese healthcare service photo, professional female medical companion in mint uniform guiding an elderly Chinese patient at a hospital registration kiosk, bright modern hospital, warm helpful interaction, clean commercial photography, no text, no logo",
      "landscape_4_3",
    ),
    includes: ["诊前提醒与路线规划", "院内全程陪同", "协助缴费及取药", "医嘱整理反馈"],
    notice: "服务时长不超过4小时，超时费用需与客服确认。医疗及交通费用由用户自行承担。",
  },
  {
    id: "full-day",
    title: "全天专业陪诊",
    shortTitle: "全天陪诊",
    price: 498,
    duration: "8小时",
    icon: "sun",
    tag: "省心",
    color: "blue",
    description: "适合多科室、多项检查或路程复杂的全天就医安排。",
    image: imageUrl(
      "Realistic Chinese healthcare service photo, trained medical companion holding appointment documents while assisting a middle aged Chinese woman through a bright hospital corridor, professional pale blue uniform, calm trustworthy mood, no text, no logo",
      "landscape_4_3",
    ),
    includes: ["一对一全天陪同", "多科室路线规划", "检查排队协助", "就诊信息整理"],
    notice: "服务时长不超过8小时。跨院区服务、特殊检查及超时服务需提前咨询。",
  },
  {
    id: "agency",
    title: "代问诊／代开药",
    shortTitle: "代问诊",
    price: 198,
    duration: "单次",
    icon: "pill",
    tag: "",
    color: "cyan",
    description: "携带资料代为问诊，按医院规则协助开药、取药和寄送。",
    image: imageUrl(
      "Realistic Chinese hospital pharmacy service photo, professional healthcare assistant in clean teal uniform collecting medicine and reviewing a prescription at a modern pharmacy counter, bright and trustworthy, no text, no logo",
      "landscape_4_3",
    ),
    includes: ["资料预审", "按规则代问诊", "协助取药", "结果与医嘱反馈"],
    notice: "是否可代问诊、代开药以医院和科室规定为准，不承诺具体药品或处方结果。",
  },
  {
    id: "vip",
    title: "VIP尊享陪诊",
    shortTitle: "VIP陪诊",
    price: 798,
    duration: "8小时",
    icon: "crown",
    tag: "专属",
    color: "navy",
    description: "资深陪诊师优先服务，提供更细致的诊前规划和诊后整理。",
    image: imageUrl(
      "Premium realistic Chinese healthcare concierge photo, senior female medical companion in elegant teal uniform assisting an older Chinese couple in a bright private hospital lobby, refined calm atmosphere, no text, no logo",
      "landscape_4_3",
    ),
    includes: ["资深陪诊师优先", "专属诊前规划", "全程进度同步", "诊后资料归档"],
    notice: "需至少提前24小时预约。指定人员及特殊需求以客服最终确认结果为准。",
  },
];

const caregivers = [
  {
    id: "lin-xin",
    name: "林欣",
    role: "陪诊师",
    level: "中级",
    rating: 100,
    orders: 326,
    years: 4,
    slogan: "熟悉综合医院流程，耐心细致，擅长老年患者陪护。",
    bio: "从事陪诊与院内护理工作4年，熟悉挂号、检查、缴费、取药等流程。注重沟通与隐私保护，会在服务结束后为家属整理就诊信息。",
    avatar: imageUrl(
      "Professional headshot portrait of a friendly Chinese female hospital patient companion around age 32, pale mint green medical uniform, neat hair, neutral light aqua studio background, realistic photography, centered shoulders, no text, no logo",
      "square",
    ),
  },
  {
    id: "zhou-yu",
    name: "周雨",
    role: "陪诊师",
    level: "高级",
    rating: 99,
    orders: 281,
    years: 6,
    slogan: "护理经验丰富，熟悉三甲医院检查与住院办理流程。",
    bio: "具备6年护理及患者服务经验，擅长复杂检查流程规划、跨科室就诊衔接以及家属沟通。服务稳妥，时间观念强。",
    avatar: imageUrl(
      "Professional headshot portrait of a confident Chinese female medical caregiver around age 38, light blue healthcare uniform, tidy short hair, clean pale blue studio background, realistic photography, centered shoulders, no text, no logo",
      "square",
    ),
  },
  {
    id: "chen-an",
    name: "陈安",
    role: "陪诊师",
    level: "中级",
    rating: 100,
    orders: 246,
    years: 3,
    slogan: "沟通耐心，路线规划清晰，关注每一处就医细节。",
    bio: "持续从事医院志愿服务和专业陪诊工作，熟悉门诊动线及常见检查注意事项。擅长陪伴异地就医和独居老人。",
    avatar: imageUrl(
      "Professional headshot portrait of a warm Chinese male hospital patient companion around age 30, clean white polo with teal trim, short neat hair, soft mint studio background, realistic photography, centered shoulders, no text, no logo",
      "square",
    ),
  },
  {
    id: "wang-yue",
    name: "王悦",
    role: "家庭护士",
    level: "执业护士",
    rating: 99,
    orders: 198,
    years: 7,
    slogan: "临床护理背景，擅长术后照护和慢病家庭健康管理。",
    bio: "具有临床护理与居家照护经验，关注服务对象的舒适度和安全。可提供基础健康观察与就医准备建议。",
    avatar: imageUrl(
      "Professional headshot portrait of an experienced Chinese registered nurse around age 35, clean pale teal nurse uniform, hair tied back, soft warm gray studio background, realistic photography, centered shoulders, no text, no logo",
      "square",
    ),
  },
  {
    id: "li-qing",
    name: "李青",
    role: "陪诊师",
    level: "高级",
    rating: 100,
    orders: 174,
    years: 5,
    slogan: "熟悉儿童医院流程，沟通亲和，注重家庭感受。",
    bio: "长期服务妇幼和儿童就诊家庭，善于安抚情绪、整理就诊资料，并及时向家属同步关键节点。",
    avatar: imageUrl(
      "Professional headshot portrait of a kind Chinese female pediatric patient companion around age 29, pale sky blue uniform, friendly natural smile, light green studio background, realistic photography, centered shoulders, no text, no logo",
      "square",
    ),
  },
];

const hospitals = [
  "北京协和医院（东单院区）",
  "北京大学第一医院",
  "北京大学人民医院",
  "中日友好医院",
  "北京朝阳医院",
  "中国医学科学院肿瘤医院",
];

const initialOrders = [
  {
    id: "QH20260918001",
    serviceId: "half-day",
    status: "completed",
    hospital: "北京大学第一医院",
    date: "2026-09-12",
    time: "08:00-12:00",
    patient: "王女士",
    phone: "138****6208",
    caregiverId: "lin-xin",
    createdAt: "2026-09-10 14:32",
  },
];

const statusMeta = {
  unpaid: { label: "待支付", tone: "warning" },
  assigning: { label: "待指派", tone: "info" },
  assigned: { label: "已指派", tone: "primary" },
  serving: { label: "服务中", tone: "success" },
  completed: { label: "已完成", tone: "neutral" },
  cancelled: { label: "已取消", tone: "neutral" },
};

const state = {
  search: "",
  caregiverType: "陪诊师",
  orderFilter: "all",
  orders: loadOrders(),
};

function loadOrders() {
  try {
    const saved = JSON.parse(localStorage.getItem("qinghe-orders"));
    return Array.isArray(saved) && saved.length ? saved : initialOrders;
  } catch {
    return initialOrders;
  }
}

function saveOrders() {
  localStorage.setItem("qinghe-orders", JSON.stringify(state.orders));
}

function esc(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function icon(name, size = 20, className = "") {
  return `<i data-lucide="${name}" width="${size}" height="${size}" class="${className}" aria-hidden="true"></i>`;
}

function go(path) {
  window.location.hash = `#/${String(path).replace(/^#?\//, "")}`;
}

function currentRoute() {
  const hash = window.location.hash || "#/home";
  const path = hash.split("?")[0];
  const parts = path.replace(/^#\//, "").split("/").filter(Boolean);
  return { name: parts[0] || "home", id: parts[1] || "" };
}

function pageHeader(title, options = {}) {
  const { back = false, subtitle = "", action = "" } = options;
  return `
    <header class="page-header ${back ? "page-header--detail" : ""}">
      <div class="page-header__side">
        ${
          back
            ? `<button class="icon-button" type="button" data-action="back" aria-label="返回" title="返回">${icon("chevron-left", 24)}</button>`
            : `<button class="location-button" type="button" data-action="location">${icon("map-pin", 16)} 北京市 ${icon("chevron-down", 14)}</button>`
        }
      </div>
      <div class="page-header__title">
        <strong>${esc(title)}</strong>
        ${subtitle ? `<small>${esc(subtitle)}</small>` : ""}
      </div>
      <div class="page-header__side page-header__side--right">${action}</div>
    </header>
  `;
}

function bottomNav(active) {
  const items = [
    ["home", "首页", "house"],
    ["caregivers", "陪诊师", "contact-round"],
    ["orders", "订单", "clipboard-list"],
    ["profile", "我的", "circle-user-round"],
  ];
  return `
    <nav class="bottom-nav" aria-label="主要导航">
      ${items
        .map(
          ([route, label, iconName]) => `
            <button class="bottom-nav__item ${active === route ? "is-active" : ""}" type="button" data-route="${route}" aria-label="${label}">
              ${icon(iconName, 24)}
              <span>${label}</span>
            </button>
          `,
        )
        .join("")}
    </nav>
  `;
}

function appShell(content, active = "", options = {}) {
  const { nav = true, className = "" } = options;
  return `
    <div class="app-shell ${className}">
      <main class="app-main ${nav ? "app-main--with-nav" : ""}">${content}</main>
      ${nav ? bottomNav(active) : ""}
    </div>
  `;
}

function homePage() {
  const query = state.search.trim().toLowerCase();
  const visibleServices = services.filter((item) =>
    `${item.title}${item.description}`.toLowerCase().includes(query),
  );
  return appShell(
    `
      <section class="home-top">
        ${pageHeader("青禾陪诊", { subtitle: "就医路上，多一份安心" })}
        <form class="search-bar" data-form="search">
          ${icon("search", 19)}
          <input type="search" name="keyword" value="${esc(state.search)}" placeholder="搜索陪诊服务" aria-label="搜索陪诊服务" />
          <button type="submit" aria-label="搜索" title="搜索">${icon("arrow-right", 18)}</button>
        </form>
        <article class="hero-banner" style="background-image:url('${assets.hero}')">
          <div class="hero-banner__copy">
            <span class="eyebrow">专业陪诊服务</span>
            <h1>青禾陪诊</h1>
            <p>安心看诊，从容回家</p>
            <button class="hero-banner__button" type="button" data-route="service/half-day">立即预约 ${icon("arrow-right", 16)}</button>
          </div>
        </article>
      </section>

      <section class="quick-services" aria-label="快捷服务">
        ${services
          .map(
            (item) => `
              <button type="button" class="quick-service" data-route="service/${item.id}">
                <span class="quick-service__icon quick-service__icon--${item.color}">${icon(item.icon, 24)}</span>
                <strong>${item.shortTitle}</strong>
                <small>${item.duration}</small>
              </button>
            `,
          )
          .join("")}
      </section>

      <section class="care-banner">
        <img src="${assets.familyCare}" alt="护士为老人提供居家健康照护" />
        <div class="care-banner__copy">
          <span>家庭护理</span>
          <h2>专业护士，上门照护</h2>
          <button type="button" data-action="family-care">了解服务 ${icon("arrow-right", 15)}</button>
        </div>
      </section>

      <section class="package-strip">
        <div class="package-strip__lead">
          <span>新人专享</span>
          <strong>首单立减 ¥30</strong>
          <button type="button" data-route="service/half-day">立即预约</button>
        </div>
        <button class="package-ticket" type="button" data-route="service/half-day">
          <span>${icon("ticket", 21)}</span>
          <div><strong>半天2次卡</strong><small>家庭共享</small></div>
        </button>
        <button class="package-ticket" type="button" data-route="service/full-day">
          <span>${icon("badge-check", 21)}</span>
          <div><strong>安心全天卡</strong><small>优先派单</small></div>
        </button>
      </section>

      <section class="content-section">
        <div class="section-heading">
          <div><span>精选服务</span><h2>${query ? `“${esc(state.search)}”的结果` : "服务项目"}</h2></div>
          ${query ? `<button type="button" data-action="clear-search">清除</button>` : ""}
        </div>
        <div class="service-list">
          ${
            visibleServices.length
              ? visibleServices.map(serviceRow).join("")
              : emptyState("search-x", "没有找到相关服务", "换一个关键词试试", "清除搜索", "clear-search")
          }
        </div>
      </section>

      <section class="promise-band" aria-label="服务保障">
        <div>${icon("badge-check", 22)}<span><strong>身份核验</strong><small>人员资料可查</small></span></div>
        <div>${icon("shield-check", 22)}<span><strong>服务留痕</strong><small>节点及时同步</small></span></div>
        <div>${icon("headphones", 22)}<span><strong>专属客服</strong><small>全程协助处理</small></span></div>
      </section>
    `,
    "home",
    { className: "home-page" },
  );
}

function serviceRow(item) {
  return `
    <article class="service-row">
      <button class="service-row__image" type="button" data-route="service/${item.id}" aria-label="查看${item.title}">
        <img src="${item.image}" alt="${item.title}服务场景" loading="lazy" />
        ${item.tag ? `<span>${item.tag}</span>` : ""}
      </button>
      <div class="service-row__body">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <div class="service-row__bottom">
          <strong><small>¥</small>${item.price}<small>/次</small></strong>
          <button type="button" data-route="service/${item.id}">立即预约</button>
        </div>
      </div>
    </article>
  `;
}

function caregiversPage() {
  const list = caregivers.filter((person) => person.role === state.caregiverType);
  return appShell(
    `
      ${pageHeader("服务人员", { subtitle: "平台核验，按需预约" })}
      <section class="sticky-tools">
        <form class="search-bar search-bar--subtle" data-form="caregiver-search">
          ${icon("search", 19)}
          <input type="search" name="keyword" placeholder="输入姓名查询" aria-label="输入姓名查询" />
          <button type="submit" aria-label="查询" title="查询">${icon("arrow-right", 18)}</button>
        </form>
        <div class="segmented" role="tablist" aria-label="服务人员类型">
          ${["陪诊师", "家庭护士"]
            .map(
              (type) => `
                <button type="button" role="tab" aria-selected="${state.caregiverType === type}" class="${state.caregiverType === type ? "is-active" : ""}" data-caregiver-type="${type}">${type}</button>
              `,
            )
            .join("")}
        </div>
      </section>
      <section class="caregiver-list">
        ${list.length ? list.map(caregiverCard).join("") : emptyState("user-search", "暂无匹配人员", "更多服务人员正在加入", "", "")}
      </section>
    `,
    "caregivers",
  );
}

function caregiverCard(person) {
  return `
    <article class="caregiver-card">
      <button class="caregiver-card__main" type="button" data-route="caregiver/${person.id}">
        <img class="avatar" src="${person.avatar}" alt="${person.name}的头像" loading="lazy" />
        <div class="caregiver-card__body">
          <div class="caregiver-card__title">
            <h3>${person.name}</h3>
            <span>${person.level}</span>
          </div>
          <div class="caregiver-card__metrics">
            <span>好评率 <strong>${person.rating}%</strong></span>
            <span>服务 <strong>${person.orders}</strong> 单</span>
            <span>经验 <strong>${person.years}</strong> 年</span>
          </div>
          <p>${person.slogan}</p>
        </div>
        ${icon("chevron-right", 19, "caregiver-card__arrow")}
      </button>
    </article>
  `;
}

function caregiverDetailPage(id) {
  const person = caregivers.find((item) => item.id === id) || caregivers[0];
  return appShell(
    `
      ${pageHeader("服务人员详情", { back: true })}
      <section class="profile-hero">
        <img class="profile-hero__avatar" src="${person.avatar}" alt="${person.name}的头像" />
        <div class="profile-hero__main">
          <div><h1>${person.name}</h1><span>${person.level}</span></div>
          <p>${person.role} · ${person.years}年服务经验</p>
          <div class="profile-hero__metrics">
            <span><strong>${person.rating}%</strong>好评率</span>
            <span><strong>${person.orders}</strong>服务单量</span>
          </div>
        </div>
      </section>
      <section class="detail-section">
        <div class="section-title"><h2>个人简介</h2></div>
        <p class="detail-copy">${person.bio}</p>
        <div class="skill-tags">
          <span>${icon("heart-handshake", 15)} 老年陪护</span>
          <span>${icon("route", 15)} 流程规划</span>
          <span>${icon("message-circle-heart", 15)} 家属沟通</span>
        </div>
      </section>
      <section class="detail-section">
        <div class="section-title"><h2>资质证明</h2><span>平台已核验</span></div>
        <div class="certificate-grid">
          <button type="button" data-action="certificate"><img src="${assets.certificate}" alt="职业资格证明示意图" /></button>
          <button type="button" data-action="certificate"><img src="${assets.training}" alt="照护培训证明示意图" /></button>
        </div>
        <p class="privacy-note">${icon("shield-check", 15)} 演示版证件为虚构示意资料，不包含真实个人信息。</p>
      </section>
      <section class="detail-section review-section">
        <div class="section-title"><h2>服务评价</h2><span>近期评价</span></div>
        <article class="review">
          <div class="review__head"><strong>匿名用户</strong><span>${icon("star", 14)} ${icon("star", 14)} ${icon("star", 14)} ${icon("star", 14)} ${icon("star", 14)}</span></div>
          <p>全程沟通清楚，提前规划好了检查路线，服务结束后还整理了医生的注意事项。</p>
          <small>2026-09-12 · 半天专业陪诊</small>
        </article>
      </section>
      <div class="sticky-cta">
        <button class="secondary-action" type="button" data-action="customer-service">${icon("headphones", 21)}<span>咨询客服</span></button>
        <button class="primary-action" type="button" data-route="booking/half-day?caregiver=${person.id}">预约 ${person.name}</button>
      </div>
    `,
    "",
    { nav: false, className: "detail-page" },
  );
}

function serviceDetailPage(id) {
  const item = services.find((service) => service.id === id) || services[0];
  return appShell(
    `
      ${pageHeader("服务详情", { back: true })}
      <section class="service-cover">
        <img src="${item.image}" alt="${item.title}服务场景" />
        <div class="service-cover__caption">
          <span>${item.duration}</span>
          <h1>${item.title}</h1>
          <p>${item.description}</p>
        </div>
      </section>
      <section class="price-band">
        <div><small>服务价</small><strong><span>¥</span>${item.price}</strong></div>
        <span>${icon("badge-check", 17)} 平台人员资质核验</span>
      </section>
      <section class="detail-section">
        <div class="section-title"><h2>服务包含</h2></div>
        <div class="included-grid">
          ${item.includes.map((text) => `<div>${icon("circle-check", 19)}<span>${text}</span></div>`).join("")}
        </div>
      </section>
      <section class="process-section">
        <div class="section-title"><h2>服务流程</h2></div>
        <ol class="process-list">
          <li><span>1</span><div><strong>提交预约</strong><small>填写医院、时间与就诊人信息</small></div></li>
          <li><span>2</span><div><strong>客服确认</strong><small>核对需求并安排合适的服务人员</small></div></li>
          <li><span>3</span><div><strong>到院服务</strong><small>按约定时间汇合并开始陪诊</small></div></li>
          <li><span>4</span><div><strong>结果反馈</strong><small>整理医嘱与就诊资料并完成服务</small></div></li>
        </ol>
      </section>
      <section class="detail-section notice-section">
        <div class="section-title"><h2>预约须知</h2></div>
        <p>${item.notice}</p>
        <p>本平台不提供诊断、治疗或医疗决策，具体诊疗请遵循医疗机构和医生意见。</p>
      </section>
      <div class="sticky-cta">
        <button class="secondary-action" type="button" data-action="customer-service">${icon("headphones", 21)}<span>咨询</span></button>
        <button class="primary-action" type="button" data-route="booking/${item.id}">立即预约 · ¥${item.price}</button>
      </div>
    `,
    "",
    { nav: false, className: "detail-page" },
  );
}

function bookingPage(id) {
  const item = services.find((service) => service.id === id) || services[0];
  const params = new URLSearchParams((window.location.hash.split("?")[1] || ""));
  const selectedCaregiver = caregivers.find((person) => person.id === params.get("caregiver"));
  const tomorrow = new Date(Date.now() + 86400000).toISOString().slice(0, 10);
  return appShell(
    `
      ${pageHeader("填写预约", { back: true })}
      <form class="booking-form" data-form="booking" data-service-id="${item.id}">
        <section class="booking-summary">
          <span class="booking-summary__icon">${icon(item.icon, 23)}</span>
          <div><strong>${item.title}</strong><small>${item.duration} · 一对一服务</small></div>
          <strong>¥${item.price}</strong>
        </section>
        <section class="form-section">
          <div class="section-title"><h2>就诊安排</h2><span>必填</span></div>
          <label class="form-field">
            <span>${icon("hospital", 19)} 就诊医院</span>
            <select name="hospital" required>
              <option value="">请选择医院</option>
              ${hospitals.map((hospital) => `<option value="${hospital}">${hospital}</option>`).join("")}
            </select>
          </label>
          <label class="form-field">
            <span>${icon("calendar-days", 19)} 就诊日期</span>
            <input type="date" name="date" min="${tomorrow}" required />
          </label>
          <label class="form-field">
            <span>${icon("clock-3", 19)} 服务时段</span>
            <select name="time" required>
              <option value="">请选择时段</option>
              <option>08:00-12:00</option>
              <option>13:00-17:00</option>
              ${item.duration === "8小时" ? `<option>08:00-17:00</option>` : ""}
            </select>
          </label>
        </section>
        <section class="form-section">
          <div class="section-title"><h2>联系信息</h2><span>仅用于本次服务</span></div>
          <label class="form-field">
            <span>${icon("user-round", 19)} 就诊人</span>
            <input type="text" name="patient" maxlength="20" placeholder="请输入姓名" required />
          </label>
          <label class="form-field">
            <span>${icon("phone", 19)} 联系手机</span>
            <input type="tel" name="phone" inputmode="numeric" maxlength="11" placeholder="请输入11位手机号" required />
          </label>
          <label class="form-field form-field--textarea">
            <span>${icon("notebook-pen", 19)} 服务备注</span>
            <textarea name="note" maxlength="200" placeholder="选填：科室、集合位置、行动协助等"></textarea>
          </label>
        </section>
        ${
          selectedCaregiver
            ? `<section class="selected-caregiver">
                <img src="${selectedCaregiver.avatar}" alt="${selectedCaregiver.name}的头像" />
                <div><span>意向陪诊师</span><strong>${selectedCaregiver.name} · ${selectedCaregiver.level}</strong><small>最终以平台确认结果为准</small></div>
                <input type="hidden" name="caregiverId" value="${selectedCaregiver.id}" />
              </section>`
            : ""
        }
        <label class="consent-row">
          <input type="checkbox" name="consent" required />
          <span>我已阅读并同意《服务协议》和《隐私说明》</span>
        </label>
        <div class="booking-spacer"></div>
        <div class="booking-submit">
          <div><small>合计</small><strong>¥${item.price}</strong></div>
          <button type="submit">提交预约</button>
        </div>
      </form>
    `,
    "",
    { nav: false, className: "booking-page" },
  );
}

function ordersPage() {
  const tabs = [
    ["all", "全部"],
    ["unpaid", "待支付"],
    ["assigning", "待指派"],
    ["assigned", "已指派"],
    ["serving", "服务中"],
    ["completed", "已完成"],
  ];
  const list =
    state.orderFilter === "all"
      ? state.orders
      : state.orders.filter((order) => order.status === state.orderFilter);
  return appShell(
    `
      ${pageHeader("我的订单", { subtitle: `${state.orders.length}个订单` })}
      <div class="order-tabs" role="tablist" aria-label="订单状态">
        ${tabs
          .map(
            ([value, label]) => `
              <button type="button" role="tab" aria-selected="${state.orderFilter === value}" class="${state.orderFilter === value ? "is-active" : ""}" data-order-filter="${value}">${label}</button>
            `,
          )
          .join("")}
      </div>
      <section class="order-list">
        ${
          list.length
            ? list.map(orderCard).join("")
            : emptyState("clipboard-x", "暂无相关订单", "预约后可在这里查看服务进度", "去预约", "go-home")
        }
      </section>
    `,
    "orders",
  );
}

function orderCard(order) {
  const item = services.find((service) => service.id === order.serviceId) || services[0];
  const meta = statusMeta[order.status] || statusMeta.assigning;
  return `
    <article class="order-card">
      <button class="order-card__main" type="button" data-route="order/${order.id}">
        <div class="order-card__head"><span>订单 ${esc(order.id)}</span><strong class="status status--${meta.tone}">${meta.label}</strong></div>
        <div class="order-card__service">
          <span class="order-card__icon">${icon(item.icon, 22)}</span>
          <div><h3>${item.title}</h3><p>${esc(order.hospital)}</p></div>
          <strong>¥${item.price}</strong>
        </div>
        <div class="order-card__time">${icon("calendar-clock", 17)} ${esc(order.date)} ${esc(order.time)}</div>
      </button>
      <div class="order-card__actions">
        ${
          order.status === "unpaid"
            ? `<button type="button" data-action="cancel-order" data-id="${order.id}">取消</button><button class="is-primary" type="button" data-action="pay-order" data-id="${order.id}">模拟支付</button>`
            : `<button type="button" data-route="order/${order.id}">查看详情</button>`
        }
      </div>
    </article>
  `;
}

function orderDetailPage(id) {
  const order = state.orders.find((item) => item.id === id);
  if (!order) return notFoundPage("订单不存在");
  const item = services.find((service) => service.id === order.serviceId) || services[0];
  const meta = statusMeta[order.status] || statusMeta.assigning;
  const person = caregivers.find((caregiver) => caregiver.id === order.caregiverId);
  const steps = ["提交预约", "平台确认", "人员服务", "服务完成"];
  const progressMap = { unpaid: 0, assigning: 1, assigned: 1, serving: 2, completed: 3, cancelled: 0 };
  const progress = progressMap[order.status] === undefined ? 0 : progressMap[order.status];
  return appShell(
    `
      ${pageHeader("订单详情", { back: true })}
      <section class="order-status-panel">
        <span class="order-status-panel__icon">${icon(order.status === "completed" ? "circle-check-big" : "clock-3", 27)}</span>
        <div><strong>${meta.label}</strong><p>${orderStatusDescription(order.status)}</p></div>
      </section>
      <section class="progress-track">
        ${steps
          .map(
            (label, index) => `
              <div class="${index <= progress && order.status !== "cancelled" ? "is-done" : ""}">
                <span>${index < progress ? icon("check", 13) : index + 1}</span>
                <small>${label}</small>
              </div>
            `,
          )
          .join("")}
      </section>
      <section class="detail-section order-detail-card">
        <div class="section-title"><h2>服务信息</h2><span class="status status--${meta.tone}">${meta.label}</span></div>
        <dl class="info-list">
          <div><dt>服务项目</dt><dd>${item.title}</dd></div>
          <div><dt>就诊医院</dt><dd>${esc(order.hospital)}</dd></div>
          <div><dt>服务时间</dt><dd>${esc(order.date)} ${esc(order.time)}</dd></div>
          <div><dt>就诊人</dt><dd>${esc(order.patient)}</dd></div>
          <div><dt>联系电话</dt><dd>${esc(order.phone)}</dd></div>
          <div><dt>订单金额</dt><dd class="price-text">¥${item.price}</dd></div>
        </dl>
      </section>
      ${
        person
          ? `<section class="detail-section assigned-person">
              <div class="section-title"><h2>服务人员</h2></div>
              <button type="button" data-route="caregiver/${person.id}">
                <img src="${person.avatar}" alt="${person.name}的头像" />
                <div><strong>${person.name}<span>${person.level}</span></strong><small>${person.slogan}</small></div>
                ${icon("chevron-right", 19)}
              </button>
            </section>`
          : ""
      }
      <section class="detail-section">
        <div class="section-title"><h2>订单信息</h2></div>
        <dl class="info-list info-list--muted">
          <div><dt>订单编号</dt><dd>${esc(order.id)}</dd></div>
          <div><dt>下单时间</dt><dd>${esc(order.createdAt)}</dd></div>
        </dl>
      </section>
      ${
        order.status === "unpaid"
          ? `<div class="sticky-cta"><button class="secondary-action secondary-action--wide" type="button" data-action="cancel-order" data-id="${order.id}">取消订单</button><button class="primary-action" type="button" data-action="pay-order" data-id="${order.id}">模拟支付</button></div>`
          : `<div class="sticky-cta"><button class="primary-action primary-action--full" type="button" data-action="customer-service">联系平台客服</button></div>`
      }
    `,
    "",
    { nav: false, className: "detail-page" },
  );
}

function orderStatusDescription(status) {
  const copy = {
    unpaid: "订单已生成，请在30分钟内完成支付",
    assigning: "平台正在确认需求并安排服务人员",
    assigned: "服务人员已安排，请留意后续联系",
    serving: "本次陪诊服务正在进行",
    completed: "本次服务已完成，感谢你的信任",
    cancelled: "订单已取消，如有疑问请联系客服",
  };
  return copy[status] || copy.assigning;
}

function profilePage() {
  const counts = ["unpaid", "assigning", "serving", "completed"].map(
    (status) => state.orders.filter((order) => order.status === status).length,
  );
  return appShell(
    `
      <section class="profile-top">
        ${pageHeader("个人中心", { action: `<button class="icon-button" type="button" data-action="notifications" aria-label="消息" title="消息">${icon("bell", 21)}</button>` })}
        <div class="profile-account">
          <div class="profile-account__avatar">${icon("user-round", 31)}</div>
          <div><h1>微信用户</h1><p>青禾陪诊普通会员</p></div>
          <button type="button" data-action="edit-profile">编辑资料 ${icon("chevron-right", 16)}</button>
        </div>
        <div class="membership-banner">
          <div>${icon("badge-check", 22)}<span><strong>青禾安心会员</strong><small>首单立减 · 优先客服</small></span></div>
          <button type="button" data-action="membership">了解权益</button>
        </div>
      </section>
      <section class="profile-orders">
        <div class="section-heading"><div><span>服务进度</span><h2>我的订单</h2></div><button type="button" data-route="orders">全部订单 ${icon("chevron-right", 15)}</button></div>
        <div class="profile-order-grid">
          ${[
            ["unpaid", "待支付", "wallet-cards"],
            ["assigning", "待指派", "calendar-search"],
            ["serving", "服务中", "heart-pulse"],
            ["completed", "已完成", "circle-check-big"],
          ]
            .map(
              ([status, label, iconName], index) => `
                <button type="button" data-profile-order="${status}">
                  <span>${icon(iconName, 22)}${counts[index] ? `<em>${counts[index]}</em>` : ""}</span>
                  <small>${label}</small>
                </button>
              `,
            )
            .join("")}
        </div>
      </section>
      <section class="menu-section">
        ${menuRow("users-round", "就诊人管理", "常用就诊人和联系人", "patient-manager")}
        ${menuRow("ticket-check", "我的卡券", "优惠券与服务卡", "coupons")}
        ${menuRow("user-round-plus", "服务人员申请", "陪诊师与家庭护士入驻", "apply-caregiver")}
      </section>
      <section class="menu-section">
        ${menuRow("notebook-tabs", "服务协议", "预约、取消与退款规则", "agreements")}
        ${menuRow("headphones", "咨询客服", "工作日 08:00-20:00", "customer-service")}
        ${menuRow("shield-check", "隐私与安全", "个人信息保护说明", "privacy")}
      </section>
      <p class="demo-label">当前为 H5 产品演示，所有订单与支付均为模拟数据</p>
    `,
    "profile",
    { className: "profile-page" },
  );
}

function menuRow(iconName, title, subtitle, action) {
  return `
    <button class="menu-row" type="button" data-action="${action}">
      <span class="menu-row__icon">${icon(iconName, 20)}</span>
      <span><strong>${title}</strong><small>${subtitle}</small></span>
      ${icon("chevron-right", 18)}
    </button>
  `;
}

function emptyState(iconName, title, description, buttonText, action) {
  return `
    <div class="empty-state">
      <span>${icon(iconName, 34)}</span>
      <strong>${title}</strong>
      <p>${description}</p>
      ${buttonText ? `<button type="button" data-action="${action}">${buttonText}</button>` : ""}
    </div>
  `;
}

function notFoundPage(message = "页面不存在") {
  return appShell(
    `
      ${pageHeader("提示", { back: true })}
      ${emptyState("file-question", message, "请返回上一页重试", "返回首页", "go-home")}
    `,
    "",
    { nav: false },
  );
}

function render() {
  const route = currentRoute();
  let html = "";
  if (route.name === "home") html = homePage();
  else if (route.name === "caregivers") html = caregiversPage();
  else if (route.name === "caregiver") html = caregiverDetailPage(route.id);
  else if (route.name === "service") html = serviceDetailPage(route.id);
  else if (route.name === "booking") html = bookingPage(route.id);
  else if (route.name === "orders") html = ordersPage();
  else if (route.name === "order") html = orderDetailPage(route.id);
  else if (route.name === "profile") html = profilePage();
  else html = notFoundPage();
  document.querySelector("#app").innerHTML = html;
  window.scrollTo(0, 0);
  if (window.lucide) window.lucide.createIcons();
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 2200);
}

function createOrder(form) {
  const data = new FormData(form);
  const phone = String(data.get("phone") || "").trim();
  if (!/^1\d{10}$/.test(phone)) {
    showToast("请输入正确的11位手机号");
    form.elements.phone.focus();
    return;
  }
  const now = new Date();
  const id = `QH${now.toISOString().replace(/\D/g, "").slice(0, 14)}`;
  const order = {
    id,
    serviceId: form.dataset.serviceId,
    status: "unpaid",
    hospital: data.get("hospital"),
    date: data.get("date"),
    time: data.get("time"),
    patient: data.get("patient"),
    phone: phone.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2"),
    caregiverId: data.get("caregiverId") || "",
    note: data.get("note") || "",
    createdAt: now.toLocaleString("zh-CN", { hour12: false }),
  };
  state.orders.unshift(order);
  saveOrders();
  showToast("预约已提交");
  go(`order/${id}`);
}

function updateOrder(id, status) {
  const order = state.orders.find((item) => item.id === id);
  if (!order) return;
  order.status = status;
  if (status === "assigning" && !order.caregiverId) order.caregiverId = caregivers[0].id;
  saveOrders();
  render();
  showToast(status === "assigning" ? "模拟支付成功，平台正在安排人员" : "订单已取消");
}

document.addEventListener("click", (event) => {
  const routeTarget = event.target.closest("[data-route]");
  if (routeTarget) {
    go(routeTarget.dataset.route);
    return;
  }
  const navTarget = event.target.closest("[data-profile-order]");
  if (navTarget) {
    state.orderFilter = navTarget.dataset.profileOrder;
    go("orders");
    return;
  }
  const typeTarget = event.target.closest("[data-caregiver-type]");
  if (typeTarget) {
    state.caregiverType = typeTarget.dataset.caregiverType;
    render();
    return;
  }
  const filterTarget = event.target.closest("[data-order-filter]");
  if (filterTarget) {
    state.orderFilter = filterTarget.dataset.orderFilter;
    render();
    return;
  }
  const actionTarget = event.target.closest("[data-action]");
  if (!actionTarget) return;
  const action = actionTarget.dataset.action;
  if (action === "back") window.history.length > 1 ? window.history.back() : go("home");
  else if (action === "clear-search") {
    state.search = "";
    render();
  } else if (action === "go-home") go("home");
  else if (action === "pay-order") updateOrder(actionTarget.dataset.id, "assigning");
  else if (action === "cancel-order") updateOrder(actionTarget.dataset.id, "cancelled");
  else if (action === "location") showToast("演示版当前服务城市：北京市");
  else if (action === "certificate") showToast("资质资料仅作界面演示");
  else if (action === "family-care") {
    state.caregiverType = "家庭护士";
    go("caregivers");
  } else if (action === "customer-service") showToast("客服入口将在营业版接入");
  else if (action === "membership") showToast("会员权益正在筹备");
  else if (action === "notifications") showToast("暂无新消息");
  else if (action === "edit-profile") showToast("资料编辑将在登录后开放");
  else showToast("该功能将在营业版接入");
});

document.addEventListener("submit", (event) => {
  const form = event.target;
  if (!form.matches("[data-form]")) return;
  event.preventDefault();
  if (form.dataset.form === "search") {
    state.search = new FormData(form).get("keyword") || "";
    render();
  } else if (form.dataset.form === "caregiver-search") {
    const keyword = String(new FormData(form).get("keyword") || "").trim();
    const person = caregivers.find((item) => item.name.includes(keyword));
    if (person) go(`caregiver/${person.id}`);
    else showToast(keyword ? "暂未找到该服务人员" : "请输入姓名");
  } else if (form.dataset.form === "booking") {
    if (!form.reportValidity()) return;
    createOrder(form);
  }
});

window.addEventListener("hashchange", render);

function init() {
  if (!window.location.hash) window.history.replaceState(null, "", "#/home");
  render();
}

if (document.readyState === "complete") window.setTimeout(init, 0);
else window.addEventListener("load", () => window.setTimeout(init, 0), { once: true });
