class RestaurantController < ApplicationController
    require 'httparty'
    require 'google_places'

    def index
        @lat = params[:lat]
        @lng= params[:lng]
        @client = GooglePlaces::Client.new(ENV['FORK'])
        @spot = @client.spots(@lat, @lng,:types => ['restaurant'], :exclude => ['cafe','bakery','store','lodging'])
        @cafes = @client.spots(@lat, @lng, :types => ['cafe','bakery'])
        @bars =  @client.spots(@lat, @lng, :types => ['bar','night_club'],:exclude => ['restaurant','cafe','store'])
        print @spot
        print @bars
        
    end

    def info
        @lat = params[:lat]
        @lng= params[:lng]
        @client = GooglePlaces::Client.new(ENV['FORK'])
        @place = params[:place]
       @spot =  @client.spot(params[:place], :detail => true)
    end
end