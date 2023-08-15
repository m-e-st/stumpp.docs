#! /bin/sh
for filename in src/static/res/*.js
	do uglifyjs $filename --output public/static/res/`basename $filename`
done
for filename in src/static/dta/*.js
	do uglifyjs $filename --output public/static/dta/`basename $filename`
done
