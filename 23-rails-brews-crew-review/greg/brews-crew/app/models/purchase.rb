# frozen_string_literal: true

class Purchase < ActiveRecord::Base
  belongs_to :brew
end
