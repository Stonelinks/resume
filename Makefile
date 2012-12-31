FILENAME = lucas_doyle_resume
MD = markdown -x toc

# compilation
##########################################

.PHONY: compile.text compile.markdown compile.html compile.pdf compile

compile.text:
	@rm $(FILENAME).txt 2> /dev/null &
	@sleep 1
	@python generator.py txt > $(FILENAME).txt

compile.markdown:
	@rm $(FILENAME).md 2> /dev/null &
	@sleep 1
	@python generator.py md > $(FILENAME).md

compile.html:
	@rm $(FILENAME).html 2> /dev/null &
	@sleep 1
	@cat static/header.html > $(FILENAME).html
	@python generator.py html >> $(FILENAME).html
	@cat static/footer.html >> $(FILENAME).html

compile.pdf:
	@rm $(FILENAME).html 2> /dev/null &
	@rm $(FILENAME).pdf 2> /dev/null &
	@sleep 1
	@cat static/header-pdf.html > $(FILENAME).html
	@python generator.py html >> $(FILENAME).html
	@cat static/footer.html >> $(FILENAME).html
	@wkhtmltopdf $(FILENAME).html $(FILENAME).pdf

compile: compile.text compile.markdown

# deployment
##########################################

.PHONY: deploy.stonelinks deploy

# deploy to stonelinks.org
deploy.stonelinks:
	pass

deploy: deploy.stonelinks

# main
##########################################

.PHONY: all clean

all: clean compile deploy

clean:
	@rm $(FILENAME).md 2> /dev/null &
	@rm $(FILENAME).html 2> /dev/null &
	@rm $(FILENAME).txt 2> /dev/null &
	@rm $(FILENAME).pdf 2> /dev/null &
