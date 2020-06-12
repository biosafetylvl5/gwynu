prod:
	node index.js --clean production
prodpush:
	git push
	git ftp -v --syncroot build push  
