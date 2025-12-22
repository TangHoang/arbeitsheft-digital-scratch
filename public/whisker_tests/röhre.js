function isBetween(val, min, max) {
  return val >= min && val <= max;
}

const CheckYPositionBereich = async function (t) {
  const R1 = 'Röhre1';
  const R2 = 'Röhre2';

  t.greenFlag();
  await t.runForSteps(1);

  const r1 = t.getSprite(R1);
  const r2 = t.getSprite(R2);
  t.assume.ok(r1 && r2, `Sprites "${R1}" und/oder "${R2}" fehlen.`);

  // Prüfung des Y-Zufallsbereichs [-25, 50]
  t.assert.greaterOrEqual(r1.y, -25, `Röhre1 y-Position (${r1.y}) ist zu niedrig (min -25).`);
  t.assert.lessOrEqual(r1.y, 50, `Röhre1 y-Position (${r1.y}) ist zu hoch (max 50).`);

  t.assert.greaterOrEqual(r2.y, -25, `Röhre2 y-Position (${r2.y}) ist zu niedrig (min -25).`);
  t.assert.lessOrEqual(r2.y, 50, `Röhre2 y-Position (${r2.y}) ist zu hoch (max 50).`);
};

const RoehrenAbstandMitToleranz = async function (t) {
  const R1 = 'Röhre1';
  const R2 = 'Röhre2';
  const TARGET_GAP = 250;
  const TOLERANCE = 30;

  t.greenFlag();
  await t.runForSteps(1);

  const r1 = t.getSprite(R1);
  const r2 = t.getSprite(R2);
  t.assume.ok(r1 && r2, `Sprites "${R1}" und/oder "${R2}" fehlen.`);

  const gap = Math.abs(r2.x - r1.x);
  const minGap = TARGET_GAP - TOLERANCE; // 220
  const maxGap = TARGET_GAP + TOLERANCE; // 280

  t.assert.ok(
    isBetween(gap, minGap, maxGap),
    `Der Abstand (${gap}px) liegt nicht im erlaubten Bereich von ${minGap}px bis ${maxGap}px.`
  );
  t.log(`Gemessener Abstand: ${gap}px (Erlaubt: ${TARGET_GAP} ± ${TOLERANCE}px)`);
};

const RoehrenYVeränderungTest = async function (t) {
  const R1 = 'Röhre1';
  const MAX_STEPS = 400;

  t.greenFlag();
  await t.runForSteps(5);

  const r1 = t.getSprite(R1);
  const startY = r1.y;
  let hatSichVerändert = false;

  t.log(`Start-Y von ${R1} ist ${startY}. Suche nach Veränderung...`);

  // Laufe solange (Schleife), bis MAX_STEPS erreicht sind
  for (let i = 0; i < MAX_STEPS; i++) {
    await t.runForSteps(1);

    if (r1.y !== startY) {
      hatSichVerändert = true;
      // Test bestanden, wenn Veränderung eintritt
      t.log(`Test bestanden! Y hat sich verändert: ${startY} -> ${r1.y}`);
      return;
    }
  }

  t.assert.fail(
    `Test nicht bestanden: Der Y-Wert von ${R1} hat sich innerhalb von ${MAX_STEPS} Steps nicht verändert.`
  );
};

module.exports = [
  {
    test: CheckYPositionBereich,
    name: 'Y-Zufallsbereich',
    description: 'Prüft, ob die y-Position zwischen -25 und 50 liegt.',
    categories: []
  },
  {
    test: RoehrenAbstandMitToleranz,
    name: 'Abstand (Toleranz +/- 30)',
    description: 'Prüft, ob der Abstand der Röhren ca. 250px beträgt.',
    categories: []
  },
  {
    test: RoehrenYVeränderungTest,
    name: "Roehren wechseln ihre Höhe",
    description: "Prüft, ob sich die Höhe der Röhren wie gefordert ändern."
  }
];