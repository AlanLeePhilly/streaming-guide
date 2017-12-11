module Requests
  module JsonHelpers
    def JSON
      JSON.parse(last_response.body)
    end
  end
end
