# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#


chases = [
    { name: 'ChaseWhatMattrs' },
    { name: 'ChaseYourTail' },
    { name: '2Chase2Furious' },
    { name: 'ChaseYourDreams' },
    { name: 'PoliceChase' },
    { name: 'StopChasing' },
    { name: 'CyberChase' },
    { name: 'IsReallyChase' },
    { name: 'ThisIsntChase' },
]

chases.each do | chase |
    Passenger.create(chase)
end

airlines = [
    { name: 'United' },
    { name: 'Spirit' },
    { name: 'Southwest' },
]

airlines.each do | airline |
    Airline.create(airline)
end