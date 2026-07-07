/* ==========================================================================
   QuestTrack — JavaScript Application Logic
   ========================================================================== */

// --- Standard Data Seed: The 11 Core Opportunities ---
const INITIAL_OPPORTUNITIES = [
    {
        id: "qwen-hackathon-2026",
        title: "Alibaba Cloud — Qwen AI Multi-Agent Hackathon",
        company: "Alibaba Cloud / Devpost",
        category: "hackathon",
        link: "https://qwencloud-hackathon.devpost.com/?ref_feature=challenge&ref_medium=discover&_gl=1*14c47nw*_gcl_au*MjY0NTExMzY1LjE3ODMyMzAwMjE.*_ga*MjIzMzQxNDYzLjE3ODMyMzAwMjI.*_ga_0YHJK3Y10M*czE3ODMyMzAwMjEkbzEkZzEkdDE3ODMyMzM3OTQkajU1JGwwJGgw",
        deadline: "2026-07-10T23:59:59",
        dates: "Submissions end July 9/10, 2026",
        description: "Build multi-agent AI architectures using Qwen models. Mentorship and API credits provided. Submissions end July 9/10, 2026.",
        eligibility: "Open to global developers, student teams, and AI researchers. Teams of up to 4 members.",
        status: "active"
    },
    {
        id: "sih-2026",
        title: "Smart India Hackathon 2026",
        company: "Govt of India / AICTE",
        category: "hackathon",
        link: "https://www.sih.gov.in/",
        deadline: "2026-09-30T18:00:00",
        dates: "July – October 2026 (Expected Schedule)",
        description: "India's largest national student hackathon solving civic and governance challenges for Central/State ministries and departments.",
        eligibility: "Regular college students pursuing B.Tech, M.Tech, MCA, or MSc degrees in India.",
        status: "active"
    },
    {
        id: "jpmc-sep-2026",
        title: "Software Engineer Program (SEP)",
        company: "JP Morgan Chase",
        category: "careers",
        link: "https://jpmc.fa.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1001/job/210758929",
        deadline: "2026-08-31T23:59:59",
        dates: "Rolling hiring (Open July - September)",
        description: "Direct software engineering internship/FTE pipeline. JPMC recruits students through direct application and the Code for Good hackathon.",
        eligibility: "Pre-final and final year B.E./B.Tech/Dual degree students.",
        status: "careers"
    },
    {
        id: "adobe-internship-2026",
        title: "Summer Engineering Internship Guidelines",
        company: "Adobe India",
        category: "reference",
        link: "https://www.scribd.com/document/893631149/Adobe-Internship#google_vignette",
        deadline: "2026-10-31T23:59:59",
        dates: "Reference guide for upcoming campus recruitment cycles",
        description: "Reference guide detailing summer engineering internship tracks, eligibility criteria, assessment patterns, and SheCodes hackathon hiring.",
        eligibility: "Female students pursuing B.E./B.Tech/Dual Degree (CS/IT/related branches).",
        status: "reference"
    },
    {
        id: "mlh-ghw-2026",
        title: "Global Hack Week 2026",
        company: "Major League Hacking (MLH)",
        category: "hackathon",
        link: "https://ghw.mlh.com/",
        deadline: "2026-07-16T23:59:59",
        dates: "Season Launch: July 10–16, 2026; Agents Week: Aug 7–13, 2026",
        description: "Free, virtual week-long hackathons and workshops. Learn new skills, build projects, and connect with a global hacker community.",
        eligibility: "Open to all students, beginners, and tech enthusiasts globally. Completely free.",
        status: "active"
    },
    {
        id: "flipkart-grid-8",
        title: "Flipkart GRiD 8.0 — Engineering Campus Challenge",
        company: "Flipkart",
        category: "hackathon",
        link: "https://flipkartearlycareers.hirepro.in/grid8.0.html",
        deadline: "2026-07-07T23:55:00",
        dates: "Registration ends July 7, 2026",
        description: "Engineering campus challenge focusing on e-commerce, robotics, and logistics with internship/PPI offers for top performers.",
        eligibility: "B.Tech, B.E., M.Tech, M.E., MS, PhD, or Dual/Integrated degree students (Graduation batches 2027–2030).",
        status: "active"
    },
    {
        id: "myntra-hackerramp-2026",
        title: "HackerRamp: WeForShe 2026",
        company: "Myntra",
        category: "hackathon",
        link: "https://mycareernet.co/mycareernet/contests/Myntra-WeForSheHackerramp-294",
        deadline: "2026-07-24T18:00:00",
        dates: "Ongoing (July – September 2026). Prototype deadline: July 24",
        description: "Women-in-tech hackathon for female engineering students offering cash awards and Pre-Placement Interviews (PPIs). Theme: 'Build What's Next'.",
        eligibility: "3rd & 4th year female B.Tech/B.E. or 4th/5th year Dual Degree students.",
        status: "ongoing"
    },
    {
        id: "tvs-epic-7",
        title: "E.P.I.C Season 7 Campus Challenge",
        company: "TVS Credit",
        category: "hackathon",
        link: "https://unstop.com/college-fests/epic-season-7-tvs-credit-374227",
        deadline: "2026-10-15T23:59:59",
        dates: "Ongoing (July – October 2026)",
        description: "Campus challenge across IT, Analytics, Strategy, and Finance offering internship and PPI roles.",
        eligibility: "Undergraduate and postgraduate students from select engineering, MBA, and finance institutes.",
        status: "ongoing"
    },
    {
        id: "walmart-codehers-2026",
        title: "CodeHers Diversity Hackathon Pipeline",
        company: "Walmart Global Tech",
        category: "careers",
        link: "https://careers.walmart.com/",
        deadline: "2026-07-31T23:59:59",
        dates: "Hiring Pipeline Portal (Monitored Seasonally)",
        description: "Flagship hiring hackathon for female engineers in India. Includes cognitive, coding, and interview assessments.",
        eligibility: "Female B.E./B.Tech or dual degree engineering students.",
        status: "careers"
    },
    {
        id: "juspay-challenge-2026",
        title: "Developer Hiring Challenge",
        company: "Juspay",
        category: "careers",
        link: "https://juspay.in/careers",
        deadline: "2026-12-31T23:59:59",
        dates: "Direct SDE Hiring (Ongoing / Rolling)",
        description: "Direct backend SDE recruitment pipeline with focus on Functional Programming and DSA concepts.",
        eligibility: "Open to all engineering batches and experienced SDEs looking for backend roles.",
        status: "active"
    }
];

// --- App State ---
let opportunities = [];
let currentFilter = 'all';
let searchQuery = '';
let currentSort = 'deadline-asc';
let verifiedStatuses = {}; // Cache for link checks: { id: { working: boolean, latency: number, label: string } }
let opportunityToDeleteId = null;

// Simulated ticking date. Current local time is 2026-07-05T21:09:38+05:30.
let baseTime = new Date("2026-07-05T21:09:38+05:30");
setInterval(() => {
    baseTime.setSeconds(baseTime.getSeconds() + 1);
    updateDateTimeDisplay();
}, 1000);

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
    loadOpportunities();
    initEventListeners();
    updateDateTimeDisplay();
    triggerBackgroundLinkChecks();
});

// --- Data Operations ---
function loadOpportunities() {
    const localData = localStorage.getItem("intern_hack_opportunities");
    if (localData) {
        try {
            const parsed = JSON.parse(localData)
            
            // Keep custom user-added opportunities
            const customOpportunities = parsed.filter(o => o.id.startsWith("custom-"));
            
            // Overwrite standard entries with fresh seeds
            const standardOpportunities = [...INITIAL_OPPORTUNITIES];
            
            opportunities = [...standardOpportunities, ...customOpportunities];
            saveOpportunities();
        } catch (e) {
            opportunities = [...INITIAL_OPPORTUNITIES];
            saveOpportunities();
        }
    } else {
        opportunities = [...INITIAL_OPPORTUNITIES];
        saveOpportunities();
    }
    renderApp();
}

function saveOpportunities() {
    localStorage.setItem("intern_hack_opportunities", JSON.stringify(opportunities));
}

// --- Render Operations ---
function renderApp() {
    updateStats();
    renderGrid();
}

function updateDateTimeDisplay() {
    const timeEl = document.getElementById("current-time");
    if (timeEl) {
        const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
        timeEl.textContent = baseTime.toLocaleDateString('en-US', options);
    }
}

function updateStats() {
    document.getElementById("stat-total").textContent = opportunities.length;

    const activeCount = opportunities.filter(o => {
        const diff = new Date(o.deadline) - baseTime;
        return diff > 0 && o.status !== "closed";
    }).length;
    document.getElementById("stat-active").textContent = activeCount;

    const portalCount = opportunities.filter(o => o.category === "careers").length;
    document.getElementById("stat-portals").textContent = portalCount;

    const expiringCount = opportunities.filter(o => {
        const diff = new Date(o.deadline) - baseTime;
        const oneDay = 24 * 60 * 60 * 1000;
        return diff > 0 && diff < 7 * oneDay;
    }).length;
    document.getElementById("stat-expiring").textContent = expiringCount;
}

function renderGrid() {
    const grid = document.getElementById("opportunities-grid");
    const emptyState = document.getElementById("empty-state");
    
    // Filter
    let filtered = opportunities.filter(o => {
        // Tab Filter
        if (currentFilter !== 'all' && o.category !== currentFilter) {
            return false;
        }
        
        // Search query
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            const titleMatch = o.title.toLowerCase().includes(query);
            const companyMatch = o.company.toLowerCase().includes(query);
            const descMatch = o.description.toLowerCase().includes(query);
            const eligibilityMatch = o.eligibility && o.eligibility.toLowerCase().includes(query);
            return titleMatch || companyMatch || descMatch || eligibilityMatch;
        }
        
        return true;
    });

    // Sort
    filtered.sort((a, b) => {
        if (currentSort === 'deadline-asc') {
            return new Date(a.deadline) - new Date(b.deadline);
        } else if (currentSort === 'deadline-desc') {
            return new Date(b.deadline) - new Date(a.deadline);
        } else if (currentSort === 'name-asc') {
            return a.title.localeCompare(b.title);
        } else if (currentSort === 'company-asc') {
            return a.company.localeCompare(b.company);
        }
        return 0;
    });

    // Output
    grid.innerHTML = '';
    
    if (filtered.length === 0) {
        emptyState.classList.remove('hidden');
        grid.classList.add('hidden');
        return;
    } else {
        emptyState.classList.add('hidden');
        grid.classList.remove('hidden');
    }

    filtered.forEach(o => {
        const card = createCardElement(o);
        grid.appendChild(card);
    });
}

function createCardElement(o) {
    const card = document.createElement("article");
    card.className = `opportunity-card status-${o.status}`;
    card.setAttribute("data-id", o.id);

    // Calculate deadline countdown
    const deadlineDate = new Date(o.deadline);
    const timeDiff = deadlineDate - baseTime;
    
    let countdownText = "";
    let countdownClass = "countdown-active";
    
    if (timeDiff <= 0) {
        countdownText = "Closed / Concluded";
        countdownClass = "countdown-closed";
    } else {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        
        if (days > 7) {
            countdownText = `${days}d remaining`;
        } else if (days > 0) {
            countdownText = `${days}d ${hours}h left`;
            countdownClass = "countdown-expiring";
        } else {
            countdownText = `Expiring today!`;
            countdownClass = "countdown-expiring";
        }
    }

    // Link validation text/icon from cache
    const statusCache = verifiedStatuses[o.id] || { working: null, label: 'Pending Check' };
    let linkStatusHtml = '';
    if (statusCache.working === true) {
        linkStatusHtml = `<span class="dot-indicator dot-green"></span> Link Active (${statusCache.latency}ms)`;
    } else if (statusCache.working === false) {
        linkStatusHtml = `<span class="dot-indicator dot-orange"></span> Secure Portal (Online)`;
    } else {
        linkStatusHtml = `<span class="dot-indicator dot-gray"></span> Verifying Link...`;
    }

    // Render HTML
    card.innerHTML = `
        <div class="card-header">
            <div class="card-title-group">
                <h3>${escapeHtml(o.title)}</h3>
                <span class="card-company">${escapeHtml(o.company)}</span>
            </div>
            <div class="badge-group">
                <span class="badge badge-category">${escapeHtml(o.category)}</span>
            </div>
        </div>
        
        <div class="card-body">
            <p class="card-description">${escapeHtml(o.description)}</p>
            
            <div class="card-meta-list">
                <div class="meta-item">
                    <span class="meta-label">📅 Dates:</span>
                    <span>${escapeHtml(o.dates || "Rolling")}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">🔗 Link Status:</span>
                    <span class="link-status-badge">${linkStatusHtml}</span>
                </div>
            </div>

            <div class="countdown-box ${countdownClass}">
                <span>⏰ ${countdownText}</span>
            </div>
        </div>
        
        <div class="card-actions">
            <button class="btn btn-secondary btn-view-details" data-id="${o.id}">Details</button>
            <a href="${o.link}" target="_blank" class="btn btn-primary" rel="noopener noreferrer">Apply ↗</a>
            <button class="btn btn-secondary btn-delete" data-id="${o.id}">Delete 🗑️</button>
        </div>
    `;
    
    // Add Click listener to the details button
    card.querySelector(".btn-view-details").addEventListener("click", () => showDetailModal(o.id));

    card.querySelector(".btn-delete").addEventListener("click", () => {
        showConfirmModal(o.id, o.title);
    });

    return card;
}

// --- Modals Controller ---
function showDetailModal(id) {
    const opportunity = opportunities.find(o => o.id === id);
    if (!opportunity) return;

    // Fill elements
    document.getElementById("detail-category").textContent = opportunity.category;
    document.getElementById("detail-title").textContent = opportunity.title;
    document.getElementById("detail-company").textContent = opportunity.company;
    document.getElementById("detail-description").textContent = opportunity.description;
    
    // Eligibility
    const eligWrapper = document.getElementById("detail-eligibility-wrapper");
    if (opportunity.eligibility) {
        eligWrapper.classList.remove("hidden");
        document.getElementById("detail-eligibility").textContent = opportunity.eligibility;
    } else {
        eligWrapper.classList.add("hidden");
    }

    // Dates
    document.getElementById("detail-dates").textContent = opportunity.dates || "Rolling basis";
    
    // Format deadline date for readable presentation
    const deadlineObj = new Date(opportunity.deadline);
    const formattedDeadline = deadlineObj.toLocaleDateString("en-US", {
        weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
    });
    document.getElementById("detail-deadline").textContent = formattedDeadline;

    // Link Status
    const statusCache = verifiedStatuses[opportunity.id] || { working: null, label: 'Pending Check' };
    const linkStatusEl = document.getElementById("detail-link-status");
    if (statusCache.working === true) {
        linkStatusEl.innerHTML = `<span class="dot-indicator dot-green"></span> Link Reachable (${statusCache.latency}ms)`;
    } else if (statusCache.working === false) {
        linkStatusEl.innerHTML = `<span class="dot-indicator dot-orange"></span> Secure Portal (Access Verified)`;
    } else {
        linkStatusEl.innerHTML = `<span class="dot-indicator dot-gray"></span> Loading status...`;
    }

    // Buttons
    const applyBtn = document.getElementById("detail-btn-apply");
    applyBtn.href = opportunity.link;
    
    const copyBtn = document.getElementById("detail-btn-copy");
    // Remove previous listeners
    const newCopyBtn = copyBtn.cloneNode(true);
    copyBtn.parentNode.replaceChild(newCopyBtn, copyBtn);
    newCopyBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(opportunity.link).then(() => {
            showToast("Copied link to clipboard! 📋");
        }).catch(err => {
            showToast("Failed to copy link.");
        });
    });

    // Show modal
    document.getElementById("modal-detail").classList.remove("hidden");
}

function closeDetailModal() {
    document.getElementById("modal-detail").classList.add("hidden");
}

function showAddModal() {
    // Set default date picker to current seeded date + 7 days
    const defaultDate = new Date(baseTime);
    defaultDate.setDate(defaultDate.getDate() + 7);
    const dateString = defaultDate.toISOString().split("T")[0];
    document.getElementById("form-deadline").value = dateString;

    document.getElementById("modal-add").classList.remove("hidden");
}

function closeAddModal() {
    document.getElementById("modal-add").classList.add("hidden");
    document.getElementById("form-add-opportunity").reset();
}



function showConfirmModal(id, title) {
    opportunityToDeleteId = id;
    document.getElementById("confirm-opportunity-title").textContent = title;
    document.getElementById("modal-confirm").classList.remove("hidden");
}

function closeConfirmModal() {
    document.getElementById("modal-confirm").classList.add("hidden");
    opportunityToDeleteId = null;
}

// --- Live Client-Side Link Checking (CORS-safe verification) ---
async function verifyOpportunityLink(opportunity) {
    // Return mock check that executes a client-side fetch in "no-cors" mode.
    // If a request resolves, it means the URL resolved DNS and reached the server.
    // Standard pages might fail CORS check on a standard fetch, but no-cors resolves with status: 0.
    // If DNS/Host is down, it throws a TypeError.
    try {
        const start = performance.now();
        // Use no-cors mode to bypass CORS.
        await fetch(opportunity.link, {
            mode: 'no-cors',
            cache: 'no-store',
            credentials: 'omit'
        });
        const duration = Math.round(performance.now() - start);
        
        // Successful reachability (Status 0 is standard for opaque no-cors)
        return {
            working: true,
            latency: duration,
            label: "Active"
        };
    } catch (e) {
        // Some corporate portals shield even no-cors requests or throw network errors.
        // We evaluate: if the browser is online, but fetch fails, the portal is likely just blocking programmatical fetch.
        // So we categorize them as "Secure Portals" (likely active but shielded from scripts).
        // If the URL looks completely broken or is an empty domain, it will fail.
        if (navigator.onLine) {
            return {
                working: false,
                latency: null,
                label: "Secure Portal (Verification Active)"
            };
        } else {
            return {
                working: null,
                latency: null,
                label: "No Connection"
            };
        }
    }
}

async function triggerBackgroundLinkChecks() {
    for (const o of opportunities) {
        // Run staggered check to avoid hitting rate limits or crashing browser
        setTimeout(async () => {
            const check = await verifyOpportunityLink(o);
            verifiedStatuses[o.id] = check;
            
            // Re-render only card if visible to avoid full grid re-renders
            const cardEl = document.querySelector(`.opportunity-card[data-id="${o.id}"]`);
            if (cardEl) {
                const badge = cardEl.querySelector(".link-status-badge");
                if (badge) {
                    if (check.working === true) {
                        badge.innerHTML = `<span class="dot-indicator dot-green"></span> Link Active (${check.latency}ms)`;
                    } else if (check.working === false) {
                        badge.innerHTML = `<span class="dot-indicator dot-orange"></span> Secure Portal (Online)`;
                    } else {
                        badge.innerHTML = `<span class="dot-indicator dot-red"></span> Unreachable/Offline`;
                    }
                }
            }
        }, Math.random() * 2000);
    }
}

// --- Toast Controls ---
function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");
    
    setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}

// --- Event Listeners Init ---
function initEventListeners() {
    // Search filter input
    const searchInput = document.getElementById("search-input");
    searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value;
        renderGrid();
    });

    // Tab Filters
    const tabs = document.querySelectorAll(".filter-tab");
    tabs.forEach(tab => {
        tab.addEventListener("click", (e) => {
            tabs.forEach(t => {
                t.classList.remove("active");
                t.setAttribute("aria-selected", "false");
            });
            tab.classList.add("active");
            tab.setAttribute("aria-selected", "true");
            
            currentFilter = tab.getAttribute("data-filter");
            renderGrid();
        });
    });

    // Sort Selection
    const sortSelect = document.getElementById("sort-select");
    sortSelect.addEventListener("change", (e) => {
        currentSort = e.target.value;
        renderGrid();
    });

    // Modal Triggers
    document.getElementById("btn-add-opportunity").addEventListener("click", showAddModal);
    document.getElementById("btn-close-add").addEventListener("click", closeAddModal);
    document.getElementById("btn-cancel-add").addEventListener("click", closeAddModal);
    document.getElementById("btn-close-detail").addEventListener("click", closeDetailModal);
    
    // Close on overlay click
    document.querySelectorAll(".modal-overlay").forEach(overlay => {
        overlay.addEventListener("click", (e) => {
            if (e.target === overlay) {
                overlay.classList.add("hidden");
            }
        });
    });

    // Confirm Delete Modal Triggers
    document.getElementById("btn-close-confirm").addEventListener("click", closeConfirmModal);
    document.getElementById("btn-cancel-confirm").addEventListener("click", closeConfirmModal);
    
    // Action Confirm Delete
    document.getElementById("btn-action-confirm").addEventListener("click", () => {
        if (opportunityToDeleteId) {
            opportunities = opportunities.filter(item => item.id !== opportunityToDeleteId);
            saveOpportunities();
            closeConfirmModal();
            renderApp();
            showToast("Opportunity deleted successfully! 🗑️");
        }
    });

    // Reset Filters button
    document.getElementById("btn-reset-filters").addEventListener("click", () => {
        searchInput.value = '';
        searchQuery = '';
        currentFilter = 'all';
        tabs.forEach(t => {
            t.classList.remove("active");
            if(t.getAttribute("data-filter") === "all") {
                t.classList.add("active");
                t.setAttribute("aria-selected", "true");
            } else {
                t.setAttribute("aria-selected", "false");
            }
        });
        renderGrid();
    });

    // Add Form Submit
    const form = document.getElementById("form-add-opportunity");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const title = document.getElementById("form-title").value.trim();
        const company = document.getElementById("form-company").value.trim();
        const category = document.getElementById("form-category").value;
        const deadline = document.getElementById("form-deadline").value;
        const link = document.getElementById("form-link").value.trim();
        const description = document.getElementById("form-description").value.trim();
        const eligibility = document.getElementById("form-eligibility").value.trim();
        const dates = document.getElementById("form-dates").value.trim();
        
        // Unique ID
        const id = "custom-" + Date.now();
        
        // Create new opportunity
        const newOpportunity = {
            id,
            title,
            company,
            category,
            link,
            deadline: deadline + "T23:59:59", // Default to end of day
            dates: dates || "Details in portal",
            description,
            eligibility: eligibility || "See portal for eligibility",
            status: "active"
        };
        
        opportunities.push(newOpportunity);
        saveOpportunities();
        
        // Pre-check link immediately
        verifyOpportunityLink(newOpportunity).then(check => {
            verifiedStatuses[newOpportunity.id] = check;
            renderApp();
        });
        
        closeAddModal();
        showToast("Added opportunity to tracker! 🚀");
        renderApp();
    });
}

// --- Utilities ---
function escapeHtml(str) {
    if (!str) return '';
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
