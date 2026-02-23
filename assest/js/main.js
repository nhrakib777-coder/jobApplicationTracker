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
  let filtered = jobs.filter((job) => {
    if (currentTab === 'all') return true;
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
