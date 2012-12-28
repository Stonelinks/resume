FILENAME = resume
MD = markdown -x toc

###############
# compilation #
###############
.PHONY: compile.markdown compile.html compile.pdf compile

compile.markdown:
	@rm $(FILENAME).md > /dev/null &
	@sleep 1
	@python resume.py md > $(FILENAME).md

compile.text:
	@rm $(FILENAME).txt > /dev/null &
	@sleep 1
	@python resume.py txt > $(FILENAME).txt

compile.html: compile.markdown
	@rm $(FILENAME).html > /dev/null &
	@sleep 1
	@cat static/header.html > $(FILENAME).html
	@$(MD) $(FILENAME).md >> $(FILENAME).html
	@cat static/footer.html >> $(FILENAME).html

compile.pdf: compile.markdown
	@rm $(FILENAME).html &
	@rm $(FILENAME).pdf &
	@sleep 1
	@cat static/header-pdf.html > $(FILENAME).html
	@$(MD) $(FILENAME).md >> $(FILENAME).html 
	@cat static/footer.html >> $(FILENAME).html
	@wkhtmltopdf $(FILENAME).html $(FILENAME).pdf

compile: compile.markdown compile.html compile.pdf

# deployment
##########################################

.PHONY: deploy.self deploy.stonelinks deploy

# move things into the root of this repository
deploy.self:
	pass

# deploy to stonelinks.org
deploy.stonelinks:
	pass

deploy: deploy.self deploy.stonelinks

# main
##########################################

.PHONY: all clean

all: clean compile deploy

clean:
	@rm $(FILENAME).md > /dev/null &
	@rm $(FILENAME).html > /dev/null &
	@rm $(FILENAME).txt > /dev/null &
	@rm $(FILENAME).pdf > /dev/null &
