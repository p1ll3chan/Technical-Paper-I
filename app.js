// Research data from the application
const researchData = {
  carbonNanomaterials: [
    {
      name: "Carbon Nanotubes (CNTs)",
      icon: "CNT",
      description: "Single-walled and multi-walled carbon nanotubes offer exceptional mechanical and electrical properties for biorobotics applications.",
      properties: {
        "Structure": "1D cylindrical carbon structures",
        "Conductivity": "Excellent electrical conductivity",
        "Strength": "100x stronger than steel",
        "Diameter": "0.4-2 nm (SWCNT), 2-100 nm (MWCNT)"
      },
      applications: ["Neural interfaces", "Drug delivery", "Biosensors"]
    },
    {
      name: "Graphene & Graphene Oxide",
      icon: "GO",
      description: "Two-dimensional carbon structures providing excellent biocompatibility and mechanical flexibility for soft robotics.",
      properties: {
        "Structure": "2D monolayer of carbon atoms",
        "Conductivity": "Superior electrical conductivity",
        "Flexibility": "Highly flexible and transparent",
        "Thickness": "Single atomic layer (~0.34 nm)"
      },
      applications: ["Tissue scaffolds", "Flexible electronics", "Biosensors"]
    },
    {
      name: "Carbon Quantum Dots (CQDs)",
      icon: "CQD",
      description: "Ultra-small carbon nanoparticles with unique optical properties for imaging and therapeutic applications.",
      properties: {
        "Structure": "0D spherical nanoparticles",
        "Size": "2-10 nm diameter",
        "Fluorescence": "Tunable photoluminescence",
        "Biocompatibility": "Low toxicity, excellent biocompatibility"
      },
      applications: ["Bioimaging", "Drug tracking", "Photodynamic therapy"]
    },
    {
      name: "Fullerenes",
      icon: "C60",
      description: "Soccer ball-shaped carbon molecules capable of encapsulating therapeutic agents for targeted delivery.",
      properties: {
        "Structure": "0D cage-like carbon structures",
        "Size": "0.7-1.0 nm diameter",
        "Encapsulation": "Hollow interior for drug loading",
        "Stability": "High chemical stability"
      },
      applications: ["Drug delivery", "Antioxidant therapy", "Photodynamic therapy"]
    },
    {
      name: "Nanodiamonds",
      icon: "ND",
      description: "Diamond nanoparticles offering superior biocompatibility and stable platforms for biomedical applications.",
      properties: {
        "Structure": "0D crystalline carbon",
        "Size": "2-8 nm diameter",
        "Biocompatibility": "Excellent biocompatibility",
        "Surface Chemistry": "Easy functionalization"
      },
      applications: ["Drug delivery", "Bioimaging", "Dental applications"]
    }
  ],
  
  bioroboticsApplications: [
    {
      id: "neural",
      category: "Neural Interfaces",
      description: "Carbon nanomaterial-enhanced brain-computer interfaces for treating neurological disorders and enabling direct neural control of robotic systems.",
      applications: ["Deep brain stimulation", "Neural prosthetics", "Brain signal recording"],
      advantages: ["High conductivity", "Biocompatibility", "Long-term stability"],
      clinicalPotential: "High - ongoing clinical trials"
    },
    {
      id: "drug",
      category: "Drug Delivery Systems", 
      description: "Targeted therapeutic delivery using functionalized carbon nanomaterials with precise control over drug release and distribution.",
      applications: ["Cancer therapy", "Gene delivery", "Controlled release"],
      advantages: ["Precise targeting", "Reduced side effects", "Enhanced efficacy"],
      clinicalPotential: "Very High - multiple FDA approvals expected"
    },
    {
      id: "tissue",
      category: "Tissue Engineering",
      description: "Carbon nanomaterial scaffolds for regenerative medicine applications, providing structural support and electrical stimulation for tissue growth.",
      applications: ["Bone regeneration", "Neural tissue repair", "Cardiovascular grafts"],
      advantages: ["Mechanical strength", "Electrical conductivity", "Cell adhesion"],
      clinicalPotential: "Moderate - preclinical development"
    },
    {
      id: "sensors",
      category: "Biosensors & Monitoring",
      description: "Real-time biological monitoring using carbon nanomaterial sensors for continuous health assessment and disease detection.",
      applications: ["Glucose monitoring", "Cancer biomarkers", "Neural activity"],
      advantages: ["High sensitivity", "Real-time response", "Miniaturization"],
      clinicalPotential: "High - commercial products available"
    },
    {
      id: "surgical",
      category: "Surgical Microrobots",
      description: "Microscopic robots for minimally invasive surgical procedures, capable of precise manipulation at the cellular level.",
      applications: ["Targeted surgery", "Clot removal", "Tissue repair"],
      advantages: ["Precise control", "Minimal invasiveness", "Reduced recovery time"],
      clinicalPotential: "Future - early research stage"
    }
  ],
  
  methodology: {
    synthesis: [
      "Chemical Vapor Deposition (CVD)",
      "Arc Discharge",
      "Hydrothermal Synthesis", 
      "Chemical Functionalization"
    ],
    characterization: [
      "Transmission Electron Microscopy (TEM)",
      "Raman Spectroscopy",
      "X-ray Photoelectron Spectroscopy (XPS)",
      "Atomic Force Microscopy (AFM)"
    ],
    biological: [
      "Cytotoxicity Assays (MTT, LDH)",
      "Cell Adhesion Studies",
      "Biocompatibility Testing",
      "Functional Analysis"
    ]
  },
  
  keyFindings: [
    "85% reduction in cytotoxicity through proper functionalization",
    "3-fold increase in cell growth on graphene substrates",
    "10⁶-fold improvement in scaffold conductivity",
    "50% increase in tensile strength of composite materials",
    "Up to 90% drug encapsulation efficiency with CNTs"
  ],
  
  futureDirections: [
    {
      title: "AI-Integrated Smart Materials",
      description: "Development of autonomous systems that can adapt and respond to biological environments in real-time."
    },
    {
      title: "Multi-functional Theranostic Platforms",
      description: "Combined therapy and diagnostics platforms for personalized treatment approaches."
    },
    {
      title: "Self-Assembling Systems",
      description: "Nanomaterial systems capable of autonomous assembly and reconfiguration for adaptive applications."
    },
    {
      title: "Personalized Medicine",
      description: "Patient-specific designs based on individual genetic and physiological profiles."
    }
  ],
  
  challenges: [
    {
      category: "Technical",
      issues: ["Material consistency", "Quality control", "Characterization standards"]
    },
    {
      category: "Biological", 
      issues: ["Protein corona interactions", "Long-term fate", "Immune response"]
    },
    {
      category: "Regulatory",
      issues: ["Safety assessment", "Manufacturing standards", "International harmonization"]
    }
  ]
};

// Application state
let currentAppTab = 'neural';

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
  initializeNavigation();
  populateMaterials();
  populateApplications();
  populateMethodology();
  populateResults();
  populateFutureDirections();
  createPerformanceChart();
  addScrollAnimations();
});

// Navigation functionality - FIXED
function initializeNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  
  // Smooth scrolling for navigation links - FIXED to account for fixed navbar
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = targetSection.offsetTop - navbarHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // Update active nav link immediately
        navLinks.forEach(nl => nl.classList.remove('active'));
        this.classList.add('active');
      }
    });
  });
  
  // Active link highlighting on scroll
  const observerOptions = {
    rootMargin: '-100px 0px -50% 0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);
  
  sections.forEach(section => {
    observer.observe(section);
  });
}

// Populate Materials Section - FIXED expandability
function populateMaterials() {
  const materialsGrid = document.getElementById('materialsGrid');
  
  researchData.carbonNanomaterials.forEach(material => {
    const materialCard = document.createElement('div');
    materialCard.className = 'material-card';
    materialCard.innerHTML = `
      <div class="material-header">
        <div class="material-icon">${material.icon}</div>
        <h3>${material.name}</h3>
      </div>
      <p class="material-description">${material.description}</p>
      <div class="applications-list">
        ${material.applications.map(app => `<span class="app-tag">${app}</span>`).join('')}
      </div>
      <div class="material-properties">
        <div style="margin-bottom: 12px; font-weight: 500; color: var(--color-primary);">Detailed Properties:</div>
        ${Object.entries(material.properties).map(([key, value]) => `
          <div class="property-item">
            <span class="property-label">${key}:</span>
            <span class="property-value">${value}</span>
          </div>
        `).join('')}
      </div>
    `;
    
    // Add click event for expanding properties - FIXED
    materialCard.addEventListener('click', function(e) {
      e.stopPropagation();
      this.classList.toggle('expanded');
    });
    
    // Add visual feedback
    materialCard.style.cursor = 'pointer';
    
    materialsGrid.appendChild(materialCard);
  });
}

// Populate Applications Section - FIXED tab switching
function populateApplications() {
  const appTabs = document.getElementById('appTabs');
  const appContent = document.getElementById('appContent');
  
  // Create tabs
  researchData.bioroboticsApplications.forEach((app, index) => {
    const tab = document.createElement('button');
    tab.className = `app-tab ${index === 0 ? 'active' : ''}`;
    tab.textContent = app.category;
    tab.dataset.appId = app.id;
    
    // FIXED - properly bind the app.id to the event listener
    tab.addEventListener('click', function(e) {
      e.preventDefault();
      showApplication(this.dataset.appId);
    });
    
    appTabs.appendChild(tab);
  });
  
  // Show first application by default
  showApplication('neural');
}

// FIXED - Application switching function
function showApplication(appId) {
  const app = researchData.bioroboticsApplications.find(a => a.id === appId);
  const appContent = document.getElementById('appContent');
  const tabs = document.querySelectorAll('.app-tab');
  
  if (!app) {
    console.error(`Application with id ${appId} not found`);
    return;
  }
  
  // Update active tab
  tabs.forEach(tab => {
    tab.classList.remove('active');
    if (tab.dataset.appId === appId) {
      tab.classList.add('active');
    }
  });
  
  // Update content with proper transition
  appContent.style.opacity = '0.7';
  
  setTimeout(() => {
    appContent.innerHTML = `
      <div class="app-category">
        <h3>${app.category}</h3>
        <p class="app-description">${app.description}</p>
        <div class="app-details">
          <div class="detail-group">
            <h4>Applications</h4>
            <ul class="detail-list">
              ${app.applications.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>
          <div class="detail-group">
            <h4>Key Advantages</h4>
            <ul class="detail-list">
              ${app.advantages.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>
        </div>
        <div class="clinical-potential">
          <strong>Clinical Potential:</strong> ${app.clinicalPotential}
        </div>
      </div>
    `;
    appContent.style.opacity = '1';
  }, 150);
  
  currentAppTab = appId;
}

// Populate Methodology Section
function populateMethodology() {
  const synthesisMethods = document.getElementById('synthesisMethods');
  const characterizationMethods = document.getElementById('characterizationMethods');
  const biologicalMethods = document.getElementById('biologicalMethods');
  
  researchData.methodology.synthesis.forEach(method => {
    const li = document.createElement('li');
    li.textContent = method;
    synthesisMethods.appendChild(li);
  });
  
  researchData.methodology.characterization.forEach(method => {
    const li = document.createElement('li');
    li.textContent = method;
    characterizationMethods.appendChild(li);
  });
  
  researchData.methodology.biological.forEach(method => {
    const li = document.createElement('li');
    li.textContent = method;
    biologicalMethods.appendChild(li);
  });
}

// Populate Results Section
function populateResults() {
  const findingsGrid = document.getElementById('findingsGrid');
  
  researchData.keyFindings.forEach(finding => {
    const findingCard = document.createElement('div');
    findingCard.className = 'finding-card';
    findingCard.innerHTML = `<p class="finding-text">${finding}</p>`;
    findingsGrid.appendChild(findingCard);
  });
}

// Populate Future Directions Section
function populateFutureDirections() {
  const futureDirections = document.getElementById('futureDirections');
  const challengesGrid = document.getElementById('challengesGrid');
  
  // Future directions
  researchData.futureDirections.forEach(direction => {
    const futureItem = document.createElement('div');
    futureItem.className = 'future-item';
    futureItem.innerHTML = `
      <h4>${direction.title}</h4>
      <p>${direction.description}</p>
    `;
    futureDirections.appendChild(futureItem);
  });
  
  // Challenges
  researchData.challenges.forEach(challenge => {
    const challengeCard = document.createElement('div');
    challengeCard.className = 'challenge-card';
    challengeCard.innerHTML = `
      <h4>${challenge.category}</h4>
      <ul class="challenge-issues">
        ${challenge.issues.map(issue => `<li>${issue}</li>`).join('')}
      </ul>
    `;
    challengesGrid.appendChild(challengeCard);
  });
}

// Create Performance Chart
function createPerformanceChart() {
  const ctx = document.getElementById('performanceChart');
  if (!ctx) return;
  
  const chartData = {
    labels: ['Cytotoxicity Reduction', 'Cell Growth Increase', 'Conductivity Improvement', 'Strength Enhancement', 'Drug Encapsulation'],
    datasets: [{
      label: 'Performance Metrics',
      data: [85, 300, 1000000, 50, 90],
      backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F'],
      borderColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F'],
      borderWidth: 2
    }]
  };
  
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: '#1e293b',
        titleColor: '#f8fafc',
        bodyColor: '#cbd5e1',
        borderColor: '#334155',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: true,
        callbacks: {
          label: function(context) {
            const labels = [
              'Cytotoxicity: 85% reduction',
              'Cell Growth: 3x increase', 
              'Conductivity: 10⁶x improvement',
              'Strength: 50% increase',
              'Drug Efficiency: 90% encapsulation'
            ];
            return labels[context.dataIndex];
          }
        }
      }
    },
    scales: {
      y: {
        type: 'logarithmic',
        beginAtZero: true,
        grid: {
          color: 'rgba(203, 213, 225, 0.3)'
        },
        ticks: {
          color: '#64748b',
          callback: function(value) {
            if (value === 10 || value === 100 || value === 1000 || value === 10000 || value === 100000 || value === 1000000) {
              return value.toLocaleString();
            }
            return '';
          }
        }
      },
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: '#64748b',
          maxRotation: 45
        }
      }
    }
  };
  
  new Chart(ctx, {
    type: 'bar',
    data: chartData,
    options: chartOptions
  });
}

// Add scroll animations with improved timing
function addScrollAnimations() {
  const animateElements = document.querySelectorAll('.material-card, .pillar-card, .future-item, .finding-card');
  
  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  animateElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(el);
  });
}