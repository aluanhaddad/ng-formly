SystemJS.config({
  map: {
    "plugin-typescript": "github:frankwallis/plugin-typescript@7.0.6",
    "child_process": "npm:jspm-nodelibs-child_process@0.2.1",
    "assert": "npm:jspm-nodelibs-assert@0.2.1",
    "fs": "npm:jspm-nodelibs-fs@0.2.1",
    "path": "npm:jspm-nodelibs-path@0.2.3",
    "process": "npm:jspm-nodelibs-process@0.2.1",
    "buffer": "npm:jspm-nodelibs-buffer@0.2.3",
    "module": "npm:jspm-nodelibs-module@0.2.1",
    "util": "npm:jspm-nodelibs-util@0.2.2",
    "crypto": "npm:jspm-nodelibs-crypto@0.2.1",
    "os": "npm:jspm-nodelibs-os@0.2.2",
    "constants": "npm:jspm-nodelibs-constants@0.2.1",
    "stream": "npm:jspm-nodelibs-stream@0.2.1",
    "vm": "npm:jspm-nodelibs-vm@0.2.1",
    "events": "npm:jspm-nodelibs-events@0.2.2",
    "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.1",
    "net": "npm:jspm-nodelibs-net@0.2.1",
    "typescript": "npm:typescript@next",
    "plugin-babel": "npm:systemjs-plugin-babel@0.0.25",
    "blue-tape": "npm:blue-tape@1.0.0",
    "@types/tape": "npm:@types/tape@4.2.30",
    "@types/blue-tape": "npm:@types/blue-tape@0.1.31",
    "tape": "npm:tape@4.7.0",
    "http": "npm:jspm-nodelibs-http@0.2.0",
    "url": "npm:jspm-nodelibs-url@0.2.1"
  },
  packages: {
    "npm:jspm-nodelibs-buffer@0.2.3": {
      "map": {
        "buffer": "npm:buffer@5.0.6"
      }
    },
    "npm:buffer@5.0.6": {
      "map": {
        "ieee754": "npm:ieee754@1.1.8",
        "base64-js": "npm:base64-js@1.2.1"
      }
    },
    "npm:jspm-nodelibs-os@0.2.2": {
      "map": {
        "os-browserify": "npm:os-browserify@0.3.0"
      }
    },
    "npm:jspm-nodelibs-crypto@0.2.1": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.1"
      }
    },
    "npm:crypto-browserify@3.11.1": {
      "map": {
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.12",
        "browserify-sign": "npm:browserify-sign@4.0.4",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "create-hash": "npm:create-hash@1.1.3",
        "create-hmac": "npm:create-hmac@1.1.6",
        "inherits": "npm:inherits@2.0.3",
        "randombytes": "npm:randombytes@2.0.5"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "parse-asn1": "npm:parse-asn1@5.1.0",
        "bn.js": "npm:bn.js@4.11.7",
        "randombytes": "npm:randombytes@2.0.5"
      }
    },
    "npm:pbkdf2@3.0.12": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3",
        "sha.js": "npm:sha.js@2.4.8",
        "create-hmac": "npm:create-hmac@1.1.6",
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "ripemd160": "npm:ripemd160@2.0.1"
      }
    },
    "npm:browserify-sign@4.0.4": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "parse-asn1": "npm:parse-asn1@5.1.0",
        "bn.js": "npm:bn.js@4.11.7",
        "create-hmac": "npm:create-hmac@1.1.6",
        "inherits": "npm:inherits@2.0.3",
        "elliptic": "npm:elliptic@6.4.0"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.7",
        "elliptic": "npm:elliptic@6.4.0"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "bn.js": "npm:bn.js@4.11.7",
        "miller-rabin": "npm:miller-rabin@4.0.0",
        "randombytes": "npm:randombytes@2.0.5"
      }
    },
    "npm:create-hash@1.1.3": {
      "map": {
        "sha.js": "npm:sha.js@2.4.8",
        "inherits": "npm:inherits@2.0.3",
        "cipher-base": "npm:cipher-base@1.0.4",
        "ripemd160": "npm:ripemd160@2.0.1"
      }
    },
    "npm:parse-asn1@5.1.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3",
        "pbkdf2": "npm:pbkdf2@3.0.12",
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "asn1.js": "npm:asn1.js@4.9.1"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.7",
        "randombytes": "npm:randombytes@2.0.5"
      }
    },
    "npm:create-hmac@1.1.6": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3",
        "sha.js": "npm:sha.js@2.4.8",
        "cipher-base": "npm:cipher-base@1.0.4",
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "ripemd160": "npm:ripemd160@2.0.1"
      }
    },
    "npm:sha.js@2.4.8": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:cipher-base@1.0.4": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "browserify-des": "npm:browserify-des@1.0.0",
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.7",
        "brorand": "npm:brorand@1.1.0"
      }
    },
    "npm:elliptic@6.4.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.7",
        "inherits": "npm:inherits@2.0.3",
        "brorand": "npm:brorand@1.1.0",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
        "hmac-drbg": "npm:hmac-drbg@1.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
        "hash.js": "npm:hash.js@1.1.3"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "cipher-base": "npm:cipher-base@1.0.4",
        "des.js": "npm:des.js@1.0.0"
      }
    },
    "npm:jspm-nodelibs-stream@0.2.1": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "inherits": "npm:inherits@2.0.3",
        "cipher-base": "npm:cipher-base@1.0.4",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:asn1.js@4.9.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.7",
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3"
      }
    },
    "npm:ripemd160@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "hash-base": "npm:hash-base@2.0.2"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.3.3"
      }
    },
    "npm:randombytes@2.0.5": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:hmac-drbg@1.0.1": {
      "map": {
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
        "hash.js": "npm:hash.js@1.1.3"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:hash-base@2.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:hash.js@1.1.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:readable-stream@2.3.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "isarray": "npm:isarray@1.0.0",
        "string_decoder": "npm:string_decoder@1.0.3",
        "core-util-is": "npm:core-util-is@1.0.2",
        "util-deprecate": "npm:util-deprecate@1.0.2"
      }
    },
    "npm:string_decoder@1.0.3": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:jspm-nodelibs-string_decoder@0.2.1": {
      "map": {
        "string_decoder": "npm:string_decoder@0.10.31"
      }
    },
    "npm:source-map-support@0.4.15": {
      "map": {
        "source-map": "npm:source-map@0.5.6"
      }
    },
    "npm:typescript@next": {
      "map": {
        "source-map-support": "npm:source-map-support@0.4.15"
      }
    },
    "npm:@types/blue-tape@0.1.31": {
      "map": {
        "@types/tape": "npm:@types/tape@4.2.30",
        "@types/node": "npm:@types/node@8.0.14"
      }
    },
    "npm:blue-tape@1.0.0": {
      "map": {
        "tape": "npm:tape@4.7.0"
      }
    },
    "npm:@types/tape@4.2.30": {
      "map": {
        "@types/node": "npm:@types/node@8.0.14"
      }
    },
    "npm:tape@4.7.0": {
      "map": {
        "deep-equal": "npm:deep-equal@1.0.1",
        "defined": "npm:defined@1.0.0",
        "through": "npm:through@2.3.8",
        "has": "npm:has@1.0.1",
        "for-each": "npm:for-each@0.3.2",
        "inherits": "npm:inherits@2.0.3",
        "resumer": "npm:resumer@0.0.0",
        "function-bind": "npm:function-bind@1.1.0",
        "object-inspect": "npm:object-inspect@1.2.2",
        "resolve": "npm:resolve@1.3.3",
        "minimist": "npm:minimist@1.2.0",
        "glob": "npm:glob@7.1.2",
        "string.prototype.trim": "npm:string.prototype.trim@1.1.2"
      }
    },
    "npm:has@1.0.1": {
      "map": {
        "function-bind": "npm:function-bind@1.1.0"
      }
    },
    "npm:resumer@0.0.0": {
      "map": {
        "through": "npm:through@2.3.8"
      }
    },
    "npm:for-each@0.3.2": {
      "map": {
        "is-function": "npm:is-function@1.0.1"
      }
    },
    "npm:glob@7.1.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "inflight": "npm:inflight@1.0.6",
        "path-is-absolute": "npm:path-is-absolute@1.0.1",
        "fs.realpath": "npm:fs.realpath@1.0.0",
        "minimatch": "npm:minimatch@3.0.4",
        "once": "npm:once@1.4.0"
      }
    },
    "npm:resolve@1.3.3": {
      "map": {
        "path-parse": "npm:path-parse@1.0.5"
      }
    },
    "npm:string.prototype.trim@1.1.2": {
      "map": {
        "function-bind": "npm:function-bind@1.1.0",
        "es-abstract": "npm:es-abstract@1.7.0",
        "define-properties": "npm:define-properties@1.1.2"
      }
    },
    "npm:inflight@1.0.6": {
      "map": {
        "once": "npm:once@1.4.0",
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:es-abstract@1.7.0": {
      "map": {
        "function-bind": "npm:function-bind@1.1.0",
        "es-to-primitive": "npm:es-to-primitive@1.1.1",
        "is-regex": "npm:is-regex@1.0.4",
        "is-callable": "npm:is-callable@1.1.3"
      }
    },
    "npm:once@1.4.0": {
      "map": {
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:minimatch@3.0.4": {
      "map": {
        "brace-expansion": "npm:brace-expansion@1.1.8"
      }
    },
    "npm:define-properties@1.1.2": {
      "map": {
        "object-keys": "npm:object-keys@1.0.11",
        "foreach": "npm:foreach@2.0.5"
      }
    },
    "npm:es-to-primitive@1.1.1": {
      "map": {
        "is-callable": "npm:is-callable@1.1.3",
        "is-symbol": "npm:is-symbol@1.0.1",
        "is-date-object": "npm:is-date-object@1.0.1"
      }
    },
    "npm:is-regex@1.0.4": {
      "map": {
        "has": "npm:has@1.0.1"
      }
    },
    "npm:brace-expansion@1.1.8": {
      "map": {
        "concat-map": "npm:concat-map@0.0.1",
        "balanced-match": "npm:balanced-match@1.0.0"
      }
    },
    "npm:jspm-nodelibs-http@0.2.0": {
      "map": {
        "http-browserify": "npm:stream-http@2.7.2"
      }
    },
    "npm:stream-http@2.7.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.3.3",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "xtend": "npm:xtend@4.0.1",
        "builtin-status-codes": "npm:builtin-status-codes@3.0.0"
      }
    },
    "npm:jspm-nodelibs-url@0.2.1": {
      "map": {
        "url": "npm:url@0.11.0"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "punycode": "npm:punycode@1.3.2",
        "querystring": "npm:querystring@0.2.0"
      }
    }
  }
});
