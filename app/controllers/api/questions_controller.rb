module Api
  class Questionscontroller < ApiController

    def index
      @questions = QuizTable.find(params[:quiz_id]).questions
      render :index
    end

    def show
      @question = Question.find(params[:id])
      render partial: "api/questions/question", locals: { question: @question}
    end

  end

end