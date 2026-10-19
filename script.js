// Departures: split-flap boards, the live clock, section signage and reveals.

const CHARS = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+·&-.:/';
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduceMotion) {
    document.documentElement.classList.add('motion');
}

// ---------------------------------------------------------------------------
// Split-flap tiles
// ---------------------------------------------------------------------------

function createTile() {
    const tile = document.createElement('span');
    tile.className = 'tile';
    tile.innerHTML =
        '<span class="half top"><span></span></span>' +
        '<span class="half bottom"><span></span></span>' +
        '<span class="leaf leaf-top"><span></span></span>' +
        '<span class="leaf leaf-bottom"><span></span></span>';
    const [top, bottom, leafTop, leafBottom] = tile.querySelectorAll('.half > span, .leaf > span');
    tile._faces = { top, bottom, leafTop, leafBottom };
    tile._char = ' ';
    return tile;
}

function showChar(tile, char) {
    const { top, bottom, leafTop, leafBottom } = tile._faces;
    top.textContent = bottom.textContent = leafTop.textContent = leafBottom.textContent = char;
    tile._char = char;
}

// One mechanical flip: the upper leaf falls away, the next lower leaf lands.
// The characters advance on a timer, not on animation events, so a paused
// animation (background tab, screenshot tool) can never strand a tile mid-word.
function flipOnce(tile, next, duration) {
    const { top, bottom, leafTop, leafBottom } = tile._faces;
    const current = tile._char;
    top.textContent = next;
    bottom.textContent = current;
    leafTop.textContent = current;
    leafBottom.textContent = next;
    tile._char = next;
    tile.classList.add('flipping');

    const half = duration / 2;
    leafTop.parentElement.animate(
        [{ transform: 'rotateX(0deg)' }, { transform: 'rotateX(-90deg)' }],
        { duration: half, easing: 'cubic-bezier(.55, 0, 1, .45)', fill: 'both' }
    );
    leafBottom.parentElement.animate(
        [{ transform: 'rotateX(90deg)' }, { transform: 'rotateX(0deg)' }],
        { duration: half, delay: half, easing: 'cubic-bezier(.2, .9, .3, 1.25)', fill: 'both' }
    );

    return new Promise((resolve) => {
        setTimeout(() => {
            settleTile(tile, next);
            resolve();
        }, duration);
    });
}

function settleTile(tile, char) {
    tile.classList.remove('flipping');
    tile.querySelectorAll('.leaf').forEach((leaf) => leaf.getAnimations().forEach((a) => a.cancel()));
    showChar(tile, char);
}

// Real boards step through the drum in order, so each tile walks forward to
// the target from a few letters back. Walks never wrap past the blank, so the
// scramble shows letters and digits rather than punctuation.
async function runTile(tile, target, delay, token, replay = false) {
    await new Promise((resolve) => setTimeout(resolve, delay));
    if (tile._token !== token) return;
    const targetIndex = Math.max(0, CHARS.indexOf(target));
    const currentIndex = CHARS.indexOf(tile._char);
    const steps = 4 + Math.floor(Math.random() * 6);
    let index = currentIndex <= targetIndex && targetIndex - currentIndex <= steps && !replay
        ? currentIndex
        : Math.max(0, targetIndex - steps);
    showChar(tile, CHARS[index]);
    while (index < targetIndex) {
        if (tile._token !== token) return;
        index += 1;
        await flipOnce(tile, CHARS[index], 70 + Math.random() * 30);
    }
}

class FlapRow {
    constructor(el) {
        this.el = el;
        this.length = Number(el.dataset.length) || el.dataset.flap.length;
        el.style.setProperty('--n', this.length);
        el.textContent = '';
        // Rows render settled; only the hero board starts blank, because it
        // flips on load rather than waiting for an observer.
        const start = !reduceMotion && el.closest('.board') ? '' : el.dataset.flap;
        const chars = this.normalize(start);
        this.tiles = chars.map((char) => {
            const tile = createTile();
            showChar(tile, char);
            el.appendChild(tile);
            return tile;
        });
    }

    normalize(text) {
        return text.toUpperCase().padEnd(this.length, ' ').slice(0, this.length).split('')
            .map((char) => (CHARS.includes(char) ? char : ' '));
    }

    set(text, { stagger = 34, replay = false } = {}) {
        this.target = text;
        const chars = this.normalize(text);
        this.tiles.forEach((tile, i) => {
            const char = chars[i];
            if (reduceMotion) {
                showChar(tile, char);
                return;
            }
            if (!replay && tile._char === char && !tile.classList.contains('flipping')) return;
            const token = Symbol();
            tile._token = token;
            runTile(tile, char, i * stagger, token, replay);
        });
        // Whatever happens to timers and animations, the row reads correctly.
        const settleAt = this.length * stagger + 1600;
        clearTimeout(this.settleTimer);
        this.settleTimer = setTimeout(() => this.settle(chars), settleAt);
    }

    settle(chars) {
        this.tiles.forEach((tile, i) => {
            tile._token = null;
            settleTile(tile, chars[i]);
        });
    }
}

// ---------------------------------------------------------------------------
// Boot
// ---------------------------------------------------------------------------

const rows = new Map();
document.querySelectorAll('[data-flap]').forEach((el) => rows.set(el, new FlapRow(el)));

// Leaving the tab settles every board at once instead of resuming mid-flip.
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState !== 'hidden') return;
    rows.forEach((row) => {
        clearTimeout(row.settleTimer);
        row.settle(row.normalize(row.target ?? row.el.dataset.flap));
    });
});

const fontsReady = document.fonts ? document.fonts.ready : Promise.resolve();

fontsReady.then(() => {
    // The hero board settles first, row by row.
    // Only the rows laid out for this width (wide or narrow board) take part in the stagger.
    const boardRows = [...document.querySelectorAll('.board [data-flap]')].filter((el) => el.offsetParent !== null);
    document.querySelectorAll('.board [data-flap]').forEach((el) => {
        const rowIndex = boardRows.indexOf(el);
        if (rowIndex === -1) rows.get(el).set(el.dataset.flap);
        else setTimeout(() => rows.get(el).set(el.dataset.flap), 250 + rowIndex * 220);
    });
});

// Departure codes and sectors flip in when their row arrives on screen.
const depObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.querySelectorAll('[data-flap]').forEach((el, i) => {
            setTimeout(() => rows.get(el).set(el.dataset.flap, { stagger: 60, replay: true }), i * 180);
        });
        depObserver.unobserve(entry.target);
    });
}, { threshold: 0.35 });
document.querySelectorAll('.dep, .station').forEach((row) => depObserver.observe(row));

// Routes, network lines and the portrait draw in once.
const drawObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        drawObserver.unobserve(entry.target);
    });
}, { threshold: 0.3, rootMargin: '0px 0px -8% 0px' });
document.querySelectorAll('[data-draw]').forEach((el) => drawObserver.observe(el));

// The sign bar's board names the section you are standing in: the one
// crossing the middle of the viewport. Measured on scroll, load and anchor
// jumps so it never depends on an observer having fired.
const mini = document.querySelector('.flap-mini');
const navLinks = document.querySelectorAll('.sign-nav a');
const stations = [...document.querySelectorAll('[data-station]')];
let currentStation = null;
let stationFrame = 0;

function updateStation() {
    stationFrame = 0;
    const middle = window.innerHeight / 2;
    const active = stations.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= middle && rect.bottom > middle;
    }) || stations[0];
    if (active === currentStation) return;
    currentStation = active;
    rows.get(mini).set(active.dataset.station, { stagger: 28 });
    navLinks.forEach((link) => {
        if (link.getAttribute('href') === `#${active.id}`) link.setAttribute('aria-current', 'true');
        else link.removeAttribute('aria-current');
    });
}
const requestStation = () => { if (!stationFrame) stationFrame = requestAnimationFrame(updateStation); };
window.addEventListener('scroll', requestStation, { passive: true });
window.addEventListener('resize', requestStation);
window.addEventListener('hashchange', requestStation);
window.addEventListener('load', updateStation);
updateStation();

// Sign bar rule appears once the page moves.
const sign = document.getElementById('sign');
const onScroll = () => sign.classList.toggle('is-scrolled', window.scrollY > 8);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Local time on the board.
const clock = document.getElementById('clock');
const timeFormat = new Intl.DateTimeFormat(undefined, { hour: '2-digit', minute: '2-digit', hour12: false });
const tick = () => { clock.textContent = timeFormat.format(new Date()); };
tick();
setInterval(tick, 15000);

document.getElementById('year').textContent = new Date().getFullYear();

// Copy email.
const copyButton = document.querySelector('.copy');
const copyLabel = copyButton.querySelector('.copy-label');
const copyStatus = document.querySelector('.copy-status');
let copyTimer;
copyButton.addEventListener('click', async () => {
    clearTimeout(copyTimer);
    try {
        await navigator.clipboard.writeText(copyButton.dataset.copy);
        copyButton.classList.add('is-done');
        copyLabel.textContent = 'Copied';
        copyStatus.textContent = '';
    } catch {
        copyStatus.textContent = 'Copy blocked. Select the address above.';
    }
    copyTimer = setTimeout(() => {
        copyButton.classList.remove('is-done');
        copyLabel.textContent = 'Copy email';
        copyStatus.textContent = '';
    }, 2200);
});
