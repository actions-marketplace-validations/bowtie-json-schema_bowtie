FROM unisonlang/unison:1.1.1 as builder

COPY --chown=unison:unison bowtie-typed-json.md scratch.u /bowtie/
WORKDIR /bowtie
RUN ucm transcript bowtie-typed-json.md; \
    cat bowtie-typed-json.output.md

FROM unisonlang/unison:1.1.1

COPY --from=builder /bowtie/bowtie-typed-json.uc /bowtie-typed-json.uc
CMD ["run.compiled", "/bowtie-typed-json.uc"]
