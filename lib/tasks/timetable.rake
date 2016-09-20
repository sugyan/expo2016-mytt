# coding: utf-8

namespace :timetable do
  desc 'TODO'
  task main: :environment do
    return if Time.zone.now > Time.zone.local(2016, 9, 26)

    days = {
      Date.new(2016, 9, 24) => 'http://leadi.jp/json/5194.json',
      Date.new(2016, 9, 25) => 'http://leadi.jp/json/5195.json'
    }
    results = []
    days.each do |day, url|
      open(url) do |f|
        JSON.parse(f.read)['data']['timetables'].each do |e|
          stage = e['stage']
          color = e['color']
          e['turns'].each do |item|
            results << {
              stage: stage,
              color: color,
              start: Time.zone.strptime("#{day} #{item['start'].rjust(4, '0')}", '%Y-%m-%d %H%M'),
              end:   Time.zone.strptime("#{day} #{item['end'].rjust(4, '0')}", '  %Y-%m-%d %H%M'),
              replacement: item['replacement'],
              lineup: item['lineup'].map { |lineup| lineup['name'] }
            }
          end
        end
      end
    end
    results.sort_by!.with_index { |v, i| [v[:start], i] }
    Rails.cache.write('main', results)
  end
end
