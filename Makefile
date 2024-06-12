lint: # run linter
	npx eslint .
instal: # The command to install dependencies from a lockfile is:
	npm ci
publish: # publish package 
	npm publish --dry-run
