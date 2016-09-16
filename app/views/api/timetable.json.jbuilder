# coding: utf-8

json.array! @data do |item|
  json.start item[:start].to_i
  json.end   item[:end].to_i
  json.stage item[:stage]
  json.color item[:color]
  json.artist item[:replacement] || item[:lineup].join('、')
end
