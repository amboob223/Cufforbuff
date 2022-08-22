class BluffersController < ApplicationController
   
    def index
        @bluffers = Bluffer.all # the bluffer here comes fom the database
        render :index
         #//looks in the views file if the name not explict
    end

    def new
        render :new
    end


    def create
        @bluffer = Bluffer.new(bluffer_params)
        if @bluffer.save
            redirect_to bluffer_url(@bluffer) #which is a type of params
        else
            render json: @bluffer.errors.full_messages,status: :unprocessable_entity
    end
   end

   def show
        @bluffer = Bluffer.find(params[:id])
        render :show 
   end

   def destroy
    bluffer = Bluffer.find(params[:id])
    bluffer.destroy
    redirect_to bluffers_url
   end

   def update
        bluffer = Bluffer.find(params[:id])
        if bluffer.update_attributes(bluffer_params)
            render json: bluffer
        else
            render json: bluffer.errors, status: :unprocessable_entity
        end
    end

    private 
    def bluffer_params # permit give a copy of the param sobject with the keys and val we permit
        params.require(:bluffer).permit(:name,:number)
    end
    #params can come from the querty strin gthe request body or the route params
end