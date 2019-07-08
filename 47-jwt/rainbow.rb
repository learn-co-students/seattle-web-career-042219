require 'bcrypt'

passphrase = "a"
while true
  hash = BCrypt::Password.create(passphrase)
  puts "#{passphrase} #{hash}"
  passphrase = passphrase.next  
end
