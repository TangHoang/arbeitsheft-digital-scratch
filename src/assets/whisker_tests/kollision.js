const KollisionsTest = async function (t) {
    const s = t.getSprite('Cat Flying');

    t.assume.ok(s, `Sprite 'Cat Flying' existiert nicht.`);

    // --- Boden Kollision ---
    t.dragSprite('Cat Flying', s.y, -200);  // unter den Boden ziehen    
    await t.runForSteps(5);

    t.assert.greaterOrEqual(
        s.y, -180,
        `Kollisionslogik Boden fehlt: Sprite ist unter dem Boden (y=${s.y}).`
    );
    t.log(`Boden-Test: Sprite.y=${s.y}`);

    // --- Decken Kollision  ---
    t.dragSprite('Cat Flying', s.y, 200);  // über die Decke ziehen    
    await t.runForSteps(5);

    t.assert.lessOrEqual(
        s.y, 180,
        `Kollisionslogik Decke fehlt: Sprite ist über der Decke (y=${s.y}).`
    );
    t.log(`Decken-Test: Sprite.y=${s.y}`);
};

module.exports = [
    {
        test: KollisionsTest,
        name: 'Kollision Boden & Decke',
        description: 'Prüft, ob Cat Flying nicht unter den Boden oder über die Decke gelangen kann.',
        categories: []
    }
];