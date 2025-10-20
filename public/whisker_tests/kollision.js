const SPRITE = 'Cat Flying';
const ROEHRE1 = 'Röhre1';
const ROEHRE2 = 'Röhre2';
const Y_MIN = -180; // Boden
const Y_MAX =  180; // Decke

// ===== Test 1: Kollision mit Röhre1 (oben) stoppt alles =====
const Koll_Roehre1_Stoppt = async function (t) {
  t.greenFlag();
  await t.runForSteps(8);
  t.assume.ok(t.isProjectRunning(), 'Projekt läuft nicht nach Start.');

  const s  = t.getSprite(SPRITE);
  const r1 = t.getSprite(ROEHRE1);
  t.assume.ok(s && r1, `Sprites "${SPRITE}" oder "${ROEHRE1}" fehlen.`);

  // Oben an die Röhre setzen (nicht Mitte, dort ist das Loch)
  const offsetY = 200;
  t.dragSprite(SPRITE, r1.x, r1.y + offsetY);
  await t.runForSteps(2);

  if (s.isTouchingSprite) {
    t.assume.ok(s.isTouchingSprite(ROEHRE1), `Berührung mit "${ROEHRE1}" wurde nicht erkannt.`);
  }

  await t.runUntil(() => !t.isProjectRunning(), 1500);
  t.assert.ok(!t.isProjectRunning(), 'Projekt wurde nach Kollision mit Röhre1 nicht gestoppt.');
};

// ===== Test 2: Kollision mit Röhre2 (unten) stoppt alles =====
const Koll_Roehre2_Stoppt = async function (t) {
  t.greenFlag();
  await t.runForSteps(8);
  t.assume.ok(t.isProjectRunning(), 'Projekt läuft nicht nach Start.');

  const s  = t.getSprite(SPRITE);
  const r2 = t.getSprite(ROEHRE2);
  t.assume.ok(s && r2, `Sprites "${SPRITE}" oder "${ROEHRE2}" fehlen.`);

  // Unten an die Röhre setzen (nicht Mitte, dort ist das Loch)
  const offsetY = -60;
  t.dragSprite(SPRITE, r2.x, r2.y + offsetY);
  await t.runForSteps(2);

  if (s.isTouchingSprite) {
    t.assume.ok(s.isTouchingSprite(ROEHRE2), `Berührung mit "${ROEHRE2}" wurde nicht erkannt.`);
  }

  await t.runUntil(() => !t.isProjectRunning(), 1500);
  t.assert.ok(!t.isProjectRunning(), 'Projekt wurde nach Kollision mit Röhre2 nicht gestoppt.');
};

// ===== Test 3: Kollision mit dem Boden stoppt alles =====
const Koll_Boden_Stoppt = async function (t) {
  t.greenFlag();
  await t.runForSteps(8);
  t.assume.ok(t.isProjectRunning(), 'Projekt läuft nicht nach Start.');

  const s = t.getSprite(SPRITE);
  t.assume.ok(s, `Sprite "${SPRITE}" existiert nicht.`);

  // Leicht unter den Boden ziehen
  t.dragSprite(SPRITE, s.x, Y_MIN - 5);
  await t.runForSteps(2);

  await t.runUntil(() => !t.isProjectRunning(), 1500);
  t.assert.ok(!t.isProjectRunning(), 'Projekt wurde nach Boden-Kollision nicht gestoppt.');
};

// ===== Test 4: Kollision mit der Decke stoppt alles =====
const Koll_Decke_Stoppt = async function (t) {
  t.greenFlag();
  await t.runForSteps(8);
  t.assume.ok(t.isProjectRunning(), 'Projekt läuft nicht nach Start.');

  const s = t.getSprite(SPRITE);
  t.assume.ok(s, `Sprite "${SPRITE}" existiert nicht.`);

  // Leicht über die Decke ziehen
  t.dragSprite(SPRITE, s.x, Y_MAX + 5);
  await t.runForSteps(2);

  await t.runUntil(() => !t.isProjectRunning(), 1500);
  t.assert.ok(!t.isProjectRunning(), 'Projekt wurde nach Decken-Kollision nicht gestoppt.');
};

module.exports = [
  {
    test: Koll_Roehre1_Stoppt,
    name: 'Kollision mit Röhre1 (oben)',
    description: 'Berührt Cat Flying die obere Kante von „Röhre1“, wird das Programm gestoppt.',
    categories: []
  },
  {
    test: Koll_Roehre2_Stoppt,
    name: 'Kollision mit Röhre2 (unten)',
    description: 'Berührt Cat Flying die untere Kante von „Röhre2“, wird das Programm gestoppt.',
    categories: []
  },
  {
    test: Koll_Boden_Stoppt,
    name: 'Kollision mit Boden',
    description: 'Berührt Cat Flying den Boden, wird das Programm gestoppt.',
    categories: []
  },
  {
    test: Koll_Decke_Stoppt,
    name: 'Kollision mit Decke',
    description: 'Berührt Cat Flying die Decke, wird das Programm gestoppt.',
    categories: []
  }
];
