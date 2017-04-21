source 'https://rubygems.org'

ruby '2.2.3'

group :heroku do
  gem 'unicorn'
  gem 'rails_12factor'
end

gem 'rails', '~> 3.2.8'

gem 'authlogic'
gem 'omniauth'
gem 'omniauth-facebook'

gem 'mime-types', :require => 'mime/types'
gem 'carrierwave', '~> 0.6.1'
gem 'sprockets'
gem 'ranked-model'
# -- Database
# SQLite:

gem 'rails-assets-html.sortable', source: 'https://rails-assets.org'

group :development do
  gem 'sqlite3-ruby'
	gem 'pry'
	gem 'pry-byebug'

end
group :production do
  # MySQL:
  #gem 'mysql2'
  # PostgreSQL (default on heroku):
  gem 'pg'
end
group :test do
  gem 'test-unit'
end

# -- Cloud storage
# AWS S3 support. Can be disabled if using local file system instead of cloud storage.
gem 'fog'

# -- Photo resizing
# MiniMagick
gem "mini_magick"

# ImageMagick:
#gem "rmagick", :require => 'RMagick'

# FreeImage:
#gem "RubyInline"
#gem "image_science", :git => 'git://github.com/perezd/image_science.git'

# -- EXIF
# Mini exif tool. Can be disabled. Remove exif_read and exif_write filters in photo model
gem "mini_exiftool_vendored"
