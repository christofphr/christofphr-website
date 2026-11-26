// christofphr.com redesign draft: justified rows + click-to-enlarge viewer
(function () {
    // No right-click / drag on photos anywhere
    document.addEventListener('contextmenu', e => { if (e.target.tagName === 'IMG') e.preventDefault(); });
    document.addEventListener('dragstart', e => { if (e.target.tagName === 'IMG') e.preventDefault(); });

    const grid = document.querySelector('.rows');
    if (!grid) return;
    const tiles = Array.from(grid.querySelectorAll('.tile'));

    // ---- justified rows ----
    function layout() {
        const gap = parseFloat(getComputedStyle(grid).getPropertyValue('--gap')) || 8;
        const width = grid.clientWidth;
        const targetH = innerWidth > 968 ? 460 : innerWidth > 640 ? 340 : 240;
        let row = [], rowAr = 0, top = 0;

        function flush(last) {
            if (!row.length) return;
            const free = width - (row.length - 1) * gap;
            const h = last ? Math.min(targetH, free / rowAr) : free / rowAr;
            let left = 0;
            row.forEach(t => {
                const w = t._ar * h;
                Object.assign(t.style, { left: left + 'px', top: top + 'px', width: w + 'px', height: h + 'px' });
                left += w + gap;
            });
            top += h + gap;
            row = []; rowAr = 0;
        }

        tiles.forEach(t => {
            t._ar = parseFloat(t.dataset.ar) || 0.75;
            row.push(t); rowAr += t._ar;
            if (rowAr * targetH + (row.length - 1) * gap >= width) flush(false);
        });
        flush(true);
        grid.style.height = Math.max(0, top - gap) + 'px';
        grid.classList.add('ready');
    }
    layout();
    let raf;
    addEventListener('resize', () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(layout); });

    // ---- lightbox ----
    const lb = document.createElement('div');
    lb.className = 'lb';
    lb.setAttribute('role', 'dialog');
    lb.setAttribute('aria-modal', 'true');
    lb.innerHTML =
        '<img alt="">' +
        '<button class="lb-prev" aria-label="Previous photo">PREV</button>' +
        '<button class="lb-next" aria-label="Next photo">NEXT</button>' +
        '<button class="lb-close" aria-label="Close">CLOSE</button>' +
        '<div class="lb-count"></div>';
    document.body.appendChild(lb);
    const big = lb.querySelector('img');
    const count = lb.querySelector('.lb-count');
    let i = 0;

    function show(n) {
        i = (n + tiles.length) % tiles.length;
        const src = tiles[i].querySelector('img');
        big.src = src.currentSrc || src.src;
        big.alt = src.alt;
        count.textContent = (i + 1) + ' / ' + tiles.length;
    }
    function open(n) { show(n); lb.classList.add('open'); document.body.style.overflow = 'hidden'; }
    function close() { lb.classList.remove('open'); document.body.style.overflow = ''; }

    tiles.forEach((t, n) => {
        t.tabIndex = 0;
        t.addEventListener('click', () => open(n));
        t.addEventListener('keydown', e => { if (e.key === 'Enter') open(n); });
    });
    lb.querySelector('.lb-prev').onclick = e => { e.stopPropagation(); show(i - 1); };
    lb.querySelector('.lb-next').onclick = e => { e.stopPropagation(); show(i + 1); };
    lb.querySelector('.lb-close').onclick = close;
    lb.addEventListener('click', e => { if (e.target === lb) close(); });
    addEventListener('keydown', e => {
        if (!lb.classList.contains('open')) return;
        if (e.key === 'Escape') close();
        if (e.key === 'ArrowRight') show(i + 1);
        if (e.key === 'ArrowLeft') show(i - 1);
    });

    // swipe on touch screens
    let x0 = null;
    lb.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; }, { passive: true });
    lb.addEventListener('touchend', e => {
        if (x0 === null) return;
        const dx = e.changedTouches[0].clientX - x0;
        if (Math.abs(dx) > 40) show(i + (dx < 0 ? 1 : -1));
        x0 = null;
    });
})();
