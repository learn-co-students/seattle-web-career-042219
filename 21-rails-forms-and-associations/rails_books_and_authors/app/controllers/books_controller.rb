class BooksController < ApplicationController

  before_action :set_book, only: [:show, :edit, :update, :destroy]

  def index
    @books = Book.all
  end

  # def show
  #   @book = Book.find(params[:id])
  # end

  def new
    @book = Book.new
  end

  def create
    @book = Book.create(book_params)
    redirect_to books_path
  end

  # def edit
  #   @book = Book.find(params[:id])
  # end

  def update
    @book.update(book_params)
    redirect_to @book
  end

  def destroy
    @book.destroy
    redirect_to books_path
  end

  private

  def book_params
    params.require(:book).permit(:title, :author_id, :snippet)
    # you can just do params.require(:book).permit! to permit everything (unsafe)
  end

  def set_book
    @book = Book.find(params[:id])
  end

end
