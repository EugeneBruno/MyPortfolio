window.onload = function () {
  setTimeout(() => {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('profiles').classList.remove('hidden');
  }, 3500); }


function enterSite(role) {
  document.getElementById('profiles').style.display = 'none';
  document.getElementById('main').classList.remove('hidden');

  const heading = document.getElementById('viewer-heading');
  const message = document.getElementById('viewer-message');
  document.getElementById('viewer-intro').classList.remove('hidden');

  const contentMap = {
    recruiter: {
      title: "Welcome, Recruiter 👔",
      message: "Here you'll find my skills, resume, and top portfolio pieces.",
    },
    supervisor: {
      title: "Hello, Supervisor 📊",
      message: "This view highlights my leadership, accountability, and technical depth.",
    },
    colleague: {
      title: "Hey, Colleague 🤝",
      message: "Check out collaborative projects and open-source contributions.",
    },
    acquaintance: {
      title: "Nice to See You! 👋",
      message: "Here's a quick look at who I am and what I do.",
    },
    other: {
      title: "Welcome to MyFlixfolio 🌐",
      message: "Browse around and explore my creative and professional work.",
    }
  };

  if (contentMap[role]) {
    heading.textContent = contentMap[role].title;
    message.textContent = contentMap[role].message;
  }
}
