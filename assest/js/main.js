// Jobs Data Array
const jobs = [
  {
    id: 1,
    company: 'Google',
    Position: 'Frontend Developer',
    location: 'Tokyo',
    type: 'Full-time',
    salary: '$6000',
    description: 'Develop scalable UI using React',
  },
  {
    id: 2,
    company: 'Microsoft',
    Position: 'Backend Engineer',
    location: 'Osaka',
    type: 'Remote',
    salary: '$5500',
    description: 'Build APIs and cloud services.',
  },
  {
    id: 3,
    company: 'Amazon',
    position: 'Cloud Engineer',
    location: 'Tokyo',
    type: 'Full-time',
    salary: '$7000',
    description: 'Maintain AWS infrastructure.',
  },
  {
    id: 4,
    company: 'Tesla',
    position: 'Software Engineer',
    location: 'Remote',
    type: 'Full-time',
    salary: '$6500',
    description: 'Develop automotive software systems.',
  },
  {
    id: 5,
    company: 'Meta',
    position: 'React Developer',
    location: 'Singapore',
    type: 'Remote',
    salary: '$5800',
    description: 'Create social media UI features.',
  },
  {
    id: 6,
    company: 'Samsung',
    position: 'Embedded Engineer',
    location: 'Seoul',
    type: 'Full-time',
    salary: '$6200',
    description: 'Develop IoT firmware systems.',
  },
  {
    id: 7,
    company: 'Alibaba',
    position: 'Data Analyst',
    location: 'Hangzhou',
    type: 'Full-time',
    salary: '$5000',
    description: 'Analyze business data insights.',
  },
  {
    id: 8,
    company: 'Apple',
    position: 'iOS Developer',
    location: 'California',
    type: 'Full-time',
    salary: '$7200',
    description: 'Develop iOS applications.',
  },
  {
  id: 9,
  company: 'Netflix',
  position: 'UI/UX Designer',
  location: 'Los Angeles',
  type: 'Full-time',
  salary: '$6800',
  description: 'Design user-friendly streaming interfaces.',
},
{
  id: 10,
  company: 'Intel',
  position: 'Hardware Engineer',
  location: 'California',
  type: 'Full-time',
  salary: '$7500',
  description: 'Develop next-gen semiconductor hardware.',
},
{
  id: 11,
  company: 'IBM',
  position: 'AI Engineer',
  location: 'New York',
  type: 'Remote',
  salary: '$8200',
  description: 'Build machine learning models and AI solutions.',
},
{
  id: 12,
  company: 'Oracle',
  position: 'Database Administrator',
  location: 'Texas',
  type: 'Full-time',
  salary: '$6300',
  description: 'Manage enterprise database systems.',
},
{
  id: 13,
  company: 'Spotify',
  position: 'Mobile App Developer',
  location: 'Stockholm',
  type: 'Remote',
  salary: '$7000',
  description: 'Develop music streaming mobile applications.',
},
{
  id: 14,
  company: 'Adobe',
  position: 'Software Tester',
  location: 'San Jose',
  type: 'Full-time',
  salary: '$5600',
  description: 'Test and ensure software quality and performance.',
},
{
  id: 15,
  company: 'Uber',
  position: 'Full Stack Developer',
  location: 'San Francisco',
  type: 'Full-time',
  salary: '$7800',
  description: 'Develop web and backend systems for ride services.',
},
{
  id: 16,
  company: 'TikTok',
  position: 'Content Moderation Engineer',
  location: 'Singapore',
  type: 'Remote',
  salary: '$6100',
  description: 'Build tools to detect harmful content automatically.',
},
{
  id: 17,
  company: 'SpaceX',
  position: 'Aerospace Software Engineer',
  location: 'Florida',
  type: 'Full-time',
  salary: '$9000',
  description: 'Develop flight control software for rockets.',
},
{
  id: 18,
  company: 'Dell',
  position: 'System Engineer',
  location: 'India',
  type: 'Full-time',
  salary: '$5800',
  description: 'Maintain enterprise IT infrastructure systems.',
},
];

// job status
let jobStatus = {};
let currentTab = 'all';

// get HTML Element by id
const container = document.getElementById('jobsContainer');
const emptyState = document.getElementById('emptyState');
const totalCount = document.getElementById('totalCount');
const interviewCount = document.getElementById('interviewCount');
const rejectedCount = document.getElementById('rejectedCount');
const tabCount = document.getElementById('tabCount');

// Render function
function renderJobs() {
  container.innerHTML = '';

  // filter the jobs
  // let filtered = jobs.filter((job) => {
  //   if (currentTab === 'all') return true;
  //   return jobStatus[job.id] === currentTab;
  // });
  let filtered = jobs.filter((job) => {

  // ALL TAB → show only jobs that have NO status
  if (currentTab === 'all') {
    return !jobStatus[job.id];
  }

  // Interview or Rejected tab
  return jobStatus[job.id] === currentTab;
});

  // empty state to show no jobs
  emptyState.classList.toggle('hidden', filtered.length !== 0);

  // loop for each filtered job and create a card
  filtered.forEach((job) => {
    const card = document.createElement('div');
    card.className = 'card bg-base-100 shadow p-4';

    card.innerHTML = `
    <div class="relative card bg-base-100 shadow p-4 border space-y-2">

  <!-- Delete Button Top Right -->
  <button class="btn btn-md btn-circle   absolute top-5 right-3 delete"><i class="fa-regular fa-trash-can text-2xl text-red-600"></i></button>

  <!-- Company Name -->
  <h3 class="text-lg font-bold text-[#002C5C]">${job.company}</h3>

  <!-- Job Info -->
  <p class="text-sm"><b>Position:</b> ${job.position}</p>
  <p class="text-sm"><b>Location:</b> ${job.location}</p>
  <p class="text-sm"><b>Type:</b> ${job.type}</p>
  <p class="text-sm"><b>Salary:</b> ${job.salary}</p>
  <p class="text-sm bg-base-200 w-[100px] p-2 rounded-md text-[#002C5C] font-normal"><b>Not Applied</b> </p>
  <p class="text-xs mt-2 text-gray-500">${job.description}</p>

  <!-- Buttons -->
  <div class="mt-3 flex gap-2">
    <button class="btn btn-outline btn-success btn-sm interview">Interview</button>
    <button class="btn btn-outline btn-error btn-sm rejected">Rejected</button>
  </div>

</div>
    `;

    // event listener for intervew button
    card.querySelector('.interview').onclick = () => {
      jobStatus[job.id] = 'interview';
      updateUI();
    };

    // event listener for rejected button
    card.querySelector('.rejected').onclick = () => {
      jobStatus[job.id] = 'rejected';
      updateUI();
    };

    // event listener for delete button
    card.querySelector('.delete').onclick = () => {
      const index = jobs.findIndex((j) => j.id === job.id);
      jobs.splice(index, 1);
      delete jobStatus[job.id];
      updateUI();
    };

    // add new created card
    container.appendChild(card);
  });

  // display the number of jobs
  tabCount.innerText = filtered.length + ' jobs';
  updateDashboard(); //update the dashboard
}

// function for update dashboard
function updateDashboard() {
  totalCount.innerText = jobs.length;
  interviewCount.innerText = Object.values(jobStatus).filter(
    (s) => s === 'interview'
  ).length;
  rejectedCount.innerText = Object.values(jobStatus).filter(
    (s) => s === 'rejected'
  ).length;
}

// function to update UI
function updateUI() {
  renderJobs();
}

// Tabs js
document.querySelectorAll('.tab').forEach((tab) => {
  tab.onclick = () => {
    document
      .querySelectorAll('.tab')
      .forEach((t) => t.classList.remove('tab-active'));
    tab.classList.add('tab-active');

    currentTab = tab.dataset.tab;
    renderJobs();
  };
});

renderJobs();
