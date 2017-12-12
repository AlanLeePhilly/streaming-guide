require 'carrierwave/orm/activerecord'

module CarrierWave

  class << self
    attr_accessor :root, :base_path
    attr_writer :tmp_path

    def clean_cached_files!(seconds=6)
      CarrierWave::Uploader::Base.clean_cached_files!(seconds)
    end

  end
end
