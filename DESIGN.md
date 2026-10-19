---
name: Jay Lord Ibe · Departures
description: A bright station concourse carrying one live split-flap departures board.
colors:
  concourse: "#f3f4f1"
  panel: "#ffffff"
  ink: "#121212"
  ink-2: "#464a50"
  rule: "#121212"
  hairline: "#d3d6d0"
  yellow: "#ffc917"
  yellow-ink-2: "#574400"
  blue: "#0b3d91"
  blue-deep: "#082d6b"
  blue-ink: "#f3f4f1"
  blue-ink-2: "#bccae8"
  board: "#0e0e0d"
  tile-top: "#252523"
  tile-bottom: "#1b1b19"
  tile-ink: "#f2efe6"
  tile-yellow: "#ffc917"
  line-blue: "#0b3d91"
  line-red: "#d63a2a"
  line-green: "#0d7f4f"
  l-yellow: "#ffc917"
  l-white: "#f3f4f1"
  l-sky: "#8fd0ff"
  l-green: "#5fd99a"
  l-coral: "#ff8a78"
typography:
  display:
    fontFamily: "Big Shoulders Display, Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(3rem, 8vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.005em"
  display-boarding:
    fontFamily: "Big Shoulders Display, Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(4rem, 13vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.86
  headline:
    fontFamily: "Big Shoulders Display, Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(2rem, 4.4vw, 3.6rem)"
    fontWeight: 800
    lineHeight: 0.95
  title:
    fontFamily: "Big Shoulders Display, Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(1.5rem, 2.3vw, 2rem)"
    fontWeight: 800
    lineHeight: 1
  lede:
    fontFamily: "Barlow, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.25rem, 1.9vw, 1.6rem)"
    fontWeight: 500
    lineHeight: 1.4
  body:
    fontFamily: "Barlow, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "tnum"
  label:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.1em"
  label-column:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.18em"
  flap:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "calc(100cqi / var(--n) * 1.12)"
    fontWeight: 600
    lineHeight: 1
rounded:
  focus: "2px"
  control: "3px"
  sign: "4px"
  board-sm: "5px"
  frame: "8px"
  board: "clamp(6px, 1vw, 12px)"
  tile: "max(2px, 5cqi / var(--n))"
  disc: "50%"
spacing:
  wrap: "1280px"
  gutter: "clamp(16px, 4vw, 48px)"
  sign-h: "64px"
  section: "clamp(80px, 11vw, 160px)"
  section-head: "clamp(32px, 5vw, 64px)"
  flap-gap: "max(2px, calc(7% / var(--n)))"
components:
  sign-cta:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.yellow}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "10px 16px"
  sign-cta-hover:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.blue-ink}"
  copy-button:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.yellow}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "12px 18px"
  copy-button-hover:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.blue-ink}"
  boarding-strip:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sign}"
    padding: "18px 22px"
  mark:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sign}"
    size: "40px"
  flap-tile:
    backgroundColor: "{colors.tile-top}"
    textColor: "{colors.tile-ink}"
    typography: "{typography.flap}"
    rounded: "{rounded.tile}"
  flap-tile-signal:
    backgroundColor: "{colors.tile-top}"
    textColor: "{colors.tile-yellow}"
  ticket-link:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    padding: "20px 4px"
  ticket-link-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.yellow}"
    padding: "20px 16px"
  line-bullet:
    textColor: "{colors.blue-deep}"
    rounded: "{rounded.disc}"
    size: "44px"
  station-now:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
    padding: "22px 14px"
---

# Design System: Jay Lord Ibe · Departures

## Overview

**Creative North Star: "The Concourse Departures Board"**

The page is a bright station concourse: cool platform-white floor, ink type, full-width rules, and one mounted split-flap board hanging from the ceiling at the top. Everything that carries information speaks in the vocabulary of transit signage: departures with codes and sectors, routes drawn as lines with stops, a timetable, a network map of coloured lines, a boarding call. The board's dark tile material is the only dark object on the concourse; its family (the mini board in the sign bar, the code, sector and year boards, the portrait frame, the footer) all share it.

Colour is committed, not sprinkled. Signal yellow and platform blue arrive as whole flooded sections that cut hard against the concourse, the way a station paints whole walls in line colour. Type runs in two voices plus a signage label: a condensed display face for names and headings, a highway-sign grotesk for reading, and a condensed uppercase label for every piece of wayfinding. Hierarchy comes from case, size and rule weight, not from boxes.

Motion is mechanical. Tiles flip leaf by leaf through the drum in order; routes and lines draw themselves in left to right with stops popping on in sequence. Nothing floats, glows or fades in for decoration. With reduced motion, everything renders settled.

**Key Characteristics:**
- One dark object family (the board material) on a light concourse.
- Whole-section colour floods in yellow and blue with hard edges.
- Condensed display face + grotesk body + condensed uppercase labels.
- Transit-native structures: split-flap rows, route lines with stops, timetable rows, network lines, ticket rows.
- Full-width 2px ink rules and 1px hairlines instead of cards.
- Mechanical, ordered motion that is fully removed under reduced motion.

## Colors

A cool light concourse, a black-tile board, and two signage fields (yellow, blue) used as floods; small line colours only ever mark routes.

### Primary
- **Signal Yellow** (`yellow`): the boarding colour. Floods the contact section, fills the current timetable row, the "Now boarding" strip and the mark, and lights the second board row and current-year tiles (`tile-yellow`, same value). Also the selection colour and the hover/CTA text colour on ink.
- **Yellow Field Ink** (`yellow-ink-2`): secondary text on yellow fields (strip destination, boarding lede, ticket handles, current-row note).

### Secondary
- **Platform Blue** (`blue`): floods the network section; also the global focus ring, the hover state of ink buttons, and the Selected-work blue route (`line-blue`, same value).
- **Deep Platform Blue** (`blue-deep`): letters inside line bullets and the rings around stops on the blue field.
- **Blue Field Ink** (`blue-ink`, equal to the concourse) and **Blue Field Ink 2** (`blue-ink-2`): primary and secondary text on blue.

### Tertiary
- **Route colours on light** (`line-blue`, `line-red`, `line-green`): one per project, carried in the `--line` custom property on each departure; they paint only the 8px route track and terminus rings, never text.
- **Network colours on blue** (`l-yellow`, `l-white`, `l-sky`, `l-green`, `l-coral`): one per stack line, carried in `--c`; they paint the line track and the round bullet only.

### Neutral
- **Concourse** (`concourse`): page background, sign bar, text on blue.
- **Panel White** (`panel`): fill of route stop discs.
- **Ink** (`ink`, and `rule` at the same value): body text, 2px rules, ink buttons, footer field.
- **Ink 2** (`ink-2`): secondary copy and column labels on the concourse.
- **Hairline** (`hairline`): 1px dividers between timetable rows and profile facts.
- **Board** (`board`), **Tile Top** (`tile-top`), **Tile Bottom** (`tile-bottom`), **Tile Ink** (`tile-ink`): the split-flap material. The upper half of a tile is a touch lighter than the lower, and a 1px black hinge line splits them.

### Named Rules
**The Flood Rule.** Yellow and blue are applied as whole-section floods or whole-row fills with hard edges, never as tints, gradients or soft washes. A section is either concourse, blue or yellow.

**The One Dark Object Rule.** Dark surfaces are reserved for the board material and its family (mini board, code/sector/year boards, portrait frame) plus the ink controls and footer. No dark cards or dark sections elsewhere.

**The Yellow Is A Field Rule.** Signal yellow never sets type directly on the concourse (1.4:1). It appears as a field under ink type, or as type on ink, board or blue.

**The Line Colour Rule.** Route and network colours mark tracks, terminus rings and bullets only; text stays ink, concourse or tile ink.

## Typography

**Display Font:** Big Shoulders Display (with Barlow Condensed, Arial Narrow)
**Body Font:** Barlow 400/500/600 (with Helvetica Neue, Arial)
**Label Font:** Barlow Condensed 600 (with Arial Narrow)

**Character:** A tall, condensed signage display face for names and headings, paired with a highway-sign grotesk that reads cleanly at length. The condensed label voice handles all wayfinding: nav, column heads, tags, codes and the flap tiles themselves. All three are self-hosted WOFF2 with `font-display: swap`; display and label are preloaded.

### Hierarchy
- **Display** (800, uppercase): section headings. Profile heading runs a step smaller (clamp(2.6rem, 5.6vw, 5rem), line-height .92); the contact heading uses **display-boarding**, and the email address runs at 800 clamp(2.2rem, 7vw, 5.6rem).
- **Headline** (800, uppercase): departure (project) names.
- **Title** (800, uppercase): timetable roles; network line names at clamp(1.6rem, 2.6vw, 2.2rem); ticket names at 1.6rem; the boarding strip label at clamp(1.9rem, 3vw, 2.6rem).
- **Lede** (500): the hero positioning sentence (max 34ch) and the boarding lede (clamp(1.15rem, 1.6vw, 1.35rem), max 40ch).
- **Body** (400, tabular numerals on): paragraphs, max 52 to 62ch. Section-head intros at 1.15rem in ink-2.
- **Label** (600, uppercase, .06em to .12em tracking): nav, buttons, via lines, operators, route stops (1rem), network stops (.95rem), footer (.95rem).
- **Label Column** (600, uppercase, .16em to .18em tracking): table column heads, board head, profile fact terms.
- **Flap** (600, uppercase): tile glyphs sized from the row's own inline size.

### Named Rules
**The Case Carries Hierarchy Rule.** Display and label voices are always uppercase; body copy is always sentence case. Weight 800 belongs to the display face only.

**The Three Voices Rule.** Every text element uses exactly one of display, body or condensed label. No fourth face, no monospace, no italics.

## Layout

A single centred column (max `wrap` plus two `gutter`s) on the concourse; flooded sections run edge to edge with their content back inside the wrap. A sticky 64px sign bar sits over everything; anchor scrolling is padded by the bar height plus 16px. Sections breathe on the `section` rhythm (clamp(80px, 11vw, 160px)) and open with a two-column section head: the display heading on the left, a short intro in a column up to 28rem on the right, bottom-aligned.

Data is set as tables without boxes: fixed first column for the flap code or years board, flexible content columns, and 2px ink rules between rows. Departures run four columns (120px code, destination, up to 15rem via, 172px sector); the timetable runs four (168px years, role, operator, note); network lines run two (15rem name, track).

Responsive behaviour:
- **1080px:** departure and timetable column labels disappear and rows fold to two columns (code/years plus content stacked); network name column narrows to 12rem.
- **860px:** section heads, hero foot, profile and ticket grid go single column; network lines turn vertical, the track running down the left edge with labels beside each stop.
- **720px:** the wide board swaps for a narrow board with re-flowed rows (8 and 13 tiles); nav text links hide, leaving the mark, mini board and Contact CTA; routes turn vertical; timetable rows go single column; ticket handles hide.
- **400px:** mini board narrows to 168px and the mark to 36px.

## Elevation & Depth

The concourse is flat: rules and floods do the structural work. Depth appears only on physical objects: the hung board, the framed portrait, and the boarding strip, each with a long, low, soft drop as if lit from above, plus the tiles' own small bevel. Ink rings (inset 2px) outline the mark and boarding strip as a printed border, not an offset shadow.

### Shadow Vocabulary
- **Hung board** (`0 1px 0 #3a3a37 inset, 0 40px 60px -30px rgba(18,18,18,.55), 0 12px 24px -12px rgba(18,18,18,.35)`): the hero board only, with two 4px ceiling hangers above it.
- **Framed portrait** (`0 40px 60px -34px rgba(18,18,18,.55)`): the portrait frame.
- **Tile bevel** (`0 1px 0 rgba(255,255,255,.05), 0 2px 3px rgba(0,0,0,.5)`): every flap tile.
- **Boarding strip** (`inset 0 0 0 2px ink, 0 14px 24px -14px rgba(87,68,0,.6)`; hover `0 22px 30px -16px rgba(87,68,0,.7)` with a 2px lift): the primary hero action.

### Named Rules
**The Mounted Object Rule.** Only things that would physically hang or sit in a station (the board, the framed portrait, the boarding strip) cast shadows. Rows, sections and text never do.

## Shapes

Signage geometry: rectangles with small, tight radii and perfect circles. Controls and photo corners take 3px, signs and the mark 4px, small boards 5px, the portrait frame 8px, the hero board clamp(6px, 1vw, 12px), and tiles scale their radius with the row (max(2px, 5cqi / n)). Stops, bullets and terminus rings are full circles; route and line tracks are 8px bars with 4px rounded ends. Borders are 2px ink rules (structural) or 1px hairlines (within a group); on blue, rules are concourse at 22% opacity.

## Components

### Split-flap row (signature)
Mechanical, ordered, tactile. A row is a grid of `--n` equal tiles where `--n` equals the row's `data-length` (the script writes it inline; CSS values are pre-script defaults). Gaps are percent of the row (`flap-gap`), and the row is an inline-size container so glyph size and tile radius resolve in `cqi` against the row itself. Tiles are .7 aspect, upper half `tile-top`, lower half `tile-bottom`, 1px black hinge line. Small boards (mini, code, sector, years) wrap their row in `board` with 4 to 6px padding and 4 to 5px radius. Rows that stack in one board share one `data-length` so columns align. Before the script runs, a plain `flap-fallback` line shows the text as signage.

### Hero board
Full-width hung board: board head in label-column (Departures, local time in yellow), an xl row of 12 and two rows of 22 (the second in yellow). Narrow board: rows of 8 and 13.

### Sign bar
Sticky concourse bar: yellow mark with ink ring, mini board naming the current section (flips on scroll), condensed nav with a 2px underline that wipes in from the left on hover and for `aria-current`, and an ink Contact CTA. A 2px ink rule appears under the bar once the page scrolls.

### Buttons
- **Ink control** (sign CTA, copy button): ink field, yellow label, 3px radius; hover switches to blue field with concourse text; copy button presses to scale(.97) and holds blue while "Copied".
- **Boarding strip** (primary action): yellow sign with ink ring, display label, condensed destination line in yellow-ink-2, 34px arrow that slides 6px on hover; lifts 2px on hover.
- **Text links** (hero links): condensed label with icon; 2px underline appears on hover.

### Route line
An ordered list of six stops under each departure: an 8px track in the departure's line colour, 22px panel discs with a 5px ink ring, termini ringed in line colour with an outer 3px ink ring, last stop right-aligned. Vertical below 720px.

### Network line
On blue: a 44px disc bullet in the line colour holding the line's initial in display 800 deep blue, then an 8px track with 18px concourse stops ringed in deep blue. Labels alternate above and below the track. Current stops are yellow with a double ring and a small yellow "now" label. Vertical below 860px.

### Timetable
Rows of years board, role (title), operator (label) and note (body ink-2), divided by hairlines inside 2px ink top and bottom rules. The current service row is a yellow field with yellow tiles.

### Ticket links
Two-column list of rows bounded by 2px ink rules: icon, display name, handle (yellow-ink-2), arrow. Hover floods the row ink with yellow text and widens its side padding from 4px to 16px; the arrow nudges 4px.

### Focus
3px solid blue outline at 3px offset with 2px radius; yellow on blue and ink fields.

### Motion grammar
- **Flip:** each tile steps forward through the character drum to its target (walks capped at 5 to 11 steps); a flip is 70 to 100ms, the upper leaf falling on an ease-in and the lower leaf landing with a slight overshoot. Tiles in a row stagger 34ms (60ms on code/sector boards, 28ms on the mini board); hero rows start 250ms after fonts load, 220ms apart.
- **Draw-in:** tracks scale from zero along their axis over 1.4s on `ease-out`; stops pop in 110ms apart, labels rise 8px and fade in. Triggered once on entering view.
- **Portrait reveal:** clip-path wipes up over 1.3s on `ease-in-out`.
- **Board recede:** where scroll-driven animation is supported, the board scales to .94 and dims as it leaves view.
- **Reduced motion:** the script never adds the `motion` class, so tracks, stops and the portrait render drawn; tiles render settled with no flipping; transitions are cut to .01ms and animations removed.

## Do's and Don'ts

### Do:
- **Do** flood whole sections in yellow or blue with hard edges, and keep every other section on the concourse.
- **Do** present any short code, year, sector or status as a split-flap row, with `--n` equal to its `data-length` and glyphs sized in `cqi`.
- **Do** draw sequences and systems as lines with stops: 8px track, round stops, coloured termini.
- **Do** set structured data as ruled rows (2px ink between groups, 1px hairline within), not cards.
- **Do** keep wayfinding text in the condensed uppercase label voice with .06em to .18em tracking.
- **Do** keep motion mechanical and ordered, and render everything settled when reduced motion is requested.

### Don't:
- **Don't** add dark sections, dark cards or a dark mode; the board family is the only dark material.
- **Don't** use pill chips, badges or tag clouds for skills or tech; stacks are stops on a line.
- **Don't** use glass, backdrop blur, glows or gradient hero fields.
- **Don't** set signal yellow type on the concourse.
- **Don't** cast shadows from rows, sections or text; only mounted objects carry depth.
- **Don't** add a fourth typeface, monospace or italic.
- **Don't** fade or float elements in for decoration; motion is flips and draw-ins only.
