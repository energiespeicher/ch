const questions = [
    {
        question: "Welche Speichertechnologie hat weltweit die grösste installierte Kapazität?",
        options: ["Lithium-Ionen-Batterien", "Pumpspeicherkraftwerke", "Wasserstoff", "Druckluftspeicher"],
        correct: 1
    },
    {
        question: "Was versteht man unter einer 'Dunkelflaute'?",
        options: ["Ein Stromausfall in der Nacht", "Eine längere Zeit ohne Sonne und Wind", "Ein defekter Solarpark", "Einen tiefen Schacht für Erdwärme"],
        correct: 1
    },
    {
        question: "Wie hoch ist der Wirkungsgrad von Lithium-Ionen-Akkus etwa?",
        options: ["30-40%", "50-60%", "Über 95%", "100%"],
        correct: 2
    },
    {
        question: "Was wird in einem 'Power-to-Gas'-Prozess primär hergestellt?",
        options: ["Erdgas", "Wasserstoff", "Lachgas", "Helium"],
        correct: 1
    },
    {
        question: "Was ist ein wesentlicher Vorteil von LFP (Lithium-Eisenphosphat) Batterien?",
        options: ["Höhere Energiedichte als alle anderen", "Verzicht auf Kobalt & hohe Sicherheit", "Sie sind flüssig", "Sie leuchten im Dunkeln"],
        correct: 1
    },
    {
        question: "Was ist der Hauptnachteil von Wasserstoff bei der Rückverstromung?",
        options: ["Man kann ihn nicht transportieren", "Geringerr Wirkungsgrad", "Er ist zu schwer", "Er ist blau"],
        correct: 1
    },
    {
        question: "Wofür steht die Abkürzung 'PCM' bei thermischen Speichern?",
        options: ["Power Control Module", "Phase Change Material", "Personal Computer Memory", "Pure Chemical Matter"],
        correct: 1
    },
    {
        question: "Wie viele Ladezyklen erreichen Superkondensatoren (Supercaps) typischerweise?",
        options: ["100 Zyklen", "1.000 Zyklen", "Über 1.000.000 Zyklen", "Einmalige Nutzung"],
        correct: 2
    },
    {
        question: "Wo wird die Druckluft in adiabaten CAES-Kraftwerken gespeichert?",
        options: ["In Ballons", "In unterirdischen Hohlräumen", "In alten Bergwerken", "In Wassertanks"],
        correct: 1
    },
    {
        question: "Was bedeutet 'adiabat' im Zusammenhang mit Druckluftspeichern?",
        options: ["Ohne Luft", "Die Kompressionswärme wird gespeichert und genutzt", "Unter Wasser", "Mit Erdgas-Zufeuerung"],
        correct: 1
    },
    {
        question: "Wie gross ist der Anteil von Pumpspeichern an der weltweiten Speicherkapazität?",
        options: ["Ca. 10%", "Ca. 50%", "Über 90%", "100%"],
        correct: 2
    },
    {
        question: "Welche Speichertechnologie eignet sich am besten für die saisonale Langzeitspeicherung (Sommer zu Winter)?",
        options: ["Lithium-Ionen-Batterien", "Chemische Speicher", "Schwungräder", "Kondensatoren"],
        correct: 1
    },
    {
        question: "Was ist das besondere Merkmal von Festkörperbatterien (Solid State)?",
        options: ["Fester Elektrolyt statt flüssiger Chemie", "Flüssiges Metall", "Grösseres Gehäuse", "Niedrigere Spannung"],
        correct: 0
    },
    {
        question: "Wie wird die Schweiz im europäischen Energiekontext oft genannt?",
        options: ["Strominsel", "Batterie-Nation", "Wasserschloss Europas", "Alpen-Reaktor"],
        correct: 2
    },
    {
        question: "Welches Material wird häufig für Latentwärmespeicher (PCM) genutzt?",
        options: ["Metall", "Paraffin oder Wachs", "Holz", "Sand"],
        correct: 1
    },
    {
        question: "Welcher Schweizer Energieversorger hat in Stalden (VS) eine 8-MW-Batterie gebaut?",
        options: ["Alpiq", "Enalpin", "Swissgrid", "Solar Impulse"],
        correct: 1
    },
    {
        question: "Wie lange dauerte das Bewilligungsverfahren für die Batterie in Stalden?",
        options: ["2 Jahre", "5 Monate", "10 Jahre", "1 Woche"],
        correct: 1
    },
    {
        question: "Warum investieren Firmen wie die BKW in grosse Batteriespeicher?",
        options: ["Nur für den Eigenbedarf", "Um Preisschwankungen am Strommarkt zu nutzen", "Als Museumsstück", "Um Überschuss zu vernichten"],
        correct: 1
    },
    {
        question: "Welche bestehende Infrastruktur soll für den Wasserstofftransport genutzt werden?",
        options: ["Stromkabel", "Gasleitungen", "Telefonleitungen", "Abwasserrohre"],
        correct: 1
    },
    {
        question: "Welcher Speicher weist die höchste Energiedichte auf?",
        options: ["Schwungrad", "Chemische Speicher", "Kondensator", "Li-Ionen"],
        correct: 1
    },
    {
        question: "Wofür steht die Abkürzung LFP?",
        options: ["Lithium-Fluss-Power", "Lithium-Eisenphosphat", "Long-Form-Power", "Liquid-Fuel-Process"],
        correct: 1
    },
    {
        question: "Was macht ein Elektrolyseur?",
        options: ["Strom aus Gas erzeugen", "Wasser in Wasserstoff und Sauerstoff spalten", "Wärme speichern", "Druckluft erzeugen"],
        correct: 1
    },
    {
        question: "Wie wird der Wirkungsgrad bei adiabaten Druckluftspeicher erhöht?",
        options: ["Durch Nutzung der Kompressionswärme", "Durch Kühlung mit Eis", "Durch Zugabe von Benzin", "Durch Nutzung in der Nacht"],
        correct: 0
    },
    {
        question: "Was ist der physikalische Unterschied zwischen Batterie und Kondensator?",
        options: ["Farbe", "Batterie: Chemisch, Kondensator: Elektrisches Feld", "Batterie hält kürzer", "Kondensator ist schwerer"],
        correct: 1
    },
    {
        question: "Welcher Rohstoff wird für Natrium-Ionen-Batterien verwendet?",
        options: ["Gold", "Kochsalz", "Sand", "Kohle"],
        correct: 1
    },
    {
        question: "Warum gelten Festkörperbatterien als sicherer?",
        options: ["Sie haben einen Feuerlöscher eingebaut", "Kein brennbarer flüssiger Elektrolyt", "Sie werden nicht heiss", "Sie bestehen aus Stahl"],
        correct: 1
    },
    {
        question: "Welche Ionen wandern in einem Li-Ion-Akku?",
        options: ["Elektronen im Elektrolyt", "Lithium-Ionen", "Wasserstoff-Atome", "Neutronen"],
        correct: 1
    },
    {
        question: "Was limitiert den Neubau von Pumpspeicherkraftwerken am stärksten?",
        options: ["Technik ist unbekannt", "Abhängigkeit von passender Topografie", "Zu wenig Wasser", "Zu geringer Wirkungsgrad"],
        correct: 1
    },
    {
        question: "Wie stark sind die Kosten für Li-Ionen-Batterien in den letzten 15 Jahren gesunken?",
        options: ["Verdoppelt", "Gleich geblieben", "Um über 90%", "Leicht gestiegen"],
        correct: 2
    },
    {
        question: "Wie wird Wasserstoff oft metaphorisch bezeichnet?",
        options: ["Sauerstoff", "Stickstoff", "Erdöl von morgen", "Kohlendioxid"],
        correct: 2
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
