require "sinatra"
require "sinatra/json"
require "json"
require "pry"

# You should not need to change the code in this file

set :bind, '0.0.0.0'  # bind to all interfaces
set :public_folder, File.join(File.dirname(__FILE__), "public")
set :views, File.dirname(__FILE__) + "/app/views"

Dir[File.join(File.dirname(__FILE__), 'app', '**', '*.rb')].each do |file|
  require file
  also_reload file
end

def read_unicorns
  JSON.parse(File.read("unicorns.json"))
end

get "/api/v1/unicorns" do
  @unicorns = read_unicorns

  content_type :json
  json @unicorns
end

get "/api/v1/unicorns/:id" do
  @unicorns = read_unicorns
  unicorn_data = @unicorns["unicorns"]

  @unicorn = unicorn_data.find do |unicorn|
    unicorn["id"] == params[:id].to_i
  end

  content_type :json
  json @unicorn
end

post "/api/v1/unicorns" do
  new_unicorn = JSON.parse(request.body.read)
  current_unicorns = read_unicorns
  new_unicorn["id"] = current_unicorns["unicorns"].last["id"] + 1
  current_unicorns["unicorns"] << new_unicorn
  File.write("unicorns.json", JSON.pretty_generate(current_unicorns))

  @unicorns = read_unicorns
  content_type :json
  json @unicorns
end

get "*" do
  erb :home
end
