require "#{Rails.root.to_s}/lib/dynamic_form/action_view/helpers/dynamic_form"

class ActionView::Base
  include DynamicForm
end
