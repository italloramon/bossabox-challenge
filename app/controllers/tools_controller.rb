class ToolsController < ApplicationController
  def index
    if params[:tag]
      render json: Tool.where("tags @> ARRAY[?]::varchar[]", params[:tag])
    else
      render json: Tool.all
    end
  end

  def show
    render json: Tool.find(params[:id])
  end

  def create
    tool = Tool.create!(tool_params)
    render json: tool, status: :created
  end

  def edit
    @tool = Tool.find(params[:id])
  end

  def update
    tool = Tool.find(params[:id])
    tool.update!(tool_params)
    render json: tool
  end

  def destroy
    Tool.find(params[:id]).destroy
    head :no_content
  end

  private

  def tool_params
    params.permit(:title, :link, :description, :tags)
  end

end
