module APi
  class QuizzesController < ApplicationController

    def index
      @quizzes = Quiz.includes(:questions, :quiz_tables).all
    end

    def show
      @quiz = Quiz.find(params[:id])
      render partial: "api/quizzes/quiz", locals: {quiz: @quiz}
    end

    def create
      @quiz = current_user.quizzes.build(quiz_params)

      if @quiz.save
        render partial: "api/quizzes/quiz", locals: { quiz: @quiz}
      else
        render json: { errors: @quiz.errors.full_messages }, status: 422
      end
    end

    def update

    end

    def destroy

    end

    private

    def quiz_params
      params.require(:quiz).permit(:title, :description, :time_limit)
    end

  end

end