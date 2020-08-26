# Define functions here
def career_bot():
  print("Welcome to the world of AWS! ")

  path = learning_path()
  background = tech_background()
  opportunities = other_considerations()
  print("Alright, you have chosen a {} learning path and are coming to us from an employment background in {}! You have also stated that you are {} in relocating.".format(path, background, opportunities))
  
  name = input("Can I get your full name please? \n> ")
  print("Welcome to the world of AWS, {}! Your recommended courses and curriculum will be sent to you shortly! Please let us know if you have any questions or concerns based on our recommendations. Thanks again and have a great day!".format(name))

def learning_path():
  res = input("What path of learning would you like to follow? \n[a] Solutions Architect \n[b] Sysops Admin \n[c] Developer \n[d] Security Specialty \n[e] Networking Specialty \n ")
  if res == "a":
    return "Solutions Architect"
  elif res == "b":
    return "Sysops Admin"
  elif res == "c":
    return "Developer"
  elif res == "d":
    return "Security Specialty"
  elif res == "e":
    return "Networking Specialty"
  else:
    print_message()
    return learning_path()  

def print_message():
  print("I'm sorry, I did not undersand your selection. Please enter the corresponding letter for your response.")

def tech_background():
  res = input("What type of tech background are you coming to us from? \n[a] Support Desk \n[b] Software Engineer \n[c] Tech Consultant \n[d] Application developement \n[e] Security \n> ")
  if res == "a":
    return "Support Desk"
  elif res == "b":
    return "Software Engineering"
  elif res == "c":
    return "Tech Consulting"
  elif res == "d":
    return "Application Development" 
  elif res == "e":
    return "Security"   
  else:
    print_message()
    return tech_background()  

def other_considerations():
  res = input("Would you be interested in relocating to work within another region outside of your current country of residence? \n[a] Yes \n[b] No \n> ")
  if res == "a":
    return "interested"
  elif res == "b":
    return "not interested"
  else:
    print_message()
    return other_considerations()

      
career_bot()
