

Forklol.GameLogic.ClickingUI = Object.create(Forklol.GameLogic.UI);

Forklol.GameLogic.ClickingUI.initialize = function(view, questions){
  Forklol.GameLogic.UI.initialize.call(this, view, questions);
  this.currentQuestionIndex = 0;
  this.$quizArea = this.$quizClicking;
};

Forklol.GameLogic.ClickingUI.updateDisplayedHint = function(){
  var currentQuestion = this.remainingQ.at(this.currentQuestionIndex);

  this.$questionHint.html(currentQuestion.get('hint'));
};

Forklol.GameLogic.ClickingUI.initializeListeners = function(){
  that = this;

  this.view.$('.btn-next-question').on('click', function(event) {
    //Check if currentQuestionIndex needs to wrap back to beginning
    that.currentQuestionIndex++;
    that.currentQuestionIndex = that.currentQuestionIndex % (that.remainingQ.length)

    that.updateDisplayedHint();
  });

  this.view.$('.btn-prev-question').on('click', function(event) {
    //Check if currentQuestionsIndex needs to wrap to the end
    that.currentQuestionIndex--;
    that.currentQuestionIndex = (that.currentQuestionIndex + that.remainingQ.length) % (that.remainingQ.length);

    that.updateDisplayedHint();
  });

  this.view.$('.btn-clicking').on('click', function(event) {
      that.checkAnswer($(event.target).html().trim());
      $(event.currentTarget).prop('disabled', true);
  });

  this.$playButton.on('click', function(){
    that.$playButton.prop('disabled', true);
    that.$quizStart.hide();
    that.$quizArea.show();
    that.updateDisplayedHint();

    that.$timer = $('#timer_display');

    that.$interval = setInterval(that.updateTimer.bind(that),1000);

    //Clear timer when the user navigates to a different page
    $('a').one('click', function() {
      clearInterval(that.$interval);
    });
  });
};

Forklol.GameLogic.ClickingUI.displayMissed = function(){

};

Forklol.GameLogic.ClickingUI.checkAnswer = function(answer){
  var currentQuestion = this.remainingQ.at(this.currentQuestionIndex);

  if (currentQuestion.get('answer') === answer){
    this.answeredQ.add(currentQuestion);
    this.remainingQ.remove(currentQuestion);

    this.updateProgress();

    if (this.answeredQ.length === this.questions.length){
      clearInterval(this.$interval);
      this.updateQuestions();
      this.updateQuiz();
      $gameComplete = $("<div class='alert alert-info'> Congratulations! </div>")
      this.updateDisplay($gameComplete, this.$quizArea);
    } else{
      if (this.currentQuestionIndex === this.remainingQ.length){
        this.currentQuestionIndex = 0;
      }

      this.updateDisplayedHint();
    }
  } else{
    clearInterval(this.$interval);
    this.updateQuestions();
    this.updateQuiz();
    this.displayMissed();
    $timesUp = $("<div class='alert alert-danger'> Game Over. </div>")
    this.updateDisplay($timesUp, this.$quizArea);
  }
};

Forklol.GameLogic.displayMissed = function(){
  this.view.$('.btn-click').prop('disabled', true);
};



/*
Consideration
  Game Flow

-Click Play
-Replace play with div that contains current hint
-Update the current question instance variable of row logic
-Wait for "next"  or "prev" button getting clicked
-Chill, listen for click event on '.btn-clicking'
-check Answer
-if false, end the game {clear interval, display $end message, display missed}
-if true, update current_question, update remaining and answered questions, disable the button, give it a border (color indicator of some sort)
*/