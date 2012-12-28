import json

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
      s += line
      for _ in range(max_line_width - len(line)):
        s += ' '
      s += '\n'
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
  
  def header(self, resume):
    return '\n'.join([resume.name() + ' - ' + resume.me.email, resume.me.cellphone, resume.me.address.first + '\n' + resume.me.address.second, resume.me.website.address]) + '\n\n'

  def process_section(self, label, data):
    s = label + '\n'
    s += self.seperator
    s += '\n\n'
    
    for thing in data:
      s += thing.name + '\n'
      try:
        interval = thing.start + ' - ' + thing.end
      except AttributeError:
        interval = thing.start
      s += ', '.join([thing.title, thing.where, interval]) + '\n'
      try:
        s += multiline_format(thing.description) + '\n\n'
      except AttributeError:
        for bullet in thing.bullets:
          s += ' - ' + multiline_format(bullet, indent=3) + '\n'
        s += '\n'
    return s

  def education(self, resume):
    s = 'Education\n'
    s += self.seperator
    s += '\n\n'
    
    for school in resume.education:
      s += school.name + '\n'
      s += school.where + '. ' + school.start + ' - ' + school.end + '\n'
      try:
        s += school.degree + ', '
      except AttributeError:
        pass
      s += 'GPA of ' + school.GPA + '\n\n'
    return s
  
  def professional(self, resume):
    return self.process_section('Professional', resume.professional)
    
  def projects(self, resume):
    return self.process_section('Notable Projects and Open Source', resume.projects)

  def skills(self, resume):
    s = 'Technical Skills\n'
    s += self.seperator
    s += '\n\n'
    
    for skill in resume.skills:
      s += skill.name + '\n'
      s += multiline_format(skill.description) + '\n'
      s += '\n'
    return s

  def leadershipactivities(self, resume):
    return self.process_section('Student Leadership and Activities', resume.leadershipactivities)

if __name__ == "__main__":
  f = open('resume.json')
  resume = json.loads(f.read(), object_hook=lambda o : Resume(**o))
  f.close()
  
  #writers = [text(), html(), markdown()]
  writers = [text()]
  for writer in writers:
    print writer.write(resume)
