build:
	podman run -ti --rm -v .:/srv/jekyll -e JEKYLL_ROOTLESS=1 jvconseil/jekyll-docker jekyll build
serve:
	podman run -ti -p 4000:4000 --rm -v .:/srv/jekyll -e JEKYLL_ROOTLESS=1 jvconseil/jekyll-docker jekyll serve --watch
drafts:
	podman run -ti -p 4000:4000 --rm -v .:/srv/jekyll -e JEKYLL_ROOTLESS=1 jvconseil/jekyll-docker jekyll serve --watch --drafts
cmd:
	podman run -ti --rm -v .:/srv/jekyll -e JEKYLL_ROOTLESS=1 jvconseil/jekyll-docker bash
