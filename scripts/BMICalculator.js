document.addEventListener('DOMContentLoaded', function() {
    const calculateButton = document.querySelector('.calculate-button');
    const clearButton = document.querySelector('.clear-button');
    const form = document.querySelector('.calculate-form');
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const ageInput = document.getElementById('age');
    const genderSelect = document.getElementById('gender');
    const resultOutput = document.getElementById('result');

     resultOutput.textContent = 'RESULT';
    resultOutput.classList.add('calculate-output--placeholder');

    // Funktion zum Hinzufügen/Entfernen der Fehlerklasse für alle Eingabefelder
    function toggleError(addError) {
        const inputs = [heightInput, weightInput, ageInput, genderSelect];
        inputs.forEach(input => {
            if (addError) {
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });
    }

    calculateButton.addEventListener('click', function() {
        // Überprüfen, ob alle Felder ausgefüllt sind
        const heightValue = heightInput.value.trim();
        const weightValue = weightInput.value.trim();
        const ageValue = ageInput.value.trim();
        const genderValue = genderSelect.value;

        if (!heightValue || !weightValue || !ageValue || !genderValue) {
           // Wenn nicht alle Felder ausgefüllt sind — roter Rahmen hinzufügen
            toggleError(true);
            return;
        }

        //Roter Rahmen entfernen, wenn alle Felder ausgefüllt sind, und placeholder-klasse entfernen
        toggleError(false);
        resultOutput.classList.remove('calculate-output--placeholder');

        // Werte abrufen (Alter und Geschlecht werden im BMI-Berechnung ignoriert, da sie tatsächlich nicht berücksichtigt werden)
        const heightCm = parseFloat(heightValue);
        const weightKg = parseFloat(weightValue);

        // Körpergröße in Meter umrechnen
        const heightM = heightCm / 100;

        // BMI berechnen
        const bmi = weightKg / (heightM * heightM);

        // Ergebnis ausgeben, gerundet auf 2 Dezimalstellen
        resultOutput.textContent = bmi.toFixed(2);
    });

    clearButton.addEventListener('click', function() {
        form.reset(); 
        resultOutput.textContent = ''; 
        toggleError(false);
        // placeholder für das Ausgabefeld wiederherstellen
        resultOutput.textContent = 'RESULT';
        resultOutput.classList.add('calculate-output--placeholder');
    });
});