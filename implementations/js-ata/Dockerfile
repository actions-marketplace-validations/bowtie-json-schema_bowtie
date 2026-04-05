FROM node:22-bookworm-slim
RUN apt-get update && \
    apt-get install -y --no-install-recommends libre2-dev libabsl-dev libmimalloc-dev && \
    rm -rf /var/lib/apt/lists/*
COPY . /usr/app
WORKDIR /usr/app
ENV NODE_ENV=production
RUN npm install --omit=dev
CMD ["node", "bowtie_ata.js"]
