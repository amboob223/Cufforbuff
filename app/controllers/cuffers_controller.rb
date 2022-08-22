class CuffersController < ApplicationController
#a resource is antytthging yiu will be crudin like cuffs and buffs

    def index
        @cuffers = Cuffer.all
        render :index
        # calling cuffer that way on json get all the cuffer render loks in a file
    end


    def create
        @cuffer = Cuffer.new(cuffer_params)
            if @cuffer.save
                redirect_to cuffer_url(@cuffer)#this is the show
            else
                render json: @cuffer.errors.full_messages, status: :unprocessable_entity
            end
    end

        def new # we have a built in action if you check the routes the urel is the pre fix and th
            #/cuffer/new
            render :new # this is an html template.
            
        end

        # def edit
        
        # end
        
        def show # give us the cuffers/1 and 2 and so on
            @cuffer = Cuffer.find(params[:id]) 
            render :show
        end
# next three months do projects that show my understanding of css animation datastructure and algorithims
        def destroy
            cuffer = Cuffer.find(params[:id])
            cuffer.destroy
            redirect_to cuffers_url
        end

        def update
            cuffer = Cuffer.find(params[:id])
                if cuffer.update_attributes(cuffer_params)
                    render json: cuffer
                else
                    render json: cuffer.errors, status: :unprocessable_entity
                end
        end

            private

            def cuffer_params
                params.require(:cuffer).permit(:name,:number)
            end
end