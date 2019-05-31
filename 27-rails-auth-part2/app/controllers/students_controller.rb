class StudentsController < ApplicationController

  def index
    @students = Student.all
  end

  def show
    @student = Student.find_by(id: params[:id])
  end

  def new
    if logged_in?
      @student = Student.new
    else
      flash[:message] = 'Login Sucka'
      redirect_to login_path
    end
  end

  def create
    @student = Student.new(student_params)

    if @student.save
      redirect_to @student
    else
      render :new
    end

  end

  private
  def student_params
    params.require(:student).permit(:name, :email, :cohort_id)
  end
end
