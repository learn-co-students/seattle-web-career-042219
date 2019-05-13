class App
  def call(environment_hash)
    # binding.pry
    req = Rack::Request.new(environment_hash)
    res = Rack::Response.new
    if res.path == '/'
      resp.write ("Welcome to Flatiron")
    else if res.path == '/seattle'
      resp.write ("Welcome to Flatiron Seattle")
    else if res.path == '/dumbo'
      resp.write("Welcome to Flatiron dumbo")
    else if res.path == '/new-york'
      resp.write("Welcome to Flatiron New York")
    else
      status_code = 400
    # status_code = 200
    # header = {}
    # body = ['hello'] # or {}
    #
    # return [status_code, header, body]
  end
  resp.finish
end



require "rack"
# require_relative "./app"
require 'pry'

class App
  def call (environment_hash)
    response_code = 200
    headers = {}
    body = []
    request = Rack::Request.new(environment_hash)
    res = Rack::Response.new
    binding.pry
    # environment_hash["REQUEST_PATH"]
    if request.path == '/seattle'
      # body.push "Welcome to Flatiron Seattle!"
      res.write("Welcome to Flatiron Seattle!")
    elsif request.path == '/new-york'
      # body.push "Welcome to Flatiron New York!"
      res.write("Welcome to Flatiron New York!")
    else
      status = 404
    end
    res.finish
    # [response_code, headers, body]
  end
end

run App.new
