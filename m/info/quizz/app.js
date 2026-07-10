// ============================================================
// 🎮 QUIZ GAMIFICADO - LÓGICA DO JOGO (v2)
// ============================================================

// ============================================================
// 💬 FRASES MOTIVACIONAIS
// ============================================================
const motivationalPhrases = [
  "🔥 Você está arrasando! Continue assim!",
  "💪 Cada pergunta é uma vitória!",
  "🚀 Rumo à aprovação! Não pare agora!",
  "🧠 Seu cérebro está em modo turbo!",
  "⭐ Brilhe como a estrela que você é!",
  "🎯 Foco total! A aprovação é sua!",
  "💎 Conhecimento é poder!",
  "🏆 Campeão(a) em construção!",
  "📚 Cada acerto te aproxima do seu sonho!",
  "🌟 Você é mais forte do que imagina!",
  "🔑 A chave do sucesso está em suas mãos!",
  "💥 Mandando muito bem!",
  "🎓 O diploma te espera!",
  "⚡ Energia total! Vamos lá!",
  "🌈 O resultado vale o esforço!",
  "🏅 Ouro para você!",
  "🎶 No ritmo da aprovação!",
  "💡 Cada questão é uma lição aprendida!",
  "🦁 Coragem! Você consegue!",
  "🍀 A sorte favorece os preparados!",
  "🔥 Impossível é o que você não tentou!",
  "🗡️ Guerreiro(a) dos concursos!",
  "🎆 Brilhando mais a cada pergunta!",
  "✨ Sua dedicação vai compensar!",
  "🛡️ Blindado(a) de conhecimento!",
  "🏋️ Treinando o cérebro como um atleta!",
  "🌍 O mundo é dos estudiosos!",
  "🧩 Mais uma peça no quebra-cabeça do sucesso!",
  "💫 Acredite: você vai conseguir!",
  "🎪 O show é todo seu!",
];

// ============================================================
// 🎵 AUDIO ENGINE
// ============================================================
class AudioEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.bgMusicInterval = null;
    this.isPlaying = false;
    this.beatIndex = 0;
  }

  init() {
    if (this.ctx) return;
    this.ctx = new (window.AudioContext || window.webkitAudioContext)();
  }

  // Play a single note
  playNote(freq, duration, type = 'sine', volume = 0.15, startTime = 0) {
    if (this.isMuted || !this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime + startTime);
    gain.gain.setValueAtTime(0, this.ctx.currentTime + startTime);
    gain.gain.linearRampToValueAtTime(volume, this.ctx.currentTime + startTime + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + startTime + duration);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(this.ctx.currentTime + startTime);
    osc.stop(this.ctx.currentTime + startTime + duration);
  }

  // Kick drum synth
  playKick(startTime = 0) {
    if (this.isMuted || !this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(150, this.ctx.currentTime + startTime);
    osc.frequency.exponentialRampToValueAtTime(40, this.ctx.currentTime + startTime + 0.12);
    gain.gain.setValueAtTime(0.35, this.ctx.currentTime + startTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + startTime + 0.2);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(this.ctx.currentTime + startTime);
    osc.stop(this.ctx.currentTime + startTime + 0.25);
  }

  // Hi-hat synth (noise burst)
  playHiHat(startTime = 0, volume = 0.06) {
    if (this.isMuted || !this.ctx) return;
    const bufferSize = this.ctx.sampleRate * 0.05;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1);
    }
    const source = this.ctx.createBufferSource();
    source.buffer = buffer;

    // Bandpass to make it sound metallic
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(8000, this.ctx.currentTime + startTime);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(volume, this.ctx.currentTime + startTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + startTime + 0.06);

    source.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);
    source.start(this.ctx.currentTime + startTime);
    source.stop(this.ctx.currentTime + startTime + 0.08);
  }

  // Correct answer jingle ✅
  playCorrect() {
    if (this.isMuted) return;
    this.init();
    this.playNote(523.25, 0.12, 'sine', 0.22, 0);
    this.playNote(659.25, 0.12, 'sine', 0.22, 0.08);
    this.playNote(783.99, 0.12, 'sine', 0.22, 0.16);
    this.playNote(1046.50, 0.35, 'sine', 0.2, 0.24);
    this.playNote(1046.50, 0.35, 'triangle', 0.08, 0.24);
  }

  // Wrong answer sound ❌
  playWrong() {
    if (this.isMuted) return;
    this.init();
    this.playNote(311.13, 0.18, 'sawtooth', 0.12, 0);
    this.playNote(233.08, 0.25, 'sawtooth', 0.12, 0.12);
    this.playNote(185.00, 0.45, 'sawtooth', 0.1, 0.25);
  }

  // Click sound
  playClick() {
    if (this.isMuted) return;
    this.init();
    this.playNote(900, 0.04, 'sine', 0.08, 0);
  }

  // Victory fanfare 🎉
  playVictory() {
    if (this.isMuted) return;
    this.init();
    const notes = [523, 523, 523, 659, 783, 783, 659, 783, 1046];
    const durations = [0.1, 0.1, 0.1, 0.18, 0.1, 0.1, 0.18, 0.12, 0.5];
    let t = 0;
    for (let i = 0; i < notes.length; i++) {
      this.playNote(notes[i], durations[i], 'sine', 0.16, t);
      this.playNote(notes[i] * 0.5, durations[i], 'triangle', 0.06, t);
      t += durations[i] * 0.8;
    }
  }

  // ============================================================
  // 🎵 ENERGETIC BACKGROUND MUSIC - Upbeat electronic/chiptune
  // ============================================================
  startBgMusic() {
    if (this.isPlaying) return;
    this.init();
    this.isPlaying = true;
    this.beatIndex = 0;

    // BPM ~130 = ~461ms per beat, using 8th notes ~230ms
    const bpm = 130;
    const eighthNote = (60 / bpm / 2) * 1000; // ~230ms

    // Energetic bass line patterns (frequencies)
    const bassPatterns = [
      [130.81, 0, 130.81, 0, 164.81, 0, 130.81, 0],   // C pattern
      [110.00, 0, 110.00, 0, 130.81, 0, 164.81, 0],    // A pattern
      [146.83, 0, 146.83, 0, 164.81, 0, 196.00, 0],    // D pattern
      [130.81, 0, 164.81, 0, 196.00, 0, 164.81, 0],    // C-E-G
    ];

    // Melody patterns (higher octave)
    const melodyPatterns = [
      [523, 0, 659, 0, 783, 0, 659, 0],
      [440, 0, 523, 0, 659, 0, 523, 0],
      [587, 0, 659, 0, 783, 0, 880, 0],
      [523, 0, 783, 0, 659, 0, 523, 0],
    ];

    let patternIdx = 0;

    const playBeat = () => {
      if (!this.isPlaying || this.isMuted) return;

      const beatInPattern = this.beatIndex % 8;
      const currentPattern = patternIdx % bassPatterns.length;
      const bassFreq = bassPatterns[currentPattern][beatInPattern];
      const melFreq = melodyPatterns[currentPattern][beatInPattern];

      // KICK on beats 0, 4
      if (beatInPattern === 0 || beatInPattern === 4) {
        this.playKick(0);
      }

      // HI-HAT on every 8th note
      this.playHiHat(0, beatInPattern % 2 === 0 ? 0.05 : 0.03);

      // Bass line
      if (bassFreq > 0) {
        this.playNote(bassFreq, 0.18, 'square', 0.07, 0);
        this.playNote(bassFreq, 0.18, 'sawtooth', 0.03, 0);
      }

      // Melody (play on even beats for less clutter)
      if (melFreq > 0 && beatInPattern % 2 === 0) {
        this.playNote(melFreq, 0.14, 'square', 0.04, 0);
        this.playNote(melFreq * 1.005, 0.14, 'square', 0.03, 0); // slight detune for width
      }

      // Chord stab on beat 0 and 6
      if (beatInPattern === 0 || beatInPattern === 6) {
        const chordNotes = [
          [261.63, 329.63, 392.00],
          [220.00, 277.18, 329.63],
          [293.66, 349.23, 440.00],
          [261.63, 329.63, 392.00],
        ];
        const chord = chordNotes[currentPattern];
        chord.forEach(f => {
          this.playNote(f, 0.25, 'triangle', 0.025, 0);
        });
      }

      this.beatIndex++;
      if (this.beatIndex % 8 === 0) {
        patternIdx++;
      }
    };

    playBeat();
    this.bgMusicInterval = setInterval(playBeat, eighthNote);
  }

  stopBgMusic() {
    this.isPlaying = false;
    if (this.bgMusicInterval) {
      clearInterval(this.bgMusicInterval);
      this.bgMusicInterval = null;
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.isMuted) {
      this.stopBgMusic();
    } else {
      this.startBgMusic();
    }
    return this.isMuted;
  }
}

// ============================================================
// QUIZ GAME CLASS
// ============================================================
class QuizGame {
  constructor() {
    this.audio = new AudioEngine();
    this.questions = [];
    this.currentIndex = 0;
    this.score = 0;
    this.wrong = 0;
    this.streak = 0;
    this.maxStreak = 0;
    this.answers = [];
    this.categoryStats = {};
    this.timerSeconds = 30;
    this.timerInterval = null;
    this.autoAdvanceTimeout = null;
    this.countdownInterval = null;
    this.isAnswered = false;
    this.isAdvancing = false;
    this.shuffledOrder = [];

    this.AUTO_ADVANCE_DELAY = 3000;

    this.cacheDOM();
    this.bindEvents();
    this.createParticles();
    this.checkSavedProgress();
  }

  cacheDOM() {
    this.startScreen = document.getElementById('start-screen');
    this.quizScreen = document.getElementById('quiz-screen');
    this.resultsScreen = document.getElementById('results-screen');
    this.resumeModal = document.getElementById('resume-modal');
    this.btnStart = document.getElementById('btn-start');
    this.btnRestart = document.getElementById('btn-restart');
    this.musicToggle = document.getElementById('music-toggle');
    this.btnResume = document.getElementById('btn-resume');
    this.btnNewGame = document.getElementById('btn-new-game');

    // Quiz elements
    this.questionCounter = document.getElementById('question-counter');
    this.scoreCorrect = document.getElementById('score-correct');
    this.scoreWrong = document.getElementById('score-wrong');
    this.progressFill = document.getElementById('progress-fill');
    this.categoryBadge = document.getElementById('category-badge');
    this.questionText = document.getElementById('question-text');
    this.optionsList = document.getElementById('options-list');
    this.explanationBox = document.getElementById('explanation-box');
    this.btnNext = document.getElementById('btn-next');
    this.timerDisplay = document.getElementById('timer-display');
    this.timerContainer = document.getElementById('timer-container');
    this.streakBadge = document.getElementById('streak-badge');
    this.feedbackOverlay = document.getElementById('feedback-overlay');
    this.feedbackIcon = document.getElementById('feedback-icon');
    this.motivationalBar = document.getElementById('motivational-bar');
  }

  bindEvents() {
    this.btnStart.addEventListener('click', () => this.startGame());
    this.btnRestart.addEventListener('click', () => this.restartGame());
    this.musicToggle.addEventListener('click', () => this.toggleMusic());
    this.btnNext.addEventListener('click', () => this.nextQuestion());
    this.btnResume.addEventListener('click', () => this.resumeGame());
    this.btnNewGame.addEventListener('click', () => this.startNewGame());
  }

  createParticles() {
    const container = document.getElementById('particles');
    const colors = ['#7c3aed', '#06b6d4', '#f59e0b', '#10b981', '#ef4444', '#ec4899'];

    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      const size = Math.random() * 6 + 2;
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.background = colors[Math.floor(Math.random() * colors.length)];
      particle.style.animationDuration = (Math.random() * 15 + 10) + 's';
      particle.style.animationDelay = (Math.random() * 15) + 's';
      container.appendChild(particle);
    }
  }

  shuffleArray(arr) {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  // ============================================================
  // 💾 SAVE / LOAD PROGRESS (localStorage)
  // ============================================================
  saveProgress() {
    const data = {
      shuffledOrder: this.shuffledOrder,
      currentIndex: this.currentIndex,
      score: this.score,
      wrong: this.wrong,
      streak: this.streak,
      maxStreak: this.maxStreak,
      answers: this.answers,
      categoryStats: this.categoryStats,
      timestamp: Date.now()
    };
    localStorage.setItem('quizProgress', JSON.stringify(data));
  }

  clearProgress() {
    localStorage.removeItem('quizProgress');
  }

  checkSavedProgress() {
    const saved = localStorage.getItem('quizProgress');
    if (saved) {
      try {
        const data = JSON.parse(saved);
        // Only show resume if there's actual progress and not finished
        if (data.currentIndex > 0 && data.currentIndex < 100) {
          this.savedData = data;
          this.showResumeModal(data);
          return;
        }
      } catch (e) {
        this.clearProgress();
      }
    }
  }

  showResumeModal(data) {
    const pct = Math.round((data.currentIndex / 100) * 100);
    document.getElementById('resume-progress-text').textContent =
      `Você parou na pergunta ${data.currentIndex + 1}/100 (${pct}% concluído) com ${data.score} acertos e ${data.wrong} erros.`;
    this.resumeModal.classList.add('show');
  }

  resumeGame() {
    this.audio.init();
    this.audio.playClick();
    this.resumeModal.classList.remove('show');

    const data = this.savedData;
    this.shuffledOrder = data.shuffledOrder;
    this.questions = this.shuffledOrder.map(id => questions.find(q => q.id === id));
    this.currentIndex = data.currentIndex;
    this.score = data.score;
    this.wrong = data.wrong;
    this.streak = data.streak;
    this.maxStreak = data.maxStreak;
    this.answers = data.answers;
    this.categoryStats = data.categoryStats;

    this.audio.startBgMusic();
    this.showScreen('quiz');
    this.loadQuestion();
  }

  startNewGame() {
    this.audio.init();
    this.audio.playClick();
    this.resumeModal.classList.remove('show');
    this.clearProgress();
    this.startGame();
  }

  startGame() {
    this.audio.init();
    this.audio.playClick();
    this.audio.startBgMusic();

    const shuffled = this.shuffleArray(questions);
    this.questions = shuffled;
    this.shuffledOrder = shuffled.map(q => q.id);
    this.currentIndex = 0;
    this.score = 0;
    this.wrong = 0;
    this.streak = 0;
    this.maxStreak = 0;
    this.answers = [];
    this.categoryStats = {};

    this.showScreen('quiz');
    this.loadQuestion();
  }

  restartGame() {
    this.audio.playClick();
    this.clearProgress();
    this.startGame();
  }

  showScreen(screen) {
    this.startScreen.classList.remove('active');
    this.quizScreen.classList.remove('active');
    this.resultsScreen.classList.remove('active');

    if (screen === 'start') this.startScreen.classList.add('active');
    if (screen === 'quiz') this.quizScreen.classList.add('active');
    if (screen === 'results') this.resultsScreen.classList.add('active');
  }

  // ============================================================
  // 💬 MOTIVATIONAL PHRASES
  // ============================================================
  showMotivationalPhrase() {
    // Show on every 5th question, or after streaks, or randomly (30% chance)
    const shouldShow =
      this.currentIndex % 5 === 0 ||
      this.streak === 3 ||
      this.streak === 5 ||
      this.streak === 10 ||
      Math.random() < 0.3;

    if (!shouldShow || this.currentIndex === 0) return;

    const phrase = motivationalPhrases[Math.floor(Math.random() * motivationalPhrases.length)];
    this.motivationalBar.textContent = phrase;
    this.motivationalBar.classList.add('show');

    setTimeout(() => {
      this.motivationalBar.classList.remove('show');
    }, 2800);
  }

  loadQuestion() {
    this.isAnswered = false;
    clearTimeout(this.autoAdvanceTimeout);
    const q = this.questions[this.currentIndex];

    // Update header
    this.questionCounter.innerHTML = `Pergunta <span>${this.currentIndex + 1}</span>/<span style="font-size:1rem">${this.questions.length}</span>`;
    this.scoreCorrect.textContent = this.score;
    this.scoreWrong.textContent = this.wrong;
    this.progressFill.style.width = ((this.currentIndex / this.questions.length) * 100) + '%';

    // Category badge
    this.categoryBadge.textContent = q.category;

    // Question
    this.questionText.textContent = q.question;

    // Options
    this.optionsList.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];
    q.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.innerHTML = `
        <span class="option-letter">${letters[i]}</span>
        <span class="option-text">${opt}</span>
      `;
      btn.addEventListener('click', () => this.selectAnswer(i, btn));
      this.optionsList.appendChild(btn);
    });

    // Hide explanation and next button
    this.explanationBox.style.display = 'none';
    this.btnNext.style.display = 'none';

    // Reset and start timer
    this.startTimer();

    // Show motivational phrase occasionally
    this.showMotivationalPhrase();

    // Animation
    const card = document.querySelector('.question-card');
    card.style.animation = 'none';
    card.offsetHeight; // trigger reflow
    card.style.animation = 'fadeInUp 0.4s ease';

    // Save progress
    this.saveProgress();
  }

  startTimer() {
    this.timerSeconds = 30;
    this.updateTimerDisplay();
    clearInterval(this.timerInterval);

    this.timerContainer.classList.remove('warning', 'danger');

    this.timerInterval = setInterval(() => {
      this.timerSeconds--;
      this.updateTimerDisplay();

      if (this.timerSeconds <= 10 && this.timerSeconds > 5) {
        this.timerContainer.classList.add('warning');
        this.timerContainer.classList.remove('danger');
      } else if (this.timerSeconds <= 5) {
        this.timerContainer.classList.remove('warning');
        this.timerContainer.classList.add('danger');
      }

      if (this.timerSeconds <= 0) {
        clearInterval(this.timerInterval);
        this.timeUp();
      }
    }, 1000);
  }

  updateTimerDisplay() {
    this.timerDisplay.textContent = this.timerSeconds + 's';
  }

  timeUp() {
    if (this.isAnswered) return;
    this.isAnswered = true;

    const q = this.questions[this.currentIndex];
    const buttons = this.optionsList.querySelectorAll('.option-btn');

    // Disable all buttons
    buttons.forEach((btn, i) => {
      btn.disabled = true;
      if (i === q.correct) {
        btn.classList.add('reveal-correct');
      }
    });

    this.wrong++;
    this.streak = 0;
    this.updateStreakBadge();

    this.answers.push({ questionId: q.id, correct: false, category: q.category });
    this.trackCategory(q.category, false);

    this.audio.playWrong();
    this.showFeedback(false);
    this.showExplanation(q);
    this.scheduleAutoAdvance();
  }

  selectAnswer(index, btn) {
    if (this.isAnswered) return;
    this.isAnswered = true;
    clearInterval(this.timerInterval);

    const q = this.questions[this.currentIndex];
    const isCorrect = index === q.correct;
    const buttons = this.optionsList.querySelectorAll('.option-btn');

    // Disable all buttons
    buttons.forEach((b, i) => {
      b.disabled = true;
      if (i === q.correct && !isCorrect) {
        b.classList.add('reveal-correct');
      }
    });

    if (isCorrect) {
      btn.classList.add('correct');
      this.score++;
      this.streak++;
      if (this.streak > this.maxStreak) this.maxStreak = this.streak;
      this.audio.playCorrect();
      this.showFeedback(true);
    } else {
      btn.classList.add('wrong');
      this.wrong++;
      this.streak = 0;
      this.audio.playWrong();
      this.showFeedback(false);
    }

    this.updateStreakBadge();
    this.scoreCorrect.textContent = this.score;
    this.scoreWrong.textContent = this.wrong;

    this.answers.push({ questionId: q.id, correct: isCorrect, category: q.category });
    this.trackCategory(q.category, isCorrect);
    this.showExplanation(q);
    this.scheduleAutoAdvance();
  }

  // ============================================================
  // ⏩ AUTO ADVANCE
  // ============================================================
  clearAllTimers() {
    clearTimeout(this.autoAdvanceTimeout);
    clearInterval(this.countdownInterval);
    this.autoAdvanceTimeout = null;
    this.countdownInterval = null;
  }

  scheduleAutoAdvance() {
    this.clearAllTimers();
    this.isAdvancing = false;

    // Show a countdown indicator on the next button
    let remaining = this.AUTO_ADVANCE_DELAY / 1000;
    this.btnNext.style.display = 'inline-flex';
    this.updateNextButtonCountdown(remaining);

    this.countdownInterval = setInterval(() => {
      remaining--;
      if (remaining <= 0) {
        clearInterval(this.countdownInterval);
        this.countdownInterval = null;
        return;
      }
      this.updateNextButtonCountdown(remaining);
    }, 1000);

    this.autoAdvanceTimeout = setTimeout(() => {
      this.clearAllTimers();
      this.doAdvance();
    }, this.AUTO_ADVANCE_DELAY);

    // Allow manual click too (clears auto-advance)
    this.btnNext.onclick = () => {
      this.clearAllTimers();
      this.doAdvance();
    };
  }

  doAdvance() {
    if (this.isAdvancing) return;
    this.isAdvancing = true;
    this.nextQuestion();
  }

  updateNextButtonCountdown(seconds) {
    if (this.currentIndex < this.questions.length - 1) {
      this.btnNext.innerHTML = `➡️ Próxima em ${seconds}s <span class="countdown-ring"></span>`;
    } else {
      this.btnNext.innerHTML = `📊 Resultado em ${seconds}s <span class="countdown-ring"></span>`;
    }
  }

  trackCategory(category, isCorrect) {
    if (!this.categoryStats[category]) {
      this.categoryStats[category] = { correct: 0, total: 0 };
    }
    this.categoryStats[category].total++;
    if (isCorrect) this.categoryStats[category].correct++;
  }

  showFeedback(isCorrect) {
    this.feedbackIcon.textContent = isCorrect ? '✅' : '❌';
    this.feedbackOverlay.classList.add('show');
    setTimeout(() => {
      this.feedbackOverlay.classList.remove('show');
    }, 800);
  }

  updateStreakBadge() {
    if (this.streak >= 3) {
      let text = `🔥 ${this.streak}x Sequência!`;
      if (this.streak >= 10) text = `🌟 ${this.streak}x LENDÁRIO!`;
      else if (this.streak >= 7) text = `⚡ ${this.streak}x INCRÍVEL!`;
      else if (this.streak >= 5) text = `💥 ${this.streak}x FANTÁSTICO!`;
      this.streakBadge.textContent = text;
      this.streakBadge.classList.add('show');
    } else {
      this.streakBadge.classList.remove('show');
    }
  }

  showExplanation(q) {
    this.explanationBox.innerHTML = `<strong>💡 Explicação:</strong> ${q.explanation}`;
    this.explanationBox.style.display = 'block';
  }

  nextQuestion() {
    this.audio.playClick();
    this.clearAllTimers();
    clearInterval(this.timerInterval);
    this.currentIndex++;
    this.isAdvancing = false;

    if (this.currentIndex < this.questions.length) {
      this.loadQuestion();
    } else {
      this.clearProgress();
      this.showResults();
    }
  }

  showResults() {
    this.clearAllTimers();
    clearInterval(this.timerInterval);
    this.timerInterval = null;
    this.audio.stopBgMusic();
    this.streakBadge.classList.remove('show');
    this.motivationalBar.classList.remove('show');
    this.showScreen('results');

    const pct = Math.round((this.score / this.questions.length) * 100);

    // Emoji and message based on score
    let emoji, title, subtitle;
    if (pct >= 90) {
      emoji = '🏆';
      title = 'Extraordinário!';
      subtitle = 'Você é um verdadeiro expert em informática! 🌟';
    } else if (pct >= 70) {
      emoji = '🎉';
      title = 'Excelente!';
      subtitle = 'Muito bem! Você domina grande parte do conteúdo! 💪';
    } else if (pct >= 50) {
      emoji = '👏';
      title = 'Bom Trabalho!';
      subtitle = 'Continue estudando e você chegará ainda mais longe! 📚';
    } else if (pct >= 30) {
      emoji = '💪';
      title = 'Não Desista!';
      subtitle = 'Revise os temas e tente novamente. Você consegue! 🚀';
    } else {
      emoji = '📖';
      title = 'Hora de Estudar!';
      subtitle = 'Dedique mais tempo aos estudos e tente novamente! 🎯';
    }

    document.getElementById('result-emoji').textContent = emoji;
    document.getElementById('result-title').textContent = title;
    document.getElementById('result-subtitle').textContent = subtitle;
    document.getElementById('stat-correct-value').textContent = this.score;
    document.getElementById('stat-wrong-value').textContent = this.wrong;
    document.getElementById('stat-total-value').textContent = this.questions.length;

    // Animate score circle
    this.animateScoreCircle(pct);

    // Category breakdown
    this.renderCategoryStats();

    // Play victory or try again
    if (pct >= 50) {
      this.audio.playVictory();
      this.launchConfetti();
    } else {
      this.audio.playWrong();
    }
  }

  animateScoreCircle(pct) {
    const circle = document.getElementById('score-circle-fill');
    const radius = 85;
    const circumference = 2 * Math.PI * radius;
    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = circumference;

    // Set color based on percentage
    let color;
    if (pct >= 70) color = 'url(#gradSuccess)';
    else if (pct >= 50) color = 'url(#gradWarning)';
    else color = 'url(#gradDanger)';
    circle.style.stroke = color;

    const percentText = document.getElementById('score-percentage');
    percentText.style.color = pct >= 70 ? '#34d399' : pct >= 50 ? '#fbbf24' : '#f87171';

    // Animate
    setTimeout(() => {
      const offset = circumference - (pct / 100) * circumference;
      circle.style.strokeDashoffset = offset;

      // Animate number
      let current = 0;
      const step = pct / 40;
      const numInterval = setInterval(() => {
        current += step;
        if (current >= pct) {
          current = pct;
          clearInterval(numInterval);
        }
        percentText.textContent = Math.round(current) + '%';
      }, 30);
    }, 300);
  }

  renderCategoryStats() {
    const container = document.getElementById('category-stats-list');
    container.innerHTML = '';

    const entries = Object.entries(this.categoryStats).sort((a, b) => {
      const pctA = a[1].correct / a[1].total;
      const pctB = b[1].correct / b[1].total;
      return pctB - pctA;
    });

    entries.forEach(([cat, stats], i) => {
      const pct = Math.round((stats.correct / stats.total) * 100);
      let barColor;
      if (pct >= 70) barColor = 'linear-gradient(90deg, #10b981, #34d399)';
      else if (pct >= 50) barColor = 'linear-gradient(90deg, #f59e0b, #fbbf24)';
      else barColor = 'linear-gradient(90deg, #ef4444, #f87171)';

      const item = document.createElement('div');
      item.className = 'category-stat-item';
      item.style.animation = `fadeInUp 0.5s ease ${i * 0.1}s both`;
      item.innerHTML = `
        <span class="category-stat-name">${cat}</span>
        <div class="category-stat-bar">
          <div class="category-stat-fill" style="width: 0%; background: ${barColor};" data-width="${pct}%"></div>
        </div>
        <span class="category-stat-score" style="color: ${pct >= 70 ? '#34d399' : pct >= 50 ? '#fbbf24' : '#f87171'}">${stats.correct}/${stats.total}</span>
      `;
      container.appendChild(item);
    });

    // Animate bars
    setTimeout(() => {
      document.querySelectorAll('.category-stat-fill').forEach(bar => {
        bar.style.width = bar.dataset.width;
      });
    }, 500);
  }

  launchConfetti() {
    const container = document.getElementById('confetti-container');
    container.innerHTML = '';
    const colors = ['#7c3aed', '#06b6d4', '#f59e0b', '#10b981', '#ef4444', '#ec4899', '#fbbf24', '#a78bfa'];

    for (let i = 0; i < 80; i++) {
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';
      piece.style.left = Math.random() * 100 + '%';
      piece.style.background = colors[Math.floor(Math.random() * colors.length)];
      piece.style.animationDuration = (Math.random() * 2 + 2) + 's';
      piece.style.animationDelay = (Math.random() * 1) + 's';
      piece.style.width = (Math.random() * 8 + 5) + 'px';
      piece.style.height = (Math.random() * 14 + 8) + 'px';
      piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
      container.appendChild(piece);
    }

    setTimeout(() => {
      container.innerHTML = '';
    }, 4000);
  }

  toggleMusic() {
    this.audio.init();
    const muted = this.audio.toggleMute();
    this.musicToggle.textContent = muted ? '🔇' : '🎵';
    this.musicToggle.classList.toggle('muted', muted);
  }
}

// ============================================================
// INITIALIZE
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  new QuizGame();
});
