const InitTest = async function (t) {
    const SPRITE = 'Cat Flying';

    t.greenFlag();
    await t.runForSteps(10);

    const s = t.getSprite(SPRITE);
    t.assume.ok(s, 'Sprite "' + SPRITE + '" existiert nicht.');
    t.log('Sprite "' + SPRITE + '" wurde gefunden.');
};

const SprungTest = async function (t) {
    const SPRITE = 'Cat Flying';

    t.greenFlag();
    await t.runForSteps(10);

    const s = t.getSprite(SPRITE);
    t.assume.ok(s, 'Sprite "' + SPRITE + '" existiert nicht.');

    const yBefore = s.y;

    t.keyPress('space');
    await t.runForSteps(6);
    t.keyRelease('space');

    const yAfter = s.y;
    t.log('y vorher=' + yBefore + ', y nach Space=' + yAfter);

    t.assert.greater(yAfter, yBefore, 'Sprite "' + SPRITE + '" sollte bei Space nach oben springen.');
};

const VariableTest = async function (t) {
    const VAR_VERT = 'Vertikale Änderung';

    t.greenFlag();
    await t.runForSteps(10);

    const stage = t.getStage();

    function getGlobals() {
        return (stage.getVariables && stage.getVariables()) || [];
    };

    function getG(name) {
        return getGlobals().find(function (v) { return v.name === name; });
    };

    const vertVar = getG(VAR_VERT);
    t.assume.ok(vertVar, 'Globale Variable "' + VAR_VERT + '" nicht gefunden.');
    t.log('Startwert "' + VAR_VERT + '": ' + vertVar.value);

    t.keyPress('space');
    await t.runForSteps(2);
    t.keyRelease('space');

    const vertVarNew = getG(VAR_VERT);
    t.log('Neuer Wert "' + VAR_VERT + '": ' + vertVarNew.value);

    t.assert.equal(
        Number(vertVarNew.value),
        15,
        'Variable "' + VAR_VERT + '" sollte beim Sprung 15 sein (ist ' + vertVarNew.value + ').'
    );
};

const KostuemTest = async function (t) {
    const SPRITE = 'Cat Flying';
    const EXPECTED_COSTUME = 'cat flying-b';

    t.greenFlag();
    await t.runForSteps(10);

    const s = t.getSprite(SPRITE);
    t.assume.ok(s, 'Sprite "' + SPRITE + '" existiert nicht.');

    const idxBefore = s.currentCostume;
    const nameBefore = s.getCostumeByIndex(idxBefore).name;
    t.log('Vorheriges Kostüm: ' + nameBefore);

    t.keyPress('space');
    await t.runForSteps(3);
    t.keyRelease('space');

    await t.runUntil(function () { return s.currentCostume !== idxBefore; }, 1500);

    const idxAfter = s.currentCostume;
    const nameAfter = s.getCostumeByIndex(idxAfter).name;
    t.log('Neues Kostüm: ' + nameAfter);

    t.assert.ok(idxAfter !== idxBefore, 'Kostüm hat sich nach Space nicht geändert.');
    t.assert.equal(
        nameAfter,
        EXPECTED_COSTUME,
        "Kostüm ist nicht korrekt: erwartet '" + EXPECTED_COSTUME + "', aber erhalten '" + nameAfter + "'."
    );
};

module.exports = [
    {
        test: InitTest,
        name: 'Init Sprite',
        description: 'Prüft, ob Cat Flying existiert.',
        categories: []
    },
    {
        test: SprungTest,
        name: 'Sprung Bewegung',
        description: 'Prüft, ob Cat Flying bei Space nach oben springt.',
        categories: []
    },
    {
        test: VariableTest,
        name: 'Vertikale Änderung',
        description: 'Prüft, ob die Variable "Vertikale Änderung" beim Sprung auf 15 gesetzt wird.',
        categories: []
    },
    {
        test: KostuemTest,
        name: 'Kostümwechsel',
        description: 'Prüft, ob Cat Flying beim Sprung das Kostüm zu "cat flying-b" wechselt.',
        categories: []
    }
];
