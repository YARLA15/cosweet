/**
 * CoSweet - Organic Coconut Sugar Landing Page
 * Interactive Animations & Application Logic
 */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. MOBILE NAVIGATION MENU
    // ==========================================
    const mobileMenuBtn = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu when any nav link is clicked
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // ==========================================
    // 2. NAVBAR SCROLL STYLING & SHADOW
    // ==========================================
    const navbar = document.getElementById('navbar');

    // ==========================================
    // 3. SCROLL PROGRESS BAR & BACK TO TOP
    // ==========================================
    const progressBar = document.getElementById('scroll-progress');
    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

        // Navbar blur and elevation (Unified Single Header)
        if (navbar) {
            if (scrollTop > 20) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }

        // Progress bar fill
        if (progressBar) {
            progressBar.style.width = scrollPercent + '%';
        }

        // Back-to-top visibility
        if (backToTopBtn) {
            if (scrollTop > 350) {
                backToTopBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
                backToTopBtn.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
            } else {
                backToTopBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
                backToTopBtn.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
            }
        }
    }, { passive: true });

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ==========================================
    // 4. ACTIVE NAVBAR SCROLLSPY
    // ==========================================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function updateScrollspy() {
        let currentSectionId = '';
        const scrollPos = window.scrollY + 180;

        sections.forEach(sec => {
            const top = sec.offsetTop;
            const height = sec.offsetHeight;
            if (scrollPos >= top && scrollPos < top + height) {
                currentSectionId = sec.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active-nav');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active-nav');
            }
        });
    }

    window.addEventListener('scroll', updateScrollspy, { passive: true });
    updateScrollspy();

    // ==========================================
    // 5. SCROLL-TRIGGERED REVEAL ANIMATIONS
    // ==========================================
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -30px 0px'
    });

    document.querySelectorAll('.reveal-on-scroll, .reveal-left, .reveal-right, .reveal-zoom').forEach(el => {
        revealObserver.observe(el);
    });


    // ==========================================
    // 7. INTERACTIVE 3D TILT EFFECT ON CARDS
    // ==========================================
    const tiltCards = document.querySelectorAll('.tilt-card');
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((centerY - y) / centerY) * 7;
            const rotateY = ((x - centerX) / centerX) * 7;

            card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-6px) scale3d(1.02, 1.02, 1.02)`;
            card.style.boxShadow = '0 20px 30px -10px rgba(45, 74, 34, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            card.style.boxShadow = '';
        });
    });

    // ==========================================
    // 8. DESKTOP HERO PARALLAX MOUSE-TRACKING
    // ==========================================
    const heroSection = document.getElementById('home');
    const heroImageContainer = document.getElementById('hero-image-container');
    const heroBgImg = document.getElementById('hero-bg-img');

    if (heroSection && heroImageContainer && window.innerWidth >= 1024) {
        heroSection.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            const offsetX = (clientX - centerX) / centerX;
            const offsetY = (clientY - centerY) / centerY;

            heroImageContainer.style.transform = `translate(${offsetX * 12}px, ${offsetY * 12}px)`;
            if (heroBgImg) {
                heroBgImg.style.transform = `scale(1.05) translate(${offsetX * -6}px, ${offsetY * -6}px)`;
            }
        });

        heroSection.addEventListener('mouseleave', () => {
            heroImageContainer.style.transform = '';
            if (heroBgImg) {
                heroBgImg.style.transform = 'scale(1.05)';
            }
        });
    }

    // ==========================================
    // 9. KEYBOARD MODAL CONTROLS (ESCAPE KEY)
    // ==========================================
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeNewsModal();
        }
    });

    // Inisialisasi tampilan berita dari file berita-data.js
    renderNewsGrid();
});

// ==========================================
// 10. SISTEM PUSAT BERITA & EDUKASI DINAMIS
// ==========================================

// Helper: Cari data artikel berdasarkan id
function findArticle(identifier) {
    const list = window.BERITA_DATA || (typeof BERITA_DATA !== 'undefined' ? BERITA_DATA : []);
    if (!list || !list.length) return null;
    if (!identifier) return list[0];

    // Dukungan format lama: 'news-modal-1' -> 'berita-1'
    if (typeof identifier === 'string' && identifier.startsWith('news-modal-')) {
        const num = identifier.replace('news-modal-', '');
        identifier = 'berita-' + num;
    }

    return list.find(b => b.id === identifier || b.id === 'berita-' + identifier) || list[0];
}

// Render daftar kartu berita di halaman utama (#news-grid) langsung dari berita-data.js
function renderNewsGrid() {
    const container = document.getElementById('news-grid');
    if (!container) return;

    const list = window.BERITA_DATA || (typeof BERITA_DATA !== 'undefined' ? BERITA_DATA : []);
    if (!list || list.length === 0) return;

    container.innerHTML = list.map(item => `
        <article class="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition duration-300 group flex flex-col cursor-pointer" onclick="openNewsModal('${item.id}')">
            <div class="h-56 overflow-hidden relative">
                <img src="${item.gambar}" alt="${item.judul}" class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
                <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-forest font-bold px-3 py-1 rounded-md text-sm shadow-sm flex items-center gap-1.5">
                    <i class="fa-solid ${item.kategoriIcon || 'fa-tag'} text-xs"></i> ${item.kategori}
                </div>
            </div>
            <div class="p-8 flex-1 flex flex-col justify-between">
                <div>
                    <p class="text-sage text-sm font-semibold mb-3 flex items-center gap-2">
                        <i class="fa-regular fa-calendar"></i> ${item.tanggal}
                    </p>
                    <h3 class="font-bold text-xl text-forest mb-4 hover:text-caramel transition font-heading leading-snug">
                        ${item.judul}
                    </h3>
                    <p class="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">
                        ${item.ringkasan}
                    </p>
                </div>
                <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                    <button type="button" class="text-forest font-bold hover:text-caramel transition flex items-center gap-2 group-hover:translate-x-2 text-left text-sm">
                        Baca Selengkapnya <i class="fa-solid fa-arrow-right-long"></i>
                    </button>
                    <span class="text-xs text-gray-400 font-medium"><i class="fa-regular fa-clock mr-1"></i>${item.waktuBaca || '4 Menit Baca'}</span>
                </div>
            </div>
        </article>
    `).join('');
}

// Render blok-blok isi konten artikel menjadi HTML rapi
function renderKontenBlocks(konten) {
    if (typeof konten === 'string') {
        return konten;
    }
    if (!Array.isArray(konten)) {
        return '<p class="text-gray-600">Konten belum tersedia.</p>';
    }

    return konten.map(block => {
        switch (block.tipe) {
            case 'pembuka':
                return `<p class="font-medium text-gray-800 text-lg sm:text-xl leading-relaxed mb-5">${block.teks}</p>`;
            case 'paragraf':
                return `<p class="text-gray-700 leading-relaxed mb-5 text-base sm:text-lg">${block.teks}</p>`;
            case 'subjudul':
                return `<h2 class="text-xl sm:text-2xl font-heading font-bold text-forest pt-3 mb-3">${block.teks}</h2>`;
            case 'highlight':
                return `
                    <div class="bg-cream border-l-4 border-sage p-4 rounded-r-xl my-5">
                        <p class="text-sm sm:text-base text-gray-700 leading-relaxed">
                            ${block.judul ? `<strong>${block.judul}</strong> ` : ''}${block.teks}
                        </p>
                    </div>`;
            case 'list':
                return `
                    <ul class="list-disc pl-6 space-y-2 text-gray-700 my-5 text-base sm:text-lg">
                        ${(block.items || []).map(li => `<li>${li}</li>`).join('')}
                    </ul>`;
            case 'tips':
                return `
                    <div class="bg-forest/5 p-6 rounded-2xl border border-forest/15 my-6">
                        <h3 class="font-heading font-bold text-forest text-lg mb-2 flex items-center gap-2">
                            <i class="fa-solid ${block.icon || 'fa-lightbulb'} text-caramel"></i> ${block.judul || 'Tips Sehat:'}
                        </h3>
                        <p class="text-sm sm:text-base text-gray-600 leading-relaxed">${block.teks}</p>
                    </div>`;
            case 'grid-cards':
                return `
                    <div class="grid sm:grid-cols-2 gap-4 my-5">
                        ${(block.cards || []).map(c => `
                            <div class="bg-cream p-4 rounded-xl border border-gray-200">
                                <h4 class="font-bold text-forest text-sm mb-1 flex items-center gap-1.5">
                                    <i class="fa-solid ${c.icon} ${c.iconColor || 'text-caramel'}"></i> ${c.judul}
                                </h4>
                                <p class="text-xs sm:text-sm text-gray-600 leading-relaxed">${c.teks}</p>
                            </div>
                        `).join('')}
                    </div>`;
            case 'resep':
                return `
                    <div class="bg-forest/5 p-6 rounded-2xl border border-forest/15 my-6">
                        <p class="font-bold text-forest mb-2">${block.judul || 'Bahan-Bahan Utama:'}</p>
                        <ul class="text-sm text-gray-700 list-disc pl-5 space-y-1 mb-3">
                            ${(block.bahan || []).map(b => `<li>${b}</li>`).join('')}
                        </ul>
                        ${block.catatan ? `<p class="text-sm text-gray-600 italic">${block.catatan}</p>` : ''}
                    </div>`;
            default:
                return block.teks ? `<p class="text-gray-700 leading-relaxed mb-4">${block.teks}</p>` : '';
        }
    }).join('');
}

// Buka Modal Berita secara Dinamis
function openNewsModal(identifier) {
    const article = findArticle(identifier);
    if (!article) return;

    const modal = document.getElementById('news-modal');
    if (!modal) return;

    // Isi Badge Kategori & Waktu Baca
    const badgeEl = document.getElementById('news-modal-badge');
    if (badgeEl) {
        badgeEl.innerHTML = `<i class="fa-solid ${article.kategoriIcon || 'fa-tag'} mr-1"></i> ${article.kategori}`;
    }
    const readtimeEl = document.getElementById('news-modal-readtime');
    if (readtimeEl) {
        readtimeEl.innerHTML = `<i class="fa-regular fa-clock mr-1"></i> ${article.waktuBaca || '4 Menit Baca'}`;
    }

    // Isi Judul Artikel
    const titleEl = document.getElementById('news-modal-title');
    if (titleEl) titleEl.textContent = article.judul;

    // Isi Penulis
    const authorAvatarEl = document.getElementById('news-modal-author-avatar');
    if (authorAvatarEl) authorAvatarEl.textContent = article.inisialPenulis || 'CS';

    const authorNameEl = document.getElementById('news-modal-author-name');
    if (authorNameEl) authorNameEl.textContent = article.penulis;

    const authorDescEl = document.getElementById('news-modal-author-desc');
    if (authorDescEl) authorDescEl.textContent = article.keteranganPenulis;

    // Isi Gambar & Caption
    const imageEl = document.getElementById('news-modal-image');
    if (imageEl) {
        imageEl.src = article.gambar;
        imageEl.alt = article.judul;
    }
    const captionEl = document.getElementById('news-modal-caption');
    if (captionEl) captionEl.textContent = article.captionGambar || '';

    // Isi Konten Body
    const bodyEl = document.getElementById('news-modal-body');
    if (bodyEl) {
        bodyEl.innerHTML = renderKontenBlocks(article.konten);
    }

    // Update Share Buttons
    const encodedTitle = encodeURIComponent(article.judul);
    const currentUrl = encodeURIComponent(window.location.href);
    const waShare = document.getElementById('news-modal-share-wa');
    if (waShare) waShare.href = `https://wa.me/send?text=${encodedTitle}%20-%20Baca%20di%20CoSweet!%20${currentUrl}`;
    const fbShare = document.getElementById('news-modal-share-fb');
    if (fbShare) fbShare.href = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;
    const xShare = document.getElementById('news-modal-share-x');
    if (xShare) xShare.href = `https://twitter.com/intent/tweet?text=${encodedTitle}`;

    // Render Artikel Lainnya
    const relatedContainer = document.getElementById('news-modal-related');
    const list = window.BERITA_DATA || (typeof BERITA_DATA !== 'undefined' ? BERITA_DATA : []);
    if (relatedContainer && list.length > 0) {
        const others = list.filter(b => b.id !== article.id);
        relatedContainer.innerHTML = others.map(other => `
            <div onclick="switchNewsModal('${other.id}')" class="p-4 rounded-2xl bg-cream hover:bg-sage/15 transition cursor-pointer border border-gray-100 group">
                <span class="text-xs font-bold text-sage">${other.kategori}</span>
                <h4 class="font-bold text-forest group-hover:text-caramel transition text-sm mt-1 leading-snug">
                    ${other.judul} &rarr;
                </h4>
            </div>
        `).join('');
    }

    // Tampilkan Modal
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

// Tutup Modal Berita
function closeNewsModal() {
    const modal = document.getElementById('news-modal');
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = '';
    }
}

// Berpindah antar artikel di dalam modal
function switchNewsModal(targetId) {
    const modalContent = document.querySelector('#news-modal > div:last-child');
    if (modalContent) {
        modalContent.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setTimeout(() => {
        openNewsModal(targetId);
    }, 120);
}

// ==========================================
// 11. UTILITY SHARING & CLIPBOARD
// ==========================================

function copyArticleLink(btn) {
    const currentUrl = window.location.href;
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(currentUrl).then(() => {
            showCopiedFeedback(btn);
        }).catch(() => {
            fallbackCopy(currentUrl, btn);
        });
    } else {
        fallbackCopy(currentUrl, btn);
    }
}

function fallbackCopy(text, btn) {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    showCopiedFeedback(btn);
}

function showCopiedFeedback(btn) {
    const originalHTML = btn.innerHTML;
    btn.innerHTML = '<i class="fa-solid fa-check text-green-500"></i> <span class="text-green-600 font-bold">Tersalin!</span>';
    setTimeout(() => {
        btn.innerHTML = originalHTML;
    }, 2000);
}



