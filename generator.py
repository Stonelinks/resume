import json
import sys

def wrap(tag, text):
  return '<' + tag + '>' + text + '</' + tag + '>'

def multiline_format(text, indent=0):
  max_line_width = 70
  line = ''
  s = ''
  indent_string = ' ' * indent
  for word in text.split(' '):
    if len(line) + len(word) + 1 < max_line_width:
      line += word + ' '
    else:
      s += line + ' ' * (max_line_width - len(line)) + '\n'
      line = indent_string + word + ' '
  return s + line

class Resume():
  def __init__(self, **entries): 
    self.__dict__.update(entries)
  
  def name(self):
    return self.me.name.first + ' ' + self.me.name.MI + '. ' + self.me.name.last
  
class Writer():
  def __init__(self):
    pass
  
  def write(self, resume):
    s = ''
    sections = [self.header, self.education, self.professional, self.projects, self.skills, self.leadershipactivities]
    for section in sections:
      s += section(resume)
    return s

class text(Writer):
  seperator = '=============================================='
  newline = '\n'
  
  def header(self, resume):
    return self.newline.join([resume.name(), resume.me.email, resume.me.cellphone, resume.me.address.first, resume.me.address.second, resume.me.website.address]) + 2*self.newline

  def process_section(self, label, data):
    s = label + self.newline
    s += self.seperator
    s += 2*self.newline
    
    for thing in data:
      s += thing.name + self.newline
      try:
        interval = thing.start + ' - ' + thing.end
      except AttributeError:
        interval = thing.start
      s += thing.title + self.newline
      s += thing.where + '., ' + interval + self.newline
      try:
        s += multiline_format(thing.description) + 2*self.newline
      except AttributeError:
        for bullet in thing.bullets:
          s += ' - ' + multiline_format(bullet, indent=3) + self.newline
        s += self.newline
    return s

  def education(self, resume):
    s = 'Education' + self.newline
    s += self.seperator
    s += 2*self.newline
    
    for school in resume.education:
      s += school.name + self.newline
      s += school.where + '. ' + school.start + ' - ' + school.end + self.newline
      try:
        s += school.degree + ', '
      except AttributeError:
        pass
      s += 'GPA of ' + school.GPA + 2*self.newline
    return s
  
  def professional(self, resume):
    return self.process_section('Professional', resume.professional)
    
  def projects(self, resume):
    return self.process_section('Notable Projects and Open Source', resume.projects)

  def skills(self, resume):
    s = 'Technical Skills' + self.newline
    s += self.seperator
    s += 2*self.newline
    
    for skill in resume.skills:
      s += skill.name + self.newline
      s += multiline_format(skill.description)
      s += 2*self.newline
    return s

  def leadershipactivities(self, resume):
    return self.process_section('Student Leadership and Activities', resume.leadershipactivities)

class markdown(Writer):
  seperator = '=========='
  newline = '\n\n'
  
  def header(self, resume):
    s = '#' + resume.name() + self.newline
    s += '###' + resume.me.email + self.newline
    s += resume.me.cellphone + self.newline
    s += resume.me.address.first + self.newline
    s += resume.me.address.second + self.newline
    s += resume.me.website.address
    s += 2*self.newline
    return s
    
  def process_section(self, label, data):
    s = '##' + label + self.newline
    s += self.seperator
    s += 2*self.newline
    
    for thing in data:
      s += '###' + thing.name + self.newline
      try:
        interval = thing.start + ' - ' + thing.end
      except AttributeError:
        interval = thing.start
      s += thing.title + self.newline
      s += thing.where + '., ' + interval + self.newline
      try:
        s += thing.description + 2*self.newline
      except AttributeError:
        for bullet in thing.bullets:
          s += ' - ' + multiline_format(bullet, indent=3) + self.newline
        s += self.newline
    return s

  def education(self, resume):
    s = '##Education' + self.newline
    s += self.seperator
    s += 2*self.newline
    
    for school in resume.education:
      s += '###' + school.name + self.newline
      s += school.where + '. ' + school.start + ' - ' + school.end + self.newline
      try:
        s += school.degree + ', '
      except AttributeError:
        pass
      s += 'GPA of ' + school.GPA + 2*self.newline
    return s
  
  def professional(self, resume):
    return self.process_section('Professional', resume.professional)
    
  def projects(self, resume):
    return self.process_section('Notable Projects and Open Source', resume.projects)

  def skills(self, resume):
    s = '##Technical Skills\n'
    s += self.seperator
    s += 2*self.newline
    
    for skill in resume.skills:
      s += '###' + skill.name + self.newline
      s += multiline_format(skill.description) + self.newline
      s += self.newline
    return s

  def leadershipactivities(self, resume):
    return self.process_section('Student Leadership and Activities', resume.leadershipactivities)

if __name__ == "__main__":
  f = open('content.json')
  resume = json.loads(f.read(), object_hook=lambda o : Resume(**o))
  f.close()
  
  if 'txt' in sys.argv:
    writer = text()
  elif 'md' in sys.argv:
    writer = markdown()
  
  print writer.write(resume)
