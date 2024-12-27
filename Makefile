.PHONY: all build staging deploy

build:
	rm -rf output/
	@echo "Building site"
	zola build
	@echo "Pre-compressing files using Brotli"
	find output -type f \( -name "*.html" -o -name "*.svg" -o -name "*.js" -o -name "*.css" -o -name "*.xml" \) -exec brotli {} \;