lint: # run linter
	npx eslint .

install: # The command to install dependencies from a lockfile is:
	npm ci

publish: # publish package 
	npm publish --dry-run

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

