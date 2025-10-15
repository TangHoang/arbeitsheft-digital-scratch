const HighscoreTest = async function (t) {
    const VAR_POINTS = 'Punkte';
    const VAR_HIGHSCORE = 'Highscore';

    t.greenFlag();
    await t.runForSteps(10);

    const stage = t.getStage();
    const getGlobals = () => (stage.getVariables && stage.getVariables()) || [];
    const getG = (name) => getGlobals().find(v => v.name === name);

    const listForLog = getGlobals().map(v => ({ name: v.name, value: v.value }));
    t.log('Globale Variablen: ' + JSON.stringify(listForLog));

    const punkteVar = getG(VAR_POINTS);
    const highscoreVar = getG(VAR_HIGHSCORE);

    t.assume.ok(punkteVar, `Globale Variable "${VAR_POINTS}" nicht gefunden.`);
    t.assume.ok(highscoreVar, `Globale Variable "${VAR_HIGHSCORE}" nicht gefunden.`);

    t.setGlobalVariable(VAR_POINTS, 0);
    t.setGlobalVariable(VAR_HIGHSCORE, 0);
    await t.runForSteps(2);

    t.log(`Init: punkte=${getG(VAR_POINTS).value}, highscore=${getG(VAR_HIGHSCORE).value}`);

    // --- Punkte = 5 -> neuer Highscore = 5 ---
    t.setGlobalVariable(VAR_POINTS, 5);
    await t.runForSteps(2);
    t.assert.equal(
        getG(VAR_HIGHSCORE).value,
        5,
        `Highscore wurde nicht auf 5 gesetzt (ist ${getG(VAR_HIGHSCORE).value}).`
    );

    // Punkte = 2 -> Highscore bleibt 5 ---
    t.setGlobalVariable(VAR_POINTS, 2);
    await t.runForSteps(2);
    t.assert.equal(
        getG(VAR_HIGHSCORE).value,
        5,
        `Highscore sollte 5 bleiben (ist ${getG(VAR_HIGHSCORE).value}).`
    );

    // --- Punkte = 10 -> erhöhter Highscore = 10 ---
    t.setGlobalVariable(VAR_POINTS, 10);
    await t.runForSteps(2);
    t.assert.equal(
        getG(VAR_HIGHSCORE).value,
        10,
        `Highscore sollte auf 10 steigen (ist ${getG(VAR_HIGHSCORE).value}).`
    );
};

module.exports = [
    {
        test: HighscoreTest,
        name: 'Highscore-Logik',
        description: 'Prüft, ob die globale Variable "highscore" immer den höchsten Wert von "punkte" speichert.',
        categories: []
    }
];
