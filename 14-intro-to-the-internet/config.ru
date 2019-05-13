require 'rack'
require 'pry'

# To use Rack, provide an "app": an object that responds to the call method, taking the environment hash as a parameter, and returning an Array with three elements:
#
# The HTTP response code
# A Hash of headers
# The response body, which must respond to each

class Application
  def call(environment_hash)
    req = Rack::Request.new(environment_hash)
    res = Rack::Response.new
    if req.path == '/seattle'
      res.write("Welcome to Seattle Campus!!!")
      # body = ["Welcome to Seattle Campus!!!"]
    end
    # PATH_INFO"=>"/seattle
    # REQUEST_URI"=>"http://localhost:9393/
    binding.pry
    # [200, {}, body]
    res.finish
  end
end

run Application.new
