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

class resume_container():
  def __init__(self, **entries): 
    self.__dict__.update(entries)
  
  def name(self):
    return self.me.name.first + ' ' + self.me.name.MI + '. ' + self.me.name.last
  
class text_writer():
  seperator = '=============================================='
  newline = '\n'
  
  def write(self, resume):
    s = ''
    sections = [self.header, self.education, self.professional, self.projects, self.skills, self.leadershipactivities]
    for section in sections:
      s += section(resume)
    return s

  def header(self, resume):
    return self.newline.join([resume.name(), resume.me.email, resume.me.cellphone, resume.me.address.first, resume.me.address.second, resume.me.website.address]) + 2*self.newline

  def process_section(self, label, data):
    s = label + self.newline
    s += self.seperator
    s += 2*self.newline
    
    for thing in data:
      s += thing.name + self.newline
      if hasattr(thing, 'end'):
        interval = thing.start + ' - ' + thing.end
      else:
        interval = thing.start
      s += thing.title + self.newline
      s += thing.where + '., ' + interval + self.newline
      if hasattr(thing, 'description'):
        s += multiline_format(thing.description) + 2*self.newline
      else:
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
      if hasattr(school, 'degree'):
        s += school.degree + ', '
      else:
        pass
      s += 'GPA of ' + school.GPA + 2*self.newline
    return s
  
  def skills(self, resume):
    s = 'Technical Skills' + self.newline
    s += self.seperator
    s += self.newline
    
    for skill in resume.skills:
      s += skill.name + self.newline
      s += multiline_format(skill.description)
      s += 2*self.newline
    return s

  def professional(self, resume):
    return self.process_section('Professional', resume.professional)
    
  def projects(self, resume):
    return self.process_section('Notable Projects and Open Source', resume.projects)

  def leadershipactivities(self, resume):
    return self.process_section('Student Leadership and Activities', resume.leadershipactivities)

class markdown_writer(text_writer):
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
      if hasattr(thing, 'end'):
        interval = thing.start + ' - ' + thing.end
      else:
        interval = thing.start
      s += thing.title + self.newline
      s += thing.where + '., ' + interval + self.newline
      if hasattr(thing, 'description'):
        s += thing.description + 2*self.newline
      else:
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
      if hasattr(school, 'degree'):
        s += school.degree + ', '
      else:
        pass
      s += 'GPA of ' + school.GPA + 2*self.newline
    return s
  
  def skills(self, resume):
    s = '##Technical Skills\n'
    s += self.seperator
    s += self.newline
    
    for skill in resume.skills:
      s += '###' + skill.name + self.newline
      s += multiline_format(skill.description) + self.newline
      s += self.newline
    return s

class html_writer(text_writer):
  seperator = ''
  newline = '<br>'
  
  def header(self, resume):
    s = '<div class="row-fluid">'
    s += '<div class="span4">'
    s += wrap('h3', resume.me.address.first)
    s += wrap('h3', resume.me.address.second)
    s += '</div>'
    s += '<div class="span4" style="text-align: center;">'
    s += wrap('h1', resume.name())
    s += wrap('h3', '<a href="mailto:' + resume.me.email + '">' + resume.me.email + '</a>')
    s += '</div>'
    s += '<div class="span4" style="text-align: right;">'
    s += wrap('h3', '<a style="color: #DD4814;" href="' + resume.me.website.address + '" target="_blank">' + resume.me.website.name + '</a>')
    s += wrap('h3', 'Cell: ' + resume.me.cellphone)
    
    for network in resume.me.socialNetworks:
      s += '<a href="' + network.address + '">'
      s += '<img style="width: 20px; height: 20px; padding-right: 8px;" src="http://stonelinks.org/static/img/resume/' + network.name + '.png">'
      s += '</a>'

    s += '</div>'
    s += '</div>'
    s += '<hr>'
    return s
    
  def process_section(self, label, data):
    s = wrap('h2', label) + self.newline
    s += '<ul style="list-style-type: none;">'
    
    for thing in data:

      s += '<li>'
      s += '<div class="row-fluid">'
      s += '<div class="span6">'
      s += wrap('h3', thing.name)
      s += wrap('em', thing.title)
      s += '</div>'
      s += '<div class="span3" style="text-align: right; font-size: 16px; height: 27px;">'
      s += wrap('em', thing.where)
      s += '</div>'
      s += '<div class="span3" style="text-align: right; height: 27px;">'
      if hasattr(thing, 'end'):
        interval = thing.start + ' - ' + thing.end
      else:
        interval = thing.start
      s += wrap('b', interval)
      s += '</div>'
      s += '</div>'
      if hasattr(thing, 'description'):
        s += '<ul style="list-style-type: none;">'
        s += wrap('li', thing.description)
        s += '</ul>'
      else:
        s += '<ul>'
        for bullet in thing.bullets:
          s += wrap('li', bullet)
        s += '</ul>'
      s += '</li>'
      s += '<br>'
    s += '</ul>'
    return s

  def education(self, resume):
    s = wrap('h2', 'Education') + self.newline
    s += '<ul style="list-style-type: none;">'
    
    for school in resume.education:

      s += '<li>'
      s += '<div class="row-fluid">'
      s += '<div class="span6">'
      s += wrap('h3', school.name)
      s += '</div>'
      s += '<div class="span3" style="text-align: right; font-size: 16px; height: 27px;">'
      s += wrap('em', school.where)
      s += '</div>'
      s += '<div class="span3" style="text-align: right; height: 27px;">'
      if hasattr(school, 'end'):
        interval = school.start + ' - ' + school.end
      else:
        interval = school.start
      s += wrap('b', interval)
      s += '</div>'
      s += '</div>'
      s += '<ul style="list-style-type: none;">'
      s += '<li>'
      if hasattr(school, 'degree'):
        s += school.degree + ', '
      else:
        pass
      s += wrap('b', 'GPA of ' + school.GPA)
      s += '</li>'
      s += '</ul>'
      s += '</li>'
      s += '<br>'
    s += '</ul>'
    s += '<br>'
    return s
  
  def skills(self, resume):
    s = wrap('h2', 'Technical Skills') + self.newline
    s += '<ul style="list-style-type: none;">'

    for skill in resume.skills:
      s += '<div class="row-fluid">'
      s += '<div class="span3">'
      s += wrap('h3', skill.name)
      s += '</div>'
      s += '<div class="span8">'
      s += skill.description
      s += '</div>'
      s += '</div>'
      s += '</li>'
      s += '</br>'
    s += '</ul>'
    return s

if __name__ == "__main__":
  f = open('content.json')
  resume = json.loads(f.read(), object_hook=lambda o : resume_container(**o))
  f.close()
  
  if 'txt' in sys.argv:
    writer = text_writer()
  elif 'md' in sys.argv:
    writer = markdown_writer()
  elif 'html' in sys.argv:
    writer = html_writer()
  
  print writer.write(resume)
