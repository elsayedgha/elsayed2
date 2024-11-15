function submitExam() {
    const answers = {
        q1: 'B', q2: 'A', // Add answers for all questions here
    };

    let score = 0;
    const form = document.getElementById('examForm');

    for (const [question, answer] of Object.entries(answers)) {
        const userAnswer = form.elements[question].value;
        if (userAnswer === answer) {
            score++;
        }
    }

    let level;
    if (score >= 18) {
        level = "C2";
    } else if (score >= 15) {
        level = "C1";
    } else if (score >= 12) {
        level = "B2";
    } else if (score >= 9) {
        level = "B1";
    } else if (score >= 6) {
        level = "A2";
    } else {
        level = "A1";
    }

    document.getElementById('result').innerText = `Your level is: ${level}`;
}
