model Api
  class QuizTablesController < ApiController

    def index
      @quiz = Quiz.find(params[:quiz_id]).quiz_tables
      render :index
    end

    def show
      @quiz_table = QuizTable.find(params[:id]);
      render partial :"api/quiz_tables/quiz_table", locale: {quiz_talbe: @quiz_table}
    end

    private
    def quiz_table_params
      params.require(:quiz_table).permit(:quiz_id, :hint_header, :answer_header)
    end

  end
end