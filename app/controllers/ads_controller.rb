class AdsController < ApplicationController
  before_action :authorize, :set_ad, only: [:show, :update, :destroy]
  skip_before_action :verify_authenticity_token

  # GET /ads
  # GET /ads.json
  def index
    @ads = Ad.all
  end

  # GET /ads/1
  # GET /ads/1.json
  def show
  end

  # POST /ads
  # POST /ads.json
  def create
    @ad = Ad.new(ad_params)

    if @ad.save
      render :show, status: :created, location: @ad
    else
      render json: @ad.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /ads/1
  # PATCH/PUT /ads/1.json
  def update
    if @ad.update(ad_params)
      render :show, status: :ok, location: @ad
    else
      render json: @ad.errors, status: :unprocessable_entity
    end
  end

  # DELETE /ads/1
  # DELETE /ads/1.json
  def destroy
    @ad.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_ad
      @ad = Ad.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def ad_params
      params.require(:ad).permit(:text, :background, :clicks)
    end
end
