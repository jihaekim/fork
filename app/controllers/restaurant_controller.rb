class RestaurantController < ApplicationController
    require 'httparty'
    require 'google_places'

    def index
        @lat = params[:lat]
        @lng= params[:lng]
        @client = GooglePlaces::Client.new('AIzaSyAMfRndh8oVyNMwvoOk1B3sMJwiYTHs6V0')
        @spot = @client.spots(@lat, @lng, :radius => 5000, :types => ['restaurant'], :exclude => ['cafe','bakery'])
        @cafes = @client.spots(@lat, @lng, :types => ['cafe','bakery'])
        
    end

    def info
        @lat = params[:lat]
        @lng= params[:lng]
        @client = GooglePlaces::Client.new('AIzaSyAMfRndh8oVyNMwvoOk1B3sMJwiYTHs6V0')
        @place = params[:place]
       @spot =  @client.spot(params[:place], :detail => true)
    end
end