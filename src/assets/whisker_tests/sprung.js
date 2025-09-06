const Kostuem = async function (t) {
    /* your code here */
    let sprite = t.getSprite('Cat Flying');
    await t.runForSteps(20);     // warten

    const expectedAfterPress = 'kostuem2';
    // --- Vorher ---
    const idxBefore = sprite.currentCostume;
    const nameBefore = sprite.getCostumeByIndex(idxBefore).name;
    t.log(`Vorheriges Kostüm: ${nameBefore}`)

    // --- Tastendruck simulieren ---
    t.keyPress('space');
    await t.runForSteps(2);     // warten
    t.keyRelease('space');

    //  Warten bis sich das Kostüm ändert
    await t.runUntil(() => {
        const idxNow = sprite.currentCostume;
        return idxNow !== idxBefore;
    }, /* timeout */ 1500);

    // --- Nachher ---
    const idxAfter = sprite.currentCostume;
    const nameAfter = sprite.getCostumeByIndex(idxAfter).name;
    t.log(`Neues Kostüm: ${nameAfter}`)

    // --- Tests ---
    t.assert.ok(idxAfter !== idxBefore, 'Kostüm hat sich nach Leertaste nicht geändert.');
    t.assert.equal(nameAfter, expectedAfterPress, `Kostüm ist nicht korrekt: erwartet '${expectedAfterPress}', aber erhalten '${nameAfter}'`)
}



module.exports = [

    {
        test: Kostuem,
        name: 'Bird Kostüm',
        description: 'Ändert sich das Kostüm?',
        categories: []
    }
];