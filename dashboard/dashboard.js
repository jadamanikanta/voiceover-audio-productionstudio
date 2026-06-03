
function initializeApp() {
    
    const state = {
        theme: localStorage.getItem('theme') || 'dark',
        dir: document.documentElement.getAttribute('dir') || 'ltr',
        activeSection: 'overview',
        activeSettingsSubtab: 'profile',
        
        projects: [
            { id: "VOX-2041", client: "Cyberdyne Systems", category: "Commercial Voiceover", talent: "Arnold S. (AI)", status: "Delivered", amount: 2450, date: "2026-06-02" },
            { id: "VOX-2040", client: "Aperture Labs", category: "Video Game Sound Design", talent: "Ellen M. (Mock)", status: "Processing Audio", amount: 5800, date: "2026-06-02" },
            { id: "VOX-2039", client: "Weyland-Yutani", category: "Audiobook Narrating", talent: "Sigourney W.", status: "Pending Processing", amount: 1250, date: "2026-06-01" },
            { id: "VOX-2038", client: "Stark Industries", category: "Podcast Production", talent: "Paul B.", status: "Delivered", amount: 950, date: "2026-05-30" },
            { id: "VOX-2037", client: "Tyrell Corporation", category: "Commercial Voiceover", talent: "Rutger H.", status: "Delivered", amount: 3200, date: "2026-05-28" }
        ],

        customers: [
            { id: 1, name: "Marcus Wright", email: "m.wright@cyberdyne.com", company: "Cyberdyne Systems", spend: 4800, tracks: 8, status: "active", date: "2025-11-12", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=80" },
            { id: 2, name: "Gena Cavity", email: "g.cavity@aperture.com", company: "Aperture Science", spend: 11200, tracks: 14, status: "active", date: "2025-08-04", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&auto=format&fit=crop&q=80" },
            { id: 3, name: "Ellen Ripley", email: "ripley@weyland.com", company: "Weyland-Yutani Corp", spend: 3250, tracks: 5, status: "active", date: "2026-01-20", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&auto=format&fit=crop&q=80" },
            { id: 4, name: "Pepper Potts", email: "potts@stark.com", company: "Stark Industries", spend: 8900, tracks: 11, status: "active", date: "2025-05-15", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&auto=format&fit=crop&q=80" },
            { id: 5, name: "Rachael Nexus", email: "rachael@tyrell.com", company: "Tyrell Corp", spend: 12400, tracks: 19, status: "active", date: "2025-02-10", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&auto=format&fit=crop&q=80" },
            { id: 6, name: "John Connor", email: "jconnor@resistance.net", company: "TechCom resistance", spend: 0, tracks: 0, status: "inactive", date: "2026-05-18", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&auto=format&fit=crop&q=80" },
            { id: 7, name: "Bruce Wayne", email: "bruce@waynecorp.com", company: "Wayne Enterprises", spend: 18500, tracks: 22, status: "active", date: "2024-12-01", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80" },
            { id: 8, name: "Arthur Dent", email: "dent@galaxy.com", company: "Megadodo Publications", spend: 450, tracks: 1, status: "inactive", date: "2026-03-24", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&auto=format&fit=crop&q=80" },
            { id: 9, name: "Sarah Connor", email: "sconnor@resistance.net", company: "TechCom resistance", spend: 3200, tracks: 4, status: "active", date: "2025-10-10", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80" },
            { id: 10, name: "Morpheus Neb", email: "morpheus@zion.org", company: "Nebuchadnezzar LLC", spend: 5200, tracks: 7, status: "active", date: "2025-06-06", avatar: "https://images.unsplash.com/photo-1489980508314-941910ded1f4?w=80&auto=format&fit=crop&q=80" },
            { id: 11, name: "Neo Anderson", email: "neo@zion.org", company: "Nebuchadnezzar LLC", spend: 9500, tracks: 12, status: "active", date: "2025-06-12", avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=80&auto=format&fit=crop&q=80" },
            { id: 12, name: "Trinity Zion", email: "trinity@zion.org", company: "Nebuchadnezzar LLC", spend: 6400, tracks: 9, status: "inactive", date: "2025-06-12", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&auto=format&fit=crop&q=80" }
        ],

        notifications: [
            { id: 1, type: "upload", title: "Master WAV Render Successful", desc: "Project VOX-2041 (Cyberdyne Ad) master WAV generated successfully.", time: "10 minutes ago", unread: true },
            { id: 2, type: "payment", title: "Invoice Paid - $5,800", desc: "Aperture Labs paid sound design project deposit invoice #1042.", time: "1 hour ago", unread: true },
            { id: 3, type: "alert", title: "Talent Schedule Conflict", desc: "Voice actor Sigourney W. has flagged a conflicts warning for June 4th.", time: "3 hours ago", unread: true },
            { id: 4, type: "user", title: "New Client Registration", desc: "Bruce Wayne (Wayne Enterprises) created an active client profile.", time: "1 day ago", unread: false }
        ],

        customerTable: {
            currentPage: 1,
            pageSize: 5,
            searchQuery: "",
            statusFilter: "all"
        },

        talents: [
            { id: 1, name: "Arnold S.", title: "AI Voice & Accent Copyist", language: "English", tag: "US - Deep/Resonant", rating: 4.9, earnings: 14500, status: "active", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80" },
            { id: 2, name: "Sigourney W.", title: "Senior Narrator & Actress", language: "English", tag: "UK - Warm/Authoritative", rating: 4.8, earnings: 9200, status: "active", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80" },
            { id: 3, name: "Ellen M.", title: "Voice Over & Commercial Artist", language: "German", tag: "DE - Energetic/Clear", rating: 4.7, earnings: 6300, status: "active", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80" },
            { id: 4, name: "Paul B.", title: "Podcast Producer & Vocalist", language: "Spanish", tag: "ES - Smooth/Narrator", rating: 4.85, earnings: 4100, status: "active", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80" },
            { id: 5, name: "Rutger H.", title: "Sound Designer & Vocalist", language: "German", tag: "NL - Edgy/Vintage", rating: 4.95, earnings: 18700, status: "active", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&auto=format&fit=crop&q=80" }
        ],

        jobsTable: {
            searchQuery: "",
            statusFilter: "all"
        },

        talentsGrid: {
            searchQuery: "",
            languageFilter: "all"
        }
    };

    const elements = {
        themeToggleBtn: document.getElementById('theme-toggle'),
        themeIconSun: document.getElementById('theme-icon-sun'),
        themeIconMoon: document.getElementById('theme-icon-moon'),
        
        themeToggleBtnMobile: document.getElementById('theme-toggle-mobile'),
        themeIconSunMobile: document.getElementById('theme-icon-sun-mobile'),
        themeIconMoonMobile: document.getElementById('theme-icon-moon-mobile'),
        
        rtlToggleBtn: document.getElementById('rtl-toggle'),
        rtlToggleBtnMobile: document.getElementById('rtl-toggle-mobile'),
        
        notificationBtn: document.getElementById('notification-btn'),
        notificationDropdown: document.getElementById('notification-dropdown'),
        notificationBadgeCount: document.getElementById('notification-badge-count'),
        notificationList: document.getElementById('notification-list'),
        markAllReadBtn: document.getElementById('mark-all-read'),
        notificationsWidgetList: document.getElementById('latest-notifications-widget-list'),
        
        notificationBtnMobile: document.getElementById('notification-btn-mobile'),
        notificationBadgeCountMobile: document.getElementById('notification-badge-count-mobile'),
        notificationListMobile: document.getElementById('notification-list-mobile'),
        markAllReadBtnMobile: document.getElementById('mark-all-read-mobile'),
        mobileNotificationsPanel: document.getElementById('mobile-notifications-panel'),
        
        profileBtn: document.getElementById('profile-btn'),
        profileDropdown: document.getElementById('profile-dropdown'),
        logoutBtns: document.querySelectorAll('.logout-btn'),
        
        mobileMenuToggle: document.getElementById('mobile-menu-toggle'),
        sidebar: document.getElementById('dashboard-sidebar'),
        
        navLinks: document.querySelectorAll('.nav-link'),
        sections: document.querySelectorAll('.dashboard-section'),
        
        profileSettingsForm: document.getElementById('form-profile-settings'),
        accountSettingsForm: document.getElementById('form-account-settings'),
        avatarFileInput: document.getElementById('avatar-file-input'),
        profileAvatarPreview: document.getElementById('profile-avatar-preview'),
        avatarHeaderImg: document.getElementById('avatar-img'),
        profileNameSpan: document.querySelector('.profile-name-span'),
        profileRoleSpan: document.querySelector('.info-role'),
        profileDropdownName: document.querySelector('.info-name'),
        
        themeChoiceLight: document.getElementById('theme-choice-light'),
        themeChoiceDark: document.getElementById('theme-choice-dark'),
        dirChoiceLtr: document.getElementById('dir-choice-ltr'),
        dirChoiceRtl: document.getElementById('dir-choice-rtl'),
        
        quickJobModal: document.getElementById('quick-job-modal'),
        btnQuickNewJob: document.getElementById('btn-quick-new-job'),
        modalCloseBtn: document.getElementById('modal-close-btn'),
        modalCancelBtn: document.getElementById('modal-cancel-btn'),
        formQuickJob: document.getElementById('form-quick-job'),

        valTotalCustomers: document.getElementById('val-total-customers'),
        valTotalRevenue: document.getElementById('val-total-revenue'),
        valTotalOrders: document.getElementById('val-total-orders'),
        valGrowthRate: document.getElementById('val-growth-rate'),
        
        recentProjectsTable: document.getElementById('recent-projects-table').querySelector('tbody'),
        viewAllCustomersBtn: document.getElementById('view-all-customers-btn'),
        
        customersListTable: document.getElementById('customers-list-table').querySelector('tbody'),
        customerSearch: document.getElementById('customer-search'),
        customerStatusFilter: document.getElementById('customer-status-filter'),
        paginationStart: document.getElementById('pagination-start'),
        paginationEnd: document.getElementById('pagination-end'),
        paginationTotal: document.getElementById('pagination-total'),
        paginationPrev: document.getElementById('pagination-prev'),
        paginationNext: document.getElementById('pagination-next'),
        btnAddCustomer: document.getElementById('btn-add-customer'),
        
        jobsListTable: document.getElementById('jobs-list-table').querySelector('tbody'),
        jobsSearch: document.getElementById('jobs-search'),
        jobsStatusFilter: document.getElementById('jobs-status-filter'),
        btnAddJobDirect: document.getElementById('btn-add-job-direct'),

        talentsCardsContainer: document.getElementById('talents-cards-container'),
        talentsSearch: document.getElementById('talents-search'),
        talentsLanguageFilter: document.getElementById('talents-language-filter'),
        btnAddTalent: document.getElementById('btn-add-talent'),
        subNavLinks: document.querySelectorAll('.sub-nav-link'),
        settingsPanes: document.querySelectorAll('.settings-subtab-pane')
    };

    let charts = {
        overviewLine: null,
        overviewDoughnut: null,
        overviewBar: null,
        revenueMonthly: null,
        analyticsPie: null,
        analyticsBar: null,
        analyticsLine: null
    };

    function initTheme() {
        document.documentElement.setAttribute('data-theme', state.theme);
        if (state.theme === 'light') {
            if (elements.themeIconSun) elements.themeIconSun.classList.add('hidden');
            if (elements.themeIconMoon) elements.themeIconMoon.classList.remove('hidden');
            if (elements.themeIconSunMobile) elements.themeIconSunMobile.classList.add('hidden');
            if (elements.themeIconMoonMobile) elements.themeIconMoonMobile.classList.remove('hidden');
            if (elements.themeChoiceLight) elements.themeChoiceLight.classList.add('active');
            if (elements.themeChoiceDark) elements.themeChoiceDark.classList.remove('active');
        } else {
            if (elements.themeIconSun) elements.themeIconSun.classList.remove('hidden');
            if (elements.themeIconMoon) elements.themeIconMoon.classList.add('hidden');
            if (elements.themeIconSunMobile) elements.themeIconSunMobile.classList.remove('hidden');
            if (elements.themeIconMoonMobile) elements.themeIconMoonMobile.classList.add('hidden');
            if (elements.themeChoiceLight) elements.themeChoiceLight.classList.remove('active');
            if (elements.themeChoiceDark) elements.themeChoiceDark.classList.add('active');
        }
    }

    function initDir() {
        document.documentElement.setAttribute('dir', state.dir);
        if (elements.rtlToggleBtn) {
            elements.rtlToggleBtn.querySelector('.btn-text').textContent = state.dir.toUpperCase();
        }
        const mobileRtlToggleText = document.getElementById('rtl-toggle-text-mobile');
        if (mobileRtlToggleText) {
            mobileRtlToggleText.textContent = state.dir.toUpperCase();
        }
        if (state.dir === 'rtl') {
            if (elements.dirChoiceRtl) elements.dirChoiceRtl.classList.add('active');
            if (elements.dirChoiceLtr) elements.dirChoiceLtr.classList.remove('active');
        } else {
            if (elements.dirChoiceRtl) elements.dirChoiceRtl.classList.remove('active');
            if (elements.dirChoiceLtr) elements.dirChoiceLtr.classList.add('active');
        }
    }

    initTheme();
    initDir();

    function toggleDropdown(panel) {
        [elements.notificationDropdown, elements.profileDropdown].forEach(d => {
            if (d && d !== panel) d.classList.remove('show');
        });
        if (panel) panel.classList.toggle('show');
    }

    document.addEventListener('click', (e) => {
        if (elements.notificationBtn && elements.notificationDropdown) {
            if (!elements.notificationBtn.contains(e.target) && !elements.notificationDropdown.contains(e.target)) {
                elements.notificationDropdown.classList.remove('show');
            }
        }
        if (elements.profileBtn && elements.profileDropdown) {
            if (!elements.profileBtn.contains(e.target) && !elements.profileDropdown.contains(e.target)) {
                elements.profileDropdown.classList.remove('show');
            }
        }
    });

    if (elements.mobileMenuToggle && elements.sidebar) {
        elements.mobileMenuToggle.addEventListener('click', () => {
            elements.sidebar.classList.toggle('open');
        });
    }

    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 1024 && elements.sidebar && elements.mobileMenuToggle) {
            if (!elements.sidebar.contains(e.target) && !elements.mobileMenuToggle.contains(e.target)) {
                elements.sidebar.classList.remove('open');
            }
        }
    });

    function renderOverviewTable() {
        if (!elements.recentProjectsTable) return;
        elements.recentProjectsTable.innerHTML = '';
        state.projects.forEach(proj => {
            const tr = document.createElement('tr');
            
            let statusClass = 'status-pending';
            if (proj.status === 'Delivered') statusClass = 'status-delivered';
            if (proj.status === 'Processing Audio') statusClass = 'status-processing';
            
            tr.innerHTML = `
                <td class="font-semibold">${proj.id}</td>
                <td>${proj.client}</td>
                <td>${proj.category}</td>
                <td>${proj.talent}</td>
                <td><span class="badge ${statusClass}">${proj.status}</span></td>
                <td class="font-semibold">$${proj.amount.toLocaleString()}</td>
            `;
            elements.recentProjectsTable.appendChild(tr);
        });
    }

    function renderNotifications() {
        if (!elements.notificationList || !elements.notificationsWidgetList) return;
        
        elements.notificationList.innerHTML = '';
        const unreadCount = state.notifications.filter(n => n.unread).length;
        
        if (elements.notificationBadgeCount) {
            if (unreadCount > 0) {
                elements.notificationBadgeCount.classList.remove('hidden');
                elements.notificationBadgeCount.textContent = unreadCount;
            } else {
                elements.notificationBadgeCount.classList.add('hidden');
            }
        }

        if (state.notifications.length === 0) {
            elements.notificationList.innerHTML = `
                <li style="padding: 20px; text-align: center; color: var(--text-tertiary); font-size: 0.8rem;">
                    No notifications
                </li>
            `;
        } else {
            state.notifications.forEach(n => {
                let iconSVG = '';
                if (n.type === 'upload') {
                    iconSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>`;
                } else if (n.type === 'payment') {
                    iconSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`;
                } else if (n.type === 'alert') {
                    iconSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/></svg>`;
                } else {
                    iconSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;
                }

                const li = document.createElement('li');
                li.innerHTML = `
                    <div class="dropdown-item ${n.unread ? 'unread' : ''}" data-id="${n.id}">
                        <div class="dropdown-item-icon">
                            ${iconSVG}
                        </div>
                        <div class="dropdown-item-content">
                            <span class="dropdown-item-title">${n.title}</span>
                            <span class="dropdown-item-desc">${n.desc}</span>
                            <span class="dropdown-item-time">${n.time}</span>
                        </div>
                    </div>
                `;
                elements.notificationList.appendChild(li);
            });
        }

        if (elements.notificationListMobile) {
            elements.notificationListMobile.innerHTML = '';
            if (state.notifications.length === 0) {
                elements.notificationListMobile.innerHTML = `
                    <li style="padding: 16px; text-align: center; color: var(--text-tertiary); font-size: 0.75rem;">
                        No notifications
                    </li>
                `;
            } else {
                state.notifications.forEach(n => {
                    let iconSVG = '';
                    if (n.type === 'upload') {
                        iconSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>`;
                    } else if (n.type === 'payment') {
                        iconSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`;
                    } else if (n.type === 'alert') {
                        iconSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/></svg>`;
                    } else {
                        iconSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;
                    }

                    const li = document.createElement('li');
                    li.innerHTML = `
                        <div class="dropdown-item ${n.unread ? 'unread' : ''}" data-id="${n.id}">
                            <div class="dropdown-item-icon">
                                ${iconSVG}
                            </div>
                            <div class="dropdown-item-content">
                                <span class="dropdown-item-title">${n.title}</span>
                                <span class="dropdown-item-desc">${n.desc}</span>
                                <span class="dropdown-item-time">${n.time}</span>
                            </div>
                        </div>
                    `;
                    elements.notificationListMobile.appendChild(li);
                });
            }
        }

        if (elements.notificationBadgeCountMobile) {
            if (unreadCount > 0) {
                elements.notificationBadgeCountMobile.classList.remove('hidden');
                elements.notificationBadgeCountMobile.textContent = unreadCount;
            } else {
                elements.notificationBadgeCountMobile.classList.add('hidden');
            }
        }

        elements.notificationsWidgetList.innerHTML = '';
        state.notifications.forEach(n => {
            let iconSVG = '';
            if (n.type === 'upload') {
                iconSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>`;
            } else if (n.type === 'payment') {
                iconSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`;
            } else if (n.type === 'alert') {
                iconSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/></svg>`;
            } else {
                iconSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;
            }

            const item = document.createElement('div');
            item.className = 'widget-item';
            item.innerHTML = `
                <div class="widget-item-icon">
                    ${iconSVG}
                </div>
                <div class="widget-item-content">
                    <span class="widget-item-title">${n.title}</span>
                    <span class="widget-item-desc">${n.desc}</span>
                    <span class="widget-item-time">${n.time}</span>
                </div>
            `;
            elements.notificationsWidgetList.appendChild(item);
        });
    }

    if (elements.notificationList) {
        elements.notificationList.addEventListener('click', (e) => {
            const item = e.target.closest('.dropdown-item');
            if (item) {
                const id = parseInt(item.getAttribute('data-id'));
                const notif = state.notifications.find(n => n.id === id);
                if (notif) {
                    notif.unread = false;
                    renderNotifications();
                }
            }
        });
    }

    if (elements.markAllReadBtn) {
        elements.markAllReadBtn.addEventListener('click', () => {
            state.notifications.forEach(n => n.unread = false);
            renderNotifications();
        });
    }

    const profileDropdownLinks = document.querySelectorAll('.profile-dropdown-link');
    profileDropdownLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionTarget = link.getAttribute('data-target');
            const subtabTarget = link.getAttribute('data-subtab');
            
            if (elements.profileDropdown) elements.profileDropdown.classList.remove('show');
            navigateToSection(sectionTarget);
            
            if (sectionTarget === 'settings' && subtabTarget) {
                navigateToSettingsSubtab(subtabTarget);
            }
        });
    });

    function renderCustomersTable() {
        if (!elements.customersListTable) return;
        
        const query = state.customerTable.searchQuery.toLowerCase().trim();
        const status = state.customerTable.statusFilter;

        let filtered = state.customers.filter(c => {
            const matchesSearch = c.name.toLowerCase().includes(query) ||
                                  c.company.toLowerCase().includes(query) ||
                                  c.email.toLowerCase().includes(query);
            const matchesStatus = status === 'all' ? true : c.status === status;
            return matchesSearch && matchesStatus;
        });

        const total = filtered.length;
        const size = state.customerTable.pageSize;
        const totalPages = Math.max(1, Math.ceil(total / size));
        
        if (state.customerTable.currentPage > totalPages) {
            state.customerTable.currentPage = totalPages;
        }
        
        const startIdx = (state.customerTable.currentPage - 1) * size;
        const endIdx = Math.min(startIdx + size, total);
        const pageItems = filtered.slice(startIdx, endIdx);

        elements.customersListTable.innerHTML = '';
        if (pageItems.length === 0) {
            elements.customersListTable.innerHTML = `
                <tr>
                    <td colspan="7" style="text-align: center; padding: 32px; color: var(--text-tertiary);">
                        No clients found matching the filters.
                    </td>
                </tr>
            `;
        } else {
            pageItems.forEach(client => {
                const tr = document.createElement('tr');
                let badgeClass = client.status === 'active' ? 'status-active' : 'status-inactive';
                
                tr.innerHTML = `
                    <td>
                        <div class="client-meta-cell">
                            <img src="${client.avatar}" alt="${client.name}" class="client-avatar">
                            <div class="client-info-text">
                                <strong>${client.name}</strong>
                                <span>${client.email}</span>
                            </div>
                        </div>
                    </td>
                    <td>${client.company}</td>
                    <td class="font-semibold">$${client.spend.toLocaleString()}</td>
                    <td>${client.tracks} masters</td>
                    <td><span class="badge ${badgeClass}">${client.status.toUpperCase()}</span></td>
                    <td>${client.date}</td>
                    <td>
                        <div class="cell-actions">
                            <button class="action-icon-btn" title="Edit Client" onclick="alert('Client record management dashboard hook!')">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
                            </button>
                            <button class="action-icon-btn" title="Email Client" onclick="alert('Open messaging composer workflow!')">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                            </button>
                        </div>
                    </td>
                `;
                elements.customersListTable.appendChild(tr);
            });
        }

        if (elements.paginationStart) elements.paginationStart.textContent = total === 0 ? 0 : startIdx + 1;
        if (elements.paginationEnd) elements.paginationEnd.textContent = endIdx;
        if (elements.paginationTotal) elements.paginationTotal.textContent = total;

        if (elements.paginationPrev) elements.paginationPrev.disabled = state.customerTable.currentPage === 1;
        if (elements.paginationNext) elements.paginationNext.disabled = state.customerTable.currentPage === totalPages || total === 0;
    }

    if (elements.customerSearch) {
        elements.customerSearch.addEventListener('input', (e) => {
            state.customerTable.searchQuery = e.target.value;
            state.customerTable.currentPage = 1;
            renderCustomersTable();
        });
    }

    if (elements.customerStatusFilter) {
        elements.customerStatusFilter.addEventListener('change', (e) => {
            state.customerTable.statusFilter = e.target.value;
            state.customerTable.currentPage = 1;
            renderCustomersTable();
        });
    }

    if (elements.paginationPrev) {
        elements.paginationPrev.addEventListener('click', () => {
            if (state.customerTable.currentPage > 1) {
                state.customerTable.currentPage--;
                renderCustomersTable();
            }
        });
    }

    if (elements.paginationNext) {
        elements.paginationNext.addEventListener('click', () => {
            const total = state.customers.filter(c => {
                const matchesSearch = c.name.toLowerCase().includes(state.customerTable.searchQuery.toLowerCase()) ||
                                      c.company.toLowerCase().includes(state.customerTable.searchQuery.toLowerCase()) ||
                                      c.email.toLowerCase().includes(state.customerTable.searchQuery.toLowerCase());
                const matchesStatus = state.customerTable.statusFilter === 'all' ? true : c.status === state.customerTable.statusFilter;
                return matchesSearch && matchesStatus;
            }).length;
            const totalPages = Math.ceil(total / state.customerTable.pageSize);
            if (state.customerTable.currentPage < totalPages) {
                state.customerTable.currentPage++;
                renderCustomersTable();
            }
        });
    }

    if (elements.btnAddCustomer) {
        elements.btnAddCustomer.addEventListener('click', () => {
            const name = prompt("Enter Client Full Name:");
            if (!name) return;
            const company = prompt("Enter Client Agency / Company Name:") || "Independent";
            const email = prompt("Enter Client Email Address:") || `${name.toLowerCase().replace(' ', '')}@voxstudio.com`;
            
            const newClient = {
                id: state.customers.length + 1,
                name: name,
                email: email,
                company: company,
                spend: 0,
                tracks: 0,
                status: "active",
                date: new Date().toISOString().split('T')[0],
                avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&auto=format&fit=crop&q=80"
            };
            
            state.customers.unshift(newClient);
            renderCustomersTable();
            updateKPICounters();
            
            state.notifications.unshift({
                id: Date.now(),
                type: "user",
                title: "New Client Registered",
                desc: `${name} has been added to the customer registry database.`,
                time: "Just now",
                unread: true
            });
            renderNotifications();
        });
    }

    function renderJobsTable() {
        if (!elements.jobsListTable) return;

        const query = state.jobsTable.searchQuery.toLowerCase().trim();
        const status = state.jobsTable.statusFilter;

        let filtered = state.projects.filter(proj => {
            const matchesSearch = proj.id.toLowerCase().includes(query) ||
                                  proj.client.toLowerCase().includes(query) ||
                                  proj.talent.toLowerCase().includes(query) ||
                                  proj.category.toLowerCase().includes(query);
            const matchesStatus = status === 'all' ? true : proj.status === status;
            return matchesSearch && matchesStatus;
        });

        elements.jobsListTable.innerHTML = '';
        if (filtered.length === 0) {
            elements.jobsListTable.innerHTML = `
                <tr>
                    <td colspan="8" style="text-align: center; padding: 32px; color: var(--text-tertiary);">
                        No audio jobs found matching the filters.
                    </td>
                </tr>
            `;
        } else {
            filtered.forEach(proj => {
                const tr = document.createElement('tr');
                let statusClass = 'status-pending';
                if (proj.status === 'Delivered') statusClass = 'status-delivered';
                if (proj.status === 'Processing Audio') statusClass = 'status-processing';

                tr.innerHTML = `
                    <td class="font-semibold">${proj.id}</td>
                    <td>${proj.client}</td>
                    <td>${proj.category}</td>
                    <td>${proj.talent}</td>
                    <td><span class="badge ${statusClass}">${proj.status}</span></td>
                    <td class="font-semibold">$${proj.amount.toLocaleString()}</td>
                    <td>${proj.date}</td>
                    <td>
                        <div class="cell-actions">
                            <button class="action-icon-btn" title="Download Master WAV" onclick="alert('Downloading high fidelity master track...')">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                            </button>
                            <button class="action-icon-btn" title="Manage Queue" onclick="alert('Opening project timeline workflow...')">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                            </button>
                        </div>
                    </td>
                `;
                elements.jobsListTable.appendChild(tr);
            });
        }

        const activeCount = state.projects.filter(p => p.status !== 'Delivered').length;
        const processingCount = state.projects.filter(p => p.status === 'Processing Audio').length;
        const completedCount = state.projects.filter(p => p.status === 'Delivered').length;

        if (document.getElementById('val-jobs-active')) document.getElementById('val-jobs-active').textContent = activeCount;
        if (document.getElementById('val-jobs-processing')) document.getElementById('val-jobs-processing').textContent = processingCount;
        if (document.getElementById('val-jobs-completed')) document.getElementById('val-jobs-completed').textContent = completedCount;
    }

    function renderTalentsCards() {
        if (!elements.talentsCardsContainer) return;

        const query = state.talentsGrid.searchQuery.toLowerCase().trim();
        const language = state.talentsGrid.languageFilter;

        let filtered = state.talents.filter(t => {
            const matchesSearch = t.name.toLowerCase().includes(query) ||
                                  t.title.toLowerCase().includes(query) ||
                                  t.tag.toLowerCase().includes(query);
            const matchesLanguage = language === 'all' ? true : t.language === language;
            return matchesSearch && matchesLanguage;
        });

        elements.talentsCardsContainer.innerHTML = '';
        if (filtered.length === 0) {
            elements.talentsCardsContainer.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 48px; color: var(--text-tertiary);">
                    No voice artists found matching the filters.
                </div>
            `;
        } else {
            filtered.forEach(t => {
                const card = document.createElement('div');
                card.className = 'talent-card';
                let statusBadge = t.status === 'active' ? '<span class="badge status-active talent-status-badge">ACTIVE</span>' : '<span class="badge status-inactive talent-status-badge">INACTIVE</span>';

                card.innerHTML = `
                    ${statusBadge}
                    <img src="${t.avatar}" alt="${t.name}" class="talent-avatar-large">
                    <h3 class="talent-name">${t.name}</h3>
                    <span class="talent-title">${t.title}</span>
                    <div class="talent-tags">
                        <span class="talent-tag">${t.language}</span>
                        <span class="talent-tag">${t.tag}</span>
                    </div>
                    <div class="talent-stats">
                        <div class="talent-stat-item">
                            <span class="talent-stat-label">Rating</span>
                            <span class="talent-stat-value">★ ${t.rating}</span>
                        </div>
                        <div class="talent-stat-item">
                            <span class="talent-stat-label">Booked Value</span>
                            <span class="talent-stat-value">$${t.earnings.toLocaleString()}</span>
                        </div>
                    </div>
                    
                    <div class="audio-player-wrapper" data-talent-id="${t.id}">
                        <button class="play-toggle-btn" title="Play Voice Sample">
                            <svg class="play-icon" viewBox="0 0 24 24" fill="currentColor" width="12" height="12"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                        </button>
                        <div class="audio-wave-visualizer">
                            <div class="audio-bar" style="height: 6px;"></div>
                            <div class="audio-bar" style="height: 12px;"></div>
                            <div class="audio-bar" style="height: 8px;"></div>
                            <div class="audio-bar" style="height: 14px;"></div>
                            <div class="audio-bar" style="height: 5px;"></div>
                            <div class="audio-bar" style="height: 11px;"></div>
                            <div class="audio-bar" style="height: 7px;"></div>
                            <div class="audio-bar" style="height: 13px;"></div>
                            <div class="audio-bar" style="height: 6px;"></div>
                            <div class="audio-bar" style="height: 9px;"></div>
                        </div>
                    </div>

                    <div class="talent-actions">
                        <button class="primary-btn btn-small" onclick="alert('Opening booking inquiry dialog for ${t.name}...')">Book</button>
                        <button class="secondary-btn btn-small" onclick="alert('Viewing full details & voice profile of ${t.name}...')">Profile</button>
                    </div>
                `;
                elements.talentsCardsContainer.appendChild(card);
            });
        }

        if (document.getElementById('val-talents-count')) document.getElementById('val-talents-count').textContent = state.talents.length;
        if (document.getElementById('val-talents-onair')) document.getElementById('val-talents-onair').textContent = state.talents.filter(t => t.status === 'active').length + 5; // mock active sessions
    }
    if (elements.jobsSearch) {
        elements.jobsSearch.addEventListener('input', (e) => {
            state.jobsTable.searchQuery = e.target.value;
            renderJobsTable();
        });
    }

    if (elements.jobsStatusFilter) {
        elements.jobsStatusFilter.addEventListener('change', (e) => {
            state.jobsTable.statusFilter = e.target.value;
            renderJobsTable();
        });
    }

    if (elements.btnAddJobDirect) {
        elements.btnAddJobDirect.addEventListener('click', () => {
            if (elements.quickJobModal) elements.quickJobModal.classList.add('show');
        });
    }

    if (elements.talentsSearch) {
        elements.talentsSearch.addEventListener('input', (e) => {
            state.talentsGrid.searchQuery = e.target.value;
            renderTalentsCards();
        });
    }

    if (elements.talentsLanguageFilter) {
        elements.talentsLanguageFilter.addEventListener('change', (e) => {
            state.talentsGrid.languageFilter = e.target.value;
            renderTalentsCards();
        });
    }

    if (elements.btnAddTalent) {
        elements.btnAddTalent.addEventListener('click', () => {
            const name = prompt("Enter Voice Talent Full Name:");
            if (!name) return;
            const title = prompt("Enter Studio Specialization Title:") || "Voice Artist";
            const language = prompt("Primary Language (e.g. English, Spanish, German, Japanese):") || "English";
            const tag = prompt("Accent Tag (e.g. US - Deep/Resonant, UK - Warm/Authoritative):") || "US - General";
            
            const newTalent = {
                id: state.talents.length + 1,
                name: name,
                title: title,
                language: language,
                tag: tag,
                rating: 4.8,
                earnings: 0,
                status: "active",
                avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80"
            };

            state.talents.unshift(newTalent);
            renderTalentsCards();

            state.notifications.unshift({
                id: Date.now(),
                type: "user",
                title: "New Talent Registered",
                desc: `${name} has joined the voice actor registry roster.`,
                time: "Just now",
                unread: true
            });
            renderNotifications();
        });
    }

    if (elements.talentsCardsContainer) {
        elements.talentsCardsContainer.addEventListener('click', (e) => {
            const playBtn = e.target.closest('.play-toggle-btn');
            if (playBtn) {
                const wrapper = playBtn.closest('.audio-player-wrapper');
                if (wrapper) {
                    const isPlaying = wrapper.classList.contains('playing');
                    
                    elements.talentsCardsContainer.querySelectorAll('.audio-player-wrapper.playing').forEach(el => {
                        if (el !== wrapper) {
                            el.classList.remove('playing');
                            el.querySelector('.play-icon').innerHTML = `<polygon points="5 3 19 12 5 21 5 3"/>`;
                        }
                    });

                    if (isPlaying) {
                        wrapper.classList.remove('playing');
                        playBtn.querySelector('.play-icon').innerHTML = `<polygon points="5 3 19 12 5 21 5 3"/>`;
                    } else {
                        wrapper.classList.add('playing');
                        playBtn.querySelector('.play-icon').innerHTML = `<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>`;
                    }
                }
            }
        });
    }

    function updateKPICounters() {
        if (elements.valTotalCustomers) elements.valTotalCustomers.textContent = state.customers.length.toLocaleString();
        
        let sumRevenue = state.projects.reduce((accum, p) => accum + p.amount, 40000); 
        if (elements.valTotalRevenue) elements.valTotalRevenue.textContent = `$${sumRevenue.toLocaleString()}`;
        
        if (elements.valTotalOrders) elements.valTotalOrders.textContent = (state.projects.length + 300).toString();
    }

    if (elements.btnQuickNewJob) {
        elements.btnQuickNewJob.addEventListener('click', () => {
            if (elements.quickJobModal) elements.quickJobModal.classList.add('show');
        });
    }
    
    function closeModal() {
        if (elements.quickJobModal) elements.quickJobModal.classList.remove('show');
        if (elements.formQuickJob) elements.formQuickJob.reset();
    }
    
    if (elements.modalCloseBtn) elements.modalCloseBtn.addEventListener('click', closeModal);
    if (elements.modalCancelBtn) elements.modalCancelBtn.addEventListener('click', closeModal);
    
    if (elements.quickJobModal) {
        elements.quickJobModal.addEventListener('click', (e) => {
            if (e.target === elements.quickJobModal) {
                closeModal();
            }
        });
    }

    if (elements.formQuickJob) {
        elements.formQuickJob.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const title = document.getElementById('job-title').value;
            const client = document.getElementById('job-client').value;
            const category = document.getElementById('job-category').value;
            const talent = document.getElementById('job-talent').value;
            const amount = parseFloat(document.getElementById('job-amount').value) || 0;
            const status = document.getElementById('job-status').value;
            
            const jobID = `VOX-${Math.floor(1000 + Math.random() * 9000)}`;
            const dateNow = new Date().toISOString().split('T')[0];
            
            state.projects.unshift({
                id: jobID,
                client: client,
                category: category,
                talent: talent,
                status: status,
                amount: amount,
                date: dateNow
            });
            
            renderOverviewTable();
            renderJobsTable();
            updateKPICounters();
            
            state.notifications.unshift({
                id: Date.now(),
                type: "upload",
                title: `Job ${jobID} Created`,
                desc: `Audio job for "${title}" (${client}) created successfully.`,
                time: "Just now",
                unread: true
            });
            
            renderNotifications();
            closeModal();
        });
    }

    function navigateToSection(targetId) {
        state.activeSection = targetId;
        
        if (targetId === 'jobs') {
            renderJobsTable();
        } else if (targetId === 'talents') {
            renderTalentsCards();
        }
        
        elements.navLinks.forEach(link => {
            if (link.getAttribute('data-target') === targetId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
        
        elements.sections.forEach(section => {
            const secId = section.getAttribute('id').replace('section-', '');
            if (secId === targetId) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
        
        if (window.innerWidth <= 1024 && elements.sidebar) {
            elements.sidebar.classList.remove('open');
        }

        setTimeout(() => {
            Object.values(charts).forEach(c => {
                if (c) c.resize();
            });
        }, 150);
    }

    elements.navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const target = link.getAttribute('data-target');
            navigateToSection(target);
        });
    });

    const brandLogos = document.querySelectorAll('.brand-logo-container');
    brandLogos.forEach(logo => {
        logo.addEventListener('click', (e) => {
            e.preventDefault();
            navigateToSection('overview');
        });
    });

    function navigateToSettingsSubtab(subtabId) {
        state.activeSettingsSubtab = subtabId;
        
        elements.subNavLinks.forEach(link => {
            if (link.getAttribute('data-subtab') === subtabId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
        
        elements.settingsPanes.forEach(pane => {
            const paneId = pane.getAttribute('id').replace('subtab-', '');
            if (paneId === subtabId) {
                pane.classList.add('active');
            } else {
                pane.classList.remove('active');
            }
        });
    }

    elements.subNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            const subtab = link.getAttribute('data-subtab');
            navigateToSettingsSubtab(subtab);
        });
    });

    if (elements.avatarFileInput) {
        elements.avatarFileInput.addEventListener('change', function(e) {
            const file = this.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(evt) {
                    if (elements.profileAvatarPreview) elements.profileAvatarPreview.src = evt.target.result;
                    if (elements.avatarHeaderImg) elements.avatarHeaderImg.src = evt.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
    }

    if (elements.profileSettingsForm) {
        elements.profileSettingsForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const fullname = document.getElementById('prof-fullname').value;
            const jobTitle = document.getElementById('prof-title').value;
            
            if (elements.profileNameSpan) elements.profileNameSpan.textContent = fullname;
            if (elements.profileDropdownName) elements.profileDropdownName.textContent = fullname;
            if (elements.profileRoleSpan) elements.profileRoleSpan.textContent = jobTitle;
            
            alert("Studio profile settings updated successfully!");
        });
    }

    if (elements.accountSettingsForm) {
        elements.accountSettingsForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("Account credentials and alert preferences saved successfully!");
        });
    }

    function toggleTheme() {
        state.theme = state.theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', state.theme);
        initTheme();
        updateChartsThemeColors();
    }
    
    if (elements.themeToggleBtn) {
        elements.themeToggleBtn.addEventListener('click', toggleTheme);
    }
    
    if (elements.themeChoiceLight) {
        elements.themeChoiceLight.addEventListener('click', () => {
            if (state.theme !== 'light') toggleTheme();
        });
    }
    if (elements.themeChoiceDark) {
        elements.themeChoiceDark.addEventListener('click', () => {
            if (state.theme !== 'dark') toggleTheme();
        });
    }

    function toggleDirection() {
        state.dir = state.dir === 'ltr' ? 'rtl' : 'ltr';
        initDir();
        Object.values(charts).forEach(c => {
            if (c) c.update();
        });
    }
    
    if (elements.rtlToggleBtn) {
        elements.rtlToggleBtn.addEventListener('click', toggleDirection);
    }
    
    if (elements.dirChoiceLtr) {
        elements.dirChoiceLtr.addEventListener('click', () => {
            if (state.dir !== 'ltr') toggleDirection();
        });
    }
    if (elements.dirChoiceRtl) {
        elements.dirChoiceRtl.addEventListener('click', () => {
            if (state.dir !== 'rtl') toggleDirection();
        });
    }

    if (elements.notificationBtn) {
        elements.notificationBtn.addEventListener('click', () => {
            toggleDropdown(elements.notificationDropdown);
        });
    }
    if (elements.profileBtn) {
        elements.profileBtn.addEventListener('click', () => {
            toggleDropdown(elements.profileDropdown);
        });
    }

    if (elements.themeToggleBtnMobile) {
        elements.themeToggleBtnMobile.addEventListener('click', toggleTheme);
    }
    if (elements.rtlToggleBtnMobile) {
        elements.rtlToggleBtnMobile.addEventListener('click', toggleDirection);
    }

    if (elements.notificationBtnMobile) {
        elements.notificationBtnMobile.addEventListener('click', () => {
            if (elements.mobileNotificationsPanel) {
                elements.mobileNotificationsPanel.classList.toggle('hidden');
            }
        });
    }

    if (elements.markAllReadBtnMobile) {
        elements.markAllReadBtnMobile.addEventListener('click', () => {
            state.notifications.forEach(n => n.unread = false);
            renderNotifications();
        });
    }

    if (elements.notificationListMobile) {
        elements.notificationListMobile.addEventListener('click', (e) => {
            const item = e.target.closest('.dropdown-item');
            if (item) {
                const id = parseInt(item.getAttribute('data-id'));
                const notif = state.notifications.find(n => n.id === id);
                if (notif) {
                    notif.unread = false;
                    renderNotifications();
                }
            }
        });
    }

    elements.logoutBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const choice = confirm("Are you sure you want to sign out of VOX Studio Admin Dashboard?");
            if (choice) {
                alert("Redirecting to client landing portal login screen.");
            }
        });
    });

    function getThemeColors() {
        const isDark = state.theme === 'dark';
        return {
            accentOrange: '#F59E0B',
            accentOrangeTranslucent: 'rgba(245, 158, 11, 0.1)',
            gridColor: isDark ? '#27272A' : '#E9ECEF',
            textColor: isDark ? '#9CA3AF' : '#495057',
            whiteDarkInvert: isDark ? '#FFFFFF' : '#0A0A0B',
            bgSecondary: isDark ? '#121214' : '#FFFFFF',
            barColors: [
                '#F59E0B', 
                isDark ? '#27272A' : '#E9ECEF', 
                isDark ? '#3F3F46' : '#CED4DA',
                isDark ? '#52525B' : '#ADB5BD'
            ],
            lineColors: {
                revenue: '#F59E0B',
                profit: isDark ? '#FFFFFF' : '#0A0A0B'
            }
        };
    }

    function initPerformanceCharts() {
        if (typeof Chart === 'undefined') return;
        
        const colors = getThemeColors();
        
        Chart.defaults.font.family = 'Inter';
        Chart.defaults.font.size = 11;
        Chart.defaults.color = colors.textColor;

        const elLine = document.getElementById('overview-line-chart');
        if (elLine) {
            const ctxLine = elLine.getContext('2d');
            charts.overviewLine = new Chart(ctxLine, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    datasets: [
                        {
                            label: 'Total Revenue ($)',
                            data: [18000, 22000, 25000, 24000, 29000, 34230, 31000, 36000, 39000, 42000, 48000, 54230],
                            borderColor: colors.lineColors.revenue,
                            backgroundColor: 'transparent',
                            borderWidth: 3,
                            tension: 0.35,
                            pointRadius: 3,
                            pointHoverRadius: 6
                        },
                        {
                            label: 'Gross Profit ($)',
                            data: [12000, 15000, 18000, 16000, 21000, 25000, 22000, 27000, 29000, 31000, 37000, 41200],
                            borderColor: colors.lineColors.profit,
                            backgroundColor: 'transparent',
                            borderWidth: 2,
                            borderDash: [5, 5],
                            tension: 0.35,
                            pointRadius: 0,
                            pointHoverRadius: 4
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'top',
                            labels: {
                                boxWidth: 12,
                                color: colors.textColor
                            }
                        },
                        tooltip: {
                            padding: 12,
                            backgroundColor: colors.bgSecondary,
                            titleColor: colors.whiteDarkInvert,
                            bodyColor: colors.textColor,
                            borderColor: colors.gridColor,
                            borderWidth: 1
                        }
                    },
                    scales: {
                        x: {
                            grid: {
                                color: colors.gridColor
                            },
                            ticks: {
                                color: colors.textColor
                            }
                        },
                        y: {
                            grid: {
                                color: colors.gridColor
                            },
                            ticks: {
                                color: colors.textColor,
                                callback: value => '$' + value.toLocaleString()
                            }
                        }
                    }
                }
            });
        }

        const elDoughnut = document.getElementById('overview-doughnut-chart');
        if (elDoughnut) {
            const ctxDoughnut = elDoughnut.getContext('2d');
            charts.overviewDoughnut = new Chart(ctxDoughnut, {
                type: 'doughnut',
                data: {
                    labels: ['Commercial VO', 'Sound Design', 'Audiobook Narrating', 'Podcast Prod'],
                    datasets: [{
                        data: [45, 25, 18, 12],
                        backgroundColor: colors.barColors,
                        borderWidth: 2,
                        borderColor: colors.bgSecondary
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                boxWidth: 10,
                                padding: 12,
                                color: colors.textColor
                            }
                        },
                        tooltip: {
                            callbacks: {
                                label: (context) => ` ${context.label}: ${context.raw}%`
                            }
                        }
                    },
                    cutout: '72%'
                }
            });
        }

        const elBar = document.getElementById('overview-bar-chart');
        if (elBar) {
            const ctxBar = elBar.getContext('2d');
            charts.overviewBar = new Chart(ctxBar, {
                type: 'bar',
                data: {
                    labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    datasets: [
                        {
                            label: 'Master Outputs (Hours)',
                            data: [120, 140, 110, 160, 190, 230],
                            backgroundColor: colors.accentOrange,
                            borderRadius: 4
                        },
                        {
                            label: 'Storage Rendered (GB)',
                            data: [420, 480, 390, 520, 680, 810],
                            backgroundColor: colors.barColors[2],
                            borderRadius: 4
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'top',
                            labels: {
                                boxWidth: 12,
                                color: colors.textColor
                            }
                        }
                    },
                    scales: {
                        x: {
                            grid: {
                                color: 'transparent'
                            },
                            ticks: {
                                color: colors.textColor
                            }
                        },
                        y: {
                            grid: {
                                color: colors.gridColor
                            },
                            ticks: {
                                color: colors.textColor
                            }
                        }
                    }
                }
            });
        }

        const elRevenue = document.getElementById('revenue-monthly-chart');
        if (elRevenue) {
            const ctxRevenue = elRevenue.getContext('2d');
            charts.revenueMonthly = new Chart(ctxRevenue, {
                type: 'bar',
                data: {
                    labels: ['Q1 Actual', 'Q1 Target', 'Q2 Actual', 'Q2 Target', 'Q3 Forecast', 'Q3 Target', 'Q4 Forecast', 'Q4 Target'],
                    datasets: [{
                        label: 'Cumulative Inflow ($)',
                        data: [65000, 60000, 119230, 110000, 165000, 160000, 220000, 200000],
                        backgroundColor: [
                            colors.accentOrange, colors.barColors[2],
                            colors.accentOrange, colors.barColors[2],
                            colors.accentOrangeTranslucent, colors.barColors[2],
                            colors.accentOrangeTranslucent, colors.barColors[2]
                        ],
                        borderColor: [
                            'transparent', 'transparent',
                            'transparent', 'transparent',
                            colors.accentOrange, 'transparent',
                            colors.accentOrange, 'transparent'
                        ],
                        borderWidth: 1.5,
                        borderRadius: 6
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        x: {
                            grid: {
                                color: 'transparent'
                            },
                            ticks: {
                                color: colors.textColor
                            }
                        },
                        y: {
                            grid: {
                                color: colors.gridColor
                            },
                            ticks: {
                                color: colors.textColor,
                                callback: value => '$' + value.toLocaleString()
                            }
                        }
                    }
                }
            });
        }

        const elPieFormat = document.getElementById('analytics-pie-format');
        if (elPieFormat) {
            const ctxPieFormat = elPieFormat.getContext('2d');
            charts.analyticsPie = new Chart(ctxPieFormat, {
                type: 'pie',
                data: {
                    labels: ['WAV 24-bit', 'MP3 320kbps', 'FLAC lossless', 'AIFF master'],
                    datasets: [{
                        data: [62, 22, 10, 6],
                        backgroundColor: colors.barColors,
                        borderWidth: 1,
                        borderColor: colors.bgSecondary
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                boxWidth: 10,
                                padding: 12,
                                color: colors.textColor
                            }
                        }
                    }
                }
            });
        }
        const elBarTurnaround = document.getElementById('analytics-bar-turnaround');
        if (elBarTurnaround) {
            const ctxBarTurnaround = elBarTurnaround.getContext('2d');
            charts.analyticsBar = new Chart(ctxBarTurnaround, {
                type: 'bar',
                data: {
                    labels: ['Commercial VO', 'Sound Design', 'Audiobook Narrating', 'Podcast Production'],
                    datasets: [{
                        label: 'Avg. Turnaround Time (Hours)',
                        data: [12, 48, 72, 18],
                        backgroundColor: colors.accentOrange,
                        borderRadius: 4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        x: {
                            grid: {
                                color: 'transparent'
                            },
                            ticks: {
                                color: colors.textColor
                            }
                        },
                        y: {
                            grid: {
                                color: colors.gridColor
                            },
                            ticks: {
                                color: colors.textColor,
                                callback: value => value + ' hrs'
                            }
                        }
                    }
                }
            });
        }

        const elLineWorkload = document.getElementById('analytics-line-workload');
        if (elLineWorkload) {
            const ctxLineWorkload = elLineWorkload.getContext('2d');
            const initialLoadData = [12, 18, 15, 24, 21, 28, 32, 29, 38, 44, 42, 56];
            const initialLoadLabels = Array.from({ length: 12 }, (_, i) => `${(i + 1) * 5}m ago`);
            
            charts.analyticsLine = new Chart(ctxLineWorkload, {
                type: 'line',
                data: {
                    labels: initialLoadLabels,
                    datasets: [{
                        label: 'Jobs in Queue',
                        data: initialLoadData,
                        borderColor: colors.accentOrange,
                        backgroundColor: colors.accentOrangeTranslucent,
                        fill: true,
                        borderWidth: 2,
                        tension: 0.4,
                        pointRadius: 2
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        x: {
                            grid: {
                                color: colors.gridColor
                            },
                            ticks: {
                                color: colors.textColor
                            }
                        },
                        y: {
                            grid: {
                                color: colors.gridColor
                            },
                            ticks: {
                                color: colors.textColor
                            },
                            suggestedMax: 80
                        }
                    }
                }
            });
        }
    }

    function updateChartsThemeColors() {
        if (typeof Chart === 'undefined') return;
        
        const colors = getThemeColors();
        Chart.defaults.color = colors.textColor;

        Object.keys(charts).forEach(key => {
            const chartObj = charts[key];
            if (chartObj) {
                if (chartObj.options.scales) {
                    if (chartObj.options.scales.x) {
                        chartObj.options.scales.x.grid.color = colors.gridColor;
                        chartObj.options.scales.x.ticks.color = colors.textColor;
                    }
                    if (chartObj.options.scales.y) {
                        chartObj.options.scales.y.grid.color = colors.gridColor;
                        chartObj.options.scales.y.ticks.color = colors.textColor;
                    }
                }
                
                if (chartObj.options.plugins && chartObj.options.plugins.legend) {
                    if (chartObj.options.plugins.legend.labels) {
                        chartObj.options.plugins.legend.labels.color = colors.textColor;
                    }
                }

                if (chartObj.options.plugins && chartObj.options.plugins.tooltip) {
                    chartObj.options.plugins.tooltip.backgroundColor = colors.bgSecondary;
                    chartObj.options.plugins.tooltip.titleColor = colors.whiteDarkInvert;
                    chartObj.options.plugins.tooltip.bodyColor = colors.textColor;
                    chartObj.options.plugins.tooltip.borderColor = colors.gridColor;
                }

                if (key === 'overviewLine') {
                    chartObj.data.datasets[0].borderColor = colors.lineColors.revenue;
                    chartObj.data.datasets[1].borderColor = colors.lineColors.profit;
                }
                if (key === 'overviewDoughnut' || key === 'analyticsPie') {
                    chartObj.data.datasets[0].backgroundColor = colors.barColors;
                    chartObj.data.datasets[0].borderColor = colors.bgSecondary;
                }
                if (key === 'overviewBar') {
                    chartObj.data.datasets[0].backgroundColor = colors.accentOrange;
                    chartObj.data.datasets[1].backgroundColor = colors.barColors[2];
                }
                if (key === 'revenueMonthly') {
                    chartObj.data.datasets[0].backgroundColor = [
                        colors.accentOrange, colors.barColors[2],
                        colors.accentOrange, colors.barColors[2],
                        colors.accentOrangeTranslucent, colors.barColors[2],
                        colors.accentOrangeTranslucent, colors.barColors[2]
                    ];
                    chartObj.data.datasets[0].borderColor = [
                        'transparent', 'transparent',
                        'transparent', 'transparent',
                        colors.accentOrange, 'transparent',
                        colors.accentOrange, 'transparent'
                    ];
                }
                if (key === 'analyticsBar') {
                    chartObj.data.datasets[0].backgroundColor = colors.accentOrange;
                }
                if (key === 'analyticsLine') {
                    chartObj.data.datasets[0].borderColor = colors.accentOrange;
                    chartObj.data.datasets[0].backgroundColor = colors.accentOrangeTranslucent;
                }

                chartObj.update();
            }
        });
    }

    function startWorkloadSimulation() {
        setInterval(() => {
            const chartObj = charts.analyticsLine;
            if (chartObj && state.activeSection === 'analytics') {
                const data = chartObj.data.datasets[0].data;
                data.shift();
                const lastVal = data[data.length - 1];
                const variance = Math.floor(Math.random() * 17) - 8;
                const newVal = Math.max(10, Math.min(75, lastVal + variance));
                data.push(newVal);
                chartObj.update('quiet');
            }
        }, 3000);
    }

    renderOverviewTable();
    renderNotifications();
    renderCustomersTable();
    renderJobsTable();
    renderTalentsCards();
    updateKPICounters();
    
    try {
        initPerformanceCharts();
        startWorkloadSimulation();
    } catch (err) {
        console.error("Dashboard performance charts failed to initialize:", err);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}
