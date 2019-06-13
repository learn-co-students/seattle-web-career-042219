class CustomController < ApplicationController
  def now
    render json: {'now' => 'Thursday'}
  end

  def roullette
    if (1..6).to_a.sample == 1
      render json: {'result' => 'BANG!'}
    else
      render json: {'result' => 'click'}
    end
  end
end
