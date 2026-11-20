// Interactive dashboard mockups for the "One platform, four dashboards" section.
// Each tile is a button; clicking it shows that feature's details inside the mockup.
// Keep this in sync with the Flutter app's dashboards (lib/features/*_dashboard, teacher, parent, school).

const ICONS = {
  book: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5Z"/><path d="M4 19a2 2 0 0 1 2-2h13"/>',
  spark: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18"/>',
  check: '<rect x="4" y="4" width="16" height="16" rx="3"/><path d="m8 12 3 3 5-6"/>',
  target: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1"/>',
  calendar: '<rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 10h16M9 3v4M15 3v4"/>',
  flask: '<path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3l-5-9V3"/><path d="M7.5 15h9"/>',
  clipboard: '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4h6v3H9zM9 12h6M9 16h4"/>',
  star: '<path d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.4 6.8 19.1l1-5.8L3.5 9.2l5.9-.9L12 3Z"/>',
  quiz: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6V14M12 17h.01"/>',
  sheet: '<path d="M6 3h9l4 4v14H6z"/><path d="M14 3v5h5M9 13h7M9 17h5"/>',
  exam: '<path d="M4 4h16v16H4z"/><path d="M8 8h8M8 12h8M8 16h4"/>',
  monitor: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>',
  pen: '<path d="M14 4l6 6-9 9H5v-6l9-9Z"/><path d="M12 6l6 6"/>',
  brain: '<path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 3 3h0V4Z"/><path d="M15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-3 3V4Z"/>',
  chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  chat: '<path d="M4 5h16v11H9l-5 4V5Z"/><path d="M8 9h8M8 12h5"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  heart: '<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z"/>',
  timeline: '<path d="M12 3v18"/><circle cx="12" cy="7" r="2"/><circle cx="12" cy="17" r="2"/><path d="M14 7h5M5 17h5"/>',
  trophy: '<path d="M8 4h8v5a4 4 0 0 1-8 0V4Z"/><path d="M8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M8 21h8M9 17h6"/>',
  bulb: '<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3Z"/>',
  video: '<rect x="3" y="6" width="13" height="12" rx="2"/><path d="m16 10 5-3v10l-5-3"/>',
  school: '<path d="M3 21h18M5 21V10l7-5 7 5v11M9 21v-6h6v6"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6.5 6.5 0 0 1 3.5 6"/>',
  add: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M19 8v6M16 11h6"/>',
  lock: '<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 13 9 5 9-5"/>',
  shield: '<path d="M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6l-8-3Z"/><path d="m9 12 2 2 4-4"/>',
};

const DASHBOARDS = {
  student: {
    title: 'Student Dashboard',
    hello: 'Hi Aarav 👋 Ready to learn?',
    stats: [['Level', '7'], ['XP', '1,240'], ['Streak', '🔥 12 days']],
    tiles: [
      ['book', 'Continue Learning', 'Pick up exactly where you left off — every lesson organised by board, class, subject and chapter.', ['CBSE & Karnataka Board', 'English & Kannada medium', 'PDF notes + video lessons']],
      ['spark', 'JMR AI Coach', 'Ask any doubt by typing or speaking and get a patient, step-by-step answer based on your own lesson.', ['Voice & text', 'Lesson-aware answers', 'Available 24/7']],
      ['clipboard', 'Assigned Learning', 'Lessons, worksheets and exams your teacher assigned — all in one list with due dates.', ['Worksheets', 'School exams', 'Teacher feedback']],
      ['check', 'Self Test', 'Practise on your own with AI-generated tests, full mock exams and year-wise previous papers.', ['AI tests', 'Mock exams', 'Previous year papers']],
      ['target', 'Weak Topics', 'JMR AI spots the topics you find hard and builds recovery practice until you master them.', ['Auto-detected', 'Recovery tests', 'AI validation']],
      ['calendar', 'Study Plan', 'A personal 30–45 day plan that adapts every time you practise.', ['Daily tasks', 'Adaptive revision', 'Exam countdown']],
      ['flask', 'Interactive Labs', 'Hands-on Physics, Chemistry, Maths and Biology simulations — with AR on Android.', ['PCMB simulations', 'AR experiences', 'Lab quizzes']],
      ['chart', 'My Performance', 'Charts of your progress, learning health and results across every subject.', ['Learning health', 'Unified results', 'Exam memory']],
      ['star', 'Badges & XP', 'Earn XP, level up, keep your streak alive and collect achievement badges.', ['Daily challenge', 'Streaks', 'Badges']],
    ],
  },
  teacher: {
    title: 'Teacher Dashboard',
    hello: 'Good morning, Ms. Kavya',
    stats: [['Classes', '4'], ['Students', '126'], ['To review', '12']],
    tiles: [
      ['quiz', 'Quiz Generator', 'Create a quiz for any lesson in seconds with AI, preview it, then assign it to a class.', ['AI-generated', 'Editable', 'One-click assign']],
      ['sheet', 'Worksheets', 'Generate printable or digital worksheets matched to the syllabus and difficulty level.', ['By lesson', 'By difficulty', 'PDF export']],
      ['exam', 'School Exam Builder', 'Build school assessments that follow your board\'s paper pattern and marks blueprint.', ['Board blueprints', 'Mark-wise questions', 'Previous-paper style']],
      ['monitor', 'Assignment Monitor', 'See who has started, finished or missed each assignment — at a glance.', ['Live status', 'Reminders', 'Per-student view']],
      ['pen', 'Descriptive Evaluation', 'Review students\' written answers with AI help, give marks and feedback, then release results.', ['Handwritten answers', 'AI-assisted marking', 'Release control']],
      ['brain', 'Class AI Insights', 'Find the weak topics across your class and track each student\'s recovery.', ['Class weak topics', 'Recovery tracking', 'Risk alerts']],
      ['calendar', 'Study Plan Generator', 'Create and assign 30–45 day study plans for individual students or the whole class.', ['Plan', 'Assign', 'Track']],
      ['chart', 'Reports Studio', 'Generate clear progress reports and share them with parents.', ['AI reports', 'Shareable', 'Parent-ready']],
      ['chat', 'Parent Messages', 'Send updates to parents and keep a full message history.', ['AI drafts', 'History', 'Per-child']],
    ],
  },
  parent: {
    title: 'Parent Dashboard',
    hello: 'Aarav · Class 10 · CBSE',
    stats: [['Health', 'Good'], ['This week', '+8%'], ['Tasks done', '14/16']],
    tiles: [
      ['user', 'Child Overview', 'A simple snapshot of your child\'s learning, today and this week.', ['Daily plan', 'Recent activity', 'Upcoming work']],
      ['heart', 'Learning Health', 'One easy score that shows whether learning is on track — and why.', ['Overall health', 'Subject view', 'Trends']],
      ['spark', 'AI Weekly Summary', 'Every week JMR AI explains your child\'s progress in plain language.', ['Plain language', 'Strengths', 'Areas to improve']],
      ['timeline', 'Progress Timeline', 'Dated learning updates so you can see how your child is growing over time.', ['Dated updates', 'Milestones', 'Results']],
      ['trophy', 'Unified Results', 'All school tests, self tests and final scores in one report.', ['All results', 'Final score report', 'Subject-wise']],
      ['chat', 'Teacher Reports', 'Reports and messages shared by your child\'s teachers.', ['Shared reports', 'Teacher messages', 'Feedback']],
      ['target', 'Recovery Journey', 'See which topics your child is recovering from and how it\'s going.', ['Weak topics', 'Recovery progress', 'AI validation']],
      ['bulb', 'Support Tips', 'Practical, AI-generated tips on how you can help at home.', ['Weekly tips', 'Simple actions', 'Remedial packages']],
      ['shield', 'Teacher Connect', 'Approve tuition and live classes for your child — nothing happens without your consent.', ['Parent consent', 'Verified teachers', 'Live classes']],
    ],
  },
  school: {
    title: 'School Workspace',
    hello: 'Admin · Your school',
    stats: [['Teachers', '18'], ['Students', '640'], ['Boards', '2']],
    tiles: [
      ['layers', 'Academic Scope', 'Set up the boards, classes, subjects and mediums your school teaches.', ['Board', 'Class & subject', 'Medium']],
      ['add', 'Teacher Onboarding', 'Invite teachers and assign them to classes and subjects.', ['Invites', 'Class mapping', 'Approval']],
      ['users', 'Student Enrolment', 'Add students and link them to their classes and parents.', ['Bulk add', 'Class links', 'Parent links']],
      ['monitor', 'Teacher Workspace', 'A shared workspace for teachers to plan, assign and evaluate.', ['Shared resources', 'Assignments', 'Evaluation']],
      ['book', 'Student Workspace', 'Every student gets lessons and work matched to their class and medium.', ['Matched content', 'Assignments', 'Results']],
      ['lock', 'Access & Roles', 'Control who can see and do what across the school.', ['Role-based', 'Secure', 'Lifecycle']],
      ['exam', 'School Exams', 'Run school-wide assessments with board-aligned papers.', ['Blueprints', 'Scheduling', 'Results']],
      ['chart', 'Results & Reports', 'School-wide performance and reports for leadership and parents.', ['Class reports', 'Trends', 'Exports']],
      ['school', 'Curriculum', 'Keep your school\'s curriculum and content organised in one place.', ['Syllabus', 'Content', 'Publishing']],
    ],
  },
};

function icon(name) {
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[name]}</svg>`;
}

function renderDashboard(el) {
  const d = DASHBOARDS[el.dataset.dash];
  if (!d) return;

  el.innerHTML = `
    <div class="mock-bar"><span></span><span></span><span></span></div>
    <div class="mock-head">
      <div>
        <strong>${d.title}</strong>
        <small>${d.hello}</small>
      </div>
      <img src="assets/logo.png" alt="" class="mock-logo">
    </div>
    <div class="mock-stats">
      ${d.stats.map(([k, v]) => `<div><small>${k}</small><b>${v}</b></div>`).join('')}
    </div>
    <div class="mock-tiles" role="group" aria-label="${d.title} features">
      ${d.tiles.map(([ic, label], i) => `
        <button type="button" class="tile" data-i="${i}" aria-pressed="false">
          <span class="tile-icon">${icon(ic)}</span>
          <span class="tile-label">${label}</span>
        </button>`).join('')}
    </div>
    <div class="mock-detail" aria-live="polite"></div>
    <p class="mock-hint">Tap any tile to explore</p>
  `;

  const detail = el.querySelector('.mock-detail');
  const buttons = [...el.querySelectorAll('.tile')];

  function show(i) {
    const [ic, label, desc, points] = d.tiles[i];
    buttons.forEach((b, j) => b.setAttribute('aria-pressed', String(i === j)));
    detail.classList.remove('show');
    void detail.offsetWidth; // restart the fade-in animation
    detail.innerHTML = `
      <div class="detail-head">
        <span class="tile-icon">${icon(ic)}</span>
        <h4>${label}</h4>
      </div>
      <p>${desc}</p>
      <ul>${points.map(p => `<li>${p}</li>`).join('')}</ul>`;
    detail.classList.add('show');
  }

  buttons.forEach((b, i) => b.addEventListener('click', () => show(i)));
  show(0);
}

document.querySelectorAll('.mock[data-dash]').forEach(renderDashboard);
