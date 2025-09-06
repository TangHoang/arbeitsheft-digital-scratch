const RoehrenBewegung = async function (t) {
    const r1 = t.getSprite('Röhre1');
    const r2 = t.getSprite('Röhre2');

    // Initialisierung prüfen
    t.assume.ok(r1 && r2, 'Sprites "röhre1" und/oder "röhre2" fehlen.');

    // warten
    await t.runForSteps(20);

    // Abstand messen
    const abstand = Math.abs(r1.x - r2.x);
    t.log(`Abstand zwischen röhre1 und röhre2: ${abstand}px`);

    const min_abstand = 200;

    // Test Mindestabstand
    t.assert.greaterOrEqual(
        abstand, min_abstand,
        `Abstand ist zu klein: ${abstand}px (mindestens ${min_abstand}px erwartet).`
    );
};

module.exports = [
    {
        test: RoehrenBewegung,
        name: 'Röhrenabstand',
        description: 'Haben Röhre1 und Röhre2 genug Abstand?',
        categories: []
    }
];