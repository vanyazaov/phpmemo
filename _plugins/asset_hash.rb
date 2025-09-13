module Jekyll
  module AssetHashFilter
    def asset_hash(input)
      return "" if input.nil? || input.empty?
      
      # Получаем хеш содержимого файла
      file_path = File.join(Dir.pwd, input)
      if File.exist?(file_path)
        hash = Digest::MD5.hexdigest(File.read(file_path))[0..7]
        return "#{input}?v=#{hash}"
      else
        return input
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::AssetHashFilter)
