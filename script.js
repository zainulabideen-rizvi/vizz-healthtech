// Data
const stats = [
    { label: 'Clients', value: 400, suffix: '+' },
    { label: 'Projects Delivered', value: 600, suffix: '+' },
    { label: 'Employees', value: 200, suffix: '+' },
    { label: 'Since', value: 2009, suffix: '' },
];

const projects = [
    { title: 'Health IQ', image: 'projects/HIQ.webp', description: 'Smart healthcare mobile app for patients, providers, and care teams with real-time engagement workflows.', tech: ['React Native', 'FHIR', 'Node.js'], metrics: ['+46% engagement', '98.2% uptime', '24/7 sync'], tone: 'cyan' },
    { title: 'Dinar Airport Transfers', image: 'projects/Dinar-airport-transfers.webp', description: 'Premium airport transfer booking platform with real-time driver tracking and luxury fleet management.', tech: ['Next.js', 'Stripe', 'Mapbox'], metrics: ['8k bookings/mo', '4.9★ rating', '12 cities'], tone: 'amber' },
    { title: 'Smart CRM Solutions', image: 'projects/Smart-CRM-Solutions_nw.webp', description: 'AI-powered customer relationship platform with intelligent lead scoring and pipeline automation.', tech: ['React', 'OpenAI', 'PostgreSQL'], metrics: ['+3.2x conversions', '92% accuracy', '50k users'], tone: 'violet' },
    { title: 'DigieBot', image: 'projects/digiebot.webp', description: 'Conversational AI assistant for enterprise teams handling support, sales, and internal workflows.', tech: ['LangChain', 'OpenAI', 'Vercel'], metrics: ['1.5M chats', '0.4s response', '24 languages'], tone: 'cyan' },
    { title: 'Hamara Venue', image: 'projects/hamaravenue_casestudy.webp', description: 'All-in-one event venue marketplace with smart discovery, booking, and vendor coordination.', tech: ['Next.js', 'Firebase', 'AWS'], metrics: ['5k venues', '22k events', '18 cities'], tone: 'rose' },
    { title: 'Enterprise LMS', image: 'projects/lms.webp', description: 'Modern learning platform with AI-curated courses, progress tracking, and certification workflows.', tech: ['React', 'Node.js', 'MongoDB'], metrics: ['80k learners', '1.2k courses', '96% completion'], tone: 'emerald' },
    { title: 'Nexus Portfolio', image: 'projects/nexus-portfolio-vizzwebsolutions.webp', description: 'Beautifully crafted investment portfolio dashboard with real-time analytics and forecasting.', tech: ['Next.js', 'D3.js', 'TypeScript'], metrics: ['$1.2B AUM', '18k investors', 'Real-time'], tone: 'violet' },
    { title: 'Utherverse', image: 'projects/utherverse_1.webp', description: 'Immersive 3D metaverse platform with virtual worlds, social features, and creator economy.', tech: ['Three.js', 'WebGL', 'Node.js'], metrics: ['2M users', '800+ worlds', 'VR-ready'], tone: 'amber' },
    { title: 'VidPost AI', image: 'projects/vidpostai-nw.webp', description: 'AI-driven video generation and social content automation for marketing teams.', tech: ['OpenAI', 'FFmpeg', 'AWS'], metrics: ['240k videos', '+6.4x reach', '12 platforms'], tone: 'cyan' },
    { title: 'nSights', image: 'projects/vizz-web-solutions-nsights_portfolio.webp', description: 'DeFi trading intelligence platform with on-chain analytics and AI-powered alpha signals.', tech: ['Solidity', 'Web3.js', 'GraphQL'], metrics: ['$80M volume', '9k traders', '24 chains'], tone: 'emerald' },
    { title: 'AI Telemedicine Platform', image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=1200&q=80', description: 'A secure virtual care system with intelligent triage, appointment automation, and clinician dashboards.', tech: ['Next.js', 'OpenAI', 'AWS'], metrics: ['12k visits/mo', '3.4 min triage', 'HIPAA ready'], tone: 'cyan' },
    { title: 'Smart Hospital ERP', image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80', description: 'Unified operations suite connecting billing, scheduling, inventory, staff, and compliance in one system.', tech: ['Kubernetes', 'PostgreSQL', 'Docker'], metrics: ['-31% delays', '7 modules live', 'Enterprise scale'], tone: 'emerald' },
    { title: 'Healthcare Analytics Dashboard', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80', description: 'Executive command center for forecasting, clinical KPIs, operational insights, and performance visibility.', tech: ['TensorFlow', 'LangChain', 'AWS'], metrics: ['1.2M datapoints', '92% prediction', 'Live refresh'], tone: 'violet' },
    { title: 'AI Patient Monitoring System', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80', description: 'Continuous monitoring with anomaly detection, care alerts, and proactive intervention pathways.', tech: ['React', 'Node.js', 'OpenAI'], metrics: ['-18% readmissions', 'Smart alerts', 'Edge secure'], tone: 'rose' },
    { title: 'Medical Workflow Automation Platform', image: 'https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?auto=format&fit=crop&w=1200&q=80', description: 'Automation engine for intake, approvals, routing, notifications, and care coordination.', tech: ['LangChain', 'PostgreSQL', 'Docker'], metrics: ['+3.1x throughput', '82 workflows', 'Audit trails'], tone: 'cyan' },
];

const testimonials = [
    { name: 'Dr. Elena Morris', role: 'Chief Medical Officer', company: 'NorthBridge Health', avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80', text: 'Vizz helped us launch a modern patient platform that felt enterprise-grade from day one. The AI layer reduced operational friction dramatically.' },
    { name: 'Aarav Shah', role: 'VP Digital Transformation', company: 'CareNova Clinics', avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80', text: 'The team delivered a polished telemedicine ecosystem with speed, precision, and a genuine understanding of healthcare workflows.' },
    { name: 'Sophia Grant', role: 'Director of Innovation', company: 'MediCore Systems', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80', text: 'Their balance of strategy, design, and engineering made it easy to modernize our platform without compromising compliance.' },
    { name: 'James Peterson', role: 'Operations Lead', company: 'WellSpring Group', avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=400&q=80', text: 'We now have visibility into our entire care journey. The dashboards are beautiful, fast, and built for enterprise reality.' },
    { name: 'Dr. Priya Nair', role: 'Head of Clinical AI', company: 'Lumen Health Group', avatar: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=400&q=80', text: 'Vizz built our entire AI triage engine in record time. Quality, security, and clinical accuracy were exceptional.' },
    { name: 'Marcus Lin', role: 'CTO', company: 'HelixCare', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80', text: 'They felt like an extension of our internal team — proactive, transparent, and genuinely excellent engineers.' },
];

// OpenAI logo inlined as a data URI so it always loads (no CDN dependency)
const OPENAI_LOGO = 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#0f0f0f" d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.998-2.9 6.056 6.056 0 0 0-.748-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.142-.08 4.778-2.758a.795.795 0 0 0 .393-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.495 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.677l5.815 3.354-2.02 1.169a.076.076 0 0 1-.071 0l-4.83-2.786a4.504 4.504 0 0 1-1.648-6.118zm16.597 3.855l-5.833-3.387 2.015-1.164a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.104v-5.677a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.062l4.83-2.787a4.499 4.499 0 0 1 6.68 4.66zM8.307 12.863l-2.02-1.164a.08.08 0 0 1-.038-.057V6.074a4.499 4.499 0 0 1 7.376-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.68zm1.097-2.366l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/></svg>');

const techStack = [
    // Inner orbit — 8 core technologies
    { name: 'React', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', desc: 'UI framework powering modern patient interfaces.' },
    { name: 'Next.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', desc: 'Full-stack React for high-performance health apps.' },
    { name: 'TypeScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', desc: 'Type-safe code for healthcare-grade reliability.' },
    { name: 'Node.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', desc: 'Scalable runtime for real-time healthcare APIs.' },
    { name: 'Python', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', desc: 'Data science & AI pipeline backbone.' },
    { name: 'OpenAI', image: OPENAI_LOGO, desc: 'LLMs powering clinical reasoning agents.' },
    { name: 'React Native', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', desc: 'Native iOS & Android from a single codebase.' },
    { name: 'Docker', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', desc: 'Container delivery for portable workloads.' },
    // Outer orbit — 16 specialized technologies
    { name: 'AWS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', desc: 'HIPAA-eligible cloud at enterprise scale.' },
    { name: 'Kubernetes', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', desc: 'Self-healing orchestration for mission-critical apps.' },
    { name: 'PostgreSQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', desc: 'Battle-tested relational data store.' },
    { name: 'MongoDB', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', desc: 'Flexible document store for FHIR resources.' },
    { name: 'Redis', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', desc: 'In-memory cache for instant care interactions.' },
    { name: 'GraphQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg', desc: 'Typed API contracts for clean data access.' },
    { name: 'TensorFlow', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', desc: 'Deep learning for imaging and prediction.' },
    { name: 'Firebase', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', desc: 'Realtime mobile backend & auth.' },
    { name: 'Vercel', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg', desc: 'Edge deployment for global low-latency apps.' },
    { name: 'Tailwind', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', desc: 'Utility-first styling system for design speed.' },
    { name: 'Flutter', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', desc: 'Cross-platform mobile for patient & provider apps.' },
    { name: 'PHP', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', desc: 'Server-side language for legacy & modern stacks.' },
    { name: 'GCP', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg', desc: 'Google Cloud for AI-native workloads.' },
    { name: 'Azure', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', desc: 'Microsoft Azure for enterprise integration.' },
    { name: 'Figma', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', desc: 'Design-to-code collaboration platform.' },
    { name: 'n8n', image: 'https://api.iconify.design/simple-icons/n8n.svg?color=%23EA4B71', desc: 'Workflow automation for AI pipelines.' },
];

const logoUrl = 'https://flamesimagestorage.blob.core.windows.net/files/230971ec-921d-498f-aac8-5c45b8171adc_1778669758634_prj_bl4mov1m/bb1c99be-a25f-4065-b127-48b42fabc52d-logo.png';

// DOM Elements
const sparkleContainer = document.getElementById('sparkle-container');
const statsGrid = document.getElementById('stats-grid');
const projectsMarquee = document.getElementById('projects-marquee');
const techGrid = document.getElementById('tech-grid');
const testimonialsMarquee = document.getElementById('testimonials-marquee');
const cosmicStarsContainer = document.getElementById('cosmic-stars');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    generateSparkles();
    generateCosmicStars();
    renderStats();
    renderProjects();
    renderTechStack();
    renderTestimonials();
    startStatsCounter();
    setupRevealObserver();
    setupOffscreenPauser();
    setupProjectsDragCarousel();
    setFooterYear();
    initAOS();
});

// Projects carousel — JS-driven auto-scroll + click-and-drag
function setupProjectsDragCarousel() {
    const wrap = document.querySelector('.projects-section .marquee-wrap');
    const track = document.getElementById('projects-marquee');
    if (!wrap || !track) return;

    // Take over from the CSS marquee animation
    track.style.animation = 'none';
    track.style.willChange = 'transform';

    const COPIES = 3;           // renderProjects writes the project HTML 3 times
    let offset = 0;
    let cycleWidth = 0;         // width of one copy — wrap distance
    let isDragging = false;
    let dragStartX = 0;
    let dragStartOffset = 0;
    let dragMoved = false;
    let isVisible = true;
    let lastTime = 0;
    const SPEED = 50;           // pixels / second — slow continuous drift

    const wrapOffset = () => {
        if (cycleWidth <= 0) return;
        // Keep offset within (-cycleWidth, 0]. With 3 copies present, the visible
        // area is always populated regardless of where we land.
        while (offset > 0) offset -= cycleWidth;
        while (offset <= -cycleWidth) offset += cycleWidth;
    };

    const measure = () => {
        cycleWidth = track.scrollWidth / COPIES;
    };

    // Re-measure when images load (most projects use local files that resolve quickly)
    requestAnimationFrame(measure);
    Array.from(track.querySelectorAll('img')).forEach(img => {
        if (!img.complete) img.addEventListener('load', measure, { once: true });
    });
    window.addEventListener('resize', measure);

    // rAF loop — moves track when not being dragged & section is in viewport
    const tick = (now) => {
        if (!lastTime) lastTime = now;
        const dt = Math.min(0.05, (now - lastTime) / 1000); // cap dt for tab-switch jumps
        lastTime = now;
        if (cycleWidth === 0) measure();
        if (!isDragging && isVisible && cycleWidth > 0) {
            offset -= SPEED * dt;
            wrapOffset();
        }
        track.style.transform = `translate3d(${offset}px, 0, 0)`;
        requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);

    // Pause auto-scroll when off-screen
    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach(e => { isVisible = e.isIntersecting; });
        }, { rootMargin: '100px 0px' });
        io.observe(wrap);
    }

    // Drag handlers — mouse + touch + pen via Pointer Events
    const onPointerDown = (e) => {
        if (e.pointerType === 'mouse' && e.button !== 0) return;
        isDragging = true;
        dragMoved = false;
        dragStartX = e.clientX;
        dragStartOffset = offset;
        wrap.classList.add('is-dragging');
        try { wrap.setPointerCapture(e.pointerId); } catch (_) {}
    };

    const onPointerMove = (e) => {
        if (!isDragging) return;
        const delta = e.clientX - dragStartX;
        if (Math.abs(delta) > 4) dragMoved = true;
        offset = dragStartOffset + delta;
        wrapOffset();
        // Prevent text selection while dragging
        e.preventDefault();
    };

    const endDrag = (e) => {
        if (!isDragging) return;
        isDragging = false;
        wrap.classList.remove('is-dragging');
        try { wrap.releasePointerCapture(e.pointerId); } catch (_) {}
    };

    wrap.addEventListener('pointerdown', onPointerDown);
    wrap.addEventListener('pointermove', onPointerMove);
    wrap.addEventListener('pointerup', endDrag);
    wrap.addEventListener('pointercancel', endDrag);

    // Swallow click events that follow a drag, so card links don't fire after a drag-release
    wrap.addEventListener('click', (e) => {
        if (dragMoved) {
            e.preventDefault();
            e.stopPropagation();
            dragMoved = false;
        }
    }, true);

    // Disable native image drag (ghost image) so it doesn't fight the carousel drag
    track.addEventListener('dragstart', (e) => e.preventDefault());
}

function setFooterYear() {
    const el = document.getElementById('footer-year');
    if (el) el.textContent = new Date().getFullYear();
}

// Pause expensive animations in sections that are off-screen — big perf win
function setupOffscreenPauser() {
    const sections = document.querySelectorAll('.section');
    if (!sections.length || !('IntersectionObserver' in window)) return;
    // Start everything paused; observer flips currently-visible sections back on immediately.
    sections.forEach(s => s.classList.add('off-screen'));
    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            entry.target.classList.toggle('off-screen', !entry.isIntersecting);
        });
    }, { rootMargin: '50px 0px', threshold: 0 });
    sections.forEach(s => io.observe(s));
}

// Initialize AOS animations
function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 80,
            delay: 0,
            mirror: false,
        });
    }
}

// Cosmic Stars — animated star particles (kept lightweight: opacity-only twinkle, no shadow on small stars)
function generateCosmicStars() {
    if (!cosmicStarsContainer) return;
    // Weighted size distribution: mostly tiny/small (cheap), few medium/large/diamond
    const sizeClasses = ['tiny', 'tiny', 'tiny', 'small', 'small', 'small', 'medium', 'large', 'diamond'];
    const STAR_COUNT = 45;
    const frag = document.createDocumentFragment();
    for (let i = 0; i < STAR_COUNT; i++) {
        const star = document.createElement('span');
        const cls = sizeClasses[Math.floor(Math.random() * sizeClasses.length)];
        star.className = `star ${cls}`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        const twinkleDuration = (3 + Math.random() * 5).toFixed(2);
        const delay = (Math.random() * 6).toFixed(2);
        star.style.setProperty('--twinkle', `${twinkleDuration}s`);
        star.style.animationDelay = `${delay}s`;
        frag.appendChild(star);
    }
    cosmicStarsContainer.appendChild(frag);
}

// Sparkles
function generateSparkles() {
    if (!sparkleContainer) return;
    for (let i = 0; i < 8; i++) {
        const spark = document.createElement('span');
        spark.className = 'spark';
        spark.style.left = `${(i * 13) % 100}%`;
        spark.style.top = `${(i * 19) % 100}%`;
        spark.style.animationDelay = `${(i * 0.35).toFixed(2)}s`;
        sparkleContainer.appendChild(spark);
    }
}

// Stats
function renderStats() {
    statsGrid.innerHTML = stats.map(item => `
        <div class="stat-card glass-panel reveal" data-target="${item.value}" data-suffix="${item.suffix}">
            <strong class="stat-value">0</strong>
            <span>${item.label}</span>
        </div>
    `).join('');
}

function startStatsCounter() {
    const statCards = document.querySelectorAll('.stat-card');
    const duration = 2000; // 2 seconds
    const frameRate = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameRate);

    const animate = (card) => {
        const target = parseInt(card.dataset.target);
        const suffix = card.dataset.suffix;
        const valueDisplay = card.querySelector('.stat-value');
        let frame = 0;

        const counter = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            const current = Math.round(target * progress);
            
            valueDisplay.innerText = current + (frame === totalFrames ? suffix : '');

            if (frame === totalFrames) {
                clearInterval(counter);
            }
        }, frameRate);
    };

    // Trigger animation when in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animate(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statCards.forEach(card => observer.observe(card));
}

// Projects
function renderProjects() {
    const projectHTML = projects.map(project => `
        <article class="project-card glass-panel tone-${project.tone}">
            <div class="project-preview project-image-preview">
                <img src="${project.image}" alt="${project.title}" class="project-photo">
                <div class="project-image-badge">
                    <img src="${logoUrl}" alt="Logo" class="logo-img logo-compact">
                </div>
            </div>
            <div class="project-body">
                <div class="preview-top">
                    <h3>${project.title}</h3>
                    <i class="status-dot"></i>
                </div>
                <p>${project.description}</p>
                <div class="preview-metrics">
                    ${project.metrics.map(metric => `<em>${metric}</em>`).join('')}
                </div>
            </div>
        </article>
    `).join('');

    // Triple the content so the track always fills the viewport from any drag/scroll position
    // (with only 2 copies, a viewport wider than one copy could briefly show the track end)
    projectsMarquee.innerHTML = projectHTML + projectHTML + projectHTML;
}

// Tech Stack — orbital layout with logos rotating around the Vizz logo
function renderTechStack() {
    if (!techGrid) return;
    const inner = techStack.slice(0, 8);
    const outer = techStack.slice(8);

    const buildPod = (tech, i, total) => `
        <div class="tech-pod" style="--i: ${i}; --count: ${total};">
            <div class="tech-pod-bubble">
                <div class="tech-pod-inner" title="${tech.name}">
                    <img src="${tech.image}" alt="${tech.name}" loading="lazy">
                </div>
                <span class="tech-pod-label">${tech.name}</span>
            </div>
        </div>
    `;

    const innerPods = inner.map((t, i) => buildPod(t, i, inner.length)).join('');
    const outerPods = outer.map((t, i) => buildPod(t, i, outer.length)).join('');

    techGrid.innerHTML = `
        <div class="tech-stack-layout">
            <aside class="tech-side tech-side-left" data-aos="fade-right" data-aos-delay="150">
                <div class="tech-side-title">Built with depth</div>
                <div class="tech-side-card">
                    <div class="tech-side-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                    </div>
                    <div class="tech-side-body">
                        <strong>Modern Frontend</strong>
                        <span>Reactive UIs · pixel-perfect</span>
                    </div>
                </div>
                <div class="tech-side-card">
                    <div class="tech-side-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="6" rx="2"/><rect x="2" y="13" width="20" height="6" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="16" x2="6.01" y2="16"/></svg>
                    </div>
                    <div class="tech-side-body">
                        <strong>Scalable Backend</strong>
                        <span>Async APIs · event-driven</span>
                    </div>
                </div>
                <div class="tech-side-card">
                    <div class="tech-side-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>
                    </div>
                    <div class="tech-side-body">
                        <strong>AI &amp; ML</strong>
                        <span>LLM agents · vision · prediction</span>
                    </div>
                </div>
                <div class="tech-side-card">
                    <div class="tech-side-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>
                    </div>
                    <div class="tech-side-body">
                        <strong>Cloud Native</strong>
                        <span>Multi-region · auto-scale</span>
                    </div>
                </div>
            </aside>

            <div class="tech-orbit-wrap" data-aos="zoom-in" data-aos-delay="100">
                <svg class="tech-orbit-svg" viewBox="0 0 600 600" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
                <defs>
                    <radialGradient id="techHaloGrad" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stop-color="#7fe0ff" stop-opacity="0.32"/>
                        <stop offset="55%" stop-color="#7fe0ff" stop-opacity="0.08"/>
                        <stop offset="100%" stop-color="#7fe0ff" stop-opacity="0"/>
                    </radialGradient>
                    <linearGradient id="techRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#03A9F4" stop-opacity="0.55"/>
                        <stop offset="50%" stop-color="#7fe0ff" stop-opacity="0.9"/>
                        <stop offset="100%" stop-color="#03A9F4" stop-opacity="0.55"/>
                    </linearGradient>
                </defs>

                <!-- Central halo -->
                <circle cx="300" cy="300" r="290" fill="url(#techHaloGrad)"/>

                <!-- Orbit dash rings -->
                <circle class="tech-ring-dash tech-ring-dash-inner" cx="300" cy="300" r="170" stroke="url(#techRingGrad)" stroke-width="1.5" fill="none" stroke-dasharray="6 12"/>
                <circle class="tech-ring-dash tech-ring-dash-outer" cx="300" cy="300" r="270" stroke="url(#techRingGrad)" stroke-width="1.2" fill="none" stroke-dasharray="4 14"/>

                <!-- Crosshair guides -->
                <line x1="300" y1="20" x2="300" y2="60" stroke="rgba(3,169,244,0.35)" stroke-width="1.2" stroke-dasharray="2 4"/>
                <line x1="300" y1="540" x2="300" y2="580" stroke="rgba(3,169,244,0.35)" stroke-width="1.2" stroke-dasharray="2 4"/>
                <line x1="20" y1="300" x2="60" y2="300" stroke="rgba(3,169,244,0.35)" stroke-width="1.2" stroke-dasharray="2 4"/>
                <line x1="540" y1="300" x2="580" y2="300" stroke="rgba(3,169,244,0.35)" stroke-width="1.2" stroke-dasharray="2 4"/>

                <!-- Decorative twinkles -->
                <circle cx="300" cy="14" r="3" fill="#7fe0ff" class="tech-sparkle"/>
                <circle cx="540" cy="180" r="2.4" fill="#7fe0ff" class="tech-sparkle"/>
                <circle cx="60"  cy="420" r="2.6" fill="#7fe0ff" class="tech-sparkle"/>
                <circle cx="490" cy="490" r="2.2" fill="#7fe0ff" class="tech-sparkle"/>
                <circle cx="120" cy="120" r="2.8" fill="#7fe0ff" class="tech-sparkle"/>
            </svg>

            <div class="tech-orbit">
                <div class="tech-ring tech-ring-inner">${innerPods}</div>
                <div class="tech-ring tech-ring-outer">${outerPods}</div>
                <div class="tech-center">
                    <span class="tech-center-glow" aria-hidden="true"></span>
                    <img src="${logoUrl}" alt="Vizz Web Solutions">
                </div>
            </div>
            </div>

            <aside class="tech-side tech-side-right" data-aos="fade-left" data-aos-delay="150">
                <div class="tech-side-title">Engineered for</div>
                <div class="tech-side-card">
                    <div class="tech-side-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    </div>
                    <div class="tech-side-body">
                        <strong>Type-safe</strong>
                        <span>Strict contracts, zero surprises</span>
                    </div>
                </div>
                <div class="tech-side-card">
                    <div class="tech-side-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    </div>
                    <div class="tech-side-body">
                        <strong>HIPAA-grade</strong>
                        <span>Encryption · audit · compliance</span>
                    </div>
                </div>
                <div class="tech-side-card">
                    <div class="tech-side-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
                    </div>
                    <div class="tech-side-body">
                        <strong>99.99% Uptime</strong>
                        <span>Self-healing infrastructure</span>
                    </div>
                </div>
                <div class="tech-side-card">
                    <div class="tech-side-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
                    </div>
                    <div class="tech-side-body">
                        <strong>Continuous Delivery</strong>
                        <span>Ship daily · zero downtime</span>
                    </div>
                </div>
            </aside>
        </div>
    `;
    if (typeof AOS !== 'undefined') AOS.refreshHard();
}

// Testimonials
function renderTestimonials() {
    const testimonialHTML = testimonials.map(item => `
        <article class="testimonial-card glass-panel">
            <svg class="quote-mark" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9 7H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v2a2 2 0 0 1-2 2H4v2h1a4 4 0 0 0 4-4V7zm12 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v2a2 2 0 0 1-2 2h-1v2h1a4 4 0 0 0 4-4V7z"/></svg>
            <div class="rating">★★★★★</div>
            <p>“${item.text}”</p>
            <div class="testimonial-author">
                <img src="${item.avatar}" alt="${item.name}" class="testimonial-avatar">
                <div>
                    <strong>${item.name}</strong>
                    <span class="testimonial-meta">${item.role} • ${item.company}</span>
                </div>
            </div>
        </article>
    `).join('');

    // Duplicate for infinite marquee
    testimonialsMarquee.innerHTML = testimonialHTML + testimonialHTML;
}

// Scroll Reveal
function setupRevealObserver() {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active'); // CSS should handle the transition
            }
        });
    }, { threshold: 0.1 });

    reveals.forEach(reveal => observer.observe(reveal));
}

// Magnetic Button Effect (Simple version)
document.querySelectorAll('.magnetic').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px) scale(1.02)`;
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
    });
});
