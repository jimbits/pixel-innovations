title = lambda do |str|
    
    case str
   when 'angular'
     field('angular')
   when 'css'
     field("css")
   when "bootstrap"
     field("bootstrap")
   when "javascript"
     field("javascript")
   when "node"
     field( "node")
   when "python"
     field("python")
   when "react"
     field("react")
   when "wordpress"
     field("wordpress")
   else
     null
   end
end

des = lambda do |str|
    description = field('topics')
    description = description + "copy"
     field(description)
  end