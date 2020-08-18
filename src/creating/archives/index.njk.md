---
author: Gwyn Uttmark
title: Archiving
layout: body.njk
---

# Archiving

In Winter of 2019, I was reading *Everywhere Archives, Transgendering, Trans Asians, and the Internet* which used a youtube video by "Zach" as one of it's focal points. Ironically enough, the piece with "Archives" in it's name referenced a youtube video that was no longer up. I was curious, so I went to see if I could find it. Alas, I could find it nowhere. Not archive.org, not r/datahoarder, not even sketchy youtube dumps^[Please let me know if you find it!!]. Online content is rapidly undergoing [link rot](https://www.gwern.net/Archiving-URLs#link-rot) and queer media is especially at risk.

![The original citation in *EVERYWHERE ARCHIVES: Transgendering, Trans Asians, and the Internet*](./the-missing-youtube-video-citation.png)

[toc]

## Archives

### Queer Content

Queer content is highly susceptible to link rot - factors that generally conspire to hinder queer lives (employment discrimination, homelessness, education discrimination and increased medical costs) collude when it comes to paying bills. And when someone needs to make hard decisions, one might reasonably expect server costs are one of the first things to go.

Archiving - preserving content so that we may revisit it later - is *extremely* important. Archives are collections of primary sources that, in this case, give us a a portal to explore queer history. That tumblr discourse might not seem important, but who knows now if you're seeing the first notion of a larger change that will unfold in the future. The best archives are built proactively, when the content is still hot - this is where **YOU** come in!

Submit content [here][submitContentForm] to be archived!! Submit a home page to archive the entire website, but submit a *specific* page to archive *just that page*. If you'd like a link to the archived content you can share your contact details.

#### Websites

##### Reddit

I'm archiving the following subreddits monthly with [my fork of redditPostArchiver](#redditpostarchiver):

```text
!!!include(./symlinks/subreddits.txt)!!!
```

Submit more to be archived [here][submitContentForm] - holes from my biases are *clearly* visible in the above subreddits, please help me fill them!

I'm currently working on a way to share these, but the files are a bit large to server via this webserver (asktransgender (text only) is ~2.4Gb and is *much more* with images and other media). For now, please [contact me][contact] if you'd like a copy. 

## Software Backend

### General Setup

@startuml

node "Local Machine (Johnny)" {

 control "Python Schedular" as schedular
 file "Content To Be Archived" as content
 schedular <-right- content
 
 storage {
  storage wget
  storage "youtube-dl" as youtubedl
  storage redditPostArchiver
  
  schedular--> wget
  schedular --> youtubedl
  schedular --> redditPostArchiver
  
  storage mitmproxy
  storage proxychains 
  
  wget --> mitmproxy
  youtubedl --> proxychains
  redditPostArchiver --> proxychains
  mitmproxy --> proxychains
 }
}

cloud {
  proxychains-->[...]
  proxychains-->[VPN 3]
  proxychains-->[VPN 2]
  proxychains-->[VPN 1]
}

cloud {
   file "Online Content" as oc
   [VPN 1]-->oc
   [VPN 2]-->oc
   [VPN 3]-->oc
   [...]-->oc
}

@enduml

Inspired by [gwern's efforts archiving darknet markets](https://www.gwern.net/DNM-archives) archives are created in a pipeline with three main parts:

1. **Scheduling:** Content to be archived is queued for download in regular intervals
2. **Request generation:** generating and filtering requests to online content for archival
3. **Source diversification:** splittting requests accros multiple proxys

### Scheduling

[TODO]

### Request Generation

Requests are sorted by the schedular and sent to various archival tools. Some, like wget, require a paternalistic hand and are filtered through [mitmproxy](#mitmproxy) to prevent unsavory behaviour like downloading unnessesary pages and logging the scraper out of the website being scraped.

#### mitmproxy

[mitmproxy](https://mitmproxy.org) is a tool that works as a Man in the Middle and allows us to filter our requests that a tool makes. Even though wget has [options for accepting/rejecting links](https://www.gnu.org/software/wget/manual/wget.html#Recursive-Accept_002fReject-Options) using mitmproxy allows us to assign specific http status codes to forbidden pages *and* mitmproxy can be scripted in python instead of just regex. 

For example, [gayplants.noblogs.org](https://gayplants.noblogs.org) has links that aren't hyperlinked which means wget will skip over them. Linkifying these textual links is as easy as:

```python
from mitmproxy import http
from bleach.linkifier import Linker
linker = Linker()

def response(flow: http.HTTPFlow) -> None:
    try:
        if "text/html" in flow.response.headers["Content-Type"]: # we only want to modify html pages not, say, pdfs
            flow.response.content = 
            	str.encode( # re-encode text to bytes object
            		linker.linkify( # use bleach's built-in linkify function
            		flow.response.content.decode() # decode bytes object
            		)
            	)
    except KeyError, UnicodeDecodeError as e:
        pass
```

which would be run with:

```bash
mitmdump -s extractLinks.py
```

#### redditPostArchiver

[redditPostArchiver](https://github.com/pl77/redditPostArchiver) is written in python and supports downloading reddit subreddits to a local database file. Originally written by GitHub user [pl77](https://github.com/pl77), it worked but needed some updating to work on python 3.8. It also needed some other work (bug fixing, error handling, probably some logging and a quiet mode). I'm working on that in my forked repository [here](https://github.com/biosafetylvl5/redditPostArchiver). The last original commit by pl77 was in 2018, and they have [other projects that keep taking precedence](https://github.com/pl77/redditPostArchiver/pull/3).

#### wget

I use the following command to download a website for archival:

```bash
wget	--page-requisites \
	--adjust-extension \
	--convert-links \
	--level inf \
	--recursive \
	--no-remove-listing \
	--restrict-file-names=windows \
	--no-parent \
	-w 0.2 \
	--warc-file=$website \
	--warc-cdx=$website \
	--warc-max-size=1G \
	-o ./logs/$website.wget.log \
	-e use_proxy=yes \
	-e http_proxy=127.0.0.1:9090 \
	-e https_proxy=127.0.0.1:9090 \
	--no-check-certificate \
	$website
```

Breaking that down into readable chunks we have:

- `wget`: runs the [wget](https://en.wikipedia.org/wiki/Wget) tool.
- `--page-requisites`: download all the files that are necessary to properly display a given HTML page. This includes such things as inlined images, sounds, and referenced stylesheets.
- `--adjust-extension`: append `.html`, `.css` or other appropriate file extensions if not specified by the server provided filename
- `--convert-links`: converts links to reference local files instead of remote files
- `--level inf --recursive`: turns on recursion with an infinite recursion depth to download links found in pages downloaded
- `--no-remove-listing`: keep `.listing` files generated when retreiving files via FTP
- `--restrict-file-names=windows`: make sure all file names are compatible with windows
- `--no-parent`: don't move up the website heigharchy, only download subdirectories
- `-w 0.2`: wait 0.2 seconds between requests to be polite
- `--warc-file=$website`: save output to [a WARC (WebARChive) file](https://en.wikipedia.org/wiki/Web_ARChive)
- `--warc-cdx=$website`: save a summary of each downloaded file to a cdx file
- `--warc-max-size=1G`: break up warc file into 1Gb chunks
- `-o ./logs/$website.wget.log`: save logs to a file
- `-e use_proxy=yes -e http_proxy=127.0.0.1:9090 -e https_proxy=127.0.0.1:9090`: set wget to channel requests through port 9090 where [mitmproxy](#mitmproxy) is running 
- `--no-check-certificate`: don't check ssl certificates, mitmproxy will raise a wget error without this
- `$website`: the website to download!

Misconfiguring your crawler is a setup for disaster! As a particurally salient example, I need only point at the first website I tried to mirror which resulted in a ***22GB Log File***:

```bash
.../websites/susans.org >>> du -sh ./*
45M	./warcfile.cdx
3.8G	./warcfile.warc.gz
172M	./wget.log
22G	./wget.rejection.log
19G	./www.susans.org
```


#### youtube-dl & youtube-comment-scraper

I archive channels with:

```bash
channelIDs=(0mTlVosk4bQ AiU-KZ_KADY) # array of youtube video ids
for channelID in "${channelIDs[@]}"
do
	echo "executing script in directory" "$PWD" "downloading channel" "$channelID"
	youtube-dl --download-archive "archive.log" -i --add-metadata --all-subs --embed-subs --write-all-thumbnails --write-auto-sub --all-subs --embed-thumbnail --write-annotations --write-info-json -f $youtubedlformat" "https://www.youtube.com/channel/$channelID
done"
```

and individual videos and their associated comments with:

```bash
videoIDs=(0mTlVosk4bQ AiU-KZ_KADY) # array of youtube video ids
for videoID in "${videoIDs[@]}"
do
	echo "executing script in directory" "$PWD" "downloading video" "$videoID"
	youtube-dl --download-archive "archive.log" -i --add-metadata --all-subs --embed-subs --write-all-thumbnails --write-auto-sub --all-subs --embed-thumbnail --write-annotations --write-info-json -f "$youtubedlformat" "https://www.youtube.com/watch?v=$videoID"
	videoDIR=$( find ./ -type d -name "*$videoID" )
	echo Attempting to write comments to "$videoDIR/comments.json"
	youtube-comment-scraper -o "$videoDIR/comments.json" -f json "$videoID"
	echo Done with $videoID
done
```

where [this reddit post](https://www.reddit.com/r/DataHoarder/comments/c6fh4x/after_hoarding_over_50k_youtube_videos_here_is/) is the source for:

```
youtubedlformat = "(bestvideo[vcodec^=av01][height>=1080][fps>30]/bestvideo[vcodec=vp9.2][height>=1080][fps>30]/bestvideo[vcodec=vp9][height>=1080][fps>30]/bestvideo[vcodec^=av01][height>=1080]/bestvideo[vcodec=vp9.2][height>=1080]/bestvideo[vcodec=vp9][height>=1080]/bestvideo[height>=1080]/bestvideo[vcodec^=av01][height>=720][fps>30]/bestvideo[vcodec=vp9.2][height>=720][fps>30]/bestvideo[vcodec=vp9][height>=720][fps>30]/bestvideo[vcodec^=av01][height>=720]/bestvideo[vcodec=vp9.2][height>=720]/bestvideo[vcodec=vp9][height>=720]/bestvideo[height>=720]/bestvideo)+(bestaudio[acodec=opus]/bestaudio)/best" --merge-output-format mkv -o "$PWD/%(upload_date)s - %(title)s - %(id)s/%(upload_date)s - %(title)s - %(id)s.%(ext)s" 
```

### Source Diversification

I use [proxychains](https://github.com/haad/proxychains) to route requests through multiple vpns to lower the chance I get banned by a server that I'm scraping. I use the `random` mode with a chain length of `1`.

## Legacy Content

### wpull

> Wpull is a Wget-compatible (or remake/clone/replacement/alternative) web downloader and crawler. [wpull](https://github.com/ArchiveTeam/wpull)

wpull is cool! But I quickly realized it was a bit too unstable for regular use.

#### Recursive Website Archiving

I briefly used the following command to recursively archive mediawikis:

```bash
wpull https://www.susans.org/wiki/Main_Page \
    --warc-move susans-wiki \
    --warc-file susans-wiki --no-check-certificate \
    --no-robots --user-agent "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36" \
    --wait 0.5 --random-wait --waitretry 600 \
    --page-requisites --page-requisites-level 1 --recursive --level inf \
    --escaped-fragment --strip-session-id --sitemaps \
    --reject-regex "Template:|Skin:|Skins:|User:|Special:|User_talk:|index\.php|\/extensions\/|\/skins\/" \
    --accept-regex "\/wiki\/" \
    --tries 3 --retry-connrefused --retry-dns-error \
    --timeout 60 --session-timeout 21600 \
    --database susans-wiki.db \
    --output-file susans-wiki.log \
    -v --server-response
```

With [Susan's Place's wiki](www.susans.org/wiki/Main_Page) as the given example.

#### Installation

I had quite the time installing [wpull](https://github.com/ArchiveTeam/wpull). The following finnaly worked:

```bash
sudo pacman -S openssl openssl-1.0 python-pyopenssl python2-pyopenssl pyen

# start up pyenv, add to startup for the future
pyenv init >> ~/.zshrc                                                                                                                                                                                                                    
eval "$(pyenv init -)"

# install new python version
sudo su
CONFIGURE_OPTS="--without-ensurepip" CFLAGS=-I/usr/include/openssl-1.0 \ LDFLAGS=-L/usr/lib64/openssl-1.0 \
# the stated version compatible with pull (3.4.3) doesn't work 
# abc.collections.Generator was introduced in python 3.5
# Let's install 3.5.9
pyenv install 3.5.9 
exit # exit su :eyes:

# check things are working
pyenv shell 3.5.9
python --version #> Python 3.5.9

# download wpull's dependencies
wget https://raw.githubusercontent.com/ArchiveTeam/wpull/develop/requirements.txt    
```

which (at the time) output:

```text
chardet>=2.0.1,<=2.3
dnspython3==1.12
html5lib>=0.999,<1.0
lxml>=3.1.0,<=3.5
namedlist>=1.3,<=1.7
psutil>=2.0,<=4.2
sqlalchemy>=0.9,<=1.0.13
tornado>=3.2.2,<5.0
typing>=3.5,<=3.5.1
yapsy==1.11.223
```

```bash
pip3 install -r requirements.txt
pip3 install html5lib==0.9999999 
pip3 install wpull

# reset shell to default python
pyenv shell system
```

and then wpull can be run with 

```bash
PYENV_VERSION=3.5.9 pyenv exec wpull
```

I set an alias to make things easy and make my script compatible with other systems:

```bash
echo 'alias wpull="PYENV_VERSION=3.5.9 pyenv exec wpull"' >> .bashrc  
```


[submitContentForm]: https://forms.gle/9AzbMLHCmhVrVuxb7
[contact]: archives@gwynu.dev
