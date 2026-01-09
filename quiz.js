const questions = [
    {
        question: "Welche Speichertechnologie hat weltweit die grösste installierte Kapazität?",
        options: ["Lithium-Ionen-Batterien", "Pumpspeicherkraftwerke", "Wasserstoff", "Druckluftspeicher"],
        correct: 1 // Pumpspeicher
    },
    {
        question: "Was ist ein 'Dunkelflaute'?",
        options: ["Ein Stromausfall in der Nacht", "Eine Zeit ohne Sonne und Wind", "Ein defekter Solarpark", "Ein tiefer Schacht für Erdwärme"],
        correct: 1
    },
    {
        question: "Wie hoch ist der Wirkungsgrad von Lithium-Ionen-Akkus etwa?",
        options: ["30-40%", "50-60%", "Über 95%", "100%"],
        correct: 2
    },
    {
        question: "Welchem Zweck dient die 'Sektorenkopplung'?",
        options: ["Verbindung verschiedener Stromkabel", "Nutzung von Strom in Verkehr & Wärme", "Fusion von Energiekonzernen", "Verbindung von Solarzellen"],
        correct: 1
    },
    {
        question: "Was wird in einem 'Power-to-Gas'-Prozess hergestellt?",
        options: ["Erdgas", "Wasserstoff oder synthetisches Methan", "Lachgas", "Helium"],
        correct: 1
    },
    {
        question: "Welches Metall ist kritisch für viele Lithium-Ionen-Batterien?",
        options: ["Eisen", "Kobalt", "Aluminium", "Kupfer"],
        correct: 1
    },
    {
        question: "Was ist ein Vorteil von LFP (Lithium-Eisenphosphat) Akkus?",
        options: ["Höhere Energiedichte als alle anderen", "Kein Kobalt & thermisch sicher", "Sie sind flüssig", "Sie leuchten im Dunkeln"],
        correct: 1
    },
    {
        question: "Wie wird Energie in einem Pumpspeicherkraftwerk gespeichert?",
        options: ["Als chemische Bindung", "Als Wärme im Wasser", "Als potentielle Energie (Lageenergie)", "Als Druckluft"],
        correct: 2
    },
    {
        question: "Was ist der Hauptnachteil von Wasserstoff als Speicher?",
        options: ["Man kann ihn nicht transportieren", "Geringer Wirkungsgrad (Strom-zu-Strom)", "Er ist zu schwer", "Er ist blau"],
        correct: 1
    },
    {
        question: "Wofür steht 'PCM' bei thermischen Speichern?",
        options: ["Power Control Module", "Phase Change Material", "Personal Computer Memory", "Pure Chemical Matter"],
        correct: 1
    },
    {
        question: "Welche Speichertechnologie reagiert am schnellsten auf Netzschwankungen?",
        options: ["Pumpspeicher", "Batterien / Supercaps", "Wasserstoff-Tanks", "Druckluftspeicher"],
        correct: 1
    },
    {
        question: "Wie lange halten Superkondensatoren (Supercaps) typischerweise?",
        options: ["100 Zyklen", "1.000 Zyklen", "Über 1.000.000 Zyklen", "Einmalige Nutzung"],
        correct: 2
    },
    {
        question: "Was passiert beim 'Thermal Runaway' einer Batterie?",
        options: ["Die Batterie friert ein", "Die Batterie überhitzt unkontrolliert", "Die Batterie läuft aus", "Die Batterie lädt zu schnell"],
        correct: 1
    },
    {
        question: "Welches Gas wird oft als 'Erdöl von morgen' bezeichnet?",
        options: ["Sauerstoff", "Stickstoff", "Wasserstoff", "Kohlendioxid"],
        correct: 2
    },
    {
        question: "Wo wird Druckluft in CAES-Anlagen gespeichert?",
        options: ["In Ballons", "In unterirdischen Kavernen", "In alten Bergwerken", "In Wassertanks"],
        correct: 1
    },
    {
        question: "Was ist ein Vorteil von 'Second-Life'-Batterien?",
        options: ["Sie sind nagelneu", "Sie schonen Ressourcen durch Weiterverwendung", "Sie haben doppelte Kapazität", "Sie sind leichter"],
        correct: 1
    },
    {
        question: "Welche Technologie trennt Leistung und Kapazität voneinander?",
        options: ["Lithium-Ionen", "Pumpspeicher", "Redox-Flow-Batterien", "Kondensatoren"],
        correct: 2
    },
    {
        question: "Warum braucht die Schweiz im Winter Importstrom?",
        options: ["Weil die Kabel gefrieren", "Geringere Flusspegel und weniger Sonne", "Weil die AKWs abgeschaltet sind", "Zu viel Verbrauch durch Weihnachtsbeleuchtung"],
        correct: 1
    },
    {
        question: "Was soll das Projekt Nant de Drance leisten?",
        options: ["Atomstrom produzieren", "Als riesige Batterie für Europa dienen", "Erdgas fördern", "Windenergie speichern"],
        correct: 1
    },
    {
        question: "Welches Material könnte Lithium in Zukunft ersetzen, da es billig und verfügbar ist?",
        options: ["Gold", "Natrium", "Platin", "Uran"],
        correct: 1
    },
    {
        question: "Was bedeutet 'adiabat' bei Druckluftspeichern?",
        options: ["Ohne Luft", "Wärme wird gespeichert und wiedergenutzt", "Unter Wasser", "Mit Erdgas-Zufeuerung"],
        correct: 1
    },
    {
        question: "Wie viel % der weltweiten Speicherkapazität sind Pumpspeicher?",
        options: ["Ca. 10%", "Ca. 50%", "Ca. 90%", "100%"],
        correct: 2
    },
    {
        question: "Was ist die Hauptaufgabe von Speichern im Stromnetz?",
        options: ["Strom teurer machen", "Angebot und Nachfrage ausgleichen (Balance)", "Verbrauch erhöhen", "Spannung verringern"],
        correct: 1
    },
    {
        question: "Welche Art von Speicher eignet sich am besten für saisonale Speicherung (Sommer->Winter)?",
        options: ["Batterien", "Chemische Speicher (Wasserstoff)", "Schwungräder", "Kondensatoren"],
        correct: 1
    },
    {
        question: "Was verbessert Festkörperbatterien gegenüber herkömmlichen?",
        options: ["Fester Elektrolyt (Sicherheit & Dichte)", "Flüssiges Metall", "Grösseres Gehäuse", "Niedrigere Spannung"],
        correct: 0
    },
    {
        question: "Welches Land nennt man oft das 'Wasserschloss Europas'?",
        options: ["Deutschland", "Frankreich", "Die Schweiz", "Norwegen"],
        correct: 2
    },
    {
        question: "Was ist ein 'Prosumer'?",
        options: ["Ein professioneller Verbraucher", "Jemand, der Energie produziert und konsumiert", "Ein Batteriehersteller", "Ein Stromzähler"],
        correct: 1
    },
    {
        question: "Wie nennt man die Glättung von Lastspitzen durch Speicher?",
        options: ["Peak Shaving", "Load Running", "Energy Cutting", "Power Lifting"],
        correct: 0
    },
    {
        question: "Welche physikalische Einheit misst die speicherbare Energiemenge?",
        options: ["Watt (W)", "Volt (V)", "Kilowattstunden (kWh)", "Ampere (A)"],
        correct: 2
    },
    {
        question: "Warum sind Speicher für die Energiewende unverzichtbar?",
        options: ["Weil sie schön aussehen", "Um fossile Kraftwerke als Backup zu ersetzen", "Um den Strompreis zu erhöhen", "Damit wir mehr Kabel bauen können"],
        correct: 1
    },
    {
        question: "Welches Material wird oft für Latentwärmespeicher (PCM) genutzt?",
        options: ["Metall", "Paraffin oder Wachs", "Holz", "Sand"],
        correct: 1
    },
    {
        question: "Was ist eine Schwäche von Superkondensatoren?",
        options: ["Lange Ladezeit", "Geringe Energiedichte", "Schlechter Wirkungsgrad", "Hohes gewicht"],
        correct: 1
    },
    {
        question: " Welches Unternehmen hat im Wallis eine 8-MW-Batterie installiert?",
        options: ["Alpiq", "Enalpin", "Swissgrid", "Solar Impulse"],
        correct: 1
    },
    {
        question: "Wie lange dauerte das Bewilligungsverfahren für die Batterie in Stalden?",
        options: ["2 Jahre", "5 Monate", "10 Jahre", "1 Woche"],
        correct: 1
    },
    {
        question: "Warum bauen Energieversorger wie die BKW grosse Batterien?",
        options: ["Nur für den Eigenbedarf", "Zum Handel mit Strompreisschwankungen", "Als Museumsstück", "Um Überschuss zu vernichten"],
        correct: 1
    },
    {
        question: "Welche bestehende Infrastruktur könnte für Wasserstoff genutzt werden?",
        options: ["Stromkabel", "Gasleitungen", "Telefonleitungen", "Abwasserrohre"],
        correct: 1
    },
    {
        question: "Welcher Speicher hat die theoretisch höchste Speicherdichte?",
        options: ["Schwungrad", "Chemische Speicher (H₂)", "Kondensator", "Li-Ionen"],
        correct: 1
    },
    {
        question: "Was bedeutet 'LFP' ausgeschrieben?",
        options: ["Lithium-Fluss-Power", "Lithium-Eisen-Phosphat", "Long-Form-Power", "Liquid-Fuel-Process"],
        correct: 1
    },
    {
        question: "Was ist die Hauptfunktion eines Elektrolyseurs?",
        options: ["Strom aus Gas machen", "Wasser in H₂ und O₂ spalten", "Wärme speichern", "Druckluft erzeugen"],
        correct: 1
    },
    {
        question: "Was zeichnet mechanische Schwungräder aus?",
        options: ["Sehr hohe Speicherkapazität", "Extrem schnelle Reaktionszeit (Leistung)", "Saisonale Speicherung", "Chemie-frei"],
        correct: 1
    },
    {
        question: "Wie wird der Wirkungsgrad von CAES-Anlagen verbessert?",
        options: ["Durch Nutzung der Kompressionswärme", "Durch Kühlung mit Eis", "Durch Zugabe von Benzin", "Durch Nutzung in der Nacht"],
        correct: 0
    },
    {
        question: "Was ist der Unterschied zwischen Batterie und Kondensator?",
        options: ["Farbe", "Batterie: Chemisch, Kondensator: Physikalisch (Feld)", "Batterie hält kürzer", "Kondensator ist schwerer"],
        correct: 1
    },
    {
        question: "Aus welchem häufigen Stoff bestehen die Ionen in Natrium-Ionen-Batterien?",
        options: ["Gold", "Kochsalz (Natriumchlorid)", "Sand", "Kohle"],
        correct: 1
    },
    {
        question: "Warum sind Festkörperbatterien sicherer?",
        options: ["Sie haben einen Feuerlöscher eingebaut", "Kein brennbarer flüssiger Elektrolyt", "Sie werden nicht heiss", "Sie bestehen aus Stahl"],
        correct: 1
    },
    {
        question: "Was bedeutet der Begriff 'Volatilität' bei Erneuerbaren?",
        options: ["Sie sind teuer", "Die Erzeugung schwankt je nach Wetter", "Sie sind gefährlich", "Sie sind giftig"],
        correct: 1
    },
    {
        question: "Welche Teilchen wandern im Li-Ion Akku?",
        options: ["Elektronen im Elektrolyt", "Lithium-Ionen", "Wasserstoff-Atome", "Neutronen"],
        correct: 1
    },
    {
        question: "Was ist das grösste Hindernis für neue Pumpspeicherkraftwerke?",
        options: ["Technik ist unbekannt", "Mangel an geeigneten Bergen/Tälern", "Zu wenig Wasser", "Zu geringer Wirkungsgrad"],
        correct: 1
    },
    {
        question: "Wie haben sich die Kosten für Li-Ionen-Speicher in 10 Jahren entwickelt?",
        options: ["Verdoppelt", "Gleich geblieben", "Um ca. 90% gesunken", "Leicht gestiegen"],
        correct: 2
    },
    {
        question: "Welchem Zweck dienen 'Virtuelle Kraftwerke'?",
        options: ["Computerspiele", "Vernetzung dezentraler Anlagen zu einem System", "Stromerzeugung im Metaverse", "Theoretische Forschung"],
        correct: 1
    },
    {
        question: "Was ist Grauer Wasserstoff?",
        options: ["Aus Erneuerbaren hergestellt", "Aus fossilen Brennstoffen (Erdgas) hergestellt", "Alt und staubig", "Aus Atomstrom"],
        correct: 1
    }
];

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let acceptingAnswers = false;

function startQuiz() {
    // Select 10 random questions
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    currentQuestions = shuffled.slice(0, 10);

    currentQuestionIndex = 0;
    score = 0;

    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('result-screen').style.display = 'none';
    document.getElementById('quiz-screen').style.display = 'block';

    // Show progress bar
    document.querySelector('.progress-bar').style.display = 'block';

    showQuestion();
}

function showQuestion() {
    const questionData = currentQuestions[currentQuestionIndex];
    document.getElementById('question').innerText = questionData.question;
    document.getElementById('question-counter').innerText = `Frage ${currentQuestionIndex + 1} von 10`;

    // Update progress bar
    const progress = ((currentQuestionIndex) / 10) * 100;
    document.getElementById('progress').style.width = `${progress}%`;

    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';

    // Create array with original index
    const optionsWithIndex = questionData.options.map((opt, i) => ({
        text: opt,
        originalIndex: i
    }));

    // Shuffle options
    optionsWithIndex.sort(() => Math.random() - 0.5);

    optionsWithIndex.forEach((optObj, index) => {
        const btn = document.createElement('div');
        btn.className = 'option-btn';
        btn.dataset.originalIndex = optObj.originalIndex; // Store original index
        btn.innerHTML = `<span style="font-weight:700; color:var(--primary-color)">${String.fromCharCode(65 + index)}</span> ${optObj.text}`;
        btn.onclick = () => checkAnswer(optObj.originalIndex, btn);
        optionsDiv.appendChild(btn);
    });

    acceptingAnswers = true;
}

function checkAnswer(originalIndex, btnElement) {
    if (!acceptingAnswers) return;
    acceptingAnswers = false;

    const questionData = currentQuestions[currentQuestionIndex];
    const correctIndex = questionData.correct;
    const allOptions = document.querySelectorAll('.option-btn');

    if (originalIndex === correctIndex) {
        btnElement.classList.add('correct');
        btnElement.innerHTML += ' <i class="fa-solid fa-check" style="margin-left:auto; color:#10b981"></i>';
        score++;
    } else {
        btnElement.classList.add('wrong');
        btnElement.innerHTML += ' <i class="fa-solid fa-xmark" style="margin-left:auto; color:#ef4444"></i>';

        // Highlight correct answer by finding the button with the correct original index
        allOptions.forEach(btn => {
            if (parseInt(btn.dataset.originalIndex) === correctIndex) {
                btn.classList.add('correct');
                btn.innerHTML += ' <i class="fa-solid fa-check" style="margin-left:auto; color:#10b981"></i>';
            }
        });
    }

    // Wait a moment before next question
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < 10) {
            showQuestion();
        } else {
            showResults();
        }
    }, 1500);
}

function showResults() {
    document.getElementById('quiz-screen').style.display = 'none';
    document.querySelector('.progress-bar').style.display = 'none';
    document.getElementById('result-screen').style.display = 'block';

    document.getElementById('score').innerText = score;

    const iconDiv = document.getElementById('result-icon');
    const feedbackText = document.getElementById('feedback-text');

    if (score === 10) {
        iconDiv.innerHTML = '<i class="fa-solid fa-trophy" style="color: gold;"></i>';
        feedbackText.innerText = "Perfekt! Du bist ein echter Energie-Experte!";
    } else if (score >= 8) {
        iconDiv.innerHTML = '<i class="fa-solid fa-star" style="color: silver;"></i>';
        feedbackText.innerText = "Super Ergebnis! Du kennst dich sehr gut aus.";
    } else if (score >= 5) {
        iconDiv.innerHTML = '<i class="fa-solid fa-thumbs-up" style="color: var(--primary-color);"></i>';
        feedbackText.innerText = "Gut gemacht! Du hast solides Basiswissen.";
    } else {
        iconDiv.innerHTML = '<i class="fa-solid fa-book-open" style="color: var(--secondary-color);"></i>';
        feedbackText.innerText = "Das war ein guter Anfang. Lies dir die Artikel noch einmal durch, um dein Wissen zu vertiefen!";
    }
}
