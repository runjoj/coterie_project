class Profile < ApplicationRecord

  COVERAGES = [
    5000,
    10000,
    15000,
    20000,
  ]

  validates_presence_of :name, :birthday, :address, :email, :salary, :coverage

  belongs_to :user

end
