module Api
  class QuestionsController < ApplicationController

    def index
      @questions = QuizTable.find(params[:quiz_id]).questions
      render :index
    end

    def show
      @question = Question.find(params[:id])
      render partial: "api/questions/question", locals: { question: @question}
    end

    def update
      @question = Question.find(params[:id])

      if @question.update_attributes(question_params)
        render partial: 'api/questions/question', locals: {question: @question}
      else
        render json: {errors: @question.errors.full_messages}, status: 422
      end
    end

    private

    def question_params
      params.require(:question).permit(:table_id, :hint, :answer, :triggers, :times_guessed, :times_answered)
    end

  end

end