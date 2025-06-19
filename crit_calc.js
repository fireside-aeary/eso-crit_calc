document.getElementById('calculateBtn').addEventListener('click', function() {
    // Get the values from the inputs
    const baseDamage = 50; // Base critical damage percentage
    const attribute1 = document.getElementById('attribute1').checked;
    const attribute2 = document.getElementById('attribute2').checked;
    const attribute3 = document.getElementById('attribute3').checked;
    const attribute4 = document.getElementById('attribute4').checked;
    const attribute5 = document.getElementById('attribute5').checked;
    const attribute6 = document.getElementById('attribute6').checked;
    const attribute7 = document.getElementById('attribute7').checked;
    const attribute8 = document.getElementById('attribute8').checked;
    const attribute9 = document.getElementById('attribute9').checked;
    const attribute10 = document.getElementById('attribute10').checked;
    const attribute11 = document.getElementById('attribute11').checked;
    const attribute12 = document.getElementById('attribute12').checked;
    const attribute13 = document.getElementById('attribute13').checked;
    const dwAxes = document.getElementById('dwAxes').value;
    const mediumArmor = document.getElementById('mediumArmor').value;
    const animalComp = document.getElementById('animalComp').value;

    // Calculate critical damage
    let criticalDamage = baseDamage;

    // Apply effects based on checkbox selections
    if (attribute1) {
        criticalDamage += 20; // Maj. Force (20%) - assuming 100% uptime
    }
    if (attribute2) {
        criticalDamage += 10; // Min. Force (10%)
    }
    if (attribute3) {
        criticalDamage += 10; // Min. Brittle (10%)
    }
    if (attribute4) {
        criticalDamage += 11; // Lucent Echoes (11%)
    }
    if (attribute5) {
        criticalDamage += 15; // Elemental Catalyst (15%)
    }
    if (attribute6) {
        criticalDamage += 12; // Sul-Xan (12%)
    }
    if (attribute7) {
        criticalDamage += 10; // Aedric Spear (10%)
    }
    if (attribute8) {
        criticalDamage += 10; // Assassination (10%)
    }
    if (attribute9) {
        criticalDamage += 12; // Herald of the Tome (12%)
    }
    if (attribute10) {
        criticalDamage += 10; // Backstabber (10%)
    }
    if (attribute11) {
        criticalDamage += 8; // Fighting Finesse (8%)
    }
    if (attribute12) {
        criticalDamage += 12; // Khajiit (12%)
    }
    if (attribute13) {
        criticalDamage += 10; // Harpooners (10%)
    }
    if (dwAxes) {
        dwAxesAmount = parseFloat(document.getElementById('dwAxes').value);
        criticalDamage += dwAxesAmount * 6; // Dual Wield Axes (6% per weapon)
    }
    if (mediumArmor) {
        mediumArmorAmount = parseFloat(document.getElementById('mediumArmor').value);
        criticalDamage += mediumArmorAmount * 2; // Medium Armor (2% per piece)
    }
    if (animalComp) {
        animalCompAmount = parseFloat(document.getElementById('animalComp').value);
        criticalDamage += animalCompAmount * 4; // Animal Companion (4% per ability)
    }

    // Display the result
    document.getElementById('result').textContent = `Critical Damage: ${criticalDamage}%`;
});
