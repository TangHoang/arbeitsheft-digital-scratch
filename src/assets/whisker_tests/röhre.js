function getGlobalsOnStage(t) {
  const stage = t.getStage();
  return (stage.getVariables && stage.getVariables()) || [];
}
function getGlobalByName(t, name) {
  return getGlobalsOnStage(t).find(v => v.name === name);
}
function approxEqual(a, b, tol = 1) {
  return Math.abs(a - b) <= tol;
}
function isGone(sprite) {
  return (!sprite.visible) || (sprite.x < -260);
}

const ZufallszahlBereich = async function (t) {
  const VAR = 'Zufallszahl';

  t.greenFlag();
  await t.runForSteps(10);

  const v = getGlobalByName(t, VAR);
  t.assume.ok(v, `Globale Variable "${VAR}" nicht gefunden.`);

  const val = Number(v.value);
  t.log(`${VAR} = ${val}`);
  t.assert.greaterOrEqual(val, -25, `"${VAR}" ist zu klein: ${val} < -25.`);
  t.assert.lessOrEqual(val, 50, `"${VAR}" ist zu groß: ${val} > 50.`);
};

const RoehrenMindestabstand = async function (t) {
  const R1 = 'Röhre1';
  const R2 = 'Röhre2';
  const MIN_GAP = 220;   // Min-Abstand
  const STEPS = 50;     // Beobachtungsdauer
  const CHUNK = 5;       // 5er-Steps 

  t.greenFlag();
  await t.runForSteps(10);

  const r1 = t.getSprite(R1);
  const r2 = t.getSprite(R2);
  t.assume.ok(r1 && r2, `Sprites "${R1}" und/oder "${R2}" fehlen.`);

  for (let s = 0; s < STEPS; s += CHUNK) {
    await t.runForSteps(CHUNK);
    const gap = Math.abs(r2.x - r1.x);

    t.assert.greaterOrEqual(
      gap, MIN_GAP,
      `Mindestabstand verfehlt bei Step ~${s + CHUNK}: Abstand=${gap}px < ${MIN_GAP}px.`
    );
  }
  t.log(`Mindestabstand ≥ ${MIN_GAP}px über ${STEPS} Steps eingehalten.`);
};

const RoehrenNichtGleichzeitigVerschwinden = async function (t) {
  const R1 = 'Röhre1';
  const R2 = 'Röhre2';
  const MAX_CHECK_STEPS = 100;
  const CHUNK = 4;

  t.greenFlag();
  await t.runForSteps(10);

  const r1 = t.getSprite(R1);
  const r2 = t.getSprite(R2);
  t.assume.ok(r1 && r2, `Sprites "${R1}" und/oder "${R2}" fehlen.`);

  for (let executed = 0; executed < MAX_CHECK_STEPS; executed += CHUNK) {
    await t.runForSteps(CHUNK);

    const g1 = isGone(r1);
    const g2 = isGone(r2);

    if (g1 || g2) {
      t.log(`Verschwinden erkannt bei ~Step ${executed + CHUNK}: ${R1} gone=${g1}, ${R2} gone=${g2}`);
      t.assert.not(
        g1 && g2,
        'Beide Röhren verschwinden gleichzeitig – im Flappy-Bird-Kontext unerwünscht.'
      );
      return; 
    }
  }

  t.log(`Innerhalb ${MAX_CHECK_STEPS} Steps ist keine Röhre verschwunden – Gleichzeitigkeit damit ausgeschlossen.`);
};

const RoehrenYBewegung = async function (t) {
  const R1 = 'Röhre1';
  const R2 = 'Röhre2';

  const CHUNK = 5;       
  const MAX_STEPS = 100; 
  const DELTA_MIN = 1;    
  t.greenFlag();
  await t.runForSteps(10); 

  const r1 = t.getSprite(R1);
  const r2 = t.getSprite(R2);
  t.assume.ok(r1 && r2, `Sprites "${R1}" und/oder "${R2}" fehlen.`);

  const y1_0 = r1.y;
  const y2_0 = r2.y;
  t.log(`Start: ${R1}.y=${y1_0}, ${R2}.y=${y2_0}`);

  let r1Changed = false;
  let r2Changed = false;

  for (let s = 0; s < MAX_STEPS; s += CHUNK) {
    await t.runForSteps(CHUNK);

    if (!r1Changed && Math.abs(r1.y - y1_0) >= DELTA_MIN) {
      r1Changed = true;
      t.log(`${R1} y-Änderung bei ~Step ${s + CHUNK}: ${y1_0} → ${r1.y}`);
    }
    if (!r2Changed && Math.abs(r2.y - y2_0) >= DELTA_MIN) {
      r2Changed = true;
      t.log(`${R2} y-Änderung bei ~Step ${s + CHUNK}: ${y2_0} → ${r2.y}`);
    }

    if (r1Changed && r2Changed) break;
  }

  t.assert.ok(r1Changed, `${R1} hat seine y-Position innerhalb ${MAX_STEPS} Steps nicht merklich geändert (Δ<${DELTA_MIN}).`);
  t.assert.ok(r2Changed, `${R2} hat seine y-Position innerhalb ${MAX_STEPS} Steps nicht merklich geändert (Δ<${DELTA_MIN}).`);
};

module.exports = [
  {
    test: ZufallszahlBereich,
    name: 'Zufallszahl-Bereich',
    description: '„Zufallszahl“ existiert und liegt zwischen −25 und 50.',
    categories: []
  },
  {
    test: RoehrenMindestabstand,
    name: 'Mindestabstand Röhren',
    description: 'Während des Spiels bleibt der horizontale Abstand ≥ 220 px.',
    categories: []
  },
  {
    test: RoehrenNichtGleichzeitigVerschwinden,
    name: 'Nicht gleichzeitig verschwinden',
    description: 'Wenn eine Röhre verschwindet, ist die andere im selben Step noch sichtbar/im Bild.',
    categories: []
  },
  {
    test: RoehrenYBewegung,
    name: 'Röhren vertikale Bewegung',
    description: 'Prüft, ob sich die y-Position von Röhre1 und Röhre2 nach einiger Zeit ändert.',
    categories: []
  }
];
