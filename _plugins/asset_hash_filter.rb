module Jekyll
  module AssetHashFilter
    require 'digest'
    
    def asset_hash(input)
      return "" if input.nil? || input.empty?
      
      # Полный путь к файлу
      site_source = @context.registers[:site].config['source']
      file_path = File.join(site_source, input)
      
      if File.exist?(file_path)
        # Создаем хеш от содержимого файла
        hash = Digest::MD5.file(file_path).hexdigest[0..7]
        "#{input}?v=#{hash}"
      else
        # Если файл не найден, возвращаем оригинальный путь
        input
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::AssetHashFilter)
