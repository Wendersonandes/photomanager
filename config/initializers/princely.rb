require "#{Rails.root.to_s}/lib/princely/prince"
require "#{Rails.root.to_s}/lib/princely/pdf_helper"

Mime::Type.register 'application/pdf', :pdf

ActionController::Base.send(:include, PdfHelper)
