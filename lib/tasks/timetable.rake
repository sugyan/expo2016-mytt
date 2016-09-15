# coding: utf-8

namespace :timetable do
  desc 'TODO'
  task main: :environment do
    days = {
      1 => 'http://leadi.jp/json/5194.json',
      2 => 'http://leadi.jp/json/5195.json'
    }
    results = []
    days.each do |day, url|
      open(url) do |f|
        JSON.parse(f.read)['data']['timetables'].each do |e|
          stage = e['stage']
          e['turns'].each do |item|
            results << {
              day: day,
              stage: stage,
              start: item['start'],
              end: item['end'],
              replacement: item['replacement'],
              lineup: item['lineup'].map { |lineup| lineup['name'] }
            }
          end
        end
      end
    end
    p results
  end
end
