function Question() {
  this.newQuestion = function(question, answer1, answer2, answer3, answer4, correctAnswer) {
    this.quizz.push({
      'Question': question,
      '1': answer1,
      '2': answer2,
      '3': answer3,
      '4': answer4,
      'Reponse': correctAnswer
    });
  };
  this.randomQuestion = function() {
    const index = Math.floor(Math.random() * this.quizz.length);
    console.log(`${this.quizz[index].Question}\n1: ${this.quizz[index][1]}\n2: ${this.quizz[index][2]}\n3: ${this.quizz[index][3]}\n4: ${this.quizz[index][4]}`);
    this.userAnswer = prompt('Votre réponse ?\n("exit" pour arrêter la partie)');
    this.checkAnswer(index);
    this.quizz.splice(index, 1);
    this.quizz.length > 0 ? this.nextQuestion() : console.log('Vous avez répondu à toutes les questions.');
  };
  this.checkAnswer = function(index) {
    if (this.userAnswer == 'exit') {
      console.log(`Vous avez mis fin à la partie.\nVotre score : ${this.userScore}`);
    } else if (this.userAnswer == this.quizz[index].Reponse) {
      this.userScore++;
      console.log(`++BONNE RÉPONSE++\nVotre score : ${this.userScore}`);
    } else {
      console.log(`!! MAUVAISE RÉPONSE !!\nVotre score : ${this.userScore}`);
    }
  };
  this.nextQuestion = function() {
    if (this.userAnswer != 'exit') {
      console.log('Question suivante :');
      this.randomQuestion()
    } else {
      console.log('Merci d\'avoir joué =)')
    };
  };
  this.quizz = [];
  this.userScore = 0;
}

const quizz1 = new Question();
quizz1.newQuestion('Quelle est la couleur du cheval blanc d\'Henri 4 ?', 'Blanche', 'Verte', 'Marron', 'Noire', 1);
quizz1.newQuestion('Qu\'est-ce qui est jaune et qui attend ?', 'Nathan', 'Jonathan', 'Nathanael', 'Godot', 2);
quizz1.newQuestion('Qu\'est-ce qui est court et qui se jette ?', 'Un concombre', 'Un poivron', 'Une betterave', 'Une courgette', 4);
quizz1.newQuestion('Lorqu\'un pancake tombe dans la neige avant le 31 décembre, on dit qu\'il est :', 'tombé dans la neige avant le 31 décembre', 'Un frizby comestible', 'Une kipa surgelée', 'La réponse 4', 1);
quizz1.newQuestion('Si un coq pond un oeuf sur le toit d\'une maison et l\'oeuf tombe par terre, va-t\'il se briser ?', 'Oui', 'Non', 'Peut-être', 'Un coq ne pond pas d\'oeuf.', 4);
quizz1.newQuestion('La mère de Pascal a quatre enfants : Pierre, Julie, Paul et...', 'Jack', 'Hervé', 'Pascal', 'René', 3)
quizz1.randomQuestion();
