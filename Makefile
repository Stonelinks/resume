FILENAME = lucas_doyle_resume
MD = markdown -x toc
ARCH = $(shell uname -m)

# compilation
##########################################

.PHONY: compile.text compile.markdown compile.html compile.pdf compile

compile.text:
	@rm $(FILENAME).txt 2> /dev/null &
	@sleep 1
	@echo "compiling text version of $(FILENAME)"
	@python generator.py txt > $(FILENAME).txt

compile.markdown:
	@rm $(FILENAME).md 2> /dev/null &
	@sleep 1
	@echo "compiling markdown version of $(FILENAME)"
	@python generator.py md > $(FILENAME).md

compile.html:
	@rm $(FILENAME).html 2> /dev/null &
	@sleep 1
	@echo "compiling html version of $(FILENAME)"
	@cat static/header.html > $(FILENAME).html
	@python generator.py html >> $(FILENAME).html
	@cat static/footer.html >> $(FILENAME).html

compile.pdf:
	@rm $(FILENAME).tmp.html 2> /dev/null &
	@rm $(FILENAME).pdf 2> /dev/null &
	@sleep 1
	@echo "compiling pdf version of $(FILENAME)"
	@ # avoid naming collisions with normal html
	@cat static/header-pdf.html > $(FILENAME).tmp.html
	@python generator.py html >> $(FILENAME).tmp.html
	@cat static/footer.html >> $(FILENAME).tmp.html
	@./wkhtmltopdf-$(ARCH) $(FILENAME).tmp.html $(FILENAME).pdf
	@rm $(FILENAME).tmp.html 2> /dev/null &

compile: compile.text compile.markdown compile.html compile.pdf

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
