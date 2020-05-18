---
author: Gwyn Uttmark
title: Archiving
layout: body.njk
---

# Archiving

[toc]

## Archived Content

### Queer Websites

I archived [Susan's Places' wiki](https://www.susans.org/wiki/index.php?title=Main_Page&oldid=17026) on May 14th, 2020. The archive can be found [here on archive.org](TODO: ADD THIS).

### Reddit 

I'm archiving the following subreddits monthly with [redditPostArchiver](#redditPostArchiver):

```text
!!!include(./symlinks/subreddits.txt)!!!
```

I'm currently working on a way to share these, but the files are a bit large to server via this webserver (asktransgender (text only) is ~2.4Gb which is only cut in ~half (to 862Mb) with compression). For now, please contact me if you'd like a copy.

### Youtube

## Software Backend

### redditPostArchiver

[redditPostArchiver](https://github.com/pl77/redditPostArchiver) is written in python and supports downloading reddit subreddits to a local database file. Originally written by GitHub user [pl77](https://github.com/pl77), it worked but needed some updating to work on python 3.8. It also needed some other work (bug fixing, error handling, probably some logging and a quiet mode). I'm working on that in my forked repository [here](https://github.com/biosafetylvl5/redditPostArchiver). The last original commit by pl77 was in 2018, so I am not hopeful that they will continue to maintain it.


### wpull

> Wpull is a Wget-compatible (or remake/clone/replacement/alternative) web downloader and crawler. [wpull](https://github.com/ArchiveTeam/wpull)

wpull is cool! But I quickly realized it was a bit too unstable for archival use.

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

### youtube-dl & youtube-comment-scraper

I archive channels with:

```bash
echo "executing script in directory" "$PWD" "downloading channel" "$channelID"
youtube-dl --download-archive "archive.log" -i --add-metadata --all-subs --embed-subs --write-all-thumbnails --write-auto-sub --all-subs --embed-thumbnail --write-annotations --write-info-json -f "(bestvideo[vcodec^=av01][height>=1080][fps>30]/bestvideo[vcodec=vp9.2][height>=1080][fps>30]/bestvideo[vcodec=vp9][height>=1080][fps>30]/bestvideo[vcodec^=av01][height>=1080]/bestvideo[vcodec=vp9.2][height>=1080]/bestvideo[vcodec=vp9][height>=1080]/bestvideo[height>=1080]/bestvideo[vcodec^=av01][height>=720][fps>30]/bestvideo[vcodec=vp9.2][height>=720][fps>30]/bestvideo[vcodec=vp9][height>=720][fps>30]/bestvideo[vcodec^=av01][height>=720]/bestvideo[vcodec=vp9.2][height>=720]/bestvideo[vcodec=vp9][height>=720]/bestvideo[height>=720]/bestvideo)+(bestaudio[acodec=opus]/bestaudio)/best" --merge-output-format mkv -o "$PWD/%(channel)s - %(channel_id)s/%(upload_date)s - %(title)s - %(id)s/%(upload_date)s - %(title)s - %(id)s.%(ext)s" "https://www.youtube.com/channel/$channelID"
```

and individual videos with:

```bash
echo "executing script in directory" "$PWD" "downloading video" "$videoID"
youtube-dl --download-archive "archive.log" -i --add-metadata --all-subs --embed-subs --write-all-thumbnails --write-auto-sub --all-subs --embed-thumbnail --write-annotations --write-info-json -f "(bestvideo[vcodec^=av01][height>=1080][fps>30]/bestvideo[vcodec=vp9.2][height>=1080][fps>30]/bestvideo[vcodec=vp9][height>=1080][fps>30]/bestvideo[vcodec^=av01][height>=1080]/bestvideo[vcodec=vp9.2][height>=1080]/bestvideo[vcodec=vp9][height>=1080]/bestvideo[height>=1080]/bestvideo[vcodec^=av01][height>=720][fps>30]/bestvideo[vcodec=vp9.2][height>=720][fps>30]/bestvideo[vcodec=vp9][height>=720][fps>30]/bestvideo[vcodec^=av01][height>=720]/bestvideo[vcodec=vp9.2][height>=720]/bestvideo[vcodec=vp9][height>=720]/bestvideo[height>=720]/bestvideo)+(bestaudio[acodec=opus]/bestaudio)/best" --merge-output-format mkv -o "$PWD/%(upload_date)s - %(title)s - %(id)s/%(upload_date)s - %(title)s - %(id)s.%(ext)s" "https://www.youtube.com/watch?v=$videoID"
videoDIR=$( find ./ -type d -name "*0mTlVosk4bQ" )
echo Attempting to write comments to "$videoDIR/comments.json"
youtube-comment-scraper -o "$videoDIR/comments.json" -f json "$videoID"
echo Done.
```

See [this reddit post](https://www.reddit.com/r/DataHoarder/comments/c6fh4x/after_hoarding_over_50k_youtube_videos_here_is/) for inspiration.



