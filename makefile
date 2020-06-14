prod:
	node index.js --clean production
dev:
	node index.js dev
prodpush:
	git push
	git ftp -v --syncroot build push  
