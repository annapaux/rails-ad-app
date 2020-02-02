class ClickLogsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_click_log, only: [:show, :edit, :update, :destroy]


  # GET /click_logs
  # GET /click_logs.json
  def index
    @click_logs = ClickLog.all
  end

  # GET /click_logs/1
  # GET /click_logs/1.json
  def show
  end

  # GET /click_logs/new
  def new
    @click_log = ClickLog.new
  end

  # GET /click_logs/1/edit
  def edit
  end

  # POST /click_logs
  # POST /click_logs.json
  def create
    @click_log = ClickLog.new(click_log_params)

    respond_to do |format|
      if @click_log.save
        format.html { redirect_to @click_log, notice: 'Click log was successfully created.' }
        format.json { render :show, status: :created, location: @click_log }
      else
        format.html { render :new }
        format.json { render json: @click_log.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /click_logs/1
  # PATCH/PUT /click_logs/1.json
  def update
    respond_to do |format|
      if @click_log.update(click_log_params)
        format.html { redirect_to @click_log, notice: 'Click log was successfully updated.' }
        format.json { render :show, status: :ok, location: @click_log }
      else
        format.html { render :edit }
        format.json { render json: @click_log.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /click_logs/1
  # DELETE /click_logs/1.json
  def destroy
    @click_log.destroy
    respond_to do |format|
      format.html { redirect_to click_logs_url, notice: 'Click log was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_click_log
      @click_log = ClickLog.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def click_log_params
      params.require(:click_log).permit(:user_id, :ad_id, :click)
    end
end
