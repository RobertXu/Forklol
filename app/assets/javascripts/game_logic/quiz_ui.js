Forklol.GameLogic.UI = {
  initialize: function(view, questions){
    this.view = view;
    this.questions = questions;
    this.answeredQ = new Forklol.Collections.Questions([], {});
    this.remainingQ = questions.clone();
    this.initializeDomElements();
    this.initializeListeners();
  },

  initializeDomElements: function(){
    this.$input = this.view.$('#submit_box');
    this.$progress = this.view.$("#progress-bar");
    this.$progressText = this.view.$('#progress-text');
    this.$playButton = this.view.$('#play_button');
    this.$quizTyping = this.view.$('#quiz-typing');
    this.$quizClicking = this.view.$('#quiz-clicking');
    this.$questionHint = this.view.$('#question-hint');
    this.$quizStart = this.view.$('#quiz-start');
    this.$questionsTable = this.view.$('#questions-table');
    this.$percentileTable = this.view.$('#percentile-table');
  },

  initializeListeners: function(){
    that = this;
  },

  findQuizPlay: function(score){
    var quizPlays = this.view.model.quiz_plays();

    var currentPlay = undefined;
    quizPlays.each(function(quizPlay) {
          if (quizPlay.get('score') === score) {
            currentPlay = quizPlay;
          }}
      )

    return currentPlay;
  },

  updateQuiz: function(){
    var quiz = this.view.model;
    var score = this.answeredQ.length;

    var quizPlay = this.findQuizPlay(score);
    var numPlays = quizPlay.get('num_plays')

    quizPlay.save({'num_plays': numPlays+1}, {patch: true});
  },

  updateQuestions: function(){
    this.answeredQ.each(function(question){
      var times_answered = question.get('times_answered');
      var times_guessed = question.get("times_guessed");

      question.save({'times_answered': times_answered+1, 'times_guessed': times_guessed+1}, {patch: true});
    })

    this.remainingQ.each(function(question){
      var times_answered = question.get('times_answered');
      var times_guessed = question.get("times_guessed");

      question.save({'times_guessed': times_guessed+1}, {patch: true});
    })
  },

  updateTimer: function(){
      var oldTime = this.$timer.html();
      var newTimes = this.decrementTime(oldTime.split(":"));
      var min = newTimes[0].toString();
      var sec = newTimes[1].toString();

      sec = this.addZero(sec);

      this.$timer.html(min + ":" + sec);

      if (min === "0" && sec === "00"){
          clearInterval(this.$interval);
          this.updateQuestions();
          this.updateQuiz();
          this.displayMissed();
          $timesUp = $("<div class='alert alert-danger'> Time's Up. Over Now. </div>")
          this.updateDisplay($timesUp, this.$quizArea);
      }
  },

  updateDisplay: function($endMessage, $displayBlock){
    this.updateModalResults();

    $displayBlock.html($endMessage);



    var newPlaythrough = parseInt(this.view.playthrough) + 1;

    var $btnGrp = $('<div>', {class: 'btn-group btn-group-justified'});
    $btnGrp.append($('<a>', {class: 'btn btn-primary', href: '#quizzes/' + this.view.model.id + '/' + newPlaythrough, html: 'Replay'}));
     $btnGrp.append($('<a class="btn btn-default" data-toggle="modal" data-target="#resultsModal">View Results</a>'));

    $displayBlock.append($btnGrp);
  },

  updateModalResults: function(){
    this.questions.sort();

    that = this;

    this.questions.each(function(question){
      var percentage = 100*(question.get('times_answered')/question.get('times_guessed'))
      that.$questionsTable.append($('<tr><td>' + question.get('answer') + '</td><td>' + percentage.toFixed(2) + '%</td></tr>'))
    })

    var quiz_plays = this.view.model.quiz_plays();
    var numPlays = this.totalPlays(quiz_plays);

    var step = Math.ceil(quiz_plays.length/10);
    var userScore = this.answeredQ.length;
    var userPercentile = 0;

    var totalSoFar = 0;
    for (var i = 0; i < quiz_plays.length; i += step){
      var playsInInterval = 0;

      for (var j = i; j < i+step; j++){
        playsInInterval += quiz_plays.at(j).get('num_plays')
      }
      totalSoFar += playsInInterval;
      var intervalPercentage = (100*(playsInInterval/numPlays)).toFixed(2);

      if (userScore >= i && userScore < (i + step)){
        userPercentile = (100*(totalSoFar/numPlays)).toFixed(0);
      }

      var scoreString = undefined;

      if (step === 1){
        scoreString = i;
      } else {
        scoreString = i + '-' + (i+step-1)
      }

      this.$percentileTable.append('<tr><td>' + scoreString + '</td><td>' + intervalPercentage + '%</td></tr>')
    }

    if (parseInt(userPercentile) === 100){
      userPercentile = 99;
    }

    this.view.$('.modal-title').append(' You scored at the ' + userPercentile + 'th percentile.')
  },

  totalPlays: function(quiz_plays){
    var plays = 0;

    quiz_plays.each(function(quiz_play){
      plays += quiz_play.get('num_plays');
    })

    return plays;
  },

  decrementTime : function(oldTime){
    var min = parseInt(oldTime[0]);
    var sec = parseInt(oldTime[1]);
    if (oldTime[0] === ""){
      min = 0;
    }

    if(sec === 0){
        min -= 1;
        sec = 59;
    } else{
      sec -= 1;
    }

    return [min, sec];
  },

  addZero: function(sec){
        if (sec.length === 1){
            sec = "0" + sec;
        }
        return sec;
    },

  updateProgress : function(){
    this.$progressText.html(this.answeredQ.length + '/' + this.questions.length);
  }
}
