class Profile < ApplicationRecord

  COVERAGES = [
    5000,
    10000,
    15000,
    20000,
  ]

validates_presence_of :name, :birthday, :address, :email, :salary
validates :coverage,
  presence: true,
  includsion: { in: COVERAGES }

belongs_to :user
