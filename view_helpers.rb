module ViewHelpers
  def data
    d||=YAML.load_file(File.join(File.dirname(__FILE__), 'data.yml'))
    return d
  end

  def site_title
    page_name = content_for :page_name
    return page_name + " | " + data['site-title'] if content_for? :page_name
    data['site-title']
  end
end
