/*! For license information please see 0.23ad21c2.chunk.js.LICENSE.txt */
(this.webpackJsonpvisualisation = this.webpackJsonpvisualisation || []).push([[0], Array(155).concat([function(e, t, n) {
        "use strict";
        var a = n(198)
          , r = Object.prototype.toString;
        function i(e) {
            return "[object Array]" === r.call(e)
        }
        function o(e) {
            return "undefined" === typeof e
        }
        function s(e) {
            return null !== e && "object" === typeof e
        }
        function l(e) {
            if ("[object Object]" !== r.call(e))
                return !1;
            var t = Object.getPrototypeOf(e);
            return null === t || t === Object.prototype
        }
        function c(e) {
            return "[object Function]" === r.call(e)
        }
        function u(e, t) {
            if (null !== e && "undefined" !== typeof e)
                if ("object" !== typeof e && (e = [e]),
                i(e))
                    for (var n = 0, a = e.length; n < a; n++)
                        t.call(null, e[n], n, e);
                else
                    for (var r in e)
                        Object.prototype.hasOwnProperty.call(e, r) && t.call(null, e[r], r, e)
        }
        e.exports = {
            isArray: i,
            isArrayBuffer: function(e) {
                return "[object ArrayBuffer]" === r.call(e)
            },
            isBuffer: function(e) {
                return null !== e && !o(e) && null !== e.constructor && !o(e.constructor) && "function" === typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
            },
            isFormData: function(e) {
                return "undefined" !== typeof FormData && e instanceof FormData
            },
            isArrayBufferView: function(e) {
                return "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
            },
            isString: function(e) {
                return "string" === typeof e
            },
            isNumber: function(e) {
                return "number" === typeof e
            },
            isObject: s,
            isPlainObject: l,
            isUndefined: o,
            isDate: function(e) {
                return "[object Date]" === r.call(e)
            },
            isFile: function(e) {
                return "[object File]" === r.call(e)
            },
            isBlob: function(e) {
                return "[object Blob]" === r.call(e)
            },
            isFunction: c,
            isStream: function(e) {
                return s(e) && c(e.pipe)
            },
            isURLSearchParams: function(e) {
                return "undefined" !== typeof URLSearchParams && e instanceof URLSearchParams
            },
            isStandardBrowserEnv: function() {
                return ("undefined" === typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" !== typeof window && "undefined" !== typeof document)
            },
            forEach: u,
            merge: function e() {
                var t = {};
                function n(n, a) {
                    l(t[a]) && l(n) ? t[a] = e(t[a], n) : l(n) ? t[a] = e({}, n) : i(n) ? t[a] = n.slice() : t[a] = n
                }
                for (var a = 0, r = arguments.length; a < r; a++)
                    u(arguments[a], n);
                return t
            },
            extend: function(e, t, n) {
                return u(t, (function(t, r) {
                    e[r] = n && "function" === typeof t ? a(t, n) : t
                }
                )),
                e
            },
            trim: function(e) {
                return e.replace(/^\s*/, "").replace(/\s*$/, "")
            },
            stripBOM: function(e) {
                return 65279 === e.charCodeAt(0) && (e = e.slice(1)),
                e
            }
        }
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                function t(e, t) {
                    return "___" + e.toUpperCase() + t + "___"
                }
                Object.defineProperties(e.languages["markup-templating"] = {}, {
                    buildPlaceholders: {
                        value: function(n, a, r, i) {
                            if (n.language === a) {
                                var o = n.tokenStack = [];
                                n.code = n.code.replace(r, (function(e) {
                                    if ("function" === typeof i && !i(e))
                                        return e;
                                    for (var r, s = o.length; -1 !== n.code.indexOf(r = t(a, s)); )
                                        ++s;
                                    return o[s] = e,
                                    r
                                }
                                )),
                                n.grammar = e.languages.markup
                            }
                        }
                    },
                    tokenizePlaceholders: {
                        value: function(n, a) {
                            if (n.language === a && n.tokenStack) {
                                n.grammar = e.languages[a];
                                var r = 0
                                  , i = Object.keys(n.tokenStack);
                                !function o(s) {
                                    for (var l = 0; l < s.length && !(r >= i.length); l++) {
                                        var c = s[l];
                                        if ("string" === typeof c || c.content && "string" === typeof c.content) {
                                            var u = i[r]
                                              , d = n.tokenStack[u]
                                              , p = "string" === typeof c ? c : c.content
                                              , g = t(a, u)
                                              , m = p.indexOf(g);
                                            if (m > -1) {
                                                ++r;
                                                var b = p.substring(0, m)
                                                  , f = new e.Token(a,e.tokenize(d, n.grammar),"language-" + a,d)
                                                  , E = p.substring(m + g.length)
                                                  , h = [];
                                                b && h.push.apply(h, o([b])),
                                                h.push(f),
                                                E && h.push.apply(h, o([E])),
                                                "string" === typeof c ? s.splice.apply(s, [l, 1].concat(h)) : c.content = h
                                            }
                                        } else
                                            c.content && o(c.content)
                                    }
                                    return s
                                }(n.tokens)
                            }
                        }
                    }
                })
            }(e)
        }
        e.exports = a,
        a.displayName = "markupTemplating",
        a.aliases = []
    }
    , , , , , , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.c = e.languages.extend("clike", {
                comment: {
                    pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
                    greedy: !0
                },
                "class-name": {
                    pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
                    lookbehind: !0
                },
                keyword: /\b(?:__attribute__|_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,
                function: /\b[a-z_]\w*(?=\s*\()/i,
                number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
                operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/
            }),
            e.languages.insertBefore("c", "string", {
                macro: {
                    pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
                    lookbehind: !0,
                    greedy: !0,
                    alias: "property",
                    inside: {
                        string: [{
                            pattern: /^(#\s*include\s*)<[^>]+>/,
                            lookbehind: !0
                        }, e.languages.c.string],
                        comment: e.languages.c.comment,
                        "macro-name": [{
                            pattern: /(^#\s*define\s+)\w+\b(?!\()/i,
                            lookbehind: !0
                        }, {
                            pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
                            lookbehind: !0,
                            alias: "function"
                        }],
                        directive: {
                            pattern: /^(#\s*)[a-z]+/,
                            lookbehind: !0,
                            alias: "keyword"
                        },
                        "directive-hash": /^#/,
                        punctuation: /##|\\(?=[\r\n])/,
                        expression: {
                            pattern: /\S[\s\S]*/,
                            inside: e.languages.c
                        }
                    }
                },
                constant: /\b(?:__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|stdin|stdout|stderr)\b/
            }),
            delete e.languages.c.boolean
        }
        e.exports = a,
        a.displayName = "c",
        a.aliases = []
    }
    , , function(e, t, n) {
        "use strict";
        var a = n(185)
          , r = n(227)
          , i = n(229);
        e.exports = function(e) {
            var t, n, o = e.space, s = e.mustUseProperty || [], l = e.attributes || {}, c = e.properties, u = e.transform, d = {}, p = {};
            for (t in c)
                n = new i(t,u(l, t),c[t],o),
                -1 !== s.indexOf(t) && (n.mustUseProperty = !0),
                d[t] = n,
                p[a(t)] = t,
                p[a(n.attribute)] = t;
            return new r(d,p,o)
        }
    }
    , , , , , , , , , function(e, t, n) {
        "use strict";
        var a = 0;
        function r() {
            return Math.pow(2, ++a)
        }
        t.boolean = r(),
        t.booleanish = r(),
        t.overloadedBoolean = r(),
        t.number = r(),
        t.spaceSeparated = r(),
        t.commaSeparated = r(),
        t.commaOrSpaceSeparated = r()
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                e.languages.ruby = e.languages.extend("clike", {
                    comment: [/#.*/, {
                        pattern: /^=begin\s[\s\S]*?^=end/m,
                        greedy: !0
                    }],
                    "class-name": {
                        pattern: /(\b(?:class)\s+|\bcatch\s+\()[\w.\\]+/i,
                        lookbehind: !0,
                        inside: {
                            punctuation: /[.\\]/
                        }
                    },
                    keyword: /\b(?:alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|extend|for|if|in|include|module|new|next|nil|not|or|prepend|protected|private|public|raise|redo|require|rescue|retry|return|self|super|then|throw|undef|unless|until|when|while|yield)\b/
                });
                var t = {
                    pattern: /#\{[^}]+\}/,
                    inside: {
                        delimiter: {
                            pattern: /^#\{|\}$/,
                            alias: "tag"
                        },
                        rest: e.languages.ruby
                    }
                };
                delete e.languages.ruby.function,
                e.languages.insertBefore("ruby", "keyword", {
                    regex: [{
                        pattern: RegExp(/%r/.source + "(?:" + [/([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1/.source, /\((?:[^()\\]|\\[\s\S])*\)/.source, /\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}/.source, /\[(?:[^\[\]\\]|\\[\s\S])*\]/.source, /<(?:[^<>\\]|\\[\s\S])*>/.source].join("|") + ")" + /[egimnosux]{0,6}/.source),
                        greedy: !0,
                        inside: {
                            interpolation: t
                        }
                    }, {
                        pattern: /(^|[^/])\/(?!\/)(?:\[[^\r\n\]]+\]|\\.|[^[/\\\r\n])+\/[egimnosux]{0,6}(?=\s*(?:$|[\r\n,.;})#]))/,
                        lookbehind: !0,
                        greedy: !0,
                        inside: {
                            interpolation: t
                        }
                    }],
                    variable: /[@$]+[a-zA-Z_]\w*(?:[?!]|\b)/,
                    symbol: {
                        pattern: /(^|[^:]):[a-zA-Z_]\w*(?:[?!]|\b)/,
                        lookbehind: !0
                    },
                    "method-definition": {
                        pattern: /(\bdef\s+)[\w.]+/,
                        lookbehind: !0,
                        inside: {
                            function: /\w+$/,
                            rest: e.languages.ruby
                        }
                    }
                }),
                e.languages.insertBefore("ruby", "number", {
                    builtin: /\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|Fixnum|Float|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/,
                    constant: /\b[A-Z]\w*(?:[?!]|\b)/
                }),
                e.languages.ruby.string = [{
                    pattern: RegExp(/%[qQiIwWxs]?/.source + "(?:" + [/([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1/.source, /\((?:[^()\\]|\\[\s\S])*\)/.source, /\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}/.source, /\[(?:[^\[\]\\]|\\[\s\S])*\]/.source, /<(?:[^<>\\]|\\[\s\S])*>/.source].join("|") + ")"),
                    greedy: !0,
                    inside: {
                        interpolation: t
                    }
                }, {
                    pattern: /("|')(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|(?!\1)[^\\#\r\n])*\1/,
                    greedy: !0,
                    inside: {
                        interpolation: t
                    }
                }, {
                    pattern: /<<[-~]?([a-z_]\w*)[\r\n](?:.*[\r\n])*?[\t ]*\1/i,
                    alias: "heredoc-string",
                    greedy: !0,
                    inside: {
                        delimiter: {
                            pattern: /^<<[-~]?[a-z_]\w*|[a-z_]\w*$/i,
                            alias: "symbol",
                            inside: {
                                punctuation: /^<<[-~]?/
                            }
                        },
                        interpolation: t
                    }
                }, {
                    pattern: /<<[-~]?'([a-z_]\w*)'[\r\n](?:.*[\r\n])*?[\t ]*\1/i,
                    alias: "heredoc-string",
                    greedy: !0,
                    inside: {
                        delimiter: {
                            pattern: /^<<[-~]?'[a-z_]\w*'|[a-z_]\w*$/i,
                            alias: "symbol",
                            inside: {
                                punctuation: /^<<[-~]?'|'$/
                            }
                        }
                    }
                }],
                e.languages.rb = e.languages.ruby
            }(e)
        }
        e.exports = a,
        a.displayName = "ruby",
        a.aliases = ["rb"]
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                var t = e.languages.javadoclike = {
                    parameter: {
                        pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:param|arg|arguments)\s+)\w+/m,
                        lookbehind: !0
                    },
                    keyword: {
                        pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,
                        lookbehind: !0
                    },
                    punctuation: /[{}]/
                };
                Object.defineProperty(t, "addSupport", {
                    value: function(t, n) {
                        "string" === typeof t && (t = [t]),
                        t.forEach((function(t) {
                            !function(t, n) {
                                var a = "doc-comment"
                                  , r = e.languages[t];
                                if (r) {
                                    var i = r[a];
                                    if (!i) {
                                        var o = {
                                            "doc-comment": {
                                                pattern: /(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,
                                                lookbehind: !0,
                                                alias: "comment"
                                            }
                                        };
                                        i = (r = e.languages.insertBefore(t, "comment", o))[a]
                                    }
                                    if (i instanceof RegExp && (i = r[a] = {
                                        pattern: i
                                    }),
                                    Array.isArray(i))
                                        for (var s = 0, l = i.length; s < l; s++)
                                            i[s]instanceof RegExp && (i[s] = {
                                                pattern: i[s]
                                            }),
                                            n(i[s]);
                                    else
                                        n(i)
                                }
                            }(t, (function(e) {
                                e.inside || (e.inside = {}),
                                e.inside.rest = n
                            }
                            ))
                        }
                        ))
                    }
                }),
                t.addSupport(["java", "javascript", "php"], t)
            }(e)
        }
        e.exports = a,
        a.displayName = "javadoclike",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        var a = n(156);
        function r(e) {
            e.register(a),
            function(e) {
                var t = /\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/
                  , n = [{
                    pattern: /\b(?:false|true)\b/i,
                    alias: "boolean"
                }, {
                    pattern: /(::\s*)\b[a-z_]\w*\b(?!\s*\()/i,
                    greedy: !0,
                    lookbehind: !0
                }, {
                    pattern: /(\b(?:case|const)\s+)\b[a-z_]\w*(?=\s*[;=])/i,
                    greedy: !0,
                    lookbehind: !0
                }, /\b(?:null)\b/i, /\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/]
                  , a = /\b0b[01]+(?:_[01]+)*\b|\b0o[0-7]+(?:_[0-7]+)*\b|\b0x[\da-f]+(?:_[\da-f]+)*\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i
                  , r = /<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/
                  , i = /[{}\[\](),:;]/;
                e.languages.php = {
                    delimiter: {
                        pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i,
                        alias: "important"
                    },
                    comment: t,
                    variable: /\$+(?:\w+\b|(?=\{))/i,
                    package: {
                        pattern: /(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
                        lookbehind: !0,
                        inside: {
                            punctuation: /\\/
                        }
                    },
                    "class-name-definition": {
                        pattern: /(\b(?:class|enum|interface|trait)\s+)\b[a-z_]\w*(?!\\)\b/i,
                        lookbehind: !0,
                        alias: "class-name"
                    },
                    "function-definition": {
                        pattern: /(\bfunction\s+)[a-z_]\w*(?=\s*\()/i,
                        lookbehind: !0,
                        alias: "function"
                    },
                    keyword: [{
                        pattern: /(\(\s*)\b(?:bool|boolean|int|integer|float|string|object|array)\b(?=\s*\))/i,
                        alias: "type-casting",
                        greedy: !0,
                        lookbehind: !0
                    }, {
                        pattern: /([(,?]\s*)\b(?:bool|int|float|string|object|array(?!\s*\()|mixed|self|static|callable|iterable|(?:null|false)(?=\s*\|))\b(?=\s*\$)/i,
                        alias: "type-hint",
                        greedy: !0,
                        lookbehind: !0
                    }, {
                        pattern: /([(,?]\s*[\w|]\|\s*)(?:null|false)\b(?=\s*\$)/i,
                        alias: "type-hint",
                        greedy: !0,
                        lookbehind: !0
                    }, {
                        pattern: /(\)\s*:\s*(?:\?\s*)?)\b(?:bool|int|float|string|object|void|array(?!\s*\()|mixed|self|static|callable|iterable|(?:null|false)(?=\s*\|))\b/i,
                        alias: "return-type",
                        greedy: !0,
                        lookbehind: !0
                    }, {
                        pattern: /(\)\s*:\s*(?:\?\s*)?[\w|]\|\s*)(?:null|false)\b/i,
                        alias: "return-type",
                        greedy: !0,
                        lookbehind: !0
                    }, {
                        pattern: /\b(?:bool|int|float|string|object|void|array(?!\s*\()|mixed|iterable|(?:null|false)(?=\s*\|))\b/i,
                        alias: "type-declaration",
                        greedy: !0
                    }, {
                        pattern: /(\|\s*)(?:null|false)\b/i,
                        alias: "type-declaration",
                        greedy: !0,
                        lookbehind: !0
                    }, {
                        pattern: /\b(?:parent|self|static)(?=\s*::)/i,
                        alias: "static-context",
                        greedy: !0
                    }, {
                        pattern: /(\byield\s+)from\b/i,
                        lookbehind: !0
                    }, /\bclass\b/i, {
                        pattern: /((?:^|[^\s>:]|(?:^|[^-])>|(?:^|[^:]):)\s*)\b(?:__halt_compiler|abstract|and|array|as|break|callable|case|catch|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|enum|eval|exit|extends|final|finally|fn|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|match|new|or|parent|print|private|protected|public|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield)\b/i,
                        lookbehind: !0
                    }],
                    "argument-name": {
                        pattern: /([(,]\s+)\b[a-z_]\w*(?=\s*:(?!:))/i,
                        lookbehind: !0
                    },
                    "class-name": [{
                        pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i,
                        greedy: !0,
                        lookbehind: !0
                    }, {
                        pattern: /(\|\s*)\b[a-z_]\w*(?!\\)\b/i,
                        greedy: !0,
                        lookbehind: !0
                    }, {
                        pattern: /\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i,
                        greedy: !0
                    }, {
                        pattern: /(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i,
                        alias: "class-name-fully-qualified",
                        greedy: !0,
                        lookbehind: !0,
                        inside: {
                            punctuation: /\\/
                        }
                    }, {
                        pattern: /(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i,
                        alias: "class-name-fully-qualified",
                        greedy: !0,
                        inside: {
                            punctuation: /\\/
                        }
                    }, {
                        pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
                        alias: "class-name-fully-qualified",
                        greedy: !0,
                        lookbehind: !0,
                        inside: {
                            punctuation: /\\/
                        }
                    }, {
                        pattern: /\b[a-z_]\w*(?=\s*\$)/i,
                        alias: "type-declaration",
                        greedy: !0
                    }, {
                        pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
                        alias: ["class-name-fully-qualified", "type-declaration"],
                        greedy: !0,
                        inside: {
                            punctuation: /\\/
                        }
                    }, {
                        pattern: /\b[a-z_]\w*(?=\s*::)/i,
                        alias: "static-context",
                        greedy: !0
                    }, {
                        pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*::)/i,
                        alias: ["class-name-fully-qualified", "static-context"],
                        greedy: !0,
                        inside: {
                            punctuation: /\\/
                        }
                    }, {
                        pattern: /([(,?]\s*)[a-z_]\w*(?=\s*\$)/i,
                        alias: "type-hint",
                        greedy: !0,
                        lookbehind: !0
                    }, {
                        pattern: /([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
                        alias: ["class-name-fully-qualified", "type-hint"],
                        greedy: !0,
                        lookbehind: !0,
                        inside: {
                            punctuation: /\\/
                        }
                    }, {
                        pattern: /(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/i,
                        alias: "return-type",
                        greedy: !0,
                        lookbehind: !0
                    }, {
                        pattern: /(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
                        alias: ["class-name-fully-qualified", "return-type"],
                        greedy: !0,
                        lookbehind: !0,
                        inside: {
                            punctuation: /\\/
                        }
                    }],
                    constant: n,
                    function: {
                        pattern: /(^|[^\\\w])\\?[a-z_](?:[\w\\]*\w)?(?=\s*\()/i,
                        lookbehind: !0,
                        inside: {
                            punctuation: /\\/
                        }
                    },
                    property: {
                        pattern: /(->\s*)\w+/,
                        lookbehind: !0
                    },
                    number: a,
                    operator: r,
                    punctuation: i
                };
                var o = {
                    pattern: /\{\$(?:\{(?:\{[^{}]+\}|[^{}]+)\}|[^{}])+\}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)?)/,
                    lookbehind: !0,
                    inside: e.languages.php
                }
                  , s = [{
                    pattern: /<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/,
                    alias: "nowdoc-string",
                    greedy: !0,
                    inside: {
                        delimiter: {
                            pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
                            alias: "symbol",
                            inside: {
                                punctuation: /^<<<'?|[';]$/
                            }
                        }
                    }
                }, {
                    pattern: /<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,
                    alias: "heredoc-string",
                    greedy: !0,
                    inside: {
                        delimiter: {
                            pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
                            alias: "symbol",
                            inside: {
                                punctuation: /^<<<"?|[";]$/
                            }
                        },
                        interpolation: o
                    }
                }, {
                    pattern: /`(?:\\[\s\S]|[^\\`])*`/,
                    alias: "backtick-quoted-string",
                    greedy: !0
                }, {
                    pattern: /'(?:\\[\s\S]|[^\\'])*'/,
                    alias: "single-quoted-string",
                    greedy: !0
                }, {
                    pattern: /"(?:\\[\s\S]|[^\\"])*"/,
                    alias: "double-quoted-string",
                    greedy: !0,
                    inside: {
                        interpolation: o
                    }
                }];
                e.languages.insertBefore("php", "variable", {
                    string: s,
                    attribute: {
                        pattern: /#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im,
                        greedy: !0,
                        inside: {
                            "attribute-content": {
                                pattern: /^(#\[)[\s\S]+(?=\]$)/,
                                lookbehind: !0,
                                inside: {
                                    comment: t,
                                    string: s,
                                    "attribute-class-name": [{
                                        pattern: /([^:]|^)\b[a-z_]\w*(?!\\)\b/i,
                                        alias: "class-name",
                                        greedy: !0,
                                        lookbehind: !0
                                    }, {
                                        pattern: /([^:]|^)(?:\\?\b[a-z_]\w*)+/i,
                                        alias: ["class-name", "class-name-fully-qualified"],
                                        greedy: !0,
                                        lookbehind: !0,
                                        inside: {
                                            punctuation: /\\/
                                        }
                                    }],
                                    constant: n,
                                    number: a,
                                    operator: r,
                                    punctuation: i
                                }
                            },
                            delimiter: {
                                pattern: /^#\[|\]$/,
                                alias: "punctuation"
                            }
                        }
                    }
                }),
                e.hooks.add("before-tokenize", (function(t) {
                    if (/<\?/.test(t.code)) {
                        e.languages["markup-templating"].buildPlaceholders(t, "php", /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/gi)
                    }
                }
                )),
                e.hooks.add("after-tokenize", (function(t) {
                    e.languages["markup-templating"].tokenizePlaceholders(t, "php")
                }
                ))
            }(e)
        }
        e.exports = r,
        r.displayName = "php",
        r.aliases = []
    }
    , , , , , , function(e, t, n) {
        "use strict";
        var a;
        e.exports = function(e) {
            var t, n = "&" + e + ";";
            if ((a = a || document.createElement("i")).innerHTML = n,
            59 === (t = a.textContent).charCodeAt(t.length - 1) && "semi" !== e)
                return !1;
            return t !== n && t
        }
    }
    , , , function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            return e.toLowerCase()
        }
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.sql = {
                comment: {
                    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
                    lookbehind: !0
                },
                variable: [{
                    pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
                    greedy: !0
                }, /@[\w.$]+/],
                string: {
                    pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
                    greedy: !0,
                    lookbehind: !0
                },
                function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
                keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:S|ING)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
                boolean: /\b(?:TRUE|FALSE|NULL)\b/i,
                number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
                operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|IN|ILIKE|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
                punctuation: /[;[\]()`,.]/
            }
        }
        e.exports = a,
        a.displayName = "sql",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        var a = n(162);
        function r(e) {
            e.register(a),
            function(e) {
                var t = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char8_t|char16_t|char32_t|class|compl|concept|const|consteval|constexpr|constinit|const_cast|continue|co_await|co_return|co_yield|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int8_t|int16_t|int32_t|int64_t|uint8_t|uint16_t|uint32_t|uint64_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/
                  , n = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, (function() {
                    return t.source
                }
                ));
                e.languages.cpp = e.languages.extend("c", {
                    "class-name": [{
                        pattern: RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g, (function() {
                            return t.source
                        }
                        ))),
                        lookbehind: !0
                    }, /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/, /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i, /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],
                    keyword: t,
                    number: {
                        pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
                        greedy: !0
                    },
                    operator: />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
                    boolean: /\b(?:true|false)\b/
                }),
                e.languages.insertBefore("cpp", "string", {
                    module: {
                        pattern: RegExp(/(\b(?:module|import)\s+)/.source + "(?:" + /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source + "|" + /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g, (function() {
                            return n
                        }
                        )) + ")"),
                        lookbehind: !0,
                        greedy: !0,
                        inside: {
                            string: /^[<"][\s\S]+/,
                            operator: /:/,
                            punctuation: /\./
                        }
                    },
                    "raw-string": {
                        pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
                        alias: "string",
                        greedy: !0
                    }
                }),
                e.languages.insertBefore("cpp", "keyword", {
                    "generic-function": {
                        pattern: /\b[a-z_]\w*\s*<(?:[^<>]|<(?:[^<>])*>)*>(?=\s*\()/i,
                        inside: {
                            function: /^\w+/,
                            generic: {
                                pattern: /<[\s\S]+/,
                                alias: "class-name",
                                inside: e.languages.cpp
                            }
                        }
                    }
                }),
                e.languages.insertBefore("cpp", "operator", {
                    "double-colon": {
                        pattern: /::/,
                        alias: "punctuation"
                    }
                }),
                e.languages.insertBefore("cpp", "class-name", {
                    "base-clause": {
                        pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
                        lookbehind: !0,
                        greedy: !0,
                        inside: e.languages.extend("cpp", {})
                    }
                }),
                e.languages.insertBefore("inside", "double-colon", {
                    "class-name": /\b[a-z_]\w*\b(?!\s*::)/i
                }, e.languages.cpp["base-clause"])
            }(e)
        }
        e.exports = r,
        r.displayName = "cpp",
        r.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                function t(e, t) {
                    return e.replace(/<<(\d+)>>/g, (function(e, n) {
                        return "(?:" + t[+n] + ")"
                    }
                    ))
                }
                function n(e, n, a) {
                    return RegExp(t(e, n), a || "")
                }
                function a(e, t) {
                    for (var n = 0; n < t; n++)
                        e = e.replace(/<<self>>/g, (function() {
                            return "(?:" + e + ")"
                        }
                        ));
                    return e.replace(/<<self>>/g, "[^\\s\\S]")
                }
                var r = "bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void"
                  , i = "class enum interface struct"
                  , o = "add alias and ascending async await by descending from get global group into join let nameof not notnull on or orderby partial remove select set unmanaged value when where"
                  , s = "abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield";
                function l(e) {
                    return "\\b(?:" + e.trim().replace(/ /g, "|") + ")\\b"
                }
                var c = l(i)
                  , u = RegExp(l(r + " " + i + " " + o + " " + s))
                  , d = l(i + " " + o + " " + s)
                  , p = l(r + " " + i + " " + s)
                  , g = a(/<(?:[^<>;=+\-*/%&|^]|<<self>>)*>/.source, 2)
                  , m = a(/\((?:[^()]|<<self>>)*\)/.source, 2)
                  , b = /@?\b[A-Za-z_]\w*\b/.source
                  , f = t(/<<0>>(?:\s*<<1>>)?/.source, [b, g])
                  , E = t(/(?!<<0>>)<<1>>(?:\s*\.\s*<<1>>)*/.source, [d, f])
                  , h = /\[\s*(?:,\s*)*\]/.source
                  , S = t(/<<0>>(?:\s*(?:\?\s*)?<<1>>)*(?:\s*\?)?/.source, [E, h])
                  , y = t(/[^,()<>[\];=+\-*/%&|^]|<<0>>|<<1>>|<<2>>/.source, [g, m, h])
                  , T = t(/\(<<0>>+(?:,<<0>>+)+\)/.source, [y])
                  , A = t(/(?:<<0>>|<<1>>)(?:\s*(?:\?\s*)?<<2>>)*(?:\s*\?)?/.source, [T, E, h])
                  , R = {
                    keyword: u,
                    punctuation: /[<>()?,.:[\]]/
                }
                  , I = /'(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'/.source
                  , N = /"(?:\\.|[^\\"\r\n])*"/.source
                  , _ = /@"(?:""|\\[\s\S]|[^\\"])*"(?!")/.source;
                e.languages.csharp = e.languages.extend("clike", {
                    string: [{
                        pattern: n(/(^|[^$\\])<<0>>/.source, [_]),
                        lookbehind: !0,
                        greedy: !0
                    }, {
                        pattern: n(/(^|[^@$\\])<<0>>/.source, [N]),
                        lookbehind: !0,
                        greedy: !0
                    }, {
                        pattern: RegExp(I),
                        greedy: !0,
                        alias: "character"
                    }],
                    "class-name": [{
                        pattern: n(/(\busing\s+static\s+)<<0>>(?=\s*;)/.source, [E]),
                        lookbehind: !0,
                        inside: R
                    }, {
                        pattern: n(/(\busing\s+<<0>>\s*=\s*)<<1>>(?=\s*;)/.source, [b, A]),
                        lookbehind: !0,
                        inside: R
                    }, {
                        pattern: n(/(\busing\s+)<<0>>(?=\s*=)/.source, [b]),
                        lookbehind: !0
                    }, {
                        pattern: n(/(\b<<0>>\s+)<<1>>/.source, [c, f]),
                        lookbehind: !0,
                        inside: R
                    }, {
                        pattern: n(/(\bcatch\s*\(\s*)<<0>>/.source, [E]),
                        lookbehind: !0,
                        inside: R
                    }, {
                        pattern: n(/(\bwhere\s+)<<0>>/.source, [b]),
                        lookbehind: !0
                    }, {
                        pattern: n(/(\b(?:is(?:\s+not)?|as)\s+)<<0>>/.source, [S]),
                        lookbehind: !0,
                        inside: R
                    }, {
                        pattern: n(/\b<<0>>(?=\s+(?!<<1>>)<<2>>(?:\s*[=,;:{)\]]|\s+(?:in|when)\b))/.source, [A, p, b]),
                        inside: R
                    }],
                    keyword: u,
                    number: /(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:ul|lu|[dflmu])?\b/i,
                    operator: />>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,
                    punctuation: /\?\.?|::|[{}[\];(),.:]/
                }),
                e.languages.insertBefore("csharp", "number", {
                    range: {
                        pattern: /\.\./,
                        alias: "operator"
                    }
                }),
                e.languages.insertBefore("csharp", "punctuation", {
                    "named-parameter": {
                        pattern: n(/([(,]\s*)<<0>>(?=\s*:)/.source, [b]),
                        lookbehind: !0,
                        alias: "punctuation"
                    }
                }),
                e.languages.insertBefore("csharp", "class-name", {
                    namespace: {
                        pattern: n(/(\b(?:namespace|using)\s+)<<0>>(?:\s*\.\s*<<0>>)*(?=\s*[;{])/.source, [b]),
                        lookbehind: !0,
                        inside: {
                            punctuation: /\./
                        }
                    },
                    "type-expression": {
                        pattern: n(/(\b(?:default|typeof|sizeof)\s*\(\s*(?!\s))(?:[^()\s]|\s(?!\s)|<<0>>)*(?=\s*\))/.source, [m]),
                        lookbehind: !0,
                        alias: "class-name",
                        inside: R
                    },
                    "return-type": {
                        pattern: n(/<<0>>(?=\s+(?:<<1>>\s*(?:=>|[({]|\.\s*this\s*\[)|this\s*\[))/.source, [A, E]),
                        inside: R,
                        alias: "class-name"
                    },
                    "constructor-invocation": {
                        pattern: n(/(\bnew\s+)<<0>>(?=\s*[[({])/.source, [A]),
                        lookbehind: !0,
                        inside: R,
                        alias: "class-name"
                    },
                    "generic-method": {
                        pattern: n(/<<0>>\s*<<1>>(?=\s*\()/.source, [b, g]),
                        inside: {
                            function: n(/^<<0>>/.source, [b]),
                            generic: {
                                pattern: RegExp(g),
                                alias: "class-name",
                                inside: R
                            }
                        }
                    },
                    "type-list": {
                        pattern: n(/\b((?:<<0>>\s+<<1>>|where\s+<<2>>)\s*:\s*)(?:<<3>>|<<4>>)(?:\s*,\s*(?:<<3>>|<<4>>))*(?=\s*(?:where|[{;]|=>|$))/.source, [c, f, b, A, u.source]),
                        lookbehind: !0,
                        inside: {
                            keyword: u,
                            "class-name": {
                                pattern: RegExp(A),
                                greedy: !0,
                                inside: R
                            },
                            punctuation: /,/
                        }
                    },
                    preprocessor: {
                        pattern: /(^[\t ]*)#.*/m,
                        lookbehind: !0,
                        alias: "property",
                        inside: {
                            directive: {
                                pattern: /(#)\b(?:define|elif|else|endif|endregion|error|if|line|pragma|region|undef|warning)\b/,
                                lookbehind: !0,
                                alias: "keyword"
                            }
                        }
                    }
                });
                var v = N + "|" + I
                  , w = t(/\/(?![*/])|\/\/[^\r\n]*[\r\n]|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>/.source, [v])
                  , O = a(t(/[^"'/()]|<<0>>|\(<<self>>*\)/.source, [w]), 2)
                  , C = /\b(?:assembly|event|field|method|module|param|property|return|type)\b/.source
                  , k = t(/<<0>>(?:\s*\(<<1>>*\))?/.source, [E, O]);
                e.languages.insertBefore("csharp", "class-name", {
                    attribute: {
                        pattern: n(/((?:^|[^\s\w>)?])\s*\[\s*)(?:<<0>>\s*:\s*)?<<1>>(?:\s*,\s*<<1>>)*(?=\s*\])/.source, [C, k]),
                        lookbehind: !0,
                        greedy: !0,
                        inside: {
                            target: {
                                pattern: n(/^<<0>>(?=\s*:)/.source, [C]),
                                alias: "keyword"
                            },
                            "attribute-arguments": {
                                pattern: n(/\(<<0>>*\)/.source, [O]),
                                inside: e.languages.csharp
                            },
                            "class-name": {
                                pattern: RegExp(E),
                                inside: {
                                    punctuation: /\./
                                }
                            },
                            punctuation: /[:,]/
                        }
                    }
                });
                var L = /:[^}\r\n]+/.source
                  , x = a(t(/[^"'/()]|<<0>>|\(<<self>>*\)/.source, [w]), 2)
                  , D = t(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source, [x, L])
                  , P = a(t(/[^"'/()]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>|\(<<self>>*\)/.source, [v]), 2)
                  , M = t(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source, [P, L]);
                function F(t, a) {
                    return {
                        interpolation: {
                            pattern: n(/((?:^|[^{])(?:\{\{)*)<<0>>/.source, [t]),
                            lookbehind: !0,
                            inside: {
                                "format-string": {
                                    pattern: n(/(^\{(?:(?![}:])<<0>>)*)<<1>>(?=\}$)/.source, [a, L]),
                                    lookbehind: !0,
                                    inside: {
                                        punctuation: /^:/
                                    }
                                },
                                punctuation: /^\{|\}$/,
                                expression: {
                                    pattern: /[\s\S]+/,
                                    alias: "language-csharp",
                                    inside: e.languages.csharp
                                }
                            }
                        },
                        string: /[\s\S]+/
                    }
                }
                e.languages.insertBefore("csharp", "string", {
                    "interpolation-string": [{
                        pattern: n(/(^|[^\\])(?:\$@|@\$)"(?:""|\\[\s\S]|\{\{|<<0>>|[^\\{"])*"/.source, [D]),
                        lookbehind: !0,
                        greedy: !0,
                        inside: F(D, x)
                    }, {
                        pattern: n(/(^|[^@\\])\$"(?:\\.|\{\{|<<0>>|[^\\"{])*"/.source, [M]),
                        lookbehind: !0,
                        greedy: !0,
                        inside: F(M, P)
                    }]
                })
            }(e),
            e.languages.dotnet = e.languages.cs = e.languages.csharp
        }
        e.exports = a,
        a.displayName = "csharp",
        a.aliases = ["dotnet", "cs"]
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.haskell = {
                comment: {
                    pattern: /(^|[^-!#$%*+=?&@|~.:<>^\\\/])(?:--(?:(?=.)[^-!#$%*+=?&@|~.:<>^\\\/].*|$)|\{-[\s\S]*?-\})/m,
                    lookbehind: !0
                },
                char: {
                    pattern: /'(?:[^\\']|\\(?:[abfnrtv\\"'&]|\^[A-Z@[\]^_]|NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|\d+|o[0-7]+|x[0-9a-fA-F]+))'/,
                    alias: "string"
                },
                string: {
                    pattern: /"(?:[^\\"]|\\(?:\S|\s+\\))*"/,
                    greedy: !0
                },
                keyword: /\b(?:case|class|data|deriving|do|else|if|in|infixl|infixr|instance|let|module|newtype|of|primitive|then|type|where)\b/,
                "import-statement": {
                    pattern: /(^[\t ]*)import\s+(?:qualified\s+)?(?:[A-Z][\w']*)(?:\.[A-Z][\w']*)*(?:\s+as\s+(?:[A-Z][\w']*)(?:\.[A-Z][\w']*)*)?(?:\s+hiding\b)?/m,
                    lookbehind: !0,
                    inside: {
                        keyword: /\b(?:import|qualified|as|hiding)\b/
                    }
                },
                builtin: /\b(?:abs|acos|acosh|all|and|any|appendFile|approxRational|asTypeOf|asin|asinh|atan|atan2|atanh|basicIORun|break|catch|ceiling|chr|compare|concat|concatMap|const|cos|cosh|curry|cycle|decodeFloat|denominator|digitToInt|div|divMod|drop|dropWhile|either|elem|encodeFloat|enumFrom|enumFromThen|enumFromThenTo|enumFromTo|error|even|exp|exponent|fail|filter|flip|floatDigits|floatRadix|floatRange|floor|fmap|foldl|foldl1|foldr|foldr1|fromDouble|fromEnum|fromInt|fromInteger|fromIntegral|fromRational|fst|gcd|getChar|getContents|getLine|group|head|id|inRange|index|init|intToDigit|interact|ioError|isAlpha|isAlphaNum|isAscii|isControl|isDenormalized|isDigit|isHexDigit|isIEEE|isInfinite|isLower|isNaN|isNegativeZero|isOctDigit|isPrint|isSpace|isUpper|iterate|last|lcm|length|lex|lexDigits|lexLitChar|lines|log|logBase|lookup|map|mapM|mapM_|max|maxBound|maximum|maybe|min|minBound|minimum|mod|negate|not|notElem|null|numerator|odd|or|ord|otherwise|pack|pi|pred|primExitWith|print|product|properFraction|putChar|putStr|putStrLn|quot|quotRem|range|rangeSize|read|readDec|readFile|readFloat|readHex|readIO|readInt|readList|readLitChar|readLn|readOct|readParen|readSigned|reads|readsPrec|realToFrac|recip|rem|repeat|replicate|return|reverse|round|scaleFloat|scanl|scanl1|scanr|scanr1|seq|sequence|sequence_|show|showChar|showInt|showList|showLitChar|showParen|showSigned|showString|shows|showsPrec|significand|signum|sin|sinh|snd|sort|span|splitAt|sqrt|subtract|succ|sum|tail|take|takeWhile|tan|tanh|threadToIOResult|toEnum|toInt|toInteger|toLower|toRational|toUpper|truncate|uncurry|undefined|unlines|until|unwords|unzip|unzip3|userError|words|writeFile|zip|zip3|zipWith|zipWith3)\b/,
                number: /\b(?:\d+(?:\.\d+)?(?:e[+-]?\d+)?|0o[0-7]+|0x[0-9a-f]+)\b/i,
                operator: /\s\.\s|[-!#$%*+=?&@|~:<>^\\\/]*\.[-!#$%*+=?&@|~.:<>^\\\/]+|[-!#$%*+=?&@|~.:<>^\\\/]+\.[-!#$%*+=?&@|~:<>^\\\/]*|[-!#$%*+=?&@|~:<>^\\\/]+|`(?:[A-Z][\w']*\.)*[_a-z][\w']*`/,
                hvariable: /\b(?:[A-Z][\w']*\.)*[_a-z][\w']*\b/,
                constant: /\b(?:[A-Z][\w']*\.)*[A-Z][\w']*\b/,
                punctuation: /[{}[\];(),.:]/
            },
            e.languages.hs = e.languages.haskell
        }
        e.exports = a,
        a.displayName = "haskell",
        a.aliases = ["hs"]
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                var t = /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/
                  , n = /(^|[^\w.])(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source
                  , a = {
                    pattern: RegExp(n + /[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),
                    lookbehind: !0,
                    inside: {
                        namespace: {
                            pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
                            inside: {
                                punctuation: /\./
                            }
                        },
                        punctuation: /\./
                    }
                };
                e.languages.java = e.languages.extend("clike", {
                    "class-name": [a, {
                        pattern: RegExp(n + /[A-Z]\w*(?=\s+\w+\s*[;,=()])/.source),
                        lookbehind: !0,
                        inside: a.inside
                    }],
                    keyword: t,
                    function: [e.languages.clike.function, {
                        pattern: /(::\s*)[a-z_]\w*/,
                        lookbehind: !0
                    }],
                    number: /\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
                    operator: {
                        pattern: /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,
                        lookbehind: !0
                    }
                }),
                e.languages.insertBefore("java", "string", {
                    "triple-quoted-string": {
                        pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
                        greedy: !0,
                        alias: "string"
                    }
                }),
                e.languages.insertBefore("java", "class-name", {
                    annotation: {
                        pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/,
                        lookbehind: !0,
                        alias: "punctuation"
                    },
                    generics: {
                        pattern: /<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,
                        inside: {
                            "class-name": a,
                            keyword: t,
                            punctuation: /[<>(),.:]/,
                            operator: /[?&|]/
                        }
                    },
                    namespace: {
                        pattern: RegExp(/(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g, (function() {
                            return t.source
                        }
                        ))),
                        lookbehind: !0,
                        inside: {
                            punctuation: /\./
                        }
                    }
                })
            }(e)
        }
        e.exports = a,
        a.displayName = "java",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                e.languages.typescript = e.languages.extend("javascript", {
                    "class-name": {
                        pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
                        lookbehind: !0,
                        greedy: !0,
                        inside: null
                    },
                    builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/
                }),
                e.languages.typescript.keyword.push(/\b(?:abstract|as|declare|implements|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)(?!\s*[^\s_${}*a-zA-Z\xA0-\uFFFF])/),
                delete e.languages.typescript.parameter;
                var t = e.languages.extend("typescript", {});
                delete t["class-name"],
                e.languages.typescript["class-name"].inside = t,
                e.languages.insertBefore("typescript", "function", {
                    decorator: {
                        pattern: /@[$\w\xA0-\uFFFF]+/,
                        inside: {
                            at: {
                                pattern: /^@/,
                                alias: "operator"
                            },
                            function: /^[\s\S]+/
                        }
                    },
                    "generic-function": {
                        pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
                        greedy: !0,
                        inside: {
                            function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
                            generic: {
                                pattern: /<[\s\S]+/,
                                alias: "class-name",
                                inside: t
                            }
                        }
                    }
                }),
                e.languages.ts = e.languages.typescript
            }(e)
        }
        e.exports = a,
        a.displayName = "typescript",
        a.aliases = ["ts"]
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.json = {
                property: {
                    pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
                    lookbehind: !0,
                    greedy: !0
                },
                string: {
                    pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
                    lookbehind: !0,
                    greedy: !0
                },
                comment: {
                    pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
                    greedy: !0
                },
                number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
                punctuation: /[{}[\],]/,
                operator: /:/,
                boolean: /\b(?:true|false)\b/,
                null: {
                    pattern: /\bnull\b/,
                    alias: "keyword"
                }
            },
            e.languages.webmanifest = e.languages.json
        }
        e.exports = a,
        a.displayName = "json",
        a.aliases = ["webmanifest"]
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                e.languages.scheme = {
                    comment: /;.*|#;\s*(?:\((?:[^()]|\([^()]*\))*\)|\[(?:[^\[\]]|\[[^\[\]]*\])*\])|#\|(?:[^#|]|#(?!\|)|\|(?!#)|#\|(?:[^#|]|#(?!\|)|\|(?!#))*\|#)*\|#/,
                    string: {
                        pattern: /"(?:[^"\\]|\\.)*"/,
                        greedy: !0
                    },
                    symbol: {
                        pattern: /'[^()\[\]#'\s]+/,
                        greedy: !0
                    },
                    character: {
                        pattern: /#\\(?:[ux][a-fA-F\d]+\b|[-a-zA-Z]+\b|[\uD800-\uDBFF][\uDC00-\uDFFF]|\S)/,
                        greedy: !0,
                        alias: "string"
                    },
                    "lambda-parameter": [{
                        pattern: /((?:^|[^'`#])[(\[]lambda\s+)(?:[^|()\[\]'\s]+|\|(?:[^\\|]|\\.)*\|)/,
                        lookbehind: !0
                    }, {
                        pattern: /((?:^|[^'`#])[(\[]lambda\s+[(\[])[^()\[\]']+/,
                        lookbehind: !0
                    }],
                    keyword: {
                        pattern: /((?:^|[^'`#])[(\[])(?:begin|case(?:-lambda)?|cond(?:-expand)?|define(?:-library|-macro|-record-type|-syntax|-values)?|defmacro|delay(?:-force)?|do|else|export|except|guard|if|import|include(?:-ci|-library-declarations)?|lambda|let(?:rec)?(?:-syntax|-values|\*)?|let\*-values|only|parameterize|prefix|(?:quasi-?)?quote|rename|set!|syntax-(?:case|rules)|unless|unquote(?:-splicing)?|when)(?=[()\[\]\s]|$)/,
                        lookbehind: !0
                    },
                    builtin: {
                        pattern: /((?:^|[^'`#])[(\[])(?:abs|and|append|apply|assoc|ass[qv]|binary-port\?|boolean=?\?|bytevector(?:-append|-copy|-copy!|-length|-u8-ref|-u8-set!|\?)?|caar|cadr|call-with-(?:current-continuation|port|values)|call\/cc|car|cdar|cddr|cdr|ceiling|char(?:->integer|-ready\?|\?|<\?|<=\?|=\?|>\?|>=\?)|close-(?:input-port|output-port|port)|complex\?|cons|current-(?:error|input|output)-port|denominator|dynamic-wind|eof-object\??|eq\?|equal\?|eqv\?|error|error-object(?:-irritants|-message|\?)|eval|even\?|exact(?:-integer-sqrt|-integer\?|\?)?|expt|features|file-error\?|floor(?:-quotient|-remainder|\/)?|flush-output-port|for-each|gcd|get-output-(?:bytevector|string)|inexact\??|input-port(?:-open\?|\?)|integer(?:->char|\?)|lcm|length|list(?:->string|->vector|-copy|-ref|-set!|-tail|\?)?|make-(?:bytevector|list|parameter|string|vector)|map|max|member|memq|memv|min|modulo|negative\?|newline|not|null\?|number(?:->string|\?)|numerator|odd\?|open-(?:input|output)-(?:bytevector|string)|or|output-port(?:-open\?|\?)|pair\?|peek-char|peek-u8|port\?|positive\?|procedure\?|quotient|raise|raise-continuable|rational\?|rationalize|read-(?:bytevector|bytevector!|char|error\?|line|string|u8)|real\?|remainder|reverse|round|set-c[ad]r!|square|string(?:->list|->number|->symbol|->utf8|->vector|-append|-copy|-copy!|-fill!|-for-each|-length|-map|-ref|-set!|\?|<\?|<=\?|=\?|>\?|>=\?)?|substring|symbol(?:->string|\?|=\?)|syntax-error|textual-port\?|truncate(?:-quotient|-remainder|\/)?|u8-ready\?|utf8->string|values|vector(?:->list|->string|-append|-copy|-copy!|-fill!|-for-each|-length|-map|-ref|-set!|\?)?|with-exception-handler|write-(?:bytevector|char|string|u8)|zero\?)(?=[()\[\]\s]|$)/,
                        lookbehind: !0
                    },
                    operator: {
                        pattern: /((?:^|[^'`#])[(\[])(?:[-+*%/]|[<>]=?|=>?)(?=[()\[\]\s]|$)/,
                        lookbehind: !0
                    },
                    number: {
                        pattern: RegExp(function(e) {
                            for (var t in e)
                                e[t] = e[t].replace(/<[\w\s]+>/g, (function(t) {
                                    return "(?:" + e[t].trim() + ")"
                                }
                                ));
                            return e[t]
                        }({
                            "<ureal dec>": /\d+(?:\/\d+)|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?/.source,
                            "<real dec>": /[+-]?<ureal dec>|[+-](?:inf|nan)\.0/.source,
                            "<imaginary dec>": /[+-](?:<ureal dec>|(?:inf|nan)\.0)?i/.source,
                            "<complex dec>": /<real dec>(?:@<real dec>|<imaginary dec>)?|<imaginary dec>/.source,
                            "<num dec>": /(?:#d(?:#[ei])?|#[ei](?:#d)?)?<complex dec>/.source,
                            "<ureal box>": /[0-9a-f]+(?:\/[0-9a-f]+)?/.source,
                            "<real box>": /[+-]?<ureal box>|[+-](?:inf|nan)\.0/.source,
                            "<imaginary box>": /[+-](?:<ureal box>|(?:inf|nan)\.0)?i/.source,
                            "<complex box>": /<real box>(?:@<real box>|<imaginary box>)?|<imaginary box>/.source,
                            "<num box>": /#[box](?:#[ei])?|(?:#[ei])?#[box]<complex box>/.source,
                            "<number>": /(^|[()\[\]\s])(?:<num dec>|<num box>)(?=[()\[\]\s]|$)/.source
                        }), "i"),
                        lookbehind: !0
                    },
                    boolean: {
                        pattern: /(^|[()\[\]\s])#(?:[ft]|false|true)(?=[()\[\]\s]|$)/,
                        lookbehind: !0
                    },
                    function: {
                        pattern: /((?:^|[^'`#])[(\[])(?:[^|()\[\]'\s]+|\|(?:[^\\|]|\\.)*\|)(?=[()\[\]\s]|$)/,
                        lookbehind: !0
                    },
                    identifier: {
                        pattern: /(^|[()\[\]\s])\|(?:[^\\|]|\\.)*\|(?=[()\[\]\s]|$)/,
                        lookbehind: !0,
                        greedy: !0
                    },
                    punctuation: /[()\[\]']/
                }
            }(e)
        }
        e.exports = a,
        a.displayName = "scheme",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                function t(e, t, n) {
                    return {
                        pattern: RegExp("<#" + e + "[\\s\\S]*?#>"),
                        alias: "block",
                        inside: {
                            delimiter: {
                                pattern: RegExp("^<#" + e + "|#>$"),
                                alias: "important"
                            },
                            content: {
                                pattern: /[\s\S]+/,
                                inside: t,
                                alias: n
                            }
                        }
                    }
                }
                e.languages["t4-templating"] = Object.defineProperty({}, "createT4", {
                    value: function(n) {
                        var a = e.languages[n]
                          , r = "language-" + n;
                        return {
                            block: {
                                pattern: /<#[\s\S]+?#>/,
                                inside: {
                                    directive: t("@", {
                                        "attr-value": {
                                            pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/,
                                            inside: {
                                                punctuation: /^=|^["']|["']$/
                                            }
                                        },
                                        keyword: /\b\w+(?=\s)/,
                                        "attr-name": /\b\w+/
                                    }),
                                    expression: t("=", a, r),
                                    "class-feature": t("\\+", a, r),
                                    standard: t("", a, r)
                                }
                            }
                        }
                    }
                })
            }(e)
        }
        e.exports = a,
        a.displayName = "t4Templating",
        a.aliases = []
    }
    , function(e, t, n) {
        e.exports = n(259)
    }
    , function(e, t, n) {
        "use strict";
        function a(e, t, n, a, r, i, o) {
            try {
                var s = e[i](o)
                  , l = s.value
            } catch (c) {
                return void n(c)
            }
            s.done ? t(l) : Promise.resolve(l).then(a, r)
        }
        function r(e) {
            return function() {
                var t = this
                  , n = arguments;
                return new Promise((function(r, i) {
                    var o = e.apply(t, n);
                    function s(e) {
                        a(o, r, i, s, l, "next", e)
                    }
                    function l(e) {
                        a(o, r, i, s, l, "throw", e)
                    }
                    s(void 0)
                }
                ))
            }
        }
        n.d(t, "a", (function() {
            return r
        }
        ))
    }
    , function(e, t, n) {
        e.exports = n(260)
    }
    , function(e, t, n) {
        "use strict";
        e.exports = function(e, t) {
            return function() {
                for (var n = new Array(arguments.length), a = 0; a < n.length; a++)
                    n[a] = arguments[a];
                return e.apply(t, n)
            }
        }
    }
    , function(e, t, n) {
        "use strict";
        var a = n(155);
        function r(e) {
            return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
        }
        e.exports = function(e, t, n) {
            if (!t)
                return e;
            var i;
            if (n)
                i = n(t);
            else if (a.isURLSearchParams(t))
                i = t.toString();
            else {
                var o = [];
                a.forEach(t, (function(e, t) {
                    null !== e && "undefined" !== typeof e && (a.isArray(e) ? t += "[]" : e = [e],
                    a.forEach(e, (function(e) {
                        a.isDate(e) ? e = e.toISOString() : a.isObject(e) && (e = JSON.stringify(e)),
                        o.push(r(t) + "=" + r(e))
                    }
                    )))
                }
                )),
                i = o.join("&")
            }
            if (i) {
                var s = e.indexOf("#");
                -1 !== s && (e = e.slice(0, s)),
                e += (-1 === e.indexOf("?") ? "?" : "&") + i
            }
            return e
        }
    }
    , function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            return !(!e || !e.__CANCEL__)
        }
    }
    , function(e, t, n) {
        "use strict";
        (function(t) {
            var a = n(155)
              , r = n(266)
              , i = {
                "Content-Type": "application/x-www-form-urlencoded"
            };
            function o(e, t) {
                !a.isUndefined(e) && a.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
            }
            var s = {
                adapter: function() {
                    var e;
                    return ("undefined" !== typeof XMLHttpRequest || "undefined" !== typeof t && "[object process]" === Object.prototype.toString.call(t)) && (e = n(202)),
                    e
                }(),
                transformRequest: [function(e, t) {
                    return r(t, "Accept"),
                    r(t, "Content-Type"),
                    a.isFormData(e) || a.isArrayBuffer(e) || a.isBuffer(e) || a.isStream(e) || a.isFile(e) || a.isBlob(e) ? e : a.isArrayBufferView(e) ? e.buffer : a.isURLSearchParams(e) ? (o(t, "application/x-www-form-urlencoded;charset=utf-8"),
                    e.toString()) : a.isObject(e) ? (o(t, "application/json;charset=utf-8"),
                    JSON.stringify(e)) : e
                }
                ],
                transformResponse: [function(e) {
                    if ("string" === typeof e)
                        try {
                            e = JSON.parse(e)
                        } catch (t) {}
                    return e
                }
                ],
                timeout: 0,
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                maxContentLength: -1,
                maxBodyLength: -1,
                validateStatus: function(e) {
                    return e >= 200 && e < 300
                },
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*"
                    }
                }
            };
            a.forEach(["delete", "get", "head"], (function(e) {
                s.headers[e] = {}
            }
            )),
            a.forEach(["post", "put", "patch"], (function(e) {
                s.headers[e] = a.merge(i)
            }
            )),
            e.exports = s
        }
        ).call(this, n(265))
    }
    , function(e, t, n) {
        "use strict";
        var a = n(155)
          , r = n(267)
          , i = n(269)
          , o = n(199)
          , s = n(270)
          , l = n(273)
          , c = n(274)
          , u = n(203);
        e.exports = function(e) {
            return new Promise((function(t, n) {
                var d = e.data
                  , p = e.headers;
                a.isFormData(d) && delete p["Content-Type"];
                var g = new XMLHttpRequest;
                if (e.auth) {
                    var m = e.auth.username || ""
                      , b = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                    p.Authorization = "Basic " + btoa(m + ":" + b)
                }
                var f = s(e.baseURL, e.url);
                if (g.open(e.method.toUpperCase(), o(f, e.params, e.paramsSerializer), !0),
                g.timeout = e.timeout,
                g.onreadystatechange = function() {
                    if (g && 4 === g.readyState && (0 !== g.status || g.responseURL && 0 === g.responseURL.indexOf("file:"))) {
                        var a = "getAllResponseHeaders"in g ? l(g.getAllResponseHeaders()) : null
                          , i = {
                            data: e.responseType && "text" !== e.responseType ? g.response : g.responseText,
                            status: g.status,
                            statusText: g.statusText,
                            headers: a,
                            config: e,
                            request: g
                        };
                        r(t, n, i),
                        g = null
                    }
                }
                ,
                g.onabort = function() {
                    g && (n(u("Request aborted", e, "ECONNABORTED", g)),
                    g = null)
                }
                ,
                g.onerror = function() {
                    n(u("Network Error", e, null, g)),
                    g = null
                }
                ,
                g.ontimeout = function() {
                    var t = "timeout of " + e.timeout + "ms exceeded";
                    e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                    n(u(t, e, "ECONNABORTED", g)),
                    g = null
                }
                ,
                a.isStandardBrowserEnv()) {
                    var E = (e.withCredentials || c(f)) && e.xsrfCookieName ? i.read(e.xsrfCookieName) : void 0;
                    E && (p[e.xsrfHeaderName] = E)
                }
                if ("setRequestHeader"in g && a.forEach(p, (function(e, t) {
                    "undefined" === typeof d && "content-type" === t.toLowerCase() ? delete p[t] : g.setRequestHeader(t, e)
                }
                )),
                a.isUndefined(e.withCredentials) || (g.withCredentials = !!e.withCredentials),
                e.responseType)
                    try {
                        g.responseType = e.responseType
                    } catch (h) {
                        if ("json" !== e.responseType)
                            throw h
                    }
                "function" === typeof e.onDownloadProgress && g.addEventListener("progress", e.onDownloadProgress),
                "function" === typeof e.onUploadProgress && g.upload && g.upload.addEventListener("progress", e.onUploadProgress),
                e.cancelToken && e.cancelToken.promise.then((function(e) {
                    g && (g.abort(),
                    n(e),
                    g = null)
                }
                )),
                d || (d = null),
                g.send(d)
            }
            ))
        }
    }
    , function(e, t, n) {
        "use strict";
        var a = n(268);
        e.exports = function(e, t, n, r, i) {
            var o = new Error(e);
            return a(o, t, n, r, i)
        }
    }
    , function(e, t, n) {
        "use strict";
        var a = n(155);
        e.exports = function(e, t) {
            t = t || {};
            var n = {}
              , r = ["url", "method", "data"]
              , i = ["headers", "auth", "proxy", "params"]
              , o = ["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "timeoutMessage", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "decompress", "maxContentLength", "maxBodyLength", "maxRedirects", "transport", "httpAgent", "httpsAgent", "cancelToken", "socketPath", "responseEncoding"]
              , s = ["validateStatus"];
            function l(e, t) {
                return a.isPlainObject(e) && a.isPlainObject(t) ? a.merge(e, t) : a.isPlainObject(t) ? a.merge({}, t) : a.isArray(t) ? t.slice() : t
            }
            function c(r) {
                a.isUndefined(t[r]) ? a.isUndefined(e[r]) || (n[r] = l(void 0, e[r])) : n[r] = l(e[r], t[r])
            }
            a.forEach(r, (function(e) {
                a.isUndefined(t[e]) || (n[e] = l(void 0, t[e]))
            }
            )),
            a.forEach(i, c),
            a.forEach(o, (function(r) {
                a.isUndefined(t[r]) ? a.isUndefined(e[r]) || (n[r] = l(void 0, e[r])) : n[r] = l(void 0, t[r])
            }
            )),
            a.forEach(s, (function(a) {
                a in t ? n[a] = l(e[a], t[a]) : a in e && (n[a] = l(void 0, e[a]))
            }
            ));
            var u = r.concat(i).concat(o).concat(s)
              , d = Object.keys(e).concat(Object.keys(t)).filter((function(e) {
                return -1 === u.indexOf(e)
            }
            ));
            return a.forEach(d, c),
            n
        }
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            this.message = e
        }
        a.prototype.toString = function() {
            return "Cancel" + (this.message ? ": " + this.message : "")
        }
        ,
        a.prototype.__CANCEL__ = !0,
        e.exports = a
    }
    , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
        "use strict";
        var a = n(226)
          , r = n(228)
          , i = n(231)
          , o = n(232)
          , s = n(235)
          , l = n(368);
        e.exports = a([i, r, o, s, l])
    }
    , function(e, t, n) {
        "use strict";
        var a = n(367)
          , r = n(227);
        e.exports = function(e) {
            var t, n, i = e.length, o = [], s = [], l = -1;
            for (; ++l < i; )
                t = e[l],
                o.push(t.property),
                s.push(t.normal),
                n = t.space;
            return new r(a.apply(null, o),a.apply(null, s),n)
        }
    }
    , function(e, t, n) {
        "use strict";
        e.exports = r;
        var a = r.prototype;
        function r(e, t, n) {
            this.property = e,
            this.normal = t,
            n && (this.space = n)
        }
        a.space = null,
        a.normal = {},
        a.property = {}
    }
    , function(e, t, n) {
        "use strict";
        var a = n(164);
        e.exports = a({
            space: "xlink",
            transform: function(e, t) {
                return "xlink:" + t.slice(5).toLowerCase()
            },
            properties: {
                xLinkActuate: null,
                xLinkArcRole: null,
                xLinkHref: null,
                xLinkRole: null,
                xLinkShow: null,
                xLinkTitle: null,
                xLinkType: null
            }
        })
    }
    , function(e, t, n) {
        "use strict";
        var a = n(230)
          , r = n(173);
        e.exports = s,
        s.prototype = new a,
        s.prototype.defined = !0;
        var i = ["boolean", "booleanish", "overloadedBoolean", "number", "commaSeparated", "spaceSeparated", "commaOrSpaceSeparated"]
          , o = i.length;
        function s(e, t, n, s) {
            var c, u = -1;
            for (l(this, "space", s),
            a.call(this, e, t); ++u < o; )
                l(this, c = i[u], (n & r[c]) === r[c])
        }
        function l(e, t, n) {
            n && (e[t] = n)
        }
    }
    , function(e, t, n) {
        "use strict";
        e.exports = r;
        var a = r.prototype;
        function r(e, t) {
            this.property = e,
            this.attribute = t
        }
        a.space = null,
        a.attribute = null,
        a.property = null,
        a.boolean = !1,
        a.booleanish = !1,
        a.overloadedBoolean = !1,
        a.number = !1,
        a.commaSeparated = !1,
        a.spaceSeparated = !1,
        a.commaOrSpaceSeparated = !1,
        a.mustUseProperty = !1,
        a.defined = !1
    }
    , function(e, t, n) {
        "use strict";
        var a = n(164);
        e.exports = a({
            space: "xml",
            transform: function(e, t) {
                return "xml:" + t.slice(3).toLowerCase()
            },
            properties: {
                xmlLang: null,
                xmlBase: null,
                xmlSpace: null
            }
        })
    }
    , function(e, t, n) {
        "use strict";
        var a = n(164)
          , r = n(233);
        e.exports = a({
            space: "xmlns",
            attributes: {
                xmlnsxlink: "xmlns:xlink"
            },
            transform: r,
            properties: {
                xmlns: null,
                xmlnsXLink: null
            }
        })
    }
    , function(e, t, n) {
        "use strict";
        var a = n(234);
        e.exports = function(e, t) {
            return a(e, t.toLowerCase())
        }
    }
    , function(e, t, n) {
        "use strict";
        e.exports = function(e, t) {
            return t in e ? e[t] : t
        }
    }
    , function(e, t, n) {
        "use strict";
        var a = n(173)
          , r = n(164)
          , i = a.booleanish
          , o = a.number
          , s = a.spaceSeparated;
        e.exports = r({
            transform: function(e, t) {
                return "role" === t ? t : "aria-" + t.slice(4).toLowerCase()
            },
            properties: {
                ariaActiveDescendant: null,
                ariaAtomic: i,
                ariaAutoComplete: null,
                ariaBusy: i,
                ariaChecked: i,
                ariaColCount: o,
                ariaColIndex: o,
                ariaColSpan: o,
                ariaControls: s,
                ariaCurrent: null,
                ariaDescribedBy: s,
                ariaDetails: null,
                ariaDisabled: i,
                ariaDropEffect: s,
                ariaErrorMessage: null,
                ariaExpanded: i,
                ariaFlowTo: s,
                ariaGrabbed: i,
                ariaHasPopup: null,
                ariaHidden: i,
                ariaInvalid: null,
                ariaKeyShortcuts: null,
                ariaLabel: null,
                ariaLabelledBy: s,
                ariaLevel: o,
                ariaLive: null,
                ariaModal: i,
                ariaMultiLine: i,
                ariaMultiSelectable: i,
                ariaOrientation: null,
                ariaOwns: s,
                ariaPlaceholder: null,
                ariaPosInSet: o,
                ariaPressed: i,
                ariaReadOnly: i,
                ariaRelevant: null,
                ariaRequired: i,
                ariaRoleDescription: s,
                ariaRowCount: o,
                ariaRowIndex: o,
                ariaRowSpan: o,
                ariaSelected: i,
                ariaSetSize: o,
                ariaSort: null,
                ariaValueMax: o,
                ariaValueMin: o,
                ariaValueNow: o,
                ariaValueText: null,
                role: null
            }
        })
    }
    , function(e, t, n) {
        var a = n(370)
          , r = n(371)
          , i = n(372)
          , o = n(373);
        e.exports = function(e) {
            return a(e) || r(e) || i(e) || o()
        }
    }
    , function(e, t) {
        e.exports = function(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, a = new Array(t); n < t; n++)
                a[n] = e[n];
            return a
        }
    }
    , function(e, t, n) {
        "use strict";
        var a = n(185)
          , r = n(229)
          , i = n(230)
          , o = "data";
        e.exports = function(e, t) {
            var n = a(t)
              , p = t
              , g = i;
            if (n in e.normal)
                return e.property[e.normal[n]];
            n.length > 4 && n.slice(0, 4) === o && s.test(t) && ("-" === t.charAt(4) ? p = function(e) {
                var t = e.slice(5).replace(l, d);
                return o + t.charAt(0).toUpperCase() + t.slice(1)
            }(t) : t = function(e) {
                var t = e.slice(4);
                if (l.test(t))
                    return e;
                "-" !== (t = t.replace(c, u)).charAt(0) && (t = "-" + t);
                return o + t
            }(t),
            g = r);
            return new g(p,t)
        }
        ;
        var s = /^data[-\w.:]+$/i
          , l = /-[a-z]/g
          , c = /[A-Z]/g;
        function u(e) {
            return "-" + e.toLowerCase()
        }
        function d(e) {
            return e.charAt(1).toUpperCase()
        }
    }
    , function(e, t, n) {
        "use strict";
        t.parse = function(e) {
            var t = String(e || "").trim();
            return "" === t ? [] : t.split(a)
        }
        ,
        t.stringify = function(e) {
            return e.join(" ").trim()
        }
        ;
        var a = /[ \t\n\r\f]+/g
    }
    , function(e, t, n) {
        "use strict";
        t.parse = function(e) {
            var t, n = [], a = String(e || ""), r = a.indexOf(","), i = 0, o = !1;
            for (; !o; )
                -1 === r && (r = a.length,
                o = !0),
                !(t = a.slice(i, r).trim()) && o || n.push(t),
                i = r + 1,
                r = a.indexOf(",", i);
            return n
        }
        ,
        t.stringify = function(e, t) {
            var n = t || {}
              , a = !1 === n.padLeft ? "" : " "
              , r = n.padRight ? " " : "";
            "" === e[e.length - 1] && (e = e.concat(""));
            return e.join(r + "," + a).trim()
        }
    }
    , function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            var t = "string" === typeof e ? e.charCodeAt(0) : e;
            return t >= 48 && t <= 57
        }
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                var t = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b"
                  , n = {
                    pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
                    lookbehind: !0,
                    alias: "punctuation",
                    inside: null
                }
                  , a = {
                    bash: n,
                    environment: {
                        pattern: RegExp("\\$" + t),
                        alias: "constant"
                    },
                    variable: [{
                        pattern: /\$?\(\([\s\S]+?\)\)/,
                        greedy: !0,
                        inside: {
                            variable: [{
                                pattern: /(^\$\(\([\s\S]+)\)\)/,
                                lookbehind: !0
                            }, /^\$\(\(/],
                            number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
                            operator: /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
                            punctuation: /\(\(?|\)\)?|,|;/
                        }
                    }, {
                        pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
                        greedy: !0,
                        inside: {
                            variable: /^\$\(|^`|\)$|`$/
                        }
                    }, {
                        pattern: /\$\{[^}]+\}/,
                        greedy: !0,
                        inside: {
                            operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
                            punctuation: /[\[\]]/,
                            environment: {
                                pattern: RegExp("(\\{)" + t),
                                lookbehind: !0,
                                alias: "constant"
                            }
                        }
                    }, /\$(?:\w+|[#?*!@$])/],
                    entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/
                };
                e.languages.bash = {
                    shebang: {
                        pattern: /^#!\s*\/.*/,
                        alias: "important"
                    },
                    comment: {
                        pattern: /(^|[^"{\\$])#.*/,
                        lookbehind: !0
                    },
                    "function-name": [{
                        pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
                        lookbehind: !0,
                        alias: "function"
                    }, {
                        pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
                        alias: "function"
                    }],
                    "for-or-select": {
                        pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
                        alias: "variable",
                        lookbehind: !0
                    },
                    "assign-left": {
                        pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
                        inside: {
                            environment: {
                                pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + t),
                                lookbehind: !0,
                                alias: "constant"
                            }
                        },
                        alias: "variable",
                        lookbehind: !0
                    },
                    string: [{
                        pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
                        lookbehind: !0,
                        greedy: !0,
                        inside: a
                    }, {
                        pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
                        lookbehind: !0,
                        greedy: !0,
                        inside: {
                            bash: n
                        }
                    }, {
                        pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
                        lookbehind: !0,
                        greedy: !0,
                        inside: a
                    }, {
                        pattern: /(^|[^$\\])'[^']*'/,
                        lookbehind: !0,
                        greedy: !0
                    }, {
                        pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
                        greedy: !0,
                        inside: {
                            entity: a.entity
                        }
                    }],
                    environment: {
                        pattern: RegExp("\\$?" + t),
                        alias: "constant"
                    },
                    variable: a.variable,
                    function: {
                        pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
                        lookbehind: !0
                    },
                    keyword: {
                        pattern: /(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,
                        lookbehind: !0
                    },
                    builtin: {
                        pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,
                        lookbehind: !0,
                        alias: "class-name"
                    },
                    boolean: {
                        pattern: /(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/,
                        lookbehind: !0
                    },
                    "file-descriptor": {
                        pattern: /\B&\d\b/,
                        alias: "important"
                    },
                    operator: {
                        pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
                        inside: {
                            "file-descriptor": {
                                pattern: /^\d/,
                                alias: "important"
                            }
                        }
                    },
                    punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
                    number: {
                        pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
                        lookbehind: !0
                    }
                },
                n.inside = e.languages.bash;
                for (var r = ["comment", "function-name", "for-or-select", "assign-left", "string", "environment", "function", "keyword", "builtin", "boolean", "file-descriptor", "operator", "punctuation", "number"], i = a.variable[1].inside, o = 0; o < r.length; o++)
                    i[r[o]] = e.languages.bash[r[o]];
                e.languages.shell = e.languages.bash
            }(e)
        }
        e.exports = a,
        a.displayName = "bash",
        a.aliases = ["shell"]
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.basic = {
                comment: {
                    pattern: /(?:!|REM\b).+/i,
                    inside: {
                        keyword: /^REM/i
                    }
                },
                string: {
                    pattern: /"(?:""|[!#$%&'()*,\/:;<=>?^\w +\-.])*"/i,
                    greedy: !0
                },
                number: /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:E[+-]?\d+)?/i,
                keyword: /\b(?:AS|BEEP|BLOAD|BSAVE|CALL(?: ABSOLUTE)?|CASE|CHAIN|CHDIR|CLEAR|CLOSE|CLS|COM|COMMON|CONST|DATA|DECLARE|DEF(?: FN| SEG|DBL|INT|LNG|SNG|STR)|DIM|DO|DOUBLE|ELSE|ELSEIF|END|ENVIRON|ERASE|ERROR|EXIT|FIELD|FILES|FOR|FUNCTION|GET|GOSUB|GOTO|IF|INPUT|INTEGER|IOCTL|KEY|KILL|LINE INPUT|LOCATE|LOCK|LONG|LOOP|LSET|MKDIR|NAME|NEXT|OFF|ON(?: COM| ERROR| KEY| TIMER)?|OPEN|OPTION BASE|OUT|POKE|PUT|READ|REDIM|REM|RESTORE|RESUME|RETURN|RMDIR|RSET|RUN|SHARED|SINGLE|SELECT CASE|SHELL|SLEEP|STATIC|STEP|STOP|STRING|SUB|SWAP|SYSTEM|THEN|TIMER|TO|TROFF|TRON|TYPE|UNLOCK|UNTIL|USING|VIEW PRINT|WAIT|WEND|WHILE|WRITE)(?:\$|\b)/i,
                function: /\b(?:ABS|ACCESS|ACOS|ANGLE|AREA|ARITHMETIC|ARRAY|ASIN|ASK|AT|ATN|BASE|BEGIN|BREAK|CAUSE|CEIL|CHR|CLIP|COLLATE|COLOR|CON|COS|COSH|COT|CSC|DATE|DATUM|DEBUG|DECIMAL|DEF|DEG|DEGREES|DELETE|DET|DEVICE|DISPLAY|DOT|ELAPSED|EPS|ERASABLE|EXLINE|EXP|EXTERNAL|EXTYPE|FILETYPE|FIXED|FP|GO|GRAPH|HANDLER|IDN|IMAGE|IN|INT|INTERNAL|IP|IS|KEYED|LBOUND|LCASE|LEFT|LEN|LENGTH|LET|LINE|LINES|LOG|LOG10|LOG2|LTRIM|MARGIN|MAT|MAX|MAXNUM|MID|MIN|MISSING|MOD|NATIVE|NUL|NUMERIC|OF|OPTION|ORD|ORGANIZATION|OUTIN|OUTPUT|PI|POINT|POINTER|POINTS|POS|PRINT|PROGRAM|PROMPT|RAD|RADIANS|RANDOMIZE|RECORD|RECSIZE|RECTYPE|RELATIVE|REMAINDER|REPEAT|REST|RETRY|REWRITE|RIGHT|RND|ROUND|RTRIM|SAME|SEC|SELECT|SEQUENTIAL|SET|SETTER|SGN|SIN|SINH|SIZE|SKIP|SQR|STANDARD|STATUS|STR|STREAM|STYLE|TAB|TAN|TANH|TEMPLATE|TEXT|THERE|TIME|TIMEOUT|TRACE|TRANSFORM|TRUNCATE|UBOUND|UCASE|USE|VAL|VARIABLE|VIEWPORT|WHEN|WINDOW|WITH|ZER|ZONEWIDTH)(?:\$|\b)/i,
                operator: /<[=>]?|>=?|[+\-*\/^=&]|\b(?:AND|EQV|IMP|NOT|OR|XOR)\b/i,
                punctuation: /[,;:()]/
            }
        }
        e.exports = a,
        a.displayName = "basic",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.lua = {
                comment: /^#!.+|--(?:\[(=*)\[[\s\S]*?\]\1\]|.*)/m,
                string: {
                    pattern: /(["'])(?:(?!\1)[^\\\r\n]|\\z(?:\r\n|\s)|\\(?:\r\n|[^z]))*\1|\[(=*)\[[\s\S]*?\]\2\]/,
                    greedy: !0
                },
                number: /\b0x[a-f\d]+(?:\.[a-f\d]*)?(?:p[+-]?\d+)?\b|\b\d+(?:\.\B|(?:\.\d*)?(?:e[+-]?\d+)?\b)|\B\.\d+(?:e[+-]?\d+)?\b/i,
                keyword: /\b(?:and|break|do|else|elseif|end|false|for|function|goto|if|in|local|nil|not|or|repeat|return|then|true|until|while)\b/,
                function: /(?!\d)\w+(?=\s*(?:[({]))/,
                operator: [/[-+*%^&|#]|\/\/?|<[<=]?|>[>=]?|[=~]=?/, {
                    pattern: /(^|[^.])\.\.(?!\.)/,
                    lookbehind: !0
                }],
                punctuation: /[\[\](){},;]|\.+|:+/
            }
        }
        e.exports = a,
        a.displayName = "lua",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                var t = e.util.clone(e.languages.javascript)
                  , n = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source
                  , a = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source
                  , r = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
                function i(e, t) {
                    return e = e.replace(/<S>/g, (function() {
                        return n
                    }
                    )).replace(/<BRACES>/g, (function() {
                        return a
                    }
                    )).replace(/<SPREAD>/g, (function() {
                        return r
                    }
                    )),
                    RegExp(e, t)
                }
                r = i(r).source,
                e.languages.jsx = e.languages.extend("markup", t),
                e.languages.jsx.tag.pattern = i(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),
                e.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/i,
                e.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/i,
                e.languages.jsx.tag.inside.tag.inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/,
                e.languages.jsx.tag.inside.comment = t.comment,
                e.languages.insertBefore("inside", "attr-name", {
                    spread: {
                        pattern: i(/<SPREAD>/.source),
                        inside: e.languages.jsx
                    }
                }, e.languages.jsx.tag),
                e.languages.insertBefore("inside", "special-attr", {
                    script: {
                        pattern: i(/=<BRACES>/.source),
                        inside: {
                            "script-punctuation": {
                                pattern: /^=(?=\{)/,
                                alias: "punctuation"
                            },
                            rest: e.languages.jsx
                        },
                        alias: "language-javascript"
                    }
                }, e.languages.jsx.tag);
                var o = function e(t) {
                    return t ? "string" === typeof t ? t : "string" === typeof t.content ? t.content : t.content.map(e).join("") : ""
                }
                  , s = function t(n) {
                    for (var a = [], r = 0; r < n.length; r++) {
                        var i = n[r]
                          , s = !1;
                        if ("string" !== typeof i && ("tag" === i.type && i.content[0] && "tag" === i.content[0].type ? "</" === i.content[0].content[0].content ? a.length > 0 && a[a.length - 1].tagName === o(i.content[0].content[1]) && a.pop() : "/>" === i.content[i.content.length - 1].content || a.push({
                            tagName: o(i.content[0].content[1]),
                            openedBraces: 0
                        }) : a.length > 0 && "punctuation" === i.type && "{" === i.content ? a[a.length - 1].openedBraces++ : a.length > 0 && a[a.length - 1].openedBraces > 0 && "punctuation" === i.type && "}" === i.content ? a[a.length - 1].openedBraces-- : s = !0),
                        (s || "string" === typeof i) && a.length > 0 && 0 === a[a.length - 1].openedBraces) {
                            var l = o(i);
                            r < n.length - 1 && ("string" === typeof n[r + 1] || "plain-text" === n[r + 1].type) && (l += o(n[r + 1]),
                            n.splice(r + 1, 1)),
                            r > 0 && ("string" === typeof n[r - 1] || "plain-text" === n[r - 1].type) && (l = o(n[r - 1]) + l,
                            n.splice(r - 1, 1),
                            r--),
                            n[r] = new e.Token("plain-text",l,null,l)
                        }
                        i.content && "string" !== typeof i.content && t(i.content)
                    }
                };
                e.hooks.add("after-tokenize", (function(e) {
                    "jsx" !== e.language && "tsx" !== e.language || s(e.tokens)
                }
                ))
            }(e)
        }
        e.exports = a,
        a.displayName = "jsx",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.turtle = {
                comment: {
                    pattern: /#.*/,
                    greedy: !0
                },
                "multiline-string": {
                    pattern: /"""(?:(?:""?)?(?:[^"\\]|\\.))*"""|'''(?:(?:''?)?(?:[^'\\]|\\.))*'''/,
                    greedy: !0,
                    alias: "string",
                    inside: {
                        comment: /#.*/
                    }
                },
                string: {
                    pattern: /"(?:[^\\"\r\n]|\\.)*"|'(?:[^\\'\r\n]|\\.)*'/,
                    greedy: !0
                },
                url: {
                    pattern: /<(?:[^\x00-\x20<>"{}|^`\\]|\\(?:u[\da-fA-F]{4}|U[\da-fA-F]{8}))*>/,
                    greedy: !0,
                    inside: {
                        punctuation: /[<>]/
                    }
                },
                function: {
                    pattern: /(?:(?![-.\d\xB7])[-.\w\xB7\xC0-\uFFFD]+)?:(?:(?![-.])(?:[-.:\w\xC0-\uFFFD]|%[\da-f]{2}|\\.)+)?/i,
                    inside: {
                        "local-name": {
                            pattern: /([^:]*:)[\s\S]+/,
                            lookbehind: !0
                        },
                        prefix: {
                            pattern: /[\s\S]+/,
                            inside: {
                                punctuation: /:/
                            }
                        }
                    }
                },
                number: /[+-]?\b\d+(?:\.\d*)?(?:e[+-]?\d+)?/i,
                punctuation: /[{}.,;()[\]]|\^\^/,
                boolean: /\b(?:true|false)\b/,
                keyword: [/(?:\ba|@prefix|@base)\b|=/, /\b(?:graph|base|prefix)\b/i],
                tag: {
                    pattern: /@[a-z]+(?:-[a-z\d]+)*/i,
                    inside: {
                        punctuation: /@/
                    }
                }
            },
            e.languages.trig = e.languages.turtle
        }
        e.exports = a,
        a.displayName = "turtle",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        var a = n(243);
        function r(e) {
            e.register(a),
            e.languages.vbnet = e.languages.extend("basic", {
                comment: [{
                    pattern: /(?:!|REM\b).+/i,
                    inside: {
                        keyword: /^REM/i
                    }
                }, {
                    pattern: /(^|[^\\:])'.*/,
                    lookbehind: !0,
                    greedy: !0
                }],
                string: {
                    pattern: /(^|[^"])"(?:""|[^"])*"(?!")/i,
                    lookbehind: !0,
                    greedy: !0
                },
                keyword: /(?:\b(?:ADDHANDLER|ADDRESSOF|ALIAS|AND|ANDALSO|AS|BEEP|BLOAD|BOOLEAN|BSAVE|BYREF|BYTE|BYVAL|CALL(?: ABSOLUTE)?|CASE|CATCH|CBOOL|CBYTE|CCHAR|CDATE|CDEC|CDBL|CHAIN|CHAR|CHDIR|CINT|CLASS|CLEAR|CLNG|CLOSE|CLS|COBJ|COM|COMMON|CONST|CONTINUE|CSBYTE|CSHORT|CSNG|CSTR|CTYPE|CUINT|CULNG|CUSHORT|DATA|DATE|DECIMAL|DECLARE|DEFAULT|DEF(?: FN| SEG|DBL|INT|LNG|SNG|STR)|DELEGATE|DIM|DIRECTCAST|DO|DOUBLE|ELSE|ELSEIF|END|ENUM|ENVIRON|ERASE|ERROR|EVENT|EXIT|FALSE|FIELD|FILES|FINALLY|FOR(?: EACH)?|FRIEND|FUNCTION|GET|GETTYPE|GETXMLNAMESPACE|GLOBAL|GOSUB|GOTO|HANDLES|IF|IMPLEMENTS|IMPORTS|IN|INHERITS|INPUT|INTEGER|INTERFACE|IOCTL|IS|ISNOT|KEY|KILL|LINE INPUT|LET|LIB|LIKE|LOCATE|LOCK|LONG|LOOP|LSET|ME|MKDIR|MOD|MODULE|MUSTINHERIT|MUSTOVERRIDE|MYBASE|MYCLASS|NAME|NAMESPACE|NARROWING|NEW|NEXT|NOT|NOTHING|NOTINHERITABLE|NOTOVERRIDABLE|OBJECT|OF|OFF|ON(?: COM| ERROR| KEY| TIMER)?|OPERATOR|OPEN|OPTION(?: BASE)?|OPTIONAL|OR|ORELSE|OUT|OVERLOADS|OVERRIDABLE|OVERRIDES|PARAMARRAY|PARTIAL|POKE|PRIVATE|PROPERTY|PROTECTED|PUBLIC|PUT|RAISEEVENT|READ|READONLY|REDIM|REM|REMOVEHANDLER|RESTORE|RESUME|RETURN|RMDIR|RSET|RUN|SBYTE|SELECT(?: CASE)?|SET|SHADOWS|SHARED|SHORT|SINGLE|SHELL|SLEEP|STATIC|STEP|STOP|STRING|STRUCTURE|SUB|SYNCLOCK|SWAP|SYSTEM|THEN|THROW|TIMER|TO|TROFF|TRON|TRUE|TRY|TRYCAST|TYPE|TYPEOF|UINTEGER|ULONG|UNLOCK|UNTIL|USHORT|USING|VIEW PRINT|WAIT|WEND|WHEN|WHILE|WIDENING|WITH|WITHEVENTS|WRITE|WRITEONLY|XOR)|\B(?:#CONST|#ELSE|#ELSEIF|#END|#IF))(?:\$|\b)/i,
                punctuation: /[,;:(){}]/
            })
        }
        e.exports = r,
        r.displayName = "vbnet",
        r.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                var t = /[*&][^\s[\]{},]+/
                  , n = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/
                  , a = "(?:" + n.source + "(?:[ \t]+" + t.source + ")?|" + t.source + "(?:[ \t]+" + n.source + ")?)"
                  , r = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g, (function() {
                    return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source
                }
                ))
                  , i = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
                function o(e, t) {
                    t = (t || "").replace(/m/g, "") + "m";
                    var n = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g, (function() {
                        return a
                    }
                    )).replace(/<<value>>/g, (function() {
                        return e
                    }
                    ));
                    return RegExp(n, t)
                }
                e.languages.yaml = {
                    scalar: {
                        pattern: RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g, (function() {
                            return a
                        }
                        ))),
                        lookbehind: !0,
                        alias: "string"
                    },
                    comment: /#.*/,
                    key: {
                        pattern: RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g, (function() {
                            return a
                        }
                        )).replace(/<<key>>/g, (function() {
                            return "(?:" + r + "|" + i + ")"
                        }
                        ))),
                        lookbehind: !0,
                        greedy: !0,
                        alias: "atrule"
                    },
                    directive: {
                        pattern: /(^[ \t]*)%.+/m,
                        lookbehind: !0,
                        alias: "important"
                    },
                    datetime: {
                        pattern: o(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),
                        lookbehind: !0,
                        alias: "number"
                    },
                    boolean: {
                        pattern: o(/true|false/.source, "i"),
                        lookbehind: !0,
                        alias: "important"
                    },
                    null: {
                        pattern: o(/null|~/.source, "i"),
                        lookbehind: !0,
                        alias: "important"
                    },
                    string: {
                        pattern: o(i),
                        lookbehind: !0,
                        greedy: !0
                    },
                    number: {
                        pattern: o(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, "i"),
                        lookbehind: !0
                    },
                    tag: n,
                    important: t,
                    punctuation: /---|[:[\]{}\-,|>?]|\.\.\./
                },
                e.languages.yml = e.languages.yaml
            }(e)
        }
        e.exports = a,
        a.displayName = "yaml",
        a.aliases = ["yml"]
    }
    , function(e, t, n) {
        var a = n(633);
        e.exports = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? Object(arguments[t]) : {}
                  , r = Object.keys(n);
                "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                )))),
                r.forEach((function(t) {
                    a(e, t, n[t])
                }
                ))
            }
            return e
        }
    }
    , , , , , , , , , , function(e, t, n) {
        var a = function(e) {
            "use strict";
            var t, n = Object.prototype, a = n.hasOwnProperty, r = "function" === typeof Symbol ? Symbol : {}, i = r.iterator || "@@iterator", o = r.asyncIterator || "@@asyncIterator", s = r.toStringTag || "@@toStringTag";
            function l(e, t, n) {
                return Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                e[t]
            }
            try {
                l({}, "")
            } catch (k) {
                l = function(e, t, n) {
                    return e[t] = n
                }
            }
            function c(e, t, n, a) {
                var r = t && t.prototype instanceof f ? t : f
                  , i = Object.create(r.prototype)
                  , o = new w(a || []);
                return i._invoke = function(e, t, n) {
                    var a = d;
                    return function(r, i) {
                        if (a === g)
                            throw new Error("Generator is already running");
                        if (a === m) {
                            if ("throw" === r)
                                throw i;
                            return C()
                        }
                        for (n.method = r,
                        n.arg = i; ; ) {
                            var o = n.delegate;
                            if (o) {
                                var s = N(o, n);
                                if (s) {
                                    if (s === b)
                                        continue;
                                    return s
                                }
                            }
                            if ("next" === n.method)
                                n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if (a === d)
                                    throw a = m,
                                    n.arg;
                                n.dispatchException(n.arg)
                            } else
                                "return" === n.method && n.abrupt("return", n.arg);
                            a = g;
                            var l = u(e, t, n);
                            if ("normal" === l.type) {
                                if (a = n.done ? m : p,
                                l.arg === b)
                                    continue;
                                return {
                                    value: l.arg,
                                    done: n.done
                                }
                            }
                            "throw" === l.type && (a = m,
                            n.method = "throw",
                            n.arg = l.arg)
                        }
                    }
                }(e, n, o),
                i
            }
            function u(e, t, n) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, n)
                    }
                } catch (k) {
                    return {
                        type: "throw",
                        arg: k
                    }
                }
            }
            e.wrap = c;
            var d = "suspendedStart"
              , p = "suspendedYield"
              , g = "executing"
              , m = "completed"
              , b = {};
            function f() {}
            function E() {}
            function h() {}
            var S = {};
            S[i] = function() {
                return this
            }
            ;
            var y = Object.getPrototypeOf
              , T = y && y(y(O([])));
            T && T !== n && a.call(T, i) && (S = T);
            var A = h.prototype = f.prototype = Object.create(S);
            function R(e) {
                ["next", "throw", "return"].forEach((function(t) {
                    l(e, t, (function(e) {
                        return this._invoke(t, e)
                    }
                    ))
                }
                ))
            }
            function I(e, t) {
                function n(r, i, o, s) {
                    var l = u(e[r], e, i);
                    if ("throw" !== l.type) {
                        var c = l.arg
                          , d = c.value;
                        return d && "object" === typeof d && a.call(d, "__await") ? t.resolve(d.__await).then((function(e) {
                            n("next", e, o, s)
                        }
                        ), (function(e) {
                            n("throw", e, o, s)
                        }
                        )) : t.resolve(d).then((function(e) {
                            c.value = e,
                            o(c)
                        }
                        ), (function(e) {
                            return n("throw", e, o, s)
                        }
                        ))
                    }
                    s(l.arg)
                }
                var r;
                this._invoke = function(e, a) {
                    function i() {
                        return new t((function(t, r) {
                            n(e, a, t, r)
                        }
                        ))
                    }
                    return r = r ? r.then(i, i) : i()
                }
            }
            function N(e, n) {
                var a = e.iterator[n.method];
                if (a === t) {
                    if (n.delegate = null,
                    "throw" === n.method) {
                        if (e.iterator.return && (n.method = "return",
                        n.arg = t,
                        N(e, n),
                        "throw" === n.method))
                            return b;
                        n.method = "throw",
                        n.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return b
                }
                var r = u(a, e.iterator, n.arg);
                if ("throw" === r.type)
                    return n.method = "throw",
                    n.arg = r.arg,
                    n.delegate = null,
                    b;
                var i = r.arg;
                return i ? i.done ? (n[e.resultName] = i.value,
                n.next = e.nextLoc,
                "return" !== n.method && (n.method = "next",
                n.arg = t),
                n.delegate = null,
                b) : i : (n.method = "throw",
                n.arg = new TypeError("iterator result is not an object"),
                n.delegate = null,
                b)
            }
            function _(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]),
                2 in e && (t.finallyLoc = e[2],
                t.afterLoc = e[3]),
                this.tryEntries.push(t)
            }
            function v(e) {
                var t = e.completion || {};
                t.type = "normal",
                delete t.arg,
                e.completion = t
            }
            function w(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                e.forEach(_, this),
                this.reset(!0)
            }
            function O(e) {
                if (e) {
                    var n = e[i];
                    if (n)
                        return n.call(e);
                    if ("function" === typeof e.next)
                        return e;
                    if (!isNaN(e.length)) {
                        var r = -1
                          , o = function n() {
                            for (; ++r < e.length; )
                                if (a.call(e, r))
                                    return n.value = e[r],
                                    n.done = !1,
                                    n;
                            return n.value = t,
                            n.done = !0,
                            n
                        };
                        return o.next = o
                    }
                }
                return {
                    next: C
                }
            }
            function C() {
                return {
                    value: t,
                    done: !0
                }
            }
            return E.prototype = A.constructor = h,
            h.constructor = E,
            E.displayName = l(h, s, "GeneratorFunction"),
            e.isGeneratorFunction = function(e) {
                var t = "function" === typeof e && e.constructor;
                return !!t && (t === E || "GeneratorFunction" === (t.displayName || t.name))
            }
            ,
            e.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h,
                l(e, s, "GeneratorFunction")),
                e.prototype = Object.create(A),
                e
            }
            ,
            e.awrap = function(e) {
                return {
                    __await: e
                }
            }
            ,
            R(I.prototype),
            I.prototype[o] = function() {
                return this
            }
            ,
            e.AsyncIterator = I,
            e.async = function(t, n, a, r, i) {
                void 0 === i && (i = Promise);
                var o = new I(c(t, n, a, r),i);
                return e.isGeneratorFunction(n) ? o : o.next().then((function(e) {
                    return e.done ? e.value : o.next()
                }
                ))
            }
            ,
            R(A),
            l(A, s, "Generator"),
            A[i] = function() {
                return this
            }
            ,
            A.toString = function() {
                return "[object Generator]"
            }
            ,
            e.keys = function(e) {
                var t = [];
                for (var n in e)
                    t.push(n);
                return t.reverse(),
                function n() {
                    for (; t.length; ) {
                        var a = t.pop();
                        if (a in e)
                            return n.value = a,
                            n.done = !1,
                            n
                    }
                    return n.done = !0,
                    n
                }
            }
            ,
            e.values = O,
            w.prototype = {
                constructor: w,
                reset: function(e) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = t,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = t,
                    this.tryEntries.forEach(v),
                    !e)
                        for (var n in this)
                            "t" === n.charAt(0) && a.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type)
                        throw e.arg;
                    return this.rval
                },
                dispatchException: function(e) {
                    if (this.done)
                        throw e;
                    var n = this;
                    function r(a, r) {
                        return s.type = "throw",
                        s.arg = e,
                        n.next = a,
                        r && (n.method = "next",
                        n.arg = t),
                        !!r
                    }
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var o = this.tryEntries[i]
                          , s = o.completion;
                        if ("root" === o.tryLoc)
                            return r("end");
                        if (o.tryLoc <= this.prev) {
                            var l = a.call(o, "catchLoc")
                              , c = a.call(o, "finallyLoc");
                            if (l && c) {
                                if (this.prev < o.catchLoc)
                                    return r(o.catchLoc, !0);
                                if (this.prev < o.finallyLoc)
                                    return r(o.finallyLoc)
                            } else if (l) {
                                if (this.prev < o.catchLoc)
                                    return r(o.catchLoc, !0)
                            } else {
                                if (!c)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < o.finallyLoc)
                                    return r(o.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var r = this.tryEntries[n];
                        if (r.tryLoc <= this.prev && a.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                            var i = r;
                            break
                        }
                    }
                    i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                    var o = i ? i.completion : {};
                    return o.type = e,
                    o.arg = t,
                    i ? (this.method = "next",
                    this.next = i.finallyLoc,
                    b) : this.complete(o)
                },
                complete: function(e, t) {
                    if ("throw" === e.type)
                        throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === e.type && t && (this.next = t),
                    b
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e)
                            return this.complete(n.completion, n.afterLoc),
                            v(n),
                            b
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var a = n.completion;
                            if ("throw" === a.type) {
                                var r = a.arg;
                                v(n)
                            }
                            return r
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(e, n, a) {
                    return this.delegate = {
                        iterator: O(e),
                        resultName: n,
                        nextLoc: a
                    },
                    "next" === this.method && (this.arg = t),
                    b
                }
            },
            e
        }(e.exports);
        try {
            regeneratorRuntime = a
        } catch (r) {
            Function("r", "regeneratorRuntime = r")(a)
        }
    }
    , function(e, t, n) {
        "use strict";
        var a = n(155)
          , r = n(198)
          , i = n(261)
          , o = n(204);
        function s(e) {
            var t = new i(e)
              , n = r(i.prototype.request, t);
            return a.extend(n, i.prototype, t),
            a.extend(n, t),
            n
        }
        var l = s(n(201));
        l.Axios = i,
        l.create = function(e) {
            return s(o(l.defaults, e))
        }
        ,
        l.Cancel = n(205),
        l.CancelToken = n(275),
        l.isCancel = n(200),
        l.all = function(e) {
            return Promise.all(e)
        }
        ,
        l.spread = n(276),
        l.isAxiosError = n(277),
        e.exports = l,
        e.exports.default = l
    }
    , function(e, t, n) {
        "use strict";
        var a = n(155)
          , r = n(199)
          , i = n(262)
          , o = n(263)
          , s = n(204);
        function l(e) {
            this.defaults = e,
            this.interceptors = {
                request: new i,
                response: new i
            }
        }
        l.prototype.request = function(e) {
            "string" === typeof e ? (e = arguments[1] || {}).url = arguments[0] : e = e || {},
            (e = s(this.defaults, e)).method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
            var t = [o, void 0]
              , n = Promise.resolve(e);
            for (this.interceptors.request.forEach((function(e) {
                t.unshift(e.fulfilled, e.rejected)
            }
            )),
            this.interceptors.response.forEach((function(e) {
                t.push(e.fulfilled, e.rejected)
            }
            )); t.length; )
                n = n.then(t.shift(), t.shift());
            return n
        }
        ,
        l.prototype.getUri = function(e) {
            return e = s(this.defaults, e),
            r(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
        }
        ,
        a.forEach(["delete", "get", "head", "options"], (function(e) {
            l.prototype[e] = function(t, n) {
                return this.request(s(n || {}, {
                    method: e,
                    url: t,
                    data: (n || {}).data
                }))
            }
        }
        )),
        a.forEach(["post", "put", "patch"], (function(e) {
            l.prototype[e] = function(t, n, a) {
                return this.request(s(a || {}, {
                    method: e,
                    url: t,
                    data: n
                }))
            }
        }
        )),
        e.exports = l
    }
    , function(e, t, n) {
        "use strict";
        var a = n(155);
        function r() {
            this.handlers = []
        }
        r.prototype.use = function(e, t) {
            return this.handlers.push({
                fulfilled: e,
                rejected: t
            }),
            this.handlers.length - 1
        }
        ,
        r.prototype.eject = function(e) {
            this.handlers[e] && (this.handlers[e] = null)
        }
        ,
        r.prototype.forEach = function(e) {
            a.forEach(this.handlers, (function(t) {
                null !== t && e(t)
            }
            ))
        }
        ,
        e.exports = r
    }
    , function(e, t, n) {
        "use strict";
        var a = n(155)
          , r = n(264)
          , i = n(200)
          , o = n(201);
        function s(e) {
            e.cancelToken && e.cancelToken.throwIfRequested()
        }
        e.exports = function(e) {
            return s(e),
            e.headers = e.headers || {},
            e.data = r(e.data, e.headers, e.transformRequest),
            e.headers = a.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers),
            a.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(t) {
                delete e.headers[t]
            }
            )),
            (e.adapter || o.adapter)(e).then((function(t) {
                return s(e),
                t.data = r(t.data, t.headers, e.transformResponse),
                t
            }
            ), (function(t) {
                return i(t) || (s(e),
                t && t.response && (t.response.data = r(t.response.data, t.response.headers, e.transformResponse))),
                Promise.reject(t)
            }
            ))
        }
    }
    , function(e, t, n) {
        "use strict";
        var a = n(155);
        e.exports = function(e, t, n) {
            return a.forEach(n, (function(n) {
                e = n(e, t)
            }
            )),
            e
        }
    }
    , function(e, t) {
        var n, a, r = e.exports = {};
        function i() {
            throw new Error("setTimeout has not been defined")
        }
        function o() {
            throw new Error("clearTimeout has not been defined")
        }
        function s(e) {
            if (n === setTimeout)
                return setTimeout(e, 0);
            if ((n === i || !n) && setTimeout)
                return n = setTimeout,
                setTimeout(e, 0);
            try {
                return n(e, 0)
            } catch (t) {
                try {
                    return n.call(null, e, 0)
                } catch (t) {
                    return n.call(this, e, 0)
                }
            }
        }
        !function() {
            try {
                n = "function" === typeof setTimeout ? setTimeout : i
            } catch (e) {
                n = i
            }
            try {
                a = "function" === typeof clearTimeout ? clearTimeout : o
            } catch (e) {
                a = o
            }
        }();
        var l, c = [], u = !1, d = -1;
        function p() {
            u && l && (u = !1,
            l.length ? c = l.concat(c) : d = -1,
            c.length && g())
        }
        function g() {
            if (!u) {
                var e = s(p);
                u = !0;
                for (var t = c.length; t; ) {
                    for (l = c,
                    c = []; ++d < t; )
                        l && l[d].run();
                    d = -1,
                    t = c.length
                }
                l = null,
                u = !1,
                function(e) {
                    if (a === clearTimeout)
                        return clearTimeout(e);
                    if ((a === o || !a) && clearTimeout)
                        return a = clearTimeout,
                        clearTimeout(e);
                    try {
                        a(e)
                    } catch (t) {
                        try {
                            return a.call(null, e)
                        } catch (t) {
                            return a.call(this, e)
                        }
                    }
                }(e)
            }
        }
        function m(e, t) {
            this.fun = e,
            this.array = t
        }
        function b() {}
        r.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
            c.push(new m(e,t)),
            1 !== c.length || u || s(g)
        }
        ,
        m.prototype.run = function() {
            this.fun.apply(null, this.array)
        }
        ,
        r.title = "browser",
        r.browser = !0,
        r.env = {},
        r.argv = [],
        r.version = "",
        r.versions = {},
        r.on = b,
        r.addListener = b,
        r.once = b,
        r.off = b,
        r.removeListener = b,
        r.removeAllListeners = b,
        r.emit = b,
        r.prependListener = b,
        r.prependOnceListener = b,
        r.listeners = function(e) {
            return []
        }
        ,
        r.binding = function(e) {
            throw new Error("process.binding is not supported")
        }
        ,
        r.cwd = function() {
            return "/"
        }
        ,
        r.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }
        ,
        r.umask = function() {
            return 0
        }
    }
    , function(e, t, n) {
        "use strict";
        var a = n(155);
        e.exports = function(e, t) {
            a.forEach(e, (function(n, a) {
                a !== t && a.toUpperCase() === t.toUpperCase() && (e[t] = n,
                delete e[a])
            }
            ))
        }
    }
    , function(e, t, n) {
        "use strict";
        var a = n(203);
        e.exports = function(e, t, n) {
            var r = n.config.validateStatus;
            n.status && r && !r(n.status) ? t(a("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n)
        }
    }
    , function(e, t, n) {
        "use strict";
        e.exports = function(e, t, n, a, r) {
            return e.config = t,
            n && (e.code = n),
            e.request = a,
            e.response = r,
            e.isAxiosError = !0,
            e.toJSON = function() {
                return {
                    message: this.message,
                    name: this.name,
                    description: this.description,
                    number: this.number,
                    fileName: this.fileName,
                    lineNumber: this.lineNumber,
                    columnNumber: this.columnNumber,
                    stack: this.stack,
                    config: this.config,
                    code: this.code
                }
            }
            ,
            e
        }
    }
    , function(e, t, n) {
        "use strict";
        var a = n(155);
        e.exports = a.isStandardBrowserEnv() ? {
            write: function(e, t, n, r, i, o) {
                var s = [];
                s.push(e + "=" + encodeURIComponent(t)),
                a.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()),
                a.isString(r) && s.push("path=" + r),
                a.isString(i) && s.push("domain=" + i),
                !0 === o && s.push("secure"),
                document.cookie = s.join("; ")
            },
            read: function(e) {
                var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                return t ? decodeURIComponent(t[3]) : null
            },
            remove: function(e) {
                this.write(e, "", Date.now() - 864e5)
            }
        } : {
            write: function() {},
            read: function() {
                return null
            },
            remove: function() {}
        }
    }
    , function(e, t, n) {
        "use strict";
        var a = n(271)
          , r = n(272);
        e.exports = function(e, t) {
            return e && !a(t) ? r(e, t) : t
        }
    }
    , function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
        }
    }
    , function(e, t, n) {
        "use strict";
        e.exports = function(e, t) {
            return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
        }
    }
    , function(e, t, n) {
        "use strict";
        var a = n(155)
          , r = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
        e.exports = function(e) {
            var t, n, i, o = {};
            return e ? (a.forEach(e.split("\n"), (function(e) {
                if (i = e.indexOf(":"),
                t = a.trim(e.substr(0, i)).toLowerCase(),
                n = a.trim(e.substr(i + 1)),
                t) {
                    if (o[t] && r.indexOf(t) >= 0)
                        return;
                    o[t] = "set-cookie" === t ? (o[t] ? o[t] : []).concat([n]) : o[t] ? o[t] + ", " + n : n
                }
            }
            )),
            o) : o
        }
    }
    , function(e, t, n) {
        "use strict";
        var a = n(155);
        e.exports = a.isStandardBrowserEnv() ? function() {
            var e, t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
            function r(e) {
                var a = e;
                return t && (n.setAttribute("href", a),
                a = n.href),
                n.setAttribute("href", a),
                {
                    href: n.href,
                    protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                    host: n.host,
                    search: n.search ? n.search.replace(/^\?/, "") : "",
                    hash: n.hash ? n.hash.replace(/^#/, "") : "",
                    hostname: n.hostname,
                    port: n.port,
                    pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
                }
            }
            return e = r(window.location.href),
            function(t) {
                var n = a.isString(t) ? r(t) : t;
                return n.protocol === e.protocol && n.host === e.host
            }
        }() : function() {
            return !0
        }
    }
    , function(e, t, n) {
        "use strict";
        var a = n(205);
        function r(e) {
            if ("function" !== typeof e)
                throw new TypeError("executor must be a function.");
            var t;
            this.promise = new Promise((function(e) {
                t = e
            }
            ));
            var n = this;
            e((function(e) {
                n.reason || (n.reason = new a(e),
                t(n.reason))
            }
            ))
        }
        r.prototype.throwIfRequested = function() {
            if (this.reason)
                throw this.reason
        }
        ,
        r.source = function() {
            var e;
            return {
                token: new r((function(t) {
                    e = t
                }
                )),
                cancel: e
            }
        }
        ,
        e.exports = r
    }
    , function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            return function(t) {
                return e.apply(null, t)
            }
        }
    }
    , function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            return "object" === typeof e && !0 === e.isAxiosError
        }
    }
    , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t) {
        e.exports = function() {
            for (var e = {}, t = 0; t < arguments.length; t++) {
                var a = arguments[t];
                for (var r in a)
                    n.call(a, r) && (e[r] = a[r])
            }
            return e
        }
        ;
        var n = Object.prototype.hasOwnProperty
    }
    , function(e, t, n) {
        "use strict";
        var a = n(173)
          , r = n(164)
          , i = n(233)
          , o = a.boolean
          , s = a.overloadedBoolean
          , l = a.booleanish
          , c = a.number
          , u = a.spaceSeparated
          , d = a.commaSeparated;
        e.exports = r({
            space: "html",
            attributes: {
                acceptcharset: "accept-charset",
                classname: "class",
                htmlfor: "for",
                httpequiv: "http-equiv"
            },
            transform: i,
            mustUseProperty: ["checked", "multiple", "muted", "selected"],
            properties: {
                abbr: null,
                accept: d,
                acceptCharset: u,
                accessKey: u,
                action: null,
                allow: null,
                allowFullScreen: o,
                allowPaymentRequest: o,
                allowUserMedia: o,
                alt: null,
                as: null,
                async: o,
                autoCapitalize: null,
                autoComplete: u,
                autoFocus: o,
                autoPlay: o,
                capture: o,
                charSet: null,
                checked: o,
                cite: null,
                className: u,
                cols: c,
                colSpan: null,
                content: null,
                contentEditable: l,
                controls: o,
                controlsList: u,
                coords: c | d,
                crossOrigin: null,
                data: null,
                dateTime: null,
                decoding: null,
                default: o,
                defer: o,
                dir: null,
                dirName: null,
                disabled: o,
                download: s,
                draggable: l,
                encType: null,
                enterKeyHint: null,
                form: null,
                formAction: null,
                formEncType: null,
                formMethod: null,
                formNoValidate: o,
                formTarget: null,
                headers: u,
                height: c,
                hidden: o,
                high: c,
                href: null,
                hrefLang: null,
                htmlFor: u,
                httpEquiv: u,
                id: null,
                imageSizes: null,
                imageSrcSet: d,
                inputMode: null,
                integrity: null,
                is: null,
                isMap: o,
                itemId: null,
                itemProp: u,
                itemRef: u,
                itemScope: o,
                itemType: u,
                kind: null,
                label: null,
                lang: null,
                language: null,
                list: null,
                loading: null,
                loop: o,
                low: c,
                manifest: null,
                max: null,
                maxLength: c,
                media: null,
                method: null,
                min: null,
                minLength: c,
                multiple: o,
                muted: o,
                name: null,
                nonce: null,
                noModule: o,
                noValidate: o,
                onAbort: null,
                onAfterPrint: null,
                onAuxClick: null,
                onBeforePrint: null,
                onBeforeUnload: null,
                onBlur: null,
                onCancel: null,
                onCanPlay: null,
                onCanPlayThrough: null,
                onChange: null,
                onClick: null,
                onClose: null,
                onContextMenu: null,
                onCopy: null,
                onCueChange: null,
                onCut: null,
                onDblClick: null,
                onDrag: null,
                onDragEnd: null,
                onDragEnter: null,
                onDragExit: null,
                onDragLeave: null,
                onDragOver: null,
                onDragStart: null,
                onDrop: null,
                onDurationChange: null,
                onEmptied: null,
                onEnded: null,
                onError: null,
                onFocus: null,
                onFormData: null,
                onHashChange: null,
                onInput: null,
                onInvalid: null,
                onKeyDown: null,
                onKeyPress: null,
                onKeyUp: null,
                onLanguageChange: null,
                onLoad: null,
                onLoadedData: null,
                onLoadedMetadata: null,
                onLoadEnd: null,
                onLoadStart: null,
                onMessage: null,
                onMessageError: null,
                onMouseDown: null,
                onMouseEnter: null,
                onMouseLeave: null,
                onMouseMove: null,
                onMouseOut: null,
                onMouseOver: null,
                onMouseUp: null,
                onOffline: null,
                onOnline: null,
                onPageHide: null,
                onPageShow: null,
                onPaste: null,
                onPause: null,
                onPlay: null,
                onPlaying: null,
                onPopState: null,
                onProgress: null,
                onRateChange: null,
                onRejectionHandled: null,
                onReset: null,
                onResize: null,
                onScroll: null,
                onSecurityPolicyViolation: null,
                onSeeked: null,
                onSeeking: null,
                onSelect: null,
                onSlotChange: null,
                onStalled: null,
                onStorage: null,
                onSubmit: null,
                onSuspend: null,
                onTimeUpdate: null,
                onToggle: null,
                onUnhandledRejection: null,
                onUnload: null,
                onVolumeChange: null,
                onWaiting: null,
                onWheel: null,
                open: o,
                optimum: c,
                pattern: null,
                ping: u,
                placeholder: null,
                playsInline: o,
                poster: null,
                preload: null,
                readOnly: o,
                referrerPolicy: null,
                rel: u,
                required: o,
                reversed: o,
                rows: c,
                rowSpan: c,
                sandbox: u,
                scope: null,
                scoped: o,
                seamless: o,
                selected: o,
                shape: null,
                size: c,
                sizes: null,
                slot: null,
                span: c,
                spellCheck: l,
                src: null,
                srcDoc: null,
                srcLang: null,
                srcSet: d,
                start: c,
                step: null,
                style: null,
                tabIndex: c,
                target: null,
                title: null,
                translate: null,
                type: null,
                typeMustMatch: o,
                useMap: null,
                value: l,
                width: c,
                wrap: null,
                align: null,
                aLink: null,
                archive: u,
                axis: null,
                background: null,
                bgColor: null,
                border: c,
                borderColor: null,
                bottomMargin: c,
                cellPadding: null,
                cellSpacing: null,
                char: null,
                charOff: null,
                classId: null,
                clear: null,
                code: null,
                codeBase: null,
                codeType: null,
                color: null,
                compact: o,
                declare: o,
                event: null,
                face: null,
                frame: null,
                frameBorder: null,
                hSpace: c,
                leftMargin: c,
                link: null,
                longDesc: null,
                lowSrc: null,
                marginHeight: c,
                marginWidth: c,
                noResize: o,
                noHref: o,
                noShade: o,
                noWrap: o,
                object: null,
                profile: null,
                prompt: null,
                rev: null,
                rightMargin: c,
                rules: null,
                scheme: null,
                scrolling: l,
                standby: null,
                summary: null,
                text: null,
                topMargin: c,
                valueType: null,
                version: null,
                vAlign: null,
                vLink: null,
                vSpace: c,
                allowTransparency: null,
                autoCorrect: null,
                autoSave: null,
                disablePictureInPicture: o,
                disableRemotePlayback: o,
                prefix: null,
                property: null,
                results: c,
                security: null,
                unselectable: null
            }
        })
    }
    , , function(e, t, n) {
        var a = n(237);
        e.exports = function(e) {
            if (Array.isArray(e))
                return a(e)
        }
    }
    , function(e, t) {
        e.exports = function(e) {
            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e))
                return Array.from(e)
        }
    }
    , function(e, t, n) {
        var a = n(237);
        e.exports = function(e, t) {
            if (e) {
                if ("string" === typeof e)
                    return a(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(e, t) : void 0
            }
        }
    }
    , function(e, t) {
        e.exports = function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
    }
    , , , , , , , , function(e, t, n) {
        "use strict";
        var a = n(382);
        e.exports = a,
        a.register(n(398)),
        a.register(n(399)),
        a.register(n(400)),
        a.register(n(401)),
        a.register(n(402)),
        a.register(n(403)),
        a.register(n(404)),
        a.register(n(405)),
        a.register(n(406)),
        a.register(n(407)),
        a.register(n(408)),
        a.register(n(409)),
        a.register(n(410)),
        a.register(n(411)),
        a.register(n(412)),
        a.register(n(413)),
        a.register(n(414)),
        a.register(n(415)),
        a.register(n(416)),
        a.register(n(242)),
        a.register(n(243)),
        a.register(n(417)),
        a.register(n(418)),
        a.register(n(419)),
        a.register(n(420)),
        a.register(n(421)),
        a.register(n(422)),
        a.register(n(423)),
        a.register(n(424)),
        a.register(n(425)),
        a.register(n(162)),
        a.register(n(426)),
        a.register(n(427)),
        a.register(n(428)),
        a.register(n(429)),
        a.register(n(430)),
        a.register(n(431)),
        a.register(n(432)),
        a.register(n(433)),
        a.register(n(434)),
        a.register(n(187)),
        a.register(n(435)),
        a.register(n(188)),
        a.register(n(436)),
        a.register(n(437)),
        a.register(n(438)),
        a.register(n(439)),
        a.register(n(440)),
        a.register(n(441)),
        a.register(n(442)),
        a.register(n(443)),
        a.register(n(444)),
        a.register(n(445)),
        a.register(n(446)),
        a.register(n(447)),
        a.register(n(448)),
        a.register(n(449)),
        a.register(n(450)),
        a.register(n(451)),
        a.register(n(452)),
        a.register(n(453)),
        a.register(n(454)),
        a.register(n(455)),
        a.register(n(456)),
        a.register(n(457)),
        a.register(n(458)),
        a.register(n(459)),
        a.register(n(460)),
        a.register(n(461)),
        a.register(n(462)),
        a.register(n(463)),
        a.register(n(464)),
        a.register(n(465)),
        a.register(n(466)),
        a.register(n(467)),
        a.register(n(468)),
        a.register(n(469)),
        a.register(n(470)),
        a.register(n(471)),
        a.register(n(472)),
        a.register(n(473)),
        a.register(n(474)),
        a.register(n(475)),
        a.register(n(476)),
        a.register(n(477)),
        a.register(n(478)),
        a.register(n(189)),
        a.register(n(479)),
        a.register(n(480)),
        a.register(n(481)),
        a.register(n(482)),
        a.register(n(483)),
        a.register(n(484)),
        a.register(n(485)),
        a.register(n(486)),
        a.register(n(487)),
        a.register(n(488)),
        a.register(n(489)),
        a.register(n(490)),
        a.register(n(491)),
        a.register(n(492)),
        a.register(n(493)),
        a.register(n(494)),
        a.register(n(190)),
        a.register(n(495)),
        a.register(n(175)),
        a.register(n(496)),
        a.register(n(497)),
        a.register(n(498)),
        a.register(n(499)),
        a.register(n(500)),
        a.register(n(501)),
        a.register(n(502)),
        a.register(n(192)),
        a.register(n(503)),
        a.register(n(504)),
        a.register(n(505)),
        a.register(n(245)),
        a.register(n(506)),
        a.register(n(507)),
        a.register(n(508)),
        a.register(n(509)),
        a.register(n(510)),
        a.register(n(511)),
        a.register(n(512)),
        a.register(n(513)),
        a.register(n(514)),
        a.register(n(515)),
        a.register(n(516)),
        a.register(n(517)),
        a.register(n(518)),
        a.register(n(519)),
        a.register(n(244)),
        a.register(n(520)),
        a.register(n(521)),
        a.register(n(156)),
        a.register(n(522)),
        a.register(n(523)),
        a.register(n(524)),
        a.register(n(525)),
        a.register(n(526)),
        a.register(n(527)),
        a.register(n(528)),
        a.register(n(529)),
        a.register(n(530)),
        a.register(n(531)),
        a.register(n(532)),
        a.register(n(533)),
        a.register(n(534)),
        a.register(n(535)),
        a.register(n(536)),
        a.register(n(537)),
        a.register(n(538)),
        a.register(n(539)),
        a.register(n(540)),
        a.register(n(541)),
        a.register(n(542)),
        a.register(n(543)),
        a.register(n(544)),
        a.register(n(545)),
        a.register(n(546)),
        a.register(n(547)),
        a.register(n(548)),
        a.register(n(549)),
        a.register(n(550)),
        a.register(n(551)),
        a.register(n(176)),
        a.register(n(552)),
        a.register(n(553)),
        a.register(n(554)),
        a.register(n(555)),
        a.register(n(556)),
        a.register(n(557)),
        a.register(n(558)),
        a.register(n(559)),
        a.register(n(560)),
        a.register(n(561)),
        a.register(n(562)),
        a.register(n(563)),
        a.register(n(564)),
        a.register(n(565)),
        a.register(n(566)),
        a.register(n(567)),
        a.register(n(568)),
        a.register(n(569)),
        a.register(n(570)),
        a.register(n(571)),
        a.register(n(572)),
        a.register(n(573)),
        a.register(n(574)),
        a.register(n(575)),
        a.register(n(576)),
        a.register(n(577)),
        a.register(n(578)),
        a.register(n(579)),
        a.register(n(580)),
        a.register(n(581)),
        a.register(n(174)),
        a.register(n(582)),
        a.register(n(583)),
        a.register(n(584)),
        a.register(n(585)),
        a.register(n(193)),
        a.register(n(586)),
        a.register(n(587)),
        a.register(n(588)),
        a.register(n(589)),
        a.register(n(590)),
        a.register(n(591)),
        a.register(n(592)),
        a.register(n(593)),
        a.register(n(594)),
        a.register(n(595)),
        a.register(n(596)),
        a.register(n(597)),
        a.register(n(186)),
        a.register(n(598)),
        a.register(n(599)),
        a.register(n(600)),
        a.register(n(601)),
        a.register(n(602)),
        a.register(n(194)),
        a.register(n(603)),
        a.register(n(604)),
        a.register(n(605)),
        a.register(n(606)),
        a.register(n(607)),
        a.register(n(608)),
        a.register(n(609)),
        a.register(n(246)),
        a.register(n(610)),
        a.register(n(191)),
        a.register(n(611)),
        a.register(n(612)),
        a.register(n(613)),
        a.register(n(614)),
        a.register(n(615)),
        a.register(n(247)),
        a.register(n(616)),
        a.register(n(617)),
        a.register(n(618)),
        a.register(n(619)),
        a.register(n(620)),
        a.register(n(621)),
        a.register(n(622)),
        a.register(n(623)),
        a.register(n(624)),
        a.register(n(625)),
        a.register(n(626)),
        a.register(n(627)),
        a.register(n(628)),
        a.register(n(248)),
        a.register(n(629)),
        a.register(n(630))
    }
    , function(e, t, n) {
        "use strict";
        (function(t) {
            var a = "object" === typeof globalThis ? globalThis : "object" === typeof self ? self : "object" === typeof window ? window : "object" === typeof t ? t : {}
              , r = function() {
                var e = "Prism"in a
                  , t = e ? a.Prism : void 0;
                return function() {
                    e ? a.Prism = t : delete a.Prism;
                    e = void 0,
                    t = void 0
                }
            }();
            a.Prism = {
                manual: !0,
                disableWorkerMessageHandler: !0
            };
            var i = n(383)
              , o = n(387)
              , s = n(393)
              , l = n(394)
              , c = n(395)
              , u = n(396)
              , d = n(397);
            r();
            var p = {}.hasOwnProperty;
            function g() {}
            g.prototype = s;
            var m = new g;
            function b(e) {
                if ("function" !== typeof e || !e.displayName)
                    throw new Error("Expected `function` for `grammar`, got `" + e + "`");
                void 0 === m.languages[e.displayName] && e(m)
            }
            e.exports = m,
            m.highlight = function(e, t) {
                var n, a = s.highlight;
                if ("string" !== typeof e)
                    throw new Error("Expected `string` for `value`, got `" + e + "`");
                if ("Object" === m.util.type(t))
                    n = t,
                    t = null;
                else {
                    if ("string" !== typeof t)
                        throw new Error("Expected `string` for `name`, got `" + t + "`");
                    if (!p.call(m.languages, t))
                        throw new Error("Unknown language: `" + t + "` is not registered");
                    n = m.languages[t]
                }
                return a.call(this, e, n, t)
            }
            ,
            m.register = b,
            m.alias = function(e, t) {
                var n, a, r, i, o = m.languages, s = e;
                t && ((s = {})[e] = t);
                for (n in s)
                    for (a = s[n],
                    r = (a = "string" === typeof a ? [a] : a).length,
                    i = -1; ++i < r; )
                        o[a[i]] = o[n]
            }
            ,
            m.registered = function(e) {
                if ("string" !== typeof e)
                    throw new Error("Expected `string` for `language`, got `" + e + "`");
                return p.call(m.languages, e)
            }
            ,
            m.listLanguages = function() {
                var e, t = m.languages, n = [];
                for (e in t)
                    p.call(t, e) && "object" === typeof t[e] && n.push(e);
                return n
            }
            ,
            b(l),
            b(c),
            b(u),
            b(d),
            m.util.encode = function(e) {
                return e
            }
            ,
            m.Token.stringify = function(e, t, n) {
                var a;
                if ("string" === typeof e)
                    return {
                        type: "text",
                        value: e
                    };
                if ("Array" === m.util.type(e))
                    return function(e, t) {
                        var n, a = [], r = e.length, i = -1;
                        for (; ++i < r; )
                            "" !== (n = e[i]) && null !== n && void 0 !== n && a.push(n);
                        i = -1,
                        r = a.length;
                        for (; ++i < r; )
                            n = a[i],
                            a[i] = m.Token.stringify(n, t, a);
                        return a
                    }(e, t);
                a = {
                    type: e.type,
                    content: m.Token.stringify(e.content, t, n),
                    tag: "span",
                    classes: ["token", e.type],
                    attributes: {},
                    language: t,
                    parent: n
                },
                e.alias && (a.classes = a.classes.concat(e.alias));
                return m.hooks.run("wrap", a),
                i(a.tag + "." + a.classes.join("."), function(e) {
                    var t;
                    for (t in e)
                        e[t] = o(e[t]);
                    return e
                }(a.attributes), a.content)
            }
        }
        ).call(this, n(75))
    }
    , function(e, t, n) {
        "use strict";
        e.exports = n(384)
    }
    , function(e, t, n) {
        "use strict";
        var a = n(225)
          , r = n(385)(a, "div");
        r.displayName = "html",
        e.exports = r
    }
    , function(e, t, n) {
        "use strict";
        var a = n(238)
          , r = n(185)
          , i = n(386)
          , o = n(239).parse
          , s = n(240).parse;
        e.exports = function(e, t, n) {
            var r = n ? function(e) {
                var t, n = e.length, a = -1, r = {};
                for (; ++a < n; )
                    r[(t = e[a]).toLowerCase()] = t;
                return r
            }(n) : null;
            return function(e, n) {
                var a, o = i(e, t), s = Array.prototype.slice.call(arguments, 2), d = o.tagName.toLowerCase();
                o.tagName = r && l.call(r, d) ? r[d] : d,
                n && c(n, o) && (s.unshift(n),
                n = null);
                if (n)
                    for (a in n)
                        p(o.properties, a, n[a]);
                u(o.children, s),
                "template" === o.tagName && (o.content = {
                    type: "root",
                    children: o.children
                },
                o.children = []);
                return o
            }
            ;
            function p(t, n, r) {
                var i, l, c;
                null !== r && void 0 !== r && r === r && (l = (i = a(e, n)).property,
                "string" === typeof (c = r) && (i.spaceSeparated ? c = o(c) : i.commaSeparated ? c = s(c) : i.commaOrSpaceSeparated && (c = o(s(c).join(" ")))),
                "style" === l && "string" !== typeof r && (c = function(e) {
                    var t, n = [];
                    for (t in e)
                        n.push([t, e[t]].join(": "));
                    return n.join("; ")
                }(c)),
                "className" === l && t.className && (c = t.className.concat(c)),
                t[l] = function(e, t, n) {
                    var a, r, i;
                    if ("object" !== typeof n || !("length"in n))
                        return d(e, t, n);
                    r = n.length,
                    a = -1,
                    i = [];
                    for (; ++a < r; )
                        i[a] = d(e, t, n[a]);
                    return i
                }(i, l, c))
            }
        }
        ;
        var l = {}.hasOwnProperty;
        function c(e, t) {
            return "string" === typeof e || "length"in e || function(e, t) {
                var n = t.type;
                if ("input" === e || !n || "string" !== typeof n)
                    return !1;
                if ("object" === typeof t.children && "length"in t.children)
                    return !0;
                if (n = n.toLowerCase(),
                "button" === e)
                    return "menu" !== n && "submit" !== n && "reset" !== n && "button" !== n;
                return "value"in t
            }(t.tagName, e)
        }
        function u(e, t) {
            var n, a;
            if ("string" !== typeof t && "number" !== typeof t)
                if ("object" === typeof t && "length"in t)
                    for (n = -1,
                    a = t.length; ++n < a; )
                        u(e, t[n]);
                else {
                    if ("object" !== typeof t || !("type"in t))
                        throw new Error("Expected node, nodes, or string, got `" + t + "`");
                    e.push(t)
                }
            else
                e.push({
                    type: "text",
                    value: String(t)
                })
        }
        function d(e, t, n) {
            var a = n;
            return e.number || e.positiveNumber ? isNaN(a) || "" === a || (a = Number(a)) : (e.boolean || e.overloadedBoolean) && ("string" !== typeof a || "" !== a && r(n) !== r(t) || (a = !0)),
            a
        }
    }
    , function(e, t, n) {
        "use strict";
        e.exports = function(e, t) {
            var n, r, i, o = e || "", s = t || "div", l = {}, c = 0;
            for (; c < o.length; )
                a.lastIndex = c,
                i = a.exec(o),
                (n = o.slice(c, i ? i.index : o.length)) && (r ? "#" === r ? l.id = n : l.className ? l.className.push(n) : l.className = [n] : s = n,
                c += n.length),
                i && (r = i[0],
                c++);
            return {
                type: "element",
                tagName: s,
                properties: l,
                children: []
            }
        }
        ;
        var a = /[#.]/g
    }
    , function(e, t, n) {
        "use strict";
        var a = n(388)
          , r = n(389)
          , i = n(241)
          , o = n(390)
          , s = n(391)
          , l = n(182);
        e.exports = function(e, t) {
            var n, i, o = {};
            t || (t = {});
            for (i in p)
                n = t[i],
                o[i] = null === n || void 0 === n ? p[i] : n;
            (o.position.indent || o.position.start) && (o.indent = o.position.indent || [],
            o.position = o.position.start);
            return function(e, t) {
                var n, i, o, p, T, A, R, I, N, _, v, w, O, C, k, L, x, D, P, M = t.additional, F = t.nonTerminated, U = t.text, B = t.reference, G = t.warning, $ = t.textContext, H = t.referenceContext, z = t.warningContext, V = t.position, j = t.indent || [], W = e.length, q = 0, Y = -1, K = V.column || 1, X = V.line || 1, Z = "", Q = [];
                "string" === typeof M && (M = M.charCodeAt(0));
                L = J(),
                I = G ? ee : d,
                q--,
                W++;
                for (; ++q < W; )
                    if (10 === T && (K = j[Y] || 1),
                    38 === (T = e.charCodeAt(q))) {
                        if (9 === (R = e.charCodeAt(q + 1)) || 10 === R || 12 === R || 32 === R || 38 === R || 60 === R || R !== R || M && R === M) {
                            Z += u(T),
                            K++;
                            continue
                        }
                        for (w = O = q + 1,
                        P = O,
                        35 === R ? (P = ++w,
                        88 === (R = e.charCodeAt(P)) || 120 === R ? (C = m,
                        P = ++w) : C = b) : C = g,
                        n = "",
                        v = "",
                        p = "",
                        k = E[C],
                        P--; ++P < W && k(R = e.charCodeAt(P)); )
                            p += u(R),
                            C === g && c.call(a, p) && (n = p,
                            v = a[p]);
                        (o = 59 === e.charCodeAt(P)) && (P++,
                        (i = C === g && l(p)) && (n = p,
                        v = i)),
                        D = 1 + P - O,
                        (o || F) && (p ? C === g ? (o && !v ? I(5, 1) : (n !== p && (D = 1 + (P = w + n.length) - w,
                        o = !1),
                        o || (N = n ? 1 : 3,
                        t.attribute ? 61 === (R = e.charCodeAt(P)) ? (I(N, D),
                        v = null) : s(R) ? v = null : I(N, D) : I(N, D))),
                        A = v) : (o || I(2, D),
                        S(A = parseInt(p, f[C])) ? (I(7, D),
                        A = u(65533)) : A in r ? (I(6, D),
                        A = r[A]) : (_ = "",
                        y(A) && I(6, D),
                        A > 65535 && (_ += u((A -= 65536) >>> 10 | 55296),
                        A = 56320 | 1023 & A),
                        A = _ + u(A))) : C !== g && I(4, D)),
                        A ? (te(),
                        L = J(),
                        q = P - 1,
                        K += P - O + 1,
                        Q.push(A),
                        (x = J()).offset++,
                        B && B.call(H, A, {
                            start: L,
                            end: x
                        }, e.slice(O - 1, P)),
                        L = x) : (p = e.slice(O - 1, P),
                        Z += p,
                        K += p.length,
                        q = P - 1)
                    } else
                        10 === T && (X++,
                        Y++,
                        K = 0),
                        T === T ? (Z += u(T),
                        K++) : te();
                return Q.join("");
                function J() {
                    return {
                        line: X,
                        column: K,
                        offset: q + (V.offset || 0)
                    }
                }
                function ee(e, t) {
                    var n = J();
                    n.column += t,
                    n.offset += t,
                    G.call(z, h[e], n, e)
                }
                function te() {
                    Z && (Q.push(Z),
                    U && U.call($, Z, {
                        start: L,
                        end: J()
                    }),
                    Z = "")
                }
            }(e, o)
        }
        ;
        var c = {}.hasOwnProperty
          , u = String.fromCharCode
          , d = Function.prototype
          , p = {
            warning: null,
            reference: null,
            text: null,
            warningContext: null,
            referenceContext: null,
            textContext: null,
            position: {},
            additional: null,
            attribute: !1,
            nonTerminated: !0
        }
          , g = "named"
          , m = "hexadecimal"
          , b = "decimal"
          , f = {
            hexadecimal: 16,
            decimal: 10
        }
          , E = {};
        E.named = s,
        E[b] = i,
        E[m] = o;
        var h = {};
        function S(e) {
            return e >= 55296 && e <= 57343 || e > 1114111
        }
        function y(e) {
            return e >= 1 && e <= 8 || 11 === e || e >= 13 && e <= 31 || e >= 127 && e <= 159 || e >= 64976 && e <= 65007 || 65535 === (65535 & e) || 65534 === (65535 & e)
        }
        h[1] = "Named character references must be terminated by a semicolon",
        h[2] = "Numeric character references must be terminated by a semicolon",
        h[3] = "Named character references cannot be empty",
        h[4] = "Numeric character references cannot be empty",
        h[5] = "Named character references must be known",
        h[6] = "Numeric character references cannot be disallowed",
        h[7] = "Numeric character references cannot be outside the permissible Unicode range"
    }
    , function(e) {
        e.exports = JSON.parse('{"AElig":"\xc6","AMP":"&","Aacute":"\xc1","Acirc":"\xc2","Agrave":"\xc0","Aring":"\xc5","Atilde":"\xc3","Auml":"\xc4","COPY":"\xa9","Ccedil":"\xc7","ETH":"\xd0","Eacute":"\xc9","Ecirc":"\xca","Egrave":"\xc8","Euml":"\xcb","GT":">","Iacute":"\xcd","Icirc":"\xce","Igrave":"\xcc","Iuml":"\xcf","LT":"<","Ntilde":"\xd1","Oacute":"\xd3","Ocirc":"\xd4","Ograve":"\xd2","Oslash":"\xd8","Otilde":"\xd5","Ouml":"\xd6","QUOT":"\\"","REG":"\xae","THORN":"\xde","Uacute":"\xda","Ucirc":"\xdb","Ugrave":"\xd9","Uuml":"\xdc","Yacute":"\xdd","aacute":"\xe1","acirc":"\xe2","acute":"\xb4","aelig":"\xe6","agrave":"\xe0","amp":"&","aring":"\xe5","atilde":"\xe3","auml":"\xe4","brvbar":"\xa6","ccedil":"\xe7","cedil":"\xb8","cent":"\xa2","copy":"\xa9","curren":"\xa4","deg":"\xb0","divide":"\xf7","eacute":"\xe9","ecirc":"\xea","egrave":"\xe8","eth":"\xf0","euml":"\xeb","frac12":"\xbd","frac14":"\xbc","frac34":"\xbe","gt":">","iacute":"\xed","icirc":"\xee","iexcl":"\xa1","igrave":"\xec","iquest":"\xbf","iuml":"\xef","laquo":"\xab","lt":"<","macr":"\xaf","micro":"\xb5","middot":"\xb7","nbsp":"\xa0","not":"\xac","ntilde":"\xf1","oacute":"\xf3","ocirc":"\xf4","ograve":"\xf2","ordf":"\xaa","ordm":"\xba","oslash":"\xf8","otilde":"\xf5","ouml":"\xf6","para":"\xb6","plusmn":"\xb1","pound":"\xa3","quot":"\\"","raquo":"\xbb","reg":"\xae","sect":"\xa7","shy":"\xad","sup1":"\xb9","sup2":"\xb2","sup3":"\xb3","szlig":"\xdf","thorn":"\xfe","times":"\xd7","uacute":"\xfa","ucirc":"\xfb","ugrave":"\xf9","uml":"\xa8","uuml":"\xfc","yacute":"\xfd","yen":"\xa5","yuml":"\xff"}')
    }
    , function(e) {
        e.exports = JSON.parse('{"0":"\ufffd","128":"\u20ac","130":"\u201a","131":"\u0192","132":"\u201e","133":"\u2026","134":"\u2020","135":"\u2021","136":"\u02c6","137":"\u2030","138":"\u0160","139":"\u2039","140":"\u0152","142":"\u017d","145":"\u2018","146":"\u2019","147":"\u201c","148":"\u201d","149":"\u2022","150":"\u2013","151":"\u2014","152":"\u02dc","153":"\u2122","154":"\u0161","155":"\u203a","156":"\u0153","158":"\u017e","159":"\u0178"}')
    }
    , function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            var t = "string" === typeof e ? e.charCodeAt(0) : e;
            return t >= 97 && t <= 102 || t >= 65 && t <= 70 || t >= 48 && t <= 57
        }
    }
    , function(e, t, n) {
        "use strict";
        var a = n(392)
          , r = n(241);
        e.exports = function(e) {
            return a(e) || r(e)
        }
    }
    , function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            var t = "string" === typeof e ? e.charCodeAt(0) : e;
            return t >= 97 && t <= 122 || t >= 65 && t <= 90
        }
    }
    , function(e, t, n) {
        (function(t) {
            var n = function(e) {
                var t = /\blang(?:uage)?-([\w-]+)\b/i
                  , n = 0
                  , a = {}
                  , r = {
                    manual: e.Prism && e.Prism.manual,
                    disableWorkerMessageHandler: e.Prism && e.Prism.disableWorkerMessageHandler,
                    util: {
                        encode: function e(t) {
                            return t instanceof i ? new i(t.type,e(t.content),t.alias) : Array.isArray(t) ? t.map(e) : t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
                        },
                        type: function(e) {
                            return Object.prototype.toString.call(e).slice(8, -1)
                        },
                        objId: function(e) {
                            return e.__id || Object.defineProperty(e, "__id", {
                                value: ++n
                            }),
                            e.__id
                        },
                        clone: function e(t, n) {
                            var a, i;
                            switch (n = n || {},
                            r.util.type(t)) {
                            case "Object":
                                if (i = r.util.objId(t),
                                n[i])
                                    return n[i];
                                for (var o in a = {},
                                n[i] = a,
                                t)
                                    t.hasOwnProperty(o) && (a[o] = e(t[o], n));
                                return a;
                            case "Array":
                                return i = r.util.objId(t),
                                n[i] ? n[i] : (a = [],
                                n[i] = a,
                                t.forEach((function(t, r) {
                                    a[r] = e(t, n)
                                }
                                )),
                                a);
                            default:
                                return t
                            }
                        },
                        getLanguage: function(e) {
                            for (; e && !t.test(e.className); )
                                e = e.parentElement;
                            return e ? (e.className.match(t) || [, "none"])[1].toLowerCase() : "none"
                        },
                        currentScript: function() {
                            if ("undefined" === typeof document)
                                return null;
                            if ("currentScript"in document)
                                return document.currentScript;
                            try {
                                throw new Error
                            } catch (a) {
                                var e = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(a.stack) || [])[1];
                                if (e) {
                                    var t = document.getElementsByTagName("script");
                                    for (var n in t)
                                        if (t[n].src == e)
                                            return t[n]
                                }
                                return null
                            }
                        },
                        isActive: function(e, t, n) {
                            for (var a = "no-" + t; e; ) {
                                var r = e.classList;
                                if (r.contains(t))
                                    return !0;
                                if (r.contains(a))
                                    return !1;
                                e = e.parentElement
                            }
                            return !!n
                        }
                    },
                    languages: {
                        plain: a,
                        plaintext: a,
                        text: a,
                        txt: a,
                        extend: function(e, t) {
                            var n = r.util.clone(r.languages[e]);
                            for (var a in t)
                                n[a] = t[a];
                            return n
                        },
                        insertBefore: function(e, t, n, a) {
                            var i = (a = a || r.languages)[e]
                              , o = {};
                            for (var s in i)
                                if (i.hasOwnProperty(s)) {
                                    if (s == t)
                                        for (var l in n)
                                            n.hasOwnProperty(l) && (o[l] = n[l]);
                                    n.hasOwnProperty(s) || (o[s] = i[s])
                                }
                            var c = a[e];
                            return a[e] = o,
                            r.languages.DFS(r.languages, (function(t, n) {
                                n === c && t != e && (this[t] = o)
                            }
                            )),
                            o
                        },
                        DFS: function e(t, n, a, i) {
                            i = i || {};
                            var o = r.util.objId;
                            for (var s in t)
                                if (t.hasOwnProperty(s)) {
                                    n.call(t, s, t[s], a || s);
                                    var l = t[s]
                                      , c = r.util.type(l);
                                    "Object" !== c || i[o(l)] ? "Array" !== c || i[o(l)] || (i[o(l)] = !0,
                                    e(l, n, s, i)) : (i[o(l)] = !0,
                                    e(l, n, null, i))
                                }
                        }
                    },
                    plugins: {},
                    highlightAll: function(e, t) {
                        r.highlightAllUnder(document, e, t)
                    },
                    highlightAllUnder: function(e, t, n) {
                        var a = {
                            callback: n,
                            container: e,
                            selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                        };
                        r.hooks.run("before-highlightall", a),
                        a.elements = Array.prototype.slice.apply(a.container.querySelectorAll(a.selector)),
                        r.hooks.run("before-all-elements-highlight", a);
                        for (var i, o = 0; i = a.elements[o++]; )
                            r.highlightElement(i, !0 === t, a.callback)
                    },
                    highlightElement: function(n, a, i) {
                        var o = r.util.getLanguage(n)
                          , s = r.languages[o];
                        n.className = n.className.replace(t, "").replace(/\s+/g, " ") + " language-" + o;
                        var l = n.parentElement;
                        l && "pre" === l.nodeName.toLowerCase() && (l.className = l.className.replace(t, "").replace(/\s+/g, " ") + " language-" + o);
                        var c = {
                            element: n,
                            language: o,
                            grammar: s,
                            code: n.textContent
                        };
                        function u(e) {
                            c.highlightedCode = e,
                            r.hooks.run("before-insert", c),
                            c.element.innerHTML = c.highlightedCode,
                            r.hooks.run("after-highlight", c),
                            r.hooks.run("complete", c),
                            i && i.call(c.element)
                        }
                        if (r.hooks.run("before-sanity-check", c),
                        (l = c.element.parentElement) && "pre" === l.nodeName.toLowerCase() && !l.hasAttribute("tabindex") && l.setAttribute("tabindex", "0"),
                        !c.code)
                            return r.hooks.run("complete", c),
                            void (i && i.call(c.element));
                        if (r.hooks.run("before-highlight", c),
                        c.grammar)
                            if (a && e.Worker) {
                                var d = new Worker(r.filename);
                                d.onmessage = function(e) {
                                    u(e.data)
                                }
                                ,
                                d.postMessage(JSON.stringify({
                                    language: c.language,
                                    code: c.code,
                                    immediateClose: !0
                                }))
                            } else
                                u(r.highlight(c.code, c.grammar, c.language));
                        else
                            u(r.util.encode(c.code))
                    },
                    highlight: function(e, t, n) {
                        var a = {
                            code: e,
                            grammar: t,
                            language: n
                        };
                        return r.hooks.run("before-tokenize", a),
                        a.tokens = r.tokenize(a.code, a.grammar),
                        r.hooks.run("after-tokenize", a),
                        i.stringify(r.util.encode(a.tokens), a.language)
                    },
                    tokenize: function(e, t) {
                        var n = t.rest;
                        if (n) {
                            for (var a in n)
                                t[a] = n[a];
                            delete t.rest
                        }
                        var r = new l;
                        return c(r, r.head, e),
                        s(e, r, t, r.head, 0),
                        function(e) {
                            var t = []
                              , n = e.head.next;
                            for (; n !== e.tail; )
                                t.push(n.value),
                                n = n.next;
                            return t
                        }(r)
                    },
                    hooks: {
                        all: {},
                        add: function(e, t) {
                            var n = r.hooks.all;
                            n[e] = n[e] || [],
                            n[e].push(t)
                        },
                        run: function(e, t) {
                            var n = r.hooks.all[e];
                            if (n && n.length)
                                for (var a, i = 0; a = n[i++]; )
                                    a(t)
                        }
                    },
                    Token: i
                };
                function i(e, t, n, a) {
                    this.type = e,
                    this.content = t,
                    this.alias = n,
                    this.length = 0 | (a || "").length
                }
                function o(e, t, n, a) {
                    e.lastIndex = t;
                    var r = e.exec(n);
                    if (r && a && r[1]) {
                        var i = r[1].length;
                        r.index += i,
                        r[0] = r[0].slice(i)
                    }
                    return r
                }
                function s(e, t, n, a, l, d) {
                    for (var p in n)
                        if (n.hasOwnProperty(p) && n[p]) {
                            var g = n[p];
                            g = Array.isArray(g) ? g : [g];
                            for (var m = 0; m < g.length; ++m) {
                                if (d && d.cause == p + "," + m)
                                    return;
                                var b = g[m]
                                  , f = b.inside
                                  , E = !!b.lookbehind
                                  , h = !!b.greedy
                                  , S = b.alias;
                                if (h && !b.pattern.global) {
                                    var y = b.pattern.toString().match(/[imsuy]*$/)[0];
                                    b.pattern = RegExp(b.pattern.source, y + "g")
                                }
                                for (var T = b.pattern || b, A = a.next, R = l; A !== t.tail && !(d && R >= d.reach); R += A.value.length,
                                A = A.next) {
                                    var I = A.value;
                                    if (t.length > e.length)
                                        return;
                                    if (!(I instanceof i)) {
                                        var N, _ = 1;
                                        if (h) {
                                            if (!(N = o(T, R, e, E)))
                                                break;
                                            var v = N.index
                                              , w = N.index + N[0].length
                                              , O = R;
                                            for (O += A.value.length; v >= O; )
                                                O += (A = A.next).value.length;
                                            if (R = O -= A.value.length,
                                            A.value instanceof i)
                                                continue;
                                            for (var C = A; C !== t.tail && (O < w || "string" === typeof C.value); C = C.next)
                                                _++,
                                                O += C.value.length;
                                            _--,
                                            I = e.slice(R, O),
                                            N.index -= R
                                        } else if (!(N = o(T, 0, I, E)))
                                            continue;
                                        v = N.index;
                                        var k = N[0]
                                          , L = I.slice(0, v)
                                          , x = I.slice(v + k.length)
                                          , D = R + I.length;
                                        d && D > d.reach && (d.reach = D);
                                        var P = A.prev;
                                        if (L && (P = c(t, P, L),
                                        R += L.length),
                                        u(t, P, _),
                                        A = c(t, P, new i(p,f ? r.tokenize(k, f) : k,S,k)),
                                        x && c(t, A, x),
                                        _ > 1) {
                                            var M = {
                                                cause: p + "," + m,
                                                reach: D
                                            };
                                            s(e, t, n, A.prev, R, M),
                                            d && M.reach > d.reach && (d.reach = M.reach)
                                        }
                                    }
                                }
                            }
                        }
                }
                function l() {
                    var e = {
                        value: null,
                        prev: null,
                        next: null
                    }
                      , t = {
                        value: null,
                        prev: e,
                        next: null
                    };
                    e.next = t,
                    this.head = e,
                    this.tail = t,
                    this.length = 0
                }
                function c(e, t, n) {
                    var a = t.next
                      , r = {
                        value: n,
                        prev: t,
                        next: a
                    };
                    return t.next = r,
                    a.prev = r,
                    e.length++,
                    r
                }
                function u(e, t, n) {
                    for (var a = t.next, r = 0; r < n && a !== e.tail; r++)
                        a = a.next;
                    t.next = a,
                    a.prev = t,
                    e.length -= r
                }
                if (e.Prism = r,
                i.stringify = function e(t, n) {
                    if ("string" == typeof t)
                        return t;
                    if (Array.isArray(t)) {
                        var a = "";
                        return t.forEach((function(t) {
                            a += e(t, n)
                        }
                        )),
                        a
                    }
                    var i = {
                        type: t.type,
                        content: e(t.content, n),
                        tag: "span",
                        classes: ["token", t.type],
                        attributes: {},
                        language: n
                    }
                      , o = t.alias;
                    o && (Array.isArray(o) ? Array.prototype.push.apply(i.classes, o) : i.classes.push(o)),
                    r.hooks.run("wrap", i);
                    var s = "";
                    for (var l in i.attributes)
                        s += " " + l + '="' + (i.attributes[l] || "").replace(/"/g, "&quot;") + '"';
                    return "<" + i.tag + ' class="' + i.classes.join(" ") + '"' + s + ">" + i.content + "</" + i.tag + ">"
                }
                ,
                !e.document)
                    return e.addEventListener ? (r.disableWorkerMessageHandler || e.addEventListener("message", (function(t) {
                        var n = JSON.parse(t.data)
                          , a = n.language
                          , i = n.code
                          , o = n.immediateClose;
                        e.postMessage(r.highlight(i, r.languages[a], a)),
                        o && e.close()
                    }
                    ), !1),
                    r) : r;
                var d = r.util.currentScript();
                function p() {
                    r.manual || r.highlightAll()
                }
                if (d && (r.filename = d.src,
                d.hasAttribute("data-manual") && (r.manual = !0)),
                !r.manual) {
                    var g = document.readyState;
                    "loading" === g || "interactive" === g && d && d.defer ? document.addEventListener("DOMContentLoaded", p) : window.requestAnimationFrame ? window.requestAnimationFrame(p) : window.setTimeout(p, 16)
                }
                return r
            }("undefined" !== typeof window ? window : "undefined" !== typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {});
            e.exports && (e.exports = n),
            "undefined" !== typeof t && (t.Prism = n)
        }
        ).call(this, n(75))
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.markup = {
                comment: /<!--[\s\S]*?-->/,
                prolog: /<\?[\s\S]+?\?>/,
                doctype: {
                    pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
                    greedy: !0,
                    inside: {
                        "internal-subset": {
                            pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                            lookbehind: !0,
                            greedy: !0,
                            inside: null
                        },
                        string: {
                            pattern: /"[^"]*"|'[^']*'/,
                            greedy: !0
                        },
                        punctuation: /^<!|>$|[[\]]/,
                        "doctype-tag": /^DOCTYPE/,
                        name: /[^\s<>'"]+/
                    }
                },
                cdata: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                tag: {
                    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
                    greedy: !0,
                    inside: {
                        tag: {
                            pattern: /^<\/?[^\s>\/]+/,
                            inside: {
                                punctuation: /^<\/?/,
                                namespace: /^[^\s>\/:]+:/
                            }
                        },
                        "special-attr": [],
                        "attr-value": {
                            pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                            inside: {
                                punctuation: [{
                                    pattern: /^=/,
                                    alias: "attr-equals"
                                }, /"|'/]
                            }
                        },
                        punctuation: /\/?>/,
                        "attr-name": {
                            pattern: /[^\s>\/]+/,
                            inside: {
                                namespace: /^[^\s>\/:]+:/
                            }
                        }
                    }
                },
                entity: [{
                    pattern: /&[\da-z]{1,8};/i,
                    alias: "named-entity"
                }, /&#x?[\da-f]{1,8};/i]
            },
            e.languages.markup.tag.inside["attr-value"].inside.entity = e.languages.markup.entity,
            e.languages.markup.doctype.inside["internal-subset"].inside = e.languages.markup,
            e.hooks.add("wrap", (function(e) {
                "entity" === e.type && (e.attributes.title = e.content.value.replace(/&amp;/, "&"))
            }
            )),
            Object.defineProperty(e.languages.markup.tag, "addInlined", {
                value: function(t, n) {
                    var a = {};
                    a["language-" + n] = {
                        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                        lookbehind: !0,
                        inside: e.languages[n]
                    },
                    a.cdata = /^<!\[CDATA\[|\]\]>$/i;
                    var r = {
                        "included-cdata": {
                            pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                            inside: a
                        }
                    };
                    r["language-" + n] = {
                        pattern: /[\s\S]+/,
                        inside: e.languages[n]
                    };
                    var i = {};
                    i[t] = {
                        pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, (function() {
                            return t
                        }
                        )), "i"),
                        lookbehind: !0,
                        greedy: !0,
                        inside: r
                    },
                    e.languages.insertBefore("markup", "cdata", i)
                }
            }),
            Object.defineProperty(e.languages.markup.tag, "addAttribute", {
                value: function(t, n) {
                    e.languages.markup.tag.inside["special-attr"].push({
                        pattern: RegExp(/(^|["'\s])/.source + "(?:" + t + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"),
                        lookbehind: !0,
                        inside: {
                            "attr-name": /^[^\s=]+/,
                            "attr-value": {
                                pattern: /=[\s\S]+/,
                                inside: {
                                    value: {
                                        pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                                        lookbehind: !0,
                                        alias: [n, "language-" + n],
                                        inside: e.languages[n]
                                    },
                                    punctuation: [{
                                        pattern: /^=/,
                                        alias: "attr-equals"
                                    }, /"|'/]
                                }
                            }
                        }
                    })
                }
            }),
            e.languages.html = e.languages.markup,
            e.languages.mathml = e.languages.markup,
            e.languages.svg = e.languages.markup,
            e.languages.xml = e.languages.extend("markup", {}),
            e.languages.ssml = e.languages.xml,
            e.languages.atom = e.languages.xml,
            e.languages.rss = e.languages.xml
        }
        e.exports = a,
        a.displayName = "markup",
        a.aliases = ["html", "mathml", "svg", "xml", "ssml", "atom", "rss"]
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                var t = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
                e.languages.css = {
                    comment: /\/\*[\s\S]*?\*\//,
                    atrule: {
                        pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
                        inside: {
                            rule: /^@[\w-]+/,
                            "selector-function-argument": {
                                pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                                lookbehind: !0,
                                alias: "selector"
                            },
                            keyword: {
                                pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                                lookbehind: !0
                            }
                        }
                    },
                    url: {
                        pattern: RegExp("\\burl\\((?:" + t.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
                        greedy: !0,
                        inside: {
                            function: /^url/i,
                            punctuation: /^\(|\)$/,
                            string: {
                                pattern: RegExp("^" + t.source + "$"),
                                alias: "url"
                            }
                        }
                    },
                    selector: {
                        pattern: RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + t.source + ")*(?=\\s*\\{)"),
                        lookbehind: !0
                    },
                    string: {
                        pattern: t,
                        greedy: !0
                    },
                    property: {
                        pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
                        lookbehind: !0
                    },
                    important: /!important\b/i,
                    function: {
                        pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
                        lookbehind: !0
                    },
                    punctuation: /[(){};:,]/
                },
                e.languages.css.atrule.inside.rest = e.languages.css;
                var n = e.languages.markup;
                n && (n.tag.addInlined("style", "css"),
                n.tag.addAttribute("style", "css"))
            }(e)
        }
        e.exports = a,
        a.displayName = "css",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.clike = {
                comment: [{
                    pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
                    lookbehind: !0,
                    greedy: !0
                }, {
                    pattern: /(^|[^\\:])\/\/.*/,
                    lookbehind: !0,
                    greedy: !0
                }],
                string: {
                    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
                    greedy: !0
                },
                "class-name": {
                    pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
                    lookbehind: !0,
                    inside: {
                        punctuation: /[.\\]/
                    }
                },
                keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
                boolean: /\b(?:true|false)\b/,
                function: /\b\w+(?=\()/,
                number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
                operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
                punctuation: /[{}[\];(),.:]/
            }
        }
        e.exports = a,
        a.displayName = "clike",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.javascript = e.languages.extend("clike", {
                "class-name": [e.languages.clike["class-name"], {
                    pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,
                    lookbehind: !0
                }],
                keyword: [{
                    pattern: /((?:^|\})\s*)catch\b/,
                    lookbehind: !0
                }, {
                    pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
                    lookbehind: !0
                }],
                function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
                number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
                operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
            }),
            e.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,
            e.languages.insertBefore("javascript", "keyword", {
                regex: {
                    pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
                    lookbehind: !0,
                    greedy: !0,
                    inside: {
                        "regex-source": {
                            pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                            lookbehind: !0,
                            alias: "language-regex",
                            inside: e.languages.regex
                        },
                        "regex-delimiter": /^\/|\/$/,
                        "regex-flags": /^[a-z]+$/
                    }
                },
                "function-variable": {
                    pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
                    alias: "function"
                },
                parameter: [{
                    pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
                    lookbehind: !0,
                    inside: e.languages.javascript
                }, {
                    pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
                    lookbehind: !0,
                    inside: e.languages.javascript
                }, {
                    pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
                    lookbehind: !0,
                    inside: e.languages.javascript
                }, {
                    pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
                    lookbehind: !0,
                    inside: e.languages.javascript
                }],
                constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
            }),
            e.languages.insertBefore("javascript", "string", {
                hashbang: {
                    pattern: /^#!.*/,
                    greedy: !0,
                    alias: "comment"
                },
                "template-string": {
                    pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
                    greedy: !0,
                    inside: {
                        "template-punctuation": {
                            pattern: /^`|`$/,
                            alias: "string"
                        },
                        interpolation: {
                            pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                            lookbehind: !0,
                            inside: {
                                "interpolation-punctuation": {
                                    pattern: /^\$\{|\}$/,
                                    alias: "punctuation"
                                },
                                rest: e.languages.javascript
                            }
                        },
                        string: /[\s\S]+/
                    }
                }
            }),
            e.languages.markup && (e.languages.markup.tag.addInlined("script", "javascript"),
            e.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript")),
            e.languages.js = e.languages.javascript
        }
        e.exports = a,
        a.displayName = "javascript",
        a.aliases = ["js"]
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.abap = {
                comment: /^\*.*/m,
                string: /(`|')(?:\\.|(?!\1)[^\\\r\n])*\1/m,
                "string-template": {
                    pattern: /([|}])(?:\\.|[^\\|{\r\n])*(?=[|{])/,
                    lookbehind: !0,
                    alias: "string"
                },
                "eol-comment": {
                    pattern: /(^|\s)".*/m,
                    lookbehind: !0,
                    alias: "comment"
                },
                keyword: {
                    pattern: /(\s|\.|^)(?:SCIENTIFIC_WITH_LEADING_ZERO|SCALE_PRESERVING_SCIENTIFIC|RMC_COMMUNICATION_FAILURE|END-ENHANCEMENT-SECTION|MULTIPLY-CORRESPONDING|SUBTRACT-CORRESPONDING|VERIFICATION-MESSAGE|DIVIDE-CORRESPONDING|ENHANCEMENT-SECTION|CURRENCY_CONVERSION|RMC_SYSTEM_FAILURE|START-OF-SELECTION|MOVE-CORRESPONDING|RMC_INVALID_STATUS|CUSTOMER-FUNCTION|END-OF-DEFINITION|ENHANCEMENT-POINT|SYSTEM-EXCEPTIONS|ADD-CORRESPONDING|SCALE_PRESERVING|SELECTION-SCREEN|CURSOR-SELECTION|END-OF-SELECTION|LOAD-OF-PROGRAM|SCROLL-BOUNDARY|SELECTION-TABLE|EXCEPTION-TABLE|IMPLEMENTATIONS|PARAMETER-TABLE|RIGHT-JUSTIFIED|UNIT_CONVERSION|AUTHORITY-CHECK|LIST-PROCESSING|SIGN_AS_POSTFIX|COL_BACKGROUND|IMPLEMENTATION|INTERFACE-POOL|TRANSFORMATION|IDENTIFICATION|ENDENHANCEMENT|LINE-SELECTION|INITIALIZATION|LEFT-JUSTIFIED|SELECT-OPTIONS|SELECTION-SETS|COMMUNICATION|CORRESPONDING|DECIMAL_SHIFT|PRINT-CONTROL|VALUE-REQUEST|CHAIN-REQUEST|FUNCTION-POOL|FIELD-SYMBOLS|FUNCTIONALITY|INVERTED-DATE|SELECTION-SET|CLASS-METHODS|OUTPUT-LENGTH|CLASS-CODING|COL_NEGATIVE|ERRORMESSAGE|FIELD-GROUPS|HELP-REQUEST|NO-EXTENSION|NO-TOPOFPAGE|REDEFINITION|DISPLAY-MODE|ENDINTERFACE|EXIT-COMMAND|FIELD-SYMBOL|NO-SCROLLING|SHORTDUMP-ID|ACCESSPOLICY|CLASS-EVENTS|COL_POSITIVE|DECLARATIONS|ENHANCEMENTS|FILTER-TABLE|SWITCHSTATES|SYNTAX-CHECK|TRANSPORTING|ASYNCHRONOUS|SYNTAX-TRACE|TOKENIZATION|USER-COMMAND|WITH-HEADING|ABAP-SOURCE|BREAK-POINT|CHAIN-INPUT|COMPRESSION|FIXED-POINT|NEW-SECTION|NON-UNICODE|OCCURRENCES|RESPONSIBLE|SYSTEM-CALL|TRACE-TABLE|ABBREVIATED|CHAR-TO-HEX|END-OF-FILE|ENDFUNCTION|ENVIRONMENT|ASSOCIATION|COL_HEADING|EDITOR-CALL|END-OF-PAGE|ENGINEERING|IMPLEMENTED|INTENSIFIED|RADIOBUTTON|SYSTEM-EXIT|TOP-OF-PAGE|TRANSACTION|APPLICATION|CONCATENATE|DESTINATION|ENHANCEMENT|IMMEDIATELY|NO-GROUPING|PRECOMPILED|REPLACEMENT|TITLE-LINES|ACTIVATION|BYTE-ORDER|CLASS-POOL|CONNECTION|CONVERSION|DEFINITION|DEPARTMENT|EXPIRATION|INHERITING|MESSAGE-ID|NO-HEADING|PERFORMING|QUEUE-ONLY|RIGHTSPACE|SCIENTIFIC|STATUSINFO|STRUCTURES|SYNCPOINTS|WITH-TITLE|ATTRIBUTES|BOUNDARIES|CLASS-DATA|COL_NORMAL|DD\/MM\/YYYY|DESCENDING|INTERFACES|LINE-COUNT|MM\/DD\/YYYY|NON-UNIQUE|PRESERVING|SELECTIONS|STATEMENTS|SUBROUTINE|TRUNCATION|TYPE-POOLS|ARITHMETIC|BACKGROUND|ENDPROVIDE|EXCEPTIONS|IDENTIFIER|INDEX-LINE|OBLIGATORY|PARAMETERS|PERCENTAGE|PUSHBUTTON|RESOLUTION|COMPONENTS|DEALLOCATE|DISCONNECT|DUPLICATES|FIRST-LINE|HEAD-LINES|NO-DISPLAY|OCCURRENCE|RESPECTING|RETURNCODE|SUBMATCHES|TRACE-FILE|ASCENDING|BYPASSING|ENDMODULE|EXCEPTION|EXCLUDING|EXPORTING|INCREMENT|MATCHCODE|PARAMETER|PARTIALLY|PREFERRED|REFERENCE|REPLACING|RETURNING|SELECTION|SEPARATED|SPECIFIED|STATEMENT|TIMESTAMP|TYPE-POOL|ACCEPTING|APPENDAGE|ASSIGNING|COL_GROUP|COMPARING|CONSTANTS|DANGEROUS|IMPORTING|INSTANCES|LEFTSPACE|LOG-POINT|QUICKINFO|READ-ONLY|SCROLLING|SQLSCRIPT|STEP-LOOP|TOP-LINES|TRANSLATE|APPENDING|AUTHORITY|CHARACTER|COMPONENT|CONDITION|DIRECTORY|DUPLICATE|MESSAGING|RECEIVING|SUBSCREEN|ACCORDING|COL_TOTAL|END-LINES|ENDMETHOD|ENDSELECT|EXPANDING|EXTENSION|INCLUDING|INFOTYPES|INTERFACE|INTERVALS|LINE-SIZE|PF-STATUS|PROCEDURE|PROTECTED|REQUESTED|RESUMABLE|RIGHTPLUS|SAP-SPOOL|SECONDARY|STRUCTURE|SUBSTRING|TABLEVIEW|NUMOFCHAR|ADJACENT|ANALYSIS|ASSIGNED|BACKWARD|CHANNELS|CHECKBOX|CONTINUE|CRITICAL|DATAINFO|DD\/MM\/YY|DURATION|ENCODING|ENDCLASS|FUNCTION|LEFTPLUS|LINEFEED|MM\/DD\/YY|OVERFLOW|RECEIVED|SKIPPING|SORTABLE|STANDARD|SUBTRACT|SUPPRESS|TABSTRIP|TITLEBAR|TRUNCATE|UNASSIGN|WHENEVER|ANALYZER|COALESCE|COMMENTS|CONDENSE|DECIMALS|DEFERRED|ENDWHILE|EXPLICIT|KEYWORDS|MESSAGES|POSITION|PRIORITY|RECEIVER|RENAMING|TIMEZONE|TRAILING|ALLOCATE|CENTERED|CIRCULAR|CONTROLS|CURRENCY|DELETING|DESCRIBE|DISTANCE|ENDCATCH|EXPONENT|EXTENDED|GENERATE|IGNORING|INCLUDES|INTERNAL|MAJOR-ID|MODIFIER|NEW-LINE|OPTIONAL|PROPERTY|ROLLBACK|STARTING|SUPPLIED|ABSTRACT|CHANGING|CONTEXTS|CREATING|CUSTOMER|DATABASE|DAYLIGHT|DEFINING|DISTINCT|DIVISION|ENABLING|ENDCHAIN|ESCAPING|HARMLESS|IMPLICIT|INACTIVE|LANGUAGE|MINOR-ID|MULTIPLY|NEW-PAGE|NO-TITLE|POS_HIGH|SEPARATE|TEXTPOOL|TRANSFER|SELECTOR|DBMAXLEN|ITERATOR|ARCHIVE|BIT-XOR|BYTE-CO|COLLECT|COMMENT|CURRENT|DEFAULT|DISPLAY|ENDFORM|EXTRACT|LEADING|LISTBOX|LOCATOR|MEMBERS|METHODS|NESTING|POS_LOW|PROCESS|PROVIDE|RAISING|RESERVE|SECONDS|SUMMARY|VISIBLE|BETWEEN|BIT-AND|BYTE-CS|CLEANUP|COMPUTE|CONTROL|CONVERT|DATASET|ENDCASE|FORWARD|HEADERS|HOTSPOT|INCLUDE|INVERSE|KEEPING|NO-ZERO|OBJECTS|OVERLAY|PADDING|PATTERN|PROGRAM|REFRESH|SECTION|SUMMING|TESTING|VERSION|WINDOWS|WITHOUT|BIT-NOT|BYTE-CA|BYTE-NA|CASTING|CONTEXT|COUNTRY|DYNAMIC|ENABLED|ENDLOOP|EXECUTE|FRIENDS|HANDLER|HEADING|INITIAL|\*-INPUT|LOGFILE|MAXIMUM|MINIMUM|NO-GAPS|NO-SIGN|PRAGMAS|PRIMARY|PRIVATE|REDUCED|REPLACE|REQUEST|RESULTS|UNICODE|WARNING|ALIASES|BYTE-CN|BYTE-NS|CALLING|COL_KEY|COLUMNS|CONNECT|ENDEXEC|ENTRIES|EXCLUDE|FILTERS|FURTHER|HELP-ID|LOGICAL|MAPPING|MESSAGE|NAMETAB|OPTIONS|PACKAGE|PERFORM|RECEIVE|STATICS|VARYING|BINDING|CHARLEN|GREATER|XSTRLEN|ACCEPT|APPEND|DETAIL|ELSEIF|ENDING|ENDTRY|FORMAT|FRAMES|GIVING|HASHED|HEADER|IMPORT|INSERT|MARGIN|MODULE|NATIVE|OBJECT|OFFSET|REMOTE|RESUME|SAVING|SIMPLE|SUBMIT|TABBED|TOKENS|UNIQUE|UNPACK|UPDATE|WINDOW|YELLOW|ACTUAL|ASPECT|CENTER|CURSOR|DELETE|DIALOG|DIVIDE|DURING|ERRORS|EVENTS|EXTEND|FILTER|HANDLE|HAVING|IGNORE|LITTLE|MEMORY|NO-GAP|OCCURS|OPTION|PERSON|PLACES|PUBLIC|REDUCE|REPORT|RESULT|SINGLE|SORTED|SWITCH|SYNTAX|TARGET|VALUES|WRITER|ASSERT|BLOCKS|BOUNDS|BUFFER|CHANGE|COLUMN|COMMIT|CONCAT|COPIES|CREATE|DDMMYY|DEFINE|ENDIAN|ESCAPE|EXPAND|KERNEL|LAYOUT|LEGACY|LEVELS|MMDDYY|NUMBER|OUTPUT|RANGES|READER|RETURN|SCREEN|SEARCH|SELECT|SHARED|SOURCE|STABLE|STATIC|SUBKEY|SUFFIX|TABLES|UNWIND|YYMMDD|ASSIGN|BACKUP|BEFORE|BINARY|BIT-OR|BLANKS|CLIENT|CODING|COMMON|DEMAND|DYNPRO|EXCEPT|EXISTS|EXPORT|FIELDS|GLOBAL|GROUPS|LENGTH|LOCALE|MEDIUM|METHOD|MODIFY|NESTED|OTHERS|REJECT|SCROLL|SUPPLY|SYMBOL|ENDFOR|STRLEN|ALIGN|BEGIN|BOUND|ENDAT|ENTRY|EVENT|FINAL|FLUSH|GRANT|INNER|SHORT|USING|WRITE|AFTER|BLACK|BLOCK|CLOCK|COLOR|COUNT|DUMMY|EMPTY|ENDDO|ENDON|GREEN|INDEX|INOUT|LEAVE|LEVEL|LINES|MODIF|ORDER|OUTER|RANGE|RESET|RETRY|RIGHT|SMART|SPLIT|STYLE|TABLE|THROW|UNDER|UNTIL|UPPER|UTF-8|WHERE|ALIAS|BLANK|CLEAR|CLOSE|EXACT|FETCH|FIRST|FOUND|GROUP|LLANG|LOCAL|OTHER|REGEX|SPOOL|TITLE|TYPES|VALID|WHILE|ALPHA|BOXED|CATCH|CHAIN|CHECK|CLASS|COVER|ENDIF|EQUIV|FIELD|FLOOR|FRAME|INPUT|LOWER|MATCH|NODES|PAGES|PRINT|RAISE|ROUND|SHIFT|SPACE|SPOTS|STAMP|STATE|TASKS|TIMES|TRMAC|ULINE|UNION|VALUE|WIDTH|EQUAL|LOG10|TRUNC|BLOB|CASE|CEIL|CLOB|COND|EXIT|FILE|GAPS|HOLD|INCL|INTO|KEEP|KEYS|LAST|LINE|LONG|LPAD|MAIL|MODE|OPEN|PINK|READ|ROWS|TEST|THEN|ZERO|AREA|BACK|BADI|BYTE|CAST|EDIT|EXEC|FAIL|FIND|FKEQ|FONT|FREE|GKEQ|HIDE|INIT|ITNO|LATE|LOOP|MAIN|MARK|MOVE|NEXT|NULL|RISK|ROLE|UNIT|WAIT|ZONE|BASE|CALL|CODE|DATA|DATE|FKGE|GKGE|HIGH|KIND|LEFT|LIST|MASK|MESH|NAME|NODE|PACK|PAGE|POOL|SEND|SIGN|SIZE|SOME|STOP|TASK|TEXT|TIME|USER|VARY|WITH|WORD|BLUE|CONV|COPY|DEEP|ELSE|FORM|FROM|HINT|ICON|JOIN|LIKE|LOAD|ONLY|PART|SCAN|SKIP|SORT|TYPE|UNIX|VIEW|WHEN|WORK|ACOS|ASIN|ATAN|COSH|EACH|FRAC|LESS|RTTI|SINH|SQRT|TANH|AVG|BIT|DIV|ISO|LET|OUT|PAD|SQL|ALL|CI_|CPI|END|LOB|LPI|MAX|MIN|NEW|OLE|RUN|SET|\?TO|YES|ABS|ADD|AND|BIG|FOR|HDB|JOB|LOW|NOT|SAP|TRY|VIA|XML|ANY|GET|IDS|KEY|MOD|OFF|PUT|RAW|RED|REF|SUM|TAB|XSD|CNT|COS|EXP|LOG|SIN|TAN|XOR|AT|CO|CP|DO|GT|ID|IF|NS|OR|BT|CA|CS|GE|NA|NB|EQ|IN|LT|NE|NO|OF|ON|PF|TO|AS|BY|CN|IS|LE|NP|UP|E|I|M|O|Z|C|X)\b/i,
                    lookbehind: !0
                },
                number: /\b\d+\b/,
                operator: {
                    pattern: /(\s)(?:\*\*?|<[=>]?|>=?|\?=|[-+\/=])(?=\s)/,
                    lookbehind: !0
                },
                "string-operator": {
                    pattern: /(\s)&&?(?=\s)/,
                    lookbehind: !0,
                    alias: "keyword"
                },
                "token-operator": [{
                    pattern: /(\w)(?:->?|=>|[~|{}])(?=\w)/,
                    lookbehind: !0,
                    alias: "punctuation"
                }, {
                    pattern: /[|{}]/,
                    alias: "punctuation"
                }],
                punctuation: /[,.:()]/
            }
        }
        e.exports = a,
        a.displayName = "abap",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                var t = "(?:ALPHA|BIT|CHAR|CR|CRLF|CTL|DIGIT|DQUOTE|HEXDIG|HTAB|LF|LWSP|OCTET|SP|VCHAR|WSP)";
                e.languages.abnf = {
                    comment: /;.*/,
                    string: {
                        pattern: /(?:%[is])?"[^"\n\r]*"/,
                        greedy: !0,
                        inside: {
                            punctuation: /^%[is]/
                        }
                    },
                    range: {
                        pattern: /%(?:b[01]+-[01]+|d\d+-\d+|x[A-F\d]+-[A-F\d]+)/i,
                        alias: "number"
                    },
                    terminal: {
                        pattern: /%(?:b[01]+(?:\.[01]+)*|d\d+(?:\.\d+)*|x[A-F\d]+(?:\.[A-F\d]+)*)/i,
                        alias: "number"
                    },
                    repetition: {
                        pattern: /(^|[^\w-])(?:\d*\*\d*|\d+)/,
                        lookbehind: !0,
                        alias: "operator"
                    },
                    definition: {
                        pattern: /(^[ \t]*)(?:[a-z][\w-]*|<[^<>\r\n]*>)(?=\s*=)/m,
                        lookbehind: !0,
                        alias: "keyword",
                        inside: {
                            punctuation: /<|>/
                        }
                    },
                    "core-rule": {
                        pattern: RegExp("(?:(^|[^<\\w-])" + t + "|<" + t + ">)(?![\\w-])", "i"),
                        lookbehind: !0,
                        alias: ["rule", "constant"],
                        inside: {
                            punctuation: /<|>/
                        }
                    },
                    rule: {
                        pattern: /(^|[^<\w-])[a-z][\w-]*|<[^<>\r\n]*>/i,
                        lookbehind: !0,
                        inside: {
                            punctuation: /<|>/
                        }
                    },
                    operator: /=\/?|\//,
                    punctuation: /[()\[\]]/
                }
            }(e)
        }
        e.exports = a,
        a.displayName = "abnf",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.actionscript = e.languages.extend("javascript", {
                keyword: /\b(?:as|break|case|catch|class|const|default|delete|do|else|extends|finally|for|function|if|implements|import|in|instanceof|interface|internal|is|native|new|null|package|private|protected|public|return|super|switch|this|throw|try|typeof|use|var|void|while|with|dynamic|each|final|get|include|namespace|override|set|static)\b/,
                operator: /\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/
            }),
            e.languages.actionscript["class-name"].alias = "function",
            e.languages.markup && e.languages.insertBefore("actionscript", "string", {
                xml: {
                    pattern: /(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,
                    lookbehind: !0,
                    inside: e.languages.markup
                }
            })
        }
        e.exports = a,
        a.displayName = "actionscript",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.ada = {
                comment: /--.*/,
                string: /"(?:""|[^"\r\f\n])*"/i,
                number: [{
                    pattern: /\b\d(?:_?\d)*#[\dA-F](?:_?[\dA-F])*(?:\.[\dA-F](?:_?[\dA-F])*)?#(?:E[+-]?\d(?:_?\d)*)?/i
                }, {
                    pattern: /\b\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:E[+-]?\d(?:_?\d)*)?\b/i
                }],
                "attr-name": /\b'\w+/i,
                keyword: /\b(?:abort|abs|abstract|accept|access|aliased|all|and|array|at|begin|body|case|constant|declare|delay|delta|digits|do|else|new|return|elsif|end|entry|exception|exit|for|function|generic|goto|if|in|interface|is|limited|loop|mod|not|null|of|others|out|overriding|package|pragma|private|procedure|protected|raise|range|record|rem|renames|requeue|reverse|select|separate|some|subtype|synchronized|tagged|task|terminate|then|type|until|use|when|while|with|xor)\b/i,
                boolean: /\b(?:true|false)\b/i,
                operator: /<[=>]?|>=?|=>?|:=|\/=?|\*\*?|[&+-]/,
                punctuation: /\.\.?|[,;():]/,
                char: /'.'/,
                variable: /\b[a-z](?:\w)*\b/i
            }
        }
        e.exports = a,
        a.displayName = "ada",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                e.languages.agda = {
                    comment: /\{-[\s\S]*?(?:-\}|$)|--.*/,
                    string: {
                        pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
                        greedy: !0
                    },
                    punctuation: /[(){}\u2983\u2984.;@]/,
                    "class-name": {
                        pattern: /((?:data|record) +)\S+/,
                        lookbehind: !0
                    },
                    function: {
                        pattern: /(^[ \t]*)(?!\s)[^:\r\n]+(?=:)/m,
                        lookbehind: !0
                    },
                    operator: {
                        pattern: /(^\s*|\s)(?:[=|:\u2200\u2192\u03bb\\?_]|->)(?=\s)/,
                        lookbehind: !0
                    },
                    keyword: /\b(?:Set|abstract|constructor|data|eta-equality|field|forall|hiding|import|in|inductive|infix|infixl|infixr|instance|let|macro|module|mutual|no-eta-equality|open|overlap|pattern|postulate|primitive|private|public|quote|quoteContext|quoteGoal|quoteTerm|record|renaming|rewrite|syntax|tactic|unquote|unquoteDecl|unquoteDef|using|variable|where|with)\b/
                }
            }(e)
        }
        e.exports = a,
        a.displayName = "agda",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.al = {
                comment: /\/\/.*|\/\*[\s\S]*?\*\//,
                string: {
                    pattern: /'(?:''|[^'\r\n])*'(?!')|"(?:""|[^"\r\n])*"(?!")/,
                    greedy: !0
                },
                function: {
                    pattern: /(\b(?:event|procedure|trigger)\s+|(?:^|[^.])\.\s*)[a-z_]\w*(?=\s*\()/i,
                    lookbehind: !0
                },
                keyword: [/\b(?:array|asserterror|begin|break|case|do|downto|else|end|event|exit|for|foreach|function|if|implements|in|indataset|interface|internal|local|of|procedure|program|protected|repeat|runonclient|securityfiltering|suppressdispose|temporary|then|to|trigger|until|var|while|with|withevents)\b/i, /\b(?:action|actions|addafter|addbefore|addfirst|addlast|area|assembly|chartpart|codeunit|column|controladdin|cuegroup|customizes|dataitem|dataset|dotnet|elements|enum|enumextension|extends|field|fieldattribute|fieldelement|fieldgroup|fieldgroups|fields|filter|fixed|grid|group|key|keys|label|labels|layout|modify|moveafter|movebefore|movefirst|movelast|page|pagecustomization|pageextension|part|profile|query|repeater|report|requestpage|schema|separator|systempart|table|tableelement|tableextension|textattribute|textelement|type|usercontrol|value|xmlport)\b/i],
                number: /\b(?:0x[\da-f]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?)(?:F|U(?:LL?)?|LL?)?\b/i,
                boolean: /\b(?:false|true)\b/i,
                variable: /\b(?:Curr(?:FieldNo|Page|Report)|RequestOptionsPage|x?Rec)\b/,
                "class-name": /\b(?:automation|biginteger|bigtext|blob|boolean|byte|char|clienttype|code|completiontriggererrorlevel|connectiontype|database|dataclassification|datascope|date|dateformula|datetime|decimal|defaultlayout|dialog|dictionary|dotnetassembly|dotnettypedeclaration|duration|errorinfo|errortype|executioncontext|executionmode|fieldclass|fieldref|fieldtype|file|filterpagebuilder|guid|httpclient|httpcontent|httpheaders|httprequestmessage|httpresponsemessage|instream|integer|joker|jsonarray|jsonobject|jsontoken|jsonvalue|keyref|list|moduledependencyinfo|moduleinfo|none|notification|notificationscope|objecttype|option|outstream|pageresult|record|recordid|recordref|reportformat|securityfilter|sessionsettings|tableconnectiontype|tablefilter|testaction|testfield|testfilterfield|testpage|testpermissions|testrequestpage|text|textbuilder|textconst|textencoding|time|transactionmodel|transactiontype|variant|verbosity|version|view|views|webserviceactioncontext|webserviceactionresultcode|xmlattribute|xmlattributecollection|xmlcdata|xmlcomment|xmldeclaration|xmldocument|xmldocumenttype|xmlelement|xmlnamespacemanager|xmlnametable|xmlnode|xmlnodelist|xmlprocessinginstruction|xmlreadoptions|xmltext|xmlwriteoptions)\b/i,
                operator: /\.\.|:[=:]|[-+*/]=?|<>|[<>]=?|=|\b(?:and|div|mod|not|or|xor)\b/i,
                punctuation: /[()\[\]{}:.;,]/
            }
        }
        e.exports = a,
        a.displayName = "al",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.antlr4 = {
                comment: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
                string: {
                    pattern: /'(?:\\.|[^\\'\r\n])*'/,
                    greedy: !0
                },
                "character-class": {
                    pattern: /\[(?:\\.|[^\\\]\r\n])*\]/,
                    greedy: !0,
                    alias: "regex",
                    inside: {
                        range: {
                            pattern: /([^[]|(?:^|[^\\])(?:\\\\)*\\\[)-(?!\])/,
                            lookbehind: !0,
                            alias: "punctuation"
                        },
                        escape: /\\(?:u(?:[a-fA-F\d]{4}|\{[a-fA-F\d]+\})|[pP]\{[=\w-]+\}|[^\r\nupP])/,
                        punctuation: /[\[\]]/
                    }
                },
                action: {
                    pattern: /\{(?:[^{}]|\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\})*\}/,
                    greedy: !0,
                    inside: {
                        content: {
                            pattern: /(\{)[\s\S]+(?=\})/,
                            lookbehind: !0
                        },
                        punctuation: /[{}]/
                    }
                },
                command: {
                    pattern: /(->\s*(?!\s))(?:\s*(?:,\s*)?\b[a-z]\w*(?:\s*\([^()\r\n]*\))?)+(?=\s*;)/i,
                    lookbehind: !0,
                    inside: {
                        function: /\b\w+(?=\s*(?:[,(]|$))/,
                        punctuation: /[,()]/
                    }
                },
                annotation: {
                    pattern: /@\w+(?:::\w+)*/,
                    alias: "keyword"
                },
                label: {
                    pattern: /#[ \t]*\w+/,
                    alias: "punctuation"
                },
                keyword: /\b(?:catch|channels|finally|fragment|grammar|import|lexer|locals|mode|options|parser|returns|throws|tokens)\b/,
                definition: [{
                    pattern: /\b[a-z]\w*(?=\s*:)/,
                    alias: ["rule", "class-name"]
                }, {
                    pattern: /\b[A-Z]\w*(?=\s*:)/,
                    alias: ["token", "constant"]
                }],
                constant: /\b[A-Z][A-Z_]*\b/,
                operator: /\.\.|->|[|~]|[*+?]\??/,
                punctuation: /[;:()=]/
            },
            e.languages.g4 = e.languages.antlr4
        }
        e.exports = a,
        a.displayName = "antlr4",
        a.aliases = ["g4"]
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.apacheconf = {
                comment: /#.*/,
                "directive-inline": {
                    pattern: /(^[\t ]*)\b(?:AcceptFilter|AcceptPathInfo|AccessFileName|Action|Add(?:Alt|AltByEncoding|AltByType|Charset|DefaultCharset|Description|Encoding|Handler|Icon|IconByEncoding|IconByType|InputFilter|Language|ModuleInfo|OutputFilter|OutputFilterByType|Type)|Alias|AliasMatch|Allow(?:CONNECT|EncodedSlashes|Methods|Override|OverrideList)?|Anonymous(?:_LogEmail|_MustGiveEmail|_NoUserID|_VerifyEmail)?|AsyncRequestWorkerFactor|Auth(?:BasicAuthoritative|BasicFake|BasicProvider|BasicUseDigestAlgorithm|DBDUserPWQuery|DBDUserRealmQuery|DBMGroupFile|DBMType|DBMUserFile|Digest(?:Algorithm|Domain|NonceLifetime|Provider|Qop|ShmemSize)|Form(?:Authoritative|Body|DisableNoStore|FakeBasicAuth|Location|LoginRequiredLocation|LoginSuccessLocation|LogoutLocation|Method|Mimetype|Password|Provider|SitePassphrase|Size|Username)|GroupFile|LDAP(?:AuthorizePrefix|BindAuthoritative|BindDN|BindPassword|CharsetConfig|CompareAsUser|CompareDNOnServer|DereferenceAliases|GroupAttribute|GroupAttributeIsDN|InitialBindAsUser|InitialBindPattern|MaxSubGroupDepth|RemoteUserAttribute|RemoteUserIsDN|SearchAsUser|SubGroupAttribute|SubGroupClass|Url)|Merging|Name|Type|UserFile|nCache(?:Context|Enable|ProvideFor|SOCache|Timeout)|nzFcgiCheckAuthnProvider|nzFcgiDefineProvider|zDBDLoginToReferer|zDBDQuery|zDBDRedirectQuery|zDBMType|zSendForbiddenOnFailure)|BalancerGrowth|BalancerInherit|BalancerMember|BalancerPersist|BrowserMatch|BrowserMatchNoCase|BufferSize|BufferedLogs|CGIDScriptTimeout|CGIMapExtension|Cache(?:DefaultExpire|DetailHeader|DirLength|DirLevels|Disable|Enable|File|Header|IgnoreCacheControl|IgnoreHeaders|IgnoreNoLastMod|IgnoreQueryString|IgnoreURLSessionIdentifiers|KeyBaseURL|LastModifiedFactor|Lock|LockMaxAge|LockPath|MaxExpire|MaxFileSize|MinExpire|MinFileSize|NegotiatedDocs|QuickHandler|ReadSize|ReadTime|Root|Socache(?:MaxSize|MaxTime|MinTime|ReadSize|ReadTime)?|StaleOnError|StoreExpired|StoreNoStore|StorePrivate)|CharsetDefault|CharsetOptions|CharsetSourceEnc|CheckCaseOnly|CheckSpelling|ChrootDir|ContentDigest|CookieDomain|CookieExpires|CookieName|CookieStyle|CookieTracking|CoreDumpDirectory|CustomLog|DBDExptime|DBDInitSQL|DBDKeep|DBDMax|DBDMin|DBDParams|DBDPersist|DBDPrepareSQL|DBDriver|DTracePrivileges|Dav|DavDepthInfinity|DavGenericLockDB|DavLockDB|DavMinTimeout|DefaultIcon|DefaultLanguage|DefaultRuntimeDir|DefaultType|Define|Deflate(?:BufferSize|CompressionLevel|FilterNote|InflateLimitRequestBody|InflateRatio(?:Burst|Limit)|MemLevel|WindowSize)|Deny|DirectoryCheckHandler|DirectoryIndex|DirectoryIndexRedirect|DirectorySlash|DocumentRoot|DumpIOInput|DumpIOOutput|EnableExceptionHook|EnableMMAP|EnableSendfile|Error|ErrorDocument|ErrorLog|ErrorLogFormat|Example|ExpiresActive|ExpiresByType|ExpiresDefault|ExtFilterDefine|ExtFilterOptions|ExtendedStatus|FallbackResource|FileETag|FilterChain|FilterDeclare|FilterProtocol|FilterProvider|FilterTrace|ForceLanguagePriority|ForceType|ForensicLog|GprofDir|GracefulShutdownTimeout|Group|Header|HeaderName|Heartbeat(?:Address|Listen|MaxServers|Storage)|HostnameLookups|ISAPI(?:AppendLogToErrors|AppendLogToQuery|CacheFile|FakeAsync|LogNotSupported|ReadAheadBuffer)|IdentityCheck|IdentityCheckTimeout|ImapBase|ImapDefault|ImapMenu|Include|IncludeOptional|Index(?:HeadInsert|Ignore|IgnoreReset|Options|OrderDefault|StyleSheet)|InputSed|KeepAlive|KeepAliveTimeout|KeptBodySize|LDAP(?:CacheEntries|CacheTTL|ConnectionPoolTTL|ConnectionTimeout|LibraryDebug|OpCacheEntries|OpCacheTTL|ReferralHopLimit|Referrals|Retries|RetryDelay|SharedCacheFile|SharedCacheSize|Timeout|TrustedClientCert|TrustedGlobalCert|TrustedMode|VerifyServerCert)|LanguagePriority|Limit(?:InternalRecursion|Request(?:Body|FieldSize|Fields|Line)|XMLRequestBody)|Listen|ListenBackLog|LoadFile|LoadModule|LogFormat|LogLevel|LogMessage|LuaAuthzProvider|LuaCodeCache|Lua(?:Hook(?:AccessChecker|AuthChecker|CheckUserID|Fixups|InsertFilter|Log|MapToStorage|TranslateName|TypeChecker)|Inherit|InputFilter|MapHandler|OutputFilter|PackageCPath|PackagePath|QuickHandler|Root|Scope)|MMapFile|Max(?:ConnectionsPerChild|KeepAliveRequests|MemFree|RangeOverlaps|RangeReversals|Ranges|RequestWorkers|SpareServers|SpareThreads|Threads)|MergeTrailers|MetaDir|MetaFiles|MetaSuffix|MimeMagicFile|MinSpareServers|MinSpareThreads|ModMimeUsePathInfo|ModemStandard|MultiviewsMatch|Mutex|NWSSLTrustedCerts|NWSSLUpgradeable|NameVirtualHost|NoProxy|Options|Order|OutputSed|PassEnv|PidFile|PrivilegesMode|Protocol|ProtocolEcho|Proxy(?:AddHeaders|BadHeader|Block|Domain|ErrorOverride|ExpressDBMFile|ExpressDBMType|ExpressEnable|FtpDirCharset|FtpEscapeWildcards|FtpListOnWildcard|HTML(?:BufSize|CharsetOut|DocType|Enable|Events|Extended|Fixups|Interp|Links|Meta|StripComments|URLMap)|IOBufferSize|MaxForwards|Pass(?:Inherit|InterpolateEnv|Match|Reverse|ReverseCookieDomain|ReverseCookiePath)?|PreserveHost|ReceiveBufferSize|Remote|RemoteMatch|Requests|SCGIInternalRedirect|SCGISendfile|Set|SourceAddress|Status|Timeout|Via)|RLimitCPU|RLimitMEM|RLimitNPROC|ReadmeName|ReceiveBufferSize|Redirect|RedirectMatch|RedirectPermanent|RedirectTemp|ReflectorHeader|RemoteIP(?:Header|InternalProxy|InternalProxyList|ProxiesHeader|TrustedProxy|TrustedProxyList)|RemoveCharset|RemoveEncoding|RemoveHandler|RemoveInputFilter|RemoveLanguage|RemoveOutputFilter|RemoveType|RequestHeader|RequestReadTimeout|Require|Rewrite(?:Base|Cond|Engine|Map|Options|Rule)|SSIETag|SSIEndTag|SSIErrorMsg|SSILastModified|SSILegacyExprParser|SSIStartTag|SSITimeFormat|SSIUndefinedEcho|SSL(?:CACertificateFile|CACertificatePath|CADNRequestFile|CADNRequestPath|CARevocationCheck|CARevocationFile|CARevocationPath|CertificateChainFile|CertificateFile|CertificateKeyFile|CipherSuite|Compression|CryptoDevice|Engine|FIPS|HonorCipherOrder|InsecureRenegotiation|OCSP(?:DefaultResponder|Enable|OverrideResponder|ResponderTimeout|ResponseMaxAge|ResponseTimeSkew|UseRequestNonce)|OpenSSLConfCmd|Options|PassPhraseDialog|Protocol|Proxy(?:CACertificateFile|CACertificatePath|CARevocation(?:Check|File|Path)|CheckPeer(?:CN|Expire|Name)|CipherSuite|Engine|MachineCertificate(?:ChainFile|File|Path)|Protocol|Verify|VerifyDepth)|RandomSeed|RenegBufferSize|Require|RequireSSL|SRPUnknownUserSeed|SRPVerifierFile|Session(?:Cache|CacheTimeout|TicketKeyFile|Tickets)|Stapling(?:Cache|ErrorCacheTimeout|FakeTryLater|ForceURL|ResponderTimeout|ResponseMaxAge|ResponseTimeSkew|ReturnResponderErrors|StandardCacheTimeout)|StrictSNIVHostCheck|UseStapling|UserName|VerifyClient|VerifyDepth)|Satisfy|ScoreBoardFile|Script(?:Alias|AliasMatch|InterpreterSource|Log|LogBuffer|LogLength|Sock)?|SecureListen|SeeRequestTail|SendBufferSize|Server(?:Admin|Alias|Limit|Name|Path|Root|Signature|Tokens)|Session(?:Cookie(?:Name|Name2|Remove)|Crypto(?:Cipher|Driver|Passphrase|PassphraseFile)|DBD(?:CookieName|CookieName2|CookieRemove|DeleteLabel|InsertLabel|PerUser|SelectLabel|UpdateLabel)|Env|Exclude|Header|Include|MaxAge)?|SetEnv|SetEnvIf|SetEnvIfExpr|SetEnvIfNoCase|SetHandler|SetInputFilter|SetOutputFilter|StartServers|StartThreads|Substitute|Suexec|SuexecUserGroup|ThreadLimit|ThreadStackSize|ThreadsPerChild|TimeOut|TraceEnable|TransferLog|TypesConfig|UnDefine|UndefMacro|UnsetEnv|Use|UseCanonicalName|UseCanonicalPhysicalPort|User|UserDir|VHostCGIMode|VHostCGIPrivs|VHostGroup|VHostPrivs|VHostSecure|VHostUser|Virtual(?:DocumentRoot|ScriptAlias)(?:IP)?|WatchdogInterval|XBitHack|xml2EncAlias|xml2EncDefault|xml2StartParse)\b/im,
                    lookbehind: !0,
                    alias: "property"
                },
                "directive-block": {
                    pattern: /<\/?\b(?:Auth[nz]ProviderAlias|Directory|DirectoryMatch|Else|ElseIf|Files|FilesMatch|If|IfDefine|IfModule|IfVersion|Limit|LimitExcept|Location|LocationMatch|Macro|Proxy|Require(?:All|Any|None)|VirtualHost)\b.*>/i,
                    inside: {
                        "directive-block": {
                            pattern: /^<\/?\w+/,
                            inside: {
                                punctuation: /^<\/?/
                            },
                            alias: "tag"
                        },
                        "directive-block-parameter": {
                            pattern: /.*[^>]/,
                            inside: {
                                punctuation: /:/,
                                string: {
                                    pattern: /("|').*\1/,
                                    inside: {
                                        variable: /[$%]\{?(?:\w\.?[-+:]?)+\}?/
                                    }
                                }
                            },
                            alias: "attr-value"
                        },
                        punctuation: />/
                    },
                    alias: "tag"
                },
                "directive-flags": {
                    pattern: /\[(?:[\w=],?)+\]/,
                    alias: "keyword"
                },
                string: {
                    pattern: /("|').*\1/,
                    inside: {
                        variable: /[$%]\{?(?:\w\.?[-+:]?)+\}?/
                    }
                },
                variable: /[$%]\{?(?:\w\.?[-+:]?)+\}?/,
                regex: /\^?.*\$|\^.*\$?/
            }
        }
        e.exports = a,
        a.displayName = "apacheconf",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        var a = n(186);
        function r(e) {
            e.register(a),
            function(e) {
                var t = /\b(?:abstract|activate|and|any|array|as|asc|autonomous|begin|bigdecimal|blob|boolean|break|bulk|by|byte|case|cast|catch|char|class|collect|commit|const|continue|currency|date|datetime|decimal|default|delete|desc|do|double|else|end|enum|exception|exit|export|extends|final|finally|float|for|from|global|goto|group|having|hint|if|implements|import|in|inner|insert|instanceof|int|integer|interface|into|join|like|limit|list|long|loop|map|merge|new|not|null|nulls|number|object|of|on|or|outer|override|package|parallel|pragma|private|protected|public|retrieve|return|rollback|select|set|short|sObject|sort|static|string|super|switch|synchronized|system|testmethod|then|this|throw|time|transaction|transient|trigger|try|undelete|update|upsert|using|virtual|void|webservice|when|where|while|get(?=\s*[{};])|(?:after|before)(?=\s+[a-z])|(?:inherited|with|without)\s+sharing)\b/i
                  , n = /\b(?:(?=[a-z_]\w*\s*[<\[])|(?!<keyword>))[A-Z_]\w*(?:\s*\.\s*[A-Z_]\w*)*\b(?:\s*(?:\[\s*\]|<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>))*/.source.replace(/<keyword>/g, (function() {
                    return t.source
                }
                ));
                function a(e) {
                    return RegExp(e.replace(/<CLASS-NAME>/g, (function() {
                        return n
                    }
                    )), "i")
                }
                var r = {
                    keyword: t,
                    punctuation: /[()\[\]{};,:.<>]/
                };
                e.languages.apex = {
                    comment: e.languages.clike.comment,
                    string: e.languages.clike.string,
                    sql: {
                        pattern: /((?:[=,({:]|\breturn)\s*)\[[^\[\]]*\]/i,
                        lookbehind: !0,
                        greedy: !0,
                        alias: "language-sql",
                        inside: e.languages.sql
                    },
                    annotation: {
                        pattern: /@\w+\b/,
                        alias: "punctuation"
                    },
                    "class-name": [{
                        pattern: a(/(\b(?:class|enum|extends|implements|instanceof|interface|new|trigger\s+\w+\s+on)\s+)<CLASS-NAME>/.source),
                        lookbehind: !0,
                        inside: r
                    }, {
                        pattern: a(/(\(\s*)<CLASS-NAME>(?=\s*\)\s*[\w(])/.source),
                        lookbehind: !0,
                        inside: r
                    }, {
                        pattern: a(/<CLASS-NAME>(?=\s*\w+\s*[;=,(){:])/.source),
                        inside: r
                    }],
                    trigger: {
                        pattern: /(\btrigger\s+)\w+\b/i,
                        lookbehind: !0,
                        alias: "class-name"
                    },
                    keyword: t,
                    function: /\b[a-z_]\w*(?=\s*\()/i,
                    boolean: /\b(?:false|true)\b/i,
                    number: /(?:\B\.\d+|\b\d+(?:\.\d+|L)?)\b/i,
                    operator: /[!=](?:==?)?|\?\.?|&&|\|\||--|\+\+|[-+*/^&|]=?|:|<<?=?|>{1,3}=?/,
                    punctuation: /[()\[\]{};,.]/
                }
            }(e)
        }
        e.exports = r,
        r.displayName = "apex",
        r.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.apl = {
                comment: /(?:\u235d|#[! ]).*$/m,
                string: {
                    pattern: /'(?:[^'\r\n]|'')*'/,
                    greedy: !0
                },
                number: /\xaf?(?:\d*\.?\b\d+(?:e[+\xaf]?\d+)?|\xaf|\u221e)(?:j\xaf?(?:(?:\d+(?:\.\d+)?|\.\d+)(?:e[+\xaf]?\d+)?|\xaf|\u221e))?/i,
                statement: /:[A-Z][a-z][A-Za-z]*\b/,
                "system-function": {
                    pattern: /\u2395[A-Z]+/i,
                    alias: "function"
                },
                constant: /[\u236c\u233e#\u2395\u235e]/,
                function: /[-+\xd7\xf7\u2308\u230a\u2223|\u2373\u2378?*\u235f\u25cb!\u2339<\u2264=>\u2265\u2260\u2261\u2262\u220a\u2377\u222a\u2229~\u2228\u2227\u2371\u2372\u2374,\u236a\u233d\u2296\u2349\u2191\u2193\u2282\u2283\u2286\u2287\u2337\u234b\u2352\u22a4\u22a5\u2355\u234e\u22a3\u22a2\u2341\u2342\u2248\u236f\u2197\xa4\u2192]/,
                "monadic-operator": {
                    pattern: /[\\\/\u233f\u2340\xa8\u2368\u2336&\u2225]/,
                    alias: "operator"
                },
                "dyadic-operator": {
                    pattern: /[.\u2363\u2360\u2364\u2218\u2338@\u233a\u2365]/,
                    alias: "operator"
                },
                assignment: {
                    pattern: /\u2190/,
                    alias: "keyword"
                },
                punctuation: /[\[;\]()\u25c7\u22c4]/,
                dfn: {
                    pattern: /[{}\u237a\u2375\u2376\u2379\u2207\u236b:]/,
                    alias: "builtin"
                }
            }
        }
        e.exports = a,
        a.displayName = "apl",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.applescript = {
                comment: [/\(\*(?:\(\*(?:[^*]|\*(?!\)))*\*\)|(?!\(\*)[\s\S])*?\*\)/, /--.+/, /#.+/],
                string: /"(?:\\.|[^"\\\r\n])*"/,
                number: /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e-?\d+)?\b/i,
                operator: [/[&=\u2260\u2264\u2265*+\-\/\xf7^]|[<>]=?/, /\b(?:(?:start|begin|end)s? with|(?:(?:does not|doesn't) contain|contains?)|(?:is|isn't|is not) (?:in|contained by)|(?:(?:is|isn't|is not) )?(?:greater|less) than(?: or equal)?(?: to)?|(?:(?:does not|doesn't) come|comes) (?:before|after)|(?:is|isn't|is not) equal(?: to)?|(?:(?:does not|doesn't) equal|equals|equal to|isn't|is not)|(?:a )?(?:ref(?: to)?|reference to)|(?:and|or|div|mod|as|not))\b/],
                keyword: /\b(?:about|above|after|against|apart from|around|aside from|at|back|before|beginning|behind|below|beneath|beside|between|but|by|considering|continue|copy|does|eighth|else|end|equal|error|every|exit|false|fifth|first|for|fourth|from|front|get|given|global|if|ignoring|in|instead of|into|is|it|its|last|local|me|middle|my|ninth|of|on|onto|out of|over|prop|property|put|repeat|return|returning|second|set|seventh|since|sixth|some|tell|tenth|that|the|then|third|through|thru|timeout|times|to|transaction|true|try|until|where|while|whose|with|without)\b/,
                class: {
                    pattern: /\b(?:alias|application|boolean|class|constant|date|file|integer|list|number|POSIX file|real|record|reference|RGB color|script|text|centimetres|centimeters|feet|inches|kilometres|kilometers|metres|meters|miles|yards|square feet|square kilometres|square kilometers|square metres|square meters|square miles|square yards|cubic centimetres|cubic centimeters|cubic feet|cubic inches|cubic metres|cubic meters|cubic yards|gallons|litres|liters|quarts|grams|kilograms|ounces|pounds|degrees Celsius|degrees Fahrenheit|degrees Kelvin)\b/,
                    alias: "builtin"
                },
                punctuation: /[{}():,\xac\xab\xbb\u300a\u300b]/
            }
        }
        e.exports = a,
        a.displayName = "applescript",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.aql = {
                comment: /\/\/.*|\/\*[\s\S]*?\*\//,
                property: {
                    pattern: /([{,]\s*)(?:(?!\d)\w+|(["'\xb4`])(?:(?!\2)[^\\\r\n]|\\.)*\2)(?=\s*:)/,
                    lookbehind: !0,
                    greedy: !0
                },
                string: {
                    pattern: /(["'\xb4`])(?:(?!\1)[^\\\r\n]|\\.)*\1/,
                    greedy: !0
                },
                variable: /@@?\w+/,
                keyword: [{
                    pattern: /(\bWITH\s+)COUNT(?=\s+INTO\b)/i,
                    lookbehind: !0
                }, /\b(?:AGGREGATE|ALL|AND|ANY|ASC|COLLECT|DESC|DISTINCT|FILTER|FOR|GRAPH|IN|INBOUND|INSERT|INTO|K_PATHS|K_SHORTEST_PATHS|LET|LIKE|LIMIT|NONE|NOT|NULL|OR|OUTBOUND|REMOVE|REPLACE|RETURN|SHORTEST_PATH|SORT|UPDATE|UPSERT|WINDOW|WITH)\b/i, {
                    pattern: /(^|[^\w.[])(?:KEEP|PRUNE|SEARCH|TO)\b/i,
                    lookbehind: !0
                }, {
                    pattern: /(^|[^\w.[])(?:CURRENT|NEW|OLD)\b/,
                    lookbehind: !0
                }, {
                    pattern: /\bOPTIONS(?=\s*\{)/i
                }],
                function: /\b(?!\d)\w+(?=\s*\()/,
                boolean: /\b(?:true|false)\b/i,
                range: {
                    pattern: /\.\./,
                    alias: "operator"
                },
                number: [/\b0b[01]+/i, /\b0x[0-9a-f]+/i, /(?:\B\.\d+|\b(?:0|[1-9]\d*)(?:\.\d+)?)(?:e[+-]?\d+)?/i],
                operator: /\*{2,}|[=!]~|[!=<>]=?|&&|\|\||[-+*/%]/,
                punctuation: /::|[?.:,;()[\]{}]/
            }
        }
        e.exports = a,
        a.displayName = "aql",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        var a = n(187);
        function r(e) {
            e.register(a),
            e.languages.arduino = e.languages.extend("cpp", {
                constant: /\b(?:DIGITAL_MESSAGE|FIRMATA_STRING|ANALOG_MESSAGE|REPORT_DIGITAL|REPORT_ANALOG|INPUT_PULLUP|SET_PIN_MODE|INTERNAL2V56|SYSTEM_RESET|LED_BUILTIN|INTERNAL1V1|SYSEX_START|INTERNAL|EXTERNAL|DEFAULT|OUTPUT|INPUT|HIGH|LOW)\b/,
                keyword: /\b(?:setup|if|else|while|do|for|return|in|instanceof|default|function|loop|goto|switch|case|new|try|throw|catch|finally|null|break|continue|boolean|bool|void|byte|word|string|String|array|int|long|integer|double)\b/,
                builtin: /\b(?:KeyboardController|MouseController|SoftwareSerial|EthernetServer|EthernetClient|LiquidCrystal|LiquidCrystal_I2C|RobotControl|GSMVoiceCall|EthernetUDP|EsploraTFT|HttpClient|RobotMotor|WiFiClient|GSMScanner|FileSystem|Scheduler|GSMServer|YunClient|YunServer|IPAddress|GSMClient|GSMModem|Keyboard|Ethernet|Console|GSMBand|Esplora|Stepper|Process|WiFiUDP|GSM_SMS|Mailbox|USBHost|Firmata|PImage|Client|Server|GSMPIN|FileIO|Bridge|Serial|EEPROM|Stream|Mouse|Audio|Servo|File|Task|GPRS|WiFi|Wire|TFT|GSM|SPI|SD|runShellCommandAsynchronously|analogWriteResolution|retrieveCallingNumber|printFirmwareVersion|analogReadResolution|sendDigitalPortPair|noListenOnLocalhost|readJoystickButton|setFirmwareVersion|readJoystickSwitch|scrollDisplayRight|getVoiceCallStatus|scrollDisplayLeft|writeMicroseconds|delayMicroseconds|beginTransmission|getSignalStrength|runAsynchronously|getAsynchronously|listenOnLocalhost|getCurrentCarrier|readAccelerometer|messageAvailable|sendDigitalPorts|lineFollowConfig|countryNameWrite|runShellCommand|readStringUntil|rewindDirectory|readTemperature|setClockDivider|readLightSensor|endTransmission|analogReference|detachInterrupt|countryNameRead|attachInterrupt|encryptionType|readBytesUntil|robotNameWrite|readMicrophone|robotNameRead|cityNameWrite|userNameWrite|readJoystickY|readJoystickX|mouseReleased|openNextFile|scanNetworks|noInterrupts|digitalWrite|beginSpeaker|mousePressed|isActionDone|mouseDragged|displayLogos|noAutoscroll|addParameter|remoteNumber|getModifiers|keyboardRead|userNameRead|waitContinue|processInput|parseCommand|printVersion|readNetworks|writeMessage|blinkVersion|cityNameRead|readMessage|setDataMode|parsePacket|isListening|setBitOrder|beginPacket|isDirectory|motorsWrite|drawCompass|digitalRead|clearScreen|serialEvent|rightToLeft|setTextSize|leftToRight|requestFrom|keyReleased|compassRead|analogWrite|interrupts|WiFiServer|disconnect|playMelody|parseFloat|autoscroll|getPINUsed|setPINUsed|setTimeout|sendAnalog|readSlider|analogRead|beginWrite|createChar|motorsStop|keyPressed|tempoWrite|readButton|subnetMask|debugPrint|macAddress|writeGreen|randomSeed|attachGPRS|readString|sendString|remotePort|releaseAll|mouseMoved|background|getXChange|getYChange|answerCall|getResult|voiceCall|endPacket|constrain|getSocket|writeJSON|getButton|available|connected|findUntil|readBytes|exitValue|readGreen|writeBlue|startLoop|isPressed|sendSysex|pauseMode|gatewayIP|setCursor|getOemKey|tuneWrite|noDisplay|loadImage|switchPIN|onRequest|onReceive|changePIN|playFile|noBuffer|parseInt|overflow|checkPIN|knobRead|beginTFT|bitClear|updateIR|bitWrite|position|writeRGB|highByte|writeRed|setSpeed|readBlue|noStroke|remoteIP|transfer|shutdown|hangCall|beginSMS|endWrite|attached|maintain|noCursor|checkReg|checkPUK|shiftOut|isValid|shiftIn|pulseIn|connect|println|localIP|pinMode|getIMEI|display|noBlink|process|getBand|running|beginSD|drawBMP|lowByte|setBand|release|bitRead|prepare|pointTo|readRed|setMode|noFill|remove|listen|stroke|detach|attach|noTone|exists|buffer|height|bitSet|circle|config|cursor|random|IRread|setDNS|endSMS|getKey|micros|millis|begin|print|write|ready|flush|width|isPIN|blink|clear|press|mkdir|rmdir|close|point|yield|image|BSSID|click|delay|read|text|move|peek|beep|rect|line|open|seek|fill|size|turn|stop|home|find|step|tone|sqrt|RSSI|SSID|end|bit|tan|cos|sin|pow|map|abs|max|min|get|run|put)\b/
            })
        }
        e.exports = r,
        r.displayName = "arduino",
        r.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.arff = {
                comment: /%.*/,
                string: {
                    pattern: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
                    greedy: !0
                },
                keyword: /@(?:attribute|data|end|relation)\b/i,
                number: /\b\d+(?:\.\d+)?\b/,
                punctuation: /[{},]/
            }
        }
        e.exports = a,
        a.displayName = "arff",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                var t = {
                    pattern: /(^[ \t]*)\[(?!\[)(?:(["'$`])(?:(?!\2)[^\\]|\\.)*\2|\[(?:[^\[\]\\]|\\.)*\]|[^\[\]\\"'$`]|\\.)*\]/m,
                    lookbehind: !0,
                    inside: {
                        quoted: {
                            pattern: /([$`])(?:(?!\1)[^\\]|\\.)*\1/,
                            inside: {
                                punctuation: /^[$`]|[$`]$/
                            }
                        },
                        interpreted: {
                            pattern: /'(?:[^'\\]|\\.)*'/,
                            inside: {
                                punctuation: /^'|'$/
                            }
                        },
                        string: /"(?:[^"\\]|\\.)*"/,
                        variable: /\w+(?==)/,
                        punctuation: /^\[|\]$|,/,
                        operator: /=/,
                        "attr-value": /(?!^\s+$).+/
                    }
                }
                  , n = e.languages.asciidoc = {
                    "comment-block": {
                        pattern: /^(\/{4,})(?:\r?\n|\r)(?:[\s\S]*(?:\r?\n|\r))??\1/m,
                        alias: "comment"
                    },
                    table: {
                        pattern: /^\|={3,}(?:(?:\r?\n|\r(?!\n)).*)*?(?:\r?\n|\r)\|={3,}$/m,
                        inside: {
                            specifiers: {
                                pattern: /(?!\|)(?:(?:(?:\d+(?:\.\d+)?|\.\d+)[+*])?(?:[<^>](?:\.[<^>])?|\.[<^>])?[a-z]*)(?=\|)/,
                                alias: "attr-value"
                            },
                            punctuation: {
                                pattern: /(^|[^\\])[|!]=*/,
                                lookbehind: !0
                            }
                        }
                    },
                    "passthrough-block": {
                        pattern: /^(\+{4,})(?:\r?\n|\r)(?:[\s\S]*(?:\r?\n|\r))??\1$/m,
                        inside: {
                            punctuation: /^\++|\++$/
                        }
                    },
                    "literal-block": {
                        pattern: /^(-{4,}|\.{4,})(?:\r?\n|\r)(?:[\s\S]*(?:\r?\n|\r))??\1$/m,
                        inside: {
                            punctuation: /^(?:-+|\.+)|(?:-+|\.+)$/
                        }
                    },
                    "other-block": {
                        pattern: /^(--|\*{4,}|_{4,}|={4,})(?:\r?\n|\r)(?:[\s\S]*(?:\r?\n|\r))??\1$/m,
                        inside: {
                            punctuation: /^(?:-+|\*+|_+|=+)|(?:-+|\*+|_+|=+)$/
                        }
                    },
                    "list-punctuation": {
                        pattern: /(^[ \t]*)(?:-|\*{1,5}|\.{1,5}|(?:[a-z]|\d+)\.|[xvi]+\))(?= )/im,
                        lookbehind: !0,
                        alias: "punctuation"
                    },
                    "list-label": {
                        pattern: /(^[ \t]*)[a-z\d].+(?::{2,4}|;;)(?=\s)/im,
                        lookbehind: !0,
                        alias: "symbol"
                    },
                    "indented-block": {
                        pattern: /((\r?\n|\r)\2)([ \t]+)\S.*(?:(?:\r?\n|\r)\3.+)*(?=\2{2}|$)/,
                        lookbehind: !0
                    },
                    comment: /^\/\/.*/m,
                    title: {
                        pattern: /^.+(?:\r?\n|\r)(?:={3,}|-{3,}|~{3,}|\^{3,}|\+{3,})$|^={1,5} .+|^\.(?![\s.]).*/m,
                        alias: "important",
                        inside: {
                            punctuation: /^(?:\.|=+)|(?:=+|-+|~+|\^+|\++)$/
                        }
                    },
                    "attribute-entry": {
                        pattern: /^:[^:\r\n]+:(?: .*?(?: \+(?:\r?\n|\r).*?)*)?$/m,
                        alias: "tag"
                    },
                    attributes: t,
                    hr: {
                        pattern: /^'{3,}$/m,
                        alias: "punctuation"
                    },
                    "page-break": {
                        pattern: /^<{3,}$/m,
                        alias: "punctuation"
                    },
                    admonition: {
                        pattern: /^(?:TIP|NOTE|IMPORTANT|WARNING|CAUTION):/m,
                        alias: "keyword"
                    },
                    callout: [{
                        pattern: /(^[ \t]*)<?\d*>/m,
                        lookbehind: !0,
                        alias: "symbol"
                    }, {
                        pattern: /<\d+>/,
                        alias: "symbol"
                    }],
                    macro: {
                        pattern: /\b[a-z\d][a-z\d-]*::?(?:[^\s\[\]]*\[(?:[^\]\\"']|(["'])(?:(?!\1)[^\\]|\\.)*\1|\\.)*\])/,
                        inside: {
                            function: /^[a-z\d-]+(?=:)/,
                            punctuation: /^::?/,
                            attributes: {
                                pattern: /(?:\[(?:[^\]\\"']|(["'])(?:(?!\1)[^\\]|\\.)*\1|\\.)*\])/,
                                inside: t.inside
                            }
                        }
                    },
                    inline: {
                        pattern: /(^|[^\\])(?:(?:\B\[(?:[^\]\\"']|(["'])(?:(?!\2)[^\\]|\\.)*\2|\\.)*\])?(?:\b_(?!\s)(?: _|[^_\\\r\n]|\\.)+(?:(?:\r?\n|\r)(?: _|[^_\\\r\n]|\\.)+)*_\b|\B``(?!\s).+?(?:(?:\r?\n|\r).+?)*''\B|\B`(?!\s)(?:[^`'\s]|\s+\S)+['`]\B|\B(['*+#])(?!\s)(?: \3|(?!\3)[^\\\r\n]|\\.)+(?:(?:\r?\n|\r)(?: \3|(?!\3)[^\\\r\n]|\\.)+)*\3\B)|(?:\[(?:[^\]\\"']|(["'])(?:(?!\4)[^\\]|\\.)*\4|\\.)*\])?(?:(__|\*\*|\+\+\+?|##|\$\$|[~^]).+?(?:(?:\r?\n|\r).+?)*\5|\{[^}\r\n]+\}|\[\[\[?.+?(?:(?:\r?\n|\r).+?)*\]?\]\]|<<.+?(?:(?:\r?\n|\r).+?)*>>|\(\(\(?.+?(?:(?:\r?\n|\r).+?)*\)?\)\)))/m,
                        lookbehind: !0,
                        inside: {
                            attributes: t,
                            url: {
                                pattern: /^(?:\[\[\[?.+?\]?\]\]|<<.+?>>)$/,
                                inside: {
                                    punctuation: /^(?:\[\[\[?|<<)|(?:\]\]\]?|>>)$/
                                }
                            },
                            "attribute-ref": {
                                pattern: /^\{.+\}$/,
                                inside: {
                                    variable: {
                                        pattern: /(^\{)[a-z\d,+_-]+/,
                                        lookbehind: !0
                                    },
                                    operator: /^[=?!#%@$]|!(?=[:}])/,
                                    punctuation: /^\{|\}$|::?/
                                }
                            },
                            italic: {
                                pattern: /^(['_])[\s\S]+\1$/,
                                inside: {
                                    punctuation: /^(?:''?|__?)|(?:''?|__?)$/
                                }
                            },
                            bold: {
                                pattern: /^\*[\s\S]+\*$/,
                                inside: {
                                    punctuation: /^\*\*?|\*\*?$/
                                }
                            },
                            punctuation: /^(?:``?|\+{1,3}|##?|\$\$|[~^]|\(\(\(?)|(?:''?|\+{1,3}|##?|\$\$|[~^`]|\)?\)\))$/
                        }
                    },
                    replacement: {
                        pattern: /\((?:C|TM|R)\)/,
                        alias: "builtin"
                    },
                    entity: /&#?[\da-z]{1,8};/i,
                    "line-continuation": {
                        pattern: /(^| )\+$/m,
                        lookbehind: !0,
                        alias: "punctuation"
                    }
                };
                function a(e) {
                    for (var t = {}, a = 0, r = (e = e.split(" ")).length; a < r; a++)
                        t[e[a]] = n[e[a]];
                    return t
                }
                t.inside.interpreted.inside.rest = a("macro inline replacement entity"),
                n["passthrough-block"].inside.rest = a("macro"),
                n["literal-block"].inside.rest = a("callout"),
                n.table.inside.rest = a("comment-block passthrough-block literal-block other-block list-punctuation indented-block comment title attribute-entry attributes hr page-break admonition list-label callout macro inline replacement entity line-continuation"),
                n["other-block"].inside.rest = a("table list-punctuation indented-block comment attribute-entry attributes hr page-break admonition list-label macro inline replacement entity line-continuation"),
                n.title.inside.rest = a("macro inline replacement entity"),
                e.hooks.add("wrap", (function(e) {
                    "entity" === e.type && (e.attributes.title = e.content.value.replace(/&amp;/, "&"))
                }
                )),
                e.languages.adoc = e.languages.asciidoc
            }(e)
        }
        e.exports = a,
        a.displayName = "asciidoc",
        a.aliases = ["adoc"]
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.asm6502 = {
                comment: /;.*/,
                directive: {
                    pattern: /\.\w+(?= )/,
                    alias: "keyword"
                },
                string: /(["'`])(?:\\.|(?!\1)[^\\\r\n])*\1/,
                opcode: {
                    pattern: /\b(?:adc|and|asl|bcc|bcs|beq|bit|bmi|bne|bpl|brk|bvc|bvs|clc|cld|cli|clv|cmp|cpx|cpy|dec|dex|dey|eor|inc|inx|iny|jmp|jsr|lda|ldx|ldy|lsr|nop|ora|pha|php|pla|plp|rol|ror|rti|rts|sbc|sec|sed|sei|sta|stx|sty|tax|tay|tsx|txa|txs|tya|ADC|AND|ASL|BCC|BCS|BEQ|BIT|BMI|BNE|BPL|BRK|BVC|BVS|CLC|CLD|CLI|CLV|CMP|CPX|CPY|DEC|DEX|DEY|EOR|INC|INX|INY|JMP|JSR|LDA|LDX|LDY|LSR|NOP|ORA|PHA|PHP|PLA|PLP|ROL|ROR|RTI|RTS|SBC|SEC|SED|SEI|STA|STX|STY|TAX|TAY|TSX|TXA|TXS|TYA)\b/,
                    alias: "property"
                },
                hexnumber: {
                    pattern: /#?\$[\da-f]{2,4}\b/i,
                    alias: "string"
                },
                binarynumber: {
                    pattern: /#?%[01]+\b/,
                    alias: "string"
                },
                decimalnumber: {
                    pattern: /#?\b\d+\b/,
                    alias: "string"
                },
                register: {
                    pattern: /\b[xya]\b/i,
                    alias: "variable"
                }
            }
        }
        e.exports = a,
        a.displayName = "asm6502",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        var a = n(188);
        function r(e) {
            e.register(a),
            e.languages.aspnet = e.languages.extend("markup", {
                "page-directive": {
                    pattern: /<%\s*@.*%>/i,
                    alias: "tag",
                    inside: {
                        "page-directive": {
                            pattern: /<%\s*@\s*(?:Assembly|Control|Implements|Import|Master(?:Type)?|OutputCache|Page|PreviousPageType|Reference|Register)?|%>/i,
                            alias: "tag"
                        },
                        rest: e.languages.markup.tag.inside
                    }
                },
                directive: {
                    pattern: /<%.*%>/i,
                    alias: "tag",
                    inside: {
                        directive: {
                            pattern: /<%\s*?[$=%#:]{0,2}|%>/i,
                            alias: "tag"
                        },
                        rest: e.languages.csharp
                    }
                }
            }),
            e.languages.aspnet.tag.pattern = /<(?!%)\/?[^\s>\/]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,
            e.languages.insertBefore("inside", "punctuation", {
                directive: e.languages.aspnet.directive
            }, e.languages.aspnet.tag.inside["attr-value"]),
            e.languages.insertBefore("aspnet", "comment", {
                "asp-comment": {
                    pattern: /<%--[\s\S]*?--%>/,
                    alias: ["asp", "comment"]
                }
            }),
            e.languages.insertBefore("aspnet", e.languages.javascript ? "script" : "tag", {
                "asp-script": {
                    pattern: /(<script(?=.*runat=['"]?server\b)[^>]*>)[\s\S]*?(?=<\/script>)/i,
                    lookbehind: !0,
                    alias: ["asp", "script"],
                    inside: e.languages.csharp || {}
                }
            })
        }
        e.exports = r,
        r.displayName = "aspnet",
        r.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.autohotkey = {
                comment: [{
                    pattern: /(^|\s);.*/,
                    lookbehind: !0
                }, {
                    pattern: /(^[\t ]*)\/\*(?:[\r\n](?![ \t]*\*\/)|[^\r\n])*(?:[\r\n][ \t]*\*\/)?/m,
                    lookbehind: !0,
                    greedy: !0
                }],
                tag: {
                    pattern: /^([ \t]*)[^\s,`":]+(?=:[ \t]*$)/m,
                    lookbehind: !0
                },
                string: /"(?:[^"\n\r]|"")*"/m,
                variable: /%\w+%/,
                number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
                operator: /\?|\/\/?=?|:=|\|[=|]?|&[=&]?|\+[=+]?|-[=-]?|\*[=*]?|<(?:<=?|>|=)?|>>?=?|[.^!=~]=?|\b(?:AND|NOT|OR)\b/,
                boolean: /\b(?:true|false)\b/,
                selector: /\b(?:AutoTrim|BlockInput|Break|Click|ClipWait|Continue|Control|ControlClick|ControlFocus|ControlGet|ControlGetFocus|ControlGetPos|ControlGetText|ControlMove|ControlSend|ControlSendRaw|ControlSetText|CoordMode|Critical|DetectHiddenText|DetectHiddenWindows|Drive|DriveGet|DriveSpaceFree|EnvAdd|EnvDiv|EnvGet|EnvMult|EnvSet|EnvSub|EnvUpdate|Exit|ExitApp|FileAppend|FileCopy|FileCopyDir|FileCreateDir|FileCreateShortcut|FileDelete|FileEncoding|FileGetAttrib|FileGetShortcut|FileGetSize|FileGetTime|FileGetVersion|FileInstall|FileMove|FileMoveDir|FileRead|FileReadLine|FileRecycle|FileRecycleEmpty|FileRemoveDir|FileSelectFile|FileSelectFolder|FileSetAttrib|FileSetTime|FormatTime|GetKeyState|Gosub|Goto|GroupActivate|GroupAdd|GroupClose|GroupDeactivate|Gui|GuiControl|GuiControlGet|Hotkey|ImageSearch|IniDelete|IniRead|IniWrite|Input|InputBox|KeyWait|ListHotkeys|ListLines|ListVars|Loop|Menu|MouseClick|MouseClickDrag|MouseGetPos|MouseMove|MsgBox|OnExit|OutputDebug|Pause|PixelGetColor|PixelSearch|PostMessage|Process|Progress|Random|RegDelete|RegRead|RegWrite|Reload|Repeat|Return|Run|RunAs|RunWait|Send|SendEvent|SendInput|SendMessage|SendMode|SendPlay|SendRaw|SetBatchLines|SetCapslockState|SetControlDelay|SetDefaultMouseSpeed|SetEnv|SetFormat|SetKeyDelay|SetMouseDelay|SetNumlockState|SetRegView|SetScrollLockState|SetStoreCapslockMode|SetTimer|SetTitleMatchMode|SetWinDelay|SetWorkingDir|Shutdown|Sleep|Sort|SoundBeep|SoundGet|SoundGetWaveVolume|SoundPlay|SoundSet|SoundSetWaveVolume|SplashImage|SplashTextOff|SplashTextOn|SplitPath|StatusBarGetText|StatusBarWait|StringCaseSense|StringGetPos|StringLeft|StringLen|StringLower|StringMid|StringReplace|StringRight|StringSplit|StringTrimLeft|StringTrimRight|StringUpper|Suspend|SysGet|Thread|ToolTip|Transform|TrayTip|URLDownloadToFile|WinActivate|WinActivateBottom|WinClose|WinGet|WinGetActiveStats|WinGetActiveTitle|WinGetClass|WinGetPos|WinGetText|WinGetTitle|WinHide|WinKill|WinMaximize|WinMenuSelectItem|WinMinimize|WinMinimizeAll|WinMinimizeAllUndo|WinMove|WinRestore|WinSet|WinSetTitle|WinShow|WinWait|WinWaitActive|WinWaitClose|WinWaitNotActive)\b/i,
                constant: /\b(?:a_ahkpath|a_ahkversion|a_appdata|a_appdatacommon|a_autotrim|a_batchlines|a_caretx|a_carety|a_computername|a_controldelay|a_cursor|a_dd|a_ddd|a_dddd|a_defaultmousespeed|a_desktop|a_desktopcommon|a_detecthiddentext|a_detecthiddenwindows|a_endchar|a_eventinfo|a_exitreason|a_fileencoding|a_formatfloat|a_formatinteger|a_gui|a_guievent|a_guicontrol|a_guicontrolevent|a_guiheight|a_guiwidth|a_guix|a_guiy|a_hour|a_iconfile|a_iconhidden|a_iconnumber|a_icontip|a_index|a_ipaddress1|a_ipaddress2|a_ipaddress3|a_ipaddress4|a_is64bitos|a_isadmin|a_iscompiled|a_iscritical|a_ispaused|a_issuspended|a_isunicode|a_keydelay|a_language|a_lasterror|a_linefile|a_linenumber|a_loopfield|a_loopfileattrib|a_loopfiledir|a_loopfileext|a_loopfilefullpath|a_loopfilelongpath|a_loopfilename|a_loopfileshortname|a_loopfileshortpath|a_loopfilesize|a_loopfilesizekb|a_loopfilesizemb|a_loopfiletimeaccessed|a_loopfiletimecreated|a_loopfiletimemodified|a_loopreadline|a_loopregkey|a_loopregname|a_loopregsubkey|a_loopregtimemodified|a_loopregtype|a_mday|a_min|a_mm|a_mmm|a_mmmm|a_mon|a_mousedelay|a_msec|a_mydocuments|a_now|a_nowutc|a_numbatchlines|a_ostype|a_osversion|a_priorhotkey|a_priorkey|programfiles|a_programfiles|a_programs|a_programscommon|a_ptrsize|a_regview|a_screendpi|a_screenheight|a_screenwidth|a_scriptdir|a_scriptfullpath|a_scripthwnd|a_scriptname|a_sec|a_space|a_startmenu|a_startmenucommon|a_startup|a_startupcommon|a_stringcasesense|a_tab|a_temp|a_thisfunc|a_thishotkey|a_thislabel|a_thismenu|a_thismenuitem|a_thismenuitempos|a_tickcount|a_timeidle|a_timeidlephysical|a_timesincepriorhotkey|a_timesincethishotkey|a_titlematchmode|a_titlematchmodespeed|a_username|a_wday|a_windelay|a_windir|a_workingdir|a_yday|a_year|a_yweek|a_yyyy|clipboard|clipboardall|comspec|errorlevel)\b/i,
                builtin: /\b(?:abs|acos|asc|asin|atan|ceil|chr|class|comobjactive|comobjarray|comobjconnect|comobjcreate|comobjerror|comobjflags|comobjget|comobjquery|comobjtype|comobjvalue|cos|dllcall|exp|fileexist|Fileopen|floor|format|il_add|il_create|il_destroy|instr|substr|isfunc|islabel|IsObject|ln|log|lv_add|lv_delete|lv_deletecol|lv_getcount|lv_getnext|lv_gettext|lv_insert|lv_insertcol|lv_modify|lv_modifycol|lv_setimagelist|ltrim|rtrim|mod|onmessage|numget|numput|registercallback|regexmatch|regexreplace|round|sin|tan|sqrt|strlen|strreplace|sb_seticon|sb_setparts|sb_settext|strsplit|tv_add|tv_delete|tv_getchild|tv_getcount|tv_getnext|tv_get|tv_getparent|tv_getprev|tv_getselection|tv_gettext|tv_modify|varsetcapacity|winactive|winexist|__New|__Call|__Get|__Set)\b/i,
                symbol: /\b(?:alt|altdown|altup|appskey|backspace|browser_back|browser_favorites|browser_forward|browser_home|browser_refresh|browser_search|browser_stop|bs|capslock|ctrl|ctrlbreak|ctrldown|ctrlup|del|delete|down|end|enter|esc|escape|f1|f10|f11|f12|f13|f14|f15|f16|f17|f18|f19|f2|f20|f21|f22|f23|f24|f3|f4|f5|f6|f7|f8|f9|home|ins|insert|joy1|joy10|joy11|joy12|joy13|joy14|joy15|joy16|joy17|joy18|joy19|joy2|joy20|joy21|joy22|joy23|joy24|joy25|joy26|joy27|joy28|joy29|joy3|joy30|joy31|joy32|joy4|joy5|joy6|joy7|joy8|joy9|joyaxes|joybuttons|joyinfo|joyname|joypov|joyr|joyu|joyv|joyx|joyy|joyz|lalt|launch_app1|launch_app2|launch_mail|launch_media|lbutton|lcontrol|lctrl|left|lshift|lwin|lwindown|lwinup|mbutton|media_next|media_play_pause|media_prev|media_stop|numlock|numpad0|numpad1|numpad2|numpad3|numpad4|numpad5|numpad6|numpad7|numpad8|numpad9|numpadadd|numpadclear|numpaddel|numpaddiv|numpaddot|numpaddown|numpadend|numpadenter|numpadhome|numpadins|numpadleft|numpadmult|numpadpgdn|numpadpgup|numpadright|numpadsub|numpadup|pgdn|pgup|printscreen|ralt|rbutton|rcontrol|rctrl|right|rshift|rwin|rwindown|rwinup|scrolllock|shift|shiftdown|shiftup|space|tab|up|volume_down|volume_mute|volume_up|wheeldown|wheelleft|wheelright|wheelup|xbutton1|xbutton2)\b/i,
                important: /#\b(?:AllowSameLineComments|ClipboardTimeout|CommentFlag|DerefChar|ErrorStdOut|EscapeChar|HotkeyInterval|HotkeyModifierTimeout|Hotstring|If|IfTimeout|IfWinActive|IfWinExist|IfWinNotActive|IfWinNotExist|Include|IncludeAgain|InputLevel|InstallKeybdHook|InstallMouseHook|KeyHistory|MaxHotkeysPerInterval|MaxMem|MaxThreads|MaxThreadsBuffer|MaxThreadsPerHotkey|MenuMaskKey|NoEnv|NoTrayIcon|Persistent|SingleInstance|UseHook|Warn|WinActivateForce)\b/i,
                keyword: /\b(?:Abort|AboveNormal|Add|ahk_class|ahk_exe|ahk_group|ahk_id|ahk_pid|All|Alnum|Alpha|AltSubmit|AltTab|AltTabAndMenu|AltTabMenu|AltTabMenuDismiss|AlwaysOnTop|AutoSize|Background|BackgroundTrans|BelowNormal|between|BitAnd|BitNot|BitOr|BitShiftLeft|BitShiftRight|BitXOr|Bold|Border|Button|ByRef|Checkbox|Checked|CheckedGray|Choose|ChooseString|Close|Color|ComboBox|Contains|ControlList|Count|Date|DateTime|Days|DDL|Default|DeleteAll|Delimiter|Deref|Destroy|Digit|Disable|Disabled|DropDownList|Edit|Eject|Else|Enable|Enabled|Error|Exist|Expand|ExStyle|FileSystem|First|Flash|Float|FloatFast|Focus|Font|for|global|Grid|Group|GroupBox|GuiClose|GuiContextMenu|GuiDropFiles|GuiEscape|GuiSize|Hdr|Hidden|Hide|High|HKCC|HKCR|HKCU|HKEY_CLASSES_ROOT|HKEY_CURRENT_CONFIG|HKEY_CURRENT_USER|HKEY_LOCAL_MACHINE|HKEY_USERS|HKLM|HKU|Hours|HScroll|Icon|IconSmall|ID|IDLast|If|IfEqual|IfExist|IfGreater|IfGreaterOrEqual|IfInString|IfLess|IfLessOrEqual|IfMsgBox|IfNotEqual|IfNotExist|IfNotInString|IfWinActive|IfWinExist|IfWinNotActive|IfWinNotExist|Ignore|ImageList|in|Integer|IntegerFast|Interrupt|is|italic|Join|Label|LastFound|LastFoundExist|Limit|Lines|List|ListBox|ListView|local|Lock|Logoff|Low|Lower|Lowercase|MainWindow|Margin|Maximize|MaximizeBox|MaxSize|Minimize|MinimizeBox|MinMax|MinSize|Minutes|MonthCal|Mouse|Move|Multi|NA|No|NoActivate|NoDefault|NoHide|NoIcon|NoMainWindow|norm|Normal|NoSort|NoSortHdr|NoStandard|Not|NoTab|NoTimers|Number|Off|Ok|On|OwnDialogs|Owner|Parse|Password|Picture|Pixel|Pos|Pow|Priority|ProcessName|Radio|Range|Read|ReadOnly|Realtime|Redraw|REG_BINARY|REG_DWORD|REG_EXPAND_SZ|REG_MULTI_SZ|REG_SZ|Region|Relative|Rename|Report|Resize|Restore|Retry|RGB|Screen|Seconds|Section|Serial|SetLabel|ShiftAltTab|Show|Single|Slider|SortDesc|Standard|static|Status|StatusBar|StatusCD|strike|Style|Submit|SysMenu|Tab2|TabStop|Text|Theme|Tile|ToggleCheck|ToggleEnable|ToolWindow|Top|Topmost|TransColor|Transparent|Tray|TreeView|TryAgain|Throw|Try|Catch|Finally|Type|UnCheck|underline|Unicode|Unlock|Until|UpDown|Upper|Uppercase|UseErrorLevel|Vis|VisFirst|Visible|VScroll|Wait|WaitClose|WantCtrlA|WantF2|WantReturn|While|Wrap|Xdigit|xm|xp|xs|Yes|ym|yp|ys)\b/i,
                function: /[^(); \t,\n+*\-=?>:\\\/<&%\[\]]+(?=\()/m,
                punctuation: /[{}[\]():,]/
            }
        }
        e.exports = a,
        a.displayName = "autohotkey",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.autoit = {
                comment: [/;.*/, {
                    pattern: /(^[\t ]*)#(?:comments-start|cs)[\s\S]*?^[ \t]*#(?:comments-end|ce)/m,
                    lookbehind: !0
                }],
                url: {
                    pattern: /(^[\t ]*#include\s+)(?:<[^\r\n>]+>|"[^\r\n"]+")/m,
                    lookbehind: !0
                },
                string: {
                    pattern: /(["'])(?:\1\1|(?!\1)[^\r\n])*\1/,
                    greedy: !0,
                    inside: {
                        variable: /([%$@])\w+\1/
                    }
                },
                directive: {
                    pattern: /(^[\t ]*)#\w+/m,
                    lookbehind: !0,
                    alias: "keyword"
                },
                function: /\b\w+(?=\()/,
                variable: /[$@]\w+/,
                keyword: /\b(?:Case|Const|Continue(?:Case|Loop)|Default|Dim|Do|Else(?:If)?|End(?:Func|If|Select|Switch|With)|Enum|Exit(?:Loop)?|For|Func|Global|If|In|Local|Next|Null|ReDim|Select|Static|Step|Switch|Then|To|Until|Volatile|WEnd|While|With)\b/i,
                number: /\b(?:0x[\da-f]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b/i,
                boolean: /\b(?:True|False)\b/i,
                operator: /<[=>]?|[-+*\/=&>]=?|[?^]|\b(?:And|Or|Not)\b/i,
                punctuation: /[\[\]().,:]/
            }
        }
        e.exports = a,
        a.displayName = "autoit",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                var t = /%%?[~:\w]+%?|!\S+!/
                  , n = {
                    pattern: /\/[a-z?]+(?=[ :]|$):?|-[a-z]\b|--[a-z-]+\b/im,
                    alias: "attr-name",
                    inside: {
                        punctuation: /:/
                    }
                }
                  , a = /"(?:[\\"]"|[^"])*"(?!")/
                  , r = /(?:\b|-)\d+\b/;
                e.languages.batch = {
                    comment: [/^::.*/m, {
                        pattern: /((?:^|[&(])[ \t]*)rem\b(?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,
                        lookbehind: !0
                    }],
                    label: {
                        pattern: /^:.*/m,
                        alias: "property"
                    },
                    command: [{
                        pattern: /((?:^|[&(])[ \t]*)for(?: \/[a-z?](?:[ :](?:"[^"]*"|[^\s"/]\S*))?)* \S+ in \([^)]+\) do/im,
                        lookbehind: !0,
                        inside: {
                            keyword: /^for\b|\b(?:in|do)\b/i,
                            string: a,
                            parameter: n,
                            variable: t,
                            number: r,
                            punctuation: /[()',]/
                        }
                    }, {
                        pattern: /((?:^|[&(])[ \t]*)if(?: \/[a-z?](?:[ :](?:"[^"]*"|[^\s"/]\S*))?)* (?:not )?(?:cmdextversion \d+|defined \w+|errorlevel \d+|exist \S+|(?:"[^"]*"|(?!")(?:(?!==)\S)+)?(?:==| (?:equ|neq|lss|leq|gtr|geq) )(?:"[^"]*"|[^\s"]\S*))/im,
                        lookbehind: !0,
                        inside: {
                            keyword: /^if\b|\b(?:not|cmdextversion|defined|errorlevel|exist)\b/i,
                            string: a,
                            parameter: n,
                            variable: t,
                            number: r,
                            operator: /\^|==|\b(?:equ|neq|lss|leq|gtr|geq)\b/i
                        }
                    }, {
                        pattern: /((?:^|[&()])[ \t]*)else\b/im,
                        lookbehind: !0,
                        inside: {
                            keyword: /^else\b/i
                        }
                    }, {
                        pattern: /((?:^|[&(])[ \t]*)set(?: \/[a-z](?:[ :](?:"[^"]*"|[^\s"/]\S*))?)* (?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,
                        lookbehind: !0,
                        inside: {
                            keyword: /^set\b/i,
                            string: a,
                            parameter: n,
                            variable: [t, /\w+(?=(?:[*\/%+\-&^|]|<<|>>)?=)/],
                            number: r,
                            operator: /[*\/%+\-&^|]=?|<<=?|>>=?|[!~_=]/,
                            punctuation: /[()',]/
                        }
                    }, {
                        pattern: /((?:^|[&(])[ \t]*@?)\w+\b(?:"(?:[\\"]"|[^"])*"(?!")|[^"^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,
                        lookbehind: !0,
                        inside: {
                            keyword: /^\w+\b/i,
                            string: a,
                            parameter: n,
                            label: {
                                pattern: /(^\s*):\S+/m,
                                lookbehind: !0,
                                alias: "property"
                            },
                            variable: t,
                            number: r,
                            operator: /\^/
                        }
                    }],
                    operator: /[&@]/,
                    punctuation: /[()']/
                }
            }(e)
        }
        e.exports = a,
        a.displayName = "batch",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.bbcode = {
                tag: {
                    pattern: /\[\/?[^\s=\]]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+))?(?:\s+[^\s=\]]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+))*\s*\]/,
                    inside: {
                        tag: {
                            pattern: /^\[\/?[^\s=\]]+/,
                            inside: {
                                punctuation: /^\[\/?/
                            }
                        },
                        "attr-value": {
                            pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+)/i,
                            inside: {
                                punctuation: [/^=/, {
                                    pattern: /^(\s*)["']|["']$/,
                                    lookbehind: !0
                                }]
                            }
                        },
                        punctuation: /\]/,
                        "attr-name": /[^\s=\]]+/
                    }
                }
            },
            e.languages.shortcode = e.languages.bbcode
        }
        e.exports = a,
        a.displayName = "bbcode",
        a.aliases = ["shortcode"]
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.birb = e.languages.extend("clike", {
                string: {
                    pattern: /r?("|')(?:\\.|(?!\1)[^\\])*\1/,
                    greedy: !0
                },
                "class-name": [/\b[A-Z](?:[\d_]*[a-zA-Z]\w*)?\b/, /\b[A-Z]\w*(?=\s+\w+\s*[;,=()])/],
                keyword: /\b(?:assert|break|case|class|const|default|else|enum|final|follows|for|grab|if|nest|next|new|noSeeb|return|static|switch|throw|var|void|while)\b/,
                operator: /\+\+|--|&&|\|\||<<=?|>>=?|~(?:\/=?)?|[+\-*\/%&^|=!<>]=?|\?|:/,
                variable: /\b[a-z_]\w*\b/
            }),
            e.languages.insertBefore("birb", "function", {
                metadata: {
                    pattern: /<\w+>/,
                    greedy: !0,
                    alias: "symbol"
                }
            })
        }
        e.exports = a,
        a.displayName = "birb",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        var a = n(162);
        function r(e) {
            e.register(a),
            e.languages.bison = e.languages.extend("c", {}),
            e.languages.insertBefore("bison", "comment", {
                bison: {
                    pattern: /^(?:[^%]|%(?!%))*%%[\s\S]*?%%/,
                    inside: {
                        c: {
                            pattern: /%\{[\s\S]*?%\}|\{(?:\{[^}]*\}|[^{}])*\}/,
                            inside: {
                                delimiter: {
                                    pattern: /^%?\{|%?\}$/,
                                    alias: "punctuation"
                                },
                                "bison-variable": {
                                    pattern: /[$@](?:<[^\s>]+>)?[\w$]+/,
                                    alias: "variable",
                                    inside: {
                                        punctuation: /<|>/
                                    }
                                },
                                rest: e.languages.c
                            }
                        },
                        comment: e.languages.c.comment,
                        string: e.languages.c.string,
                        property: /\S+(?=:)/,
                        keyword: /%\w+/,
                        number: {
                            pattern: /(^|[^@])\b(?:0x[\da-f]+|\d+)/i,
                            lookbehind: !0
                        },
                        punctuation: /%[%?]|[|:;\[\]<>]/
                    }
                }
            })
        }
        e.exports = r,
        r.displayName = "bison",
        r.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.bnf = {
                string: {
                    pattern: /"[^\r\n"]*"|'[^\r\n']*'/
                },
                definition: {
                    pattern: /<[^<>\r\n\t]+>(?=\s*::=)/,
                    alias: ["rule", "keyword"],
                    inside: {
                        punctuation: /^<|>$/
                    }
                },
                rule: {
                    pattern: /<[^<>\r\n\t]+>/,
                    inside: {
                        punctuation: /^<|>$/
                    }
                },
                operator: /::=|[|()[\]{}*+?]|\.{3}/
            },
            e.languages.rbnf = e.languages.bnf
        }
        e.exports = a,
        a.displayName = "bnf",
        a.aliases = ["rbnf"]
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.brainfuck = {
                pointer: {
                    pattern: /<|>/,
                    alias: "keyword"
                },
                increment: {
                    pattern: /\+/,
                    alias: "inserted"
                },
                decrement: {
                    pattern: /-/,
                    alias: "deleted"
                },
                branching: {
                    pattern: /\[|\]/,
                    alias: "important"
                },
                operator: /[.,]/,
                comment: /\S+/
            }
        }
        e.exports = a,
        a.displayName = "brainfuck",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.brightscript = {
                comment: /(?:\brem|').*/i,
                "directive-statement": {
                    pattern: /(^[\t ]*)#(?:const|else(?:[\t ]+if)?|end[\t ]+if|error|if).*/im,
                    lookbehind: !0,
                    alias: "property",
                    inside: {
                        "error-message": {
                            pattern: /(^#error).+/,
                            lookbehind: !0
                        },
                        directive: {
                            pattern: /^#(?:const|else(?:[\t ]+if)?|end[\t ]+if|error|if)/,
                            alias: "keyword"
                        },
                        expression: {
                            pattern: /[\s\S]+/,
                            inside: null
                        }
                    }
                },
                property: {
                    pattern: /([\r\n{,][\t ]*)(?:(?!\d)\w+|"(?:[^"\r\n]|"")*"(?!"))(?=[ \t]*:)/,
                    lookbehind: !0,
                    greedy: !0
                },
                string: {
                    pattern: /"(?:[^"\r\n]|"")*"(?!")/,
                    greedy: !0
                },
                "class-name": {
                    pattern: /(\bAs[\t ]+)\w+/i,
                    lookbehind: !0
                },
                keyword: /\b(?:As|Dim|Each|Else|Elseif|End|Exit|For|Function|Goto|If|In|Print|Return|Step|Stop|Sub|Then|To|While)\b/i,
                boolean: /\b(?:true|false)\b/i,
                function: /\b(?!\d)\w+(?=[\t ]*\()/i,
                number: /(?:\b\d+(?:\.\d+)?(?:[ed][+-]\d+)?|&h[a-f\d]+)\b[%&!#]?/i,
                operator: /--|\+\+|>>=?|<<=?|<>|[-+*/\\<>]=?|[:^=?]|\b(?:and|mod|not|or)\b/i,
                punctuation: /[.,;()[\]{}]/,
                constant: /\b(?:LINE_NUM)\b/i
            },
            e.languages.brightscript["directive-statement"].inside.expression.inside = e.languages.brightscript
        }
        e.exports = a,
        a.displayName = "brightscript",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.bro = {
                comment: {
                    pattern: /(^|[^\\$])#.*/,
                    lookbehind: !0,
                    inside: {
                        italic: /\b(?:TODO|FIXME|XXX)\b/
                    }
                },
                string: {
                    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
                    greedy: !0
                },
                boolean: /\b[TF]\b/,
                function: {
                    pattern: /(?:function|hook|event) \w+(?:::\w+)?/,
                    inside: {
                        keyword: /^(?:function|hook|event)/
                    }
                },
                variable: {
                    pattern: /(?:global|local) \w+/i,
                    inside: {
                        keyword: /(?:global|local)/
                    }
                },
                builtin: /(?:@(?:load(?:-(?:sigs|plugin))?|unload|prefixes|ifn?def|else|(?:end)?if|DIR|FILENAME))|(?:&?(?:redef|priority|log|optional|default|add_func|delete_func|expire_func|read_expire|write_expire|create_expire|synchronized|persistent|rotate_interval|rotate_size|encrypt|raw_output|mergeable|group|error_handler|type_column))/,
                constant: {
                    pattern: /const \w+/i,
                    inside: {
                        keyword: /const/
                    }
                },
                keyword: /\b(?:break|next|continue|alarm|using|of|add|delete|export|print|return|schedule|when|timeout|addr|any|bool|count|double|enum|file|int|interval|pattern|opaque|port|record|set|string|subnet|table|time|vector|for|if|else|in|module|function)\b/,
                operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&|\|\|?|\?|\*|\/|~|\^|%/,
                number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
                punctuation: /[{}[\];(),.:]/
            }
        }
        e.exports = a,
        a.displayName = "bro",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.bsl = {
                comment: /\/\/.*/,
                string: [{
                    pattern: /"(?:[^"]|"")*"(?!")/,
                    greedy: !0
                }, {
                    pattern: /'(?:[^'\r\n\\]|\\.)*'/
                }],
                keyword: [{
                    pattern: /(^|[^\w\u0400-\u0484\u0487-\u052f\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f])(?:\u043f\u043e\u043a\u0430|\u0434\u043b\u044f|\u043d\u043e\u0432\u044b\u0439|\u043f\u0440\u0435\u0440\u0432\u0430\u0442\u044c|\u043f\u043e\u043f\u044b\u0442\u043a\u0430|\u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435|\u0432\u044b\u0437\u0432\u0430\u0442\u044c\u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435|\u0438\u043d\u0430\u0447\u0435|\u043a\u043e\u043d\u0435\u0446\u043f\u043e\u043f\u044b\u0442\u043a\u0438|\u043d\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043e|\u0444\u0443\u043d\u043a\u0446\u0438\u044f|\u043f\u0435\u0440\u0435\u043c|\u0432\u043e\u0437\u0432\u0440\u0430\u0442|\u043a\u043e\u043d\u0435\u0446\u0444\u0443\u043d\u043a\u0446\u0438\u0438|\u0435\u0441\u043b\u0438|\u0438\u043d\u0430\u0447\u0435\u0435\u0441\u043b\u0438|\u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0430|\u043a\u043e\u043d\u0435\u0446\u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u044b|\u0442\u043e\u0433\u0434\u0430|\u0437\u043d\u0430\u0447|\u044d\u043a\u0441\u043f\u043e\u0440\u0442|\u043a\u043e\u043d\u0435\u0446\u0435\u0441\u043b\u0438|\u0438\u0437|\u043a\u0430\u0436\u0434\u043e\u0433\u043e|\u0438\u0441\u0442\u0438\u043d\u0430|\u043b\u043e\u0436\u044c|\u043f\u043e|\u0446\u0438\u043a\u043b|\u043a\u043e\u043d\u0435\u0446\u0446\u0438\u043a\u043b\u0430|\u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c)(?![\w\u0400-\u0484\u0487-\u052f\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f])/i,
                    lookbehind: !0
                }, {
                    pattern: /\b(?:while|for|new|break|try|except|raise|else|endtry|undefined|function|var|return|endfunction|null|if|elseif|procedure|endprocedure|then|val|export|endif|in|each|true|false|to|do|enddo|execute)\b/i
                }],
                number: {
                    pattern: /(^(?=\d)|[^\w\u0400-\u0484\u0487-\u052f\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f])(?:\d+(?:\.\d*)?|\.\d+)(?:E[+-]?\d+)?/i,
                    lookbehind: !0
                },
                operator: [/[<>+\-*/]=?|[%=]/, {
                    pattern: /(^|[^\w\u0400-\u0484\u0487-\u052f\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f])(?:\u0438|\u0438\u043b\u0438|\u043d\u0435)(?![\w\u0400-\u0484\u0487-\u052f\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f])/i,
                    lookbehind: !0
                }, {
                    pattern: /\b(?:and|or|not)\b/i
                }],
                punctuation: /\(\.|\.\)|[()\[\]:;,.]/,
                directive: [{
                    pattern: /^(\s*)&.*/m,
                    lookbehind: !0,
                    alias: "important"
                }, {
                    pattern: /^\s*#.*/gm,
                    alias: "important"
                }]
            },
            e.languages.oscript = e.languages.bsl
        }
        e.exports = a,
        a.displayName = "bsl",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.cfscript = e.languages.extend("clike", {
                comment: [{
                    pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
                    lookbehind: !0,
                    inside: {
                        annotation: {
                            pattern: /(?:^|[^.])@[\w\.]+/,
                            alias: "punctuation"
                        }
                    }
                }, {
                    pattern: /(^|[^\\:])\/\/.*/,
                    lookbehind: !0,
                    greedy: !0
                }],
                keyword: /\b(?:abstract|break|catch|component|continue|default|do|else|extends|final|finally|for|function|if|in|include|package|private|property|public|remote|required|rethrow|return|static|switch|throw|try|var|while|xml)\b(?!\s*=)/,
                operator: [/\+\+|--|&&|\|\||::|=>|[!=]==|<=?|>=?|[-+*/%&|^!=<>]=?|\?(?:\.|:)?|[?:]/, /\b(?:and|contains|eq|equal|eqv|gt|gte|imp|is|lt|lte|mod|not|or|xor)\b/],
                scope: {
                    pattern: /\b(?:application|arguments|cgi|client|cookie|local|session|super|this|variables)\b/,
                    alias: "global"
                },
                type: {
                    pattern: /\b(?:any|array|binary|boolean|date|guid|numeric|query|string|struct|uuid|void|xml)\b/,
                    alias: "builtin"
                }
            }),
            e.languages.insertBefore("cfscript", "keyword", {
                "function-variable": {
                    pattern: /[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
                    alias: "function"
                }
            }),
            delete e.languages.cfscript["class-name"],
            e.languages.cfc = e.languages.cfscript
        }
        e.exports = a,
        a.displayName = "cfscript",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        var a = n(187);
        function r(e) {
            e.register(a),
            e.languages.chaiscript = e.languages.extend("clike", {
                string: {
                    pattern: /(^|[^\\])'(?:[^'\\]|\\[\s\S])*'/,
                    lookbehind: !0,
                    greedy: !0
                },
                "class-name": [{
                    pattern: /(\bclass\s+)\w+/,
                    lookbehind: !0
                }, {
                    pattern: /(\b(?:attr|def)\s+)\w+(?=\s*::)/,
                    lookbehind: !0
                }],
                keyword: /\b(?:attr|auto|break|case|catch|class|continue|def|default|else|finally|for|fun|global|if|return|switch|this|try|var|while)\b/,
                number: [e.languages.cpp.number, /\b(?:Infinity|NaN)\b/],
                operator: />>=?|<<=?|\|\||&&|:[:=]?|--|\+\+|[=!<>+\-*/%|&^]=?|[?~]|`[^`\r\n]{1,4}`/
            }),
            e.languages.insertBefore("chaiscript", "operator", {
                "parameter-type": {
                    pattern: /([,(]\s*)\w+(?=\s+\w)/,
                    lookbehind: !0,
                    alias: "class-name"
                }
            }),
            e.languages.insertBefore("chaiscript", "string", {
                "string-interpolation": {
                    pattern: /(^|[^\\])"(?:[^"$\\]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\})*"/,
                    lookbehind: !0,
                    greedy: !0,
                    inside: {
                        interpolation: {
                            pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\}/,
                            lookbehind: !0,
                            inside: {
                                "interpolation-expression": {
                                    pattern: /(^\$\{)[\s\S]+(?=\}$)/,
                                    lookbehind: !0,
                                    inside: e.languages.chaiscript
                                },
                                "interpolation-punctuation": {
                                    pattern: /^\$\{|\}$/,
                                    alias: "punctuation"
                                }
                            }
                        },
                        string: /[\s\S]+/
                    }
                }
            })
        }
        e.exports = r,
        r.displayName = "chaiscript",
        r.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.cil = {
                comment: /\/\/.*/,
                string: {
                    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
                    greedy: !0
                },
                directive: {
                    pattern: /(^|\W)\.[a-z]+(?=\s)/,
                    lookbehind: !0,
                    alias: "class-name"
                },
                variable: /\[[\w\.]+\]/,
                keyword: /\b(?:abstract|ansi|assembly|auto|autochar|beforefieldinit|bool|bstr|byvalstr|catch|char|cil|class|currency|date|decimal|default|enum|error|explicit|extends|extern|famandassem|family|famorassem|final(?:ly)?|float32|float64|hidebysig|iant|idispatch|implements|import|initonly|instance|u?int(?:8|16|32|64)?|interface|iunknown|literal|lpstr|lpstruct|lptstr|lpwstr|managed|method|native(?:Type)?|nested|newslot|object(?:ref)?|pinvokeimpl|private|privatescope|public|reqsecobj|rtspecialname|runtime|sealed|sequential|serializable|specialname|static|string|struct|syschar|tbstr|unicode|unmanagedexp|unsigned|value(?:type)?|variant|virtual|void)\b/,
                function: /\b(?:(?:constrained|unaligned|volatile|readonly|tail|no)\.)?(?:conv\.(?:[iu][1248]?|ovf\.[iu][1248]?(?:\.un)?|r\.un|r4|r8)|ldc\.(?:i4(?:\.[0-9]+|\.[mM]1|\.s)?|i8|r4|r8)|ldelem(?:\.[iu][1248]?|\.r[48]|\.ref|a)?|ldind\.(?:[iu][1248]?|r[48]|ref)|stelem\.?(?:i[1248]?|r[48]|ref)?|stind\.(?:i[1248]?|r[48]|ref)?|end(?:fault|filter|finally)|ldarg(?:\.[0-3s]|a(?:\.s)?)?|ldloc(?:\.[0-9]+|\.s)?|sub(?:\.ovf(?:\.un)?)?|mul(?:\.ovf(?:\.un)?)?|add(?:\.ovf(?:\.un)?)?|stloc(?:\.[0-3s])?|refany(?:type|val)|blt(?:\.un)?(?:\.s)?|ble(?:\.un)?(?:\.s)?|bgt(?:\.un)?(?:\.s)?|bge(?:\.un)?(?:\.s)?|unbox(?:\.any)?|init(?:blk|obj)|call(?:i|virt)?|brfalse(?:\.s)?|bne\.un(?:\.s)?|ldloca(?:\.s)?|brzero(?:\.s)?|brtrue(?:\.s)?|brnull(?:\.s)?|brinst(?:\.s)?|starg(?:\.s)?|leave(?:\.s)?|shr(?:\.un)?|rem(?:\.un)?|div(?:\.un)?|clt(?:\.un)?|alignment|ldvirtftn|castclass|beq(?:\.s)?|mkrefany|localloc|ckfinite|rethrow|ldtoken|ldsflda|cgt\.un|arglist|switch|stsfld|sizeof|newobj|newarr|ldsfld|ldnull|ldflda|isinst|throw|stobj|stfld|ldstr|ldobj|ldlen|ldftn|ldfld|cpobj|cpblk|break|br\.s|xor|shl|ret|pop|not|nop|neg|jmp|dup|cgt|ceq|box|and|or|br)\b/,
                boolean: /\b(?:true|false)\b/,
                number: /\b-?(?:0x[0-9a-f]+|[0-9]+)(?:\.[0-9a-f]+)?\b/i,
                punctuation: /[{}[\];(),:=]|IL_[0-9A-Za-z]+/
            }
        }
        e.exports = a,
        a.displayName = "cil",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.clojure = {
                comment: /;.*/,
                string: {
                    pattern: /"(?:[^"\\]|\\.)*"/,
                    greedy: !0
                },
                operator: /(?:::|[:|'])\b[a-z][\w*+!?-]*\b/i,
                keyword: {
                    pattern: /([^\w+*'?-])(?:def|if|do|let|\.\.|quote|var|->>|->|fn|loop|recur|throw|try|monitor-enter|\.|new|set!|def-|defn|defn-|defmacro|defmulti|defmethod|defstruct|defonce|declare|definline|definterface|defprotocol|==|defrecord|>=|deftype|<=|defproject|ns|\*|\+|-|\/|<|=|>|accessor|agent|agent-errors|aget|alength|all-ns|alter|and|append-child|apply|array-map|aset|aset-boolean|aset-byte|aset-char|aset-double|aset-float|aset-int|aset-long|aset-short|assert|assoc|await|await-for|bean|binding|bit-and|bit-not|bit-or|bit-shift-left|bit-shift-right|bit-xor|boolean|branch\?|butlast|byte|cast|char|children|class|clear-agent-errors|comment|commute|comp|comparator|complement|concat|conj|cons|constantly|cond|if-not|construct-proxy|contains\?|count|create-ns|create-struct|cycle|dec|deref|difference|disj|dissoc|distinct|doall|doc|dorun|doseq|dosync|dotimes|doto|double|down|drop|drop-while|edit|end\?|ensure|eval|every\?|false\?|ffirst|file-seq|filter|find|find-doc|find-ns|find-var|first|float|flush|for|fnseq|frest|gensym|get-proxy-class|get|hash-map|hash-set|identical\?|identity|if-let|import|in-ns|inc|index|insert-child|insert-left|insert-right|inspect-table|inspect-tree|instance\?|int|interleave|intersection|into|into-array|iterate|join|key|keys|keyword|keyword\?|last|lazy-cat|lazy-cons|left|lefts|line-seq|list\*|list|load|load-file|locking|long|macroexpand|macroexpand-1|make-array|make-node|map|map-invert|map\?|mapcat|max|max-key|memfn|merge|merge-with|meta|min|min-key|name|namespace|neg\?|newline|next|nil\?|node|not|not-any\?|not-every\?|not=|ns-imports|ns-interns|ns-map|ns-name|ns-publics|ns-refers|ns-resolve|ns-unmap|nth|nthrest|or|parse|partial|path|peek|pop|pos\?|pr|pr-str|print|print-str|println|println-str|prn|prn-str|project|proxy|proxy-mappings|quot|rand|rand-int|range|re-find|re-groups|re-matcher|re-matches|re-pattern|re-seq|read|read-line|reduce|ref|ref-set|refer|rem|remove|remove-method|remove-ns|rename|rename-keys|repeat|replace|replicate|resolve|rest|resultset-seq|reverse|rfirst|right|rights|root|rrest|rseq|second|select|select-keys|send|send-off|seq|seq-zip|seq\?|set|short|slurp|some|sort|sort-by|sorted-map|sorted-map-by|sorted-set|special-symbol\?|split-at|split-with|str|string\?|struct|struct-map|subs|subvec|symbol|symbol\?|sync|take|take-nth|take-while|test|time|to-array|to-array-2d|tree-seq|true\?|union|up|update-proxy|val|vals|var-get|var-set|var\?|vector|vector-zip|vector\?|when|when-first|when-let|when-not|with-local-vars|with-meta|with-open|with-out-str|xml-seq|xml-zip|zero\?|zipmap|zipper)(?=[^\w+*'?-])/,
                    lookbehind: !0
                },
                boolean: /\b(?:true|false|nil)\b/,
                number: /\b[\da-f]+\b/i,
                punctuation: /[{}\[\](),]/
            }
        }
        e.exports = a,
        a.displayName = "clojure",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.cmake = {
                comment: /#.*/,
                string: {
                    pattern: /"(?:[^\\"]|\\.)*"/,
                    greedy: !0,
                    inside: {
                        interpolation: {
                            pattern: /\$\{(?:[^{}$]|\$\{[^{}$]*\})*\}/,
                            inside: {
                                punctuation: /\$\{|\}/,
                                variable: /\w+/
                            }
                        }
                    }
                },
                variable: /\b(?:CMAKE_\w+|\w+_(?:VERSION(?:_MAJOR|_MINOR|_PATCH|_TWEAK)?|(?:BINARY|SOURCE)_DIR|DESCRIPTION|HOMEPAGE_URL|ROOT)|(?:ANDROID|APPLE|BORLAND|BUILD_SHARED_LIBS|CACHE|CPACK_(?:ABSOLUTE_DESTINATION_FILES|COMPONENT_INCLUDE_TOPLEVEL_DIRECTORY|ERROR_ON_ABSOLUTE_INSTALL_DESTINATION|INCLUDE_TOPLEVEL_DIRECTORY|INSTALL_DEFAULT_DIRECTORY_PERMISSIONS|INSTALL_SCRIPT|PACKAGING_INSTALL_PREFIX|SET_DESTDIR|WARN_ON_ABSOLUTE_INSTALL_DESTINATION)|CTEST_(?:BINARY_DIRECTORY|BUILD_COMMAND|BUILD_NAME|BZR_COMMAND|BZR_UPDATE_OPTIONS|CHANGE_ID|CHECKOUT_COMMAND|CONFIGURATION_TYPE|CONFIGURE_COMMAND|COVERAGE_COMMAND|COVERAGE_EXTRA_FLAGS|CURL_OPTIONS|CUSTOM_(?:COVERAGE_EXCLUDE|ERROR_EXCEPTION|ERROR_MATCH|ERROR_POST_CONTEXT|ERROR_PRE_CONTEXT|MAXIMUM_FAILED_TEST_OUTPUT_SIZE|MAXIMUM_NUMBER_OF_(?:ERRORS|WARNINGS)|MAXIMUM_PASSED_TEST_OUTPUT_SIZE|MEMCHECK_IGNORE|POST_MEMCHECK|POST_TEST|PRE_MEMCHECK|PRE_TEST|TESTS_IGNORE|WARNING_EXCEPTION|WARNING_MATCH)|CVS_CHECKOUT|CVS_COMMAND|CVS_UPDATE_OPTIONS|DROP_LOCATION|DROP_METHOD|DROP_SITE|DROP_SITE_CDASH|DROP_SITE_PASSWORD|DROP_SITE_USER|EXTRA_COVERAGE_GLOB|GIT_COMMAND|GIT_INIT_SUBMODULES|GIT_UPDATE_CUSTOM|GIT_UPDATE_OPTIONS|HG_COMMAND|HG_UPDATE_OPTIONS|LABELS_FOR_SUBPROJECTS|MEMORYCHECK_(?:COMMAND|COMMAND_OPTIONS|SANITIZER_OPTIONS|SUPPRESSIONS_FILE|TYPE)|NIGHTLY_START_TIME|P4_CLIENT|P4_COMMAND|P4_OPTIONS|P4_UPDATE_OPTIONS|RUN_CURRENT_SCRIPT|SCP_COMMAND|SITE|SOURCE_DIRECTORY|SUBMIT_URL|SVN_COMMAND|SVN_OPTIONS|SVN_UPDATE_OPTIONS|TEST_LOAD|TEST_TIMEOUT|TRIGGER_SITE|UPDATE_COMMAND|UPDATE_OPTIONS|UPDATE_VERSION_ONLY|USE_LAUNCHERS)|CYGWIN|ENV|EXECUTABLE_OUTPUT_PATH|GHS-MULTI|IOS|LIBRARY_OUTPUT_PATH|MINGW|MSVC(?:10|11|12|14|60|70|71|80|90|_IDE|_TOOLSET_VERSION|_VERSION)?|MSYS|PROJECT_(?:BINARY_DIR|DESCRIPTION|HOMEPAGE_URL|NAME|SOURCE_DIR|VERSION|VERSION_(?:MAJOR|MINOR|PATCH|TWEAK))|UNIX|WIN32|WINCE|WINDOWS_PHONE|WINDOWS_STORE|XCODE|XCODE_VERSION))\b/,
                property: /\b(?:cxx_\w+|(?:ARCHIVE_OUTPUT_(?:DIRECTORY|NAME)|COMPILE_DEFINITIONS|COMPILE_PDB_NAME|COMPILE_PDB_OUTPUT_DIRECTORY|EXCLUDE_FROM_DEFAULT_BUILD|IMPORTED_(?:IMPLIB|LIBNAME|LINK_DEPENDENT_LIBRARIES|LINK_INTERFACE_LANGUAGES|LINK_INTERFACE_LIBRARIES|LINK_INTERFACE_MULTIPLICITY|LOCATION|NO_SONAME|OBJECTS|SONAME)|INTERPROCEDURAL_OPTIMIZATION|LIBRARY_OUTPUT_DIRECTORY|LIBRARY_OUTPUT_NAME|LINK_FLAGS|LINK_INTERFACE_LIBRARIES|LINK_INTERFACE_MULTIPLICITY|LOCATION|MAP_IMPORTED_CONFIG|OSX_ARCHITECTURES|OUTPUT_NAME|PDB_NAME|PDB_OUTPUT_DIRECTORY|RUNTIME_OUTPUT_DIRECTORY|RUNTIME_OUTPUT_NAME|STATIC_LIBRARY_FLAGS|VS_CSHARP|VS_DOTNET_REFERENCEPROP|VS_DOTNET_REFERENCE|VS_GLOBAL_SECTION_POST|VS_GLOBAL_SECTION_PRE|VS_GLOBAL|XCODE_ATTRIBUTE)_\w+|\w+_(?:CLANG_TIDY|COMPILER_LAUNCHER|CPPCHECK|CPPLINT|INCLUDE_WHAT_YOU_USE|OUTPUT_NAME|POSTFIX|VISIBILITY_PRESET)|ABSTRACT|ADDITIONAL_MAKE_CLEAN_FILES|ADVANCED|ALIASED_TARGET|ALLOW_DUPLICATE_CUSTOM_TARGETS|ANDROID_(?:ANT_ADDITIONAL_OPTIONS|API|API_MIN|ARCH|ASSETS_DIRECTORIES|GUI|JAR_DEPENDENCIES|NATIVE_LIB_DEPENDENCIES|NATIVE_LIB_DIRECTORIES|PROCESS_MAX|PROGUARD|PROGUARD_CONFIG_PATH|SECURE_PROPS_PATH|SKIP_ANT_STEP|STL_TYPE)|ARCHIVE_OUTPUT_DIRECTORY|ATTACHED_FILES|ATTACHED_FILES_ON_FAIL|AUTOGEN_(?:BUILD_DIR|ORIGIN_DEPENDS|PARALLEL|SOURCE_GROUP|TARGETS_FOLDER|TARGET_DEPENDS)|AUTOMOC|AUTOMOC_(?:COMPILER_PREDEFINES|DEPEND_FILTERS|EXECUTABLE|MACRO_NAMES|MOC_OPTIONS|SOURCE_GROUP|TARGETS_FOLDER)|AUTORCC|AUTORCC_EXECUTABLE|AUTORCC_OPTIONS|AUTORCC_SOURCE_GROUP|AUTOUIC|AUTOUIC_EXECUTABLE|AUTOUIC_OPTIONS|AUTOUIC_SEARCH_PATHS|BINARY_DIR|BUILDSYSTEM_TARGETS|BUILD_RPATH|BUILD_RPATH_USE_ORIGIN|BUILD_WITH_INSTALL_NAME_DIR|BUILD_WITH_INSTALL_RPATH|BUNDLE|BUNDLE_EXTENSION|CACHE_VARIABLES|CLEAN_NO_CUSTOM|COMMON_LANGUAGE_RUNTIME|COMPATIBLE_INTERFACE_(?:BOOL|NUMBER_MAX|NUMBER_MIN|STRING)|COMPILE_(?:DEFINITIONS|FEATURES|FLAGS|OPTIONS|PDB_NAME|PDB_OUTPUT_DIRECTORY)|COST|CPACK_DESKTOP_SHORTCUTS|CPACK_NEVER_OVERWRITE|CPACK_PERMANENT|CPACK_STARTUP_SHORTCUTS|CPACK_START_MENU_SHORTCUTS|CPACK_WIX_ACL|CROSSCOMPILING_EMULATOR|CUDA_EXTENSIONS|CUDA_PTX_COMPILATION|CUDA_RESOLVE_DEVICE_SYMBOLS|CUDA_SEPARABLE_COMPILATION|CUDA_STANDARD|CUDA_STANDARD_REQUIRED|CXX_EXTENSIONS|CXX_STANDARD|CXX_STANDARD_REQUIRED|C_EXTENSIONS|C_STANDARD|C_STANDARD_REQUIRED|DEBUG_CONFIGURATIONS|DEFINE_SYMBOL|DEFINITIONS|DEPENDS|DEPLOYMENT_ADDITIONAL_FILES|DEPLOYMENT_REMOTE_DIRECTORY|DISABLED|DISABLED_FEATURES|ECLIPSE_EXTRA_CPROJECT_CONTENTS|ECLIPSE_EXTRA_NATURES|ENABLED_FEATURES|ENABLED_LANGUAGES|ENABLE_EXPORTS|ENVIRONMENT|EXCLUDE_FROM_ALL|EXCLUDE_FROM_DEFAULT_BUILD|EXPORT_NAME|EXPORT_PROPERTIES|EXTERNAL_OBJECT|EchoString|FAIL_REGULAR_EXPRESSION|FIND_LIBRARY_USE_LIB32_PATHS|FIND_LIBRARY_USE_LIB64_PATHS|FIND_LIBRARY_USE_LIBX32_PATHS|FIND_LIBRARY_USE_OPENBSD_VERSIONING|FIXTURES_CLEANUP|FIXTURES_REQUIRED|FIXTURES_SETUP|FOLDER|FRAMEWORK|Fortran_FORMAT|Fortran_MODULE_DIRECTORY|GENERATED|GENERATOR_FILE_NAME|GENERATOR_IS_MULTI_CONFIG|GHS_INTEGRITY_APP|GHS_NO_SOURCE_GROUP_FILE|GLOBAL_DEPENDS_DEBUG_MODE|GLOBAL_DEPENDS_NO_CYCLES|GNUtoMS|HAS_CXX|HEADER_FILE_ONLY|HELPSTRING|IMPLICIT_DEPENDS_INCLUDE_TRANSFORM|IMPORTED|IMPORTED_(?:COMMON_LANGUAGE_RUNTIME|CONFIGURATIONS|GLOBAL|IMPLIB|LIBNAME|LINK_DEPENDENT_LIBRARIES|LINK_INTERFACE_(?:LANGUAGES|LIBRARIES|MULTIPLICITY)|LOCATION|NO_SONAME|OBJECTS|SONAME)|IMPORT_PREFIX|IMPORT_SUFFIX|INCLUDE_DIRECTORIES|INCLUDE_REGULAR_EXPRESSION|INSTALL_NAME_DIR|INSTALL_RPATH|INSTALL_RPATH_USE_LINK_PATH|INTERFACE_(?:AUTOUIC_OPTIONS|COMPILE_DEFINITIONS|COMPILE_FEATURES|COMPILE_OPTIONS|INCLUDE_DIRECTORIES|LINK_DEPENDS|LINK_DIRECTORIES|LINK_LIBRARIES|LINK_OPTIONS|POSITION_INDEPENDENT_CODE|SOURCES|SYSTEM_INCLUDE_DIRECTORIES)|INTERPROCEDURAL_OPTIMIZATION|IN_TRY_COMPILE|IOS_INSTALL_COMBINED|JOB_POOLS|JOB_POOL_COMPILE|JOB_POOL_LINK|KEEP_EXTENSION|LABELS|LANGUAGE|LIBRARY_OUTPUT_DIRECTORY|LINKER_LANGUAGE|LINK_(?:DEPENDS|DEPENDS_NO_SHARED|DIRECTORIES|FLAGS|INTERFACE_LIBRARIES|INTERFACE_MULTIPLICITY|LIBRARIES|OPTIONS|SEARCH_END_STATIC|SEARCH_START_STATIC|WHAT_YOU_USE)|LISTFILE_STACK|LOCATION|MACOSX_BUNDLE|MACOSX_BUNDLE_INFO_PLIST|MACOSX_FRAMEWORK_INFO_PLIST|MACOSX_PACKAGE_LOCATION|MACOSX_RPATH|MACROS|MANUALLY_ADDED_DEPENDENCIES|MEASUREMENT|MODIFIED|NAME|NO_SONAME|NO_SYSTEM_FROM_IMPORTED|OBJECT_DEPENDS|OBJECT_OUTPUTS|OSX_ARCHITECTURES|OUTPUT_NAME|PACKAGES_FOUND|PACKAGES_NOT_FOUND|PARENT_DIRECTORY|PASS_REGULAR_EXPRESSION|PDB_NAME|PDB_OUTPUT_DIRECTORY|POSITION_INDEPENDENT_CODE|POST_INSTALL_SCRIPT|PREDEFINED_TARGETS_FOLDER|PREFIX|PRE_INSTALL_SCRIPT|PRIVATE_HEADER|PROCESSORS|PROCESSOR_AFFINITY|PROJECT_LABEL|PUBLIC_HEADER|REPORT_UNDEFINED_PROPERTIES|REQUIRED_FILES|RESOURCE|RESOURCE_LOCK|RULE_LAUNCH_COMPILE|RULE_LAUNCH_CUSTOM|RULE_LAUNCH_LINK|RULE_MESSAGES|RUNTIME_OUTPUT_DIRECTORY|RUN_SERIAL|SKIP_AUTOGEN|SKIP_AUTOMOC|SKIP_AUTORCC|SKIP_AUTOUIC|SKIP_BUILD_RPATH|SKIP_RETURN_CODE|SOURCES|SOURCE_DIR|SOVERSION|STATIC_LIBRARY_FLAGS|STATIC_LIBRARY_OPTIONS|STRINGS|SUBDIRECTORIES|SUFFIX|SYMBOLIC|TARGET_ARCHIVES_MAY_BE_SHARED_LIBS|TARGET_MESSAGES|TARGET_SUPPORTS_SHARED_LIBS|TESTS|TEST_INCLUDE_FILE|TEST_INCLUDE_FILES|TIMEOUT|TIMEOUT_AFTER_MATCH|TYPE|USE_FOLDERS|VALUE|VARIABLES|VERSION|VISIBILITY_INLINES_HIDDEN|VS_(?:CONFIGURATION_TYPE|COPY_TO_OUT_DIR|DEBUGGER_(?:COMMAND|COMMAND_ARGUMENTS|ENVIRONMENT|WORKING_DIRECTORY)|DEPLOYMENT_CONTENT|DEPLOYMENT_LOCATION|DOTNET_REFERENCES|DOTNET_REFERENCES_COPY_LOCAL|GLOBAL_KEYWORD|GLOBAL_PROJECT_TYPES|GLOBAL_ROOTNAMESPACE|INCLUDE_IN_VSIX|IOT_STARTUP_TASK|KEYWORD|RESOURCE_GENERATOR|SCC_AUXPATH|SCC_LOCALPATH|SCC_PROJECTNAME|SCC_PROVIDER|SDK_REFERENCES|SHADER_(?:DISABLE_OPTIMIZATIONS|ENABLE_DEBUG|ENTRYPOINT|FLAGS|MODEL|OBJECT_FILE_NAME|OUTPUT_HEADER_FILE|TYPE|VARIABLE_NAME)|STARTUP_PROJECT|TOOL_OVERRIDE|USER_PROPS|WINRT_COMPONENT|WINRT_EXTENSIONS|WINRT_REFERENCES|XAML_TYPE)|WILL_FAIL|WIN32_EXECUTABLE|WINDOWS_EXPORT_ALL_SYMBOLS|WORKING_DIRECTORY|WRAP_EXCLUDE|XCODE_(?:EMIT_EFFECTIVE_PLATFORM_NAME|EXPLICIT_FILE_TYPE|FILE_ATTRIBUTES|LAST_KNOWN_FILE_TYPE|PRODUCT_TYPE|SCHEME_(?:ADDRESS_SANITIZER|ADDRESS_SANITIZER_USE_AFTER_RETURN|ARGUMENTS|DISABLE_MAIN_THREAD_CHECKER|DYNAMIC_LIBRARY_LOADS|DYNAMIC_LINKER_API_USAGE|ENVIRONMENT|EXECUTABLE|GUARD_MALLOC|MAIN_THREAD_CHECKER_STOP|MALLOC_GUARD_EDGES|MALLOC_SCRIBBLE|MALLOC_STACK|THREAD_SANITIZER(?:_STOP)?|UNDEFINED_BEHAVIOUR_SANITIZER(?:_STOP)?|ZOMBIE_OBJECTS))|XCTEST)\b/,
                keyword: /\b(?:add_compile_definitions|add_compile_options|add_custom_command|add_custom_target|add_definitions|add_dependencies|add_executable|add_library|add_link_options|add_subdirectory|add_test|aux_source_directory|break|build_command|build_name|cmake_host_system_information|cmake_minimum_required|cmake_parse_arguments|cmake_policy|configure_file|continue|create_test_sourcelist|ctest_build|ctest_configure|ctest_coverage|ctest_empty_binary_directory|ctest_memcheck|ctest_read_custom_files|ctest_run_script|ctest_sleep|ctest_start|ctest_submit|ctest_test|ctest_update|ctest_upload|define_property|else|elseif|enable_language|enable_testing|endforeach|endfunction|endif|endmacro|endwhile|exec_program|execute_process|export|export_library_dependencies|file|find_file|find_library|find_package|find_path|find_program|fltk_wrap_ui|foreach|function|get_cmake_property|get_directory_property|get_filename_component|get_property|get_source_file_property|get_target_property|get_test_property|if|include|include_directories|include_external_msproject|include_guard|include_regular_expression|install|install_files|install_programs|install_targets|link_directories|link_libraries|list|load_cache|load_command|macro|make_directory|mark_as_advanced|math|message|option|output_required_files|project|qt_wrap_cpp|qt_wrap_ui|remove|remove_definitions|return|separate_arguments|set|set_directory_properties|set_property|set_source_files_properties|set_target_properties|set_tests_properties|site_name|source_group|string|subdir_depends|subdirs|target_compile_definitions|target_compile_features|target_compile_options|target_include_directories|target_link_directories|target_link_libraries|target_link_options|target_sources|try_compile|try_run|unset|use_mangled_mesa|utility_source|variable_requires|variable_watch|while|write_file)(?=\s*\()\b/,
                boolean: /\b(?:ON|OFF|TRUE|FALSE)\b/,
                namespace: /\b(?:PROPERTIES|SHARED|PRIVATE|STATIC|PUBLIC|INTERFACE|TARGET_OBJECTS)\b/,
                operator: /\b(?:NOT|AND|OR|MATCHES|LESS|GREATER|EQUAL|STRLESS|STRGREATER|STREQUAL|VERSION_LESS|VERSION_EQUAL|VERSION_GREATER|DEFINED)\b/,
                inserted: {
                    pattern: /\b\w+::\w+\b/,
                    alias: "class-name"
                },
                number: /\b\d+(?:\.\d+)*\b/,
                function: /\b[a-z_]\w*(?=\s*\()\b/i,
                punctuation: /[()>}]|\$[<{]/
            }
        }
        e.exports = a,
        a.displayName = "cmake",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.cobol = {
                comment: {
                    pattern: /\*>.*|(^[ \t]*)\*.*/m,
                    lookbehind: !0,
                    greedy: !0
                },
                string: {
                    pattern: /[xzgn]?(?:"(?:[^\r\n"]|"")*"(?!")|'(?:[^\r\n']|'')*'(?!'))/i,
                    greedy: !0
                },
                level: {
                    pattern: /(^[ \t]*)\d+\b/m,
                    lookbehind: !0,
                    greedy: !0,
                    alias: "number"
                },
                "class-name": {
                    pattern: /(\bpic(?:ture)?\s+)(?:(?:[-\w$/,:*+<>]|\.(?!\s|$))(?:\(\d+\))?)+/i,
                    lookbehind: !0,
                    inside: {
                        number: {
                            pattern: /(\()\d+/,
                            lookbehind: !0
                        },
                        punctuation: /[()]/
                    }
                },
                keyword: {
                    pattern: /(^|[^\w-])(?:ABORT|ACCEPT|ACCESS|ADD|ADDRESS|ADVANCING|AFTER|ALIGNED|ALL|ALPHABET|ALPHABETIC|ALPHABETIC-LOWER|ALPHABETIC-UPPER|ALPHANUMERIC|ALPHANUMERIC-EDITED|ALSO|ALTER|ALTERNATE|ANY|ARE|AREA|AREAS|AS|ASCENDING|ASCII|ASSIGN|ASSOCIATED-DATA|ASSOCIATED-DATA-LENGTH|AT|ATTRIBUTE|AUTHOR|AUTO|AUTO-SKIP|BACKGROUND-COLOR|BACKGROUND-COLOUR|BASIS|BEEP|BEFORE|BEGINNING|BELL|BINARY|BIT|BLANK|BLINK|BLOCK|BOUNDS|BOTTOM|BY|BYFUNCTION|BYTITLE|CALL|CANCEL|CAPABLE|CCSVERSION|CD|CF|CH|CHAINING|CHANGED|CHANNEL|CHARACTER|CHARACTERS|CLASS|CLASS-ID|CLOCK-UNITS|CLOSE|CLOSE-DISPOSITION|COBOL|CODE|CODE-SET|COLLATING|COL|COLUMN|COM-REG|COMMA|COMMITMENT|COMMON|COMMUNICATION|COMP|COMP-1|COMP-2|COMP-3|COMP-4|COMP-5|COMPUTATIONAL|COMPUTATIONAL-1|COMPUTATIONAL-2|COMPUTATIONAL-3|COMPUTATIONAL-4|COMPUTATIONAL-5|COMPUTE|CONFIGURATION|CONTAINS|CONTENT|CONTINUE|CONTROL|CONTROL-POINT|CONTROLS|CONVENTION|CONVERTING|COPY|CORR|CORRESPONDING|COUNT|CRUNCH|CURRENCY|CURSOR|DATA|DATA-BASE|DATE|DATE-COMPILED|DATE-WRITTEN|DAY|DAY-OF-WEEK|DBCS|DE|DEBUG-CONTENTS|DEBUG-ITEM|DEBUG-LINE|DEBUG-NAME|DEBUG-SUB-1|DEBUG-SUB-2|DEBUG-SUB-3|DEBUGGING|DECIMAL-POINT|DECLARATIVES|DEFAULT|DEFAULT-DISPLAY|DEFINITION|DELETE|DELIMITED|DELIMITER|DEPENDING|DESCENDING|DESTINATION|DETAIL|DFHRESP|DFHVALUE|DISABLE|DISK|DISPLAY|DISPLAY-1|DIVIDE|DIVISION|DONTCARE|DOUBLE|DOWN|DUPLICATES|DYNAMIC|EBCDIC|EGCS|EGI|ELSE|EMI|EMPTY-CHECK|ENABLE|END|END-ACCEPT|END-ADD|END-CALL|END-COMPUTE|END-DELETE|END-DIVIDE|END-EVALUATE|END-IF|END-MULTIPLY|END-OF-PAGE|END-PERFORM|END-READ|END-RECEIVE|END-RETURN|END-REWRITE|END-SEARCH|END-START|END-STRING|END-SUBTRACT|END-UNSTRING|END-WRITE|ENDING|ENTER|ENTRY|ENTRY-PROCEDURE|ENVIRONMENT|EOP|ERASE|ERROR|EOL|EOS|ESCAPE|ESI|EVALUATE|EVENT|EVERY|EXCEPTION|EXCLUSIVE|EXHIBIT|EXIT|EXPORT|EXTEND|EXTENDED|EXTERNAL|FD|FILE|FILE-CONTROL|FILLER|FINAL|FIRST|FOOTING|FOR|FOREGROUND-COLOR|FOREGROUND-COLOUR|FROM|FULL|FUNCTION|FUNCTIONNAME|FUNCTION-POINTER|GENERATE|GOBACK|GIVING|GLOBAL|GO|GRID|GROUP|HEADING|HIGHLIGHT|HIGH-VALUE|HIGH-VALUES|I-O|I-O-CONTROL|ID|IDENTIFICATION|IF|IMPLICIT|IMPORT|IN|INDEX|INDEXED|INDICATE|INITIAL|INITIALIZE|INITIATE|INPUT|INPUT-OUTPUT|INSPECT|INSTALLATION|INTEGER|INTO|INVALID|INVOKE|IS|JUST|JUSTIFIED|KANJI|KEPT|KEY|KEYBOARD|LABEL|LANGUAGE|LAST|LB|LD|LEADING|LEFT|LEFTLINE|LENGTH|LENGTH-CHECK|LIBACCESS|LIBPARAMETER|LIBRARY|LIMIT|LIMITS|LINAGE|LINAGE-COUNTER|LINE|LINES|LINE-COUNTER|LINKAGE|LIST|LOCAL|LOCAL-STORAGE|LOCK|LONG-DATE|LONG-TIME|LOWER|LOWLIGHT|LOW-VALUE|LOW-VALUES|MEMORY|MERGE|MESSAGE|MMDDYYYY|MODE|MODULES|MORE-LABELS|MOVE|MULTIPLE|MULTIPLY|NAMED|NATIONAL|NATIONAL-EDITED|NATIVE|NEGATIVE|NETWORK|NEXT|NO|NO-ECHO|NULL|NULLS|NUMBER|NUMERIC|NUMERIC-DATE|NUMERIC-EDITED|NUMERIC-TIME|OBJECT-COMPUTER|OCCURS|ODT|OF|OFF|OMITTED|ON|OPEN|OPTIONAL|ORDER|ORDERLY|ORGANIZATION|OTHER|OUTPUT|OVERFLOW|OVERLINE|OWN|PACKED-DECIMAL|PADDING|PAGE|PAGE-COUNTER|PASSWORD|PERFORM|PF|PH|PIC|PICTURE|PLUS|POINTER|POSITION|POSITIVE|PORT|PRINTER|PRINTING|PRIVATE|PROCEDURE|PROCEDURE-POINTER|PROCEDURES|PROCEED|PROCESS|PROGRAM|PROGRAM-ID|PROGRAM-LIBRARY|PROMPT|PURGE|QUEUE|QUOTE|QUOTES|RANDOM|READER|REMOTE|RD|REAL|READ|RECEIVE|RECEIVED|RECORD|RECORDING|RECORDS|RECURSIVE|REDEFINES|REEL|REF|REFERENCE|REFERENCES|RELATIVE|RELEASE|REMAINDER|REMARKS|REMOVAL|REMOVE|RENAMES|REPLACE|REPLACING|REPORT|REPORTING|REPORTS|REQUIRED|RERUN|RESERVE|REVERSE-VIDEO|RESET|RETURN|RETURN-CODE|RETURNING|REVERSED|REWIND|REWRITE|RF|RH|RIGHT|ROUNDED|RUN|SAME|SAVE|SCREEN|SD|SEARCH|SECTION|SECURE|SECURITY|SEGMENT|SEGMENT-LIMIT|SELECT|SEND|SENTENCE|SEPARATE|SEQUENCE|SEQUENTIAL|SET|SHARED|SHAREDBYALL|SHAREDBYRUNUNIT|SHARING|SHIFT-IN|SHIFT-OUT|SHORT-DATE|SIGN|SIZE|SORT|SORT-CONTROL|SORT-CORE-SIZE|SORT-FILE-SIZE|SORT-MERGE|SORT-MESSAGE|SORT-MODE-SIZE|SORT-RETURN|SOURCE|SOURCE-COMPUTER|SPACE|SPACES|SPECIAL-NAMES|STANDARD|STANDARD-1|STANDARD-2|START|STATUS|STOP|STRING|SUB-QUEUE-1|SUB-QUEUE-2|SUB-QUEUE-3|SUBTRACT|SUM|SUPPRESS|SYMBOL|SYMBOLIC|SYNC|SYNCHRONIZED|TABLE|TALLY|TALLYING|TASK|TAPE|TERMINAL|TERMINATE|TEST|TEXT|THEN|THREAD|THREAD-LOCAL|THROUGH|THRU|TIME|TIMER|TIMES|TITLE|TO|TODAYS-DATE|TODAYS-NAME|TOP|TRAILING|TRUNCATED|TYPE|TYPEDEF|UNDERLINE|UNIT|UNSTRING|UNTIL|UP|UPON|USAGE|USE|USING|VALUE|VALUES|VARYING|VIRTUAL|WAIT|WHEN|WHEN-COMPILED|WITH|WORDS|WORKING-STORAGE|WRITE|YEAR|YYYYMMDD|YYYYDDD|ZERO-FILL|ZEROS|ZEROES)(?![\w-])/i,
                    lookbehind: !0
                },
                boolean: {
                    pattern: /(^|[^\w-])(?:false|true)(?![\w-])/i,
                    lookbehind: !0
                },
                number: {
                    pattern: /(^|[^\w-])(?:[+-]?(?:(?:\d+(?:[.,]\d+)?|[.,]\d+)(?:e[+-]?\d+)?|zero))(?![\w-])/i,
                    lookbehind: !0
                },
                operator: [/<>|[<>]=?|[=+*/&]/, {
                    pattern: /(^|[^\w-])(?:-|and|equal|greater|less|not|or|than)(?![\w-])/i,
                    lookbehind: !0
                }],
                punctuation: /[.:,()]/
            }
        }
        e.exports = a,
        a.displayName = "cobol",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                var t = /#(?!\{).+/
                  , n = {
                    pattern: /#\{[^}]+\}/,
                    alias: "variable"
                };
                e.languages.coffeescript = e.languages.extend("javascript", {
                    comment: t,
                    string: [{
                        pattern: /'(?:\\[\s\S]|[^\\'])*'/,
                        greedy: !0
                    }, {
                        pattern: /"(?:\\[\s\S]|[^\\"])*"/,
                        greedy: !0,
                        inside: {
                            interpolation: n
                        }
                    }],
                    keyword: /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
                    "class-member": {
                        pattern: /@(?!\d)\w+/,
                        alias: "variable"
                    }
                }),
                e.languages.insertBefore("coffeescript", "comment", {
                    "multiline-comment": {
                        pattern: /###[\s\S]+?###/,
                        alias: "comment"
                    },
                    "block-regex": {
                        pattern: /\/{3}[\s\S]*?\/{3}/,
                        alias: "regex",
                        inside: {
                            comment: t,
                            interpolation: n
                        }
                    }
                }),
                e.languages.insertBefore("coffeescript", "string", {
                    "inline-javascript": {
                        pattern: /`(?:\\[\s\S]|[^\\`])*`/,
                        inside: {
                            delimiter: {
                                pattern: /^`|`$/,
                                alias: "punctuation"
                            },
                            script: {
                                pattern: /[\s\S]+/,
                                alias: "language-javascript",
                                inside: e.languages.javascript
                            }
                        }
                    },
                    "multiline-string": [{
                        pattern: /'''[\s\S]*?'''/,
                        greedy: !0,
                        alias: "string"
                    }, {
                        pattern: /"""[\s\S]*?"""/,
                        greedy: !0,
                        alias: "string",
                        inside: {
                            interpolation: n
                        }
                    }]
                }),
                e.languages.insertBefore("coffeescript", "keyword", {
                    property: /(?!\d)\w+(?=\s*:(?!:))/
                }),
                delete e.languages.coffeescript["template-string"],
                e.languages.coffee = e.languages.coffeescript
            }(e)
        }
        e.exports = a,
        a.displayName = "coffeescript",
        a.aliases = ["coffee"]
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.concurnas = {
                comment: [{
                    pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
                    lookbehind: !0
                }, {
                    pattern: /(^|[^\\:])\/\/.*/,
                    lookbehind: !0,
                    greedy: !0
                }],
                langext: {
                    pattern: /\b\w+\s*\|\|[\s\S]+?\|\|/,
                    greedy: !0,
                    alias: "string"
                },
                function: {
                    pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/,
                    lookbehind: !0
                },
                keyword: /\b(?:abstract|actor|also|annotation|assert|async|await|bool|boolean|break|byte|case|catch|changed|char|class|closed|constant|continue|def|default|del|double|elif|else|enum|every|extends|false|finally|float|for|from|global|gpudef|gpukernel|if|import|in|init|inject|int|lambda|local|long|loop|match|new|nodefault|null|of|onchange|open|out|override|package|parfor|parforsync|post|pre|private|protected|provide|provider|public|return|shared|short|single|size_t|sizeof|super|sync|this|throw|trait|trans|transient|true|try|typedef|unchecked|using|val|var|void|while|with)\b/,
                boolean: /\b(?:false|true)\b/,
                number: /\b0b[01][01_]*L?\b|\b0x(?:[\da-f_]*\.)?[\da-f_p+-]+\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfls]?/i,
                punctuation: /[{}[\];(),.:]/,
                operator: /<==|>==|=>|->|<-|<>|\^|&==|&<>|!|\?:?|\.\?|\+\+|--|[-+*/=<>]=?|\b(?:and|as|band|bor|bxor|comp|is|isnot|mod|or)\b=?/,
                annotation: {
                    pattern: /@(?:\w+:)?(?:\w+|\[[^\]]+\])?/,
                    alias: "builtin"
                }
            },
            e.languages.insertBefore("concurnas", "langext", {
                string: {
                    pattern: /[rs]?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
                    greedy: !0,
                    inside: {
                        interpolation: {
                            pattern: /((?:^|[^\\])(?:\\{2})*)\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                            lookbehind: !0,
                            inside: e.languages.concurnas
                        },
                        string: /[\s\S]+/
                    }
                }
            }),
            e.languages.conc = e.languages.concurnas
        }
        e.exports = a,
        a.displayName = "concurnas",
        a.aliases = ["conc"]
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                for (var t = /\(\*(?:[^(*]|\((?!\*)|\*(?!\))|<self>)*\*\)/.source, n = 0; n < 2; n++)
                    t = t.replace(/<self>/g, (function() {
                        return t
                    }
                    ));
                t = t.replace(/<self>/g, "[]"),
                e.languages.coq = {
                    comment: RegExp(t),
                    string: {
                        pattern: /"(?:[^"]|"")*"(?!")/,
                        greedy: !0
                    },
                    attribute: [{
                        pattern: RegExp(/#\[(?:[^\]("]|"(?:[^"]|"")*"(?!")|\((?!\*)|<comment>)*\]/.source.replace(/<comment>/g, (function() {
                            return t
                        }
                        ))),
                        greedy: !0,
                        alias: "attr-name",
                        inside: {
                            comment: RegExp(t),
                            string: {
                                pattern: /"(?:[^"]|"")*"(?!")/,
                                greedy: !0
                            },
                            operator: /=/,
                            punctuation: /^#\[|\]$|[,()]/
                        }
                    }, {
                        pattern: /\b(?:Cumulative|Global|Local|Monomorphic|NonCumulative|Polymorphic|Private|Program)\b/,
                        alias: "attr-name"
                    }],
                    keyword: /\b(?:_|Abort|About|Add|Admit|Admitted|All|apply|Arguments|as|As|Assumptions|at|Axiom|Axioms|Back|BackTo|Backtrace|Bind|BinOp|BinOpSpec|BinRel|Blacklist|by|Canonical|Case|Cd|Check|Class|Classes|Close|Coercion|Coercions|cofix|CoFixpoint|CoInductive|Collection|Combined|Compute|Conjecture|Conjectures|Constant|Constants|Constraint|Constructors|Context|Corollary|Create|CstOp|Custom|Cut|Debug|Declare|Defined|Definition|Delimit|Dependencies|Dependent|Derive|Diffs|Drop|Elimination|else|end|End|Entry|Equality|Eval|Example|Existential|Existentials|Existing|exists|exists2|Export|Extern|Extraction|Fact|Fail|Field|File|Firstorder|fix|Fixpoint|Flags|Focus|for|forall|From|fun|Funclass|Function|Functional|GC|Generalizable|Goal|Grab|Grammar|Graph|Guarded|Haskell|Heap|Hide|Hint|HintDb|Hints|Hypotheses|Hypothesis|Identity|if|IF|Immediate|Implicit|Implicits|Import|in|Include|Induction|Inductive|Infix|Info|Initial|InjTyp|Inline|Inspect|Instance|Instances|Intro|Intros|Inversion|Inversion_clear|JSON|Language|Left|Lemma|let|Let|Lia|Libraries|Library|Load|LoadPath|Locate|Ltac|Ltac2|match|Match|measure|Method|Minimality|ML|Module|Modules|Morphism|move|Next|NoInline|Notation|Number|Obligation|Obligations|OCaml|Opaque|Open|Optimize|Parameter|Parameters|Parametric|Path|Paths|Prenex|Preterm|Primitive|Print|Profile|Projections|Proof|Prop|PropBinOp|Property|PropOp|Proposition|PropUOp|Pwd|Qed|Quit|Rec|Record|Recursive|Redirect|Reduction|Register|Relation|Remark|Remove|removed|Require|Reserved|Reset|Resolve|Restart|return|Rewrite|Right|Ring|Rings|Saturate|Save|Scheme|Scope|Scopes|Search|SearchHead|SearchPattern|SearchRewrite|Section|Separate|Set|Setoid|Show|Signatures|Solve|Solver|Sort|Sortclass|Sorted|Spec|SProp|Step|Strategies|Strategy|String|struct|Structure|SubClass|Subgraph|SuchThat|Tactic|Term|TestCompile|then|Theorem|Time|Timeout|To|Transparent|Type|Typeclasses|Types|Typing|Undelimit|Undo|Unfocus|Unfocused|Unfold|Universe|Universes|UnOp|UnOpSpec|Unshelve|using|Variable|Variables|Variant|Verbose|View|Visibility|wf|where|with|Zify)\b/,
                    number: /\b(?:0x[a-f0-9][a-f0-9_]*(?:\.[a-f0-9_]+)?(?:p[+-]?\d[\d_]*)?|\d[\d_]*(?:\.[\d_]+)?(?:e[+-]?\d[\d_]*)?)\b/i,
                    punct: {
                        pattern: /@\{|\{\||\[=|:>/,
                        alias: "punctuation"
                    },
                    operator: /\/\\|\\\/|\.{2,3}|:{1,2}=|\*\*|[-=]>|<(?:->?|[+:=>]|<:)|>(?:=|->)|\|[-|]?|[-!%&*+/<=>?@^~']/,
                    punctuation: /\.\(|`\(|@\{|`\{|\{\||\[=|:>|[:.,;(){}\[\]]/
                }
            }(e)
        }
        e.exports = a,
        a.displayName = "coq",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        var a = n(174);
        function r(e) {
            e.register(a),
            function(e) {
                e.languages.crystal = e.languages.extend("ruby", {
                    keyword: [/\b(?:abstract|alias|as|asm|begin|break|case|class|def|do|else|elsif|end|ensure|enum|extend|for|fun|if|include|instance_sizeof|lib|macro|module|next|of|out|pointerof|private|protected|rescue|return|require|select|self|sizeof|struct|super|then|type|typeof|uninitialized|union|unless|until|when|while|with|yield|__DIR__|__END_LINE__|__FILE__|__LINE__)\b/, {
                        pattern: /(\.\s*)(?:is_a|responds_to)\?/,
                        lookbehind: !0
                    }],
                    number: /\b(?:0b[01_]*[01]|0o[0-7_]*[0-7]|0x[\da-fA-F_]*[\da-fA-F]|(?:\d(?:[\d_]*\d)?)(?:\.[\d_]*\d)?(?:[eE][+-]?[\d_]*\d)?)(?:_(?:[uif](?:8|16|32|64))?)?\b/
                }),
                e.languages.insertBefore("crystal", "string", {
                    attribute: {
                        pattern: /@\[.+?\]/,
                        alias: "attr-name",
                        inside: {
                            delimiter: {
                                pattern: /^@\[|\]$/,
                                alias: "tag"
                            },
                            rest: e.languages.crystal
                        }
                    },
                    expansion: [{
                        pattern: /\{\{.+?\}\}/,
                        inside: {
                            delimiter: {
                                pattern: /^\{\{|\}\}$/,
                                alias: "tag"
                            },
                            rest: e.languages.crystal
                        }
                    }, {
                        pattern: /\{%.+?%\}/,
                        inside: {
                            delimiter: {
                                pattern: /^\{%|%\}$/,
                                alias: "tag"
                            },
                            rest: e.languages.crystal
                        }
                    }]
                })
            }(e)
        }
        e.exports = r,
        r.displayName = "crystal",
        r.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.csp = {
                directive: {
                    pattern: /(^|[^-\da-z])(?:base-uri|block-all-mixed-content|(?:child|connect|default|font|frame|img|manifest|media|object|prefetch|script|style|worker)-src|disown-opener|form-action|frame-(?:ancestors|options)|input-protection(?:-(?:clip|selectors))?|navigate-to|plugin-types|policy-uri|referrer|reflected-xss|report-(?:to|uri)|require-sri-for|sandbox|(?:script|style)-src-(?:attr|elem)|upgrade-insecure-requests)(?=[^-\da-z]|$)/i,
                    lookbehind: !0,
                    alias: "keyword"
                },
                safe: {
                    pattern: /'(?:deny|none|report-sample|self|strict-dynamic|top-only|(?:nonce|sha(?:256|384|512))-[-+/\w=]+)'/i,
                    alias: "selector"
                },
                unsafe: {
                    pattern: /(?:'unsafe-(?:allow-redirects|dynamic|eval|hash-attributes|hashed-attributes|hashes|inline)'|\*)/i,
                    alias: "function"
                }
            }
        }
        e.exports = a,
        a.displayName = "csp",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                var t, n = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
                e.languages.css.selector = {
                    pattern: e.languages.css.selector.pattern,
                    lookbehind: !0,
                    inside: t = {
                        "pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
                        "pseudo-class": /:[-\w]+/,
                        class: /\.[-\w]+/,
                        id: /#[-\w]+/,
                        attribute: {
                            pattern: RegExp("\\[(?:[^[\\]\"']|" + n.source + ")*\\]"),
                            greedy: !0,
                            inside: {
                                punctuation: /^\[|\]$/,
                                "case-sensitivity": {
                                    pattern: /(\s)[si]$/i,
                                    lookbehind: !0,
                                    alias: "keyword"
                                },
                                namespace: {
                                    pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
                                    lookbehind: !0,
                                    inside: {
                                        punctuation: /\|$/
                                    }
                                },
                                "attr-name": {
                                    pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,
                                    lookbehind: !0
                                },
                                "attr-value": [n, {
                                    pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,
                                    lookbehind: !0
                                }],
                                operator: /[|~*^$]?=/
                            }
                        },
                        "n-th": [{
                            pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
                            lookbehind: !0,
                            inside: {
                                number: /[\dn]+/,
                                operator: /[+-]/
                            }
                        }, {
                            pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i,
                            lookbehind: !0
                        }],
                        combinator: />|\+|~|\|\|/,
                        punctuation: /[(),]/
                    }
                },
                e.languages.css.atrule.inside["selector-function-argument"].inside = t,
                e.languages.insertBefore("css", "property", {
                    variable: {
                        pattern: /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
                        lookbehind: !0
                    }
                });
                var a = {
                    pattern: /(\b\d+)(?:%|[a-z]+\b)/,
                    lookbehind: !0
                }
                  , r = {
                    pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
                    lookbehind: !0
                };
                e.languages.insertBefore("css", "function", {
                    operator: {
                        pattern: /(\s)[+\-*\/](?=\s)/,
                        lookbehind: !0
                    },
                    hexcode: {
                        pattern: /\B#[\da-f]{3,8}\b/i,
                        alias: "color"
                    },
                    color: [/\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i, {
                        pattern: /\b(?:rgb|hsl)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:rgb|hsl)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
                        inside: {
                            unit: a,
                            number: r,
                            function: /[\w-]+(?=\()/,
                            punctuation: /[(),]/
                        }
                    }],
                    entity: /\\[\da-f]{1,8}/i,
                    unit: a,
                    number: r
                })
            }(e)
        }
        e.exports = a,
        a.displayName = "cssExtras",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.csv = {
                value: /[^\r\n,"]+|"(?:[^"]|"")*"(?!")/,
                punctuation: /,/
            }
        }
        e.exports = a,
        a.displayName = "csv",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.cypher = {
                comment: /\/\/.*/,
                string: {
                    pattern: /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/,
                    greedy: !0
                },
                "class-name": {
                    pattern: /(:\s*)(?:\w+|`(?:[^`\\\r\n])*`)(?=\s*[{):])/,
                    lookbehind: !0,
                    greedy: !0
                },
                relationship: {
                    pattern: /(-\[\s*(?:\w+\s*|`(?:[^`\\\r\n])*`\s*)?:\s*|\|\s*:\s*)(?:\w+|`(?:[^`\\\r\n])*`)/,
                    lookbehind: !0,
                    greedy: !0,
                    alias: "property"
                },
                identifier: {
                    pattern: /`(?:[^`\\\r\n])*`/,
                    greedy: !0,
                    alias: "symbol"
                },
                variable: /\$\w+/,
                keyword: /\b(?:ADD|ALL|AND|AS|ASC|ASCENDING|ASSERT|BY|CALL|CASE|COMMIT|CONSTRAINT|CONTAINS|CREATE|CSV|DELETE|DESC|DESCENDING|DETACH|DISTINCT|DO|DROP|ELSE|END|ENDS|EXISTS|FOR|FOREACH|IN|INDEX|IS|JOIN|KEY|LIMIT|LOAD|MANDATORY|MATCH|MERGE|NODE|NOT|OF|ON|OPTIONAL|OR|ORDER(?=\s+BY)|PERIODIC|REMOVE|REQUIRE|RETURN|SCALAR|SCAN|SET|SKIP|START|STARTS|THEN|UNION|UNIQUE|UNWIND|USING|WHEN|WHERE|WITH|XOR|YIELD)\b/i,
                function: /\b\w+\b(?=\s*\()/,
                boolean: /\b(?:true|false|null)\b/i,
                number: /\b(?:0x[\da-fA-F]+|\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)\b/,
                operator: /:|<--?|--?>?|<>|=~?|[<>]=?|[+*/%^|]|\.\.\.?/,
                punctuation: /[()[\]{},;.]/
            }
        }
        e.exports = a,
        a.displayName = "cypher",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.d = e.languages.extend("clike", {
                comment: [{
                    pattern: /^\s*#!.+/,
                    greedy: !0
                }, {
                    pattern: RegExp(/(^|[^\\])/.source + "(?:" + [/\/\+(?:\/\+(?:[^+]|\+(?!\/))*\+\/|(?!\/\+)[\s\S])*?\+\//.source, /\/\/.*/.source, /\/\*[\s\S]*?\*\//.source].join("|") + ")"),
                    lookbehind: !0,
                    greedy: !0
                }],
                string: [{
                    pattern: RegExp([/\b[rx]"(?:\\[\s\S]|[^\\"])*"[cwd]?/.source, /\bq"(?:\[[\s\S]*?\]|\([\s\S]*?\)|<[\s\S]*?>|\{[\s\S]*?\})"/.source, /\bq"((?!\d)\w+)$[\s\S]*?^\1"/.source, /\bq"(.)[\s\S]*?\2"/.source, /'(?:\\(?:\W|\w+)|[^\\])'/.source, /(["`])(?:\\[\s\S]|(?!\3)[^\\])*\3[cwd]?/.source].join("|"), "m"),
                    greedy: !0
                }, {
                    pattern: /\bq\{(?:\{[^{}]*\}|[^{}])*\}/,
                    greedy: !0,
                    alias: "token-string"
                }],
                keyword: /\$|\b(?:abstract|alias|align|asm|assert|auto|body|bool|break|byte|case|cast|catch|cdouble|cent|cfloat|char|class|const|continue|creal|dchar|debug|default|delegate|delete|deprecated|do|double|else|enum|export|extern|false|final|finally|float|for|foreach|foreach_reverse|function|goto|idouble|if|ifloat|immutable|import|inout|int|interface|invariant|ireal|lazy|long|macro|mixin|module|new|nothrow|null|out|override|package|pragma|private|protected|public|pure|real|ref|return|scope|shared|short|static|struct|super|switch|synchronized|template|this|throw|true|try|typedef|typeid|typeof|ubyte|ucent|uint|ulong|union|unittest|ushort|version|void|volatile|wchar|while|with|__(?:(?:FILE|MODULE|LINE|FUNCTION|PRETTY_FUNCTION|DATE|EOF|TIME|TIMESTAMP|VENDOR|VERSION)__|gshared|traits|vector|parameters)|string|wstring|dstring|size_t|ptrdiff_t)\b/,
                number: [/\b0x\.?[a-f\d_]+(?:(?!\.\.)\.[a-f\d_]*)?(?:p[+-]?[a-f\d_]+)?[ulfi]{0,4}/i, {
                    pattern: /((?:\.\.)?)(?:\b0b\.?|\b|\.)\d[\d_]*(?:(?!\.\.)\.[\d_]*)?(?:e[+-]?\d[\d_]*)?[ulfi]{0,4}/i,
                    lookbehind: !0
                }],
                operator: /\|[|=]?|&[&=]?|\+[+=]?|-[-=]?|\.?\.\.|=[>=]?|!(?:i[ns]\b|<>?=?|>=?|=)?|\bi[ns]\b|(?:<[<>]?|>>?>?|\^\^|[*\/%^~])=?/
            }),
            e.languages.insertBefore("d", "keyword", {
                property: /\B@\w*/
            }),
            e.languages.insertBefore("d", "function", {
                register: {
                    pattern: /\b(?:[ABCD][LHX]|E[ABCD]X|E?(?:BP|SP|DI|SI)|[ECSDGF]S|CR[0234]|DR[012367]|TR[3-7]|X?MM[0-7]|R[ABCD]X|[BS]PL|R[BS]P|[DS]IL|R[DS]I|R(?:[89]|1[0-5])[BWD]?|XMM(?:[89]|1[0-5])|YMM(?:1[0-5]|\d))\b|\bST(?:\([0-7]\)|\b)/,
                    alias: "variable"
                }
            })
        }
        e.exports = a,
        a.displayName = "d",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                var t = [/\b(?:async|sync|yield)\*/, /\b(?:abstract|assert|async|await|break|case|catch|class|const|continue|covariant|default|deferred|do|dynamic|else|enum|export|extension|external|extends|factory|final|finally|for|get|hide|if|implements|interface|import|in|library|mixin|new|null|on|operator|part|rethrow|return|set|show|static|super|switch|sync|this|throw|try|typedef|var|void|while|with|yield)\b/]
                  , n = /(^|[^\w.])(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source
                  , a = {
                    pattern: RegExp(n + /[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),
                    lookbehind: !0,
                    inside: {
                        namespace: {
                            pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
                            inside: {
                                punctuation: /\./
                            }
                        }
                    }
                };
                e.languages.dart = e.languages.extend("clike", {
                    string: [{
                        pattern: /r?("""|''')[\s\S]*?\1/,
                        greedy: !0
                    }, {
                        pattern: /r?(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
                        greedy: !0
                    }],
                    "class-name": [a, {
                        pattern: RegExp(n + /[A-Z]\w*(?=\s+\w+\s*[;,=()])/.source),
                        lookbehind: !0,
                        inside: a.inside
                    }],
                    keyword: t,
                    operator: /\bis!|\b(?:as|is)\b|\+\+|--|&&|\|\||<<=?|>>=?|~(?:\/=?)?|[+\-*\/%&^|=!<>]=?|\?/
                }),
                e.languages.insertBefore("dart", "function", {
                    metadata: {
                        pattern: /@\w+/,
                        alias: "symbol"
                    }
                }),
                e.languages.insertBefore("dart", "class-name", {
                    generics: {
                        pattern: /<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/,
                        inside: {
                            "class-name": a,
                            keyword: t,
                            punctuation: /[<>(),.:]/,
                            operator: /[?&|]/
                        }
                    }
                })
            }(e)
        }
        e.exports = a,
        a.displayName = "dart",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                e.languages.dataweave = {
                    url: /\b[A-Za-z]+:\/\/[\w/:.?=&-]+|\burn:[\w:.?=&-]+/,
                    property: {
                        pattern: /(?:\b\w+#)?(?:"(?:\\.|[^\\"\r\n])*"|\b\w+)(?=\s*[:@])/,
                        greedy: !0
                    },
                    string: {
                        pattern: /(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1/,
                        greedy: !0
                    },
                    "mime-type": /\b(?:text|audio|video|application|multipart|image)\/[\w+-]+/,
                    date: {
                        pattern: /\|[\w:+-]+\|/,
                        greedy: !0
                    },
                    comment: [{
                        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
                        lookbehind: !0,
                        greedy: !0
                    }, {
                        pattern: /(^|[^\\:])\/\/.*/,
                        lookbehind: !0,
                        greedy: !0
                    }],
                    regex: {
                        pattern: /\/(?:[^\\\/\r\n]|\\[^\r\n])+\//,
                        greedy: !0
                    },
                    function: /\b[A-Z_]\w*(?=\s*\()/i,
                    number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
                    punctuation: /[{}[\];(),.:@]/,
                    operator: /<<|>>|->|[<>~=]=?|!=|--?-?|\+\+?|!|\?/,
                    boolean: /\b(?:true|false)\b/,
                    keyword: /\b(?:match|input|output|ns|type|update|null|if|else|using|unless|at|is|as|case|do|fun|var|not|and|or)\b/
                }
            }(e)
        }
        e.exports = a,
        a.displayName = "dataweave",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.dax = {
                comment: {
                    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/).*)/,
                    lookbehind: !0
                },
                "data-field": {
                    pattern: /'(?:[^']|'')*'(?!')(?:\[[ \w\xA0-\uFFFF]+\])?|\w+\[[ \w\xA0-\uFFFF]+\]/,
                    alias: "symbol"
                },
                measure: {
                    pattern: /\[[ \w\xA0-\uFFFF]+\]/,
                    alias: "constant"
                },
                string: {
                    pattern: /"(?:[^"]|"")*"(?!")/,
                    greedy: !0
                },
                function: /\b(?:ABS|ACOS|ACOSH|ACOT|ACOTH|ADDCOLUMNS|ADDMISSINGITEMS|ALL|ALLCROSSFILTERED|ALLEXCEPT|ALLNOBLANKROW|ALLSELECTED|AND|APPROXIMATEDISTINCTCOUNT|ASIN|ASINH|ATAN|ATANH|AVERAGE|AVERAGEA|AVERAGEX|BETA\.DIST|BETA\.INV|BLANK|CALCULATE|CALCULATETABLE|CALENDAR|CALENDARAUTO|CEILING|CHISQ\.DIST|CHISQ\.DIST\.RT|CHISQ\.INV|CHISQ\.INV\.RT|CLOSINGBALANCEMONTH|CLOSINGBALANCEQUARTER|CLOSINGBALANCEYEAR|COALESCE|COMBIN|COMBINA|COMBINEVALUES|CONCATENATE|CONCATENATEX|CONFIDENCE\.NORM|CONFIDENCE\.T|CONTAINS|CONTAINSROW|CONTAINSSTRING|CONTAINSSTRINGEXACT|CONVERT|COS|COSH|COT|COTH|COUNT|COUNTA|COUNTAX|COUNTBLANK|COUNTROWS|COUNTX|CROSSFILTER|CROSSJOIN|CURRENCY|CURRENTGROUP|CUSTOMDATA|DATATABLE|DATE|DATEADD|DATEDIFF|DATESBETWEEN|DATESINPERIOD|DATESMTD|DATESQTD|DATESYTD|DATEVALUE|DAY|DEGREES|DETAILROWS|DISTINCT|DISTINCTCOUNT|DISTINCTCOUNTNOBLANK|DIVIDE|EARLIER|EARLIEST|EDATE|ENDOFMONTH|ENDOFQUARTER|ENDOFYEAR|EOMONTH|ERROR|EVEN|EXACT|EXCEPT|EXP|EXPON\.DIST|FACT|FALSE|FILTER|FILTERS|FIND|FIRSTDATE|FIRSTNONBLANK|FIRSTNONBLANKVALUE|FIXED|FLOOR|FORMAT|GCD|GENERATE|GENERATEALL|GENERATESERIES|GEOMEAN|GEOMEANX|GROUPBY|HASONEFILTER|HASONEVALUE|HOUR|IF|IF\.EAGER|IFERROR|IGNORE|INT|INTERSECT|ISBLANK|ISCROSSFILTERED|ISEMPTY|ISERROR|ISEVEN|ISFILTERED|ISINSCOPE|ISLOGICAL|ISNONTEXT|ISNUMBER|ISO\.CEILING|ISODD|ISONORAFTER|ISSELECTEDMEASURE|ISSUBTOTAL|ISTEXT|KEEPFILTERS|KEYWORDMATCH|LASTDATE|LASTNONBLANK|LASTNONBLANKVALUE|LCM|LEFT|LEN|LN|LOG|LOG10|LOOKUPVALUE|LOWER|MAX|MAXA|MAXX|MEDIAN|MEDIANX|MID|MIN|MINA|MINUTE|MINX|MOD|MONTH|MROUND|NATURALINNERJOIN|NATURALLEFTOUTERJOIN|NEXTDAY|NEXTMONTH|NEXTQUARTER|NEXTYEAR|NONVISUAL|NORM\.DIST|NORM\.INV|NORM\.S\.DIST|NORM\.S\.INV|NOT|NOW|ODD|OPENINGBALANCEMONTH|OPENINGBALANCEQUARTER|OPENINGBALANCEYEAR|OR|PARALLELPERIOD|PATH|PATHCONTAINS|PATHITEM|PATHITEMREVERSE|PATHLENGTH|PERCENTILE\.EXC|PERCENTILE\.INC|PERCENTILEX\.EXC|PERCENTILEX\.INC|PERMUT|PI|POISSON\.DIST|POWER|PREVIOUSDAY|PREVIOUSMONTH|PREVIOUSQUARTER|PREVIOUSYEAR|PRODUCT|PRODUCTX|QUARTER|QUOTIENT|RADIANS|RAND|RANDBETWEEN|RANK\.EQ|RANKX|RELATED|RELATEDTABLE|REMOVEFILTERS|REPLACE|REPT|RIGHT|ROLLUP|ROLLUPADDISSUBTOTAL|ROLLUPGROUP|ROLLUPISSUBTOTAL|ROUND|ROUNDDOWN|ROUNDUP|ROW|SAMEPERIODLASTYEAR|SAMPLE|SEARCH|SECOND|SELECTCOLUMNS|SELECTEDMEASURE|SELECTEDMEASUREFORMATSTRING|SELECTEDMEASURENAME|SELECTEDVALUE|SIGN|SIN|SINH|SQRT|SQRTPI|STARTOFMONTH|STARTOFQUARTER|STARTOFYEAR|STDEV\.P|STDEV\.S|STDEVX\.P|STDEVX\.S|SUBSTITUTE|SUBSTITUTEWITHINDEX|SUM|SUMMARIZE|SUMMARIZECOLUMNS|SUMX|SWITCH|T\.DIST|T\.DIST\.2T|T\.DIST\.RT|T\.INV|T\.INV\.2T|TAN|TANH|TIME|TIMEVALUE|TODAY|TOPN|TOPNPERLEVEL|TOPNSKIP|TOTALMTD|TOTALQTD|TOTALYTD|TREATAS|TRIM|TRUE|TRUNC|UNICHAR|UNICODE|UNION|UPPER|USERELATIONSHIP|USERNAME|USEROBJECTID|USERPRINCIPALNAME|UTCNOW|UTCTODAY|VALUE|VALUES|VAR\.P|VAR\.S|VARX\.P|VARX\.S|WEEKDAY|WEEKNUM|XIRR|XNPV|YEAR|YEARFRAC)(?=\s*\()/i,
                keyword: /\b(?:DEFINE|MEASURE|EVALUATE|ORDER\s+BY|RETURN|VAR|START\s+AT|ASC|DESC)\b/i,
                boolean: {
                    pattern: /\b(?:TRUE|FALSE|NULL)\b/i,
                    alias: "constant"
                },
                number: /\b\d+(?:\.\d*)?|\B\.\d+\b/i,
                operator: /:=|[-+*\/=^]|&&?|\|\||<(?:=>?|<|>)?|>[>=]?|\b(?:IN|NOT)\b/i,
                punctuation: /[;\[\](){}`,.]/
            }
        }
        e.exports = a,
        a.displayName = "dax",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.dhall = {
                comment: /--.*|\{-(?:[^-{]|-(?!\})|\{(?!-)|\{-(?:[^-{]|-(?!\})|\{(?!-))*-\})*-\}/,
                string: {
                    pattern: /"(?:[^"\\]|\\.)*"|''(?:[^']|'(?!')|'''|''\$\{)*''(?!'|\$)/,
                    greedy: !0,
                    inside: {
                        interpolation: {
                            pattern: /\$\{[^{}]*\}/,
                            inside: {
                                expression: {
                                    pattern: /(^\$\{)[\s\S]+(?=\}$)/,
                                    lookbehind: !0,
                                    alias: "language-dhall",
                                    inside: null
                                },
                                punctuation: /\$\{|\}/
                            }
                        }
                    }
                },
                label: {
                    pattern: /`[^`]*`/,
                    greedy: !0
                },
                url: {
                    pattern: /\bhttps?:\/\/[\w.:%!$&'*+;=@~-]+(?:\/[\w.:%!$&'*+;=@~-]*)*(?:\?[/?\w.:%!$&'*+;=@~-]*)?/,
                    greedy: !0
                },
                env: {
                    pattern: /\benv:(?:(?!\d)\w+|"(?:[^"\\=]|\\.)*")/,
                    greedy: !0,
                    inside: {
                        function: /^env/,
                        operator: /^:/,
                        variable: /[\s\S]+/
                    }
                },
                hash: {
                    pattern: /\bsha256:[\da-fA-F]{64}\b/,
                    inside: {
                        function: /sha256/,
                        operator: /:/,
                        number: /[\da-fA-F]{64}/
                    }
                },
                keyword: /\b(?:as|assert|else|forall|if|in|let|merge|missing|then|toMap|using|with)\b|\u2200/,
                builtin: /\b(?:Some|None)\b/,
                boolean: /\b(?:False|True)\b/,
                number: /\bNaN\b|-?\bInfinity\b|[+-]?\b(?:0x[\da-fA-F]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b/,
                operator: /\/\\|\/\/\\\\|&&|\|\||===|[!=]=|\/\/|->|\+\+|::|[+*#@=:?<>|\\\u2227\u2a53\u2261\u2afd\u03bb\u2192]/,
                punctuation: /\.\.|[{}\[\](),./]/,
                "class-name": /\b[A-Z]\w*\b/
            },
            e.languages.dhall.string.inside.interpolation.inside.expression.inside = e.languages.dhall
        }
        e.exports = a,
        a.displayName = "dhall",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                e.languages.diff = {
                    coord: [/^(?:\*{3}|-{3}|\+{3}).*$/m, /^@@.*@@$/m, /^\d.*$/m]
                };
                var t = {
                    "deleted-sign": "-",
                    "deleted-arrow": "<",
                    "inserted-sign": "+",
                    "inserted-arrow": ">",
                    unchanged: " ",
                    diff: "!"
                };
                Object.keys(t).forEach((function(n) {
                    var a = t[n]
                      , r = [];
                    /^\w+$/.test(n) || r.push(/\w+/.exec(n)[0]),
                    "diff" === n && r.push("bold"),
                    e.languages.diff[n] = {
                        pattern: RegExp("^(?:[" + a + "].*(?:\r\n?|\n|(?![\\s\\S])))+", "m"),
                        alias: r,
                        inside: {
                            line: {
                                pattern: /(.)(?=[\s\S]).*(?:\r\n?|\n)?/,
                                lookbehind: !0
                            },
                            prefix: {
                                pattern: /[\s\S]/,
                                alias: /\w+/.exec(n)[0]
                            }
                        }
                    }
                }
                )),
                Object.defineProperty(e.languages.diff, "PREFIXES", {
                    value: t
                })
            }(e)
        }
        e.exports = a,
        a.displayName = "diff",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        var a = n(156);
        function r(e) {
            e.register(a),
            function(e) {
                e.languages.django = {
                    comment: /^\{#[\s\S]*?#\}$/,
                    tag: {
                        pattern: /(^\{%[+-]?\s*)\w+/,
                        lookbehind: !0,
                        alias: "keyword"
                    },
                    delimiter: {
                        pattern: /^\{[{%][+-]?|[+-]?[}%]\}$/,
                        alias: "punctuation"
                    },
                    string: {
                        pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
                        greedy: !0
                    },
                    filter: {
                        pattern: /(\|)\w+/,
                        lookbehind: !0,
                        alias: "function"
                    },
                    test: {
                        pattern: /(\bis\s+(?:not\s+)?)(?!not\b)\w+/,
                        lookbehind: !0,
                        alias: "function"
                    },
                    function: /\b[a-z_]\w+(?=\s*\()/i,
                    keyword: /\b(?:and|as|by|else|for|if|import|in|is|loop|not|or|recursive|with|without)\b/,
                    operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
                    number: /\b\d+(?:\.\d+)?\b/,
                    boolean: /[Tt]rue|[Ff]alse|[Nn]one/,
                    variable: /\b\w+?\b/,
                    punctuation: /[{}[\](),.:;]/
                };
                var t = /\{\{[\s\S]*?\}\}|\{%[\s\S]*?%\}|\{#[\s\S]*?#\}/g
                  , n = e.languages["markup-templating"];
                e.hooks.add("before-tokenize", (function(e) {
                    n.buildPlaceholders(e, "django", t)
                }
                )),
                e.hooks.add("after-tokenize", (function(e) {
                    n.tokenizePlaceholders(e, "django")
                }
                )),
                e.languages.jinja2 = e.languages.django,
                e.hooks.add("before-tokenize", (function(e) {
                    n.buildPlaceholders(e, "jinja2", t)
                }
                )),
                e.hooks.add("after-tokenize", (function(e) {
                    n.tokenizePlaceholders(e, "jinja2")
                }
                ))
            }(e)
        }
        e.exports = r,
        r.displayName = "django",
        r.aliases = ["jinja2"]
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages["dns-zone-file"] = {
                comment: /;.*/,
                string: {
                    pattern: /"(?:\\.|[^"\\\r\n])*"/,
                    greedy: !0
                },
                variable: [{
                    pattern: /(^\$ORIGIN[ \t]+)\S+/m,
                    lookbehind: !0
                }, {
                    pattern: /(^|\s)@(?=\s|$)/,
                    lookbehind: !0
                }],
                keyword: /^\$(?:ORIGIN|INCLUDE|TTL)(?=\s|$)/m,
                class: {
                    pattern: /(^|\s)(?:IN|CH|CS|HS)(?=\s|$)/,
                    lookbehind: !0,
                    alias: "keyword"
                },
                type: {
                    pattern: /(^|\s)(?:A|A6|AAAA|AFSDB|APL|ATMA|CAA|CDNSKEY|CDS|CERT|CNAME|DHCID|DLV|DNAME|DNSKEY|DS|EID|GID|GPOS|HINFO|HIP|IPSECKEY|ISDN|KEY|KX|LOC|MAILA|MAILB|MB|MD|MF|MG|MINFO|MR|MX|NAPTR|NB|NBSTAT|NIMLOC|NINFO|NS|NSAP|NSAP-PTR|NSEC|NSEC3|NSEC3PARAM|NULL|NXT|OPENPGPKEY|PTR|PX|RKEY|RP|RRSIG|RT|SIG|SINK|SMIMEA|SOA|SPF|SRV|SSHFP|TA|TKEY|TLSA|TSIG|TXT|UID|UINFO|UNSPEC|URI|WKS|X25)(?=\s|$)/,
                    lookbehind: !0,
                    alias: "keyword"
                },
                punctuation: /[()]/
            },
            e.languages["dns-zone"] = e.languages["dns-zone-file"]
        }
        e.exports = a,
        a.displayName = "dnsZoneFile",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                var t = /\\[\r\n](?:\s|\\[\r\n]|#.*(?!.))*(?![\s#]|\\[\r\n])/.source
                  , n = /(?:[ \t]+(?![ \t])(?:<SP_BS>)?|<SP_BS>)/.source.replace(/<SP_BS>/g, (function() {
                    return t
                }
                ))
                  , a = /"(?:[^"\\\r\n]|\\(?:\r\n|[\s\S]))*"|'(?:[^'\\\r\n]|\\(?:\r\n|[\s\S]))*'/.source
                  , r = /--[\w-]+=(?:<STR>|(?!["'])(?:[^\s\\]|\\.)+)/.source.replace(/<STR>/g, (function() {
                    return a
                }
                ))
                  , i = {
                    pattern: RegExp(a),
                    greedy: !0
                }
                  , o = {
                    pattern: /(^[ \t]*)#.*/m,
                    lookbehind: !0,
                    greedy: !0
                };
                function s(e, t) {
                    return e = e.replace(/<OPT>/g, (function() {
                        return r
                    }
                    )).replace(/<SP>/g, (function() {
                        return n
                    }
                    )),
                    RegExp(e, t)
                }
                e.languages.docker = {
                    instruction: {
                        pattern: /(^[ \t]*)(?:ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|ONBUILD|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR)(?=\s)(?:\\.|[^\r\n\\])*(?:\\$(?:\s|#.*$)*(?![\s#])(?:\\.|[^\r\n\\])*)*/im,
                        lookbehind: !0,
                        greedy: !0,
                        inside: {
                            options: {
                                pattern: s(/(^(?:ONBUILD<SP>)?\w+<SP>)<OPT>(?:<SP><OPT>)*/.source, "i"),
                                lookbehind: !0,
                                greedy: !0,
                                inside: {
                                    property: {
                                        pattern: /(^|\s)--[\w-]+/,
                                        lookbehind: !0
                                    },
                                    string: [i, {
                                        pattern: /(=)(?!["'])(?:[^\s\\]|\\.)+/,
                                        lookbehind: !0
                                    }],
                                    operator: /\\$/m,
                                    punctuation: /=/
                                }
                            },
                            keyword: [{
                                pattern: s(/(^(?:ONBUILD<SP>)?HEALTHCHECK<SP>(?:<OPT><SP>)*)(?:CMD|NONE)\b/.source, "i"),
                                lookbehind: !0,
                                greedy: !0
                            }, {
                                pattern: s(/(^(?:ONBUILD<SP>)?FROM<SP>(?:<OPT><SP>)*(?!--)[^ \t\\]+<SP>)AS/.source, "i"),
                                lookbehind: !0,
                                greedy: !0
                            }, {
                                pattern: s(/(^ONBUILD<SP>)\w+/.source, "i"),
                                lookbehind: !0,
                                greedy: !0
                            }, {
                                pattern: /^\w+/,
                                greedy: !0
                            }],
                            comment: o,
                            string: i,
                            variable: /\$(?:\w+|\{[^{}"'\\]*\})/,
                            operator: /\\$/m
                        }
                    },
                    comment: o
                },
                e.languages.dockerfile = e.languages.docker
            }(e)
        }
        e.exports = a,
        a.displayName = "docker",
        a.aliases = ["dockerfile"]
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                var t = "(?:" + [/[a-zA-Z_\x80-\uFFFF][\w\x80-\uFFFF]*/.source, /-?(?:\.\d+|\d+(?:\.\d*)?)/.source, /"[^"\\]*(?:\\[\s\S][^"\\]*)*"/.source, /<(?:[^<>]|(?!<!--)<(?:[^<>"']|"[^"]*"|'[^']*')+>|<!--(?:[^-]|-(?!->))*-->)*>/.source].join("|") + ")"
                  , n = {
                    markup: {
                        pattern: /(^<)[\s\S]+(?=>$)/,
                        lookbehind: !0,
                        alias: ["language-markup", "language-html", "language-xml"],
                        inside: e.languages.markup
                    }
                };
                function a(e, n) {
                    return RegExp(e.replace(/<ID>/g, (function() {
                        return t
                    }
                    )), n)
                }
                e.languages.dot = {
                    comment: {
                        pattern: /\/\/.*|\/\*[\s\S]*?\*\/|^#.*/m,
                        greedy: !0
                    },
                    "graph-name": {
                        pattern: a(/(\b(?:digraph|graph|subgraph)[ \t\r\n]+)<ID>/.source, "i"),
                        lookbehind: !0,
                        greedy: !0,
                        alias: "class-name",
                        inside: n
                    },
                    "attr-value": {
                        pattern: a(/(=[ \t\r\n]*)<ID>/.source),
                        lookbehind: !0,
                        greedy: !0,
                        inside: n
                    },
                    "attr-name": {
                        pattern: a(/([\[;, \t\r\n])<ID>(?=[ \t\r\n]*=)/.source),
                        lookbehind: !0,
                        greedy: !0,
                        inside: n
                    },
                    keyword: /\b(?:digraph|edge|graph|node|strict|subgraph)\b/i,
                    "compass-point": {
                        pattern: /(:[ \t\r\n]*)(?:[ns][ew]?|[ewc_])(?![\w\x80-\uFFFF])/,
                        lookbehind: !0,
                        alias: "builtin"
                    },
                    node: {
                        pattern: a(/(^|[^-.\w\x80-\uFFFF\\])<ID>/.source),
                        lookbehind: !0,
                        greedy: !0,
                        inside: n
                    },
                    operator: /[=:]|-[->]/,
                    punctuation: /[\[\]{};,]/
                },
                e.languages.gv = e.languages.dot
            }(e)
        }
        e.exports = a,
        a.displayName = "dot",
        a.aliases = ["gv"]
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.ebnf = {
                comment: /\(\*[\s\S]*?\*\)/,
                string: {
                    pattern: /"[^"\r\n]*"|'[^'\r\n]*'/,
                    greedy: !0
                },
                special: {
                    pattern: /\?[^?\r\n]*\?/,
                    greedy: !0,
                    alias: "class-name"
                },
                definition: {
                    pattern: /^([\t ]*)[a-z]\w*(?:[ \t]+[a-z]\w*)*(?=\s*=)/im,
                    lookbehind: !0,
                    alias: ["rule", "keyword"]
                },
                rule: /\b[a-z]\w*(?:[ \t]+[a-z]\w*)*\b/i,
                punctuation: /\([:/]|[:/]\)|[.,;()[\]{}]/,
                operator: /[-=|*/!]/
            }
        }
        e.exports = a,
        a.displayName = "ebnf",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.editorconfig = {
                comment: /[;#].*/,
                section: {
                    pattern: /(^[ \t]*)\[.+\]/m,
                    lookbehind: !0,
                    alias: "keyword",
                    inside: {
                        regex: /\\\\[\[\]{},!?.*]/,
                        operator: /[!?]|\.\.|\*{1,2}/,
                        punctuation: /[\[\]{},]/
                    }
                },
                property: {
                    pattern: /(^[ \t]*)[^\s=]+(?=[ \t]*=)/m,
                    lookbehind: !0
                },
                value: {
                    pattern: /=.*/,
                    alias: "string",
                    inside: {
                        punctuation: /^=/
                    }
                }
            }
        }
        e.exports = a,
        a.displayName = "editorconfig",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.eiffel = {
                comment: /--.*/,
                string: [{
                    pattern: /"([^[]*)\[[\s\S]*?\]\1"/,
                    greedy: !0
                }, {
                    pattern: /"([^{]*)\{[\s\S]*?\}\1"/,
                    greedy: !0
                }, {
                    pattern: /"(?:%(?:(?!\n)\s)*\n\s*%|%\S|[^%"\r\n])*"/,
                    greedy: !0
                }],
                char: /'(?:%.|[^%'\r\n])+'/,
                keyword: /\b(?:across|agent|alias|all|and|attached|as|assign|attribute|check|class|convert|create|Current|debug|deferred|detachable|do|else|elseif|end|ensure|expanded|export|external|feature|from|frozen|if|implies|inherit|inspect|invariant|like|local|loop|not|note|obsolete|old|once|or|Precursor|redefine|rename|require|rescue|Result|retry|select|separate|some|then|undefine|until|variant|Void|when|xor)\b/i,
                boolean: /\b(?:True|False)\b/i,
                "class-name": {
                    pattern: /\b[A-Z][\dA-Z_]*\b/,
                    alias: "builtin"
                },
                number: [/\b0[xcb][\da-f](?:_*[\da-f])*\b/i, /(?:\b\d(?:_*\d)*)?\.(?:(?:\d(?:_*\d)*)?e[+-]?)?\d(?:_*\d)*\b|\b\d(?:_*\d)*\b\.?/i],
                punctuation: /:=|<<|>>|\(\||\|\)|->|\.(?=\w)|[{}[\];(),:?]/,
                operator: /\\\\|\|\.\.\||\.\.|\/[~\/=]?|[><]=?|[-+*^=~]/
            }
        }
        e.exports = a,
        a.displayName = "eiffel",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        var a = n(156);
        function r(e) {
            e.register(a),
            function(e) {
                e.languages.ejs = {
                    delimiter: {
                        pattern: /^<%[-_=]?|[-_]?%>$/,
                        alias: "punctuation"
                    },
                    comment: /^#[\s\S]*/,
                    "language-javascript": {
                        pattern: /[\s\S]+/,
                        inside: e.languages.javascript
                    }
                },
                e.hooks.add("before-tokenize", (function(t) {
                    e.languages["markup-templating"].buildPlaceholders(t, "ejs", /<%(?!%)[\s\S]+?%>/g)
                }
                )),
                e.hooks.add("after-tokenize", (function(t) {
                    e.languages["markup-templating"].tokenizePlaceholders(t, "ejs")
                }
                )),
                e.languages.eta = e.languages.ejs
            }(e)
        }
        e.exports = r,
        r.displayName = "ejs",
        r.aliases = ["eta"]
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.elixir = {
                doc: {
                    pattern: /@(?:doc|moduledoc)\s+(?:("""|''')[\s\S]*?\1|("|')(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2)/,
                    inside: {
                        attribute: /^@\w+/,
                        string: /['"][\s\S]+/
                    }
                },
                comment: {
                    pattern: /#.*/m,
                    greedy: !0
                },
                regex: {
                    pattern: /~[rR](?:("""|''')(?:\\[\s\S]|(?!\1)[^\\])+\1|([\/|"'])(?:\\.|(?!\2)[^\\\r\n])+\2|\((?:\\.|[^\\)\r\n])+\)|\[(?:\\.|[^\\\]\r\n])+\]|\{(?:\\.|[^\\}\r\n])+\}|<(?:\\.|[^\\>\r\n])+>)[uismxfr]*/,
                    greedy: !0
                },
                string: [{
                    pattern: /~[cCsSwW](?:("""|''')(?:\\[\s\S]|(?!\1)[^\\])+\1|([\/|"'])(?:\\.|(?!\2)[^\\\r\n])+\2|\((?:\\.|[^\\)\r\n])+\)|\[(?:\\.|[^\\\]\r\n])+\]|\{(?:\\.|#\{[^}]+\}|#(?!\{)|[^#\\}\r\n])+\}|<(?:\\.|[^\\>\r\n])+>)[csa]?/,
                    greedy: !0,
                    inside: {}
                }, {
                    pattern: /("""|''')[\s\S]*?\1/,
                    greedy: !0,
                    inside: {}
                }, {
                    pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
                    greedy: !0,
                    inside: {}
                }],
                atom: {
                    pattern: /(^|[^:]):\w+/,
                    lookbehind: !0,
                    alias: "symbol"
                },
                module: {
                    pattern: /\b[A-Z]\w*\b/,
                    alias: "class-name"
                },
                "attr-name": /\b\w+\??:(?!:)/,
                argument: {
                    pattern: /(^|[^&])&\d+/,
                    lookbehind: !0,
                    alias: "variable"
                },
                attribute: {
                    pattern: /@\w+/,
                    alias: "variable"
                },
                function: /\b[_a-zA-Z]\w*[?!]?(?:(?=\s*(?:\.\s*)?\()|(?=\/\d))/,
                number: /\b(?:0[box][a-f\d_]+|\d[\d_]*)(?:\.[\d_]+)?(?:e[+-]?[\d_]+)?\b/i,
                keyword: /\b(?:after|alias|and|case|catch|cond|def(?:callback|delegate|exception|impl|macro|module|n|np|p|protocol|struct)?|do|else|end|fn|for|if|import|not|or|quote|raise|require|rescue|try|unless|unquote|use|when)\b/,
                boolean: /\b(?:true|false|nil)\b/,
                operator: [/\bin\b|&&?|\|[|>]?|\\\\|::|\.\.\.?|\+\+?|-[->]?|<[-=>]|>=|!==?|\B!|=(?:==?|[>~])?|[*\/^]/, {
                    pattern: /([^<])<(?!<)/,
                    lookbehind: !0
                }, {
                    pattern: /([^>])>(?!>)/,
                    lookbehind: !0
                }],
                punctuation: /<<|>>|[.,%\[\]{}()]/
            },
            e.languages.elixir.string.forEach((function(t) {
                t.inside = {
                    interpolation: {
                        pattern: /#\{[^}]+\}/,
                        inside: {
                            delimiter: {
                                pattern: /^#\{|\}$/,
                                alias: "punctuation"
                            },
                            rest: e.languages.elixir
                        }
                    }
                }
            }
            ))
        }
        e.exports = a,
        a.displayName = "elixir",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.elm = {
                comment: /--.*|\{-[\s\S]*?-\}/,
                char: {
                    pattern: /'(?:[^\\'\r\n]|\\(?:[abfnrtv\\']|\d+|x[0-9a-fA-F]+))'/,
                    greedy: !0
                },
                string: [{
                    pattern: /"""[\s\S]*?"""/,
                    greedy: !0
                }, {
                    pattern: /"(?:[^\\"\r\n]|\\.)*"/,
                    greedy: !0
                }],
                "import-statement": {
                    pattern: /(^[\t ]*)import\s+[A-Z]\w*(?:\.[A-Z]\w*)*(?:\s+as\s+(?:[A-Z]\w*)(?:\.[A-Z]\w*)*)?(?:\s+exposing\s+)?/m,
                    lookbehind: !0,
                    inside: {
                        keyword: /\b(?:import|as|exposing)\b/
                    }
                },
                keyword: /\b(?:alias|as|case|else|exposing|if|in|infixl|infixr|let|module|of|then|type)\b/,
                builtin: /\b(?:abs|acos|always|asin|atan|atan2|ceiling|clamp|compare|cos|curry|degrees|e|flip|floor|fromPolar|identity|isInfinite|isNaN|logBase|max|min|negate|never|not|pi|radians|rem|round|sin|sqrt|tan|toFloat|toPolar|toString|truncate|turns|uncurry|xor)\b/,
                number: /\b(?:\d+(?:\.\d+)?(?:e[+-]?\d+)?|0x[0-9a-f]+)\b/i,
                operator: /\s\.\s|[+\-/*=.$<>:&|^?%#@~!]{2,}|[+\-/*=$<>:&|^?%#@~!]/,
                hvariable: /\b(?:[A-Z]\w*\.)*[a-z]\w*\b/,
                constant: /\b(?:[A-Z]\w*\.)*[A-Z]\w*\b/,
                punctuation: /[{}[\]|(),.:]/
            }
        }
        e.exports = a,
        a.displayName = "elm",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        var a = n(174)
          , r = n(156);
        function i(e) {
            e.register(a),
            e.register(r),
            function(e) {
                e.languages.erb = e.languages.extend("ruby", {}),
                e.languages.insertBefore("erb", "comment", {
                    delimiter: {
                        pattern: /^<%=?|%>$/,
                        alias: "punctuation"
                    }
                }),
                e.hooks.add("before-tokenize", (function(t) {
                    e.languages["markup-templating"].buildPlaceholders(t, "erb", /<%=?(?:[^\r\n]|[\r\n](?!=begin)|[\r\n]=begin\s(?:[^\r\n]|[\r\n](?!=end))*[\r\n]=end)+?%>/gm)
                }
                )),
                e.hooks.add("after-tokenize", (function(t) {
                    e.languages["markup-templating"].tokenizePlaceholders(t, "erb")
                }
                ))
            }(e)
        }
        e.exports = i,
        i.displayName = "erb",
        i.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.erlang = {
                comment: /%.+/,
                string: {
                    pattern: /"(?:\\.|[^\\"\r\n])*"/,
                    greedy: !0
                },
                "quoted-function": {
                    pattern: /'(?:\\.|[^\\'\r\n])+'(?=\()/,
                    alias: "function"
                },
                "quoted-atom": {
                    pattern: /'(?:\\.|[^\\'\r\n])+'/,
                    alias: "atom"
                },
                boolean: /\b(?:true|false)\b/,
                keyword: /\b(?:fun|when|case|of|end|if|receive|after|try|catch)\b/,
                number: [/\$\\?./, /\b\d+#[a-z0-9]+/i, /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i],
                function: /\b[a-z][\w@]*(?=\()/,
                variable: {
                    pattern: /(^|[^@])(?:\b|\?)[A-Z_][\w@]*/,
                    lookbehind: !0
                },
                operator: [/[=\/<>:]=|=[:\/]=|\+\+?|--?|[=*\/!]|\b(?:bnot|div|rem|band|bor|bxor|bsl|bsr|not|and|or|xor|orelse|andalso)\b/, {
                    pattern: /(^|[^<])<(?!<)/,
                    lookbehind: !0
                }, {
                    pattern: /(^|[^>])>(?!>)/,
                    lookbehind: !0
                }],
                atom: /\b[a-z][\w@]*/,
                punctuation: /[()[\]{}:;,.#|]|<<|>>/
            }
        }
        e.exports = a,
        a.displayName = "erlang",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        var a = n(244)
          , r = n(156);
        function i(e) {
            e.register(a),
            e.register(r),
            function(e) {
                e.languages.etlua = {
                    delimiter: {
                        pattern: /^<%[-=]?|-?%>$/,
                        alias: "punctuation"
                    },
                    "language-lua": {
                        pattern: /[\s\S]+/,
                        inside: e.languages.lua
                    }
                },
                e.hooks.add("before-tokenize", (function(t) {
                    e.languages["markup-templating"].buildPlaceholders(t, "etlua", /<%[\s\S]+?%>/g)
                }
                )),
                e.hooks.add("after-tokenize", (function(t) {
                    e.languages["markup-templating"].tokenizePlaceholders(t, "etlua")
                }
                ))
            }(e)
        }
        e.exports = i,
        i.displayName = "etlua",
        i.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages["excel-formula"] = {
                comment: {
                    pattern: /(\bN\(\s*)"(?:[^"]|"")*"(?=\s*\))/i,
                    lookbehind: !0,
                    greedy: !0
                },
                string: {
                    pattern: /"(?:[^"]|"")*"(?!")/,
                    greedy: !0
                },
                reference: {
                    pattern: /(?:'[^']*'|(?:[^\s()[\]{}<>*?"';,$&]*\[[^^\s()[\]{}<>*?"']+\])?\w+)!/,
                    greedy: !0,
                    alias: "string",
                    inside: {
                        operator: /!$/,
                        punctuation: /'/,
                        sheet: {
                            pattern: /[^[\]]+$/,
                            alias: "function"
                        },
                        file: {
                            pattern: /\[[^[\]]+\]$/,
                            inside: {
                                punctuation: /[[\]]/
                            }
                        },
                        path: /[\s\S]+/
                    }
                },
                "function-name": {
                    pattern: /\b[A-Z]\w*(?=\()/i,
                    alias: "keyword"
                },
                range: {
                    pattern: /\$?\b(?:[A-Z]+\$?\d+:\$?[A-Z]+\$?\d+|[A-Z]+:\$?[A-Z]+|\d+:\$?\d+)\b/i,
                    alias: "property",
                    inside: {
                        operator: /:/,
                        cell: /\$?[A-Z]+\$?\d+/i,
                        column: /\$?[A-Z]+/i,
                        row: /\$?\d+/
                    }
                },
                cell: {
                    pattern: /\b[A-Z]+\d+\b|\$[A-Za-z]+\$?\d+\b|\b[A-Za-z]+\$\d+\b/,
                    alias: "property"
                },
                number: /(?:\b\d+(?:\.\d+)?|\B\.\d+)(?:e[+-]?\d+)?\b/i,
                boolean: /\b(?:TRUE|FALSE)\b/i,
                operator: /[-+*/^%=&,]|<[=>]?|>=?/,
                punctuation: /[[\]();{}|]/
            },
            e.languages.xlsx = e.languages.xls = e.languages["excel-formula"]
        }
        e.exports = a,
        a.displayName = "excelFormula",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                var t = {
                    function: /\b(?:TODOS?|FIX(?:MES?)?|NOTES?|BUGS?|XX+|HACKS?|WARN(?:ING)?|\?{2,}|!{2,})\b/
                }
                  , n = {
                    number: /\\[^\s']|%\w/
                }
                  , a = {
                    comment: [{
                        pattern: /(^|\s)(?:! .*|!$)/,
                        lookbehind: !0,
                        inside: t
                    }, {
                        pattern: /(^|\s)\/\*\s[\s\S]*?\*\/(?=\s|$)/,
                        lookbehind: !0,
                        greedy: !0,
                        inside: t
                    }, {
                        pattern: /(^|\s)!\[(={0,6})\[\s[\s\S]*?\]\2\](?=\s|$)/,
                        lookbehind: !0,
                        greedy: !0,
                        inside: t
                    }],
                    number: [{
                        pattern: /(^|\s)[+-]?\d+(?=\s|$)/,
                        lookbehind: !0
                    }, {
                        pattern: /(^|\s)[+-]?0(?:b[01]+|o[0-7]+|d\d+|x[\dA-F]+)(?=\s|$)/i,
                        lookbehind: !0
                    }, {
                        pattern: /(^|\s)[+-]?\d+\/\d+\.?(?=\s|$)/,
                        lookbehind: !0
                    }, {
                        pattern: /(^|\s)\+?\d+\+\d+\/\d+(?=\s|$)/,
                        lookbehind: !0
                    }, {
                        pattern: /(^|\s)-\d+-\d+\/\d+(?=\s|$)/,
                        lookbehind: !0
                    }, {
                        pattern: /(^|\s)[+-]?(?:\d*\.\d+|\d+\.\d*|\d+)(?:e[+-]?\d+)?(?=\s|$)/i,
                        lookbehind: !0
                    }, {
                        pattern: /(^|\s)NAN:\s+[\da-fA-F]+(?=\s|$)/,
                        lookbehind: !0
                    }, {
                        pattern: /(^|\s)[+-]?0(?:b1\.[01]*|o1\.[0-7]*|d1\.\d*|x1\.[\dA-F]*)p\d+(?=\s|$)/i,
                        lookbehind: !0
                    }],
                    regexp: {
                        pattern: /(^|\s)R\/\s(?:\\\S|[^\\/])*\/(?:[idmsr]*|[idmsr]+-[idmsr]+)(?=\s|$)/,
                        lookbehind: !0,
                        alias: "number",
                        inside: {
                            variable: /\\\S/,
                            keyword: /[+?*\[\]^$(){}.|]/,
                            operator: {
                                pattern: /(\/)[idmsr]+(?:-[idmsr]+)?/,
                                lookbehind: !0
                            }
                        }
                    },
                    boolean: {
                        pattern: /(^|\s)[tf](?=\s|$)/,
                        lookbehind: !0
                    },
                    "custom-string": {
                        pattern: /(^|\s)[A-Z0-9\-]+"\s(?:\\\S|[^"\\])*"/,
                        lookbehind: !0,
                        greedy: !0,
                        alias: "string",
                        inside: {
                            number: /\\\S|%\w|\//
                        }
                    },
                    "multiline-string": [{
                        pattern: /(^|\s)STRING:\s+\S+(?:\n|\r\n).*(?:\n|\r\n)\s*;(?=\s|$)/,
                        lookbehind: !0,
                        greedy: !0,
                        alias: "string",
                        inside: {
                            number: n.number,
                            "semicolon-or-setlocal": {
                                pattern: /([\r\n][ \t]*);(?=\s|$)/,
                                lookbehind: !0,
                                alias: "function"
                            }
                        }
                    }, {
                        pattern: /(^|\s)HEREDOC:\s+\S+(?:\n|\r\n).*(?:\n|\r\n)\s*\S+(?=\s|$)/,
                        lookbehind: !0,
                        greedy: !0,
                        alias: "string",
                        inside: n
                    }, {
                        pattern: /(^|\s)\[(={0,6})\[\s[\s\S]*?\]\2\](?=\s|$)/,
                        lookbehind: !0,
                        greedy: !0,
                        alias: "string",
                        inside: n
                    }],
                    "special-using": {
                        pattern: /(^|\s)USING:(?:\s\S+)*(?=\s+;(?:\s|$))/,
                        lookbehind: !0,
                        alias: "function",
                        inside: {
                            string: {
                                pattern: /(\s)[^:\s]+/,
                                lookbehind: !0
                            }
                        }
                    },
                    "stack-effect-delimiter": [{
                        pattern: /(^|\s)(?:call|execute|eval)?\((?=\s)/,
                        lookbehind: !0,
                        alias: "operator"
                    }, {
                        pattern: /(\s)--(?=\s)/,
                        lookbehind: !0,
                        alias: "operator"
                    }, {
                        pattern: /(\s)\)(?=\s|$)/,
                        lookbehind: !0,
                        alias: "operator"
                    }],
                    combinators: {
                        pattern: null,
                        lookbehind: !0,
                        alias: "keyword"
                    },
                    "kernel-builtin": {
                        pattern: null,
                        lookbehind: !0,
                        alias: "variable"
                    },
                    "sequences-builtin": {
                        pattern: null,
                        lookbehind: !0,
                        alias: "variable"
                    },
                    "math-builtin": {
                        pattern: null,
                        lookbehind: !0,
                        alias: "variable"
                    },
                    "constructor-word": {
                        pattern: /(^|\s)<(?!=+>|-+>)\S+>(?=\s|$)/,
                        lookbehind: !0,
                        alias: "keyword"
                    },
                    "other-builtin-syntax": {
                        pattern: null,
                        lookbehind: !0,
                        alias: "operator"
                    },
                    "conventionally-named-word": {
                        pattern: /(^|\s)(?!")(?:(?:set|change|with|new)-\S+|\$\S+|>[^>\s]+|[^:>\s]+>|[^>\s]+>[^>\s]+|\+[^+\s]+\+|[^?\s]+\?|\?[^?\s]+|[^>\s]+>>|>>[^>\s]+|[^<\s]+<<|\([^()\s]+\)|[^!\s]+!|[^*\s]\S*\*|[^.\s]\S*\.)(?=\s|$)/,
                        lookbehind: !0,
                        alias: "keyword"
                    },
                    "colon-syntax": {
                        pattern: /(^|\s)(?:[A-Z0-9\-]+#?)?:{1,2}\s+(?:;\S+|(?!;)\S+)(?=\s|$)/,
                        lookbehind: !0,
                        greedy: !0,
                        alias: "function"
                    },
                    "semicolon-or-setlocal": {
                        pattern: /(\s)(?:;|:>)(?=\s|$)/,
                        lookbehind: !0,
                        alias: "function"
                    },
                    "curly-brace-literal-delimiter": [{
                        pattern: /(^|\s)[a-z]*\{(?=\s)/i,
                        lookbehind: !0,
                        alias: "operator"
                    }, {
                        pattern: /(\s)\}(?=\s|$)/,
                        lookbehind: !0,
                        alias: "operator"
                    }],
                    "quotation-delimiter": [{
                        pattern: /(^|\s)\[(?=\s)/,
                        lookbehind: !0,
                        alias: "operator"
                    }, {
                        pattern: /(\s)\](?=\s|$)/,
                        lookbehind: !0,
                        alias: "operator"
                    }],
                    "normal-word": {
                        pattern: /(^|\s)[^"\s]\S*(?=\s|$)/,
                        lookbehind: !0
                    },
                    string: {
                        pattern: /"(?:\\\S|[^"\\])*"/,
                        greedy: !0,
                        inside: n
                    }
                }
                  , r = function(e) {
                    return (e + "").replace(/([.?*+\^$\[\]\\(){}|\-])/g, "\\$1")
                }
                  , i = function(e) {
                    return new RegExp("(^|\\s)(?:" + e.map(r).join("|") + ")(?=\\s|$)")
                }
                  , o = {
                    "kernel-builtin": ["or", "2nipd", "4drop", "tuck", "wrapper", "nip", "wrapper?", "callstack>array", "die", "dupd", "callstack", "callstack?", "3dup", "hashcode", "pick", "4nip", "build", ">boolean", "nipd", "clone", "5nip", "eq?", "?", "=", "swapd", "2over", "clear", "2dup", "get-retainstack", "not", "tuple?", "dup", "3nipd", "call", "-rotd", "object", "drop", "assert=", "assert?", "-rot", "execute", "boa", "get-callstack", "curried?", "3drop", "pickd", "overd", "over", "roll", "3nip", "swap", "and", "2nip", "rotd", "throw", "(clone)", "hashcode*", "spin", "reach", "4dup", "equal?", "get-datastack", "assert", "2drop", "<wrapper>", "boolean?", "identity-hashcode", "identity-tuple?", "null", "composed?", "new", "5drop", "rot", "-roll", "xor", "identity-tuple", "boolean"],
                    "other-builtin-syntax": ["=======", "recursive", "flushable", ">>", "<<<<<<", "M\\", "B", "PRIVATE>", "\\", "======", "final", "inline", "delimiter", "deprecated", "<PRIVATE", ">>>>>>", "<<<<<<<", "parse-complex", "malformed-complex", "read-only", ">>>>>>>", "call-next-method", "<<", "foldable", "$", "$[", "${"],
                    "sequences-builtin": ["member-eq?", "mismatch", "append", "assert-sequence=", "longer", "repetition", "clone-like", "3sequence", "assert-sequence?", "last-index-from", "reversed", "index-from", "cut*", "pad-tail", "join-as", "remove-eq!", "concat-as", "but-last", "snip", "nths", "nth", "sequence", "longest", "slice?", "<slice>", "remove-nth", "tail-slice", "empty?", "tail*", "member?", "virtual-sequence?", "set-length", "drop-prefix", "iota", "unclip", "bounds-error?", "unclip-last-slice", "non-negative-integer-expected", "non-negative-integer-expected?", "midpoint@", "longer?", "?set-nth", "?first", "rest-slice", "prepend-as", "prepend", "fourth", "sift", "subseq-start", "new-sequence", "?last", "like", "first4", "1sequence", "reverse", "slice", "virtual@", "repetition?", "set-last", "index", "4sequence", "max-length", "set-second", "immutable-sequence", "first2", "first3", "supremum", "unclip-slice", "suffix!", "insert-nth", "tail", "3append", "short", "suffix", "concat", "flip", "immutable?", "reverse!", "2sequence", "sum", "delete-all", "indices", "snip-slice", "<iota>", "check-slice", "sequence?", "head", "append-as", "halves", "sequence=", "collapse-slice", "?second", "slice-error?", "product", "bounds-check?", "bounds-check", "immutable", "virtual-exemplar", "harvest", "remove", "pad-head", "last", "set-fourth", "cartesian-product", "remove-eq", "shorten", "shorter", "reversed?", "shorter?", "shortest", "head-slice", "pop*", "tail-slice*", "but-last-slice", "iota?", "append!", "cut-slice", "new-resizable", "head-slice*", "sequence-hashcode", "pop", "set-nth", "?nth", "second", "join", "immutable-sequence?", "<reversed>", "3append-as", "virtual-sequence", "subseq?", "remove-nth!", "length", "last-index", "lengthen", "assert-sequence", "copy", "move", "third", "first", "tail?", "set-first", "prefix", "bounds-error", "<repetition>", "exchange", "surround", "cut", "min-length", "set-third", "push-all", "head?", "subseq-start-from", "delete-slice", "rest", "sum-lengths", "head*", "infimum", "remove!", "glue", "slice-error", "subseq", "push", "replace-slice", "subseq-as", "unclip-last"],
                    "math-builtin": ["number=", "next-power-of-2", "?1+", "fp-special?", "imaginary-part", "float>bits", "number?", "fp-infinity?", "bignum?", "fp-snan?", "denominator", "gcd", "*", "+", "fp-bitwise=", "-", "u>=", "/", ">=", "bitand", "power-of-2?", "log2-expects-positive", "neg?", "<", "log2", ">", "integer?", "number", "bits>double", "2/", "zero?", "bits>float", "float?", "shift", "ratio?", "rect>", "even?", "ratio", "fp-sign", "bitnot", ">fixnum", "complex?", "/i", "integer>fixnum", "/f", "sgn", ">bignum", "next-float", "u<", "u>", "mod", "recip", "rational", ">float", "2^", "integer", "fixnum?", "neg", "fixnum", "sq", "bignum", ">rect", "bit?", "fp-qnan?", "simple-gcd", "complex", "<fp-nan>", "real", ">fraction", "double>bits", "bitor", "rem", "fp-nan-payload", "real-part", "log2-expects-positive?", "prev-float", "align", "unordered?", "float", "fp-nan?", "abs", "bitxor", "integer>fixnum-strict", "u<=", "odd?", "<=", "/mod", ">integer", "real?", "rational?", "numerator"]
                };
                Object.keys(o).forEach((function(e) {
                    a[e].pattern = i(o[e])
                }
                ));
                a.combinators.pattern = i(["2bi", "while", "2tri", "bi*", "4dip", "both?", "same?", "tri@", "curry", "prepose", "3bi", "?if", "tri*", "2keep", "3keep", "curried", "2keepd", "when", "2bi*", "2tri*", "4keep", "bi@", "keepdd", "do", "unless*", "tri-curry", "if*", "loop", "bi-curry*", "when*", "2bi@", "2tri@", "with", "2with", "either?", "bi", "until", "3dip", "3curry", "tri-curry*", "tri-curry@", "bi-curry", "keepd", "compose", "2dip", "if", "3tri", "unless", "tuple", "keep", "2curry", "tri", "most", "while*", "dip", "composed", "bi-curry@", "find-last-from", "trim-head-slice", "map-as", "each-from", "none?", "trim-tail", "partition", "if-empty", "accumulate*", "reject!", "find-from", "accumulate-as", "collector-for-as", "reject", "map", "map-sum", "accumulate!", "2each-from", "follow", "supremum-by", "map!", "unless-empty", "collector", "padding", "reduce-index", "replicate-as", "infimum-by", "trim-tail-slice", "count", "find-index", "filter", "accumulate*!", "reject-as", "map-integers", "map-find", "reduce", "selector", "interleave", "2map", "filter-as", "binary-reduce", "map-index-as", "find", "produce", "filter!", "replicate", "cartesian-map", "cartesian-each", "find-index-from", "map-find-last", "3map-as", "3map", "find-last", "selector-as", "2map-as", "2map-reduce", "accumulate", "each", "each-index", "accumulate*-as", "when-empty", "all?", "collector-as", "push-either", "new-like", "collector-for", "2selector", "push-if", "2all?", "map-reduce", "3each", "any?", "trim-slice", "2reduce", "change-nth", "produce-as", "2each", "trim", "trim-head", "cartesian-find", "map-index", "if-zero", "each-integer", "unless-zero", "(find-integer)", "when-zero", "find-last-integer", "(all-integers?)", "times", "(each-integer)", "find-integer", "all-integers?", "unless-negative", "if-positive", "when-positive", "when-negative", "unless-positive", "if-negative", "case", "2cleave", "cond>quot", "case>quot", "3cleave", "wrong-values", "to-fixed-point", "alist>quot", "cond", "cleave", "call-effect", "recursive-hashcode", "spread", "deep-spread>quot", "2||", "0||", "n||", "0&&", "2&&", "3||", "1||", "1&&", "n&&", "3&&", "smart-unless*", "keep-inputs", "reduce-outputs", "smart-when*", "cleave>array", "smart-with", "smart-apply", "smart-if", "inputs/outputs", "output>sequence-n", "map-outputs", "map-reduce-outputs", "dropping", "output>array", "smart-map-reduce", "smart-2map-reduce", "output>array-n", "nullary", "input<sequence", "append-outputs", "drop-inputs", "inputs", "smart-2reduce", "drop-outputs", "smart-reduce", "preserving", "smart-when", "outputs", "append-outputs-as", "smart-unless", "smart-if*", "sum-outputs", "input<sequence-unsafe", "output>sequence"]),
                e.languages.factor = a
            }(e)
        }
        e.exports = a,
        a.displayName = "factor",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                e.languages.false = {
                    comment: {
                        pattern: /\{[^}]*\}/
                    },
                    string: {
                        pattern: /"[^"]*"/,
                        greedy: !0
                    },
                    "character-code": {
                        pattern: /'(?:[^\r]|\r\n?)/,
                        alias: "number"
                    },
                    "assembler-code": {
                        pattern: /\d+`/,
                        alias: "important"
                    },
                    number: /\d+/,
                    operator: /[-!#$%&'*+,./:;=>?@\\^_`|~\xdf\xf8]/,
                    punctuation: /\[|\]/,
                    variable: /[a-z]/,
                    "non-standard": {
                        pattern: /[()<BDO\xae]/,
                        alias: "bold"
                    }
                }
            }(e)
        }
        e.exports = a,
        a.displayName = "$false",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages["firestore-security-rules"] = e.languages.extend("clike", {
                comment: /\/\/.*/,
                keyword: /\b(?:allow|function|if|match|null|return|rules_version|service)\b/,
                operator: /&&|\|\||[<>!=]=?|[-+*/%]|\b(?:in|is)\b/
            }),
            delete e.languages["firestore-security-rules"]["class-name"],
            e.languages.insertBefore("firestore-security-rules", "keyword", {
                path: {
                    pattern: /(^|[\s(),])(?:\/(?:[\w\xA0-\uFFFF]+|\{[\w\xA0-\uFFFF]+(?:=\*\*)?\}|\$\([\w\xA0-\uFFFF.]+\)))+/,
                    lookbehind: !0,
                    greedy: !0,
                    inside: {
                        variable: {
                            pattern: /\{[\w\xA0-\uFFFF]+(?:=\*\*)?\}|\$\([\w\xA0-\uFFFF.]+\)/,
                            inside: {
                                operator: /=/,
                                keyword: /\*\*/,
                                punctuation: /[.$(){}]/
                            }
                        },
                        punctuation: /\//
                    }
                },
                method: {
                    pattern: /(\ballow\s+)[a-z]+(?:\s*,\s*[a-z]+)*(?=\s*[:;])/,
                    lookbehind: !0,
                    alias: "builtin",
                    inside: {
                        punctuation: /,/
                    }
                }
            })
        }
        e.exports = a,
        a.displayName = "firestoreSecurityRules",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                e.languages.flow = e.languages.extend("javascript", {}),
                e.languages.insertBefore("flow", "keyword", {
                    type: [{
                        pattern: /\b(?:[Nn]umber|[Ss]tring|[Bb]oolean|Function|any|mixed|null|void)\b/,
                        alias: "tag"
                    }]
                }),
                e.languages.flow["function-variable"].pattern = /(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/i,
                delete e.languages.flow.parameter,
                e.languages.insertBefore("flow", "operator", {
                    "flow-punctuation": {
                        pattern: /\{\||\|\}/,
                        alias: "punctuation"
                    }
                }),
                Array.isArray(e.languages.flow.keyword) || (e.languages.flow.keyword = [e.languages.flow.keyword]),
                e.languages.flow.keyword.unshift({
                    pattern: /(^|[^$]\b)(?:type|opaque|declare|Class)\b(?!\$)/,
                    lookbehind: !0
                }, {
                    pattern: /(^|[^$]\B)\$(?:await|Diff|Exact|Keys|ObjMap|PropertyType|Shape|Record|Supertype|Subtype|Enum)\b(?!\$)/,
                    lookbehind: !0
                })
            }(e)
        }
        e.exports = a,
        a.displayName = "flow",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.fortran = {
                "quoted-number": {
                    pattern: /[BOZ](['"])[A-F0-9]+\1/i,
                    alias: "number"
                },
                string: {
                    pattern: /(?:\b\w+_)?(['"])(?:\1\1|&(?:\r\n?|\n)(?:[ \t]*!.*(?:\r\n?|\n)|(?![ \t]*!))|(?!\1).)*(?:\1|&)/,
                    inside: {
                        comment: {
                            pattern: /(&(?:\r\n?|\n)\s*)!.*/,
                            lookbehind: !0
                        }
                    }
                },
                comment: {
                    pattern: /!.*/,
                    greedy: !0
                },
                boolean: /\.(?:TRUE|FALSE)\.(?:_\w+)?/i,
                number: /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[ED][+-]?\d+)?(?:_\w+)?/i,
                keyword: [/\b(?:INTEGER|REAL|DOUBLE ?PRECISION|COMPLEX|CHARACTER|LOGICAL)\b/i, /\b(?:END ?)?(?:BLOCK ?DATA|DO|FILE|FORALL|FUNCTION|IF|INTERFACE|MODULE(?! PROCEDURE)|PROGRAM|SELECT|SUBROUTINE|TYPE|WHERE)\b/i, /\b(?:ALLOCATABLE|ALLOCATE|BACKSPACE|CALL|CASE|CLOSE|COMMON|CONTAINS|CONTINUE|CYCLE|DATA|DEALLOCATE|DIMENSION|DO|END|EQUIVALENCE|EXIT|EXTERNAL|FORMAT|GO ?TO|IMPLICIT(?: NONE)?|INQUIRE|INTENT|INTRINSIC|MODULE PROCEDURE|NAMELIST|NULLIFY|OPEN|OPTIONAL|PARAMETER|POINTER|PRINT|PRIVATE|PUBLIC|READ|RETURN|REWIND|SAVE|SELECT|STOP|TARGET|WHILE|WRITE)\b/i, /\b(?:ASSIGNMENT|DEFAULT|ELEMENTAL|ELSE|ELSEWHERE|ELSEIF|ENTRY|IN|INCLUDE|INOUT|KIND|NULL|ONLY|OPERATOR|OUT|PURE|RECURSIVE|RESULT|SEQUENCE|STAT|THEN|USE)\b/i],
                operator: [/\*\*|\/\/|=>|[=\/]=|[<>]=?|::|[+\-*=%]|\.[A-Z]+\./i, {
                    pattern: /(^|(?!\().)\/(?!\))/,
                    lookbehind: !0
                }],
                punctuation: /\(\/|\/\)|[(),;:&]/
            }
        }
        e.exports = a,
        a.displayName = "fortran",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.fsharp = e.languages.extend("clike", {
                comment: [{
                    pattern: /(^|[^\\])\(\*(?!\))[\s\S]*?\*\)/,
                    lookbehind: !0
                }, {
                    pattern: /(^|[^\\:])\/\/.*/,
                    lookbehind: !0
                }],
                string: {
                    pattern: /(?:"""[\s\S]*?"""|@"(?:""|[^"])*"|"(?:\\[\s\S]|[^\\"])*")B?|'(?:[^\\']|\\(?:.|\d{3}|x[a-fA-F\d]{2}|u[a-fA-F\d]{4}|U[a-fA-F\d]{8}))'B?/,
                    greedy: !0
                },
                "class-name": {
                    pattern: /(\b(?:exception|inherit|interface|new|of|type)\s+|\w\s*:\s*|\s:\??>\s*)[.\w]+\b(?:\s*(?:->|\*)\s*[.\w]+\b)*(?!\s*[:.])/,
                    lookbehind: !0,
                    inside: {
                        operator: /->|\*/,
                        punctuation: /\./
                    }
                },
                keyword: /\b(?:let|return|use|yield)(?:!\B|\b)|\b(?:abstract|and|as|assert|base|begin|class|default|delegate|do|done|downcast|downto|elif|else|end|exception|extern|false|finally|for|fun|function|global|if|in|inherit|inline|interface|internal|lazy|match|member|module|mutable|namespace|new|not|null|of|open|or|override|private|public|rec|select|static|struct|then|to|true|try|type|upcast|val|void|when|while|with|asr|land|lor|lsl|lsr|lxor|mod|sig|atomic|break|checked|component|const|constraint|constructor|continue|eager|event|external|fixed|functor|include|method|mixin|object|parallel|process|protected|pure|sealed|tailcall|trait|virtual|volatile)\b/,
                number: [/\b0x[\da-fA-F]+(?:un|lf|LF)?\b/, /\b0b[01]+(?:y|uy)?\b/, /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[fm]|e[+-]?\d+)?\b/i, /\b\d+(?:[IlLsy]|u[lsy]?|UL)?\b/],
                operator: /([<>~&^])\1\1|([*.:<>&])\2|<-|->|[!=:]=|<?\|{1,3}>?|\??(?:<=|>=|<>|[-+*/%=<>])\??|[!?^&]|~[+~-]|:>|:\?>?/
            }),
            e.languages.insertBefore("fsharp", "keyword", {
                preprocessor: {
                    pattern: /(^[\t ]*)#.*/m,
                    lookbehind: !0,
                    alias: "property",
                    inside: {
                        directive: {
                            pattern: /(^#)\b(?:else|endif|if|light|line|nowarn)\b/,
                            lookbehind: !0,
                            alias: "keyword"
                        }
                    }
                }
            }),
            e.languages.insertBefore("fsharp", "punctuation", {
                "computation-expression": {
                    pattern: /\b[_a-z]\w*(?=\s*\{)/i,
                    alias: "keyword"
                }
            }),
            e.languages.insertBefore("fsharp", "string", {
                annotation: {
                    pattern: /\[<.+?>\]/,
                    inside: {
                        punctuation: /^\[<|>\]$/,
                        "class-name": {
                            pattern: /^\w+$|(^|;\s*)[A-Z]\w*(?=\()/,
                            lookbehind: !0
                        },
                        "annotation-content": {
                            pattern: /[\s\S]+/,
                            inside: e.languages.fsharp
                        }
                    }
                }
            })
        }
        e.exports = a,
        a.displayName = "fsharp",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        var a = n(156);
        function r(e) {
            e.register(a),
            function(e) {
                for (var t = /[^<()"']|\((?:<expr>)*\)|<(?!#--)|<#--(?:[^-]|-(?!->))*-->|"(?:[^\\"]|\\.)*"|'(?:[^\\']|\\.)*'/.source, n = 0; n < 2; n++)
                    t = t.replace(/<expr>/g, (function() {
                        return t
                    }
                    ));
                t = t.replace(/<expr>/g, /[^\s\S]/.source);
                var a = {
                    comment: /<#--[\s\S]*?-->/,
                    string: [{
                        pattern: /\br("|')(?:(?!\1)[^\\]|\\.)*\1/,
                        greedy: !0
                    }, {
                        pattern: RegExp(/("|')(?:(?!\1|\$\{)[^\\]|\\.|\$\{(?:(?!\})(?:<expr>))*\})*\1/.source.replace(/<expr>/g, (function() {
                            return t
                        }
                        ))),
                        greedy: !0,
                        inside: {
                            interpolation: {
                                pattern: RegExp(/((?:^|[^\\])(?:\\\\)*)\$\{(?:(?!\})(?:<expr>))*\}/.source.replace(/<expr>/g, (function() {
                                    return t
                                }
                                ))),
                                lookbehind: !0,
                                inside: {
                                    "interpolation-punctuation": {
                                        pattern: /^\$\{|\}$/,
                                        alias: "punctuation"
                                    },
                                    rest: null
                                }
                            }
                        }
                    }],
                    keyword: /\b(?:as)\b/,
                    boolean: /\b(?:true|false)\b/,
                    "builtin-function": {
                        pattern: /((?:^|[^?])\?\s*)\w+/,
                        lookbehind: !0,
                        alias: "function"
                    },
                    function: /\b\w+(?=\s*\()/,
                    number: /\b\d+(?:\.\d+)?\b/,
                    operator: /\.\.[<*!]?|->|--|\+\+|&&|\|\||\?{1,2}|[-+*/%!=<>]=?|\b(?:gt|gte|lt|lte)\b/,
                    punctuation: /[,;.:()[\]{}]/
                };
                a.string[1].inside.interpolation.inside.rest = a,
                e.languages.ftl = {
                    "ftl-comment": {
                        pattern: /^<#--[\s\S]*/,
                        alias: "comment"
                    },
                    "ftl-directive": {
                        pattern: /^<[\s\S]+>$/,
                        inside: {
                            directive: {
                                pattern: /(^<\/?)[#@][a-z]\w*/i,
                                lookbehind: !0,
                                alias: "keyword"
                            },
                            punctuation: /^<\/?|\/?>$/,
                            content: {
                                pattern: /\s*\S[\s\S]*/,
                                alias: "ftl",
                                inside: a
                            }
                        }
                    },
                    "ftl-interpolation": {
                        pattern: /^\$\{[\s\S]*\}$/,
                        inside: {
                            punctuation: /^\$\{|\}$/,
                            content: {
                                pattern: /\s*\S[\s\S]*/,
                                alias: "ftl",
                                inside: a
                            }
                        }
                    }
                },
                e.hooks.add("before-tokenize", (function(n) {
                    var a = RegExp(/<#--[\s\S]*?-->|<\/?[#@][a-zA-Z](?:<expr>)*?>|\$\{(?:<expr>)*?\}/.source.replace(/<expr>/g, (function() {
                        return t
                    }
                    )), "gi");
                    e.languages["markup-templating"].buildPlaceholders(n, "ftl", a)
                }
                )),
                e.hooks.add("after-tokenize", (function(t) {
                    e.languages["markup-templating"].tokenizePlaceholders(t, "ftl")
                }
                ))
            }(e)
        }
        e.exports = r,
        r.displayName = "ftl",
        r.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.gcode = {
                comment: /;.*|\B\(.*?\)\B/,
                string: {
                    pattern: /"(?:""|[^"])*"/,
                    greedy: !0
                },
                keyword: /\b[GM]\d+(?:\.\d+)?\b/,
                property: /\b[A-Z]/,
                checksum: {
                    pattern: /\*\d+/,
                    alias: "punctuation"
                },
                punctuation: /:/
            }
        }
        e.exports = a,
        a.displayName = "gcode",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.gdscript = {
                comment: /#.*/,
                string: {
                    pattern: /@?(?:("|')(?:(?!\1)[^\n\\]|\\[\s\S])*\1(?!"|')|"""(?:[^\\]|\\[\s\S])*?""")/,
                    greedy: !0
                },
                "class-name": {
                    pattern: /(^(?:class_name|class|extends)[ \t]+|^export\([ \t]*|\bas[ \t]+|(?:\b(?:const|var)[ \t]|[,(])[ \t]*\w+[ \t]*:[ \t]*|->[ \t]*)[a-zA-Z_]\w*/m,
                    lookbehind: !0
                },
                keyword: /\b(?:and|as|assert|break|breakpoint|class|class_name|const|continue|elif|else|enum|export|extends|for|func|if|in|is|master|mastersync|match|not|null|onready|or|pass|preload|puppet|puppetsync|remote|remotesync|return|self|setget|signal|static|tool|var|while|yield)\b/,
                function: /\b[a-z_]\w*(?=[ \t]*\()/i,
                variable: /\$\w+/,
                number: [/\b0b[01_]+\b|\b0x[\da-fA-F_]+\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.[\d_]+)(?:e[+-]?[\d_]+)?\b/, /\b(?:INF|NAN|PI|TAU)\b/],
                constant: /\b[A-Z][A-Z_\d]*\b/,
                boolean: /\b(?:false|true)\b/,
                operator: /->|:=|&&|\|\||<<|>>|[-+*/%&|!<>=]=?|[~^]/,
                punctuation: /[.:,;()[\]{}]/
            }
        }
        e.exports = a,
        a.displayName = "gdscript",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.gedcom = {
                "line-value": {
                    pattern: /(^[\t ]*\d+ +(?:@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@ +)?\w+ ).+/m,
                    lookbehind: !0,
                    inside: {
                        pointer: {
                            pattern: /^@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@$/,
                            alias: "variable"
                        }
                    }
                },
                tag: {
                    pattern: /(^[\t ]*\d+ +(?:@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@ +)?)\w+/m,
                    lookbehind: !0,
                    alias: "string"
                },
                level: {
                    pattern: /(^[\t ]*)\d+/m,
                    lookbehind: !0,
                    alias: "number"
                },
                pointer: {
                    pattern: /@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@/,
                    alias: "variable"
                }
            }
        }
        e.exports = a,
        a.displayName = "gedcom",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                var t = /(?:\r?\n|\r)[ \t]*\|.+\|(?:(?!\|).)*/.source;
                e.languages.gherkin = {
                    pystring: {
                        pattern: /("""|''')[\s\S]+?\1/,
                        alias: "string"
                    },
                    comment: {
                        pattern: /(^[ \t]*)#.*/m,
                        lookbehind: !0
                    },
                    tag: {
                        pattern: /(^[ \t]*)@\S*/m,
                        lookbehind: !0
                    },
                    feature: {
                        pattern: /((?:^|\r?\n|\r)[ \t]*)(?:Ability|Ahoy matey!|Arwedd|Aspekt|Besigheid Behoefte|Business Need|Caracteristica|Caracter\xedstica|Egenskab|Egenskap|Eiginleiki|Feature|F\u012b\u010da|Fitur|Fonctionnalit\xe9|Fonksyonalite|Funcionalidade|Funcionalitat|Functionalitate|Func\u0163ionalitate|Func\u021bionalitate|Functionaliteit|Fungsi|Funkcia|Funkcija|Funkcionalit\u0101te|Funkcionalnost|Funkcja|Funksie|Funktionalit\xe4t|Funktionalit\xe9it|Funzionalit\xe0|Hwaet|Hw\xe6t|Jellemz\u0151|Karakteristik|laH|Lastnost|Mak|Mogucnost|Mogu\u0107nost|Moznosti|Mo\u017enosti|OH HAI|Omadus|Ominaisuus|Osobina|\xd6zellik|perbogh|poQbogh malja'|Potrzeba biznesowa|Po\u017eadavek|Po\u017eiadavka|Pretty much|Qap|Qu'meH 'ut|Savyb\u0117|T\xednh n\u0103ng|Trajto|Vermo\xeb|Vlastnos\u0165|W\u0142a\u015bciwo\u015b\u0107|Zna\u010dilnost|\u0394\u03c5\u03bd\u03b1\u03c4\u03cc\u03c4\u03b7\u03c4\u03b1|\u039b\u03b5\u03b9\u03c4\u03bf\u03c5\u03c1\u03b3\u03af\u03b1|\u041c\u043e\u0433\u0443\u045b\u043d\u043e\u0441\u0442|\u041c\u04e9\u043c\u043a\u0438\u043d\u043b\u0435\u043a|\u041e\u0441\u043e\u0431\u0438\u043d\u0430|\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u043e|\u04ae\u0437\u0435\u043d\u0447\u04d9\u043b\u0435\u043a\u043b\u0435\u043b\u0435\u043a|\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b|\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u043d\u043e\u0441\u0442|\u0424\u0443\u043d\u043a\u0446\u0438\u044f|\u0424\u0443\u043d\u043a\u0446\u0456\u043e\u043d\u0430\u043b|\u05ea\u05db\u05d5\u05e0\u05d4|\u062e\u0627\u0635\u064a\u0629|\u062e\u0635\u0648\u0635\u06cc\u062a|\u0635\u0644\u0627\u062d\u06cc\u062a|\u06a9\u0627\u0631\u0648\u0628\u0627\u0631 \u06a9\u06cc \u0636\u0631\u0648\u0631\u062a|\u0648\u0650\u06cc\u0698\u06af\u06cc|\u0930\u0942\u092a \u0932\u0947\u0916|\u0a16\u0a3e\u0a38\u0a40\u0a05\u0a24|\u0a28\u0a15\u0a36 \u0a28\u0a41\u0a39\u0a3e\u0a30|\u0a2e\u0a41\u0a39\u0a3e\u0a02\u0a26\u0a30\u0a3e|\u0c17\u0c41\u0c23\u0c2e\u0c41|\u0cb9\u0cc6\u0c9a\u0ccd\u0c9a\u0cb3|\u0e04\u0e27\u0e32\u0e21\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e17\u0e32\u0e07\u0e18\u0e38\u0e23\u0e01\u0e34\u0e08|\u0e04\u0e27\u0e32\u0e21\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16|\u0e42\u0e04\u0e23\u0e07\u0e2b\u0e25\u0e31\u0e01|\uae30\ub2a5|\u30d5\u30a3\u30fc\u30c1\u30e3|\u529f\u80fd|\u6a5f\u80fd):(?:[^:\r\n]+(?:\r?\n|\r|$))*/,
                        lookbehind: !0,
                        inside: {
                            important: {
                                pattern: /(:)[^\r\n]+/,
                                lookbehind: !0
                            },
                            keyword: /[^:\r\n]+:/
                        }
                    },
                    scenario: {
                        pattern: /(^[ \t]*)(?:Abstract Scenario|Abstrakt Scenario|Achtergrond|Aer|\xc6r|Agtergrond|All y'all|Antecedentes|Antecedents|Atbur\xf0ar\xe1s|Atbur\xf0ar\xe1sir|Awww, look mate|B4|Background|Baggrund|Bakgrund|Bakgrunn|Bakgrunnur|Beispiele|Beispiller|B\u1ed1i c\u1ea3nh|Cefndir|Cenario|Cen\xe1rio|Cenario de Fundo|Cen\xe1rio de Fundo|Cenarios|Cen\xe1rios|Contesto|Context|Contexte|Contexto|Conto|Contoh|Contone|D\xe6mi|Dasar|Dead men tell no tales|Delineacao do Cenario|Delinea\xe7\xe3o do Cen\xe1rio|Dis is what went down|D\u1eef li\u1ec7u|Dyagram senaryo|Dyagram Senaryo|Egzanp|Ejemplos|Eksempler|Ekzemploj|Enghreifftiau|Esbozo do escenario|Escenari|Escenario|Esempi|Esquema de l'escenari|Esquema del escenario|Esquema do Cenario|Esquema do Cen\xe1rio|Examples|EXAMPLZ|Exempel|Exemple|Exemples|Exemplos|First off|Fono|Forgat\xf3k\xf6nyv|Forgat\xf3k\xf6nyv v\xe1zlat|Fundo|Ge\xe7mi\u015f|ghantoH|Grundlage|Hannergrond|H\xe1tt\xe9r|Heave to|Istorik|Juhtumid|Keadaan|Khung k\u1ecbch b\u1ea3n|Khung t\xecnh hu\u1ed1ng|K\u1ecbch b\u1ea3n|Koncept|Konsep skenario|Kont\xe8ks|Kontekst|Kontekstas|Konteksts|Kontext|Konturo de la scenaro|Latar Belakang|lut|lut chovnatlh|lutmey|L\xfdsing Atbur\xf0ar\xe1sar|L\xfdsing D\xe6ma|Menggariskan Senario|MISHUN|MISHUN SRSLY|mo'|N\xe1\u010drt Scen\xe1ra|N\xe1\u010drt Sc\xe9n\xe1\u0159e|N\xe1\u010drt Scen\xe1ru|Oris scenarija|\xd6rnekler|Osnova|Osnova Scen\xe1ra|Osnova sc\xe9n\xe1\u0159e|Osnutek|Ozadje|Paraugs|Pavyzd\u017eiai|P\xe9ld\xe1k|Piem\u0113ri|Plan du sc\xe9nario|Plan du Sc\xe9nario|Plan senaryo|Plan Senaryo|Plang vum Szenario|Pozad\xed|Pozadie|Pozadina|Pr\xedklady|P\u0159\xedklady|Primer|Primeri|Primjeri|Przyk\u0142ady|Raamstsenaarium|Reckon it's like|Rerefons|Scen\xe1r|Sc\xe9n\xe1\u0159|Scenarie|Scenarij|Scenarijai|Scenarijaus \u0161ablonas|Scenariji|Scen\u0101rijs|Scen\u0101rijs p\u0113c parauga|Scenarijus|Scenario|Sc\xe9nario|Scenario Amlinellol|Scenario Outline|Scenario Template|Scenariomal|Scenariomall|Scenarios|Scenariu|Scenariusz|Scenaro|Schema dello scenario|Se \xf0e|Se the|Se \xfee|Senario|Senaryo|Senaryo deskripsyon|Senaryo Deskripsyon|Senaryo tasla\u011f\u0131|Shiver me timbers|Situ\u0101cija|Situai|Situasie|Situasie Uiteensetting|Skenario|Skenario konsep|Skica|Structura scenariu|Structur\u0103 scenariu|Struktura scenarija|Stsenaarium|Swa|Swa hwaer swa|Swa hw\xe6r swa|Szablon scenariusza|Szenario|Szenariogrundriss|Tapaukset|Tapaus|Tapausaihio|Taust|Tausta|Template Keadaan|Template Senario|Template Situai|The thing of it is|T\xecnh hu\u1ed1ng|Variantai|Voorbeelde|Voorbeelden|Wharrimean is|Yo-ho-ho|You'll wanna|Za\u0142o\u017cenia|\u03a0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1|\u03a0\u03b5\u03c1\u03b9\u03b3\u03c1\u03b1\u03c6\u03ae \u03a3\u03b5\u03bd\u03b1\u03c1\u03af\u03bf\u03c5|\u03a3\u03b5\u03bd\u03ac\u03c1\u03b9\u03b1|\u03a3\u03b5\u03bd\u03ac\u03c1\u03b9\u03bf|\u03a5\u03c0\u03cc\u03b2\u03b1\u03b8\u03c1\u03bf|\u041a\u0435\u0440\u0435\u0448|\u041a\u043e\u043d\u0442\u0435\u043a\u0441\u0442|\u041a\u043e\u043d\u0446\u0435\u043f\u0442|\u041c\u0438\u0441\u0430\u043b\u043b\u0430\u0440|\u041c\u0438\u0441\u043e\u043b\u043b\u0430\u0440|\u041e\u0441\u043d\u043e\u0432\u0430|\u041f\u0435\u0440\u0435\u0434\u0443\u043c\u043e\u0432\u0430|\u041f\u043e\u0437\u0430\u0434\u0438\u043d\u0430|\u041f\u0440\u0435\u0434\u0438\u0441\u0442\u043e\u0440\u0438\u044f|\u041f\u0440\u0435\u0434\u044b\u0441\u0442\u043e\u0440\u0438\u044f|\u041f\u0440\u0438\u043a\u043b\u0430\u0434\u0438|\u041f\u0440\u0438\u043c\u0435\u0440|\u041f\u0440\u0438\u043c\u0435\u0440\u0438|\u041f\u0440\u0438\u043c\u0435\u0440\u044b|\u0420\u0430\u043c\u043a\u0430 \u043d\u0430 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0439|\u0421\u043a\u0438\u0446\u0430|\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0458\u0430|\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u044f|\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0441\u0446\u0435\u043d\u0430\u0440\u0456\u044e|\u0421\u0446\u0435\u043d\u0430\u0440\u0438\u0439|\u0421\u0446\u0435\u043d\u0430\u0440\u0438\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430\u0441\u0438|\u0421\u0446\u0435\u043d\u0430\u0440\u0438\u0439\u043d\u044b\u04a3 \u0442\u04e9\u0437\u0435\u043b\u0435\u0448\u0435|\u0421\u0446\u0435\u043d\u0430\u0440\u0438\u0458\u0438|\u0421\u0446\u0435\u043d\u0430\u0440\u0438\u043e|\u0421\u0446\u0435\u043d\u0430\u0440\u0456\u0439|\u0422\u0430\u0440\u0438\u0445|\u04ae\u0440\u043d\u04d9\u043a\u043b\u04d9\u0440|\u05d3\u05d5\u05d2\u05de\u05d0\u05d5\u05ea|\u05e8\u05e7\u05e2|\u05ea\u05d1\u05e0\u05d9\u05ea \u05ea\u05e8\u05d7\u05d9\u05e9|\u05ea\u05e8\u05d7\u05d9\u05e9|\u0627\u0644\u062e\u0644\u0641\u064a\u0629|\u0627\u0644\u06af\u0648\u06cc \u0633\u0646\u0627\u0631\u06cc\u0648|\u0627\u0645\u062b\u0644\u0629|\u067e\u0633 \u0645\u0646\u0638\u0631|\u0632\u0645\u06cc\u0646\u0647|\u0633\u0646\u0627\u0631\u06cc\u0648|\u0633\u064a\u0646\u0627\u0631\u064a\u0648|\u0633\u064a\u0646\u0627\u0631\u064a\u0648 \u0645\u062e\u0637\u0637|\u0645\u062b\u0627\u0644\u06cc\u06ba|\u0645\u0646\u0638\u0631 \u0646\u0627\u0645\u06d2 \u06a9\u0627 \u062e\u0627\u06a9\u06c1|\u0645\u0646\u0638\u0631\u0646\u0627\u0645\u06c1|\u0646\u0645\u0648\u0646\u0647 \u0647\u0627|\u0909\u0926\u093e\u0939\u0930\u0923|\u092a\u0930\u093f\u0926\u0943\u0936\u094d\u092f|\u092a\u0930\u093f\u0926\u0943\u0936\u094d\u092f \u0930\u0942\u092a\u0930\u0947\u0916\u093e|\u092a\u0943\u0937\u094d\u0920\u092d\u0942\u092e\u093f|\u0a09\u0a26\u0a3e\u0a39\u0a30\u0a28\u0a3e\u0a02|\u0a2a\u0a1f\u0a15\u0a25\u0a3e|\u0a2a\u0a1f\u0a15\u0a25\u0a3e \u0a22\u0a3e\u0a02\u0a1a\u0a3e|\u0a2a\u0a1f\u0a15\u0a25\u0a3e \u0a30\u0a42\u0a2a \u0a30\u0a47\u0a16\u0a3e|\u0a2a\u0a3f\u0a1b\u0a4b\u0a15\u0a5c|\u0c09\u0c26\u0c3e\u0c39\u0c30\u0c23\u0c32\u0c41|\u0c15\u0c25\u0c28\u0c02|\u0c28\u0c47\u0c2a\u0c25\u0c4d\u0c2f\u0c02|\u0c38\u0c28\u0c4d\u0c28\u0c3f\u0c35\u0c47\u0c36\u0c02|\u0c89\u0ca6\u0cbe\u0cb9\u0cb0\u0ca3\u0cc6\u0c97\u0cb3\u0cc1|\u0c95\u0ca5\u0cbe\u0cb8\u0cbe\u0cb0\u0cbe\u0c82\u0cb6|\u0cb5\u0cbf\u0cb5\u0cb0\u0ca3\u0cc6|\u0cb9\u0cbf\u0ca8\u0ccd\u0ca8\u0cc6\u0cb2\u0cc6|\u0e42\u0e04\u0e23\u0e07\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e02\u0e2d\u0e07\u0e40\u0e2b\u0e15\u0e38\u0e01\u0e32\u0e23\u0e13\u0e4c|\u0e0a\u0e38\u0e14\u0e02\u0e2d\u0e07\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07|\u0e0a\u0e38\u0e14\u0e02\u0e2d\u0e07\u0e40\u0e2b\u0e15\u0e38\u0e01\u0e32\u0e23\u0e13\u0e4c|\u0e41\u0e19\u0e27\u0e04\u0e34\u0e14|\u0e2a\u0e23\u0e38\u0e1b\u0e40\u0e2b\u0e15\u0e38\u0e01\u0e32\u0e23\u0e13\u0e4c|\u0e40\u0e2b\u0e15\u0e38\u0e01\u0e32\u0e23\u0e13\u0e4c|\ubc30\uacbd|\uc2dc\ub098\ub9ac\uc624|\uc2dc\ub098\ub9ac\uc624 \uac1c\uc694|\uc608|\u30b5\u30f3\u30d7\u30eb|\u30b7\u30ca\u30ea\u30aa|\u30b7\u30ca\u30ea\u30aa\u30a2\u30a6\u30c8\u30e9\u30a4\u30f3|\u30b7\u30ca\u30ea\u30aa\u30c6\u30f3\u30d7\u30ec|\u30b7\u30ca\u30ea\u30aa\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8|\u30c6\u30f3\u30d7\u30ec|\u4f8b|\u4f8b\u5b50|\u5267\u672c|\u5267\u672c\u5927\u7eb2|\u5287\u672c|\u5287\u672c\u5927\u7db1|\u573a\u666f|\u573a\u666f\u5927\u7eb2|\u5834\u666f|\u5834\u666f\u5927\u7db1|\u80cc\u666f):[^:\r\n]*/m,
                        lookbehind: !0,
                        inside: {
                            important: {
                                pattern: /(:)[^\r\n]*/,
                                lookbehind: !0
                            },
                            keyword: /[^:\r\n]+:/
                        }
                    },
                    "table-body": {
                        pattern: RegExp("(" + t + ")(?:" + t + ")+"),
                        lookbehind: !0,
                        inside: {
                            outline: {
                                pattern: /<[^>]+>/,
                                alias: "variable"
                            },
                            td: {
                                pattern: /\s*[^\s|][^|]*/,
                                alias: "string"
                            },
                            punctuation: /\|/
                        }
                    },
                    "table-head": {
                        pattern: RegExp(t),
                        inside: {
                            th: {
                                pattern: /\s*[^\s|][^|]*/,
                                alias: "variable"
                            },
                            punctuation: /\|/
                        }
                    },
                    atrule: {
                        pattern: /(^[ \t]+)(?:'ach|'a|'ej|7|a|A tak\xe9|A taktie\u017e|A tie\u017e|A z\xe1rove\u0148|Aber|Ac|Adott|Akkor|Ak|Aleshores|Ale|Ali|Allora|Alors|Als|Ama|Amennyiben|Amikor|Ampak|an|AN|Ananging|And y'all|And|Angenommen|Anrhegedig a|An|Apabila|At\xe8s|Atesa|Atunci|Avast!|Aye|A|awer|Bagi|Banjur|Bet|Bi\u1ebft|Blimey!|Buh|But at the end of the day I reckon|But y'all|But|BUT|Cal|C\xe2nd|Cando|Cand|Ce|Cuando|\u010ce|\xd0a \xf0e|\xd0a|Dadas|Dada|Dados|Dado|DaH ghu' bejlu'|dann|Dann|Dano|Dan|Dar|Dat fiind|Data|Date fiind|Date|Dati fiind|Dati|Da\u0163i fiind|Da\u021bi fiind|Dato|DEN|Den youse gotta|Dengan|De|Diberi|Diyelim ki|Donada|Donat|Donita\u0135o|Do|Dun|Duota|\xd0urh|Eeldades|Ef|E\u011fer ki|Entao|Ent\xe3o|Ent\xf3n|Entonces|En|Epi|E|\xc9s|Etant donn\xe9e|Etant donn\xe9|Et|\xc9tant donn\xe9es|\xc9tant donn\xe9e|\xc9tant donn\xe9|Etant donn\xe9es|Etant donn\xe9s|\xc9tant donn\xe9s|Fakat|Gangway!|Gdy|Gegeben seien|Gegeben sei|Gegeven|Gegewe|ghu' noblu'|Gitt|Given y'all|Given|Givet|Givun|Ha|Cho|I CAN HAZ|In|Ir|It's just unbelievable|I|Ja|Je\u015bli|Je\u017celi|Kadar|Kada|Kad|Kai|Kaj|Kdy\u017e|Ke\u010f|Kemudian|Ketika|Khi|Kiedy|Ko|Kuid|Kui|Kun|Lan|latlh|Le sa a|Let go and haul|Le|L\xe8 sa a|L\xe8|Logo|Lorsqu'<|Lorsque|m\xe4|Maar|Mais|Maj\u0105c|Majd|Maka|Manawa|Mas|Ma|Menawa|Men|Mutta|Nalikaning|Nalika|Nanging|N\xe5r|N\xe4r|Nato|Nh\u01b0ng|Niin|Njuk|O zaman|Og|Och|Oletetaan|Onda|Ond|Oraz|Pak|Pero|Per\xf2|Podano|Pokia\u013e|Pokud|Potem|Potom|Privzeto|Pryd|qaSDI'|Quando|Quand|Quan|S\xe5|Sed|Se|Siis|Sipoze ke|Sipoze Ke|Sipoze|Si|\u015ei|\u0218i|Soit|Stel|Tada|Tad|Takrat|Tak|Tapi|Ter|Tetapi|Tha the|Tha|Then y'all|Then|Th\xec|Thurh|Toda|Too right|ugeholl|Und|Un|V\xe0|vaj|Vendar|Ve|wann|Wanneer|WEN|Wenn|When y'all|When|Wtedy|Wun|Y'know|Yeah nah|Yna|Youse know like when|Youse know when youse got|Y|Za predpokladu|Za p\u0159edpokladu|Zadani|Zadano|Zadan|Zadate|Zadato|Zak\u0142adaj\u0105c|Zaradi|Zatati|\xdea \xfee|\xdea|\xde\xe1|\xdeegar|\xdeurh|\u0391\u03bb\u03bb\u03ac|\u0394\u03b5\u03b4\u03bf\u03bc\u03ad\u03bd\u03bf\u03c5|\u039a\u03b1\u03b9|\u038c\u03c4\u03b1\u03bd|\u03a4\u03cc\u03c4\u03b5|\u0410 \u0442\u0430\u043a\u043e\u0436|\u0410\u0433\u0430\u0440|\u0410\u043b\u0435|\u0410\u043b\u0438|\u0410\u043c\u043c\u043e|\u0410|\u04d8\u0433\u04d9\u0440|\u04d8\u0439\u0442\u0438\u043a|\u04d8\u043c\u043c\u0430|\u0411\u0438\u0440\u043e\u043a|\u0412\u0430|\u0412\u04d9|\u0414\u0430\u0434\u0435\u043d\u043e|\u0414\u0430\u043d\u043e|\u0414\u043e\u043f\u0443\u0441\u0442\u0438\u043c|\u0415\u0441\u043b\u0438|\u0417\u0430\u0434\u0430\u0442\u0435|\u0417\u0430\u0434\u0430\u0442\u0438|\u0417\u0430\u0434\u0430\u0442\u043e|\u0418|\u0406|\u041a \u0442\u043e\u043c\u0443 \u0436\u0435|\u041a\u0430\u0434\u0430|\u041a\u0430\u0434|\u041a\u043e\u0433\u0430\u0442\u043e|\u041a\u043e\u0433\u0434\u0430|\u041a\u043e\u043b\u0438|\u041b\u04d9\u043a\u0438\u043d|\u041b\u0435\u043a\u0438\u043d|\u041d\u04d9\u0442\u0438\u0497\u04d9\u0434\u04d9|\u041d\u0435\u0445\u0430\u0439|\u041d\u043e|\u041e\u043d\u0434\u0430|\u041f\u0440\u0438\u043f\u0443\u0441\u0442\u0438\u043c\u043e, \u0449\u043e|\u041f\u0440\u0438\u043f\u0443\u0441\u0442\u0438\u043c\u043e|\u041f\u0443\u0441\u0442\u044c|\u0422\u0430\u043a\u0436\u0435|\u0422\u0430|\u0422\u043e\u0433\u0434\u0430|\u0422\u043e\u0434\u0456|\u0422\u043e|\u0423\u043d\u0434\u0430|\u04ba\u04d9\u043c|\u042f\u043a\u0449\u043e|\u05d0\u05d1\u05dc|\u05d0\u05d6\u05d9|\u05d0\u05d6|\u05d1\u05d4\u05d9\u05e0\u05ea\u05df|\u05d5\u05d2\u05dd|\u05db\u05d0\u05e9\u05e8|\u0622\u0646\u06af\u0627\u0647|\u0627\u0630\u0627\u064b|\u0627\u06af\u0631|\u0627\u0645\u0627|\u0627\u0648\u0631|\u0628\u0627 \u0641\u0631\u0636|\u0628\u0627\u0644\u0641\u0631\u0636|\u0628\u0641\u0631\u0636|\u067e\u06be\u0631|\u062a\u0628|\u062b\u0645|\u062c\u0628|\u0639\u0646\u062f\u0645\u0627|\u0641\u0631\u0636 \u06a9\u06cc\u0627|\u0644\u0643\u0646|\u0644\u06cc\u06a9\u0646|\u0645\u062a\u0649|\u0647\u0646\u06af\u0627\u0645\u06cc|\u0648|\u0905\u0917\u0930|\u0914\u0930|\u0915\u0926\u093e|\u0915\u093f\u0928\u094d\u0924\u0941|\u091a\u0942\u0902\u0915\u093f|\u091c\u092c|\u0924\u0925\u093e|\u0924\u0926\u093e|\u0924\u092c|\u092a\u0930\u0928\u094d\u0924\u0941|\u092a\u0930|\u092f\u0926\u093f|\u0a05\u0a24\u0a47|\u0a1c\u0a26\u0a4b\u0a02|\u0a1c\u0a3f\u0a35\u0a47\u0a02 \u0a15\u0a3f|\u0a1c\u0a47\u0a15\u0a30|\u0a24\u0a26|\u0a2a\u0a30|\u0c05\u0c2a\u0c4d\u0c2a\u0c41\u0c21\u0c41|\u0c08 \u0c2a\u0c30\u0c3f\u0c38\u0c4d\u0c25\u0c3f\u0c24\u0c3f\u0c32\u0c4b|\u0c15\u0c3e\u0c28\u0c3f|\u0c1a\u0c46\u0c2a\u0c4d\u0c2a\u0c2c\u0c21\u0c3f\u0c28\u0c26\u0c3f|\u0c2e\u0c30\u0c3f\u0c2f\u0c41|\u0c86\u0ca6\u0cb0\u0cc6|\u0ca8\u0c82\u0ca4\u0cb0|\u0ca8\u0cbf\u0cd5\u0ca1\u0cbf\u0ca6|\u0cae\u0ca4\u0ccd\u0ca4\u0cc1|\u0cb8\u0ccd\u0ca5\u0cbf\u0ca4\u0cbf\u0caf\u0ca8\u0ccd\u0ca8\u0cc1|\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e43\u0e2b\u0e49|\u0e14\u0e31\u0e07\u0e19\u0e31\u0e49\u0e19|\u0e41\u0e15\u0e48|\u0e40\u0e21\u0e37\u0e48\u0e2d|\u0e41\u0e25\u0e30|\uadf8\ub7ec\uba74<|\uadf8\ub9ac\uace0<|\ub2e8<|\ub9cc\uc57d<|\ub9cc\uc77c<|\uba3c\uc800<|\uc870\uac74<|\ud558\uc9c0\ub9cc<|\u304b\u3064<|\u3057\u304b\u3057<|\u305f\u3060\u3057<|\u306a\u3089\u3070<|\u3082\u3057<|\u4e26\u4e14<|\u4f46\u3057<|\u4f46\u662f<|\u5047\u5982<|\u5047\u5b9a<|\u5047\u8a2d<|\u5047\u8bbe<|\u524d\u63d0<|\u540c\u65f6<|\u540c\u6642<|\u5e76\u4e14<|\u5f53<|\u7576<|\u800c\u4e14<|\u90a3\u4e48<|\u90a3\u9ebc<)(?=[ \t])/m,
                        lookbehind: !0
                    },
                    string: {
                        pattern: /"(?:\\.|[^"\\\r\n])*"|'(?:\\.|[^'\\\r\n])*'/,
                        inside: {
                            outline: {
                                pattern: /<[^>]+>/,
                                alias: "variable"
                            }
                        }
                    },
                    outline: {
                        pattern: /<[^>]+>/,
                        alias: "variable"
                    }
                }
            }(e)
        }
        e.exports = a,
        a.displayName = "gherkin",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.git = {
                comment: /^#.*/m,
                deleted: /^[-\u2013].*/m,
                inserted: /^\+.*/m,
                string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/m,
                command: {
                    pattern: /^.*\$ git .*$/m,
                    inside: {
                        parameter: /\s--?\w+/m
                    }
                },
                coord: /^@@.*@@$/m,
                "commit-sha1": /^commit \w{40}$/m
            }
        }
        e.exports = a,
        a.displayName = "git",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        var a = n(162);
        function r(e) {
            e.register(a),
            e.languages.glsl = e.languages.extend("c", {
                keyword: /\b(?:attribute|const|uniform|varying|buffer|shared|coherent|volatile|restrict|readonly|writeonly|atomic_uint|layout|centroid|flat|smooth|noperspective|patch|sample|break|continue|do|for|while|switch|case|default|if|else|subroutine|in|out|inout|float|double|int|void|bool|true|false|invariant|precise|discard|return|d?mat[234](?:x[234])?|[ibdu]?vec[234]|uint|lowp|mediump|highp|precision|[iu]?sampler[123]D|[iu]?samplerCube|sampler[12]DShadow|samplerCubeShadow|[iu]?sampler[12]DArray|sampler[12]DArrayShadow|[iu]?sampler2DRect|sampler2DRectShadow|[iu]?samplerBuffer|[iu]?sampler2DMS(?:Array)?|[iu]?samplerCubeArray|samplerCubeArrayShadow|[iu]?image[123]D|[iu]?image2DRect|[iu]?imageCube|[iu]?imageBuffer|[iu]?image[12]DArray|[iu]?imageCubeArray|[iu]?image2DMS(?:Array)?|struct|common|partition|active|asm|class|union|enum|typedef|template|this|resource|goto|inline|noinline|public|static|extern|external|interface|long|short|half|fixed|unsigned|superp|input|output|hvec[234]|fvec[234]|sampler3DRect|filter|sizeof|cast|namespace|using)\b/
            })
        }
        e.exports = r,
        r.displayName = "glsl",
        r.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.gamemakerlanguage = e.languages.gml = e.languages.extend("clike", {
                keyword: /\b(?:if|else|switch|case|default|break|for|repeat|while|do|until|continue|exit|return|globalvar|var|enum)\b/,
                number: /(?:\b0x[\da-f]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ulf]{0,4}/i,
                operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]|\b(?:or|and|not|with|at|xor)\b/,
                constant: /\b(?:self|other|all|noone|global|local|undefined|pointer_(?:invalid|null)|action_(?:stop|restart|continue|reverse)|pi|GM_build_date|GM_version|timezone_(?:local|utc)|gamespeed_(?:fps|microseconds)|ev_(?:create|destroy|step|alarm|keyboard|mouse|collision|other|draw|draw_(?:begin|end|pre|post)|keypress|keyrelease|trigger|(?:left|right|middle|no)_button|(?:left|right|middle)_press|(?:left|right|middle)_release|mouse_(?:enter|leave|wheel_up|wheel_down)|global_(?:left|right|middle)_button|global_(?:left|right|middle)_press|global_(?:left|right|middle)_release|joystick(?:1|2)_(?:left|right|up|down|button1|button2|button3|button4|button5|button6|button7|button8)|outside|boundary|game_start|game_end|room_start|room_end|no_more_lives|animation_end|end_of_path|no_more_health|user\d|step_(?:normal|begin|end)|gui|gui_begin|gui_end)|vk_(?:nokey|anykey|enter|return|shift|control|alt|escape|space|backspace|tab|pause|printscreen|left|right|up|down|home|end|delete|insert|pageup|pagedown|f\d|numpad\d|divide|multiply|subtract|add|decimal|lshift|lcontrol|lalt|rshift|rcontrol|ralt)|mb_(?:any|none|left|right|middle)|c_(?:aqua|black|blue|dkgray|fuchsia|gray|green|lime|ltgray|maroon|navy|olive|purple|red|silver|teal|white|yellow|orange)|fa_(?:left|center|right|top|middle|bottom|readonly|hidden|sysfile|volumeid|directory|archive)|pr_(?:pointlist|linelist|linestrip|trianglelist|trianglestrip|trianglefan)|bm_(?:complex|normal|add|max|subtract|zero|one|src_colour|inv_src_colour|src_color|inv_src_color|src_alpha|inv_src_alpha|dest_alpha|inv_dest_alpha|dest_colour|inv_dest_colour|dest_color|inv_dest_color|src_alpha_sat)|audio_(?:falloff_(?:none|inverse_distance|inverse_distance_clamped|linear_distance|linear_distance_clamped|exponent_distance|exponent_distance_clamped)|old_system|new_system|mono|stereo|3d)|cr_(?:default|none|arrow|cross|beam|size_nesw|size_ns|size_nwse|size_we|uparrow|hourglass|drag|appstart|handpoint|size_all)|asset_(?:object|unknown|sprite|sound|room|path|script|font|timeline|tiles|shader)|ds_type_(?:map|list|stack|queue|grid|priority)|ef_(?:explosion|ring|ellipse|firework|smoke|smokeup|star|spark|flare|cloud|rain|snow)|pt_shape_(?:pixel|disk|square|line|star|circle|ring|sphere|flare|spark|explosion|cloud|smoke|snow)|ps_(?:distr|shape)_(?:linear|gaussian|invgaussian|rectangle|ellipse|diamond|line)|ty_(?:real|string)|dll_(?:cdel|cdecl|stdcall)|matrix_(?:view|projection|world)|os_(?:win32|windows|macosx|ios|android|linux|unknown|winphone|win8native|psvita|ps4|xboxone|ps3|uwp)|browser_(?:not_a_browser|unknown|ie|firefox|chrome|safari|safari_mobile|opera|tizen|windows_store|ie_mobile)|device_ios_(?:unknown|iphone|iphone_retina|ipad|ipad_retina|iphone5|iphone6|iphone6plus)|device_(?:emulator|tablet)|display_(?:landscape|landscape_flipped|portrait|portrait_flipped)|of_challenge_(?:win|lose|tie)|leaderboard_type_(?:number|time_mins_secs)|cmpfunc_(?:never|less|equal|lessequal|greater|notequal|greaterequal|always)|cull_(?:noculling|clockwise|counterclockwise)|lighttype_(?:dir|point)|iap_(?:ev_storeload|ev_product|ev_purchase|ev_consume|ev_restore|storeload_ok|storeload_failed|status_uninitialised|status_unavailable|status_loading|status_available|status_processing|status_restoring|failed|unavailable|available|purchased|canceled|refunded)|fb_login_(?:default|fallback_to_webview|no_fallback_to_webview|forcing_webview|use_system_account|forcing_safari)|phy_joint_(?:anchor_1_x|anchor_1_y|anchor_2_x|anchor_2_y|reaction_force_x|reaction_force_y|reaction_torque|motor_speed|angle|motor_torque|max_motor_torque|translation|speed|motor_force|max_motor_force|length_1|length_2|damping_ratio|frequency|lower_angle_limit|upper_angle_limit|angle_limits|max_length|max_torque|max_force)|phy_debug_render_(?:aabb|collision_pairs|coms|core_shapes|joints|obb|shapes)|phy_particle_flag_(?:water|zombie|wall|spring|elastic|viscous|powder|tensile|colourmixing|colormixing)|phy_particle_group_flag_(?:solid|rigid)|phy_particle_data_flag_(?:typeflags|position|velocity|colour|color|category)|achievement_(?:our_info|friends_info|leaderboard_info|info|filter_(?:all_players|friends_only|favorites_only)|type_challenge|type_score_challenge|pic_loaded|show_(?:ui|profile|leaderboard|achievement|bank|friend_picker|purchase_prompt))|network_(?:socket_(?:tcp|udp|bluetooth)|type_(?:connect|disconnect|data|non_blocking_connect)|config_(?:connect_timeout|use_non_blocking_socket|enable_reliable_udp|disable_reliable_udp))|buffer_(?:fixed|grow|wrap|fast|vbuffer|network|u8|s8|u16|s16|u32|s32|u64|f16|f32|f64|bool|text|string|seek_start|seek_relative|seek_end|generalerror|outofspace|outofbounds|invalidtype)|gp_(?:face\d|shoulderl|shoulderr|shoulderlb|shoulderrb|select|start|stickl|stickr|padu|padd|padl|padr|axislh|axislv|axisrh|axisrv)|ov_(?:friends|community|players|settings|gamegroup|achievements)|lb_sort_(?:none|ascending|descending)|lb_disp_(?:none|numeric|time_sec|time_ms)|ugc_(?:result_success|filetype_(?:community|microtrans)|visibility_(?:public|friends_only|private)|query_RankedBy(?:Vote|PublicationDate|Trend|NumTimesReported|TotalVotesAsc|VotesUp|TextSearch)|query_(?:AcceptedForGameRankedByAcceptanceDate|FavoritedByFriendsRankedByPublicationDate|CreatedByFriendsRankedByPublicationDate|NotYetRated)|sortorder_CreationOrder(?:Desc|Asc)|sortorder_(?:TitleAsc|LastUpdatedDesc|SubscriptionDateDesc|VoteScoreDesc|ForModeration)|list_(?:Published|VotedOn|VotedUp|VotedDown|WillVoteLater|Favorited|Subscribed|UsedOrPlayed|Followed)|match_(?:Items|Items_Mtx|Items_ReadyToUse|Collections|Artwork|Videos|Screenshots|AllGuides|WebGuides|IntegratedGuides|UsableInGame|ControllerBindings))|vertex_usage_(?:position|colour|color|normal|texcoord|textcoord|blendweight|blendindices|psize|tangent|binormal|fog|depth|sample)|vertex_type_(?:float\d|colour|color|ubyte4)|layerelementtype_(?:undefined|background|instance|oldtilemap|sprite|tilemap|particlesystem|tile)|tile_(?:rotate|flip|mirror|index_mask)|input_type|se_(?:chorus|compressor|echo|equalizer|flanger|gargle|none|reverb)|text_type|(?:obj|scr|spr|rm)\w+)\b/,
                variable: /\b(?:x|y|(?:x|y)(?:previous|start)|(?:h|v)speed|direction|speed|friction|gravity|gravity_direction|path_(?:index|position|positionprevious|speed|scale|orientation|endaction)|object_index|id|solid|persistent|mask_index|instance_(?:count|id)|alarm|timeline_(?:index|position|speed|running|loop)|visible|sprite_(?:index|width|height|xoffset|yoffset)|image_(?:number|index|speed|depth|xscale|yscale|angle|alpha|blend)|bbox_(?:left|right|top|bottom)|layer|phy_(?:rotation|(?:position|linear_velocity|speed|com|collision|col_normal)_(?:x|y)|angular_(?:velocity|damping)|position_(?:x|y)previous|speed|linear_damping|bullet|fixed_rotation|active|mass|inertia|dynamic|kinematic|sleeping|collision_points)|working_directory|webgl_enabled|view_(?:(?:y|x|w|h)view|(?:y|x|w|h)port|(?:v|h)(?:speed|border)|visible|surface_id|object|enabled|current|angle)|undefined|transition_(?:steps|kind|color)|temp_directory|show_(?:score|lives|health)|secure_mode|score|room_(?:width|speed|persistent|last|height|first|caption)|room|pointer_(?:null|invalid)|os_(?:version|type|device|browser)|mouse_(?:y|x|lastbutton|button)|lives|keyboard_(?:string|lastkey|lastchar|key)|iap_data|health|gamemaker_(?:version|registered|pro)|game_(?:save|project|display)_(?:id|name)|fps_real|fps|event_(?:type|object|number|action)|error_(?:occurred|last)|display_aa|delta_time|debug_mode|cursor_sprite|current_(?:year|weekday|time|second|month|minute|hour|day)|caption_(?:score|lives|health)|browser_(?:width|height)|background_(?:yscale|y|xscale|x|width|vtiled|vspeed|visible|showcolour|showcolor|index|htiled|hspeed|height|foreground|colour|color|blend|alpha)|async_load|application_surface|argument(?:_relitive|_count|\d)|argument|global|local|self|other)\b/
            })
        }
        e.exports = a,
        a.displayName = "gml",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.go = e.languages.extend("clike", {
                string: {
                    pattern: /(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1/,
                    greedy: !0
                },
                keyword: /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
                boolean: /\b(?:_|iota|nil|true|false)\b/,
                number: /(?:\b0x[a-f\d]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[-+]?\d+)?)i?/i,
                operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
                builtin: /\b(?:bool|byte|complex(?:64|128)|error|float(?:32|64)|rune|string|u?int(?:8|16|32|64)?|uintptr|append|cap|close|complex|copy|delete|imag|len|make|new|panic|print(?:ln)?|real|recover)\b/
            }),
            delete e.languages.go["class-name"]
        }
        e.exports = a,
        a.displayName = "go",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.graphql = {
                comment: /#.*/,
                description: {
                    pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
                    greedy: !0,
                    alias: "string",
                    inside: {
                        "language-markdown": {
                            pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
                            lookbehind: !0,
                            inside: e.languages.markdown
                        }
                    }
                },
                string: {
                    pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
                    greedy: !0
                },
                number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
                boolean: /\b(?:true|false)\b/,
                variable: /\$[a-z_]\w*/i,
                directive: {
                    pattern: /@[a-z_]\w*/i,
                    alias: "function"
                },
                "attr-name": {
                    pattern: /[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
                    greedy: !0
                },
                "atom-input": {
                    pattern: /[A-Z]\w*Input(?=!?.*$)/m,
                    alias: "class-name"
                },
                scalar: /\b(?:Boolean|Float|ID|Int|String)\b/,
                constant: /\b[A-Z][A-Z_\d]*\b/,
                "class-name": {
                    pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
                    lookbehind: !0
                },
                fragment: {
                    pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
                    lookbehind: !0,
                    alias: "function"
                },
                "definition-mutation": {
                    pattern: /(\bmutation\s+)[a-zA-Z_]\w*/,
                    lookbehind: !0,
                    alias: "function"
                },
                "definition-query": {
                    pattern: /(\bquery\s+)[a-zA-Z_]\w*/,
                    lookbehind: !0,
                    alias: "function"
                },
                keyword: /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
                operator: /[!=|&]|\.{3}/,
                "property-query": /\w+(?=\s*\()/,
                object: /\w+(?=\s*\{)/,
                punctuation: /[!(){}\[\]:=,]/,
                property: /\w+/
            },
            e.hooks.add("after-tokenize", (function(e) {
                if ("graphql" === e.language)
                    for (var t = e.tokens.filter((function(e) {
                        return "string" !== typeof e && "comment" !== e.type && "scalar" !== e.type
                    }
                    )), n = 0; n < t.length; ) {
                        var a = t[n++];
                        if ("keyword" === a.type && "mutation" === a.content) {
                            var r = [];
                            if (d(["definition-mutation", "punctuation"]) && "(" === u(1).content) {
                                n += 2;
                                var i = p(/^\($/, /^\)$/);
                                if (-1 === i)
                                    continue;
                                for (; n < i; n++) {
                                    var o = u(0);
                                    "variable" === o.type && (g(o, "variable-input"),
                                    r.push(o.content))
                                }
                                n = i + 1
                            }
                            if (d(["punctuation", "property-query"]) && "{" === u(0).content && (n++,
                            g(u(0), "property-mutation"),
                            r.length > 0)) {
                                var s = p(/^\{$/, /^\}$/);
                                if (-1 === s)
                                    continue;
                                for (var l = n; l < s; l++) {
                                    var c = t[l];
                                    "variable" === c.type && r.indexOf(c.content) >= 0 && g(c, "variable-input")
                                }
                            }
                        }
                    }
                function u(e) {
                    return t[n + e]
                }
                function d(e, t) {
                    t = t || 0;
                    for (var n = 0; n < e.length; n++) {
                        var a = u(n + t);
                        if (!a || a.type !== e[n])
                            return !1
                    }
                    return !0
                }
                function p(e, a) {
                    for (var r = 1, i = n; i < t.length; i++) {
                        var o = t[i]
                          , s = o.content;
                        if ("punctuation" === o.type && "string" === typeof s)
                            if (e.test(s))
                                r++;
                            else if (a.test(s) && 0 === --r)
                                return i
                    }
                    return -1
                }
                function g(e, t) {
                    var n = e.alias;
                    n ? Array.isArray(n) || (e.alias = n = [n]) : e.alias = n = [],
                    n.push(t)
                }
            }
            ))
        }
        e.exports = a,
        a.displayName = "graphql",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.groovy = e.languages.extend("clike", {
                string: [{
                    pattern: /("""|''')(?:[^\\]|\\[\s\S])*?\1|\$\/(?:[^/$]|\$(?:[/$]|(?![/$]))|\/(?!\$))*\/\$/,
                    greedy: !0
                }, {
                    pattern: /(["'/])(?:\\.|(?!\1)[^\\\r\n])*\1/,
                    greedy: !0
                }],
                keyword: /\b(?:as|def|in|abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|native|new|package|private|protected|public|return|short|static|strictfp|super|switch|synchronized|this|throw|throws|trait|transient|try|void|volatile|while)\b/,
                number: /\b(?:0b[01_]+|0x[\da-f_]+(?:\.[\da-f_p\-]+)?|[\d_]+(?:\.[\d_]+)?(?:e[+-]?\d+)?)[glidf]?\b/i,
                operator: {
                    pattern: /(^|[^.])(?:~|==?~?|\?[.:]?|\*(?:[.=]|\*=?)?|\.[@&]|\.\.<|\.\.(?!\.)|-[-=>]?|\+[+=]?|!=?|<(?:<=?|=>?)?|>(?:>>?=?|=)?|&[&=]?|\|[|=]?|\/=?|\^=?|%=?)/,
                    lookbehind: !0
                },
                punctuation: /\.+|[{}[\];(),:$]/
            }),
            e.languages.insertBefore("groovy", "string", {
                shebang: {
                    pattern: /#!.+/,
                    alias: "comment"
                }
            }),
            e.languages.insertBefore("groovy", "punctuation", {
                "spock-block": /\b(?:setup|given|when|then|and|cleanup|expect|where):/
            }),
            e.languages.insertBefore("groovy", "function", {
                annotation: {
                    pattern: /(^|[^.])@\w+/,
                    lookbehind: !0,
                    alias: "punctuation"
                }
            }),
            e.hooks.add("wrap", (function(t) {
                if ("groovy" === t.language && "string" === t.type) {
                    var n = t.content.value[0];
                    if ("'" != n) {
                        var a = /([^\\])(?:\$(?:\{.*?\}|[\w.]+))/;
                        "$" === n && (a = /([^\$])(?:\$(?:\{.*?\}|[\w.]+))/),
                        t.content.value = t.content.value.replace(/&lt;/g, "<").replace(/&amp;/g, "&"),
                        t.content = e.highlight(t.content.value, {
                            expression: {
                                pattern: a,
                                lookbehind: !0,
                                inside: e.languages.groovy
                            }
                        }),
                        t.classes.push("/" === n ? "regex" : "gstring")
                    }
                }
            }
            ))
        }
        e.exports = a,
        a.displayName = "groovy",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        var a = n(174);
        function r(e) {
            e.register(a),
            function(e) {
                e.languages.haml = {
                    "multiline-comment": {
                        pattern: /((?:^|\r?\n|\r)([\t ]*))(?:\/|-#).*(?:(?:\r?\n|\r)\2[\t ].+)*/,
                        lookbehind: !0,
                        alias: "comment"
                    },
                    "multiline-code": [{
                        pattern: /((?:^|\r?\n|\r)([\t ]*)(?:[~-]|[&!]?=)).*,[\t ]*(?:(?:\r?\n|\r)\2[\t ].*,[\t ]*)*(?:(?:\r?\n|\r)\2[\t ].+)/,
                        lookbehind: !0,
                        inside: e.languages.ruby
                    }, {
                        pattern: /((?:^|\r?\n|\r)([\t ]*)(?:[~-]|[&!]?=)).*\|[\t ]*(?:(?:\r?\n|\r)\2[\t ].*\|[\t ]*)*/,
                        lookbehind: !0,
                        inside: e.languages.ruby
                    }],
                    filter: {
                        pattern: /((?:^|\r?\n|\r)([\t ]*)):[\w-]+(?:(?:\r?\n|\r)(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/,
                        lookbehind: !0,
                        inside: {
                            "filter-name": {
                                pattern: /^:[\w-]+/,
                                alias: "variable"
                            }
                        }
                    },
                    markup: {
                        pattern: /((?:^|\r?\n|\r)[\t ]*)<.+/,
                        lookbehind: !0,
                        inside: e.languages.markup
                    },
                    doctype: {
                        pattern: /((?:^|\r?\n|\r)[\t ]*)!!!(?: .+)?/,
                        lookbehind: !0
                    },
                    tag: {
                        pattern: /((?:^|\r?\n|\r)[\t ]*)[%.#][\w\-#.]*[\w\-](?:\([^)]+\)|\{(?:\{[^}]+\}|[^{}])+\}|\[[^\]]+\])*[\/<>]*/,
                        lookbehind: !0,
                        inside: {
                            attributes: [{
                                pattern: /(^|[^#])\{(?:\{[^}]+\}|[^{}])+\}/,
                                lookbehind: !0,
                                inside: e.languages.ruby
                            }, {
                                pattern: /\([^)]+\)/,
                                inside: {
                                    "attr-value": {
                                        pattern: /(=\s*)(?:"(?:\\.|[^\\"\r\n])*"|[^)\s]+)/,
                                        lookbehind: !0
                                    },
                                    "attr-name": /[\w:-]+(?=\s*!?=|\s*[,)])/,
                                    punctuation: /[=(),]/
                                }
                            }, {
                                pattern: /\[[^\]]+\]/,
                                inside: e.languages.ruby
                            }],
                            punctuation: /[<>]/
                        }
                    },
                    code: {
                        pattern: /((?:^|\r?\n|\r)[\t ]*(?:[~-]|[&!]?=)).+/,
                        lookbehind: !0,
                        inside: e.languages.ruby
                    },
                    interpolation: {
                        pattern: /#\{[^}]+\}/,
                        inside: {
                            delimiter: {
                                pattern: /^#\{|\}$/,
                                alias: "punctuation"
                            },
                            rest: e.languages.ruby
                        }
                    },
                    punctuation: {
                        pattern: /((?:^|\r?\n|\r)[\t ]*)[~=\-&!]+/,
                        lookbehind: !0
                    }
                };
                for (var t = ["css", {
                    filter: "coffee",
                    language: "coffeescript"
                }, "erb", "javascript", "less", "markdown", "ruby", "scss", "textile"], n = {}, a = 0, r = t.length; a < r; a++) {
                    var i = t[a];
                    i = "string" === typeof i ? {
                        filter: i,
                        language: i
                    } : i,
                    e.languages[i.language] && (n["filter-" + i.filter] = {
                        pattern: RegExp("((?:^|\\r?\\n|\\r)([\\t ]*)):{{filter_name}}(?:(?:\\r?\\n|\\r)(?:\\2[\\t ].+|\\s*?(?=\\r?\\n|\\r)))+".replace("{{filter_name}}", (function() {
                            return i.filter
                        }
                        ))),
                        lookbehind: !0,
                        inside: {
                            "filter-name": {
                                pattern: /^:[\w-]+/,
                                alias: "variable"
                            },
                            rest: e.languages[i.language]
                        }
                    })
                }
                e.languages.insertBefore("haml", "filter", n)
            }(e)
        }
        e.exports = r,
        r.displayName = "haml",
        r.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        var a = n(156);
        function r(e) {
            e.register(a),
            function(e) {
                e.languages.handlebars = {
                    comment: /\{\{![\s\S]*?\}\}/,
                    delimiter: {
                        pattern: /^\{\{\{?|\}\}\}?$/i,
                        alias: "punctuation"
                    },
                    string: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
                    number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,
                    boolean: /\b(?:true|false)\b/,
                    block: {
                        pattern: /^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/i,
                        lookbehind: !0,
                        alias: "keyword"
                    },
                    brackets: {
                        pattern: /\[[^\]]+\]/,
                        inside: {
                            punctuation: /\[|\]/,
                            variable: /[\s\S]+/
                        }
                    },
                    punctuation: /[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,
                    variable: /[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/
                },
                e.hooks.add("before-tokenize", (function(t) {
                    e.languages["markup-templating"].buildPlaceholders(t, "handlebars", /\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g)
                }
                )),
                e.hooks.add("after-tokenize", (function(t) {
                    e.languages["markup-templating"].tokenizePlaceholders(t, "handlebars")
                }
                )),
                e.languages.hbs = e.languages.handlebars
            }(e)
        }
        e.exports = r,
        r.displayName = "handlebars",
        r.aliases = ["hbs"]
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.haxe = e.languages.extend("clike", {
                string: {
                    pattern: /(["'])(?:(?!\1)[^\\]|\\[\s\S])*\1/,
                    greedy: !0,
                    inside: {
                        interpolation: {
                            pattern: /(^|[^\\])\$(?:\w+|\{[^}]+\})/,
                            lookbehind: !0,
                            inside: {
                                interpolation: {
                                    pattern: /^\$\w*/,
                                    alias: "variable"
                                }
                            }
                        }
                    }
                },
                keyword: /\bthis\b|\b(?:abstract|as|break|case|cast|catch|class|continue|default|do|dynamic|else|enum|extends|extern|from|for|function|if|implements|import|in|inline|interface|macro|new|null|override|public|private|return|static|super|switch|throw|to|try|typedef|using|var|while)(?!\.)\b/,
                operator: /\.{3}|\+\+?|-[->]?|[=!]=?|&&?|\|\|?|<[<=]?|>[>=]?|[*\/%~^]/
            }),
            e.languages.insertBefore("haxe", "class-name", {
                regex: {
                    pattern: /~\/(?:[^\/\\\r\n]|\\.)+\/[igmsu]*/,
                    greedy: !0
                }
            }),
            e.languages.insertBefore("haxe", "keyword", {
                preprocessor: {
                    pattern: /#\w+/,
                    alias: "builtin"
                },
                metadata: {
                    pattern: /@:?\w+/,
                    alias: "symbol"
                },
                reification: {
                    pattern: /\$(?:\w+|(?=\{))/,
                    alias: "variable"
                }
            }),
            e.languages.haxe.string.inside.interpolation.inside.rest = e.languages.haxe,
            delete e.languages.haxe["class-name"]
        }
        e.exports = a,
        a.displayName = "haxe",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.hcl = {
                comment: /(?:\/\/|#).*|\/\*[\s\S]*?(?:\*\/|$)/,
                heredoc: {
                    pattern: /<<-?(\w+\b)[\s\S]*?^[ \t]*\1/m,
                    greedy: !0,
                    alias: "string"
                },
                keyword: [{
                    pattern: /(?:resource|data)\s+(?:"(?:\\[\s\S]|[^\\"])*")(?=\s+"[\w-]+"\s+\{)/i,
                    inside: {
                        type: {
                            pattern: /(resource|data|\s+)(?:"(?:\\[\s\S]|[^\\"])*")/i,
                            lookbehind: !0,
                            alias: "variable"
                        }
                    }
                }, {
                    pattern: /(?:provider|provisioner|variable|output|module|backend)\s+(?:[\w-]+|"(?:\\[\s\S]|[^\\"])*")\s+(?=\{)/i,
                    inside: {
                        type: {
                            pattern: /(provider|provisioner|variable|output|module|backend)\s+(?:[\w-]+|"(?:\\[\s\S]|[^\\"])*")\s+/i,
                            lookbehind: !0,
                            alias: "variable"
                        }
                    }
                }, /[\w-]+(?=\s+\{)/],
                property: [/[-\w\.]+(?=\s*=(?!=))/, /"(?:\\[\s\S]|[^\\"])+"(?=\s*[:=])/],
                string: {
                    pattern: /"(?:[^\\$"]|\\[\s\S]|\$(?:(?=")|\$+(?!\$)|[^"${])|\$\{(?:[^{}"]|"(?:[^\\"]|\\[\s\S])*")*\})*"/,
                    greedy: !0,
                    inside: {
                        interpolation: {
                            pattern: /(^|[^$])\$\{(?:[^{}"]|"(?:[^\\"]|\\[\s\S])*")*\}/,
                            lookbehind: !0,
                            inside: {
                                type: {
                                    pattern: /(\b(?:terraform|var|self|count|module|path|data|local)\b\.)[\w\*]+/i,
                                    lookbehind: !0,
                                    alias: "variable"
                                },
                                keyword: /\b(?:terraform|var|self|count|module|path|data|local)\b/i,
                                function: /\w+(?=\()/,
                                string: {
                                    pattern: /"(?:\\[\s\S]|[^\\"])*"/,
                                    greedy: !0
                                },
                                number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?(?:e[+-]?\d+)?/i,
                                punctuation: /[!\$#%&'()*+,.\/;<=>@\[\\\]^`{|}~?:]/
                            }
                        }
                    }
                },
                number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?(?:e[+-]?\d+)?/i,
                boolean: /\b(?:true|false)\b/i,
                punctuation: /[=\[\]{}]/
            }
        }
        e.exports = a,
        a.displayName = "hcl",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        var a = n(162);
        function r(e) {
            e.register(a),
            e.languages.hlsl = e.languages.extend("c", {
                "class-name": [e.languages.c["class-name"], /\b(?:AppendStructuredBuffer|BlendState|Buffer|ByteAddressBuffer|CompileShader|ComputeShader|ConsumeStructuredBuffer|DepthStencilState|DepthStencilView|DomainShader|GeometryShader|Hullshader|InputPatch|LineStream|OutputPatch|PixelShader|PointStream|RasterizerState|RenderTargetView|RWBuffer|RWByteAddressBuffer|RWStructuredBuffer|RWTexture(?:1D|1DArray|2D|2DArray|3D)|SamplerComparisonState|SamplerState|StructuredBuffer|Texture(?:1D|1DArray|2D|2DArray|2DMS|2DMSArray|3D|Cube|CubeArray)|TriangleStream|VertexShader)\b/],
                keyword: [/\b(?:asm|asm_fragment|auto|break|case|catch|cbuffer|centroid|char|class|column_major|compile|compile_fragment|const|const_cast|continue|default|delete|discard|do|dynamic_cast|else|enum|explicit|export|extern|for|friend|fxgroup|goto|groupshared|if|in|inline|inout|interface|line|lineadj|linear|long|matrix|mutable|namespace|new|nointerpolation|noperspective|operator|out|packoffset|pass|pixelfragment|point|precise|private|protected|public|register|reinterpret_cast|return|row_major|sample|sampler|shared|short|signed|sizeof|snorm|stateblock|stateblock_state|static|static_cast|string|struct|switch|tbuffer|technique|technique10|technique11|template|texture|this|throw|triangle|triangleadj|try|typedef|typename|uniform|union|unorm|unsigned|using|vector|vertexfragment|virtual|void|volatile|while)\b/, /\b(?:bool|double|dword|float|half|int|min(?:10float|12int|16(?:float|int|uint))|uint)(?:[1-4](?:x[1-4])?)?\b/],
                number: /(?:(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[eE][+-]?\d+)?|\b0x[\da-fA-F]+)[fFhHlLuU]?\b/,
                boolean: /\b(?:false|true)\b/
            })
        }
        e.exports = r,
        r.displayName = "hlsl",
        r.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.hpkp = {
                directive: {
                    pattern: /\b(?:(?:includeSubDomains|preload|strict)(?: |;)|pin-sha256="[a-zA-Z\d+=/]+"|(?:max-age|report-uri)=|report-to )/,
                    alias: "keyword"
                },
                safe: {
                    pattern: /\b\d{7,}\b/,
                    alias: "selector"
                },
                unsafe: {
                    pattern: /\b\d{1,6}\b/,
                    alias: "function"
                }
            }
        }
        e.exports = a,
        a.displayName = "hpkp",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.hsts = {
                directive: {
                    pattern: /\b(?:max-age=|includeSubDomains|preload)/,
                    alias: "keyword"
                },
                safe: {
                    pattern: /\b\d{8,}\b/,
                    alias: "selector"
                },
                unsafe: {
                    pattern: /\b\d{1,7}\b/,
                    alias: "function"
                }
            }
        }
        e.exports = a,
        a.displayName = "hsts",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                e.languages.http = {
                    "request-line": {
                        pattern: /^(?:GET|HEAD|POST|PUT|DELETE|CONNECT|OPTIONS|TRACE|PATCH|PRI|SEARCH)\s(?:https?:\/\/|\/)\S*\sHTTP\/[0-9.]+/m,
                        inside: {
                            method: {
                                pattern: /^[A-Z]+\b/,
                                alias: "property"
                            },
                            "request-target": {
                                pattern: /^(\s)(?:https?:\/\/|\/)\S*(?=\s)/,
                                lookbehind: !0,
                                alias: "url",
                                inside: e.languages.uri
                            },
                            "http-version": {
                                pattern: /^(\s)HTTP\/[0-9.]+/,
                                lookbehind: !0,
                                alias: "property"
                            }
                        }
                    },
                    "response-status": {
                        pattern: /^HTTP\/[0-9.]+ \d+ .+/m,
                        inside: {
                            "http-version": {
                                pattern: /^HTTP\/[0-9.]+/,
                                alias: "property"
                            },
                            "status-code": {
                                pattern: /^(\s)\d+(?=\s)/,
                                lookbehind: !0,
                                alias: "number"
                            },
                            "reason-phrase": {
                                pattern: /^(\s).+/,
                                lookbehind: !0,
                                alias: "string"
                            }
                        }
                    },
                    "header-name": {
                        pattern: /^[\w-]+:(?=.)/m,
                        alias: "keyword"
                    }
                };
                var t, n = e.languages, a = {
                    "application/javascript": n.javascript,
                    "application/json": n.json || n.javascript,
                    "application/xml": n.xml,
                    "text/xml": n.xml,
                    "text/html": n.html,
                    "text/css": n.css
                }, r = {
                    "application/json": !0,
                    "application/xml": !0
                };
                function i(e) {
                    var t = e.replace(/^[a-z]+\//, "");
                    return "(?:" + e + "|" + ("\\w+/(?:[\\w.-]+\\+)+" + t + "(?![+\\w.-])") + ")"
                }
                for (var o in a)
                    if (a[o]) {
                        t = t || {};
                        var s = r[o] ? i(o) : o;
                        t[o.replace(/\//g, "-")] = {
                            pattern: RegExp("(content-type:\\s*" + s + "(?:(?:\\r\\n?|\\n).+)*)(?:\\r?\\n|\\r){2}[\\s\\S]*", "i"),
                            lookbehind: !0,
                            inside: a[o]
                        }
                    }
                t && e.languages.insertBefore("http", "header-name", t)
            }(e)
        }
        e.exports = a,
        a.displayName = "http",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.ichigojam = {
                comment: /(?:\B'|REM)(?:[^\n\r]*)/i,
                string: {
                    pattern: /"(?:""|[!#$%&'()*,\/:;<=>?^\w +\-.])*"/i,
                    greedy: !0
                },
                number: /\B#[0-9A-F]+|\B`[01]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:E[+-]?\d+)?/i,
                keyword: /\b(?:BEEP|BPS|CASE|CLEAR|CLK|CLO|CLP|CLS|CLT|CLV|CONT|COPY|ELSE|END|FILE|FILES|FOR|GOSUB|GSB|GOTO|IF|INPUT|KBD|LED|LET|LIST|LOAD|LOCATE|LRUN|NEW|NEXT|OUT|RIGHT|PLAY|POKE|PRINT|PWM|REM|RENUM|RESET|RETURN|RTN|RUN|SAVE|SCROLL|SLEEP|SRND|STEP|STOP|SUB|TEMPO|THEN|TO|UART|VIDEO|WAIT)(?:\$|\b)/i,
                function: /\b(?:ABS|ANA|ASC|BIN|BTN|DEC|END|FREE|HELP|HEX|I2CR|I2CW|IN|INKEY|LEN|LINE|PEEK|RND|SCR|SOUND|STR|TICK|USR|VER|VPEEK|ZER)(?:\$|\b)/i,
                label: /(?:\B@\S+)/i,
                operator: /<[=>]?|>=?|\|\||&&|[+\-*\/=|&^~!]|\b(?:AND|NOT|OR)\b/i,
                punctuation: /[\[,;:()\]]/
            }
        }
        e.exports = a,
        a.displayName = "ichigojam",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.icon = {
                comment: /#.*/,
                string: {
                    pattern: /(["'])(?:(?!\1)[^\\\r\n_]|\\.|_(?!\1)(?:\r\n|[\s\S]))*\1/,
                    greedy: !0
                },
                number: /\b(?:\d+r[a-z\d]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b|\.\d+\b/i,
                "builtin-keyword": {
                    pattern: /&(?:allocated|ascii|clock|collections|cset|current|date|dateline|digits|dump|e|error(?:number|text|value)?|errout|fail|features|file|host|input|lcase|letters|level|line|main|null|output|phi|pi|pos|progname|random|regions|source|storage|subject|time|trace|ucase|version)\b/,
                    alias: "variable"
                },
                directive: {
                    pattern: /\$\w+/,
                    alias: "builtin"
                },
                keyword: /\b(?:break|by|case|create|default|do|else|end|every|fail|global|if|initial|invocable|link|local|next|not|of|procedure|record|repeat|return|static|suspend|then|to|until|while)\b/,
                function: /\b(?!\d)\w+(?=\s*[({]|\s*!\s*\[)/,
                operator: /[+-]:(?!=)|(?:[\/?@^%&]|\+\+?|--?|==?=?|~==?=?|\*\*?|\|\|\|?|<(?:->?|<?=?)|>>?=?)(?::=)?|:(?:=:?)?|[!.\\|~]/,
                punctuation: /[\[\](){},;]/
            }
        }
        e.exports = a,
        a.displayName = "icon",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                function t(e, n) {
                    return n <= 0 ? /[]/.source : e.replace(/<SELF>/g, (function() {
                        return t(e, n - 1)
                    }
                    ))
                }
                var n = /'[{}:=,](?:[^']|'')*'(?!')/
                  , a = {
                    pattern: /''/,
                    greedy: !0,
                    alias: "operator"
                }
                  , r = {
                    pattern: n,
                    greedy: !0,
                    inside: {
                        escape: a
                    }
                }
                  , i = t(/\{(?:[^{}']|'(?![{},'])|''|<STR>|<SELF>)*\}/.source.replace(/<STR>/g, (function() {
                    return n.source
                }
                )), 8)
                  , o = {
                    pattern: RegExp(i),
                    inside: {
                        message: {
                            pattern: /^(\{)[\s\S]+(?=\}$)/,
                            lookbehind: !0,
                            inside: null
                        },
                        "message-delimiter": {
                            pattern: /./,
                            alias: "punctuation"
                        }
                    }
                };
                e.languages["icu-message-format"] = {
                    argument: {
                        pattern: RegExp(i),
                        greedy: !0,
                        inside: {
                            content: {
                                pattern: /^(\{)[\s\S]+(?=\}$)/,
                                lookbehind: !0,
                                inside: {
                                    "argument-name": {
                                        pattern: /^(\s*)[^{}:=,\s]+/,
                                        lookbehind: !0
                                    },
                                    "choice-style": {
                                        pattern: /^(\s*,\s*choice\s*,\s*)\S(?:[\s\S]*\S)?/,
                                        lookbehind: !0,
                                        inside: {
                                            punctuation: /\|/,
                                            range: {
                                                pattern: /^(\s*)[+-]?(?:\d+(?:\.\d*)?|\u221e)\s*[<#\u2264]/,
                                                lookbehind: !0,
                                                inside: {
                                                    operator: /[<#\u2264]/,
                                                    number: /\S+/
                                                }
                                            },
                                            rest: null
                                        }
                                    },
                                    "plural-style": {
                                        pattern: /^(\s*,\s*(?:plural|selectordinal)\s*,\s*)\S(?:[\s\S]*\S)?/,
                                        lookbehind: !0,
                                        inside: {
                                            offset: /^offset:\s*\d+/,
                                            "nested-message": o,
                                            selector: {
                                                pattern: /=\d+|[^{}:=,\s]+/,
                                                inside: {
                                                    keyword: /^(?:zero|one|two|few|many|other)$/
                                                }
                                            }
                                        }
                                    },
                                    "select-style": {
                                        pattern: /^(\s*,\s*select\s*,\s*)\S(?:[\s\S]*\S)?/,
                                        lookbehind: !0,
                                        inside: {
                                            "nested-message": o,
                                            selector: {
                                                pattern: /[^{}:=,\s]+/,
                                                inside: {
                                                    keyword: /^other$/
                                                }
                                            }
                                        }
                                    },
                                    keyword: /\b(?:choice|plural|select|selectordinal)\b/,
                                    "arg-type": {
                                        pattern: /\b(?:number|date|time|spellout|ordinal|duration)\b/,
                                        alias: "keyword"
                                    },
                                    "arg-skeleton": {
                                        pattern: /(,\s*)::[^{}:=,\s]+/,
                                        lookbehind: !0
                                    },
                                    "arg-style": {
                                        pattern: /(,\s*)(?:short|medium|long|full|integer|currency|percent)(?=\s*$)/,
                                        lookbehind: !0
                                    },
                                    "arg-style-text": {
                                        pattern: RegExp(/(^\s*,\s*(?=\S))/.source + t(/(?:[^{}']|'[^']*'|\{(?:<SELF>)?\})+/.source, 8) + "$"),
                                        lookbehind: !0,
                                        alias: "string"
                                    },
                                    punctuation: /,/
                                }
                            },
                            "argument-delimiter": {
                                pattern: /./,
                                alias: "operator"
                            }
                        }
                    },
                    escape: a,
                    string: r
                },
                o.inside.message.inside = e.languages["icu-message-format"],
                e.languages["icu-message-format"].argument.inside.content.inside["choice-style"].inside.rest = e.languages["icu-message-format"]
            }(e)
        }
        e.exports = a,
        a.displayName = "icuMessageFormat",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        var a = n(189);
        function r(e) {
            e.register(a),
            e.languages.idris = e.languages.extend("haskell", {
                comment: {
                    pattern: /(?:(?:--|\|\|\|).*$|\{-[\s\S]*?-\})/m
                },
                keyword: /\b(?:Type|case|class|codata|constructor|corecord|data|do|dsl|else|export|if|implementation|implicit|import|impossible|in|infix|infixl|infixr|instance|interface|let|module|mutual|namespace|of|parameters|partial|postulate|private|proof|public|quoteGoal|record|rewrite|syntax|then|total|using|where|with)\b/,
                "import-statement": {
                    pattern: /(^\s*)import\s+(?:[A-Z][\w']*)(?:\.[A-Z][\w']*)*/m,
                    lookbehind: !0
                },
                builtin: void 0
            }),
            e.languages.idr = e.languages.idris
        }
        e.exports = r,
        r.displayName = "idris",
        r.aliases = ["idr"]
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.iecst = {
                comment: [{
                    pattern: /(^|[^\\])(?:\/\*[\s\S]*?(?:\*\/|$)|\(\*[\s\S]*?(?:\*\)|$)|\{[\s\S]*?(?:\}|$))/,
                    lookbehind: !0
                }, {
                    pattern: /(^|[^\\:])\/\/.*/,
                    lookbehind: !0,
                    greedy: !0
                }],
                string: {
                    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
                    greedy: !0
                },
                "class-name": /\b(?:END_)?(?:PROGRAM|CONFIGURATION|INTERFACE|FUNCTION_BLOCK|FUNCTION|ACTION|TRANSITION|TYPE|STRUCT|(?:INITIAL_)?STEP|NAMESPACE|LIBRARY|CHANNEL|FOLDER|RESOURCE|VAR_(?:GLOBAL|INPUT|PUTPUT|IN_OUT|ACCESS|TEMP|EXTERNAL|CONFIG)|VAR|METHOD|PROPERTY)\b/i,
                keyword: /\b(?:(?:END_)?(?:IF|WHILE|REPEAT|CASE|FOR)|ELSE|FROM|THEN|ELSIF|DO|TO|BY|PRIVATE|PUBLIC|PROTECTED|CONSTANT|RETURN|EXIT|CONTINUE|GOTO|JMP|AT|RETAIN|NON_RETAIN|TASK|WITH|UNTIL|USING|EXTENDS|IMPLEMENTS|GET|SET|__TRY|__CATCH|__FINALLY|__ENDTRY)\b/,
                variable: /\b(?:AT|BOOL|BYTE|(?:D|L)?WORD|U?(?:S|D|L)?INT|L?REAL|TIME(?:_OF_DAY)?|TOD|DT|DATE(?:_AND_TIME)?|STRING|ARRAY|ANY|POINTER)\b/,
                symbol: /%[IQM][XBWDL][\d.]*|%[IQ][\d.]*/,
                number: /\b(?:16#[\da-f]+|2#[01_]+|0x[\da-f]+)\b|\b(?:T|D|DT|TOD)#[\d_shmd:]*|\b[A-Z]*#[\d.,_]*|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
                boolean: /\b(?:TRUE|FALSE|NULL)\b/,
                function: /\w+(?=\()/,
                operator: /(?:S?R?:?=>?|&&?|\*\*?|<=?|>=?|[-:^/+])|\b(?:OR|AND|MOD|NOT|XOR|LE|GE|EQ|NE|GT|LT)\b/,
                punctuation: /[();]/,
                type: {
                    pattern: /#/,
                    alias: "selector"
                }
            }
        }
        e.exports = a,
        a.displayName = "iecst",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                e.languages.ignore = {
                    comment: /^#.*/m,
                    entry: {
                        pattern: /\S(?:.*(?:(?:\\ )|\S))?/,
                        alias: "string",
                        inside: {
                            operator: /^!|\*\*?|\?/,
                            regex: {
                                pattern: /(^|[^\\])\[[^\[\]]*\]/,
                                lookbehind: !0
                            },
                            punctuation: /\//
                        }
                    }
                },
                e.languages.gitignore = e.languages.ignore,
                e.languages.hgignore = e.languages.ignore,
                e.languages.npmignore = e.languages.ignore
            }(e)
        }
        e.exports = a,
        a.displayName = "ignore",
        a.aliases = ["gitignore", "hgignore", "npmignore"]
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.inform7 = {
                string: {
                    pattern: /"[^"]*"/,
                    inside: {
                        substitution: {
                            pattern: /\[[^\[\]]+\]/,
                            inside: {
                                delimiter: {
                                    pattern: /\[|\]/,
                                    alias: "punctuation"
                                }
                            }
                        }
                    }
                },
                comment: {
                    pattern: /\[[^\[\]]+\]/,
                    greedy: !0
                },
                title: {
                    pattern: /^[ \t]*(?:volume|book|part(?! of)|chapter|section|table)\b.+/im,
                    alias: "important"
                },
                number: {
                    pattern: /(^|[^-])(?:\b\d+(?:\.\d+)?(?:\^\d+)?(?:(?!\d)\w+)?|\b(?:one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve))\b(?!-)/i,
                    lookbehind: !0
                },
                verb: {
                    pattern: /(^|[^-])\b(?:applying to|are|attacking|answering|asking|be(?:ing)?|burning|buying|called|carries|carry(?! out)|carrying|climbing|closing|conceal(?:s|ing)?|consulting|contain(?:s|ing)?|cutting|drinking|dropping|eating|enclos(?:es?|ing)|entering|examining|exiting|getting|giving|going|ha(?:ve|s|ving)|hold(?:s|ing)?|impl(?:y|ies)|incorporat(?:es?|ing)|inserting|is|jumping|kissing|listening|locking|looking|mean(?:s|ing)?|opening|provid(?:es?|ing)|pulling|pushing|putting|relat(?:es?|ing)|removing|searching|see(?:s|ing)?|setting|showing|singing|sleeping|smelling|squeezing|switching|support(?:s|ing)?|swearing|taking|tasting|telling|thinking|throwing|touching|turning|tying|unlock(?:s|ing)?|var(?:y|ies|ying)|waiting|waking|waving|wear(?:s|ing)?)\b(?!-)/i,
                    lookbehind: !0,
                    alias: "operator"
                },
                keyword: {
                    pattern: /(^|[^-])\b(?:after|before|carry out|check|continue the action|definition(?= *:)|do nothing|else|end (?:if|unless|the story)|every turn|if|include|instead(?: of)?|let|move|no|now|otherwise|repeat|report|resume the story|rule for|running through|say(?:ing)?|stop the action|test|try(?:ing)?|understand|unless|use|when|while|yes)\b(?!-)/i,
                    lookbehind: !0
                },
                property: {
                    pattern: /(^|[^-])\b(?:adjacent(?! to)|carried|closed|concealed|contained|dark|described|edible|empty|enclosed|enterable|even|female|fixed in place|full|handled|held|improper-named|incorporated|inedible|invisible|lighted|lit|lock(?:able|ed)|male|marked for listing|mentioned|negative|neuter|non-(?:empty|full|recurring)|odd|opaque|open(?:able)?|plural-named|portable|positive|privately-named|proper-named|provided|publically-named|pushable between rooms|recurring|related|rubbing|scenery|seen|singular-named|supported|swinging|switch(?:able|ed(?: on| off)?)|touch(?:able|ed)|transparent|unconcealed|undescribed|unlit|unlocked|unmarked for listing|unmentioned|unopenable|untouchable|unvisited|variable|visible|visited|wearable|worn)\b(?!-)/i,
                    lookbehind: !0,
                    alias: "symbol"
                },
                position: {
                    pattern: /(^|[^-])\b(?:above|adjacent to|back side of|below|between|down|east|everywhere|front side|here|in|inside(?: from)?|north(?:east|west)?|nowhere|on(?: top of)?|other side|outside(?: from)?|parts? of|regionally in|south(?:east|west)?|through|up|west|within)\b(?!-)/i,
                    lookbehind: !0,
                    alias: "keyword"
                },
                type: {
                    pattern: /(^|[^-])\b(?:actions?|activit(?:y|ies)|actors?|animals?|backdrops?|containers?|devices?|directions?|doors?|holders?|kinds?|lists?|m[ae]n|nobody|nothing|nouns?|numbers?|objects?|people|persons?|player(?:'s holdall)?|regions?|relations?|rooms?|rule(?:book)?s?|scenes?|someone|something|supporters?|tables?|texts?|things?|time|vehicles?|wom[ae]n)\b(?!-)/i,
                    lookbehind: !0,
                    alias: "variable"
                },
                punctuation: /[.,:;(){}]/
            },
            e.languages.inform7.string.inside.substitution.inside.rest = e.languages.inform7,
            e.languages.inform7.string.inside.substitution.inside.rest.text = {
                pattern: /\S(?:\s*\S)*/,
                alias: "comment"
            }
        }
        e.exports = a,
        a.displayName = "inform7",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.ini = {
                comment: {
                    pattern: /(^[ \f\t\v]*)[#;][^\n\r]*/m,
                    lookbehind: !0
                },
                header: {
                    pattern: /(^[ \f\t\v]*)\[[^\n\r\]]*\]?/m,
                    lookbehind: !0,
                    inside: {
                        "section-name": {
                            pattern: /(^\[[ \f\t\v]*)[^ \f\t\v\]]+(?:[ \f\t\v]+[^ \f\t\v\]]+)*/,
                            lookbehind: !0,
                            alias: "selector"
                        },
                        punctuation: /\[|\]/
                    }
                },
                key: {
                    pattern: /(^[ \f\t\v]*)[^ \f\n\r\t\v=]+(?:[ \f\t\v]+[^ \f\n\r\t\v=]+)*(?=[ \f\t\v]*=)/m,
                    lookbehind: !0,
                    alias: "attr-name"
                },
                value: {
                    pattern: /(=[ \f\t\v]*)[^ \f\n\r\t\v]+(?:[ \f\t\v]+[^ \f\n\r\t\v]+)*/,
                    lookbehind: !0,
                    alias: "attr-value",
                    inside: {
                        "inner-value": {
                            pattern: /^("|').+(?=\1$)/,
                            lookbehind: !0
                        }
                    }
                },
                punctuation: /=/
            }
        }
        e.exports = a,
        a.displayName = "ini",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.io = {
                comment: [{
                    pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
                    lookbehind: !0
                }, {
                    pattern: /(^|[^\\])\/\/.*/,
                    lookbehind: !0
                }, {
                    pattern: /(^|[^\\])#.*/,
                    lookbehind: !0
                }],
                "triple-quoted-string": {
                    pattern: /"""(?:\\[\s\S]|(?!""")[^\\])*"""/,
                    greedy: !0,
                    alias: "string"
                },
                string: {
                    pattern: /"(?:\\.|[^\\\r\n"])*"/,
                    greedy: !0
                },
                keyword: /\b(?:activate|activeCoroCount|asString|block|break|catch|clone|collectGarbage|compileString|continue|do|doFile|doMessage|doString|else|elseif|exit|for|foreach|forward|getSlot|getEnvironmentVariable|hasSlot|if|ifFalse|ifNil|ifNilEval|ifTrue|isActive|isNil|isResumable|list|message|method|parent|pass|pause|perform|performWithArgList|print|println|proto|raise|raiseResumable|removeSlot|resend|resume|schedulerSleepSeconds|self|sender|setSchedulerSleepSeconds|setSlot|shallowCopy|slotNames|super|system|then|thisBlock|thisContext|call|try|type|uniqueId|updateSlot|wait|while|write|yield)\b/,
                builtin: /\b(?:Array|AudioDevice|AudioMixer|Block|Box|Buffer|CFunction|CGI|Color|Curses|DBM|DNSResolver|DOConnection|DOProxy|DOServer|Date|Directory|Duration|DynLib|Error|Exception|FFT|File|Fnmatch|Font|Future|GL|GLE|GLScissor|GLU|GLUCylinder|GLUQuadric|GLUSphere|GLUT|Host|Image|Importer|LinkList|List|Lobby|Locals|MD5|MP3Decoder|MP3Encoder|Map|Message|Movie|Notification|Number|Object|OpenGL|Point|Protos|Regex|SGML|SGMLElement|SGMLParser|SQLite|Server|Sequence|ShowMessage|SleepyCat|SleepyCatCursor|Socket|SocketManager|Sound|Soup|Store|String|Tree|UDPSender|UPDReceiver|URL|User|Warning|WeakLink|Random|BigNum)\b/,
                boolean: /\b(?:true|false|nil)\b/,
                number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e-?\d+)?/i,
                operator: /[=!*/%+\-^&|]=|>>?=?|<<?=?|:?:?=|\+\+?|--?|\*\*?|\/\/?|%|\|\|?|&&?|\b(?:return|and|or|not)\b|@@?|\?\??|\.\./,
                punctuation: /[{}[\];(),.:]/
            }
        }
        e.exports = a,
        a.displayName = "io",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.j = {
                comment: /\bNB\..*/,
                string: {
                    pattern: /'(?:''|[^'\r\n])*'/,
                    greedy: !0
                },
                keyword: /\b(?:(?:adverb|conjunction|CR|def|define|dyad|LF|monad|noun|verb)\b|(?:assert|break|case|catch[dt]?|continue|do|else|elseif|end|fcase|for|for_\w+|goto_\w+|if|label_\w+|return|select|throw|try|while|whilst)\.)/,
                verb: {
                    pattern: /(?!\^:|;\.|[=!][.:])(?:\{(?:\.|::?)?|p(?:\.\.?|:)|[=!\]]|[<>+*\-%$|,#][.:]?|[?^]\.?|[;\[]:?|[~}"i][.:]|[ACeEIjLor]\.|(?:[_\/\\qsux]|_?\d):)/,
                    alias: "keyword"
                },
                number: /\b_?(?:(?!\d:)\d+(?:\.\d+)?(?:(?:[ejpx]|ad|ar)_?\d+(?:\.\d+)?)*(?:b_?[\da-z]+(?:\.[\da-z]+)?)?|_\b(?!\.))/,
                adverb: {
                    pattern: /[~}]|[\/\\]\.?|[bfM]\.|t[.:]/,
                    alias: "builtin"
                },
                operator: /[=a][.:]|_\./,
                conjunction: {
                    pattern: /&(?:\.:?|:)?|[.:@][.:]?|[!D][.:]|[;dHT]\.|`:?|[\^LS]:|"/,
                    alias: "variable"
                },
                punctuation: /[()]/
            }
        }
        e.exports = a,
        a.displayName = "j",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        var a = n(190)
          , r = n(175);
        function i(e) {
            e.register(a),
            e.register(r),
            function(e) {
                var t = /(^(?:[\t ]*(?:\*\s*)*))[^*\s].*$/m
                  , n = /#\s*\w+(?:\s*\([^()]*\))?/.source
                  , a = /(?:\b[a-zA-Z]\w+\s*\.\s*)*\b[A-Z]\w*(?:\s*<mem>)?|<mem>/.source.replace(/<mem>/g, (function() {
                    return n
                }
                ));
                e.languages.javadoc = e.languages.extend("javadoclike", {}),
                e.languages.insertBefore("javadoc", "keyword", {
                    reference: {
                        pattern: RegExp(/(@(?:exception|throws|see|link|linkplain|value)\s+(?:\*\s*)?)/.source + "(?:" + a + ")"),
                        lookbehind: !0,
                        inside: {
                            function: {
                                pattern: /(#\s*)\w+(?=\s*\()/,
                                lookbehind: !0
                            },
                            field: {
                                pattern: /(#\s*)\w+/,
                                lookbehind: !0
                            },
                            namespace: {
                                pattern: /\b(?:[a-z]\w*\s*\.\s*)+/,
                                inside: {
                                    punctuation: /\./
                                }
                            },
                            "class-name": /\b[A-Z]\w*/,
                            keyword: e.languages.java.keyword,
                            punctuation: /[#()[\],.]/
                        }
                    },
                    "class-name": {
                        pattern: /(@param\s+)<[A-Z]\w*>/,
                        lookbehind: !0,
                        inside: {
                            punctuation: /[.<>]/
                        }
                    },
                    "code-section": [{
                        pattern: /(\{@code\s+(?!\s))(?:[^\s{}]|\s+(?![\s}])|\{(?:[^{}]|\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\})*\})+(?=\s*\})/,
                        lookbehind: !0,
                        inside: {
                            code: {
                                pattern: t,
                                lookbehind: !0,
                                inside: e.languages.java,
                                alias: "language-java"
                            }
                        }
                    }, {
                        pattern: /(<(code|pre|tt)>(?!<code>)\s*)\S(?:\S|\s+\S)*?(?=\s*<\/\2>)/,
                        lookbehind: !0,
                        inside: {
                            line: {
                                pattern: t,
                                lookbehind: !0,
                                inside: {
                                    tag: e.languages.markup.tag,
                                    entity: e.languages.markup.entity,
                                    code: {
                                        pattern: /.+/,
                                        inside: e.languages.java,
                                        alias: "language-java"
                                    }
                                }
                            }
                        }
                    }],
                    tag: e.languages.markup.tag,
                    entity: e.languages.markup.entity
                }),
                e.languages.javadoclike.addSupport("java", e.languages.javadoc)
            }(e)
        }
        e.exports = i,
        i.displayName = "javadoc",
        i.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.javastacktrace = {
                summary: {
                    pattern: /^[\t ]*(?:(?:Caused by:|Suppressed:|Exception in thread "[^"]*")[\t ]+)?[\w$.]+(?::.*)?$/m,
                    inside: {
                        keyword: {
                            pattern: /^(\s*)(?:(?:Caused by|Suppressed)(?=:)|Exception in thread)/m,
                            lookbehind: !0
                        },
                        string: {
                            pattern: /^(\s*)"[^"]*"/,
                            lookbehind: !0
                        },
                        exceptions: {
                            pattern: /^(:?\s*)[\w$.]+(?=:|$)/,
                            lookbehind: !0,
                            inside: {
                                "class-name": /[\w$]+(?=$|:)/,
                                namespace: /[a-z]\w*/,
                                punctuation: /[.:]/
                            }
                        },
                        message: {
                            pattern: /(:\s*)\S.*/,
                            lookbehind: !0,
                            alias: "string"
                        },
                        punctuation: /:/
                    }
                },
                "stack-frame": {
                    pattern: /^[\t ]*at (?:[\w$./]|@[\w$.+-]*\/)+(?:<init>)?\([^()]*\)/m,
                    inside: {
                        keyword: {
                            pattern: /^(\s*)at(?= )/,
                            lookbehind: !0
                        },
                        source: [{
                            pattern: /(\()\w+\.\w+:\d+(?=\))/,
                            lookbehind: !0,
                            inside: {
                                file: /^\w+\.\w+/,
                                punctuation: /:/,
                                "line-number": {
                                    pattern: /\d+/,
                                    alias: "number"
                                }
                            }
                        }, {
                            pattern: /(\()[^()]*(?=\))/,
                            lookbehind: !0,
                            inside: {
                                keyword: /^(?:Unknown Source|Native Method)$/
                            }
                        }],
                        "class-name": /[\w$]+(?=\.(?:<init>|[\w$]+)\()/,
                        function: /(?:<init>|[\w$]+)(?=\()/,
                        "class-loader": {
                            pattern: /(\s)[a-z]\w*(?:\.[a-z]\w*)*(?=\/[\w@$.]*\/)/,
                            lookbehind: !0,
                            alias: "namespace",
                            inside: {
                                punctuation: /\./
                            }
                        },
                        module: {
                            pattern: /([\s/])[a-z]\w*(?:\.[a-z]\w*)*(?:@[\w$.+-]*)?(?=\/)/,
                            lookbehind: !0,
                            inside: {
                                version: {
                                    pattern: /(@)[\s\S]+/,
                                    lookbehind: !0,
                                    alias: "number"
                                },
                                punctuation: /[@.]/
                            }
                        },
                        namespace: {
                            pattern: /(?:[a-z]\w*\.)+/,
                            inside: {
                                punctuation: /\./
                            }
                        },
                        punctuation: /[()/.]/
                    }
                },
                more: {
                    pattern: /^[\t ]*\.{3} \d+ [a-z]+(?: [a-z]+)*/m,
                    inside: {
                        punctuation: /\.{3}/,
                        number: /\d+/,
                        keyword: /\b[a-z]+(?: [a-z]+)*\b/
                    }
                }
            }
        }
        e.exports = a,
        a.displayName = "javastacktrace",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.jexl = {
                string: /(["'])(?:\\[\s\S]|(?!\1)[^\\])*\1/,
                transform: {
                    pattern: /(\|\s*)[a-zA-Z\u0430-\u044f\u0410-\u042f_\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF$][\w\u0430-\u044f\u0410-\u042f\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF$]*/,
                    alias: "function",
                    lookbehind: !0
                },
                function: /[a-zA-Z\u0430-\u044f\u0410-\u042f_\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF$][\w\u0430-\u044f\u0410-\u042f\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF$]*\s*(?=\()/,
                number: /\b\d+(?:\.\d+)?\b|\B\.\d+\b/,
                operator: /[<>!]=?|-|\+|&&|==|\|\|?|\/\/?|[?:*^%]/,
                boolean: /\b(?:true|false)\b/,
                keyword: /\bin\b/,
                punctuation: /[{}[\](),.]/
            }
        }
        e.exports = a,
        a.displayName = "jexl",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.jolie = e.languages.extend("clike", {
                string: {
                    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
                    greedy: !0
                },
                keyword: /\b(?:include|define|is_defined|undef|main|init|outputPort|inputPort|Location|Protocol|Interfaces|RequestResponse|OneWay|type|interface|extender|throws|cset|csets|forward|Aggregates|Redirects|embedded|courier|execution|sequential|concurrent|single|scope|install|throw|comp|cH|default|global|linkIn|linkOut|synchronized|this|new|for|if|else|while|in|Jolie|Java|Javascript|nullProcess|spawn|constants|with|provide|until|exit|foreach|instanceof|over|service)\b/,
                number: /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?l?/i,
                operator: /-[-=>]?|\+[+=]?|<[<=]?|[>=*!]=?|&&|\|\||[:?\/%^]/,
                punctuation: /[,.]/,
                builtin: /\b(?:undefined|string|int|void|long|Byte|bool|double|float|char|any)\b/,
                symbol: /[|;@]/
            }),
            delete e.languages.jolie["class-name"],
            e.languages.insertBefore("jolie", "keyword", {
                function: {
                    pattern: /((?:\b(?:outputPort|inputPort|in|service|courier)\b|@)\s*)\w+/,
                    lookbehind: !0
                },
                aggregates: {
                    pattern: /(\bAggregates\s*:\s*)(?:\w+(?:\s+with\s+\w+)?\s*,\s*)*\w+(?:\s+with\s+\w+)?/,
                    lookbehind: !0,
                    inside: {
                        "with-extension": {
                            pattern: /\bwith\s+\w+/,
                            inside: {
                                keyword: /\bwith\b/
                            }
                        },
                        function: {
                            pattern: /\w+/
                        },
                        punctuation: {
                            pattern: /,/
                        }
                    }
                },
                redirects: {
                    pattern: /(\bRedirects\s*:\s*)(?:\w+\s*=>\s*\w+\s*,\s*)*(?:\w+\s*=>\s*\w+)/,
                    lookbehind: !0,
                    inside: {
                        punctuation: {
                            pattern: /,/
                        },
                        function: {
                            pattern: /\w+/
                        },
                        symbol: {
                            pattern: /=>/
                        }
                    }
                }
            })
        }
        e.exports = a,
        a.displayName = "jolie",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                var t = /\\\((?:[^()]|\([^()]*\))*\)/.source
                  , n = RegExp(/"(?:[^"\r\n\\]|\\[^\r\n(]|__)*"/.source.replace(/__/g, (function() {
                    return t
                }
                )))
                  , a = {
                    interpolation: {
                        pattern: RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + t),
                        lookbehind: !0,
                        inside: {
                            content: {
                                pattern: /^(\\\()[\s\S]+(?=\)$)/,
                                lookbehind: !0,
                                inside: null
                            },
                            punctuation: /^\\\(|\)$/
                        }
                    }
                }
                  , r = e.languages.jq = {
                    comment: /#.*/,
                    property: {
                        pattern: RegExp(n.source + /(?=\s*:(?!:))/.source),
                        greedy: !0,
                        inside: a
                    },
                    string: {
                        pattern: n,
                        greedy: !0,
                        inside: a
                    },
                    function: {
                        pattern: /(\bdef\s+)[a-z_]\w+/i,
                        lookbehind: !0
                    },
                    variable: /\B\$\w+/,
                    "property-literal": {
                        pattern: /\b[a-z_]\w*(?=\s*:(?!:))/i,
                        alias: "property"
                    },
                    keyword: /\b(?:as|break|catch|def|elif|else|end|foreach|if|import|include|label|module|modulemeta|null|reduce|then|try|while)\b/,
                    boolean: /\b(?:true|false)\b/,
                    number: /(?:\b\d+\.|\B\.)?\b\d+(?:[eE][+-]?\d+)?\b/,
                    operator: [{
                        pattern: /\|=?/,
                        alias: "pipe"
                    }, /\.\.|[!=<>]?=|\?\/\/|\/\/=?|[-+*/%]=?|[<>?]|\b(?:and|or|not)\b/],
                    "c-style-function": {
                        pattern: /\b[a-z_]\w*(?=\s*\()/i,
                        alias: "function"
                    },
                    punctuation: /::|[()\[\]{},:;]|\.(?=\s*[\[\w$])/,
                    dot: {
                        pattern: /\./,
                        alias: "important"
                    }
                };
                a.interpolation.inside.content.inside = r
            }(e)
        }
        e.exports = a,
        a.displayName = "jq",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                function t(e, t) {
                    return RegExp(e.replace(/<ID>/g, (function() {
                        return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source
                    }
                    )), t)
                }
                e.languages.insertBefore("javascript", "function-variable", {
                    "method-variable": {
                        pattern: RegExp("(\\.\\s*)" + e.languages.javascript["function-variable"].pattern.source),
                        lookbehind: !0,
                        alias: ["function-variable", "method", "function", "property-access"]
                    }
                }),
                e.languages.insertBefore("javascript", "function", {
                    method: {
                        pattern: RegExp("(\\.\\s*)" + e.languages.javascript.function.source),
                        lookbehind: !0,
                        alias: ["function", "property-access"]
                    }
                }),
                e.languages.insertBefore("javascript", "constant", {
                    "known-class-name": [{
                        pattern: /\b(?:(?:(?:Uint|Int)(?:8|16|32)|Uint8Clamped|Float(?:32|64))?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|(?:Weak)?(?:Set|Map)|WebAssembly)\b/,
                        alias: "class-name"
                    }, {
                        pattern: /\b(?:[A-Z]\w*)Error\b/,
                        alias: "class-name"
                    }]
                }),
                e.languages.insertBefore("javascript", "keyword", {
                    imports: {
                        pattern: t(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),
                        lookbehind: !0,
                        inside: e.languages.javascript
                    },
                    exports: {
                        pattern: t(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),
                        lookbehind: !0,
                        inside: e.languages.javascript
                    }
                }),
                e.languages.javascript.keyword.unshift({
                    pattern: /\b(?:as|default|export|from|import)\b/,
                    alias: "module"
                }, {
                    pattern: /\b(?:await|break|catch|continue|do|else|for|finally|if|return|switch|throw|try|while|yield)\b/,
                    alias: "control-flow"
                }, {
                    pattern: /\bnull\b/,
                    alias: ["null", "nil"]
                }, {
                    pattern: /\bundefined\b/,
                    alias: "nil"
                }),
                e.languages.insertBefore("javascript", "operator", {
                    spread: {
                        pattern: /\.{3}/,
                        alias: "operator"
                    },
                    arrow: {
                        pattern: /=>/,
                        alias: "operator"
                    }
                }),
                e.languages.insertBefore("javascript", "punctuation", {
                    "property-access": {
                        pattern: t(/(\.\s*)#?<ID>/.source),
                        lookbehind: !0
                    },
                    "maybe-class-name": {
                        pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
                        lookbehind: !0
                    },
                    dom: {
                        pattern: /\b(?:document|location|navigator|performance|(?:local|session)Storage|window)\b/,
                        alias: "variable"
                    },
                    console: {
                        pattern: /\bconsole(?=\s*\.)/,
                        alias: "class-name"
                    }
                });
                for (var n = ["function", "function-variable", "method", "method-variable", "property-access"], a = 0; a < n.length; a++) {
                    var r = n[a]
                      , i = e.languages.javascript[r];
                    "RegExp" === e.util.type(i) && (i = e.languages.javascript[r] = {
                        pattern: i
                    });
                    var o = i.inside || {};
                    i.inside = o,
                    o["maybe-class-name"] = /^[A-Z][\s\S]*/
                }
            }(e)
        }
        e.exports = a,
        a.displayName = "jsExtras",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                var t = e.languages.javascript["template-string"]
                  , n = t.pattern.source
                  , a = t.inside.interpolation
                  , r = a.inside["interpolation-punctuation"]
                  , i = a.pattern.source;
                function o(t, a) {
                    if (e.languages[t])
                        return {
                            pattern: RegExp("((?:" + a + ")\\s*)" + n),
                            lookbehind: !0,
                            greedy: !0,
                            inside: {
                                "template-punctuation": {
                                    pattern: /^`|`$/,
                                    alias: "string"
                                },
                                "embedded-code": {
                                    pattern: /[\s\S]+/,
                                    alias: t
                                }
                            }
                        }
                }
                function s(e, t) {
                    return "___" + t.toUpperCase() + "_" + e + "___"
                }
                function l(t, n, a) {
                    var r = {
                        code: t,
                        grammar: n,
                        language: a
                    };
                    return e.hooks.run("before-tokenize", r),
                    r.tokens = e.tokenize(r.code, r.grammar),
                    e.hooks.run("after-tokenize", r),
                    r.tokens
                }
                function c(t) {
                    var n = {};
                    n["interpolation-punctuation"] = r;
                    var i = e.tokenize(t, n);
                    if (3 === i.length) {
                        var o = [1, 1];
                        o.push.apply(o, l(i[1], e.languages.javascript, "javascript")),
                        i.splice.apply(i, o)
                    }
                    return new e.Token("interpolation",i,a.alias,t)
                }
                function u(t, n, a) {
                    var r = e.tokenize(t, {
                        interpolation: {
                            pattern: RegExp(i),
                            lookbehind: !0
                        }
                    })
                      , o = 0
                      , u = {}
                      , d = l(r.map((function(e) {
                        if ("string" === typeof e)
                            return e;
                        for (var n, r = e.content; -1 !== t.indexOf(n = s(o++, a)); )
                            ;
                        return u[n] = r,
                        n
                    }
                    )).join(""), n, a)
                      , p = Object.keys(u);
                    return o = 0,
                    function e(t) {
                        for (var n = 0; n < t.length; n++) {
                            if (o >= p.length)
                                return;
                            var a = t[n];
                            if ("string" === typeof a || "string" === typeof a.content) {
                                var r = p[o]
                                  , i = "string" === typeof a ? a : a.content
                                  , s = i.indexOf(r);
                                if (-1 !== s) {
                                    ++o;
                                    var l = i.substring(0, s)
                                      , d = c(u[r])
                                      , g = i.substring(s + r.length)
                                      , m = [];
                                    if (l && m.push(l),
                                    m.push(d),
                                    g) {
                                        var b = [g];
                                        e(b),
                                        m.push.apply(m, b)
                                    }
                                    "string" === typeof a ? (t.splice.apply(t, [n, 1].concat(m)),
                                    n += m.length - 1) : a.content = m
                                }
                            } else {
                                var f = a.content;
                                Array.isArray(f) ? e(f) : e([f])
                            }
                        }
                    }(d),
                    new e.Token(a,d,"language-" + a,t)
                }
                e.languages.javascript["template-string"] = [o("css", /\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source), o("html", /\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source), o("svg", /\bsvg/.source), o("markdown", /\b(?:md|markdown)/.source), o("graphql", /\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source), o("sql", /\bsql/.source), t].filter(Boolean);
                var d = {
                    javascript: !0,
                    js: !0,
                    typescript: !0,
                    ts: !0,
                    jsx: !0,
                    tsx: !0
                };
                function p(e) {
                    return "string" === typeof e ? e : Array.isArray(e) ? e.map(p).join("") : p(e.content)
                }
                e.hooks.add("after-tokenize", (function(t) {
                    t.language in d && function t(n) {
                        for (var a = 0, r = n.length; a < r; a++) {
                            var i = n[a];
                            if ("string" !== typeof i) {
                                var o = i.content;
                                if (Array.isArray(o))
                                    if ("template-string" === i.type) {
                                        var s = o[1];
                                        if (3 === o.length && "string" !== typeof s && "embedded-code" === s.type) {
                                            var l = p(s)
                                              , c = s.alias
                                              , d = Array.isArray(c) ? c[0] : c
                                              , g = e.languages[d];
                                            if (!g)
                                                continue;
                                            o[1] = u(l, g, d)
                                        }
                                    } else
                                        t(o);
                                else
                                    "string" !== typeof o && t([o])
                            }
                        }
                    }(t.tokens)
                }
                ))
            }(e)
        }
        e.exports = a,
        a.displayName = "jsTemplates",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        var a = n(175)
          , r = n(191);
        function i(e) {
            e.register(a),
            e.register(r),
            function(e) {
                var t = e.languages.javascript
                  , n = /\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})+\}/.source
                  , a = "(@(?:param|arg|argument|property)\\s+(?:" + n + "\\s+)?)";
                e.languages.jsdoc = e.languages.extend("javadoclike", {
                    parameter: {
                        pattern: RegExp(a + /(?:(?!\s)[$\w\xA0-\uFFFF.])+(?=\s|$)/.source),
                        lookbehind: !0,
                        inside: {
                            punctuation: /\./
                        }
                    }
                }),
                e.languages.insertBefore("jsdoc", "keyword", {
                    "optional-parameter": {
                        pattern: RegExp(a + /\[(?:(?!\s)[$\w\xA0-\uFFFF.])+(?:=[^[\]]+)?\](?=\s|$)/.source),
                        lookbehind: !0,
                        inside: {
                            parameter: {
                                pattern: /(^\[)[$\w\xA0-\uFFFF\.]+/,
                                lookbehind: !0,
                                inside: {
                                    punctuation: /\./
                                }
                            },
                            code: {
                                pattern: /(=)[\s\S]*(?=\]$)/,
                                lookbehind: !0,
                                inside: t,
                                alias: "language-javascript"
                            },
                            punctuation: /[=[\]]/
                        }
                    },
                    "class-name": [{
                        pattern: RegExp(/(@(?:augments|extends|class|interface|memberof!?|template|this|typedef)\s+(?:<TYPE>\s+)?)[A-Z]\w*(?:\.[A-Z]\w*)*/.source.replace(/<TYPE>/g, (function() {
                            return n
                        }
                        ))),
                        lookbehind: !0,
                        inside: {
                            punctuation: /\./
                        }
                    }, {
                        pattern: RegExp("(@[a-z]+\\s+)" + n),
                        lookbehind: !0,
                        inside: {
                            string: t.string,
                            number: t.number,
                            boolean: t.boolean,
                            keyword: e.languages.typescript.keyword,
                            operator: /=>|\.\.\.|[&|?:*]/,
                            punctuation: /[.,;=<>{}()[\]]/
                        }
                    }],
                    example: {
                        pattern: /(@example\s+(?!\s))(?:[^@\s]|\s+(?!\s))+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,
                        lookbehind: !0,
                        inside: {
                            code: {
                                pattern: /^([\t ]*(?:\*\s*)?)\S.*$/m,
                                lookbehind: !0,
                                inside: t,
                                alias: "language-javascript"
                            }
                        }
                    }
                }),
                e.languages.javadoclike.addSupport("javascript", e.languages.jsdoc)
            }(e)
        }
        e.exports = i,
        i.displayName = "jsdoc",
        i.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        var a = n(192);
        function r(e) {
            e.register(a),
            function(e) {
                var t = /("|')(?:\\(?:\r\n?|\n|.)|(?!\1)[^\\\r\n])*\1/;
                e.languages.json5 = e.languages.extend("json", {
                    property: [{
                        pattern: RegExp(t.source + "(?=\\s*:)"),
                        greedy: !0
                    }, {
                        pattern: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/,
                        alias: "unquoted"
                    }],
                    string: {
                        pattern: t,
                        greedy: !0
                    },
                    number: /[+-]?\b(?:NaN|Infinity|0x[a-fA-F\d]+)\b|[+-]?(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[eE][+-]?\d+\b)?/
                })
            }(e)
        }
        e.exports = r,
        r.displayName = "json5",
        r.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        var a = n(192);
        function r(e) {
            e.register(a),
            e.languages.jsonp = e.languages.extend("json", {
                punctuation: /[{}[\]();,.]/
            }),
            e.languages.insertBefore("jsonp", "punctuation", {
                function: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*\()/
            })
        }
        e.exports = r,
        r.displayName = "jsonp",
        r.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.jsstacktrace = {
                "error-message": {
                    pattern: /^\S.*/m,
                    alias: "string"
                },
                "stack-frame": {
                    pattern: /(^[ \t]+)at[ \t].*/m,
                    lookbehind: !0,
                    inside: {
                        "not-my-code": {
                            pattern: /^at[ \t]+(?!\s)(?:node\.js|<unknown>|.*(?:node_modules|\(<anonymous>\)|\(<unknown>|<anonymous>$|\(internal\/|\(node\.js)).*/m,
                            alias: "comment"
                        },
                        filename: {
                            pattern: /(\bat\s+(?!\s)|\()(?:[a-zA-Z]:)?[^():]+(?=:)/,
                            lookbehind: !0,
                            alias: "url"
                        },
                        function: {
                            pattern: /(at\s+(?:new\s+)?)(?!\s)[_$a-zA-Z\xA0-\uFFFF<][.$\w\xA0-\uFFFF<>]*/,
                            lookbehind: !0,
                            inside: {
                                punctuation: /\./
                            }
                        },
                        punctuation: /[()]/,
                        keyword: /\b(?:at|new)\b/,
                        alias: {
                            pattern: /\[(?:as\s+)?(?!\s)[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\]/,
                            alias: "variable"
                        },
                        "line-number": {
                            pattern: /:[0-9]+(?::[0-9]+)?\b/,
                            alias: "number",
                            inside: {
                                punctuation: /:/
                            }
                        }
                    }
                }
            }
        }
        e.exports = a,
        a.displayName = "jsstacktrace",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.julia = {
                comment: {
                    pattern: /(^|[^\\])(?:#=(?:[^#=]|=(?!#)|#(?!=)|#=(?:[^#=]|=(?!#)|#(?!=))*=#)*=#|#.*)/,
                    lookbehind: !0
                },
                regex: {
                    pattern: /r"(?:\\.|[^"\\\r\n])*"[imsx]{0,4}/,
                    greedy: !0
                },
                string: {
                    pattern: /"""[\s\S]+?"""|(?:\b\w+)?"(?:\\.|[^"\\\r\n])*"|(^|[^\w'])'(?:\\[^\r\n][^'\r\n]*|[^\\\r\n])'|`(?:[^\\`\r\n]|\\.)*`/,
                    lookbehind: !0,
                    greedy: !0
                },
                keyword: /\b(?:abstract|baremodule|begin|bitstype|break|catch|ccall|const|continue|do|else|elseif|end|export|finally|for|function|global|if|immutable|import|importall|in|let|local|macro|module|print|println|quote|return|struct|try|type|typealias|using|while)\b/,
                boolean: /\b(?:true|false)\b/,
                number: /(?:\b(?=\d)|\B(?=\.))(?:0[box])?(?:[\da-f]+(?:_[\da-f]+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[efp][+-]?\d+(?:_\d+)*)?j?/i,
                operator: /&&|\|\||[-+*^%\xf7\u22bb&$\\]=?|\/[\/=]?|!=?=?|\|[=>]?|<(?:<=?|[=:|])?|>(?:=|>>?=?)?|==?=?|[~\u2260\u2264\u2265'\u221a\u221b]/,
                punctuation: /::?|[{}[\]();,.?]/,
                constant: /\b(?:(?:NaN|Inf)(?:16|32|64)?|im|pi)\b|[\u03c0\u212f]/
            }
        }
        e.exports = a,
        a.displayName = "julia",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.keyman = {
                comment: /\bc\s.*/i,
                function: /\[\s*(?:(?:CTRL|SHIFT|ALT|LCTRL|RCTRL|LALT|RALT|CAPS|NCAPS)\s+)*(?:[TKU]_[\w?]+|".+?"|'.+?')\s*\]/i,
                string: /("|').*?\1/,
                bold: [/&(?:baselayout|bitmap|capsononly|capsalwaysoff|shiftfreescaps|copyright|ethnologuecode|hotkey|includecodes|keyboardversion|kmw_embedcss|kmw_embedjs|kmw_helpfile|kmw_helptext|kmw_rtl|language|layer|layoutfile|message|mnemoniclayout|name|oldcharposmatching|platform|targets|version|visualkeyboard|windowslanguages)\b/i, /\b(?:bitmap|bitmaps|caps on only|caps always off|shift frees caps|copyright|hotkey|language|layout|message|name|version)\b/i],
                keyword: /\b(?:any|baselayout|beep|call|context|deadkey|dk|if|index|layer|notany|nul|outs|platform|return|reset|save|set|store|use)\b/i,
                atrule: /\b(?:ansi|begin|unicode|group|using keys|match|nomatch)\b/i,
                number: /\b(?:U\+[\dA-F]+|d\d+|x[\da-f]+|\d+)\b/i,
                operator: /[+>\\,()]/,
                tag: /\$(?:keyman|kmfl|weaver|keymanweb|keymanonly):/i
            }
        }
        e.exports = a,
        a.displayName = "keyman",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                e.languages.kotlin = e.languages.extend("clike", {
                    keyword: {
                        pattern: /(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,
                        lookbehind: !0
                    },
                    function: [{
                        pattern: /(?:`[^\r\n`]+`|\b\w+)(?=\s*\()/,
                        greedy: !0
                    }, {
                        pattern: /(\.)(?:`[^\r\n`]+`|\w+)(?=\s*\{)/,
                        lookbehind: !0,
                        greedy: !0
                    }],
                    number: /\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,
                    operator: /\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/
                }),
                delete e.languages.kotlin["class-name"],
                e.languages.insertBefore("kotlin", "string", {
                    "raw-string": {
                        pattern: /("""|''')[\s\S]*?\1/,
                        alias: "string"
                    }
                }),
                e.languages.insertBefore("kotlin", "keyword", {
                    annotation: {
                        pattern: /\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,
                        alias: "builtin"
                    }
                }),
                e.languages.insertBefore("kotlin", "function", {
                    label: {
                        pattern: /\b\w+@|@\w+\b/,
                        alias: "symbol"
                    }
                });
                var t = [{
                    pattern: /\$\{[^}]+\}/,
                    inside: {
                        delimiter: {
                            pattern: /^\$\{|\}$/,
                            alias: "variable"
                        },
                        rest: e.languages.kotlin
                    }
                }, {
                    pattern: /\$\w+/,
                    alias: "variable"
                }];
                e.languages.kotlin.string.inside = e.languages.kotlin["raw-string"].inside = {
                    interpolation: t
                },
                e.languages.kt = e.languages.kotlin,
                e.languages.kts = e.languages.kotlin
            }(e)
        }
        e.exports = a,
        a.displayName = "kotlin",
        a.aliases = ["kt", "kts"]
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                var t = /\s\x00-\x1f\x22-\x2f\x3a-\x3f\x5b-\x5e\x60\x7b-\x7e/.source;
                function n(e, n) {
                    return RegExp(e.replace(/<nonId>/g, t), n)
                }
                e.languages.kumir = {
                    comment: {
                        pattern: /\|.*/
                    },
                    prolog: {
                        pattern: /#.*/,
                        greedy: !0
                    },
                    string: {
                        pattern: /"[^\n\r"]*"|'[^\n\r']*'/,
                        greedy: !0
                    },
                    boolean: {
                        pattern: n(/(^|[<nonId>])(?:\u0434\u0430|\u043d\u0435\u0442)(?=[<nonId>]|$)/.source),
                        lookbehind: !0
                    },
                    "operator-word": {
                        pattern: n(/(^|[<nonId>])(?:\u0438|\u0438\u043b\u0438|\u043d\u0435)(?=[<nonId>]|$)/.source),
                        lookbehind: !0,
                        alias: "keyword"
                    },
                    "system-variable": {
                        pattern: n(/(^|[<nonId>])\u0437\u043d\u0430\u0447(?=[<nonId>]|$)/.source),
                        lookbehind: !0,
                        alias: "keyword"
                    },
                    type: [{
                        pattern: n(/(^|[<nonId>])(?:\u0432\u0435\u0449|\u043b\u0438\u0442|\u043b\u043e\u0433|\u0441\u0438\u043c|\u0446\u0435\u043b)(?:\x20*\u0442\u0430\u0431)?(?=[<nonId>]|$)/.source),
                        lookbehind: !0,
                        alias: "builtin"
                    }, {
                        pattern: n(/(^|[<nonId>])(?:\u043a\u043e\u043c\u043f\u043b|\u0441\u043a\u0430\u043d\u043a\u043e\u0434|\u0444\u0430\u0439\u043b|\u0446\u0432\u0435\u0442)(?=[<nonId>]|$)/.source),
                        lookbehind: !0,
                        alias: "important"
                    }],
                    keyword: {
                        pattern: n(/(^|[<nonId>])(?:\u0430\u043b\u0433|\u0430\u0440\u0433(?:\x20*\u0440\u0435\u0437)?|\u0432\u0432\u043e\u0434|\u0412\u041a\u041b\u042e\u0427\u0418\u0422\u042c|\u0432\u0441[\u0435\u0451]|\u0432\u044b\u0431\u043e\u0440|\u0432\u044b\u0432\u043e\u0434|\u0432\u044b\u0445\u043e\u0434|\u0434\u0430\u043d\u043e|\u0434\u043b\u044f|\u0434\u043e|\u0434\u0441|\u0435\u0441\u043b\u0438|\u0438\u043d\u0430\u0447\u0435|\u0438\u0441\u043f|\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c|\u043a\u043e\u043d(?:(?:\x20+|_)\u0438\u0441\u043f)?|\u043a\u0446(?:(?:\x20+|_)\u043f\u0440\u0438)?|\u043d\u0430\u0434\u043e|\u043d\u0430\u0447|\u043d\u0441|\u043d\u0446|\u043e\u0442|\u043f\u0430\u0443\u0437\u0430|\u043f\u043e\u043a\u0430|\u043f\u0440\u0438|\u0440\u0430\u0437\u0430?|\u0440\u0435\u0437|\u0441\u0442\u043e\u043f|\u0442\u0430\u0431|\u0442\u043e|\u0443\u0442\u0432|\u0448\u0430\u0433)(?=[<nonId>]|$)/.source),
                        lookbehind: !0
                    },
                    name: {
                        pattern: n(/(^|[<nonId>])[^\d<nonId>][^<nonId>]*(?:\x20+[^<nonId>]+)*(?=[<nonId>]|$)/.source),
                        lookbehind: !0
                    },
                    number: {
                        pattern: n(/(^|[<nonId>])(?:\B\$[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)(?=[<nonId>]|$)/.source, "i"),
                        lookbehind: !0
                    },
                    punctuation: /:=|[(),:;\[\]]/,
                    "operator-char": {
                        pattern: /\*\*?|<[=>]?|>=?|[-+/=]/,
                        alias: "operator"
                    }
                },
                e.languages.kum = e.languages.kumir
            }(e)
        }
        e.exports = a,
        a.displayName = "kumir",
        a.aliases = ["kum"]
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                var t = /\\(?:[^a-z()[\]]|[a-z*]+)/i
                  , n = {
                    "equation-command": {
                        pattern: t,
                        alias: "regex"
                    }
                };
                e.languages.latex = {
                    comment: /%.*/m,
                    cdata: {
                        pattern: /(\\begin\{((?:verbatim|lstlisting)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
                        lookbehind: !0
                    },
                    equation: [{
                        pattern: /\$\$(?:\\[\s\S]|[^\\$])+\$\$|\$(?:\\[\s\S]|[^\\$])+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/,
                        inside: n,
                        alias: "string"
                    }, {
                        pattern: /(\\begin\{((?:equation|math|eqnarray|align|multline|gather)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
                        lookbehind: !0,
                        inside: n,
                        alias: "string"
                    }],
                    keyword: {
                        pattern: /(\\(?:begin|end|ref|cite|label|usepackage|documentclass)(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
                        lookbehind: !0
                    },
                    url: {
                        pattern: /(\\url\{)[^}]+(?=\})/,
                        lookbehind: !0
                    },
                    headline: {
                        pattern: /(\\(?:part|chapter|section|subsection|frametitle|subsubsection|paragraph|subparagraph|subsubparagraph|subsubsubparagraph)\*?(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
                        lookbehind: !0,
                        alias: "class-name"
                    },
                    function: {
                        pattern: t,
                        alias: "selector"
                    },
                    punctuation: /[[\]{}&]/
                },
                e.languages.tex = e.languages.latex,
                e.languages.context = e.languages.latex
            }(e)
        }
        e.exports = a,
        a.displayName = "latex",
        a.aliases = ["tex", "context"]
    }
    , function(e, t, n) {
        "use strict";
        var a = n(156)
          , r = n(176);
        function i(e) {
            e.register(a),
            e.register(r),
            function(e) {
                e.languages.latte = {
                    comment: /^\{\*[\s\S]*/,
                    ld: {
                        pattern: /^\{(?:[=_]|\/?(?!\d|\w+\()\w+)?/,
                        inside: {
                            punctuation: /^\{\/?/,
                            tag: {
                                pattern: /.+/,
                                alias: "important"
                            }
                        }
                    },
                    rd: {
                        pattern: /\}$/,
                        inside: {
                            punctuation: /.+/
                        }
                    },
                    php: {
                        pattern: /\S(?:[\s\S]*\S)?/,
                        alias: "language-php",
                        inside: e.languages.php
                    }
                };
                var t = e.languages.extend("markup", {});
                e.languages.insertBefore("inside", "attr-value", {
                    "n-attr": {
                        pattern: /n:[\w-]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+))?/,
                        inside: {
                            "attr-name": {
                                pattern: /^[^\s=]+/,
                                alias: "important"
                            },
                            "attr-value": {
                                pattern: /=[\s\S]+/,
                                inside: {
                                    punctuation: [/^=/, {
                                        pattern: /^(\s*)["']|["']$/,
                                        lookbehind: !0
                                    }],
                                    php: {
                                        pattern: /\S(?:[\s\S]*\S)?/,
                                        inside: e.languages.php
                                    }
                                }
                            }
                        }
                    }
                }, t.tag),
                e.hooks.add("before-tokenize", (function(n) {
                    if ("latte" === n.language) {
                        e.languages["markup-templating"].buildPlaceholders(n, "latte", /\{\*[\s\S]*?\*\}|\{[^'"\s{}*](?:[^"'/{}]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|\/\*(?:[^*]|\*(?!\/))*\*\/)*?\}/g),
                        n.grammar = t
                    }
                }
                )),
                e.hooks.add("after-tokenize", (function(t) {
                    e.languages["markup-templating"].tokenizePlaceholders(t, "latte")
                }
                ))
            }(e)
        }
        e.exports = i,
        i.displayName = "latte",
        i.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.less = e.languages.extend("css", {
                comment: [/\/\*[\s\S]*?\*\//, {
                    pattern: /(^|[^\\])\/\/.*/,
                    lookbehind: !0
                }],
                atrule: {
                    pattern: /@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,
                    inside: {
                        punctuation: /[:()]/
                    }
                },
                selector: {
                    pattern: /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,
                    inside: {
                        variable: /@+[\w-]+/
                    }
                },
                property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/i,
                operator: /[+\-*\/]/
            }),
            e.languages.insertBefore("less", "property", {
                variable: [{
                    pattern: /@[\w-]+\s*:/,
                    inside: {
                        punctuation: /:/
                    }
                }, /@@?[\w-]+/],
                "mixin-usage": {
                    pattern: /([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,
                    lookbehind: !0,
                    alias: "function"
                }
            })
        }
        e.exports = a,
        a.displayName = "less",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        var a = n(193);
        function r(e) {
            e.register(a),
            function(e) {
                for (var t = /\((?:[^();"#\\]|\\[\s\S]|;.*(?!.)|"(?:[^"\\]|\\.)*"|#(?:\{(?:(?!#\})[\s\S])*#\}|[^{])|<expr>)*\)/.source, n = 0; n < 5; n++)
                    t = t.replace(/<expr>/g, (function() {
                        return t
                    }
                    ));
                t = t.replace(/<expr>/g, /[^\s\S]/.source);
                var a = e.languages.lilypond = {
                    comment: /%(?:(?!\{).*|\{[\s\S]*?%\})/,
                    "embedded-scheme": {
                        pattern: RegExp(/(^|[=\s])#(?:"(?:[^"\\]|\\.)*"|[^\s()"]*(?:[^\s()]|<expr>))/.source.replace(/<expr>/g, (function() {
                            return t
                        }
                        )), "m"),
                        lookbehind: !0,
                        greedy: !0,
                        inside: {
                            scheme: {
                                pattern: /^(#)[\s\S]+$/,
                                lookbehind: !0,
                                alias: "language-scheme",
                                inside: {
                                    "embedded-lilypond": {
                                        pattern: /#\{[\s\S]*?#\}/,
                                        greedy: !0,
                                        inside: {
                                            punctuation: /^#\{|#\}$/,
                                            lilypond: {
                                                pattern: /[\s\S]+/,
                                                alias: "language-lilypond",
                                                inside: null
                                            }
                                        }
                                    },
                                    rest: e.languages.scheme
                                }
                            },
                            punctuation: /#/
                        }
                    },
                    string: {
                        pattern: /"(?:[^"\\]|\\.)*"/,
                        greedy: !0
                    },
                    "class-name": {
                        pattern: /(\\new\s+)[\w-]+/,
                        lookbehind: !0
                    },
                    keyword: {
                        pattern: /\\[a-z][-\w]*/i,
                        inside: {
                            punctuation: /^\\/
                        }
                    },
                    operator: /[=|]|<<|>>/,
                    punctuation: {
                        pattern: /(^|[a-z\d])(?:'+|,+|[_^]?-[_^]?(?:[-+^!>._]|(?=\d))|[_^]\.?|[.!])|[{}()[\]<>^~]|\\[()[\]<>\\!]|--|__/,
                        lookbehind: !0
                    },
                    number: /\b\d+(?:\/\d+)?\b/
                };
                a["embedded-scheme"].inside.scheme.inside["embedded-lilypond"].inside.lilypond.inside = a,
                e.languages.ly = a
            }(e)
        }
        e.exports = r,
        r.displayName = "lilypond",
        r.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        var a = n(156);
        function r(e) {
            e.register(a),
            e.languages.liquid = {
                comment: {
                    pattern: /(^\{%\s*comment\s*%\})[\s\S]+(?=\{%\s*endcomment\s*%\}$)/,
                    lookbehind: !0
                },
                delimiter: {
                    pattern: /^\{(?:\{\{|[%\{])-?|-?(?:\}\}|[%\}])\}$/,
                    alias: "punctuation"
                },
                string: {
                    pattern: /"[^"]*"|'[^']*'/,
                    greedy: !0
                },
                keyword: /\b(?:as|assign|break|continue|cycle|decrement|echo|else|elsif|(?:end)?(?:capture|case|comment|for|form|if|paginate|style|raw|tablerow|unless)|in|include|increment|limit|liquid|offset|range|render|reversed|section|when|with)\b/,
                function: [{
                    pattern: /(\|\s*)\w+/,
                    lookbehind: !0,
                    alias: "filter"
                }, {
                    pattern: /(\.\s*)(?:first|last|size)/,
                    lookbehind: !0
                }],
                boolean: /\b(?:true|false|nil)\b/,
                range: {
                    pattern: /\.\./,
                    alias: "operator"
                },
                number: /\b\d+(?:\.\d+)?\b/,
                operator: /[!=]=|<>|[<>]=?|[|?:=-]|\b(?:and|or|contains(?=\s))\b/,
                punctuation: /[.,\[\]()]/
            },
            e.hooks.add("before-tokenize", (function(t) {
                var n = !1;
                e.languages["markup-templating"].buildPlaceholders(t, "liquid", /\{%\s*comment\s*%\}[\s\S]*?\{%\s*endcomment\s*%\}|\{(?:%[\s\S]*?%|\{\{[\s\S]*?\}\}|\{[\s\S]*?\})\}/g, (function(e) {
                    var t = /^\{%-?\s*(\w+)/.exec(e);
                    if (t) {
                        var a = t[1];
                        if ("raw" === a && !n)
                            return n = !0,
                            !0;
                        if ("endraw" === a)
                            return n = !1,
                            !0
                    }
                    return !n
                }
                ))
            }
            )),
            e.hooks.add("after-tokenize", (function(t) {
                e.languages["markup-templating"].tokenizePlaceholders(t, "liquid")
            }
            ))
        }
        e.exports = r,
        r.displayName = "liquid",
        r.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                function t(e) {
                    return RegExp("(\\()" + e + "(?=[\\s\\)])")
                }
                function n(e) {
                    return RegExp("([\\s([])" + e + "(?=[\\s)])")
                }
                var a = "[-+*/_~!@$%^=<>{}\\w]+"
                  , r = "(\\()"
                  , i = "(?=\\))"
                  , o = {
                    heading: {
                        pattern: /;;;.*/,
                        alias: ["comment", "title"]
                    },
                    comment: /;.*/,
                    string: {
                        pattern: /"(?:[^"\\]|\\.)*"/,
                        greedy: !0,
                        inside: {
                            argument: /[-A-Z]+(?=[.,\s])/,
                            symbol: RegExp("`" + a + "'")
                        }
                    },
                    "quoted-symbol": {
                        pattern: RegExp("#?'" + a),
                        alias: ["variable", "symbol"]
                    },
                    "lisp-property": {
                        pattern: RegExp(":" + a),
                        alias: "property"
                    },
                    splice: {
                        pattern: RegExp(",@?" + a),
                        alias: ["symbol", "variable"]
                    },
                    keyword: [{
                        pattern: RegExp("(\\()(?:(?:lexical-)?let\\*?|(?:cl-)?letf|if|when|while|unless|cons|cl-loop|and|or|not|cond|setq|error|message|null|require|provide|use-package)(?=\\s)"),
                        lookbehind: !0
                    }, {
                        pattern: RegExp("(\\()(?:for|do|collect|return|finally|append|concat|in|by)(?=\\s)"),
                        lookbehind: !0
                    }],
                    declare: {
                        pattern: t("declare"),
                        lookbehind: !0,
                        alias: "keyword"
                    },
                    interactive: {
                        pattern: t("interactive"),
                        lookbehind: !0,
                        alias: "keyword"
                    },
                    boolean: {
                        pattern: n("(?:t|nil)"),
                        lookbehind: !0
                    },
                    number: {
                        pattern: n("[-+]?\\d+(?:\\.\\d*)?"),
                        lookbehind: !0
                    },
                    defvar: {
                        pattern: RegExp("(\\()def(?:var|const|custom|group)\\s+" + a),
                        lookbehind: !0,
                        inside: {
                            keyword: /^def[a-z]+/,
                            variable: RegExp(a)
                        }
                    },
                    defun: {
                        pattern: RegExp("(\\()(?:cl-)?(?:defun\\*?|defmacro)\\s+" + a + "\\s+\\([\\s\\S]*?\\)"),
                        lookbehind: !0,
                        inside: {
                            keyword: /^(?:cl-)?def\S+/,
                            arguments: null,
                            function: {
                                pattern: RegExp("(^\\s)" + a),
                                lookbehind: !0
                            },
                            punctuation: /[()]/
                        }
                    },
                    lambda: {
                        pattern: RegExp("(\\()lambda\\s+\\(\\s*(?:&?" + a + "(?:\\s+&?" + a + ")*\\s*)?\\)"),
                        lookbehind: !0,
                        inside: {
                            keyword: /^lambda/,
                            arguments: null,
                            punctuation: /[()]/
                        }
                    },
                    car: {
                        pattern: RegExp(r + a),
                        lookbehind: !0
                    },
                    punctuation: [/(?:['`,]?\(|[)\[\]])/, {
                        pattern: /(\s)\.(?=\s)/,
                        lookbehind: !0
                    }]
                }
                  , s = {
                    "lisp-marker": RegExp("&[-+*/_~!@$%^=<>{}\\w]+"),
                    rest: {
                        argument: {
                            pattern: RegExp(a),
                            alias: "variable"
                        },
                        varform: {
                            pattern: RegExp(r + a + "\\s+\\S[\\s\\S]*" + i),
                            lookbehind: !0,
                            inside: {
                                string: o.string,
                                boolean: o.boolean,
                                number: o.number,
                                symbol: o.symbol,
                                punctuation: /[()]/
                            }
                        }
                    }
                }
                  , l = "\\S+(?:\\s+\\S+)*"
                  , c = {
                    pattern: RegExp("(\\()[\\s\\S]*(?=\\))"),
                    lookbehind: !0,
                    inside: {
                        "rest-vars": {
                            pattern: RegExp("&(?:rest|body)\\s+" + l),
                            inside: s
                        },
                        "other-marker-vars": {
                            pattern: RegExp("&(?:optional|aux)\\s+" + l),
                            inside: s
                        },
                        keys: {
                            pattern: RegExp("&key\\s+" + l + "(?:\\s+&allow-other-keys)?"),
                            inside: s
                        },
                        argument: {
                            pattern: RegExp(a),
                            alias: "variable"
                        },
                        punctuation: /[()]/
                    }
                };
                o.lambda.inside.arguments = c,
                o.defun.inside.arguments = e.util.clone(c),
                o.defun.inside.arguments.inside.sublist = c,
                e.languages.lisp = o,
                e.languages.elisp = o,
                e.languages.emacs = o,
                e.languages["emacs-lisp"] = o
            }(e)
        }
        e.exports = a,
        a.displayName = "lisp",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.livescript = {
                comment: [{
                    pattern: /(^|[^\\])\/\*[\s\S]*?\*\//,
                    lookbehind: !0
                }, {
                    pattern: /(^|[^\\])#.*/,
                    lookbehind: !0
                }],
                "interpolated-string": {
                    pattern: /(^|[^"])("""|")(?:\\[\s\S]|(?!\2)[^\\])*\2(?!")/,
                    lookbehind: !0,
                    greedy: !0,
                    inside: {
                        variable: {
                            pattern: /(^|[^\\])#[a-z_](?:-?[a-z]|[\d_])*/m,
                            lookbehind: !0
                        },
                        interpolation: {
                            pattern: /(^|[^\\])#\{[^}]+\}/m,
                            lookbehind: !0,
                            inside: {
                                "interpolation-punctuation": {
                                    pattern: /^#\{|\}$/,
                                    alias: "variable"
                                }
                            }
                        },
                        string: /[\s\S]+/
                    }
                },
                string: [{
                    pattern: /('''|')(?:\\[\s\S]|(?!\1)[^\\])*\1/,
                    greedy: !0
                }, {
                    pattern: /<\[[\s\S]*?\]>/,
                    greedy: !0
                }, /\\[^\s,;\])}]+/],
                regex: [{
                    pattern: /\/\/(?:\[[^\r\n\]]*\]|\\.|(?!\/\/)[^\\\[])+\/\/[gimyu]{0,5}/,
                    greedy: !0,
                    inside: {
                        comment: {
                            pattern: /(^|[^\\])#.*/,
                            lookbehind: !0
                        }
                    }
                }, {
                    pattern: /\/(?:\[[^\r\n\]]*\]|\\.|[^/\\\r\n\[])+\/[gimyu]{0,5}/,
                    greedy: !0
                }],
                keyword: {
                    pattern: /(^|(?!-).)\b(?:break|case|catch|class|const|continue|default|do|else|extends|fallthrough|finally|for(?: ever)?|function|if|implements|it|let|loop|new|null|otherwise|own|return|super|switch|that|then|this|throw|try|unless|until|var|void|when|while|yield)(?!-)\b/m,
                    lookbehind: !0
                },
                "keyword-operator": {
                    pattern: /(^|[^-])\b(?:(?:delete|require|typeof)!|(?:and|by|delete|export|from|import(?: all)?|in|instanceof|is(?:nt| not)?|not|of|or|til|to|typeof|with|xor)(?!-)\b)/m,
                    lookbehind: !0,
                    alias: "operator"
                },
                boolean: {
                    pattern: /(^|[^-])\b(?:false|no|off|on|true|yes)(?!-)\b/m,
                    lookbehind: !0
                },
                argument: {
                    pattern: /(^|(?!\.&\.)[^&])&(?!&)\d*/m,
                    lookbehind: !0,
                    alias: "variable"
                },
                number: /\b(?:\d+~[\da-z]+|\d[\d_]*(?:\.\d[\d_]*)?(?:[a-z]\w*)?)/i,
                identifier: /[a-z_](?:-?[a-z]|[\d_])*/i,
                operator: [{
                    pattern: /( )\.(?= )/,
                    lookbehind: !0
                }, /\.(?:[=~]|\.\.?)|\.(?:[&|^]|<<|>>>?)\.|:(?:=|:=?)|&&|\|[|>]|<(?:<<?<?|--?!?|~~?!?|[|=?])?|>[>=?]?|-(?:->?|>)?|\+\+?|@@?|%%?|\*\*?|!(?:~?=|--?>|~?~>)?|~(?:~?>|=)?|==?|\^\^?|[\/?]/],
                punctuation: /[(){}\[\]|.,:;`]/
            },
            e.languages.livescript["interpolated-string"].inside.interpolation.inside.rest = e.languages.livescript
        }
        e.exports = a,
        a.displayName = "livescript",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                e.languages.llvm = {
                    comment: /;.*/,
                    string: {
                        pattern: /"[^"]*"/,
                        greedy: !0
                    },
                    boolean: /\b(?:true|false)\b/,
                    variable: /[%@!#](?:(?!\d)(?:[-$.\w]|\\[a-f\d]{2})+|\d+)/i,
                    label: /(?!\d)(?:[-$.\w]|\\[a-f\d]{2})+:/i,
                    type: {
                        pattern: /\b(?:double|float|fp128|half|i[1-9]\d*|label|metadata|ppc_fp128|token|void|x86_fp80|x86_mmx)\b/,
                        alias: "class-name"
                    },
                    keyword: /\b[a-z_][a-z_0-9]*\b/,
                    number: /[+-]?\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b|\b0x[\dA-Fa-f]+\b|\b0xK[\dA-Fa-f]{20}\b|\b0x[ML][\dA-Fa-f]{32}\b|\b0xH[\dA-Fa-f]{4}\b/,
                    punctuation: /[{}[\];(),.!*=<>]/
                }
            }(e)
        }
        e.exports = a,
        a.displayName = "llvm",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.log = {
                string: {
                    pattern: /"(?:[^"\\\r\n]|\\.)*"|'(?![st] | \w)(?:[^'\\\r\n]|\\.)*'/,
                    greedy: !0
                },
                level: [{
                    pattern: /\b(?:ALERT|CRIT|CRITICAL|EMERG|EMERGENCY|ERR|ERROR|FAILURE|FATAL|SEVERE)\b/,
                    alias: ["error", "important"]
                }, {
                    pattern: /\b(?:WARN|WARNING|WRN)\b/,
                    alias: ["warning", "important"]
                }, {
                    pattern: /\b(?:DISPLAY|INF|INFO|NOTICE|STATUS)\b/,
                    alias: ["info", "keyword"]
                }, {
                    pattern: /\b(?:DBG|DEBUG|FINE)\b/,
                    alias: ["debug", "keyword"]
                }, {
                    pattern: /\b(?:FINER|FINEST|TRACE|TRC|VERBOSE|VRB)\b/,
                    alias: ["trace", "comment"]
                }],
                property: {
                    pattern: /((?:^|[\]|])[ \t]*)[a-z_](?:[\w-]|\b\/\b)*(?:[. ]\(?\w(?:[\w-]|\b\/\b)*\)?)*:(?=\s)/im,
                    lookbehind: !0
                },
                separator: {
                    pattern: /(^|[^-+])-{3,}|={3,}|\*{3,}|- - /m,
                    lookbehind: !0,
                    alias: "comment"
                },
                url: /\b(?:https?|ftp|file):\/\/[^\s|,;'"]*[^\s|,;'">.]/,
                email: {
                    pattern: /(^|\s)[-\w+.]+@[a-z][a-z0-9-]*(?:\.[a-z][a-z0-9-]*)+(?=\s)/,
                    lookbehind: !0,
                    alias: "url"
                },
                "ip-address": {
                    pattern: /\b(?:\d{1,3}(?:\.\d{1,3}){3})\b/i,
                    alias: "constant"
                },
                "mac-address": {
                    pattern: /\b[a-f0-9]{2}(?::[a-f0-9]{2}){5}\b/i,
                    alias: "constant"
                },
                domain: {
                    pattern: /(^|\s)[a-z][a-z0-9-]*(?:\.[a-z][a-z0-9-]*)*\.[a-z][a-z0-9-]+(?=\s)/,
                    lookbehind: !0,
                    alias: "constant"
                },
                uuid: {
                    pattern: /\b[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\b/i,
                    alias: "constant"
                },
                hash: {
                    pattern: /\b(?:[a-f0-9]{32}){1,2}\b/i,
                    alias: "constant"
                },
                "file-path": {
                    pattern: /\b[a-z]:[\\/][^\s|,;:(){}\[\]"']+|(^|[\s:\[\](>|])\.{0,2}\/\w[^\s|,;:(){}\[\]"']*/i,
                    lookbehind: !0,
                    greedy: !0,
                    alias: "string"
                },
                date: {
                    pattern: RegExp(/\b\d{4}[-/]\d{2}[-/]\d{2}(?:T(?=\d{1,2}:)|(?=\s\d{1,2}:))/.source + "|" + /\b\d{1,4}[-/ ](?:\d{1,2}|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[-/ ]\d{2,4}T?\b/.source + "|" + /\b(?:(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun)(?:\s{1,2}(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))?|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s{1,2}\d{1,2}\b/.source, "i"),
                    alias: "number"
                },
                time: {
                    pattern: /\b\d{1,2}:\d{1,2}:\d{1,2}(?:[.,:]\d+)?(?:\s?[+-]\d{2}:?\d{2}|Z)?\b/,
                    alias: "number"
                },
                boolean: /\b(?:true|false|null)\b/i,
                number: {
                    pattern: /(^|[^.\w])(?:0x[a-f0-9]+|0o[0-7]+|0b[01]+|v?\d[\da-f]*(?:\.\d+)*(?:e[+-]?\d+)?[a-z]{0,3}\b)\b(?!\.\w)/i,
                    lookbehind: !0
                },
                operator: /[;:?<=>~/@!$%&+\-|^(){}*#]/,
                punctuation: /[\[\].,]/
            }
        }
        e.exports = a,
        a.displayName = "log",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.lolcode = {
                comment: [/\bOBTW\s[\s\S]*?\sTLDR\b/, /\bBTW.+/],
                string: {
                    pattern: /"(?::.|[^":])*"/,
                    inside: {
                        variable: /:\{[^}]+\}/,
                        symbol: [/:\([a-f\d]+\)/i, /:\[[^\]]+\]/, /:[)>o":]/]
                    },
                    greedy: !0
                },
                number: /(?:\B-)?(?:\b\d+(?:\.\d*)?|\B\.\d+)/,
                symbol: {
                    pattern: /(^|\s)(?:A )?(?:YARN|NUMBR|NUMBAR|TROOF|BUKKIT|NOOB)(?=\s|,|$)/,
                    lookbehind: !0,
                    inside: {
                        keyword: /A(?=\s)/
                    }
                },
                label: {
                    pattern: /((?:^|\s)(?:IM IN YR|IM OUTTA YR) )[a-zA-Z]\w*/,
                    lookbehind: !0,
                    alias: "string"
                },
                function: {
                    pattern: /((?:^|\s)(?:I IZ|HOW IZ I|IZ) )[a-zA-Z]\w*/,
                    lookbehind: !0
                },
                keyword: [{
                    pattern: /(^|\s)(?:O HAI IM|KTHX|HAI|KTHXBYE|I HAS A|ITZ(?: A)?|R|AN|MKAY|SMOOSH|MAEK|IS NOW(?: A)?|VISIBLE|GIMMEH|O RLY\?|YA RLY|NO WAI|OIC|MEBBE|WTF\?|OMG|OMGWTF|GTFO|IM IN YR|IM OUTTA YR|FOUND YR|YR|TIL|WILE|UPPIN|NERFIN|I IZ|HOW IZ I|IF U SAY SO|SRS|HAS A|LIEK(?: A)?|IZ)(?=\s|,|$)/,
                    lookbehind: !0
                }, /'Z(?=\s|,|$)/],
                boolean: {
                    pattern: /(^|\s)(?:WIN|FAIL)(?=\s|,|$)/,
                    lookbehind: !0
                },
                variable: {
                    pattern: /(^|\s)IT(?=\s|,|$)/,
                    lookbehind: !0
                },
                operator: {
                    pattern: /(^|\s)(?:NOT|BOTH SAEM|DIFFRINT|(?:SUM|DIFF|PRODUKT|QUOSHUNT|MOD|BIGGR|SMALLR|BOTH|EITHER|WON|ALL|ANY) OF)(?=\s|,|$)/,
                    lookbehind: !0
                },
                punctuation: /\.{3}|\u2026|,|!/
            }
        }
        e.exports = a,
        a.displayName = "lolcode",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.makefile = {
                comment: {
                    pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,
                    lookbehind: !0
                },
                string: {
                    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
                    greedy: !0
                },
                builtin: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
                symbol: {
                    pattern: /^(?:[^:=\s]|[ \t]+(?![\s:]))+(?=\s*:(?!=))/m,
                    inside: {
                        variable: /\$+(?:(?!\$)[^(){}:#=\s]+|(?=[({]))/
                    }
                },
                variable: /\$+(?:(?!\$)[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
                keyword: [/-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/, {
                    pattern: /(\()(?:addsuffix|abspath|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:s|list)?)(?=[ \t])/,
                    lookbehind: !0
                }],
                operator: /(?:::|[?:+!])?=|[|@]/,
                punctuation: /[:;(){}]/
            }
        }
        e.exports = a,
        a.displayName = "makefile",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                var t = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
                function n(e) {
                    return e = e.replace(/<inner>/g, (function() {
                        return t
                    }
                    )),
                    RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + e + ")")
                }
                var a = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source
                  , r = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, (function() {
                    return a
                }
                ))
                  , i = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;
                e.languages.markdown = e.languages.extend("markup", {}),
                e.languages.insertBefore("markdown", "prolog", {
                    "front-matter-block": {
                        pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
                        lookbehind: !0,
                        greedy: !0,
                        inside: {
                            punctuation: /^---|---$/,
                            "font-matter": {
                                pattern: /\S+(?:\s+\S+)*/,
                                alias: ["yaml", "language-yaml"],
                                inside: e.languages.yaml
                            }
                        }
                    },
                    blockquote: {
                        pattern: /^>(?:[\t ]*>)*/m,
                        alias: "punctuation"
                    },
                    table: {
                        pattern: RegExp("^" + r + i + "(?:" + r + ")*", "m"),
                        inside: {
                            "table-data-rows": {
                                pattern: RegExp("^(" + r + i + ")(?:" + r + ")*$"),
                                lookbehind: !0,
                                inside: {
                                    "table-data": {
                                        pattern: RegExp(a),
                                        inside: e.languages.markdown
                                    },
                                    punctuation: /\|/
                                }
                            },
                            "table-line": {
                                pattern: RegExp("^(" + r + ")" + i + "$"),
                                lookbehind: !0,
                                inside: {
                                    punctuation: /\||:?-{3,}:?/
                                }
                            },
                            "table-header-row": {
                                pattern: RegExp("^" + r + "$"),
                                inside: {
                                    "table-header": {
                                        pattern: RegExp(a),
                                        alias: "important",
                                        inside: e.languages.markdown
                                    },
                                    punctuation: /\|/
                                }
                            }
                        }
                    },
                    code: [{
                        pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
                        lookbehind: !0,
                        alias: "keyword"
                    }, {
                        pattern: /^```[\s\S]*?^```$/m,
                        greedy: !0,
                        inside: {
                            "code-block": {
                                pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
                                lookbehind: !0
                            },
                            "code-language": {
                                pattern: /^(```).+/,
                                lookbehind: !0
                            },
                            punctuation: /```/
                        }
                    }],
                    title: [{
                        pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
                        alias: "important",
                        inside: {
                            punctuation: /==+$|--+$/
                        }
                    }, {
                        pattern: /(^\s*)#.+/m,
                        lookbehind: !0,
                        alias: "important",
                        inside: {
                            punctuation: /^#+|#+$/
                        }
                    }],
                    hr: {
                        pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
                        lookbehind: !0,
                        alias: "punctuation"
                    },
                    list: {
                        pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
                        lookbehind: !0,
                        alias: "punctuation"
                    },
                    "url-reference": {
                        pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
                        inside: {
                            variable: {
                                pattern: /^(!?\[)[^\]]+/,
                                lookbehind: !0
                            },
                            string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
                            punctuation: /^[\[\]!:]|[<>]/
                        },
                        alias: "url"
                    },
                    bold: {
                        pattern: n(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),
                        lookbehind: !0,
                        greedy: !0,
                        inside: {
                            content: {
                                pattern: /(^..)[\s\S]+(?=..$)/,
                                lookbehind: !0,
                                inside: {}
                            },
                            punctuation: /\*\*|__/
                        }
                    },
                    italic: {
                        pattern: n(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),
                        lookbehind: !0,
                        greedy: !0,
                        inside: {
                            content: {
                                pattern: /(^.)[\s\S]+(?=.$)/,
                                lookbehind: !0,
                                inside: {}
                            },
                            punctuation: /[*_]/
                        }
                    },
                    strike: {
                        pattern: n(/(~~?)(?:(?!~)<inner>)+\2/.source),
                        lookbehind: !0,
                        greedy: !0,
                        inside: {
                            content: {
                                pattern: /(^~~?)[\s\S]+(?=\1$)/,
                                lookbehind: !0,
                                inside: {}
                            },
                            punctuation: /~~?/
                        }
                    },
                    "code-snippet": {
                        pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
                        lookbehind: !0,
                        greedy: !0,
                        alias: ["code", "keyword"]
                    },
                    url: {
                        pattern: n(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),
                        lookbehind: !0,
                        greedy: !0,
                        inside: {
                            operator: /^!/,
                            content: {
                                pattern: /(^\[)[^\]]+(?=\])/,
                                lookbehind: !0,
                                inside: {}
                            },
                            variable: {
                                pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
                                lookbehind: !0
                            },
                            url: {
                                pattern: /(^\]\()[^\s)]+/,
                                lookbehind: !0
                            },
                            string: {
                                pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
                                lookbehind: !0
                            }
                        }
                    }
                }),
                ["url", "bold", "italic", "strike"].forEach((function(t) {
                    ["url", "bold", "italic", "strike", "code-snippet"].forEach((function(n) {
                        t !== n && (e.languages.markdown[t].inside.content.inside[n] = e.languages.markdown[n])
                    }
                    ))
                }
                )),
                e.hooks.add("after-tokenize", (function(e) {
                    "markdown" !== e.language && "md" !== e.language || function e(t) {
                        if (t && "string" !== typeof t)
                            for (var n = 0, a = t.length; n < a; n++) {
                                var r = t[n];
                                if ("code" === r.type) {
                                    var i = r.content[1]
                                      , o = r.content[3];
                                    if (i && o && "code-language" === i.type && "code-block" === o.type && "string" === typeof i.content) {
                                        var s = i.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp")
                                          , l = "language-" + (s = (/[a-z][\w-]*/i.exec(s) || [""])[0].toLowerCase());
                                        o.alias ? "string" === typeof o.alias ? o.alias = [o.alias, l] : o.alias.push(l) : o.alias = [l]
                                    }
                                } else
                                    e(r.content)
                            }
                    }(e.tokens)
                }
                )),
                e.hooks.add("wrap", (function(t) {
                    if ("code-block" === t.type) {
                        for (var n = "", a = 0, r = t.classes.length; a < r; a++) {
                            var i = t.classes[a]
                              , o = /language-(.+)/.exec(i);
                            if (o) {
                                n = o[1];
                                break
                            }
                        }
                        var s = e.languages[n];
                        if (s) {
                            var l = document.createElement("div");
                            l.innerHTML = t.content.value;
                            var c = l.textContent;
                            t.content = e.highlight(c, s, n)
                        } else if (n && "none" !== n && e.plugins.autoloader) {
                            var u = "md-" + (new Date).valueOf() + "-" + Math.floor(1e16 * Math.random());
                            t.attributes.id = u,
                            e.plugins.autoloader.loadLanguages(n, (function() {
                                var t = document.getElementById(u);
                                t && (t.innerHTML = e.highlight(t.textContent, e.languages[n], n))
                            }
                            ))
                        }
                    }
                }
                )),
                e.languages.md = e.languages.markdown
            }(e)
        }
        e.exports = a,
        a.displayName = "markdown",
        a.aliases = ["md"]
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.matlab = {
                comment: [/%\{[\s\S]*?\}%/, /%.+/],
                string: {
                    pattern: /\B'(?:''|[^'\r\n])*'/,
                    greedy: !0
                },
                number: /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[eE][+-]?\d+)?(?:[ij])?|\b[ij]\b/,
                keyword: /\b(?:break|case|catch|continue|else|elseif|end|for|function|if|inf|NaN|otherwise|parfor|pause|pi|return|switch|try|while)\b/,
                function: /\b(?!\d)\w+(?=\s*\()/,
                operator: /\.?[*^\/\\']|[+\-:@]|[<>=~]=?|&&?|\|\|?/,
                punctuation: /\.{3}|[.,;\[\](){}!]/
            }
        }
        e.exports = a,
        a.displayName = "matlab",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.mel = {
                comment: /\/\/.*/,
                code: {
                    pattern: /`(?:\\.|[^\\`\r\n])*`/,
                    greedy: !0,
                    alias: "italic",
                    inside: {
                        delimiter: {
                            pattern: /^`|`$/,
                            alias: "punctuation"
                        }
                    }
                },
                string: {
                    pattern: /"(?:\\.|[^\\"\r\n])*"/,
                    greedy: !0
                },
                variable: /\$\w+/,
                number: /\b0x[\da-fA-F]+\b|\b\d+(?:\.\d*)?|\B\.\d+/,
                flag: {
                    pattern: /-[^\d\W]\w*/,
                    alias: "operator"
                },
                keyword: /\b(?:break|case|continue|default|do|else|float|for|global|if|in|int|matrix|proc|return|string|switch|vector|while)\b/,
                function: /\b\w+(?=\()|\b(?:about|abs|addAttr|addAttributeEditorNodeHelp|addDynamic|addNewShelfTab|addPP|addPanelCategory|addPrefixToName|advanceToNextDrivenKey|affectedNet|affects|aimConstraint|air|alias|aliasAttr|align|alignCtx|alignCurve|alignSurface|allViewFit|ambientLight|angle|angleBetween|animCone|animCurveEditor|animDisplay|animView|annotate|appendStringArray|applicationName|applyAttrPreset|applyTake|arcLenDimContext|arcLengthDimension|arclen|arrayMapper|art3dPaintCtx|artAttrCtx|artAttrPaintVertexCtx|artAttrSkinPaintCtx|artAttrTool|artBuildPaintMenu|artFluidAttrCtx|artPuttyCtx|artSelectCtx|artSetPaintCtx|artUserPaintCtx|assignCommand|assignInputDevice|assignViewportFactories|attachCurve|attachDeviceAttr|attachSurface|attrColorSliderGrp|attrCompatibility|attrControlGrp|attrEnumOptionMenu|attrEnumOptionMenuGrp|attrFieldGrp|attrFieldSliderGrp|attrNavigationControlGrp|attrPresetEditWin|attributeExists|attributeInfo|attributeMenu|attributeQuery|autoKeyframe|autoPlace|bakeClip|bakeFluidShading|bakePartialHistory|bakeResults|bakeSimulation|basename|basenameEx|batchRender|bessel|bevel|bevelPlus|binMembership|bindSkin|blend2|blendShape|blendShapeEditor|blendShapePanel|blendTwoAttr|blindDataType|boneLattice|boundary|boxDollyCtx|boxZoomCtx|bufferCurve|buildBookmarkMenu|buildKeyframeMenu|button|buttonManip|CBG|cacheFile|cacheFileCombine|cacheFileMerge|cacheFileTrack|camera|cameraView|canCreateManip|canvas|capitalizeString|catch|catchQuiet|ceil|changeSubdivComponentDisplayLevel|changeSubdivRegion|channelBox|character|characterMap|characterOutlineEditor|characterize|chdir|checkBox|checkBoxGrp|checkDefaultRenderGlobals|choice|circle|circularFillet|clamp|clear|clearCache|clip|clipEditor|clipEditorCurrentTimeCtx|clipSchedule|clipSchedulerOutliner|clipTrimBefore|closeCurve|closeSurface|cluster|cmdFileOutput|cmdScrollFieldExecuter|cmdScrollFieldReporter|cmdShell|coarsenSubdivSelectionList|collision|color|colorAtPoint|colorEditor|colorIndex|colorIndexSliderGrp|colorSliderButtonGrp|colorSliderGrp|columnLayout|commandEcho|commandLine|commandPort|compactHairSystem|componentEditor|compositingInterop|computePolysetVolume|condition|cone|confirmDialog|connectAttr|connectControl|connectDynamic|connectJoint|connectionInfo|constrain|constrainValue|constructionHistory|container|containsMultibyte|contextInfo|control|convertFromOldLayers|convertIffToPsd|convertLightmap|convertSolidTx|convertTessellation|convertUnit|copyArray|copyFlexor|copyKey|copySkinWeights|cos|cpButton|cpCache|cpClothSet|cpCollision|cpConstraint|cpConvClothToMesh|cpForces|cpGetSolverAttr|cpPanel|cpProperty|cpRigidCollisionFilter|cpSeam|cpSetEdit|cpSetSolverAttr|cpSolver|cpSolverTypes|cpTool|cpUpdateClothUVs|createDisplayLayer|createDrawCtx|createEditor|createLayeredPsdFile|createMotionField|createNewShelf|createNode|createRenderLayer|createSubdivRegion|cross|crossProduct|ctxAbort|ctxCompletion|ctxEditMode|ctxTraverse|currentCtx|currentTime|currentTimeCtx|currentUnit|curve|curveAddPtCtx|curveCVCtx|curveEPCtx|curveEditorCtx|curveIntersect|curveMoveEPCtx|curveOnSurface|curveSketchCtx|cutKey|cycleCheck|cylinder|dagPose|date|defaultLightListCheckBox|defaultNavigation|defineDataServer|defineVirtualDevice|deformer|deg_to_rad|delete|deleteAttr|deleteShadingGroupsAndMaterials|deleteShelfTab|deleteUI|deleteUnusedBrushes|delrandstr|detachCurve|detachDeviceAttr|detachSurface|deviceEditor|devicePanel|dgInfo|dgdirty|dgeval|dgtimer|dimWhen|directKeyCtx|directionalLight|dirmap|dirname|disable|disconnectAttr|disconnectJoint|diskCache|displacementToPoly|displayAffected|displayColor|displayCull|displayLevelOfDetail|displayPref|displayRGBColor|displaySmoothness|displayStats|displayString|displaySurface|distanceDimContext|distanceDimension|doBlur|dolly|dollyCtx|dopeSheetEditor|dot|dotProduct|doubleProfileBirailSurface|drag|dragAttrContext|draggerContext|dropoffLocator|duplicate|duplicateCurve|duplicateSurface|dynCache|dynControl|dynExport|dynExpression|dynGlobals|dynPaintEditor|dynParticleCtx|dynPref|dynRelEdPanel|dynRelEditor|dynamicLoad|editAttrLimits|editDisplayLayerGlobals|editDisplayLayerMembers|editRenderLayerAdjustment|editRenderLayerGlobals|editRenderLayerMembers|editor|editorTemplate|effector|emit|emitter|enableDevice|encodeString|endString|endsWith|env|equivalent|equivalentTol|erf|error|eval|evalDeferred|evalEcho|event|exactWorldBoundingBox|exclusiveLightCheckBox|exec|executeForEachObject|exists|exp|expression|expressionEditorListen|extendCurve|extendSurface|extrude|fcheck|fclose|feof|fflush|fgetline|fgetword|file|fileBrowserDialog|fileDialog|fileExtension|fileInfo|filetest|filletCurve|filter|filterCurve|filterExpand|filterStudioImport|findAllIntersections|findAnimCurves|findKeyframe|findMenuItem|findRelatedSkinCluster|finder|firstParentOf|fitBspline|flexor|floatEq|floatField|floatFieldGrp|floatScrollBar|floatSlider|floatSlider2|floatSliderButtonGrp|floatSliderGrp|floor|flow|fluidCacheInfo|fluidEmitter|fluidVoxelInfo|flushUndo|fmod|fontDialog|fopen|formLayout|format|fprint|frameLayout|fread|freeFormFillet|frewind|fromNativePath|fwrite|gamma|gauss|geometryConstraint|getApplicationVersionAsFloat|getAttr|getClassification|getDefaultBrush|getFileList|getFluidAttr|getInputDeviceRange|getMayaPanelTypes|getModifiers|getPanel|getParticleAttr|getPluginResource|getenv|getpid|glRender|glRenderEditor|globalStitch|gmatch|goal|gotoBindPose|grabColor|gradientControl|gradientControlNoAttr|graphDollyCtx|graphSelectContext|graphTrackCtx|gravity|grid|gridLayout|group|groupObjectsByName|HfAddAttractorToAS|HfAssignAS|HfBuildEqualMap|HfBuildFurFiles|HfBuildFurImages|HfCancelAFR|HfConnectASToHF|HfCreateAttractor|HfDeleteAS|HfEditAS|HfPerformCreateAS|HfRemoveAttractorFromAS|HfSelectAttached|HfSelectAttractors|HfUnAssignAS|hardenPointCurve|hardware|hardwareRenderPanel|headsUpDisplay|headsUpMessage|help|helpLine|hermite|hide|hilite|hitTest|hotBox|hotkey|hotkeyCheck|hsv_to_rgb|hudButton|hudSlider|hudSliderButton|hwReflectionMap|hwRender|hwRenderLoad|hyperGraph|hyperPanel|hyperShade|hypot|iconTextButton|iconTextCheckBox|iconTextRadioButton|iconTextRadioCollection|iconTextScrollList|iconTextStaticLabel|ikHandle|ikHandleCtx|ikHandleDisplayScale|ikSolver|ikSplineHandleCtx|ikSystem|ikSystemInfo|ikfkDisplayMethod|illustratorCurves|image|imfPlugins|inheritTransform|insertJoint|insertJointCtx|insertKeyCtx|insertKnotCurve|insertKnotSurface|instance|instanceable|instancer|intField|intFieldGrp|intScrollBar|intSlider|intSliderGrp|interToUI|internalVar|intersect|iprEngine|isAnimCurve|isConnected|isDirty|isParentOf|isSameObject|isTrue|isValidObjectName|isValidString|isValidUiName|isolateSelect|itemFilter|itemFilterAttr|itemFilterRender|itemFilterType|joint|jointCluster|jointCtx|jointDisplayScale|jointLattice|keyTangent|keyframe|keyframeOutliner|keyframeRegionCurrentTimeCtx|keyframeRegionDirectKeyCtx|keyframeRegionDollyCtx|keyframeRegionInsertKeyCtx|keyframeRegionMoveKeyCtx|keyframeRegionScaleKeyCtx|keyframeRegionSelectKeyCtx|keyframeRegionSetKeyCtx|keyframeRegionTrackCtx|keyframeStats|lassoContext|lattice|latticeDeformKeyCtx|launch|launchImageEditor|layerButton|layeredShaderPort|layeredTexturePort|layout|layoutDialog|lightList|lightListEditor|lightListPanel|lightlink|lineIntersection|linearPrecision|linstep|listAnimatable|listAttr|listCameras|listConnections|listDeviceAttachments|listHistory|listInputDeviceAxes|listInputDeviceButtons|listInputDevices|listMenuAnnotation|listNodeTypes|listPanelCategories|listRelatives|listSets|listTransforms|listUnselected|listerEditor|loadFluid|loadNewShelf|loadPlugin|loadPluginLanguageResources|loadPrefObjects|localizedPanelLabel|lockNode|loft|log|longNameOf|lookThru|ls|lsThroughFilter|lsType|lsUI|Mayatomr|mag|makeIdentity|makeLive|makePaintable|makeRoll|makeSingleSurface|makeTubeOn|makebot|manipMoveContext|manipMoveLimitsCtx|manipOptions|manipRotateContext|manipRotateLimitsCtx|manipScaleContext|manipScaleLimitsCtx|marker|match|max|memory|menu|menuBarLayout|menuEditor|menuItem|menuItemToShelf|menuSet|menuSetPref|messageLine|min|minimizeApp|mirrorJoint|modelCurrentTimeCtx|modelEditor|modelPanel|mouse|movIn|movOut|move|moveIKtoFK|moveKeyCtx|moveVertexAlongDirection|multiProfileBirailSurface|mute|nParticle|nameCommand|nameField|namespace|namespaceInfo|newPanelItems|newton|nodeCast|nodeIconButton|nodeOutliner|nodePreset|nodeType|noise|nonLinear|normalConstraint|normalize|nurbsBoolean|nurbsCopyUVSet|nurbsCube|nurbsEditUV|nurbsPlane|nurbsSelect|nurbsSquare|nurbsToPoly|nurbsToPolygonsPref|nurbsToSubdiv|nurbsToSubdivPref|nurbsUVSet|nurbsViewDirectionVector|objExists|objectCenter|objectLayer|objectType|objectTypeUI|obsoleteProc|oceanNurbsPreviewPlane|offsetCurve|offsetCurveOnSurface|offsetSurface|openGLExtension|openMayaPref|optionMenu|optionMenuGrp|optionVar|orbit|orbitCtx|orientConstraint|outlinerEditor|outlinerPanel|overrideModifier|paintEffectsDisplay|pairBlend|palettePort|paneLayout|panel|panelConfiguration|panelHistory|paramDimContext|paramDimension|paramLocator|parent|parentConstraint|particle|particleExists|particleInstancer|particleRenderInfo|partition|pasteKey|pathAnimation|pause|pclose|percent|performanceOptions|pfxstrokes|pickWalk|picture|pixelMove|planarSrf|plane|play|playbackOptions|playblast|plugAttr|plugNode|pluginInfo|pluginResourceUtil|pointConstraint|pointCurveConstraint|pointLight|pointMatrixMult|pointOnCurve|pointOnSurface|pointPosition|poleVectorConstraint|polyAppend|polyAppendFacetCtx|polyAppendVertex|polyAutoProjection|polyAverageNormal|polyAverageVertex|polyBevel|polyBlendColor|polyBlindData|polyBoolOp|polyBridgeEdge|polyCacheMonitor|polyCheck|polyChipOff|polyClipboard|polyCloseBorder|polyCollapseEdge|polyCollapseFacet|polyColorBlindData|polyColorDel|polyColorPerVertex|polyColorSet|polyCompare|polyCone|polyCopyUV|polyCrease|polyCreaseCtx|polyCreateFacet|polyCreateFacetCtx|polyCube|polyCut|polyCutCtx|polyCylinder|polyCylindricalProjection|polyDelEdge|polyDelFacet|polyDelVertex|polyDuplicateAndConnect|polyDuplicateEdge|polyEditUV|polyEditUVShell|polyEvaluate|polyExtrudeEdge|polyExtrudeFacet|polyExtrudeVertex|polyFlipEdge|polyFlipUV|polyForceUV|polyGeoSampler|polyHelix|polyInfo|polyInstallAction|polyLayoutUV|polyListComponentConversion|polyMapCut|polyMapDel|polyMapSew|polyMapSewMove|polyMergeEdge|polyMergeEdgeCtx|polyMergeFacet|polyMergeFacetCtx|polyMergeUV|polyMergeVertex|polyMirrorFace|polyMoveEdge|polyMoveFacet|polyMoveFacetUV|polyMoveUV|polyMoveVertex|polyNormal|polyNormalPerVertex|polyNormalizeUV|polyOptUvs|polyOptions|polyOutput|polyPipe|polyPlanarProjection|polyPlane|polyPlatonicSolid|polyPoke|polyPrimitive|polyPrism|polyProjection|polyPyramid|polyQuad|polyQueryBlindData|polyReduce|polySelect|polySelectConstraint|polySelectConstraintMonitor|polySelectCtx|polySelectEditCtx|polySeparate|polySetToFaceNormal|polySewEdge|polyShortestPathCtx|polySmooth|polySoftEdge|polySphere|polySphericalProjection|polySplit|polySplitCtx|polySplitEdge|polySplitRing|polySplitVertex|polyStraightenUVBorder|polySubdivideEdge|polySubdivideFacet|polyToSubdiv|polyTorus|polyTransfer|polyTriangulate|polyUVSet|polyUnite|polyWedgeFace|popen|popupMenu|pose|pow|preloadRefEd|print|progressBar|progressWindow|projFileViewer|projectCurve|projectTangent|projectionContext|projectionManip|promptDialog|propModCtx|propMove|psdChannelOutliner|psdEditTextureFile|psdExport|psdTextureFile|putenv|pwd|python|querySubdiv|quit|rad_to_deg|radial|radioButton|radioButtonGrp|radioCollection|radioMenuItemCollection|rampColorPort|rand|randomizeFollicles|randstate|rangeControl|readTake|rebuildCurve|rebuildSurface|recordAttr|recordDevice|redo|reference|referenceEdit|referenceQuery|refineSubdivSelectionList|refresh|refreshAE|registerPluginResource|rehash|reloadImage|removeJoint|removeMultiInstance|removePanelCategory|rename|renameAttr|renameSelectionList|renameUI|render|renderGlobalsNode|renderInfo|renderLayerButton|renderLayerParent|renderLayerPostProcess|renderLayerUnparent|renderManip|renderPartition|renderQualityNode|renderSettings|renderThumbnailUpdate|renderWindowEditor|renderWindowSelectContext|renderer|reorder|reorderDeformers|requires|reroot|resampleFluid|resetAE|resetPfxToPolyCamera|resetTool|resolutionNode|retarget|reverseCurve|reverseSurface|revolve|rgb_to_hsv|rigidBody|rigidSolver|roll|rollCtx|rootOf|rot|rotate|rotationInterpolation|roundConstantRadius|rowColumnLayout|rowLayout|runTimeCommand|runup|sampleImage|saveAllShelves|saveAttrPreset|saveFluid|saveImage|saveInitialState|saveMenu|savePrefObjects|savePrefs|saveShelf|saveToolSettings|scale|scaleBrushBrightness|scaleComponents|scaleConstraint|scaleKey|scaleKeyCtx|sceneEditor|sceneUIReplacement|scmh|scriptCtx|scriptEditorInfo|scriptJob|scriptNode|scriptTable|scriptToShelf|scriptedPanel|scriptedPanelType|scrollField|scrollLayout|sculpt|searchPathArray|seed|selLoadSettings|select|selectContext|selectCurveCV|selectKey|selectKeyCtx|selectKeyframeRegionCtx|selectMode|selectPref|selectPriority|selectType|selectedNodes|selectionConnection|separator|setAttr|setAttrEnumResource|setAttrMapping|setAttrNiceNameResource|setConstraintRestPosition|setDefaultShadingGroup|setDrivenKeyframe|setDynamic|setEditCtx|setEditor|setFluidAttr|setFocus|setInfinity|setInputDeviceMapping|setKeyCtx|setKeyPath|setKeyframe|setKeyframeBlendshapeTargetWts|setMenuMode|setNodeNiceNameResource|setNodeTypeFlag|setParent|setParticleAttr|setPfxToPolyCamera|setPluginResource|setProject|setStampDensity|setStartupMessage|setState|setToolTo|setUITemplate|setXformManip|sets|shadingConnection|shadingGeometryRelCtx|shadingLightRelCtx|shadingNetworkCompare|shadingNode|shapeCompare|shelfButton|shelfLayout|shelfTabLayout|shellField|shortNameOf|showHelp|showHidden|showManipCtx|showSelectionInTitle|showShadingGroupAttrEditor|showWindow|sign|simplify|sin|singleProfileBirailSurface|size|sizeBytes|skinCluster|skinPercent|smoothCurve|smoothTangentSurface|smoothstep|snap2to2|snapKey|snapMode|snapTogetherCtx|snapshot|soft|softMod|softModCtx|sort|sound|soundControl|source|spaceLocator|sphere|sphrand|spotLight|spotLightPreviewPort|spreadSheetEditor|spring|sqrt|squareSurface|srtContext|stackTrace|startString|startsWith|stitchAndExplodeShell|stitchSurface|stitchSurfacePoints|strcmp|stringArrayCatenate|stringArrayContains|stringArrayCount|stringArrayInsertAtIndex|stringArrayIntersector|stringArrayRemove|stringArrayRemoveAtIndex|stringArrayRemoveDuplicates|stringArrayRemoveExact|stringArrayToString|stringToStringArray|strip|stripPrefixFromName|stroke|subdAutoProjection|subdCleanTopology|subdCollapse|subdDuplicateAndConnect|subdEditUV|subdListComponentConversion|subdMapCut|subdMapSewMove|subdMatchTopology|subdMirror|subdToBlind|subdToPoly|subdTransferUVsToCache|subdiv|subdivCrease|subdivDisplaySmoothness|substitute|substituteAllString|substituteGeometry|substring|surface|surfaceSampler|surfaceShaderList|swatchDisplayPort|switchTable|symbolButton|symbolCheckBox|sysFile|system|tabLayout|tan|tangentConstraint|texLatticeDeformContext|texManipContext|texMoveContext|texMoveUVShellContext|texRotateContext|texScaleContext|texSelectContext|texSelectShortestPathCtx|texSmudgeUVContext|texWinToolCtx|text|textCurves|textField|textFieldButtonGrp|textFieldGrp|textManip|textScrollList|textToShelf|textureDisplacePlane|textureHairColor|texturePlacementContext|textureWindow|threadCount|threePointArcCtx|timeControl|timePort|timerX|toNativePath|toggle|toggleAxis|toggleWindowVisibility|tokenize|tokenizeList|tolerance|tolower|toolButton|toolCollection|toolDropped|toolHasOptions|toolPropertyWindow|torus|toupper|trace|track|trackCtx|transferAttributes|transformCompare|transformLimits|translator|trim|trunc|truncateFluidCache|truncateHairCache|tumble|tumbleCtx|turbulence|twoPointArcCtx|uiRes|uiTemplate|unassignInputDevice|undo|undoInfo|ungroup|uniform|unit|unloadPlugin|untangleUV|untitledFileName|untrim|upAxis|updateAE|userCtx|uvLink|uvSnapshot|validateShelfName|vectorize|view2dToolCtx|viewCamera|viewClipPlane|viewFit|viewHeadOn|viewLookAt|viewManip|viewPlace|viewSet|visor|volumeAxis|vortex|waitCursor|warning|webBrowser|webBrowserPrefs|whatIs|window|windowPref|wire|wireContext|workspace|wrinkle|wrinkleContext|writeTake|xbmLangPathList|xform)\b/,
                operator: [/\+[+=]?|-[-=]?|&&|\|\||[<>]=|[*\/!=]=?|[%^]/, {
                    pattern: /(^|[^<])<(?!<)/,
                    lookbehind: !0
                }, {
                    pattern: /(^|[^>])>(?!>)/,
                    lookbehind: !0
                }],
                punctuation: /<<|>>|[.,:;?\[\](){}]/
            },
            e.languages.mel.code.inside.rest = e.languages.mel
        }
        e.exports = a,
        a.displayName = "mel",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.mizar = {
                comment: /::.+/,
                keyword: /@proof\b|\b(?:according|aggregate|all|and|antonym|are|as|associativity|assume|asymmetry|attr|be|begin|being|by|canceled|case|cases|clusters?|coherence|commutativity|compatibility|connectedness|consider|consistency|constructors|contradiction|correctness|def|deffunc|define|definitions?|defpred|do|does|equals|end|environ|ex|exactly|existence|for|from|func|given|hence|hereby|holds|idempotence|identity|iff?|implies|involutiveness|irreflexivity|is|it|let|means|mode|non|not|notations?|now|of|or|otherwise|over|per|pred|prefix|projectivity|proof|provided|qua|reconsider|redefine|reduce|reducibility|reflexivity|registrations?|requirements|reserve|sch|schemes?|section|selector|set|sethood|st|struct|such|suppose|symmetry|synonym|take|that|the|then|theorems?|thesis|thus|to|transitivity|uniqueness|vocabular(?:y|ies)|when|where|with|wrt)\b/,
                parameter: {
                    pattern: /\$(?:10|\d)/,
                    alias: "variable"
                },
                variable: /\b\w+(?=:)/,
                number: /(?:\b|-)\d+\b/,
                operator: /\.\.\.|->|&|\.?=/,
                punctuation: /\(#|#\)|[,:;\[\](){}]/
            }
        }
        e.exports = a,
        a.displayName = "mizar",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                var t = ["$eq", "$gt", "$gte", "$in", "$lt", "$lte", "$ne", "$nin", "$and", "$not", "$nor", "$or", "$exists", "$type", "$expr", "$jsonSchema", "$mod", "$regex", "$text", "$where", "$geoIntersects", "$geoWithin", "$near", "$nearSphere", "$all", "$elemMatch", "$size", "$bitsAllClear", "$bitsAllSet", "$bitsAnyClear", "$bitsAnySet", "$comment", "$elemMatch", "$meta", "$slice", "$currentDate", "$inc", "$min", "$max", "$mul", "$rename", "$set", "$setOnInsert", "$unset", "$addToSet", "$pop", "$pull", "$push", "$pullAll", "$each", "$position", "$slice", "$sort", "$bit", "$addFields", "$bucket", "$bucketAuto", "$collStats", "$count", "$currentOp", "$facet", "$geoNear", "$graphLookup", "$group", "$indexStats", "$limit", "$listLocalSessions", "$listSessions", "$lookup", "$match", "$merge", "$out", "$planCacheStats", "$project", "$redact", "$replaceRoot", "$replaceWith", "$sample", "$set", "$skip", "$sort", "$sortByCount", "$unionWith", "$unset", "$unwind", "$abs", "$accumulator", "$acos", "$acosh", "$add", "$addToSet", "$allElementsTrue", "$and", "$anyElementTrue", "$arrayElemAt", "$arrayToObject", "$asin", "$asinh", "$atan", "$atan2", "$atanh", "$avg", "$binarySize", "$bsonSize", "$ceil", "$cmp", "$concat", "$concatArrays", "$cond", "$convert", "$cos", "$dateFromParts", "$dateToParts", "$dateFromString", "$dateToString", "$dayOfMonth", "$dayOfWeek", "$dayOfYear", "$degreesToRadians", "$divide", "$eq", "$exp", "$filter", "$first", "$floor", "$function", "$gt", "$gte", "$hour", "$ifNull", "$in", "$indexOfArray", "$indexOfBytes", "$indexOfCP", "$isArray", "$isNumber", "$isoDayOfWeek", "$isoWeek", "$isoWeekYear", "$last", "$last", "$let", "$literal", "$ln", "$log", "$log10", "$lt", "$lte", "$ltrim", "$map", "$max", "$mergeObjects", "$meta", "$min", "$millisecond", "$minute", "$mod", "$month", "$multiply", "$ne", "$not", "$objectToArray", "$or", "$pow", "$push", "$radiansToDegrees", "$range", "$reduce", "$regexFind", "$regexFindAll", "$regexMatch", "$replaceOne", "$replaceAll", "$reverseArray", "$round", "$rtrim", "$second", "$setDifference", "$setEquals", "$setIntersection", "$setIsSubset", "$setUnion", "$size", "$sin", "$slice", "$split", "$sqrt", "$stdDevPop", "$stdDevSamp", "$strcasecmp", "$strLenBytes", "$strLenCP", "$substr", "$substrBytes", "$substrCP", "$subtract", "$sum", "$switch", "$tan", "$toBool", "$toDate", "$toDecimal", "$toDouble", "$toInt", "$toLong", "$toObjectId", "$toString", "$toLower", "$toUpper", "$trim", "$trunc", "$type", "$week", "$year", "$zip", "$comment", "$explain", "$hint", "$max", "$maxTimeMS", "$min", "$orderby", "$query", "$returnKey", "$showDiskLoc", "$natural"]
                  , n = "(?:" + (t = t.map((function(e) {
                    return e.replace("$", "\\$")
                }
                ))).join("|") + ")\\b";
                e.languages.mongodb = e.languages.extend("javascript", {}),
                e.languages.insertBefore("mongodb", "string", {
                    property: {
                        pattern: /(?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)(?=\s*:)/,
                        greedy: !0,
                        inside: {
                            keyword: RegExp("^(['\"])?" + n + "(?:\\1)?$")
                        }
                    }
                }),
                e.languages.mongodb.string.inside = {
                    url: {
                        pattern: /https?:\/\/[-\w@:%.+~#=]{1,256}\.[a-z0-9()]{1,6}\b[-\w()@:%+.~#?&/=]*/i,
                        greedy: !0
                    },
                    entity: {
                        pattern: /\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/,
                        greedy: !0
                    }
                },
                e.languages.insertBefore("mongodb", "constant", {
                    builtin: {
                        pattern: RegExp("\\b(?:" + ["ObjectId", "Code", "BinData", "DBRef", "Timestamp", "NumberLong", "NumberDecimal", "MaxKey", "MinKey", "RegExp", "ISODate", "UUID"].join("|") + ")\\b"),
                        alias: "keyword"
                    }
                })
            }(e)
        }
        e.exports = a,
        a.displayName = "mongodb",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.monkey = {
                string: /"[^"\r\n]*"/,
                comment: [{
                    pattern: /^#Rem\s[\s\S]*?^#End/im,
                    greedy: !0
                }, {
                    pattern: /'.+/,
                    greedy: !0
                }],
                preprocessor: {
                    pattern: /(^[ \t]*)#.+/m,
                    lookbehind: !0,
                    alias: "comment"
                },
                function: /\b\w+(?=\()/,
                "type-char": {
                    pattern: /(\w)[?%#$]/,
                    lookbehind: !0,
                    alias: "variable"
                },
                number: {
                    pattern: /((?:\.\.)?)(?:(?:\b|\B-\.?|\B\.)\d+(?:(?!\.\.)\.\d*)?|\$[\da-f]+)/i,
                    lookbehind: !0
                },
                keyword: /\b(?:Void|Strict|Public|Private|Property|Bool|Int|Float|String|Array|Object|Continue|Exit|Import|Extern|New|Self|Super|Try|Catch|Eachin|True|False|Extends|Abstract|Final|Select|Case|Default|Const|Local|Global|Field|Method|Function|Class|End|If|Then|Else|ElseIf|EndIf|While|Wend|Repeat|Until|Forever|For|To|Step|Next|Return|Module|Interface|Implements|Inline|Throw|Null)\b/i,
                operator: /\.\.|<[=>]?|>=?|:?=|(?:[+\-*\/&~|]|\b(?:Mod|Shl|Shr)\b)=?|\b(?:And|Not|Or)\b/i,
                punctuation: /[.,:;()\[\]]/
            }
        }
        e.exports = a,
        a.displayName = "monkey",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.moonscript = {
                comment: /--.*/,
                string: [{
                    pattern: /'[^']*'|\[(=*)\[[\s\S]*?\]\1\]/,
                    greedy: !0
                }, {
                    pattern: /"[^"]*"/,
                    greedy: !0,
                    inside: {
                        interpolation: {
                            pattern: /#\{[^{}]*\}/,
                            inside: {
                                moonscript: {
                                    pattern: /(^#\{)[\s\S]+(?=\})/,
                                    lookbehind: !0,
                                    inside: null
                                },
                                "interpolation-punctuation": {
                                    pattern: /#\{|\}/,
                                    alias: "punctuation"
                                }
                            }
                        }
                    }
                }],
                "class-name": [{
                    pattern: /(\b(?:class|extends)[ \t]+)\w+/,
                    lookbehind: !0
                }, /\b[A-Z]\w*/],
                keyword: /\b(?:class|continue|do|else|elseif|export|extends|for|from|if|import|in|local|nil|return|self|super|switch|then|unless|using|when|while|with)\b/,
                variable: /@@?\w*/,
                property: {
                    pattern: /\b(?!\d)\w+(?=:)|(:)(?!\d)\w+/,
                    lookbehind: !0
                },
                function: {
                    pattern: /\b(?:_G|_VERSION|assert|collectgarbage|coroutine\.(?:running|create|resume|status|wrap|yield)|debug\.(?:debug|gethook|getinfo|getlocal|getupvalue|setlocal|setupvalue|sethook|traceback|getfenv|getmetatable|getregistry|setfenv|setmetatable)|dofile|error|getfenv|getmetatable|io\.(?:stdin|stdout|stderr|close|flush|input|lines|open|output|popen|read|tmpfile|type|write)|ipairs|load|loadfile|loadstring|math\.(?:abs|acos|asin|atan|atan2|ceil|sin|cos|tan|deg|exp|floor|log|log10|max|min|fmod|modf|cosh|sinh|tanh|pow|rad|sqrt|frexp|ldexp|random|randomseed|pi)|module|next|os\.(?:clock|date|difftime|execute|exit|getenv|remove|rename|setlocale|time|tmpname)|package\.(?:cpath|loaded|loadlib|path|preload|seeall)|pairs|pcall|print|rawequal|rawget|rawset|require|select|setfenv|setmetatable|string\.(?:byte|char|dump|find|len|lower|rep|sub|upper|format|gsub|gmatch|match|reverse)|table\.(?:maxn|concat|sort|insert|remove)|tonumber|tostring|type|unpack|xpcall)\b/,
                    inside: {
                        punctuation: /\./
                    }
                },
                boolean: /\b(?:false|true)\b/,
                number: /(?:\B\.\d+|\b\d+\.\d+|\b\d+(?=[eE]))(?:[eE][-+]?\d+)?\b|\b(?:0x[a-fA-F\d]+|\d+)(?:U?LL)?\b/,
                operator: /\.{3}|[-=]>|~=|(?:[-+*/%<>!=]|\.\.)=?|[:#^]|\b(?:and|or)\b=?|\b(?:not)\b/,
                punctuation: /[.,()[\]{}\\]/
            },
            e.languages.moonscript.string[1].inside.interpolation.inside.moonscript.inside = e.languages.moonscript,
            e.languages.moon = e.languages.moonscript
        }
        e.exports = a,
        a.displayName = "moonscript",
        a.aliases = ["moon"]
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.n1ql = {
                comment: /\/\*[\s\S]*?(?:$|\*\/)/,
                parameter: /\$[\w.]+/,
                string: {
                    pattern: /(["'])(?:\\[\s\S]|(?!\1)[^\\]|\1\1)*\1/,
                    greedy: !0
                },
                identifier: {
                    pattern: /`(?:\\[\s\S]|[^\\`]|``)*`/,
                    greedy: !0
                },
                function: /\b(?:ABS|ACOS|ARRAY_AGG|ARRAY_APPEND|ARRAY_AVG|ARRAY_CONCAT|ARRAY_CONTAINS|ARRAY_COUNT|ARRAY_DISTINCT|ARRAY_FLATTEN|ARRAY_IFNULL|ARRAY_INSERT|ARRAY_INTERSECT|ARRAY_LENGTH|ARRAY_MAX|ARRAY_MIN|ARRAY_POSITION|ARRAY_PREPEND|ARRAY_PUT|ARRAY_RANGE|ARRAY_REMOVE|ARRAY_REPEAT|ARRAY_REPLACE|ARRAY_REVERSE|ARRAY_SORT|ARRAY_STAR|ARRAY_SUM|ARRAY_SYMDIFF|ARRAY_SYMDIFFN|ARRAY_UNION|ASIN|ATAN|ATAN2|AVG|BASE64|BASE64_DECODE|BASE64_ENCODE|BITAND|BITCLEAR|BITNOT|BITOR|BITSET|BITSHIFT|BITTEST|BITXOR|CEIL|CLOCK_LOCAL|CLOCK_MILLIS|CLOCK_STR|CLOCK_TZ|CLOCK_UTC|CONTAINS|CONTAINS_TOKEN|CONTAINS_TOKEN_LIKE|CONTAINS_TOKEN_REGEXP|COS|COUNT|CURL|DATE_ADD_MILLIS|DATE_ADD_STR|DATE_DIFF_MILLIS|DATE_DIFF_STR|DATE_FORMAT_STR|DATE_PART_MILLIS|DATE_PART_STR|DATE_RANGE_MILLIS|DATE_RANGE_STR|DATE_TRUNC_MILLIS|DATE_TRUNC_STR|DECODE_JSON|DEGREES|DURATION_TO_STR|E|ENCODED_SIZE|ENCODE_JSON|EXP|FLOOR|GREATEST|HAS_TOKEN|IFINF|IFMISSING|IFMISSINGORNULL|IFNAN|IFNANORINF|IFNULL|INITCAP|ISARRAY|ISATOM|ISBOOLEAN|ISNUMBER|ISOBJECT|ISSTRING|IsBitSET|LEAST|LENGTH|LN|LOG|LOWER|LTRIM|MAX|META|MILLIS|MILLIS_TO_LOCAL|MILLIS_TO_STR|MILLIS_TO_TZ|MILLIS_TO_UTC|MILLIS_TO_ZONE_NAME|MIN|MISSINGIF|NANIF|NEGINFIF|NOW_LOCAL|NOW_MILLIS|NOW_STR|NOW_TZ|NOW_UTC|NULLIF|OBJECT_ADD|OBJECT_CONCAT|OBJECT_INNER_PAIRS|OBJECT_INNER_VALUES|OBJECT_LENGTH|OBJECT_NAMES|OBJECT_PAIRS|OBJECT_PUT|OBJECT_REMOVE|OBJECT_RENAME|OBJECT_REPLACE|OBJECT_UNWRAP|OBJECT_VALUES|PAIRS|PI|POLY_LENGTH|POSINFIF|POSITION|POWER|RADIANS|RANDOM|REGEXP_CONTAINS|REGEXP_LIKE|REGEXP_POSITION|REGEXP_REPLACE|REPEAT|REPLACE|REVERSE|ROUND|RTRIM|SIGN|SIN|SPLIT|SQRT|STR_TO_DURATION|STR_TO_MILLIS|STR_TO_TZ|STR_TO_UTC|STR_TO_ZONE_NAME|SUBSTR|SUFFIXES|SUM|TAN|TITLE|TOARRAY|TOATOM|TOBOOLEAN|TOKENS|TONUMBER|TOOBJECT|TOSTRING|TRIM|TRUNC|TYPE|UPPER|WEEKDAY_MILLIS|WEEKDAY_STR)(?=\s*\()/i,
                keyword: /\b(?:ALL|ALTER|ANALYZE|AS|ASC|BEGIN|BINARY|BOOLEAN|BREAK|BUCKET|BUILD|BY|CALL|CAST|CLUSTER|COLLATE|COLLECTION|COMMIT|CONNECT|CONTINUE|CORRELATE|COVER|CREATE|DATABASE|DATASET|DATASTORE|DECLARE|DECREMENT|DELETE|DERIVED|DESC|DESCRIBE|DISTINCT|DO|DROP|EACH|ELEMENT|EXCEPT|EXCLUDE|EXECUTE|EXPLAIN|FETCH|FLATTEN|FOR|FORCE|FROM|FUNCTION|GRANT|GROUP|GSI|HAVING|IF|IGNORE|ILIKE|INCLUDE|INCREMENT|INDEX|INFER|INLINE|INNER|INSERT|INTERSECT|INTO|IS|JOIN|KEY|KEYS|KEYSPACE|KNOWN|LAST|LEFT|LET|LETTING|LIMIT|LSM|MAP|MAPPING|MATCHED|MATERIALIZED|MERGE|MINUS|MISSING|NAMESPACE|NEST|NULL|NUMBER|OBJECT|OFFSET|ON|OPTION|ORDER|OUTER|OVER|PARSE|PARTITION|PASSWORD|PATH|POOL|PREPARE|PRIMARY|PRIVATE|PRIVILEGE|PROCEDURE|PUBLIC|RAW|REALM|REDUCE|RENAME|RETURN|RETURNING|REVOKE|RIGHT|ROLE|ROLLBACK|SATISFIES|SCHEMA|SELECT|SELF|SEMI|SET|SHOW|SOME|START|STATISTICS|STRING|SYSTEM|TO|TRANSACTION|TRIGGER|TRUNCATE|UNDER|UNION|UNIQUE|UNKNOWN|UNNEST|UNSET|UPDATE|UPSERT|USE|USER|USING|VALIDATE|VALUE|VALUES|VIA|VIEW|WHERE|WHILE|WITH|WORK|XOR)\b/i,
                boolean: /\b(?:TRUE|FALSE)\b/i,
                number: /(?:\b\d+\.|\B\.)\d+e[+\-]?\d+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
                operator: /[-+*\/%]|!=|==?|\|\||<[>=]?|>=?|\b(?:AND|ANY|ARRAY|BETWEEN|CASE|ELSE|END|EVERY|EXISTS|FIRST|IN|LIKE|NOT|OR|THEN|VALUED|WHEN|WITHIN)\b/i,
                punctuation: /[;[\](),.{}:]/
            }
        }
        e.exports = a,
        a.displayName = "n1ql",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.n4js = e.languages.extend("javascript", {
                keyword: /\b(?:any|Array|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/
            }),
            e.languages.insertBefore("n4js", "constant", {
                annotation: {
                    pattern: /@+\w+/,
                    alias: "operator"
                }
            }),
            e.languages.n4jsd = e.languages.n4js
        }
        e.exports = a,
        a.displayName = "n4js",
        a.aliases = ["n4jsd"]
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages["nand2tetris-hdl"] = {
                comment: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
                keyword: /\b(?:CHIP|IN|OUT|PARTS|BUILTIN|CLOCKED)\b/,
                boolean: /\b(?:true|false)\b/,
                function: /\b[A-Za-z][A-Za-z0-9]*(?=\()/,
                number: /\b\d+\b/,
                operator: /=|\.\./,
                punctuation: /[{}[\];(),:]/
            }
        }
        e.exports = a,
        a.displayName = "nand2tetrisHdl",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                var t = /\{[^\r\n\[\]{}]*\}/
                  , n = {
                    "quoted-string": {
                        pattern: /"(?:[^"\\]|\\.)*"/,
                        alias: "operator"
                    },
                    "command-param-id": {
                        pattern: /(\s)\w+:/,
                        lookbehind: !0,
                        alias: "property"
                    },
                    "command-param-value": [{
                        pattern: t,
                        alias: "selector"
                    }, {
                        pattern: /([\t ])\S+/,
                        lookbehind: !0,
                        greedy: !0,
                        alias: "operator"
                    }, {
                        pattern: /\S(?:.*\S)?/,
                        alias: "operator"
                    }]
                };
                function a(e) {
                    return "string" === typeof e ? e : Array.isArray(e) ? e.map(a).join("") : a(e.content)
                }
                e.languages.naniscript = {
                    comment: {
                        pattern: /^([\t ]*);.*/m,
                        lookbehind: !0
                    },
                    define: {
                        pattern: /^>.+/m,
                        alias: "tag",
                        inside: {
                            value: {
                                pattern: /(^>\w+[\t ]+)(?!\s)[^{}\r\n]+/,
                                lookbehind: !0,
                                alias: "operator"
                            },
                            key: {
                                pattern: /(^>)\w+/,
                                lookbehind: !0
                            }
                        }
                    },
                    label: {
                        pattern: /^([\t ]*)#[\t ]*\w+[\t ]*$/m,
                        lookbehind: !0,
                        alias: "regex"
                    },
                    command: {
                        pattern: /^([\t ]*)@\w+(?=[\t ]|$).*/m,
                        lookbehind: !0,
                        alias: "function",
                        inside: {
                            "command-name": /^@\w+/,
                            expression: {
                                pattern: t,
                                greedy: !0,
                                alias: "selector"
                            },
                            "command-params": {
                                pattern: /\s*\S[\s\S]*/,
                                inside: n
                            }
                        }
                    },
                    "generic-text": {
                        pattern: /(^[ \t]*)[^#@>;\s].*/m,
                        lookbehind: !0,
                        alias: "punctuation",
                        inside: {
                            "escaped-char": /\\[{}\[\]"]/,
                            expression: {
                                pattern: t,
                                greedy: !0,
                                alias: "selector"
                            },
                            "inline-command": {
                                pattern: /\[[\t ]*\w[^\r\n\[\]]*\]/,
                                greedy: !0,
                                alias: "function",
                                inside: {
                                    "command-params": {
                                        pattern: /(^\[[\t ]*\w+\b)[\s\S]+(?=\]$)/,
                                        lookbehind: !0,
                                        inside: n
                                    },
                                    "command-param-name": {
                                        pattern: /^(\[[\t ]*)\w+/,
                                        lookbehind: !0,
                                        alias: "name"
                                    },
                                    "start-stop-char": /[\[\]]/
                                }
                            }
                        }
                    }
                },
                e.languages.nani = e.languages.naniscript,
                e.hooks.add("after-tokenize", (function(e) {
                    e.tokens.forEach((function(e) {
                        if ("string" !== typeof e && "generic-text" === e.type) {
                            var t = a(e);
                            (function(e) {
                                for (var t = "[]{}", n = [], a = 0; a < e.length; a++) {
                                    var r = e[a]
                                      , i = t.indexOf(r);
                                    if (-1 !== i)
                                        if (i % 2 === 0)
                                            n.push(i + 1);
                                        else if (n.pop() !== i)
                                            return !1
                                }
                                return 0 === n.length
                            }
                            )(t) || (e.type = "bad-line",
                            e.content = t)
                        }
                    }
                    ))
                }
                ))
            }(e)
        }
        e.exports = a,
        a.displayName = "naniscript",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.nasm = {
                comment: /;.*$/m,
                string: /(["'`])(?:\\.|(?!\1)[^\\\r\n])*\1/,
                label: {
                    pattern: /(^\s*)[A-Za-z._?$][\w.?$@~#]*:/m,
                    lookbehind: !0,
                    alias: "function"
                },
                keyword: [/\[?BITS (?:16|32|64)\]?/, {
                    pattern: /(^\s*)section\s*[a-z.]+:?/im,
                    lookbehind: !0
                }, /(?:extern|global)[^;\r\n]*/i, /(?:CPU|FLOAT|DEFAULT).*$/m],
                register: {
                    pattern: /\b(?:st\d|[xyz]mm\d\d?|[cdt]r\d|r\d\d?[bwd]?|[er]?[abcd]x|[abcd][hl]|[er]?(?:bp|sp|si|di)|[cdefgs]s)\b/i,
                    alias: "variable"
                },
                number: /(?:\b|(?=\$))(?:0[hx](?:\.[\da-f]+|[\da-f]+(?:\.[\da-f]+)?)(?:p[+-]?\d+)?|\d[\da-f]+[hx]|\$\d[\da-f]*|0[oq][0-7]+|[0-7]+[oq]|0[by][01]+|[01]+[by]|0[dt]\d+|(?:\d+(?:\.\d+)?|\.\d+)(?:\.?e[+-]?\d+)?[dt]?)\b/i,
                operator: /[\[\]*+\-\/%<>=&|$!]/
            }
        }
        e.exports = a,
        a.displayName = "nasm",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.neon = {
                comment: {
                    pattern: /#.*/,
                    greedy: !0
                },
                datetime: {
                    pattern: /(^|[[{(=:,\s])\d\d\d\d-\d\d?-\d\d?(?:(?:[Tt]| +)\d\d?:\d\d:\d\d(?:\.\d*)? *(?:Z|[-+]\d\d?(?::?\d\d)?)?)?(?=$|[\]}),\s])/,
                    lookbehind: !0,
                    alias: "number"
                },
                key: {
                    pattern: /(^|[[{(,\s])[^,:=[\]{}()'"\s]+(?=\s*:(?:$|[\]}),\s])|\s*=)/,
                    lookbehind: !0,
                    alias: "atrule"
                },
                number: {
                    pattern: /(^|[[{(=:,\s])[+-]?(?:0x[\da-fA-F]+|0o[0-7]+|0b[01]+|(?:\d+(?:\.\d*)?|\.?\d+)(?:[eE][+-]?\d+)?)(?=$|[\]}),:=\s])/,
                    lookbehind: !0
                },
                boolean: {
                    pattern: /(^|[[{(=:,\s])(?:true|false|yes|no)(?=$|[\]}),:=\s])/i,
                    lookbehind: !0
                },
                null: {
                    pattern: /(^|[[{(=:,\s])(?:null)(?=$|[\]}),:=\s])/i,
                    lookbehind: !0,
                    alias: "keyword"
                },
                string: {
                    pattern: /(^|[[{(=:,\s])(?:('''|""")\r?\n(?:(?:[^\r\n]|\r?\n(?![\t ]*\2))*\r?\n)?[\t ]*\2|'[^'\r\n]*'|"(?:\\.|[^\\"\r\n])*")/,
                    lookbehind: !0,
                    greedy: !0
                },
                literal: {
                    pattern: /(^|[[{(=:,\s])(?:[^#"',:=[\]{}()\s`-]|[:-][^"',=[\]{}()\s])(?:[^,:=\]})(\s]|:(?![\s,\]})]|$)|[ \t]+[^#,:=\]})(\s])*/,
                    lookbehind: !0,
                    alias: "string"
                },
                punctuation: /[,:=[\]{}()-]/
            }
        }
        e.exports = a,
        a.displayName = "neon",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.nevod = {
                comment: /\/\/.*|(?:\/\*[\s\S]*?(?:\*\/|$))/,
                string: {
                    pattern: /(?:"(?:""|[^"])*"(?!")|'(?:''|[^'])*'(?!'))!?\*?/,
                    greedy: !0,
                    inside: {
                        "string-attrs": /!$|!\*$|\*$/
                    }
                },
                namespace: {
                    pattern: /(@namespace\s+)[a-zA-Z0-9\-.]+(?=\s*\{)/,
                    lookbehind: !0
                },
                pattern: {
                    pattern: /(@pattern\s+)?#?[a-zA-Z0-9\-.]+(?:\s*\(\s*(?:~\s*)?[a-zA-Z0-9\-.]+\s*(?:,\s*(?:~\s*)?[a-zA-Z0-9\-.]*)*\))?(?=\s*=)/,
                    lookbehind: !0,
                    inside: {
                        "pattern-name": {
                            pattern: /^#?[a-zA-Z0-9\-.]+/,
                            alias: "class-name"
                        },
                        fields: {
                            pattern: /\(.*\)/,
                            inside: {
                                "field-name": {
                                    pattern: /[a-zA-Z0-9\-.]+/,
                                    alias: "variable"
                                },
                                punctuation: /[,()]/,
                                operator: {
                                    pattern: /~/,
                                    alias: "field-hidden-mark"
                                }
                            }
                        }
                    }
                },
                search: {
                    pattern: /(@search\s+|#)[a-zA-Z0-9\-.]+(?:\.\*)?(?=\s*;)/,
                    alias: "function",
                    lookbehind: !0
                },
                keyword: /@(?:require|namespace|pattern|search|inside|outside|having|where)\b/,
                "standard-pattern": {
                    pattern: /\b(?:Word|Punct|Symbol|Space|LineBreak|Start|End|Alpha|AlphaNum|Num|NumAlpha|Blank|WordBreak|Any)(?:\([a-zA-Z0-9\-.,\s+]*\))?/,
                    inside: {
                        "standard-pattern-name": {
                            pattern: /^[a-zA-Z0-9\-.]+/,
                            alias: "builtin"
                        },
                        quantifier: {
                            pattern: /\b\d+(?:\s*\+|\s*-\s*\d+)?(?!\w)/,
                            alias: "number"
                        },
                        "standard-pattern-attr": {
                            pattern: /[a-zA-Z0-9\-.]+/,
                            alias: "builtin"
                        },
                        punctuation: /[,()]/
                    }
                },
                quantifier: {
                    pattern: /\b\d+(?:\s*\+|\s*-\s*\d+)?(?!\w)/,
                    alias: "number"
                },
                operator: [{
                    pattern: /=/,
                    alias: "pattern-def"
                }, {
                    pattern: /&/,
                    alias: "conjunction"
                }, {
                    pattern: /~/,
                    alias: "exception"
                }, {
                    pattern: /\?/,
                    alias: "optionality"
                }, {
                    pattern: /[[\]]/,
                    alias: "repetition"
                }, {
                    pattern: /[{}]/,
                    alias: "variation"
                }, {
                    pattern: /[+_]/,
                    alias: "sequence"
                }, {
                    pattern: /\.{2,3}/,
                    alias: "span"
                }],
                "field-capture": [{
                    pattern: /([a-zA-Z0-9\-.]+\s*\()\s*[a-zA-Z0-9\-.]+\s*:\s*[a-zA-Z0-9\-.]+(?:\s*,\s*[a-zA-Z0-9\-.]+\s*:\s*[a-zA-Z0-9\-.]+)*(?=\s*\))/,
                    lookbehind: !0,
                    inside: {
                        "field-name": {
                            pattern: /[a-zA-Z0-9\-.]+/,
                            alias: "variable"
                        },
                        colon: /:/
                    }
                }, {
                    pattern: /[a-zA-Z0-9\-.]+\s*:/,
                    inside: {
                        "field-name": {
                            pattern: /[a-zA-Z0-9\-.]+/,
                            alias: "variable"
                        },
                        colon: /:/
                    }
                }],
                punctuation: /[:;,()]/,
                name: /[a-zA-Z0-9\-.]+/
            }
        }
        e.exports = a,
        a.displayName = "nevod",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                var t = /\$(?:\w[a-z\d]*(?:_[^\x00-\x1F\s"'\\()$]*)?|\{[^}\s"'\\]+\})/i;
                e.languages.nginx = {
                    comment: {
                        pattern: /(^|[\s{};])#.*/,
                        lookbehind: !0
                    },
                    directive: {
                        pattern: /(^|\s)\w(?:[^;{}"'\\\s]|\\.|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|\s+(?:#.*(?!.)|(?![#\s])))*?(?=\s*[;{])/,
                        lookbehind: !0,
                        greedy: !0,
                        inside: {
                            string: {
                                pattern: /((?:^|[^\\])(?:\\\\)*)(?:"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/,
                                lookbehind: !0,
                                inside: {
                                    escape: {
                                        pattern: /\\["'\\nrt]/,
                                        alias: "entity"
                                    },
                                    variable: t
                                }
                            },
                            comment: {
                                pattern: /(\s)#.*/,
                                lookbehind: !0,
                                greedy: !0
                            },
                            keyword: {
                                pattern: /^\S+/,
                                greedy: !0
                            },
                            boolean: {
                                pattern: /(\s)(?:off|on)(?!\S)/,
                                lookbehind: !0
                            },
                            number: {
                                pattern: /(\s)\d+[a-z]*(?!\S)/i,
                                lookbehind: !0
                            },
                            variable: t
                        }
                    },
                    punctuation: /[{};]/
                }
            }(e)
        }
        e.exports = a,
        a.displayName = "nginx",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.nim = {
                comment: /#.*/,
                string: {
                    pattern: /(?:(?:\b(?!\d)(?:\w|\\x[8-9a-fA-F][0-9a-fA-F])+)?(?:"""[\s\S]*?"""(?!")|"(?:\\[\s\S]|""|[^"\\])*")|'(?:\\(?:\d+|x[\da-fA-F]{2}|.)|[^'])')/,
                    greedy: !0
                },
                number: /\b(?:0[xXoObB][\da-fA-F_]+|\d[\d_]*(?:(?!\.\.)\.[\d_]*)?(?:[eE][+-]?\d[\d_]*)?)(?:'?[iuf]\d*)?/,
                keyword: /\b(?:addr|as|asm|atomic|bind|block|break|case|cast|concept|const|continue|converter|defer|discard|distinct|do|elif|else|end|enum|except|export|finally|for|from|func|generic|if|import|include|interface|iterator|let|macro|method|mixin|nil|object|out|proc|ptr|raise|ref|return|static|template|try|tuple|type|using|var|when|while|with|without|yield)\b/,
                function: {
                    pattern: /(?:(?!\d)(?:\w|\\x[8-9a-fA-F][0-9a-fA-F])+|`[^`\r\n]+`)\*?(?:\[[^\]]+\])?(?=\s*\()/,
                    inside: {
                        operator: /\*$/
                    }
                },
                ignore: {
                    pattern: /`[^`\r\n]+`/,
                    inside: {
                        punctuation: /`/
                    }
                },
                operator: {
                    pattern: /(^|[({\[](?=\.\.)|(?![({\[]\.).)(?:(?:[=+\-*\/<>@$~&%|!?^:\\]|\.\.|\.(?![)}\]]))+|\b(?:and|div|of|or|in|is|isnot|mod|not|notin|shl|shr|xor)\b)/m,
                    lookbehind: !0
                },
                punctuation: /[({\[]\.|\.[)}\]]|[`(){}\[\],:]/
            }
        }
        e.exports = a,
        a.displayName = "nim",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.nix = {
                comment: /\/\*[\s\S]*?\*\/|#.*/,
                string: {
                    pattern: /"(?:[^"\\]|\\[\s\S])*"|''(?:(?!'')[\s\S]|''(?:'|\\|\$\{))*''/,
                    greedy: !0,
                    inside: {
                        interpolation: {
                            pattern: /(^|(?:^|(?!'').)[^\\])\$\{(?:[^{}]|\{[^}]*\})*\}/,
                            lookbehind: !0,
                            inside: {
                                antiquotation: {
                                    pattern: /^\$(?=\{)/,
                                    alias: "variable"
                                }
                            }
                        }
                    }
                },
                url: [/\b(?:[a-z]{3,7}:\/\/)[\w\-+%~\/.:#=?&]+/, {
                    pattern: /([^\/])(?:[\w\-+%~.:#=?&]*(?!\/\/)[\w\-+%~\/.:#=?&])?(?!\/\/)\/[\w\-+%~\/.:#=?&]*/,
                    lookbehind: !0
                }],
                antiquotation: {
                    pattern: /\$(?=\{)/,
                    alias: "variable"
                },
                number: /\b\d+\b/,
                keyword: /\b(?:assert|builtins|else|if|in|inherit|let|null|or|then|with)\b/,
                function: /\b(?:abort|add|all|any|attrNames|attrValues|baseNameOf|compareVersions|concatLists|currentSystem|deepSeq|derivation|dirOf|div|elem(?:At)?|fetch(?:url|Tarball)|filter(?:Source)?|fromJSON|genList|getAttr|getEnv|hasAttr|hashString|head|import|intersectAttrs|is(?:Attrs|Bool|Function|Int|List|Null|String)|length|lessThan|listToAttrs|map|mul|parseDrvName|pathExists|read(?:Dir|File)|removeAttrs|replaceStrings|seq|sort|stringLength|sub(?:string)?|tail|throw|to(?:File|JSON|Path|String|XML)|trace|typeOf)\b|\bfoldl'\B/,
                boolean: /\b(?:true|false)\b/,
                operator: /[=!<>]=?|\+\+?|\|\||&&|\/\/|->?|[?@]/,
                punctuation: /[{}()[\].,:;]/
            },
            e.languages.nix.string.inside.interpolation.inside.rest = e.languages.nix
        }
        e.exports = a,
        a.displayName = "nix",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.nsis = {
                comment: {
                    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|[#;].*)/,
                    lookbehind: !0
                },
                string: {
                    pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
                    greedy: !0
                },
                keyword: {
                    pattern: /(^[\t ]*)(?:Abort|Add(?:BrandingImage|Size)|AdvSplash|Allow(?:RootDirInstall|SkipFiles)|AutoCloseWindow|Banner|BG(?:Font|Gradient|Image)|BrandingText|BringToFront|Call(?:InstDLL)?|Caption|ChangeUI|CheckBitmap|ClearErrors|CompletedText|ComponentText|CopyFiles|CRCCheck|Create(?:Directory|Font|ShortCut)|Delete(?:INISec|INIStr|RegKey|RegValue)?|Detail(?:Print|sButtonText)|Dialer|Dir(?:Text|Var|Verify)|EnableWindow|Enum(?:RegKey|RegValue)|Exch|Exec(?:Shell(?:Wait)?|Wait)?|ExpandEnvStrings|File(?:BufSize|Close|ErrorText|Open|Read|ReadByte|ReadUTF16LE|ReadWord|WriteUTF16LE|Seek|Write|WriteByte|WriteWord)?|Find(?:Close|First|Next|Window)|FlushINI|Get(?:CurInstType|CurrentAddress|DlgItem|DLLVersion(?:Local)?|ErrorLevel|FileTime(?:Local)?|FullPathName|Function(?:Address|End)?|InstDirError|LabelAddress|TempFileName)|Goto|HideWindow|Icon|If(?:Abort|Errors|FileExists|RebootFlag|Silent)|InitPluginsDir|Install(?:ButtonText|Colors|Dir(?:RegKey)?)|InstProgressFlags|Inst(?:Type(?:GetText|SetText)?)|Int(?:64|Ptr)?CmpU?|Int(?:64)?Fmt|Int(?:Ptr)?Op|IsWindow|Lang(?:DLL|String)|License(?:BkColor|Data|ForceSelection|LangString|Text)|LoadLanguageFile|LockWindow|Log(?:Set|Text)|Manifest(?:DPIAware|SupportedOS)|Math|MessageBox|MiscButtonText|Name|Nop|ns(?:Dialogs|Exec)|NSISdl|OutFile|Page(?:Callbacks)?|PE(?:DllCharacteristics|SubsysVer)|Pop|Push|Quit|Read(?:EnvStr|INIStr|RegDWORD|RegStr)|Reboot|RegDLL|Rename|RequestExecutionLevel|ReserveFile|Return|RMDir|SearchPath|Section(?:End|GetFlags|GetInstTypes|GetSize|GetText|Group|In|SetFlags|SetInstTypes|SetSize|SetText)?|SendMessage|Set(?:AutoClose|BrandingImage|Compress|Compressor(?:DictSize)?|CtlColors|CurInstType|DatablockOptimize|DateSave|Details(?:Print|View)|ErrorLevel|Errors|FileAttributes|Font|OutPath|Overwrite|PluginUnload|RebootFlag|RegView|ShellVarContext|Silent)|Show(?:InstDetails|UninstDetails|Window)|Silent(?:Install|UnInstall)|Sleep|SpaceTexts|Splash|StartMenu|Str(?:CmpS?|Cpy|Len)|SubCaption|System|Unicode|Uninstall(?:ButtonText|Caption|Icon|SubCaption|Text)|UninstPage|UnRegDLL|UserInfo|Var|VI(?:AddVersionKey|FileVersion|ProductVersion)|VPatch|WindowIcon|Write(?:INIStr|Reg(?:Bin|DWORD|ExpandStr|MultiStr|None|Str)|Uninstaller)|XPStyle)\b/m,
                    lookbehind: !0
                },
                property: /\b(?:admin|all|auto|both|colored|false|force|hide|highest|lastused|leave|listonly|none|normal|notset|off|on|open|print|show|silent|silentlog|smooth|textonly|true|user|ARCHIVE|FILE_(?:ATTRIBUTE_ARCHIVE|ATTRIBUTE_NORMAL|ATTRIBUTE_OFFLINE|ATTRIBUTE_READONLY|ATTRIBUTE_SYSTEM|ATTRIBUTE_TEMPORARY)|HK(?:(?:CR|CU|LM)(?:32|64)?|DD|PD|U)|HKEY_(?:CLASSES_ROOT|CURRENT_CONFIG|CURRENT_USER|DYN_DATA|LOCAL_MACHINE|PERFORMANCE_DATA|USERS)|ID(?:ABORT|CANCEL|IGNORE|NO|OK|RETRY|YES)|MB_(?:ABORTRETRYIGNORE|DEFBUTTON1|DEFBUTTON2|DEFBUTTON3|DEFBUTTON4|ICONEXCLAMATION|ICONINFORMATION|ICONQUESTION|ICONSTOP|OK|OKCANCEL|RETRYCANCEL|RIGHT|RTLREADING|SETFOREGROUND|TOPMOST|USERICON|YESNO)|NORMAL|OFFLINE|READONLY|SHCTX|SHELL_CONTEXT|SYSTEM|TEMPORARY)\b/,
                constant: /\$\{[\w\.:\^-]+\}|\$\([\w\.:\^-]+\)/i,
                variable: /\$\w+/i,
                number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
                operator: /--?|\+\+?|<=?|>=?|==?=?|&&?|\|\|?|[?*\/~^%]/,
                punctuation: /[{}[\];(),.:]/,
                important: {
                    pattern: /(^[\t ]*)!(?:addincludedir|addplugindir|appendfile|cd|define|delfile|echo|else|endif|error|execute|finalize|getdllversion|gettlbversion|ifdef|ifmacrodef|ifmacrondef|ifndef|if|include|insertmacro|macroend|macro|makensis|packhdr|pragma|searchparse|searchreplace|system|tempfile|undef|verbose|warning)\b/im,
                    lookbehind: !0
                }
            }
        }
        e.exports = a,
        a.displayName = "nsis",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        var a = n(162);
        function r(e) {
            e.register(a),
            e.languages.objectivec = e.languages.extend("c", {
                string: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|@"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
                keyword: /\b(?:asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while|in|self|super)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
                operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
            }),
            delete e.languages.objectivec["class-name"],
            e.languages.objc = e.languages.objectivec
        }
        e.exports = r,
        r.displayName = "objectivec",
        r.aliases = ["objc"]
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.ocaml = {
                comment: /\(\*[\s\S]*?\*\)/,
                string: [{
                    pattern: /"(?:\\.|[^\\\r\n"])*"/,
                    greedy: !0
                }, {
                    pattern: /(['`])(?:\\(?:\d+|x[\da-f]+|.)|(?!\1)[^\\\r\n])\1/i,
                    greedy: !0
                }],
                number: /\b(?:0x[\da-f][\da-f_]+|(?:0[bo])?\d[\d_]*(?:\.[\d_]*)?(?:e[+-]?[\d_]+)?)/i,
                directive: {
                    pattern: /\B#\w+/,
                    alias: "important"
                },
                label: {
                    pattern: /\B~\w+/,
                    alias: "function"
                },
                "type-variable": {
                    pattern: /\B'\w+/,
                    alias: "function"
                },
                variant: {
                    pattern: /`\w+/,
                    alias: "variable"
                },
                module: {
                    pattern: /\b[A-Z]\w+/,
                    alias: "variable"
                },
                keyword: /\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|nonrec|object|of|open|private|rec|sig|struct|then|to|try|type|val|value|virtual|when|where|while|with)\b/,
                boolean: /\b(?:false|true)\b/,
                operator: /:=|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lsl|lsr|lxor|mod|or)\b/,
                punctuation: /[(){}\[\]|.,:;]|\b_\b/
            }
        }
        e.exports = a,
        a.displayName = "ocaml",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        var a = n(162);
        function r(e) {
            e.register(a),
            function(e) {
                e.languages.opencl = e.languages.extend("c", {
                    keyword: /\b(?:__attribute__|(?:__)?(?:constant|global|kernel|local|private|read_only|read_write|write_only)|auto|break|case|complex|const|continue|default|do|(?:float|double)(?:16(?:x(?:1|16|2|4|8))?|1x(?:1|16|2|4|8)|2(?:x(?:1|16|2|4|8))?|3|4(?:x(?:1|16|2|4|8))?|8(?:x(?:1|16|2|4|8))?)?|else|enum|extern|for|goto|(?:u?(?:char|short|int|long)|half|quad|bool)(?:2|3|4|8|16)?|if|imaginary|inline|packed|pipe|register|restrict|return|signed|sizeof|static|struct|switch|typedef|uniform|union|unsigned|void|volatile|while)\b/,
                    number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[fuhl]{0,4}/i,
                    boolean: /\b(?:false|true)\b/,
                    "constant-opencl-kernel": {
                        pattern: /\b(?:CHAR_(?:BIT|MAX|MIN)|CLK_(?:ADDRESS_(?:CLAMP(?:_TO_EDGE)?|NONE|REPEAT)|FILTER_(?:LINEAR|NEAREST)|(?:LOCAL|GLOBAL)_MEM_FENCE|NORMALIZED_COORDS_(?:FALSE|TRUE))|CL_(?:BGRA|(?:HALF_)?FLOAT|INTENSITY|LUMINANCE|A?R?G?B?[Ax]?|(?:(?:UN)?SIGNED|[US]NORM)_(?:INT(?:8|16|32))|UNORM_(?:INT_101010|SHORT_(?:555|565)))|(?:DBL|FLT|HALF)_(?:DIG|EPSILON|MANT_DIG|(?:MIN|MAX)(?:(?:_10)?_EXP)?)|FLT_RADIX|HUGE_VALF?|INFINITY|(?:INT|LONG|SCHAR|SHRT)_(?:MAX|MIN)|(?:UCHAR|USHRT|UINT|ULONG)_MAX|MAXFLOAT|M_(?:[12]_PI|2_SQRTPI|E|LN(?:2|10)|LOG(?:10|2)E?|PI(?:_[24])?|SQRT(?:1_2|2))(?:_F|_H)?|NAN)\b/,
                        alias: "constant"
                    }
                }),
                e.languages.insertBefore("opencl", "class-name", {
                    "builtin-type": {
                        pattern: /\b(?:_cl_(?:command_queue|context|device_id|event|kernel|mem|platform_id|program|sampler)|cl_(?:image_format|mem_fence_flags)|clk_event_t|event_t|image(?:1d_(?:array_|buffer_)?t|2d_(?:array_(?:depth_|msaa_depth_|msaa_)?|depth_|msaa_depth_|msaa_)?t|3d_t)|intptr_t|ndrange_t|ptrdiff_t|queue_t|reserve_id_t|sampler_t|size_t|uintptr_t)\b/,
                        alias: "keyword"
                    }
                });
                var t = {
                    "type-opencl-host": {
                        pattern: /\b(?:cl_(?:GLenum|GLint|GLuin|addressing_mode|bitfield|bool|buffer_create_type|build_status|channel_(?:order|type)|(?:u?(?:char|short|int|long)|float|double)(?:2|3|4|8|16)?|command_(?:queue(?:_info|_properties)?|type)|context(?:_info|_properties)?|device_(?:exec_capabilities|fp_config|id|info|local_mem_type|mem_cache_type|type)|(?:event|sampler)(?:_info)?|filter_mode|half|image_info|kernel(?:_info|_work_group_info)?|map_flags|mem(?:_flags|_info|_object_type)?|platform_(?:id|info)|profiling_info|program(?:_build_info|_info)?))\b/,
                        alias: "keyword"
                    },
                    "boolean-opencl-host": {
                        pattern: /\bCL_(?:TRUE|FALSE)\b/,
                        alias: "boolean"
                    },
                    "constant-opencl-host": {
                        pattern: /\bCL_(?:A|ABGR|ADDRESS_(?:CLAMP(?:_TO_EDGE)?|MIRRORED_REPEAT|NONE|REPEAT)|ARGB|BGRA|BLOCKING|BUFFER_CREATE_TYPE_REGION|BUILD_(?:ERROR|IN_PROGRESS|NONE|PROGRAM_FAILURE|SUCCESS)|COMMAND_(?:ACQUIRE_GL_OBJECTS|BARRIER|COPY_(?:BUFFER(?:_RECT|_TO_IMAGE)?|IMAGE(?:_TO_BUFFER)?)|FILL_(?:BUFFER|IMAGE)|MAP(?:_BUFFER|_IMAGE)|MARKER|MIGRATE(?:_SVM)?_MEM_OBJECTS|NATIVE_KERNEL|NDRANGE_KERNEL|READ_(?:BUFFER(?:_RECT)?|IMAGE)|RELEASE_GL_OBJECTS|SVM_(?:FREE|MAP|MEMCPY|MEMFILL|UNMAP)|TASK|UNMAP_MEM_OBJECT|USER|WRITE_(?:BUFFER(?:_RECT)?|IMAGE))|COMPILER_NOT_AVAILABLE|COMPILE_PROGRAM_FAILURE|COMPLETE|CONTEXT_(?:DEVICES|INTEROP_USER_SYNC|NUM_DEVICES|PLATFORM|PROPERTIES|REFERENCE_COUNT)|DEPTH(?:_STENCIL)?|DEVICE_(?:ADDRESS_BITS|AFFINITY_DOMAIN_(?:L[1-4]_CACHE|NEXT_PARTITIONABLE|NUMA)|AVAILABLE|BUILT_IN_KERNELS|COMPILER_AVAILABLE|DOUBLE_FP_CONFIG|ENDIAN_LITTLE|ERROR_CORRECTION_SUPPORT|EXECUTION_CAPABILITIES|EXTENSIONS|GLOBAL_(?:MEM_(?:CACHELINE_SIZE|CACHE_SIZE|CACHE_TYPE|SIZE)|VARIABLE_PREFERRED_TOTAL_SIZE)|HOST_UNIFIED_MEMORY|IL_VERSION|IMAGE(?:2D_MAX_(?:HEIGHT|WIDTH)|3D_MAX_(?:DEPTH|HEIGHT|WIDTH)|_BASE_ADDRESS_ALIGNMENT|_MAX_ARRAY_SIZE|_MAX_BUFFER_SIZE|_PITCH_ALIGNMENT|_SUPPORT)|LINKER_AVAILABLE|LOCAL_MEM_SIZE|LOCAL_MEM_TYPE|MAX_(?:CLOCK_FREQUENCY|COMPUTE_UNITS|CONSTANT_ARGS|CONSTANT_BUFFER_SIZE|GLOBAL_VARIABLE_SIZE|MEM_ALLOC_SIZE|NUM_SUB_GROUPS|ON_DEVICE_(?:EVENTS|QUEUES)|PARAMETER_SIZE|PIPE_ARGS|READ_IMAGE_ARGS|READ_WRITE_IMAGE_ARGS|SAMPLERS|WORK_GROUP_SIZE|WORK_ITEM_DIMENSIONS|WORK_ITEM_SIZES|WRITE_IMAGE_ARGS)|MEM_BASE_ADDR_ALIGN|MIN_DATA_TYPE_ALIGN_SIZE|NAME|NATIVE_VECTOR_WIDTH_(?:CHAR|DOUBLE|FLOAT|HALF|INT|LONG|SHORT)|NOT_(?:AVAILABLE|FOUND)|OPENCL_C_VERSION|PARENT_DEVICE|PARTITION_(?:AFFINITY_DOMAIN|BY_AFFINITY_DOMAIN|BY_COUNTS|BY_COUNTS_LIST_END|EQUALLY|FAILED|MAX_SUB_DEVICES|PROPERTIES|TYPE)|PIPE_MAX_(?:ACTIVE_RESERVATIONS|PACKET_SIZE)|PLATFORM|PREFERRED_(?:GLOBAL_ATOMIC_ALIGNMENT|INTEROP_USER_SYNC|LOCAL_ATOMIC_ALIGNMENT|PLATFORM_ATOMIC_ALIGNMENT|VECTOR_WIDTH_(?:CHAR|DOUBLE|FLOAT|HALF|INT|LONG|SHORT))|PRINTF_BUFFER_SIZE|PROFILE|PROFILING_TIMER_RESOLUTION|QUEUE_(?:ON_(?:DEVICE_(?:MAX_SIZE|PREFERRED_SIZE|PROPERTIES)|HOST_PROPERTIES)|PROPERTIES)|REFERENCE_COUNT|SINGLE_FP_CONFIG|SUB_GROUP_INDEPENDENT_FORWARD_PROGRESS|SVM_(?:ATOMICS|CAPABILITIES|COARSE_GRAIN_BUFFER|FINE_GRAIN_BUFFER|FINE_GRAIN_SYSTEM)|TYPE(?:_ACCELERATOR|_ALL|_CPU|_CUSTOM|_DEFAULT|_GPU)?|VENDOR(?:_ID)?|VERSION)|DRIVER_VERSION|EVENT_(?:COMMAND_(?:EXECUTION_STATUS|QUEUE|TYPE)|CONTEXT|REFERENCE_COUNT)|EXEC_(?:KERNEL|NATIVE_KERNEL|STATUS_ERROR_FOR_EVENTS_IN_WAIT_LIST)|FILTER_(?:LINEAR|NEAREST)|FLOAT|FP_(?:CORRECTLY_ROUNDED_DIVIDE_SQRT|DENORM|FMA|INF_NAN|ROUND_TO_INF|ROUND_TO_NEAREST|ROUND_TO_ZERO|SOFT_FLOAT)|GLOBAL|HALF_FLOAT|IMAGE_(?:ARRAY_SIZE|BUFFER|DEPTH|ELEMENT_SIZE|FORMAT|FORMAT_MISMATCH|FORMAT_NOT_SUPPORTED|HEIGHT|NUM_MIP_LEVELS|NUM_SAMPLES|ROW_PITCH|SLICE_PITCH|WIDTH)|INTENSITY|INVALID_(?:ARG_INDEX|ARG_SIZE|ARG_VALUE|BINARY|BUFFER_SIZE|BUILD_OPTIONS|COMMAND_QUEUE|COMPILER_OPTIONS|CONTEXT|DEVICE|DEVICE_PARTITION_COUNT|DEVICE_QUEUE|DEVICE_TYPE|EVENT|EVENT_WAIT_LIST|GLOBAL_OFFSET|GLOBAL_WORK_SIZE|GL_OBJECT|HOST_PTR|IMAGE_DESCRIPTOR|IMAGE_FORMAT_DESCRIPTOR|IMAGE_SIZE|KERNEL|KERNEL_ARGS|KERNEL_DEFINITION|KERNEL_NAME|LINKER_OPTIONS|MEM_OBJECT|MIP_LEVEL|OPERATION|PIPE_SIZE|PLATFORM|PROGRAM|PROGRAM_EXECUTABLE|PROPERTY|QUEUE_PROPERTIES|SAMPLER|VALUE|WORK_DIMENSION|WORK_GROUP_SIZE|WORK_ITEM_SIZE)|KERNEL_(?:ARG_(?:ACCESS_(?:NONE|QUALIFIER|READ_ONLY|READ_WRITE|WRITE_ONLY)|ADDRESS_(?:CONSTANT|GLOBAL|LOCAL|PRIVATE|QUALIFIER)|INFO_NOT_AVAILABLE|NAME|TYPE_(?:CONST|NAME|NONE|PIPE|QUALIFIER|RESTRICT|VOLATILE))|ATTRIBUTES|COMPILE_NUM_SUB_GROUPS|COMPILE_WORK_GROUP_SIZE|CONTEXT|EXEC_INFO_SVM_FINE_GRAIN_SYSTEM|EXEC_INFO_SVM_PTRS|FUNCTION_NAME|GLOBAL_WORK_SIZE|LOCAL_MEM_SIZE|LOCAL_SIZE_FOR_SUB_GROUP_COUNT|MAX_NUM_SUB_GROUPS|MAX_SUB_GROUP_SIZE_FOR_NDRANGE|NUM_ARGS|PREFERRED_WORK_GROUP_SIZE_MULTIPLE|PRIVATE_MEM_SIZE|PROGRAM|REFERENCE_COUNT|SUB_GROUP_COUNT_FOR_NDRANGE|WORK_GROUP_SIZE)|LINKER_NOT_AVAILABLE|LINK_PROGRAM_FAILURE|LOCAL|LUMINANCE|MAP_(?:FAILURE|READ|WRITE|WRITE_INVALIDATE_REGION)|MEM_(?:ALLOC_HOST_PTR|ASSOCIATED_MEMOBJECT|CONTEXT|COPY_HOST_PTR|COPY_OVERLAP|FLAGS|HOST_NO_ACCESS|HOST_PTR|HOST_READ_ONLY|HOST_WRITE_ONLY|KERNEL_READ_AND_WRITE|MAP_COUNT|OBJECT_(?:ALLOCATION_FAILURE|BUFFER|IMAGE1D|IMAGE1D_ARRAY|IMAGE1D_BUFFER|IMAGE2D|IMAGE2D_ARRAY|IMAGE3D|PIPE)|OFFSET|READ_ONLY|READ_WRITE|REFERENCE_COUNT|SIZE|SVM_ATOMICS|SVM_FINE_GRAIN_BUFFER|TYPE|USES_SVM_POINTER|USE_HOST_PTR|WRITE_ONLY)|MIGRATE_MEM_OBJECT_(?:CONTENT_UNDEFINED|HOST)|MISALIGNED_SUB_BUFFER_OFFSET|NONE|NON_BLOCKING|OUT_OF_(?:HOST_MEMORY|RESOURCES)|PIPE_(?:MAX_PACKETS|PACKET_SIZE)|PLATFORM_(?:EXTENSIONS|HOST_TIMER_RESOLUTION|NAME|PROFILE|VENDOR|VERSION)|PROFILING_(?:COMMAND_(?:COMPLETE|END|QUEUED|START|SUBMIT)|INFO_NOT_AVAILABLE)|PROGRAM_(?:BINARIES|BINARY_SIZES|BINARY_TYPE(?:_COMPILED_OBJECT|_EXECUTABLE|_LIBRARY|_NONE)?|BUILD_(?:GLOBAL_VARIABLE_TOTAL_SIZE|LOG|OPTIONS|STATUS)|CONTEXT|DEVICES|IL|KERNEL_NAMES|NUM_DEVICES|NUM_KERNELS|REFERENCE_COUNT|SOURCE)|QUEUED|QUEUE_(?:CONTEXT|DEVICE|DEVICE_DEFAULT|ON_DEVICE|ON_DEVICE_DEFAULT|OUT_OF_ORDER_EXEC_MODE_ENABLE|PROFILING_ENABLE|PROPERTIES|REFERENCE_COUNT|SIZE)|R|RA|READ_(?:ONLY|WRITE)_CACHE|RG|RGB|RGBA|RGBx|RGx|RUNNING|Rx|SAMPLER_(?:ADDRESSING_MODE|CONTEXT|FILTER_MODE|LOD_MAX|LOD_MIN|MIP_FILTER_MODE|NORMALIZED_COORDS|REFERENCE_COUNT)|(?:UN)?SIGNED_INT(?:8|16|32)|SNORM_INT(?:8|16)|SUBMITTED|SUCCESS|UNORM_INT(?:16|24|8|_101010|_101010_2)|UNORM_SHORT_(?:555|565)|VERSION_(?:1_0|1_1|1_2|2_0|2_1)|sBGRA|sRGB|sRGBA|sRGBx)\b/,
                        alias: "constant"
                    },
                    "function-opencl-host": {
                        pattern: /\bcl(?:BuildProgram|CloneKernel|CompileProgram|Create(?:Buffer|CommandQueue(?:WithProperties)?|Context|ContextFromType|Image|Image2D|Image3D|Kernel|KernelsInProgram|Pipe|ProgramWith(?:Binary|BuiltInKernels|IL|Source)|Sampler|SamplerWithProperties|SubBuffer|SubDevices|UserEvent)|Enqueue(?:(?:Barrier|Marker)(?:WithWaitList)?|Copy(?:Buffer(?:Rect|ToImage)?|Image(?:ToBuffer)?)|(?:Fill|Map)(?:Buffer|Image)|MigrateMemObjects|NDRangeKernel|NativeKernel|(?:Read|Write)(?:Buffer(?:Rect)?|Image)|SVM(?:Free|Map|MemFill|Memcpy|MigrateMem|Unmap)|Task|UnmapMemObject|WaitForEvents)|Finish|Flush|Get(?:CommandQueueInfo|ContextInfo|Device(?:AndHostTimer|IDs|Info)|Event(?:Profiling)?Info|ExtensionFunctionAddress(?:ForPlatform)?|HostTimer|ImageInfo|Kernel(?:ArgInfo|Info|SubGroupInfo|WorkGroupInfo)|MemObjectInfo|PipeInfo|Platform(?:IDs|Info)|Program(?:Build)?Info|SamplerInfo|SupportedImageFormats)|LinkProgram|(?:Release|Retain)(?:CommandQueue|Context|Device|Event|Kernel|MemObject|Program|Sampler)|SVM(?:Alloc|Free)|Set(?:CommandQueueProperty|DefaultDeviceCommandQueue|EventCallback|Kernel(?:Arg(?:SVMPointer)?|ExecInfo)|Kernel|MemObjectDestructorCallback|UserEventStatus)|Unload(?:Platform)?Compiler|WaitForEvents)\b/,
                        alias: "function"
                    }
                };
                e.languages.insertBefore("c", "keyword", t),
                e.languages.cpp && (t["type-opencl-host-cpp"] = {
                    pattern: /\b(?:Buffer|BufferGL|BufferRenderGL|CommandQueue|Context|Device|DeviceCommandQueue|EnqueueArgs|Event|Image|Image1D|Image1DArray|Image1DBuffer|Image2D|Image2DArray|Image2DGL|Image3D|Image3DGL|ImageFormat|ImageGL|Kernel|KernelFunctor|LocalSpaceArg|Memory|NDRange|Pipe|Platform|Program|Sampler|SVMAllocator|SVMTraitAtomic|SVMTraitCoarse|SVMTraitFine|SVMTraitReadOnly|SVMTraitReadWrite|SVMTraitWriteOnly|UserEvent)\b/,
                    alias: "keyword"
                },
                e.languages.insertBefore("cpp", "keyword", t))
            }(e)
        }
        e.exports = r,
        r.displayName = "opencl",
        r.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.openqasm = {
                comment: /\/\*[\s\S]*?\*\/|\/\/.*/,
                string: {
                    pattern: /"[^"\r\n\t]*"|'[^'\r\n\t]*'/,
                    greedy: !0
                },
                keyword: /\b(?:barrier|boxas|boxto|break|const|continue|ctrl|def|defcal|defcalgrammar|delay|else|end|for|gate|gphase|if|in|include|inv|kernel|lengthof|let|measure|pow|reset|return|rotary|stretchinf|while|CX|OPENQASM|U)\b|#pragma\b/,
                "class-name": /\b(?:angle|bit|bool|creg|fixed|float|int|length|qreg|qubit|stretch|uint)\b/,
                function: /\b(?:sin|cos|tan|exp|ln|sqrt|rotl|rotr|popcount)\b(?=\s*\()/,
                constant: /\b(?:pi|tau|euler)\b|\u03c0|\ud835\udf0f|\u2107/,
                number: {
                    pattern: /(^|[^.\w$])(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?(?:dt|ns|us|\xb5s|ms|s)?/i,
                    lookbehind: !0
                },
                operator: /->|>>=?|<<=?|&&|\|\||\+\+|--|[!=<>&|~^+\-*/%]=?|@/,
                punctuation: /[(){}\[\];,:.]/
            },
            e.languages.qasm = e.languages.openqasm
        }
        e.exports = a,
        a.displayName = "openqasm",
        a.aliases = ["qasm"]
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.oz = {
                comment: /\/\*[\s\S]*?\*\/|%.*/,
                string: {
                    pattern: /"(?:[^"\\]|\\[\s\S])*"/,
                    greedy: !0
                },
                atom: {
                    pattern: /'(?:[^'\\]|\\[\s\S])*'/,
                    greedy: !0,
                    alias: "builtin"
                },
                keyword: /\$|\[\]|\b(?:_|at|attr|case|catch|choice|class|cond|declare|define|dis|else(?:case|if)?|end|export|fail|false|feat|finally|from|fun|functor|if|import|in|local|lock|meth|nil|not|of|or|prepare|proc|prop|raise|require|self|skip|then|thread|true|try|unit)\b/,
                function: [/\b[a-z][A-Za-z\d]*(?=\()/, {
                    pattern: /(\{)[A-Z][A-Za-z\d]*\b/,
                    lookbehind: !0
                }],
                number: /\b(?:0[bx][\da-f]+|\d+(?:\.\d*)?(?:e~?\d+)?)\b|&(?:[^\\]|\\(?:\d{3}|.))/i,
                variable: /\b[A-Z][A-Za-z\d]*|`(?:[^`\\]|\\.)+`/,
                "attr-name": /\b\w+(?=:)/,
                operator: /:(?:=|::?)|<[-:=]?|=(?:=|<?:?)|>=?:?|\\=:?|!!?|[|#+\-*\/,~^@]|\b(?:andthen|div|mod|orelse)\b/,
                punctuation: /[\[\](){}.:;?]/
            }
        }
        e.exports = a,
        a.displayName = "oz",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.parigp = {
                comment: /\/\*[\s\S]*?\*\/|\\\\.*/,
                string: {
                    pattern: /"(?:[^"\\\r\n]|\\.)*"/,
                    greedy: !0
                },
                keyword: function() {
                    var e = ["breakpoint", "break", "dbg_down", "dbg_err", "dbg_up", "dbg_x", "forcomposite", "fordiv", "forell", "forpart", "forprime", "forstep", "forsubgroup", "forvec", "for", "iferr", "if", "local", "my", "next", "return", "until", "while"];
                    return e = e.map((function(e) {
                        return e.split("").join(" *")
                    }
                    )).join("|"),
                    RegExp("\\b(?:" + e + ")\\b")
                }(),
                function: /\b\w(?:[\w ]*\w)?(?= *\()/,
                number: {
                    pattern: /((?:\. *\. *)?)(?:\b\d(?: *\d)*(?: *(?!\. *\.)\.(?: *\d)*)?|\. *\d(?: *\d)*)(?: *e *(?:[+-] *)?\d(?: *\d)*)?/i,
                    lookbehind: !0
                },
                operator: /\. *\.|[*\/!](?: *=)?|%(?: *=|(?: *#)?(?: *')*)?|\+(?: *[+=])?|-(?: *[-=>])?|<(?: *>|(?: *<)?(?: *=)?)?|>(?: *>)?(?: *=)?|=(?: *=){0,2}|\\(?: *\/)?(?: *=)?|&(?: *&)?|\| *\||['#~^]/,
                punctuation: /[\[\]{}().,:;|]/
            }
        }
        e.exports = a,
        a.displayName = "parigp",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                var t = e.languages.parser = e.languages.extend("markup", {
                    keyword: {
                        pattern: /(^|[^^])(?:\^(?:case|eval|for|if|switch|throw)\b|@(?:BASE|CLASS|GET(?:_DEFAULT)?|OPTIONS|SET_DEFAULT|USE)\b)/,
                        lookbehind: !0
                    },
                    variable: {
                        pattern: /(^|[^^])\B\$(?:\w+|(?=[.{]))(?:(?:\.|::?)\w+)*(?:\.|::?)?/,
                        lookbehind: !0,
                        inside: {
                            punctuation: /\.|:+/
                        }
                    },
                    function: {
                        pattern: /(^|[^^])\B[@^]\w+(?:(?:\.|::?)\w+)*(?:\.|::?)?/,
                        lookbehind: !0,
                        inside: {
                            keyword: {
                                pattern: /(^@)(?:GET_|SET_)/,
                                lookbehind: !0
                            },
                            punctuation: /\.|:+/
                        }
                    },
                    escape: {
                        pattern: /\^(?:[$^;@()\[\]{}"':]|#[a-f\d]*)/i,
                        alias: "builtin"
                    },
                    punctuation: /[\[\](){};]/
                });
                t = e.languages.insertBefore("parser", "keyword", {
                    "parser-comment": {
                        pattern: /(\s)#.*/,
                        lookbehind: !0,
                        alias: "comment"
                    },
                    expression: {
                        pattern: /(^|[^^])\((?:[^()]|\((?:[^()]|\((?:[^()])*\))*\))*\)/,
                        greedy: !0,
                        lookbehind: !0,
                        inside: {
                            string: {
                                pattern: /(^|[^^])(["'])(?:(?!\2)[^^]|\^[\s\S])*\2/,
                                lookbehind: !0
                            },
                            keyword: t.keyword,
                            variable: t.variable,
                            function: t.function,
                            boolean: /\b(?:true|false)\b/,
                            number: /\b(?:0x[a-f\d]+|\d+(?:\.\d*)?(?:e[+-]?\d+)?)\b/i,
                            escape: t.escape,
                            operator: /[~+*\/\\%]|!(?:\|\|?|=)?|&&?|\|\|?|==|<[<=]?|>[>=]?|-[fd]?|\b(?:def|eq|ge|gt|in|is|le|lt|ne)\b/,
                            punctuation: t.punctuation
                        }
                    }
                }),
                e.languages.insertBefore("inside", "punctuation", {
                    expression: t.expression,
                    keyword: t.keyword,
                    variable: t.variable,
                    function: t.function,
                    escape: t.escape,
                    "parser-punctuation": {
                        pattern: t.punctuation,
                        alias: "punctuation"
                    }
                }, t.tag.inside["attr-value"])
            }(e)
        }
        e.exports = a,
        a.displayName = "parser",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.pascal = {
                comment: [/\(\*[\s\S]+?\*\)/, /\{[\s\S]+?\}/, /\/\/.*/],
                string: {
                    pattern: /(?:'(?:''|[^'\r\n])*'(?!')|#[&$%]?[a-f\d]+)+|\^[a-z]/i,
                    greedy: !0
                },
                keyword: [{
                    pattern: /(^|[^&])\b(?:absolute|array|asm|begin|case|const|constructor|destructor|do|downto|else|end|file|for|function|goto|if|implementation|inherited|inline|interface|label|nil|object|of|operator|packed|procedure|program|record|reintroduce|repeat|self|set|string|then|to|type|unit|until|uses|var|while|with)\b/i,
                    lookbehind: !0
                }, {
                    pattern: /(^|[^&])\b(?:dispose|exit|false|new|true)\b/i,
                    lookbehind: !0
                }, {
                    pattern: /(^|[^&])\b(?:class|dispinterface|except|exports|finalization|finally|initialization|inline|library|on|out|packed|property|raise|resourcestring|threadvar|try)\b/i,
                    lookbehind: !0
                }, {
                    pattern: /(^|[^&])\b(?:absolute|abstract|alias|assembler|bitpacked|break|cdecl|continue|cppdecl|cvar|default|deprecated|dynamic|enumerator|experimental|export|external|far|far16|forward|generic|helper|implements|index|interrupt|iochecks|local|message|name|near|nodefault|noreturn|nostackframe|oldfpccall|otherwise|overload|override|pascal|platform|private|protected|public|published|read|register|reintroduce|result|safecall|saveregisters|softfloat|specialize|static|stdcall|stored|strict|unaligned|unimplemented|varargs|virtual|write)\b/i,
                    lookbehind: !0
                }],
                number: [/(?:[&%]\d+|\$[a-f\d]+)/i, /\b\d+(?:\.\d+)?(?:e[+-]?\d+)?/i],
                operator: [/\.\.|\*\*|:=|<[<=>]?|>[>=]?|[+\-*\/]=?|[@^=]/i, {
                    pattern: /(^|[^&])\b(?:and|as|div|exclude|in|include|is|mod|not|or|shl|shr|xor)\b/,
                    lookbehind: !0
                }],
                punctuation: /\(\.|\.\)|[()\[\]:;,.]/
            },
            e.languages.objectpascal = e.languages.pascal
        }
        e.exports = a,
        a.displayName = "pascal",
        a.aliases = ["objectpascal"]
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                var t = /\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\)/.source
                  , n = /(?:\b\w+(?:<braces>)?|<braces>)/.source.replace(/<braces>/g, (function() {
                    return t
                }
                ))
                  , a = e.languages.pascaligo = {
                    comment: /\(\*[\s\S]+?\*\)|\/\/.*/,
                    string: {
                        pattern: /(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1|\^[a-z]/i,
                        greedy: !0
                    },
                    "class-name": [{
                        pattern: RegExp(/(\btype\s+\w+\s+is\s+)<type>/.source.replace(/<type>/g, (function() {
                            return n
                        }
                        )), "i"),
                        lookbehind: !0,
                        inside: null
                    }, {
                        pattern: RegExp(/<type>(?=\s+is\b)/.source.replace(/<type>/g, (function() {
                            return n
                        }
                        )), "i"),
                        inside: null
                    }, {
                        pattern: RegExp(/(:\s*)<type>/.source.replace(/<type>/g, (function() {
                            return n
                        }
                        ))),
                        lookbehind: !0,
                        inside: null
                    }],
                    keyword: {
                        pattern: /(^|[^&])\b(?:begin|block|case|const|else|end|fail|for|from|function|if|is|nil|of|remove|return|skip|then|type|var|while|with)\b/i,
                        lookbehind: !0
                    },
                    boolean: {
                        pattern: /(^|[^&])\b(?:True|False)\b/i,
                        lookbehind: !0
                    },
                    builtin: {
                        pattern: /(^|[^&])\b(?:bool|int|list|map|nat|record|string|unit)\b/i,
                        lookbehind: !0
                    },
                    function: /\b\w+(?=\s*\()/i,
                    number: [/%[01]+|&[0-7]+|\$[a-f\d]+/i, /\b\d+(?:\.\d+)?(?:e[+-]?\d+)?(?:mtz|n)?/i],
                    operator: /->|=\/=|\.\.|\*\*|:=|<[<=>]?|>[>=]?|[+\-*\/]=?|[@^=|]|\b(?:and|mod|or)\b/,
                    punctuation: /\(\.|\.\)|[()\[\]:;,.{}]/
                }
                  , r = ["comment", "keyword", "builtin", "operator", "punctuation"].reduce((function(e, t) {
                    return e[t] = a[t],
                    e
                }
                ), {});
                a["class-name"].forEach((function(e) {
                    e.inside = r
                }
                ))
            }(e)
        }
        e.exports = a,
        a.displayName = "pascaligo",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.pcaxis = {
                string: /"[^"]*"/,
                keyword: {
                    pattern: /((?:^|;)\s*)[-A-Z\d]+(?:\s*\[[-\w]+\])?(?:\s*\("[^"]*"(?:,\s*"[^"]*")*\))?(?=\s*=)/,
                    lookbehind: !0,
                    greedy: !0,
                    inside: {
                        keyword: /^[-A-Z\d]+/,
                        language: {
                            pattern: /^(\s*)\[[-\w]+\]/,
                            lookbehind: !0,
                            inside: {
                                punctuation: /^\[|\]$/,
                                property: /[-\w]+/
                            }
                        },
                        "sub-key": {
                            pattern: /^(\s*)\S[\s\S]*/,
                            lookbehind: !0,
                            inside: {
                                parameter: {
                                    pattern: /"[^"]*"/,
                                    alias: "property"
                                },
                                punctuation: /^\(|\)$|,/
                            }
                        }
                    }
                },
                operator: /=/,
                tlist: {
                    pattern: /TLIST\s*\(\s*\w+(?:(?:\s*,\s*"[^"]*")+|\s*,\s*"[^"]*"-"[^"]*")?\s*\)/,
                    greedy: !0,
                    inside: {
                        function: /^TLIST/,
                        property: {
                            pattern: /^(\s*\(\s*)\w+/,
                            lookbehind: !0
                        },
                        string: /"[^"]*"/,
                        punctuation: /[(),]/,
                        operator: /-/
                    }
                },
                punctuation: /[;,]/,
                number: {
                    pattern: /(^|\s)\d+(?:\.\d+)?(?!\S)/,
                    lookbehind: !0
                },
                boolean: /YES|NO/
            },
            e.languages.px = e.languages.pcaxis
        }
        e.exports = a,
        a.displayName = "pcaxis",
        a.aliases = ["px"]
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.peoplecode = {
                comment: RegExp([/\/\*[\s\S]*?\*\//.source, /\bREM[^;]*;/.source, /<\*(?:[^<*]|\*(?!>)|<(?!\*)|<\*(?:(?!\*>)[\s\S])*\*>)*\*>/.source, /\/\+[\s\S]*?\+\//.source].join("|")),
                string: {
                    pattern: /'(?:''|[^'\r\n])*'(?!')|"(?:""|[^"\r\n])*"(?!")/,
                    greedy: !0
                },
                variable: /%\w+/,
                "function-definition": {
                    pattern: /((?:^|[^\w-])(?:function|method)\s+)\w+/i,
                    lookbehind: !0,
                    alias: "function"
                },
                "class-name": {
                    pattern: /((?:^|[^-\w])(?:as|catch|class|component|create|extends|global|implements|instance|local|of|property|returns)\s+)\w+(?::\w+)*/i,
                    lookbehind: !0,
                    inside: {
                        punctuation: /:/
                    }
                },
                keyword: /\b(?:abstract|alias|as|catch|class|component|constant|create|declare|else|end-(?:class|evaluate|for|function|get|if|method|set|try|while)|evaluate|extends|for|function|get|global|implements|import|instance|if|library|local|method|null|of|out|peopleCode|private|program|property|protected|readonly|ref|repeat|returns?|set|step|then|throw|to|try|until|value|when(?:-other)?|while)\b/i,
                "operator-keyword": {
                    pattern: /\b(?:and|not|or)\b/i,
                    alias: "operator"
                },
                function: /[_a-z]\w*(?=\s*\()/i,
                boolean: /\b(?:false|true)\b/i,
                number: /\b\d+(?:\.\d+)?\b/,
                operator: /<>|[<>]=?|!=|\*\*|[-+*/|=@]/,
                punctuation: /[:.;,()[\]]/
            },
            e.languages.pcode = e.languages.peoplecode
        }
        e.exports = a,
        a.displayName = "peoplecode",
        a.aliases = ["pcode"]
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.perl = {
                comment: [{
                    pattern: /(^\s*)=\w[\s\S]*?=cut.*/m,
                    lookbehind: !0
                }, {
                    pattern: /(^|[^\\$])#.*/,
                    lookbehind: !0
                }],
                string: [{
                    pattern: /\b(?:q|qq|qx|qw)\s*([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1/,
                    greedy: !0
                }, {
                    pattern: /\b(?:q|qq|qx|qw)\s+([a-zA-Z0-9])(?:(?!\1)[^\\]|\\[\s\S])*\1/,
                    greedy: !0
                }, {
                    pattern: /\b(?:q|qq|qx|qw)\s*\((?:[^()\\]|\\[\s\S])*\)/,
                    greedy: !0
                }, {
                    pattern: /\b(?:q|qq|qx|qw)\s*\{(?:[^{}\\]|\\[\s\S])*\}/,
                    greedy: !0
                }, {
                    pattern: /\b(?:q|qq|qx|qw)\s*\[(?:[^[\]\\]|\\[\s\S])*\]/,
                    greedy: !0
                }, {
                    pattern: /\b(?:q|qq|qx|qw)\s*<(?:[^<>\\]|\\[\s\S])*>/,
                    greedy: !0
                }, {
                    pattern: /("|`)(?:(?!\1)[^\\]|\\[\s\S])*\1/,
                    greedy: !0
                }, {
                    pattern: /'(?:[^'\\\r\n]|\\.)*'/,
                    greedy: !0
                }],
                regex: [{
                    pattern: /\b(?:m|qr)\s*([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1[msixpodualngc]*/,
                    greedy: !0
                }, {
                    pattern: /\b(?:m|qr)\s+([a-zA-Z0-9])(?:(?!\1)[^\\]|\\[\s\S])*\1[msixpodualngc]*/,
                    greedy: !0
                }, {
                    pattern: /\b(?:m|qr)\s*\((?:[^()\\]|\\[\s\S])*\)[msixpodualngc]*/,
                    greedy: !0
                }, {
                    pattern: /\b(?:m|qr)\s*\{(?:[^{}\\]|\\[\s\S])*\}[msixpodualngc]*/,
                    greedy: !0
                }, {
                    pattern: /\b(?:m|qr)\s*\[(?:[^[\]\\]|\\[\s\S])*\][msixpodualngc]*/,
                    greedy: !0
                }, {
                    pattern: /\b(?:m|qr)\s*<(?:[^<>\\]|\\[\s\S])*>[msixpodualngc]*/,
                    greedy: !0
                }, {
                    pattern: /(^|[^-]\b)(?:s|tr|y)\s*([^a-zA-Z0-9\s{(\[<])(?:(?!\2)[^\\]|\\[\s\S])*\2(?:(?!\2)[^\\]|\\[\s\S])*\2[msixpodualngcer]*/,
                    lookbehind: !0,
                    greedy: !0
                }, {
                    pattern: /(^|[^-]\b)(?:s|tr|y)\s+([a-zA-Z0-9])(?:(?!\2)[^\\]|\\[\s\S])*\2(?:(?!\2)[^\\]|\\[\s\S])*\2[msixpodualngcer]*/,
                    lookbehind: !0,
                    greedy: !0
                }, {
                    pattern: /(^|[^-]\b)(?:s|tr|y)\s*\((?:[^()\\]|\\[\s\S])*\)\s*\((?:[^()\\]|\\[\s\S])*\)[msixpodualngcer]*/,
                    lookbehind: !0,
                    greedy: !0
                }, {
                    pattern: /(^|[^-]\b)(?:s|tr|y)\s*\{(?:[^{}\\]|\\[\s\S])*\}\s*\{(?:[^{}\\]|\\[\s\S])*\}[msixpodualngcer]*/,
                    lookbehind: !0,
                    greedy: !0
                }, {
                    pattern: /(^|[^-]\b)(?:s|tr|y)\s*\[(?:[^[\]\\]|\\[\s\S])*\]\s*\[(?:[^[\]\\]|\\[\s\S])*\][msixpodualngcer]*/,
                    lookbehind: !0,
                    greedy: !0
                }, {
                    pattern: /(^|[^-]\b)(?:s|tr|y)\s*<(?:[^<>\\]|\\[\s\S])*>\s*<(?:[^<>\\]|\\[\s\S])*>[msixpodualngcer]*/,
                    lookbehind: !0,
                    greedy: !0
                }, {
                    pattern: /\/(?:[^\/\\\r\n]|\\.)*\/[msixpodualngc]*(?=\s*(?:$|[\r\n,.;})&|\-+*~<>!?^]|(?:lt|gt|le|ge|eq|ne|cmp|not|and|or|xor|x)\b))/,
                    greedy: !0
                }],
                variable: [/[&*$@%]\{\^[A-Z]+\}/, /[&*$@%]\^[A-Z_]/, /[&*$@%]#?(?=\{)/, /[&*$@%]#?(?:(?:::)*'?(?!\d)[\w$]+(?![\w$]))+(?:::)*/i, /[&*$@%]\d+/, /(?!%=)[$@%][!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~]/],
                filehandle: {
                    pattern: /<(?![<=])\S*>|\b_\b/,
                    alias: "symbol"
                },
                vstring: {
                    pattern: /v\d+(?:\.\d+)*|\d+(?:\.\d+){2,}/,
                    alias: "string"
                },
                function: {
                    pattern: /sub \w+/i,
                    inside: {
                        keyword: /sub/
                    }
                },
                keyword: /\b(?:any|break|continue|default|delete|die|do|else|elsif|eval|for|foreach|given|goto|if|last|local|my|next|our|package|print|redo|require|return|say|state|sub|switch|undef|unless|until|use|when|while)\b/,
                number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)\b/,
                operator: /-[rwxoRWXOezsfdlpSbctugkTBMAC]\b|\+[+=]?|-[-=>]?|\*\*?=?|\/\/?=?|=[=~>]?|~[~=]?|\|\|?=?|&&?=?|<(?:=>?|<=?)?|>>?=?|![~=]?|[%^]=?|\.(?:=|\.\.?)?|[\\?]|\bx(?:=|\b)|\b(?:lt|gt|le|ge|eq|ne|cmp|not|and|or|xor)\b/,
                punctuation: /[{}[\];(),:]/
            }
        }
        e.exports = a,
        a.displayName = "perl",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        var a = n(176);
        function r(e) {
            e.register(a),
            e.languages.insertBefore("php", "variable", {
                this: /\$this\b/,
                global: /\$(?:_(?:SERVER|GET|POST|FILES|REQUEST|SESSION|ENV|COOKIE)|GLOBALS|HTTP_RAW_POST_DATA|argc|argv|php_errormsg|http_response_header)\b/,
                scope: {
                    pattern: /\b[\w\\]+::/,
                    inside: {
                        keyword: /static|self|parent/,
                        punctuation: /::|\\/
                    }
                }
            })
        }
        e.exports = r,
        r.displayName = "phpExtras",
        r.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        var a = n(176)
          , r = n(175);
        function i(e) {
            e.register(a),
            e.register(r),
            function(e) {
                var t = /(?:\b[a-zA-Z]\w*|[|\\[\]])+/.source;
                e.languages.phpdoc = e.languages.extend("javadoclike", {
                    parameter: {
                        pattern: RegExp("(@(?:global|param|property(?:-read|-write)?|var)\\s+(?:" + t + "\\s+)?)\\$\\w+"),
                        lookbehind: !0
                    }
                }),
                e.languages.insertBefore("phpdoc", "keyword", {
                    "class-name": [{
                        pattern: RegExp("(@(?:global|package|param|property(?:-read|-write)?|return|subpackage|throws|var)\\s+)" + t),
                        lookbehind: !0,
                        inside: {
                            keyword: /\b(?:callback|resource|boolean|integer|double|object|string|array|false|float|mixed|bool|null|self|true|void|int)\b/,
                            punctuation: /[|\\[\]()]/
                        }
                    }]
                }),
                e.languages.javadoclike.addSupport("php", e.languages.phpdoc)
            }(e)
        }
        e.exports = i,
        i.displayName = "phpdoc",
        i.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        var a = n(186);
        function r(e) {
            e.register(a),
            function(e) {
                var t = e.languages.plsql = e.languages.extend("sql", {
                    comment: [/\/\*[\s\S]*?\*\//, /--.*/]
                })
                  , n = t.keyword;
                Array.isArray(n) || (n = t.keyword = [n]),
                n.unshift(/\b(?:ACCESS|AGENT|AGGREGATE|ARRAY|ARROW|AT|ATTRIBUTE|AUDIT|AUTHID|BFILE_BASE|BLOB_BASE|BLOCK|BODY|BOTH|BOUND|BYTE|CALLING|CHAR_BASE|CHARSET(?:FORM|ID)|CLOB_BASE|COLAUTH|COLLECT|CLUSTERS?|COMPILED|COMPRESS|CONSTANT|CONSTRUCTOR|CONTEXT|CRASH|CUSTOMDATUM|DANGLING|DATE_BASE|DEFINE|DETERMINISTIC|DURATION|ELEMENT|EMPTY|EXCEPTIONS?|EXCLUSIVE|EXTERNAL|FINAL|FORALL|FORM|FOUND|GENERAL|HEAP|HIDDEN|IDENTIFIED|IMMEDIATE|INCLUDING|INCREMENT|INDICATOR|INDEXES|INDICES|INFINITE|INITIAL|ISOPEN|INSTANTIABLE|INTERFACE|INVALIDATE|JAVA|LARGE|LEADING|LENGTH|LIBRARY|LIKE[24C]|LIMITED|LONG|LOOP|MAP|MAXEXTENTS|MAXLEN|MEMBER|MINUS|MLSLABEL|MULTISET|NAME|NAN|NATIVE|NEW|NOAUDIT|NOCOMPRESS|NOCOPY|NOTFOUND|NOWAIT|NUMBER(?:_BASE)?|OBJECT|OCI(?:COLL|DATE|DATETIME|DURATION|INTERVAL|LOBLOCATOR|NUMBER|RAW|REF|REFCURSOR|ROWID|STRING|TYPE)|OFFLINE|ONLINE|ONLY|OPAQUE|OPERATOR|ORACLE|ORADATA|ORGANIZATION|ORL(?:ANY|VARY)|OTHERS|OVERLAPS|OVERRIDING|PACKAGE|PARALLEL_ENABLE|PARAMETERS?|PASCAL|PCTFREE|PIPE(?:LINED)?|PRAGMA|PRIOR|PRIVATE|RAISE|RANGE|RAW|RECORD|REF|REFERENCE|REM|REMAINDER|RESULT|RESOURCE|RETURNING|REVERSE|ROW(?:ID|NUM|TYPE)|SAMPLE|SB[124]|SEGMENT|SELF|SEPARATE|SEQUENCE|SHORT|SIZE(?:_T)?|SPARSE|SQL(?:CODE|DATA|NAME|STATE)|STANDARD|STATIC|STDDEV|STORED|STRING|STRUCT|STYLE|SUBMULTISET|SUBPARTITION|SUBSTITUTABLE|SUBTYPE|SUCCESSFUL|SYNONYM|SYSDATE|TABAUTH|TDO|THE|TIMEZONE_(?:ABBR|HOUR|MINUTE|REGION)|TRAILING|TRANSAC(?:TIONAL)?|TRUSTED|UB[124]|UID|UNDER|UNTRUSTED|VALIDATE|VALIST|VARCHAR2|VARIABLE|VARIANCE|VARRAY|VIEWS|VOID|WHENEVER|WRAPPED|ZONE)\b/i);
                var a = t.operator;
                Array.isArray(a) || (a = t.operator = [a]),
                a.unshift(/:=/)
            }(e)
        }
        e.exports = r,
        r.displayName = "plsql",
        r.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.powerquery = {
                comment: {
                    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:\/\/).*)/,
                    lookbehind: !0
                },
                "quoted-identifier": {
                    pattern: /#"(?:[^"\r\n]|"")*"(?!")/,
                    greedy: !0,
                    alias: "variable"
                },
                string: {
                    pattern: /"(?:[^"\r\n]|"")*"(?!")/,
                    greedy: !0
                },
                constant: [/\bDay\.(?:Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday)\b/, /\bTraceLevel\.(?:Critical|Error|Information|Verbose|Warning)\b/, /\bOccurrence\.(?:First|Last|All)\b/, /\bOrder\.(?:Ascending|Descending)\b/, /\bRoundingMode\.(?:AwayFromZero|Down|ToEven|TowardZero|Up)\b/, /\bMissingField\.(?:Error|Ignore|UseNull)\b/, /\bQuoteStyle\.(?:Csv|None)\b/, /\bJoinKind\.(?:Inner|LeftOuter|RightOuter|FullOuter|LeftAnti|RightAnti)\b/, /\bGroupKind\.(?:Global|Local)\b/, /\bExtraValues\.(?:List|Ignore|Error)\b/, /\bJoinAlgorithm\.(?:Dynamic|PairwiseHash|SortMerge|LeftHash|RightHash|LeftIndex|RightIndex)\b/, /\bJoinSide\.(?:Left|Right)\b/, /\bPrecision\.(?:Double|Decimal)\b/, /\bRelativePosition\.From(?:End|Start)\b/, /\bTextEncoding\.(?:Ascii|BigEndianUnicode|Unicode|Utf8|Utf16|Windows)\b/, /\b(?:Any|Binary|Date|DateTime|DateTimeZone|Duration|Int8|Int16|Int32|Int64|Function|List|Logical|None|Number|Record|Table|Text|Time)\.Type\b/, /\bnull\b/],
                boolean: /\b(?:true|false)\b/,
                keyword: /\b(?:and|as|each|else|error|if|in|is|let|meta|not|nullable|optional|or|otherwise|section|shared|then|try|type)\b|#(?:binary|date|datetime|datetimezone|duration|infinity|nan|sections|shared|table|time)\b/,
                function: {
                    pattern: /(^|[^#\w.])(?!\d)[\w.]+(?=\s*\()/,
                    lookbehind: !0
                },
                "data-type": {
                    pattern: /\b(?:any|anynonnull|binary|date|datetime|datetimezone|duration|function|list|logical|none|number|record|table|text|time|type)\b/,
                    alias: "variable"
                },
                number: {
                    pattern: /\b0x[\da-f]+\b|(?:[+-]?(?:\b\d+\.)?\b\d+|[+-]\.\d+|(^|[^.])\B\.\d+)(?:e[+-]?\d+)?\b/i,
                    lookbehind: !0
                },
                operator: /[-+*\/&?@^]|<(?:=>?|>)?|>=?|=>?|\.\.\.?/,
                punctuation: /[,;\[\](){}]/
            },
            e.languages.pq = e.languages.powerquery,
            e.languages.mscript = e.languages.powerquery
        }
        e.exports = a,
        a.displayName = "powerquery",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                var t = e.languages.powershell = {
                    comment: [{
                        pattern: /(^|[^`])<#[\s\S]*?#>/,
                        lookbehind: !0
                    }, {
                        pattern: /(^|[^`])#.*/,
                        lookbehind: !0
                    }],
                    string: [{
                        pattern: /"(?:`[\s\S]|[^`"])*"/,
                        greedy: !0,
                        inside: {
                            function: {
                                pattern: /(^|[^`])\$\((?:\$\([^\r\n()]*\)|(?!\$\()[^\r\n)])*\)/,
                                lookbehind: !0,
                                inside: {}
                            }
                        }
                    }, {
                        pattern: /'(?:[^']|'')*'/,
                        greedy: !0
                    }],
                    namespace: /\[[a-z](?:\[(?:\[[^\]]*\]|[^\[\]])*\]|[^\[\]])*\]/i,
                    boolean: /\$(?:true|false)\b/i,
                    variable: /\$\w+\b/,
                    function: [/\b(?:Add|Approve|Assert|Backup|Block|Checkpoint|Clear|Close|Compare|Complete|Compress|Confirm|Connect|Convert|ConvertFrom|ConvertTo|Copy|Debug|Deny|Disable|Disconnect|Dismount|Edit|Enable|Enter|Exit|Expand|Export|Find|ForEach|Format|Get|Grant|Group|Hide|Import|Initialize|Install|Invoke|Join|Limit|Lock|Measure|Merge|Move|New|Open|Optimize|Out|Ping|Pop|Protect|Publish|Push|Read|Receive|Redo|Register|Remove|Rename|Repair|Request|Reset|Resize|Resolve|Restart|Restore|Resume|Revoke|Save|Search|Select|Send|Set|Show|Skip|Sort|Split|Start|Step|Stop|Submit|Suspend|Switch|Sync|Tee|Test|Trace|Unblock|Undo|Uninstall|Unlock|Unprotect|Unpublish|Unregister|Update|Use|Wait|Watch|Where|Write)-[a-z]+\b/i, /\b(?:ac|cat|chdir|clc|cli|clp|clv|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|ebp|echo|epal|epcsv|epsn|erase|fc|fl|ft|fw|gal|gbp|gc|gci|gcs|gdr|gi|gl|gm|gp|gps|group|gsv|gu|gv|gwmi|iex|ii|ipal|ipcsv|ipsn|irm|iwmi|iwr|kill|lp|ls|measure|mi|mount|move|mp|mv|nal|ndr|ni|nv|ogv|popd|ps|pushd|pwd|rbp|rd|rdr|ren|ri|rm|rmdir|rni|rnp|rp|rv|rvpa|rwmi|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls|sort|sp|spps|spsv|start|sv|swmi|tee|trcm|type|write)\b/i],
                    keyword: /\b(?:Begin|Break|Catch|Class|Continue|Data|Define|Do|DynamicParam|Else|ElseIf|End|Exit|Filter|Finally|For|ForEach|From|Function|If|InlineScript|Parallel|Param|Process|Return|Sequence|Switch|Throw|Trap|Try|Until|Using|Var|While|Workflow)\b/i,
                    operator: {
                        pattern: /(\W?)(?:!|-(?:eq|ne|gt|ge|lt|le|sh[lr]|not|b?(?:and|x?or)|(?:Not)?(?:Like|Match|Contains|In)|Replace|Join|is(?:Not)?|as)\b|-[-=]?|\+[+=]?|[*\/%]=?)/i,
                        lookbehind: !0
                    },
                    punctuation: /[|{}[\];(),.]/
                }
                  , n = t.string[0].inside;
                n.boolean = t.boolean,
                n.variable = t.variable,
                n.function.inside = t
            }(e)
        }
        e.exports = a,
        a.displayName = "powershell",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.processing = e.languages.extend("clike", {
                keyword: /\b(?:break|catch|case|class|continue|default|else|extends|final|for|if|implements|import|new|null|private|public|return|static|super|switch|this|try|void|while)\b/,
                operator: /<[<=]?|>[>=]?|&&?|\|\|?|[%?]|[!=+\-*\/]=?/
            }),
            e.languages.insertBefore("processing", "number", {
                constant: /\b(?!XML\b)[A-Z][A-Z\d_]+\b/,
                type: {
                    pattern: /\b(?:boolean|byte|char|color|double|float|int|[A-Z]\w*)\b/,
                    alias: "variable"
                }
            }),
            e.languages.processing.function = /\b\w+(?=\s*\()/,
            e.languages.processing["class-name"].alias = "variable"
        }
        e.exports = a,
        a.displayName = "processing",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.prolog = {
                comment: [/%.+/, /\/\*[\s\S]*?\*\//],
                string: {
                    pattern: /(["'])(?:\1\1|\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
                    greedy: !0
                },
                builtin: /\b(?:fx|fy|xf[xy]?|yfx?)\b/,
                variable: /\b[A-Z_]\w*/,
                function: /\b[a-z]\w*(?:(?=\()|\/\d+)/,
                number: /\b\d+(?:\.\d*)?/,
                operator: /[:\\=><\-?*@\/;+^|!$.]+|\b(?:is|mod|not|xor)\b/,
                punctuation: /[(){}\[\],]/
            }
        }
        e.exports = a,
        a.displayName = "prolog",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                var t = ["on", "ignoring", "group_right", "group_left", "by", "without"]
                  , n = ["sum", "min", "max", "avg", "group", "stddev", "stdvar", "count", "count_values", "bottomk", "topk", "quantile"].concat(t, ["offset"]);
                e.languages.promql = {
                    comment: {
                        pattern: /(^[ \t]*)#.*/m,
                        lookbehind: !0
                    },
                    "vector-match": {
                        pattern: new RegExp("((?:" + t.join("|") + ")\\s*)\\([^)]*\\)"),
                        lookbehind: !0,
                        inside: {
                            "label-key": {
                                pattern: /\b[^,]*\b/,
                                alias: "attr-name"
                            },
                            punctuation: /[(),]/
                        }
                    },
                    "context-labels": {
                        pattern: /\{[^{}]*\}/,
                        inside: {
                            "label-key": {
                                pattern: /\b[a-z_]\w*(?=\s*(?:=|![=~]))/,
                                alias: "attr-name"
                            },
                            "label-value": {
                                pattern: /(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1/,
                                greedy: !0,
                                alias: "attr-value"
                            },
                            punctuation: /\{|\}|=~?|![=~]|,/
                        }
                    },
                    "context-range": [{
                        pattern: /\[[\w\s:]+\]/,
                        inside: {
                            punctuation: /\[|\]|:/,
                            "range-duration": {
                                pattern: /\b(?:\d+(?:[smhdwy]|ms))+\b/i,
                                alias: "number"
                            }
                        }
                    }, {
                        pattern: /(\boffset\s+)\w+/,
                        lookbehind: !0,
                        inside: {
                            "range-duration": {
                                pattern: /\b(?:\d+(?:[smhdwy]|ms))+\b/i,
                                alias: "number"
                            }
                        }
                    }],
                    keyword: new RegExp("\\b(?:" + n.join("|") + ")\\b","i"),
                    function: /\b[a-z_]\w*(?=\s*\()/i,
                    number: /[-+]?(?:(?:\b\d+(?:\.\d+)?|\B\.\d+)(?:e[-+]?\d+)?\b|\b(?:0x[0-9a-f]+|nan|inf)\b)/i,
                    operator: /[\^*/%+-]|==|!=|<=|<|>=|>|\b(?:and|unless|or)\b/i,
                    punctuation: /[{};()`,.[\]]/
                }
            }(e)
        }
        e.exports = a,
        a.displayName = "promql",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.properties = {
                comment: /^[ \t]*[#!].*$/m,
                "attr-value": {
                    pattern: /(^[ \t]*(?:\\(?:\r\n|[\s\S])|[^\\\s:=])+(?: *[=:] *(?! )| ))(?:\\(?:\r\n|[\s\S])|[^\\\r\n])+/m,
                    lookbehind: !0
                },
                "attr-name": /^[ \t]*(?:\\(?:\r\n|[\s\S])|[^\\\s:=])+(?= *[=:]| )/m,
                punctuation: /[=:]/
            }
        }
        e.exports = a,
        a.displayName = "properties",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                var t = /\b(?:double|float|[su]?int(?:32|64)|s?fixed(?:32|64)|bool|string|bytes)\b/;
                e.languages.protobuf = e.languages.extend("clike", {
                    "class-name": [{
                        pattern: /(\b(?:enum|extend|message|service)\s+)[A-Za-z_]\w*(?=\s*\{)/,
                        lookbehind: !0
                    }, {
                        pattern: /(\b(?:rpc\s+\w+|returns)\s*\(\s*(?:stream\s+)?)\.?[A-Za-z_]\w*(?:\.[A-Za-z_]\w*)*(?=\s*\))/,
                        lookbehind: !0
                    }],
                    keyword: /\b(?:enum|extend|extensions|import|message|oneof|option|optional|package|public|repeated|required|reserved|returns|rpc(?=\s+\w)|service|stream|syntax|to)\b(?!\s*=\s*\d)/,
                    function: /\b[a-z_]\w*(?=\s*\()/i
                }),
                e.languages.insertBefore("protobuf", "operator", {
                    map: {
                        pattern: /\bmap<\s*[\w.]+\s*,\s*[\w.]+\s*>(?=\s+[a-z_]\w*\s*[=;])/i,
                        alias: "class-name",
                        inside: {
                            punctuation: /[<>.,]/,
                            builtin: t
                        }
                    },
                    builtin: t,
                    "positional-class-name": {
                        pattern: /(?:\b|\B\.)[a-z_]\w*(?:\.[a-z_]\w*)*(?=\s+[a-z_]\w*\s*[=;])/i,
                        alias: "class-name",
                        inside: {
                            punctuation: /\./
                        }
                    },
                    annotation: {
                        pattern: /(\[\s*)[a-z_]\w*(?=\s*=)/i,
                        lookbehind: !0
                    }
                })
            }(e)
        }
        e.exports = a,
        a.displayName = "protobuf",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.psl = {
                comment: {
                    pattern: /#.*/,
                    greedy: !0
                },
                string: {
                    pattern: /"(?:\\.|[^\\"])*"/,
                    greedy: !0,
                    inside: {
                        symbol: /\\[ntrbA-Z"\\]/
                    }
                },
                "heredoc-string": {
                    pattern: /<<<([a-zA-Z_]\w*)[\r\n](?:.*[\r\n])*?\1\b/,
                    alias: "string",
                    greedy: !0
                },
                keyword: /\b(?:__multi|__single|case|default|do|else|elsif|exit|export|for|foreach|function|if|last|line|local|next|requires|return|switch|until|while|word)\b/,
                constant: /\b(?:ALARM|CHART_ADD_GRAPH|CHART_DELETE_GRAPH|CHART_DESTROY|CHART_LOAD|CHART_PRINT|EOF|FALSE|False|false|NO|No|no|OFFLINE|OK|PSL_PROF_LOG|R_CHECK_HORIZ|R_CHECK_VERT|R_CLICKER|R_COLUMN|R_FRAME|R_ICON|R_LABEL|R_LABEL_CENTER|R_LIST_MULTIPLE|R_LIST_MULTIPLE_ND|R_LIST_SINGLE|R_LIST_SINGLE_ND|R_MENU|R_POPUP|R_POPUP_SCROLLED|R_RADIO_HORIZ|R_RADIO_VERT|R_ROW|R_SCALE_HORIZ|R_SCALE_VERT|R_SPINNER|R_TEXT_FIELD|R_TEXT_FIELD_LABEL|R_TOGGLE|TRIM_LEADING|TRIM_LEADING_AND_TRAILING|TRIM_REDUNDANT|TRIM_TRAILING|TRUE|True|true|VOID|WARN)\b/,
                variable: /\b(?:errno|exit_status|PslDebug)\b/,
                builtin: {
                    pattern: /\b(?:acos|add_diary|annotate|annotate_get|asctime|asin|atan|atexit|ascii_to_ebcdic|batch_set|blackout|cat|ceil|chan_exists|change_state|close|code_cvt|cond_signal|cond_wait|console_type|convert_base|convert_date|convert_locale_date|cos|cosh|create|destroy_lock|dump_hist|date|destroy|difference|dget_text|dcget_text|ebcdic_to_ascii|encrypt|event_archive|event_catalog_get|event_check|event_query|event_range_manage|event_range_query|event_report|event_schedule|event_trigger|event_trigger2|execute|exists|exp|fabs|floor|fmod|full_discovery|file|fopen|ftell|fseek|grep|get_vars|getenv|get|get_chan_info|get_ranges|get_text|gethostinfo|getpid|getpname|history_get_retention|history|index|int|is_var|intersection|isnumber|internal|in_transition|join|kill|length|lines|lock|lock_info|log|loge|log10|matchline|msg_check|msg_get_format|msg_get_severity|msg_printf|msg_sprintf|ntharg|num_consoles|nthargf|nthline|nthlinef|num_bytes|print|proc_exists|process|popen|printf|pconfig|poplines|pow|PslExecute|PslFunctionCall|PslFunctionExists|PslSetOptions|random|read|readln|refresh_parameters|remote_check|remote_close|remote_event_query|remote_event_trigger|remote_file_send|remote_open|remove|replace|rindex|sec_check_priv|sec_store_get|sec_store_set|set_alarm_ranges|set_locale|share|sin|sinh|sleep|sopen|sqrt|srandom|subset|set|substr|system|sprintf|sort|snmp_agent_config|_snmp_debug|snmp_agent_stop|snmp_agent_start|snmp_h_set|snmp_h_get_next|snmp_h_get|snmp_set|snmp_walk|snmp_get_next|snmp_get|snmp_config|snmp_close|snmp_open|snmp_trap_receive|snmp_trap_ignore|snmp_trap_listen|snmp_trap_send|snmp_trap_raise_std_trap|snmp_trap_register_im|splitline|strcasecmp|str_repeat|trim|tail|tan|tanh|time|tmpnam|tolower|toupper|trace_psl_process|text_domain|unlock|unique|union|unset|va_arg|va_start|write)\b/,
                    alias: "builtin-function"
                },
                "foreach-variable": {
                    pattern: /(\bforeach\s+(?:(?:\w+\b|"(?:\\.|[^\\"])*")\s+){0,2})[_a-zA-Z]\w*(?=\s*\()/,
                    lookbehind: !0,
                    greedy: !0
                },
                function: {
                    pattern: /\b[_a-z]\w*\b(?=\s*\()/i
                },
                number: /\b(?:0x[0-9a-f]+|[0-9]+(?:\.[0-9]+)?)\b/i,
                operator: /--|\+\+|&&=?|\|\|=?|<<=?|>>=?|[=!]~|[-+*/%&|^!=<>]=?|\.|[:?]/,
                punctuation: /[(){}\[\];,]/
            }
        }
        e.exports = a,
        a.displayName = "psl",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                e.languages.pug = {
                    comment: {
                        pattern: /(^([\t ]*))\/\/.*(?:(?:\r?\n|\r)\2[\t ].+)*/m,
                        lookbehind: !0
                    },
                    "multiline-script": {
                        pattern: /(^([\t ]*)script\b.*\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/m,
                        lookbehind: !0,
                        inside: e.languages.javascript
                    },
                    filter: {
                        pattern: /(^([\t ]*)):.+(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/m,
                        lookbehind: !0,
                        inside: {
                            "filter-name": {
                                pattern: /^:[\w-]+/,
                                alias: "variable"
                            }
                        }
                    },
                    "multiline-plain-text": {
                        pattern: /(^([\t ]*)[\w\-#.]+\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/m,
                        lookbehind: !0
                    },
                    markup: {
                        pattern: /(^[\t ]*)<.+/m,
                        lookbehind: !0,
                        inside: e.languages.markup
                    },
                    doctype: {
                        pattern: /((?:^|\n)[\t ]*)doctype(?: .+)?/,
                        lookbehind: !0
                    },
                    "flow-control": {
                        pattern: /(^[\t ]*)(?:if|unless|else|case|when|default|each|while)\b(?: .+)?/m,
                        lookbehind: !0,
                        inside: {
                            each: {
                                pattern: /^each .+? in\b/,
                                inside: {
                                    keyword: /\b(?:each|in)\b/,
                                    punctuation: /,/
                                }
                            },
                            branch: {
                                pattern: /^(?:if|unless|else|case|when|default|while)\b/,
                                alias: "keyword"
                            },
                            rest: e.languages.javascript
                        }
                    },
                    keyword: {
                        pattern: /(^[\t ]*)(?:block|extends|include|append|prepend)\b.+/m,
                        lookbehind: !0
                    },
                    mixin: [{
                        pattern: /(^[\t ]*)mixin .+/m,
                        lookbehind: !0,
                        inside: {
                            keyword: /^mixin/,
                            function: /\w+(?=\s*\(|\s*$)/,
                            punctuation: /[(),.]/
                        }
                    }, {
                        pattern: /(^[\t ]*)\+.+/m,
                        lookbehind: !0,
                        inside: {
                            name: {
                                pattern: /^\+\w+/,
                                alias: "function"
                            },
                            rest: e.languages.javascript
                        }
                    }],
                    script: {
                        pattern: /(^[\t ]*script(?:(?:&[^(]+)?\([^)]+\))*[\t ]).+/m,
                        lookbehind: !0,
                        inside: e.languages.javascript
                    },
                    "plain-text": {
                        pattern: /(^[\t ]*(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?[\t ]).+/m,
                        lookbehind: !0
                    },
                    tag: {
                        pattern: /(^[\t ]*)(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?:?/m,
                        lookbehind: !0,
                        inside: {
                            attributes: [{
                                pattern: /&[^(]+\([^)]+\)/,
                                inside: e.languages.javascript
                            }, {
                                pattern: /\([^)]+\)/,
                                inside: {
                                    "attr-value": {
                                        pattern: /(=\s*(?!\s))(?:\{[^}]*\}|[^,)\r\n]+)/,
                                        lookbehind: !0,
                                        inside: e.languages.javascript
                                    },
                                    "attr-name": /[\w-]+(?=\s*!?=|\s*[,)])/,
                                    punctuation: /[!=(),]+/
                                }
                            }],
                            punctuation: /:/,
                            "attr-id": /#[\w\-]+/,
                            "attr-class": /\.[\w\-]+/
                        }
                    },
                    code: [{
                        pattern: /(^[\t ]*(?:-|!?=)).+/m,
                        lookbehind: !0,
                        inside: e.languages.javascript
                    }],
                    punctuation: /[.\-!=|]+/
                };
                for (var t = /(^([\t ]*)):<filter_name>(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/.source, n = [{
                    filter: "atpl",
                    language: "twig"
                }, {
                    filter: "coffee",
                    language: "coffeescript"
                }, "ejs", "handlebars", "less", "livescript", "markdown", {
                    filter: "sass",
                    language: "scss"
                }, "stylus"], a = {}, r = 0, i = n.length; r < i; r++) {
                    var o = n[r];
                    o = "string" === typeof o ? {
                        filter: o,
                        language: o
                    } : o,
                    e.languages[o.language] && (a["filter-" + o.filter] = {
                        pattern: RegExp(t.replace("<filter_name>", (function() {
                            return o.filter
                        }
                        )), "m"),
                        lookbehind: !0,
                        inside: {
                            "filter-name": {
                                pattern: /^:[\w-]+/,
                                alias: "variable"
                            },
                            rest: e.languages[o.language]
                        }
                    })
                }
                e.languages.insertBefore("pug", "filter", a)
            }(e)
        }
        e.exports = a,
        a.displayName = "pug",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                e.languages.puppet = {
                    heredoc: [{
                        pattern: /(@\("([^"\r\n\/):]+)"(?:\/[nrts$uL]*)?\).*(?:\r?\n|\r))(?:.*(?:\r?\n|\r(?!\n)))*?[ \t]*(?:\|[ \t]*)?(?:-[ \t]*)?\2/,
                        lookbehind: !0,
                        alias: "string",
                        inside: {
                            punctuation: /(?=\S).*\S(?= *$)/
                        }
                    }, {
                        pattern: /(@\(([^"\r\n\/):]+)(?:\/[nrts$uL]*)?\).*(?:\r?\n|\r))(?:.*(?:\r?\n|\r(?!\n)))*?[ \t]*(?:\|[ \t]*)?(?:-[ \t]*)?\2/,
                        lookbehind: !0,
                        greedy: !0,
                        alias: "string",
                        inside: {
                            punctuation: /(?=\S).*\S(?= *$)/
                        }
                    }, {
                        pattern: /@\("?(?:[^"\r\n\/):]+)"?(?:\/[nrts$uL]*)?\)/,
                        alias: "string",
                        inside: {
                            punctuation: {
                                pattern: /(\().+?(?=\))/,
                                lookbehind: !0
                            }
                        }
                    }],
                    "multiline-comment": {
                        pattern: /(^|[^\\])\/\*[\s\S]*?\*\//,
                        lookbehind: !0,
                        greedy: !0,
                        alias: "comment"
                    },
                    regex: {
                        pattern: /((?:\bnode\s+|[~=\(\[\{,]\s*|[=+]>\s*|^\s*))\/(?:[^\/\\]|\\[\s\S])+\/(?:[imx]+\b|\B)/,
                        lookbehind: !0,
                        greedy: !0,
                        inside: {
                            "extended-regex": {
                                pattern: /^\/(?:[^\/\\]|\\[\s\S])+\/[im]*x[im]*$/,
                                inside: {
                                    comment: /#.*/
                                }
                            }
                        }
                    },
                    comment: {
                        pattern: /(^|[^\\])#.*/,
                        lookbehind: !0,
                        greedy: !0
                    },
                    string: {
                        pattern: /(["'])(?:\$\{(?:[^'"}]|(["'])(?:(?!\2)[^\\]|\\[\s\S])*\2)+\}|\$(?!\{)|(?!\1)[^\\$]|\\[\s\S])*\1/,
                        greedy: !0,
                        inside: {
                            "double-quoted": {
                                pattern: /^"[\s\S]*"$/,
                                inside: {}
                            }
                        }
                    },
                    variable: {
                        pattern: /\$(?:::)?\w+(?:::\w+)*/,
                        inside: {
                            punctuation: /::/
                        }
                    },
                    "attr-name": /(?:\b\w+|\*)(?=\s*=>)/,
                    function: [{
                        pattern: /(\.)(?!\d)\w+/,
                        lookbehind: !0
                    }, /\b(?:contain|debug|err|fail|include|info|notice|realize|require|tag|warning)\b|\b(?!\d)\w+(?=\()/],
                    number: /\b(?:0x[a-f\d]+|\d+(?:\.\d+)?(?:e-?\d+)?)\b/i,
                    boolean: /\b(?:true|false)\b/,
                    keyword: /\b(?:application|attr|case|class|consumes|default|define|else|elsif|function|if|import|inherits|node|private|produces|type|undef|unless)\b/,
                    datatype: {
                        pattern: /\b(?:Any|Array|Boolean|Callable|Catalogentry|Class|Collection|Data|Default|Enum|Float|Hash|Integer|NotUndef|Numeric|Optional|Pattern|Regexp|Resource|Runtime|Scalar|String|Struct|Tuple|Type|Undef|Variant)\b/,
                        alias: "symbol"
                    },
                    operator: /=[=~>]?|![=~]?|<(?:<\|?|[=~|-])?|>[>=]?|->?|~>|\|>?>?|[*\/%+?]|\b(?:and|in|or)\b/,
                    punctuation: /[\[\]{}().,;]|:+/
                };
                var t = [{
                    pattern: /(^|[^\\])\$\{(?:[^'"{}]|\{[^}]*\}|(["'])(?:(?!\2)[^\\]|\\[\s\S])*\2)+\}/,
                    lookbehind: !0,
                    inside: {
                        "short-variable": {
                            pattern: /(^\$\{)(?!\w+\()(?:::)?\w+(?:::\w+)*/,
                            lookbehind: !0,
                            alias: "variable",
                            inside: {
                                punctuation: /::/
                            }
                        },
                        delimiter: {
                            pattern: /^\$/,
                            alias: "variable"
                        },
                        rest: e.languages.puppet
                    }
                }, {
                    pattern: /(^|[^\\])\$(?:::)?\w+(?:::\w+)*/,
                    lookbehind: !0,
                    alias: "variable",
                    inside: {
                        punctuation: /::/
                    }
                }];
                e.languages.puppet.heredoc[0].inside.interpolation = t,
                e.languages.puppet.string.inside["double-quoted"].inside.interpolation = t
            }(e)
        }
        e.exports = a,
        a.displayName = "puppet",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                e.languages.pure = {
                    comment: [{
                        pattern: /(^|[^\\])\/\*[\s\S]*?\*\//,
                        lookbehind: !0
                    }, {
                        pattern: /(^|[^\\:])\/\/.*/,
                        lookbehind: !0
                    }, /#!.+/],
                    "inline-lang": {
                        pattern: /%<[\s\S]+?%>/,
                        greedy: !0,
                        inside: {
                            lang: {
                                pattern: /(^%< *)-\*-.+?-\*-/,
                                lookbehind: !0,
                                alias: "comment"
                            },
                            delimiter: {
                                pattern: /^%<.*|%>$/,
                                alias: "punctuation"
                            }
                        }
                    },
                    string: {
                        pattern: /"(?:\\.|[^"\\\r\n])*"/,
                        greedy: !0
                    },
                    number: {
                        pattern: /((?:\.\.)?)(?:\b(?:inf|nan)\b|\b0x[\da-f]+|(?:\b(?:0b)?\d+(?:\.\d+)?|\B\.\d+)(?:e[+-]?\d+)?L?)/i,
                        lookbehind: !0
                    },
                    keyword: /\b(?:ans|break|bt|case|catch|cd|clear|const|def|del|dump|else|end|exit|extern|false|force|help|if|infix[lr]?|interface|let|ls|mem|namespace|nonfix|NULL|of|otherwise|outfix|override|postfix|prefix|private|public|pwd|quit|run|save|show|stats|then|throw|trace|true|type|underride|using|when|with)\b/,
                    function: /\b(?:abs|add_(?:(?:fundef|interface|macdef|typedef)(?:_at)?|addr|constdef|vardef)|all|any|applp?|arity|bigintp?|blob(?:_crc|_size|p)?|boolp?|byte_(?:matrix|pointer)|byte_c?string(?:_pointer)?|calloc|cat|catmap|ceil|char[ps]?|check_ptrtag|chr|clear_sentry|clearsym|closurep?|cmatrixp?|cols?|colcat(?:map)?|colmap|colrev|colvector(?:p|seq)?|complex(?:_float_(?:matrix|pointer)|_matrix(?:_view)?|_pointer|p)?|conj|cookedp?|cst|cstring(?:_(?:dup|list|vector))?|curry3?|cyclen?|del_(?:constdef|fundef|interface|macdef|typedef|vardef)|delete|diag(?:mat)?|dim|dmatrixp?|do|double(?:_matrix(?:_view)?|_pointer|p)?|dowith3?|drop|dropwhile|eval(?:cmd)?|exactp|filter|fix|fixity|flip|float(?:_matrix|_pointer)|floor|fold[lr]1?|frac|free|funp?|functionp?|gcd|get(?:_(?:byte|constdef|double|float|fundef|int(?:64)?|interface(?:_typedef)?|long|macdef|pointer|ptrtag|short|sentry|string|typedef|vardef))?|globsym|hash|head|id|im|imatrixp?|index|inexactp|infp|init|insert|int(?:_matrix(?:_view)?|_pointer|p)?|int64_(?:matrix|pointer)|integerp?|iteraten?|iterwhile|join|keys?|lambdap?|last(?:err(?:pos)?)?|lcd|list[2p]?|listmap|make_ptrtag|malloc|map|matcat|matrixp?|max|member|min|nanp|nargs|nmatrixp?|null|numberp?|ord|pack(?:ed)?|pointer(?:_cast|_tag|_type|p)?|pow|pred|ptrtag|put(?:_(?:byte|double|float|int(?:64)?|long|pointer|short|string))?|rationalp?|re|realp?|realloc|recordp?|redim|reduce(?:_with)?|refp?|repeatn?|reverse|rlistp?|round|rows?|rowcat(?:map)?|rowmap|rowrev|rowvector(?:p|seq)?|same|scan[lr]1?|sentry|sgn|short_(?:matrix|pointer)|slice|smatrixp?|sort|split|str|strcat|stream|stride|string(?:_(?:dup|list|vector)|p)?|subdiag(?:mat)?|submat|subseq2?|substr|succ|supdiag(?:mat)?|symbolp?|tail|take|takewhile|thunkp?|transpose|trunc|tuplep?|typep|ubyte|uint(?:64)?|ulong|uncurry3?|unref|unzip3?|update|ushort|vals?|varp?|vector(?:p|seq)?|void|zip3?|zipwith3?)\b/,
                    special: {
                        pattern: /\b__[a-z]+__\b/i,
                        alias: "builtin"
                    },
                    operator: /(?:[!"#$%&'*+,\-.\/:<=>?@\\^`|~\u00a1-\u00bf\u00d7-\u00f7\u20d0-\u2bff]|\b_+\b)+|\b(?:and|div|mod|not|or)\b/,
                    punctuation: /[(){}\[\];,|]/
                };
                var t = /%< *-\*- *<lang>\d* *-\*-[\s\S]+?%>/.source;
                ["c", {
                    lang: "c++",
                    alias: "cpp"
                }, "fortran"].forEach((function(n) {
                    var a = n;
                    if ("string" !== typeof n && (a = n.alias,
                    n = n.lang),
                    e.languages[a]) {
                        var r = {};
                        r["inline-lang-" + a] = {
                            pattern: RegExp(t.replace("<lang>", n.replace(/([.+*?\/\\(){}\[\]])/g, "\\$1")), "i"),
                            inside: e.util.clone(e.languages.pure["inline-lang"].inside)
                        },
                        r["inline-lang-" + a].inside.rest = e.util.clone(e.languages[a]),
                        e.languages.insertBefore("pure", "inline-lang", r)
                    }
                }
                )),
                e.languages.c && (e.languages.pure["inline-lang"].inside.rest = e.util.clone(e.languages.c))
            }(e)
        }
        e.exports = a,
        a.displayName = "pure",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.purebasic = e.languages.extend("clike", {
                comment: /;.*/,
                keyword: /\b(?:declarecdll|declaredll|compilerselect|compilercase|compilerdefault|compilerendselect|compilererror|enableexplicit|disableexplicit|not|and|or|xor|calldebugger|debuglevel|enabledebugger|disabledebugger|restore|read|includepath|includebinary|threaded|runtime|with|endwith|structureunion|endstructureunion|align|newlist|newmap|interface|endinterface|extends|enumeration|endenumeration|swap|foreach|continue|fakereturn|goto|gosub|return|break|module|endmodule|declaremodule|enddeclaremodule|declare|declarec|prototype|prototypec|enableasm|disableasm|dim|redim|data|datasection|enddatasection|to|procedurereturn|debug|default|case|select|endselect|as|import|endimport|importc|compilerif|compilerelse|compilerendif|compilerelseif|end|structure|endstructure|while|wend|for|next|step|if|else|elseif|endif|repeat|until|procedure|proceduredll|procedurec|procedurecdll|endprocedure|protected|shared|static|global|define|includefile|xincludefile|macro|endmacro)\b/i,
                function: /\b\w+(?:\.\w+)?\s*(?=\()/,
                number: /(?:\$[\da-f]+|\b-?(?:\d+(?:\.\d+)?|\.\d+)(?:e[+-]?\d+)?)\b/i,
                operator: /(?:@\*?|\?|\*)\w+|-[>-]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|?\||[~^%?*/@]/
            }),
            e.languages.insertBefore("purebasic", "keyword", {
                tag: /#\w+/,
                asm: {
                    pattern: /(^[\t ]*)!.*/m,
                    lookbehind: !0,
                    alias: "tag",
                    inside: {
                        comment: /;.*/,
                        string: {
                            pattern: /(["'`])(?:\\.|(?!\1)[^\\\r\n])*\1/,
                            greedy: !0
                        },
                        "label-reference-anonymous": {
                            pattern: /(!\s*j[a-z]+\s+)@[fb]/i,
                            lookbehind: !0,
                            alias: "fasm-label"
                        },
                        "label-reference-addressed": {
                            pattern: /(!\s*j[a-z]+\s+)[A-Z._?$@][\w.?$@~#]*/i,
                            lookbehind: !0,
                            alias: "fasm-label"
                        },
                        function: {
                            pattern: /^([\t ]*!\s*)[\da-z]+(?=\s|$)/im,
                            lookbehind: !0
                        },
                        "function-inline": {
                            pattern: /(:\s*)[\da-z]+(?=\s)/i,
                            lookbehind: !0,
                            alias: "function"
                        },
                        label: {
                            pattern: /^([\t ]*!\s*)[A-Za-z._?$@][\w.?$@~#]*(?=:)/m,
                            lookbehind: !0,
                            alias: "fasm-label"
                        },
                        keyword: [/\b(?:extern|global)\b[^;\r\n]*/i, /\b(?:CPU|FLOAT|DEFAULT)\b.*/],
                        register: /\b(?:st\d|[xyz]mm\d\d?|[cdt]r\d|r\d\d?[bwd]?|[er]?[abcd]x|[abcd][hl]|[er]?(?:bp|sp|si|di)|[cdefgs]s|mm\d+)\b/i,
                        number: /(?:\b|-|(?=\$))(?:0[hx](?:[\da-f]*\.)?[\da-f]+(?:p[+-]?\d+)?|\d[\da-f]+[hx]|\$\d[\da-f]*|0[oq][0-7]+|[0-7]+[oq]|0[by][01]+|[01]+[by]|0[dt]\d+|(?:\d+(?:\.\d+)?|\.\d+)(?:\.?e[+-]?\d+)?[dt]?)\b/i,
                        operator: /[\[\]*+\-/%<>=&|$!,.:]/
                    }
                }
            }),
            delete e.languages.purebasic["class-name"],
            delete e.languages.purebasic.boolean,
            e.languages.pbfasm = e.languages.purebasic
        }
        e.exports = a,
        a.displayName = "purebasic",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        var a = n(189);
        function r(e) {
            e.register(a),
            e.languages.purescript = e.languages.extend("haskell", {
                keyword: /\b(?:ado|case|class|data|derive|do|else|forall|if|in|infixl|infixr|instance|let|module|newtype|of|primitive|then|type|where)\b/,
                "import-statement": {
                    pattern: /(^[\t ]*)import\s+[A-Z][\w']*(?:\.[A-Z][\w']*)*(?:\s+as\s+[A-Z][\w']*(?:\.[A-Z][\w']*)*)?(?:\s+hiding\b)?/m,
                    lookbehind: !0,
                    inside: {
                        keyword: /\b(?:import|as|hiding)\b/
                    }
                },
                builtin: /\b(?:absurd|add|ap|append|apply|between|bind|bottom|clamp|compare|comparing|compose|conj|const|degree|discard|disj|div|eq|flap|flip|gcd|identity|ifM|join|lcm|liftA1|liftM1|map|max|mempty|min|mod|mul|negate|not|notEq|one|otherwise|recip|show|sub|top|unit|unless|unlessM|void|when|whenM|zero)\b/
            }),
            e.languages.purs = e.languages.purescript
        }
        e.exports = r,
        r.displayName = "purescript",
        r.aliases = ["purs"]
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.python = {
                comment: {
                    pattern: /(^|[^\\])#.*/,
                    lookbehind: !0
                },
                "string-interpolation": {
                    pattern: /(?:f|rf|fr)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
                    greedy: !0,
                    inside: {
                        interpolation: {
                            pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
                            lookbehind: !0,
                            inside: {
                                "format-spec": {
                                    pattern: /(:)[^:(){}]+(?=\}$)/,
                                    lookbehind: !0
                                },
                                "conversion-option": {
                                    pattern: /![sra](?=[:}]$)/,
                                    alias: "punctuation"
                                },
                                rest: null
                            }
                        },
                        string: /[\s\S]+/
                    }
                },
                "triple-quoted-string": {
                    pattern: /(?:[rub]|rb|br)?("""|''')[\s\S]*?\1/i,
                    greedy: !0,
                    alias: "string"
                },
                string: {
                    pattern: /(?:[rub]|rb|br)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
                    greedy: !0
                },
                function: {
                    pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
                    lookbehind: !0
                },
                "class-name": {
                    pattern: /(\bclass\s+)\w+/i,
                    lookbehind: !0
                },
                decorator: {
                    pattern: /(^[\t ]*)@\w+(?:\.\w+)*/im,
                    lookbehind: !0,
                    alias: ["annotation", "punctuation"],
                    inside: {
                        punctuation: /\./
                    }
                },
                keyword: /\b(?:and|as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
                builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
                boolean: /\b(?:True|False|None)\b/,
                number: /(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?j?\b/i,
                operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
                punctuation: /[{}[\];(),.:]/
            },
            e.languages.python["string-interpolation"].inside.interpolation.inside.rest = e.languages.python,
            e.languages.py = e.languages.python
        }
        e.exports = a,
        a.displayName = "python",
        a.aliases = ["py"]
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.q = {
                string: /"(?:\\.|[^"\\\r\n])*"/,
                comment: [{
                    pattern: /([\t )\]}])\/.*/,
                    lookbehind: !0,
                    greedy: !0
                }, {
                    pattern: /(^|\r?\n|\r)\/[\t ]*(?:(?:\r?\n|\r)(?:.*(?:\r?\n|\r(?!\n)))*?(?:\\(?=[\t ]*(?:\r?\n|\r))|$)|\S.*)/,
                    lookbehind: !0,
                    greedy: !0
                }, {
                    pattern: /^\\[\t ]*(?:\r?\n|\r)[\s\S]+/m,
                    greedy: !0
                }, {
                    pattern: /^#!.+/m,
                    greedy: !0
                }],
                symbol: /`(?::\S+|[\w.]*)/,
                datetime: {
                    pattern: /0N[mdzuvt]|0W[dtz]|\d{4}\.\d\d(?:m|\.\d\d(?:T(?:\d\d(?::\d\d(?::\d\d(?:[.:]\d\d\d)?)?)?)?)?[dz]?)|\d\d:\d\d(?::\d\d(?:[.:]\d\d\d)?)?[uvt]?/,
                    alias: "number"
                },
                number: /\b(?![01]:)(?:0[wn]|0W[hj]?|0N[hje]?|0x[\da-fA-F]+|\d+(?:\.\d*)?(?:e[+-]?\d+)?[hjfeb]?)/,
                keyword: /\\\w+\b|\b(?:abs|acos|aj0?|all|and|any|asc|asin|asof|atan|attr|avgs?|binr?|by|ceiling|cols|cor|cos|count|cov|cross|csv|cut|delete|deltas|desc|dev|differ|distinct|div|do|dsave|ej|enlist|eval|except|exec|exit|exp|fby|fills|first|fkeys|flip|floor|from|get|getenv|group|gtime|hclose|hcount|hdel|hopen|hsym|iasc|identity|idesc|if|ij|in|insert|inter|inv|keys?|last|like|list|ljf?|load|log|lower|lsq|ltime|ltrim|mavg|maxs?|mcount|md5|mdev|med|meta|mins?|mmax|mmin|mmu|mod|msum|neg|next|not|null|or|over|parse|peach|pj|plist|prds?|prev|prior|rand|rank|ratios|raze|read0|read1|reciprocal|reval|reverse|rload|rotate|rsave|rtrim|save|scan|scov|sdev|select|set|setenv|show|signum|sin|sqrt|ssr?|string|sublist|sums?|sv|svar|system|tables|tan|til|trim|txf|type|uj|ungroup|union|update|upper|upsert|value|var|views?|vs|wavg|where|while|within|wj1?|wsum|ww|xasc|xbar|xcols?|xdesc|xexp|xgroup|xkey|xlog|xprev|xrank)\b/,
                adverb: {
                    pattern: /['\/\\]:?|\beach\b/,
                    alias: "function"
                },
                verb: {
                    pattern: /(?:\B\.\B|\b[01]:|<[=>]?|>=?|[:+\-*%,!?~=|$&#@^]):?|\b_\b:?/,
                    alias: "operator"
                },
                punctuation: /[(){}\[\];.]/
            }
        }
        e.exports = a,
        a.displayName = "q",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                for (var t = /"(?:\\.|[^\\"\r\n])*"|'(?:\\.|[^\\'\r\n])*'/.source, n = /\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))*\*\//.source, a = /(?:[^\\()[\]{}"'/]|<string>|\/(?![*/])|<comment>|\(<expr>*\)|\[<expr>*\]|\{<expr>*\}|\\[\s\S])/.source.replace(/<string>/g, (function() {
                    return t
                }
                )).replace(/<comment>/g, (function() {
                    return n
                }
                )), r = 0; r < 2; r++)
                    a = a.replace(/<expr>/g, (function() {
                        return a
                    }
                    ));
                a = a.replace(/<expr>/g, "[^\\s\\S]"),
                e.languages.qml = {
                    comment: {
                        pattern: /\/\/.*|\/\*[\s\S]*?\*\//,
                        greedy: !0
                    },
                    "javascript-function": {
                        pattern: RegExp(/((?:^|;)[ \t]*)function\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*\(<js>*\)\s*\{<js>*\}/.source.replace(/<js>/g, (function() {
                            return a
                        }
                        )), "m"),
                        lookbehind: !0,
                        greedy: !0,
                        alias: "language-javascript",
                        inside: e.languages.javascript
                    },
                    "class-name": {
                        pattern: /((?:^|[:;])[ \t]*)(?!\d)\w+(?=[ \t]*\{|[ \t]+on\b)/m,
                        lookbehind: !0
                    },
                    property: [{
                        pattern: /((?:^|[;{])[ \t]*)(?!\d)\w+(?:\.\w+)*(?=[ \t]*:)/m,
                        lookbehind: !0
                    }, {
                        pattern: /((?:^|[;{])[ \t]*)property[ \t]+(?!\d)\w+(?:\.\w+)*[ \t]+(?!\d)\w+(?:\.\w+)*(?=[ \t]*:)/m,
                        lookbehind: !0,
                        inside: {
                            keyword: /^property/,
                            property: /\w+(?:\.\w+)*/
                        }
                    }],
                    "javascript-expression": {
                        pattern: RegExp(/(:[ \t]*)(?![\s;}[])(?:(?!$|[;}])<js>)+/.source.replace(/<js>/g, (function() {
                            return a
                        }
                        )), "m"),
                        lookbehind: !0,
                        greedy: !0,
                        alias: "language-javascript",
                        inside: e.languages.javascript
                    },
                    string: /"(?:\\.|[^\\"\r\n])*"/,
                    keyword: /\b(?:as|import|on)\b/,
                    punctuation: /[{}[\]:;,]/
                }
            }(e)
        }
        e.exports = a,
        a.displayName = "qml",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.qore = e.languages.extend("clike", {
                comment: {
                    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:\/\/|#).*)/,
                    lookbehind: !0
                },
                string: {
                    pattern: /("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/,
                    greedy: !0
                },
                keyword: /\b(?:abstract|any|assert|binary|bool|boolean|break|byte|case|catch|char|class|code|const|continue|data|default|do|double|else|enum|extends|final|finally|float|for|goto|hash|if|implements|import|inherits|instanceof|int|interface|long|my|native|new|nothing|null|object|our|own|private|reference|rethrow|return|short|soft(?:int|float|number|bool|string|date|list)|static|strictfp|string|sub|super|switch|synchronized|this|throw|throws|transient|try|void|volatile|while)\b/,
                boolean: /\b(?:true|false)\b/i,
                function: /\$?\b(?!\d)\w+(?=\()/,
                number: /\b(?:0b[01]+|0x(?:[\da-f]*\.)?[\da-fp\-]+|(?:\d+(?:\.\d+)?|\.\d+)(?:e\d+)?[df]|(?:\d+(?:\.\d+)?|\.\d+))\b/i,
                operator: {
                    pattern: /(^|[^.])(?:\+[+=]?|-[-=]?|[!=](?:==?|~)?|>>?=?|<(?:=>?|<=?)?|&[&=]?|\|[|=]?|[*\/%^]=?|[~?])/,
                    lookbehind: !0
                },
                variable: /\$(?!\d)\w+\b/
            })
        }
        e.exports = a,
        a.displayName = "qore",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                function t(e, t) {
                    return e.replace(/<<(\d+)>>/g, (function(e, n) {
                        return "(?:" + t[+n] + ")"
                    }
                    ))
                }
                function n(e, n, a) {
                    return RegExp(t(e, n), a || "")
                }
                var a = RegExp("\\b(?:" + ("Adj BigInt Bool Ctl Double false Int One Pauli PauliI PauliX PauliY PauliZ Qubit Range Result String true Unit Zero" + " " + "Adjoint adjoint apply as auto body borrow borrowing Controlled controlled distribute elif else fail fixup for function if in internal intrinsic invert is let mutable namespace new newtype open operation repeat return self set until use using while within").trim().replace(/ /g, "|") + ")\\b")
                  , r = t(/<<0>>(?:\s*\.\s*<<0>>)*/.source, [/\b[A-Za-z_]\w*\b/.source])
                  , i = {
                    keyword: a,
                    punctuation: /[<>()?,.:[\]]/
                }
                  , o = /"(?:\\.|[^\\"])*"/.source;
                e.languages.qsharp = e.languages.extend("clike", {
                    comment: /\/\/.*/,
                    string: [{
                        pattern: n(/(^|[^$\\])<<0>>/.source, [o]),
                        lookbehind: !0,
                        greedy: !0
                    }],
                    "class-name": [{
                        pattern: n(/(\b(?:as|open)\s+)<<0>>(?=\s*(?:;|as\b))/.source, [r]),
                        lookbehind: !0,
                        inside: i
                    }, {
                        pattern: n(/(\bnamespace\s+)<<0>>(?=\s*\{)/.source, [r]),
                        lookbehind: !0,
                        inside: i
                    }],
                    keyword: a,
                    number: /(?:\b0(?:x[\da-f]+|b[01]+|o[0-7]+)|(?:\B\.\d+|\b\d+(?:\.\d*)?)(?:e[-+]?\d+)?)l?\b/i,
                    operator: /\band=|\bor=|\band\b|\bor\b|\bnot\b|<[-=]|[-=]>|>>>=?|<<<=?|\^\^\^=?|\|\|\|=?|&&&=?|w\/=?|~~~|[*\/+\-^=!%]=?/,
                    punctuation: /::|[{}[\];(),.:]/
                }),
                e.languages.insertBefore("qsharp", "number", {
                    range: {
                        pattern: /\.\./,
                        alias: "operator"
                    }
                });
                var s = function(e, t) {
                    for (var n = 0; n < t; n++)
                        e = e.replace(/<<self>>/g, (function() {
                            return "(?:" + e + ")"
                        }
                        ));
                    return e.replace(/<<self>>/g, "[^\\s\\S]")
                }(t(/\{(?:[^"{}]|<<0>>|<<self>>)*\}/.source, [o]), 2);
                e.languages.insertBefore("qsharp", "string", {
                    "interpolation-string": {
                        pattern: n(/\$"(?:\\.|<<0>>|[^\\"{])*"/.source, [s]),
                        greedy: !0,
                        inside: {
                            interpolation: {
                                pattern: n(/((?:^|[^\\])(?:\\\\)*)<<0>>/.source, [s]),
                                lookbehind: !0,
                                inside: {
                                    punctuation: /^\{|\}$/,
                                    expression: {
                                        pattern: /[\s\S]+/,
                                        alias: "language-qsharp",
                                        inside: e.languages.qsharp
                                    }
                                }
                            },
                            string: /[\s\S]+/
                        }
                    }
                })
            }(e),
            e.languages.qs = e.languages.qsharp
        }
        e.exports = a,
        a.displayName = "qsharp",
        a.aliases = ["qs"]
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.r = {
                comment: /#.*/,
                string: {
                    pattern: /(['"])(?:\\.|(?!\1)[^\\\r\n])*\1/,
                    greedy: !0
                },
                "percent-operator": {
                    pattern: /%[^%\s]*%/,
                    alias: "operator"
                },
                boolean: /\b(?:TRUE|FALSE)\b/,
                ellipsis: /\.\.(?:\.|\d+)/,
                number: [/\b(?:NaN|Inf)\b/, /(?:\b0x[\dA-Fa-f]+(?:\.\d*)?|\b\d+(?:\.\d*)?|\B\.\d+)(?:[EePp][+-]?\d+)?[iL]?/],
                keyword: /\b(?:if|else|repeat|while|function|for|in|next|break|NULL|NA|NA_integer_|NA_real_|NA_complex_|NA_character_)\b/,
                operator: /->?>?|<(?:=|<?-)?|[>=!]=?|::?|&&?|\|\|?|[+*\/^$@~]/,
                punctuation: /[(){}\[\],;]/
            }
        }
        e.exports = a,
        a.displayName = "r",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        var a = n(193);
        function r(e) {
            e.register(a),
            e.languages.racket = e.languages.extend("scheme", {
                "lambda-parameter": {
                    pattern: /([(\[]lambda\s+[(\[])[^()\[\]'\s]+/,
                    lookbehind: !0
                }
            }),
            e.languages.insertBefore("racket", "string", {
                lang: {
                    pattern: /^#lang.+/m,
                    greedy: !0,
                    alias: "keyword"
                }
            }),
            e.languages.rkt = e.languages.racket
        }
        e.exports = r,
        r.displayName = "racket",
        r.aliases = ["rkt"]
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.reason = e.languages.extend("clike", {
                string: {
                    pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
                    greedy: !0
                },
                "class-name": /\b[A-Z]\w*/,
                keyword: /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
                operator: /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:mod|land|lor|lxor|lsl|lsr|asr)\b/
            }),
            e.languages.insertBefore("reason", "class-name", {
                character: {
                    pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,
                    alias: "string"
                },
                constructor: {
                    pattern: /\b[A-Z]\w*\b(?!\s*\.)/,
                    alias: "variable"
                },
                label: {
                    pattern: /\b[a-z]\w*(?=::)/,
                    alias: "symbol"
                }
            }),
            delete e.languages.reason.function
        }
        e.exports = a,
        a.displayName = "reason",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                var t = {
                    pattern: /\\[\\(){}[\]^$+*?|.]/,
                    alias: "escape"
                }
                  , n = /\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|c[a-zA-Z]|0[0-7]{0,2}|[123][0-7]{2}|.)/
                  , a = "(?:[^\\\\-]|" + n.source + ")"
                  , r = RegExp(a + "-" + a)
                  , i = {
                    pattern: /(<|')[^<>']+(?=[>']$)/,
                    lookbehind: !0,
                    alias: "variable"
                };
                e.languages.regex = {
                    charset: {
                        pattern: /((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,
                        lookbehind: !0,
                        inside: {
                            "charset-negation": {
                                pattern: /(^\[)\^/,
                                lookbehind: !0,
                                alias: "operator"
                            },
                            "charset-punctuation": {
                                pattern: /^\[|\]$/,
                                alias: "punctuation"
                            },
                            range: {
                                pattern: r,
                                inside: {
                                    escape: n,
                                    "range-punctuation": {
                                        pattern: /-/,
                                        alias: "operator"
                                    }
                                }
                            },
                            "special-escape": t,
                            charclass: {
                                pattern: /\\[wsd]|\\p\{[^{}]+\}/i,
                                alias: "class-name"
                            },
                            escape: n
                        }
                    },
                    "special-escape": t,
                    charclass: {
                        pattern: /\.|\\[wsd]|\\p\{[^{}]+\}/i,
                        alias: "class-name"
                    },
                    backreference: [{
                        pattern: /\\(?![123][0-7]{2})[1-9]/,
                        alias: "keyword"
                    }, {
                        pattern: /\\k<[^<>']+>/,
                        alias: "keyword",
                        inside: {
                            "group-name": i
                        }
                    }],
                    anchor: {
                        pattern: /[$^]|\\[ABbGZz]/,
                        alias: "function"
                    },
                    escape: n,
                    group: [{
                        pattern: /\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,
                        alias: "punctuation",
                        inside: {
                            "group-name": i
                        }
                    }, {
                        pattern: /\)/,
                        alias: "punctuation"
                    }],
                    quantifier: {
                        pattern: /(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/,
                        alias: "number"
                    },
                    alternation: {
                        pattern: /\|/,
                        alias: "keyword"
                    }
                }
            }(e)
        }
        e.exports = a,
        a.displayName = "regex",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.rego = {
                comment: /#.*/,
                property: {
                    pattern: /(^|[^\\.])(?:"(?:\\.|[^\\"\r\n])*"|`[^`]*`|\b[a-z_]\w*\b)(?=\s*:(?!=))/i,
                    lookbehind: !0,
                    greedy: !0
                },
                string: {
                    pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"|`[^`]*`/,
                    lookbehind: !0,
                    greedy: !0
                },
                keyword: /\b(?:as|default|else|import|package|not|null|some|with|set(?=\s*\())\b/,
                boolean: /\b(?:true|false)\b/,
                function: {
                    pattern: /\b[a-z_]\w*\b(?:\s*\.\s*\b[a-z_]\w*\b)*(?=\s*\()/i,
                    inside: {
                        namespace: /\b\w+\b(?=\s*\.)/,
                        punctuation: /\./
                    }
                },
                number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
                operator: /[-+*/%|&]|[<>:=]=?|!=|\b_\b/,
                punctuation: /[,;.\[\]{}()]/
            }
        }
        e.exports = a,
        a.displayName = "rego",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.renpy = {
                comment: {
                    pattern: /(^|[^\\])#.+/,
                    lookbehind: !0
                },
                string: {
                    pattern: /("""|''')[\s\S]+?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2|(?:^#?(?:[0-9a-fA-F]{6}|(?:[0-9a-fA-F]){3})$)/m,
                    greedy: !0
                },
                function: /\b[a-z_]\w*(?=\()/i,
                property: /\b(?:insensitive|idle|hover|selected_idle|selected_hover|background|position|alt|xpos|ypos|pos|xanchor|yanchor|anchor|xalign|yalign|align|xcenter|ycenter|xofsset|yoffset|ymaximum|maximum|xmaximum|xminimum|yminimum|minimum|xsize|ysizexysize|xfill|yfill|area|antialias|black_color|bold|caret|color|first_indent|font|size|italic|justify|kerning|language|layout|line_leading|line_overlap_split|line_spacing|min_width|newline_indent|outlines|rest_indent|ruby_style|slow_cps|slow_cps_multiplier|strikethrough|text_align|underline|hyperlink_functions|vertical|hinting|foreground|left_margin|xmargin|top_margin|bottom_margin|ymargin|left_padding|right_padding|xpadding|top_padding|bottom_padding|ypadding|size_group|child|hover_sound|activate_sound|mouse|focus_mask|keyboard_focus|bar_vertical|bar_invert|bar_resizing|left_gutter|right_gutter|top_gutter|bottom_gutter|left_bar|right_bar|top_bar|bottom_bar|thumb|thumb_shadow|thumb_offset|unscrollable|spacing|first_spacing|box_reverse|box_wrap|order_reverse|fit_first|ysize|thumbnail_width|thumbnail_height|help|text_ypos|text_xpos|idle_color|hover_color|selected_idle_color|selected_hover_color|insensitive_color|alpha|insensitive_background|hover_background|zorder|value|width|xadjustment|xanchoraround|xaround|xinitial|xoffset|xzoom|yadjustment|yanchoraround|yaround|yinitial|yzoom|zoom|ground|height|text_style|text_y_fudge|selected_insensitive|has_sound|has_music|has_voice|focus|hovered|image_style|length|minwidth|mousewheel|offset|prefix|radius|range|right_margin|rotate|rotate_pad|developer|screen_width|screen_height|window_title|name|version|windows_icon|default_fullscreen|default_text_cps|default_afm_time|main_menu_music|sample_sound|enter_sound|exit_sound|save_directory|enter_transition|exit_transition|intra_transition|main_game_transition|game_main_transition|end_splash_transition|end_game_transition|after_load_transition|window_show_transition|window_hide_transition|adv_nvl_transition|nvl_adv_transition|enter_yesno_transition|exit_yesno_transition|enter_replay_transition|exit_replay_transition|say_attribute_transition|directory_name|executable_name|include_update|window_icon|modal|google_play_key|google_play_salt|drag_name|drag_handle|draggable|dragged|droppable|dropped|narrator_menu|action|default_afm_enable|version_name|version_tuple|inside|fadeout|fadein|layers|layer_clipping|linear|scrollbars|side_xpos|side_ypos|side_spacing|edgescroll|drag_joined|drag_raise|drop_shadow|drop_shadow_color|subpixel|easein|easeout|time|crop|auto|update|get_installed_packages|can_update|UpdateVersion|Update|overlay_functions|translations|window_left_padding|show_side_image|show_two_window)\b/,
                tag: /\b(?:label|image|menu|[hv]box|frame|text|imagemap|imagebutton|bar|vbar|screen|textbutton|buttoscreenn|fixed|grid|input|key|mousearea|side|timer|viewport|window|hotspot|hotbar|self|button|drag|draggroup|tag|mm_menu_frame|nvl|block|parallel)\b|\$/,
                keyword: /\b(?:as|assert|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|pass|print|raise|return|try|while|yield|adjustment|alignaround|allow|angle|around|box_layout|cache|changed|child_size|clicked|clipping|corner1|corner2|default|delay|exclude|scope|slow|slow_abortable|slow_done|sound|style_group|substitute|suffix|transform_anchor|transpose|unhovered|config|theme|mm_root|gm_root|rounded_window|build|disabled_text|disabled|widget_selected|widget_text|widget_hover|widget|updater|behind|call|expression|hide|init|jump|onlayer|python|renpy|scene|set|show|transform|play|queue|stop|pause|define|window|repeat|contains|choice|on|function|event|animation|clockwise|counterclockwise|circles|knot|null|None|random|has|add|use|fade|dissolve|style|store|id|voice|center|left|right|less_rounded|music|movie|clear|persistent|ui)\b/,
                boolean: /\b(?:[Tt]rue|[Ff]alse)\b/,
                number: /(?:\b(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*(?:\.\d*)?)|\B\.\d+)(?:e[+-]?\d+)?j?/i,
                operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]|\b(?:or|and|not|with|at)\b/,
                punctuation: /[{}[\];(),.:]/
            },
            e.languages.rpy = e.languages.renpy
        }
        e.exports = a,
        a.displayName = "renpy",
        a.aliases = ["rpy"]
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.rest = {
                table: [{
                    pattern: /(^[\t ]*)(?:\+[=-]+)+\+(?:\r?\n|\r)(?:\1[+|].+[+|](?:\r?\n|\r))+\1(?:\+[=-]+)+\+/m,
                    lookbehind: !0,
                    inside: {
                        punctuation: /\||(?:\+[=-]+)+\+/
                    }
                }, {
                    pattern: /(^[\t ]*)=+ [ =]*=(?:(?:\r?\n|\r)\1.+)+(?:\r?\n|\r)\1=+ [ =]*=(?=(?:\r?\n|\r){2}|\s*$)/m,
                    lookbehind: !0,
                    inside: {
                        punctuation: /[=-]+/
                    }
                }],
                "substitution-def": {
                    pattern: /(^[\t ]*\.\. )\|(?:[^|\s](?:[^|]*[^|\s])?)\| [^:]+::/m,
                    lookbehind: !0,
                    inside: {
                        substitution: {
                            pattern: /^\|(?:[^|\s]|[^|\s][^|]*[^|\s])\|/,
                            alias: "attr-value",
                            inside: {
                                punctuation: /^\||\|$/
                            }
                        },
                        directive: {
                            pattern: /( )(?! )[^:]+::/,
                            lookbehind: !0,
                            alias: "function",
                            inside: {
                                punctuation: /::$/
                            }
                        }
                    }
                },
                "link-target": [{
                    pattern: /(^[\t ]*\.\. )\[[^\]]+\]/m,
                    lookbehind: !0,
                    alias: "string",
                    inside: {
                        punctuation: /^\[|\]$/
                    }
                }, {
                    pattern: /(^[\t ]*\.\. )_(?:`[^`]+`|(?:[^:\\]|\\.)+):/m,
                    lookbehind: !0,
                    alias: "string",
                    inside: {
                        punctuation: /^_|:$/
                    }
                }],
                directive: {
                    pattern: /(^[\t ]*\.\. )[^:]+::/m,
                    lookbehind: !0,
                    alias: "function",
                    inside: {
                        punctuation: /::$/
                    }
                },
                comment: {
                    pattern: /(^[\t ]*\.\.)(?:(?: .+)?(?:(?:\r?\n|\r).+)+| .+)(?=(?:\r?\n|\r){2}|$)/m,
                    lookbehind: !0
                },
                title: [{
                    pattern: /^(([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~])\2+)(?:\r?\n|\r).+(?:\r?\n|\r)\1$/m,
                    inside: {
                        punctuation: /^[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~]+|[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~]+$/,
                        important: /.+/
                    }
                }, {
                    pattern: /(^|(?:\r?\n|\r){2}).+(?:\r?\n|\r)([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~])\2+(?=\r?\n|\r|$)/,
                    lookbehind: !0,
                    inside: {
                        punctuation: /[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~]+$/,
                        important: /.+/
                    }
                }],
                hr: {
                    pattern: /((?:\r?\n|\r){2})([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~])\2{3,}(?=(?:\r?\n|\r){2})/,
                    lookbehind: !0,
                    alias: "punctuation"
                },
                field: {
                    pattern: /(^[\t ]*):[^:\r\n]+:(?= )/m,
                    lookbehind: !0,
                    alias: "attr-name"
                },
                "command-line-option": {
                    pattern: /(^[\t ]*)(?:[+-][a-z\d]|(?:--|\/)[a-z\d-]+)(?:[ =](?:[a-z][\w-]*|<[^<>]+>))?(?:, (?:[+-][a-z\d]|(?:--|\/)[a-z\d-]+)(?:[ =](?:[a-z][\w-]*|<[^<>]+>))?)*(?=(?:\r?\n|\r)? {2,}\S)/im,
                    lookbehind: !0,
                    alias: "symbol"
                },
                "literal-block": {
                    pattern: /::(?:\r?\n|\r){2}([ \t]+)(?![ \t]).+(?:(?:\r?\n|\r)\1.+)*/,
                    inside: {
                        "literal-block-punctuation": {
                            pattern: /^::/,
                            alias: "punctuation"
                        }
                    }
                },
                "quoted-literal-block": {
                    pattern: /::(?:\r?\n|\r){2}([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~]).*(?:(?:\r?\n|\r)\1.*)*/,
                    inside: {
                        "literal-block-punctuation": {
                            pattern: /^(?:::|([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~])\1*)/m,
                            alias: "punctuation"
                        }
                    }
                },
                "list-bullet": {
                    pattern: /(^[\t ]*)(?:[*+\-\u2022\u2023\u2043]|\(?(?:\d+|[a-z]|[ivxdclm]+)\)|(?:\d+|[a-z]|[ivxdclm]+)\.)(?= )/im,
                    lookbehind: !0,
                    alias: "punctuation"
                },
                "doctest-block": {
                    pattern: /(^[\t ]*)>>> .+(?:(?:\r?\n|\r).+)*/m,
                    lookbehind: !0,
                    inside: {
                        punctuation: /^>>>/
                    }
                },
                inline: [{
                    pattern: /(^|[\s\-:\/'"<(\[{])(?::[^:]+:`.*?`|`.*?`:[^:]+:|(\*\*?|``?|\|)(?!\s)(?:(?!\2).)*\S\2(?=[\s\-.,:;!?\\\/'")\]}]|$))/m,
                    lookbehind: !0,
                    inside: {
                        bold: {
                            pattern: /(^\*\*).+(?=\*\*$)/,
                            lookbehind: !0
                        },
                        italic: {
                            pattern: /(^\*).+(?=\*$)/,
                            lookbehind: !0
                        },
                        "inline-literal": {
                            pattern: /(^``).+(?=``$)/,
                            lookbehind: !0,
                            alias: "symbol"
                        },
                        role: {
                            pattern: /^:[^:]+:|:[^:]+:$/,
                            alias: "function",
                            inside: {
                                punctuation: /^:|:$/
                            }
                        },
                        "interpreted-text": {
                            pattern: /(^`).+(?=`$)/,
                            lookbehind: !0,
                            alias: "attr-value"
                        },
                        substitution: {
                            pattern: /(^\|).+(?=\|$)/,
                            lookbehind: !0,
                            alias: "attr-value"
                        },
                        punctuation: /\*\*?|``?|\|/
                    }
                }],
                link: [{
                    pattern: /\[[^\[\]]+\]_(?=[\s\-.,:;!?\\\/'")\]}]|$)/,
                    alias: "string",
                    inside: {
                        punctuation: /^\[|\]_$/
                    }
                }, {
                    pattern: /(?:\b[a-z\d]+(?:[_.:+][a-z\d]+)*_?_|`[^`]+`_?_|_`[^`]+`)(?=[\s\-.,:;!?\\\/'")\]}]|$)/i,
                    alias: "string",
                    inside: {
                        punctuation: /^_?`|`$|`?_?_$/
                    }
                }],
                punctuation: {
                    pattern: /(^[\t ]*)(?:\|(?= |$)|(?:---?|\u2014|\.\.|__)(?= )|\.\.$)/m,
                    lookbehind: !0
                }
            }
        }
        e.exports = a,
        a.displayName = "rest",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.rip = {
                comment: /#.*/,
                keyword: /(?:=>|->)|\b(?:class|if|else|switch|case|return|exit|try|catch|finally|raise)\b/,
                builtin: /@|\bSystem\b/,
                boolean: /\b(?:true|false)\b/,
                date: /\b\d{4}-\d{2}-\d{2}\b/,
                time: /\b\d{2}:\d{2}:\d{2}\b/,
                datetime: /\b\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\b/,
                character: /\B`[^\s`'",.:;#\/\\()<>\[\]{}]\b/,
                regex: {
                    pattern: /(^|[^/])\/(?!\/)(?:\[[^\n\r\]]*\]|\\.|[^/\\\r\n\[])+\/(?=\s*(?:$|[\r\n,.;})]))/,
                    lookbehind: !0,
                    greedy: !0
                },
                symbol: /:[^\d\s`'",.:;#\/\\()<>\[\]{}][^\s`'",.:;#\/\\()<>\[\]{}]*/,
                string: {
                    pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
                    greedy: !0
                },
                number: /[+-]?\b(?:\d+\.\d+|\d+)\b/,
                punctuation: /(?:\.{2,3})|[`,.:;=\/\\()<>\[\]{}]/,
                reference: /[^\d\s`'",.:;#\/\\()<>\[\]{}][^\s`'",.:;#\/\\()<>\[\]{}]*/
            }
        }
        e.exports = a,
        a.displayName = "rip",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.roboconf = {
                comment: /#.*/,
                keyword: {
                    pattern: /(^|\s)(?:(?:facet|instance of)(?=[ \t]+[\w-]+[ \t]*\{)|(?:external|import)\b)/,
                    lookbehind: !0
                },
                component: {
                    pattern: /[\w-]+(?=[ \t]*\{)/,
                    alias: "variable"
                },
                property: /[\w.-]+(?=[ \t]*:)/,
                value: {
                    pattern: /(=[ \t]*(?![ \t]))[^,;]+/,
                    lookbehind: !0,
                    alias: "attr-value"
                },
                optional: {
                    pattern: /\(optional\)/,
                    alias: "builtin"
                },
                wildcard: {
                    pattern: /(\.)\*/,
                    lookbehind: !0,
                    alias: "operator"
                },
                punctuation: /[{},.;:=]/
            }
        }
        e.exports = a,
        a.displayName = "roboconf",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                var t = {
                    pattern: /(^[ \t]*| {2}|\t)#.*/m,
                    lookbehind: !0,
                    greedy: !0
                }
                  , n = {
                    pattern: /((?:^|[^\\])(?:\\{2})*)[$@&%]\{(?:[^{}\r\n]|\{[^{}\r\n]*\})*\}/,
                    lookbehind: !0,
                    inside: {
                        punctuation: /^[$@&%]\{|\}$/
                    }
                };
                function a(e, a) {
                    var r = {
                        "section-header": {
                            pattern: /^ ?\*{3}.+?\*{3}/,
                            alias: "keyword"
                        }
                    };
                    for (var i in a)
                        r[i] = a[i];
                    return r.tag = {
                        pattern: /([\r\n](?: {2}|\t)[ \t]*)\[[-\w]+\]/,
                        lookbehind: !0,
                        inside: {
                            punctuation: /\[|\]/
                        }
                    },
                    r.variable = n,
                    r.comment = t,
                    {
                        pattern: RegExp(/^ ?\*{3}[ \t]*<name>[ \t]*\*{3}(?:.|[\r\n](?!\*{3}))*/.source.replace(/<name>/g, (function() {
                            return e
                        }
                        )), "im"),
                        alias: "section",
                        inside: r
                    }
                }
                var r = {
                    pattern: /(\[Documentation\](?: {2}|\t)[ \t]*)(?![ \t]|#)(?:.|(?:\r\n?|\n)[ \t]*\.{3})+/,
                    lookbehind: !0,
                    alias: "string"
                }
                  , i = {
                    pattern: /([\r\n] ?)(?!#)(?:\S(?:[ \t]\S)*)+/,
                    lookbehind: !0,
                    alias: "function",
                    inside: {
                        variable: n
                    }
                }
                  , o = {
                    pattern: /([\r\n](?: {2}|\t)[ \t]*)(?!\[|\.{3}|#)(?:\S(?:[ \t]\S)*)+/,
                    lookbehind: !0,
                    inside: {
                        variable: n
                    }
                };
                e.languages.robotframework = {
                    settings: a("Settings", {
                        documentation: {
                            pattern: /([\r\n] ?Documentation(?: {2}|\t)[ \t]*)(?![ \t]|#)(?:.|(?:\r\n?|\n)[ \t]*\.{3})+/,
                            lookbehind: !0,
                            alias: "string"
                        },
                        property: {
                            pattern: /([\r\n] ?)(?!\.{3}|#)(?:\S(?:[ \t]\S)*)+/,
                            lookbehind: !0
                        }
                    }),
                    variables: a("Variables"),
                    "test-cases": a("Test Cases", {
                        "test-name": i,
                        documentation: r,
                        property: o
                    }),
                    keywords: a("Keywords", {
                        "keyword-name": i,
                        documentation: r,
                        property: o
                    }),
                    tasks: a("Tasks", {
                        "task-name": i,
                        documentation: r,
                        property: o
                    }),
                    comment: t
                },
                e.languages.robot = e.languages.robotframework
            }(e)
        }
        e.exports = a,
        a.displayName = "robotframework",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                for (var t = /\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source, n = 0; n < 2; n++)
                    t = t.replace(/<self>/g, (function() {
                        return t
                    }
                    ));
                t = t.replace(/<self>/g, (function() {
                    return /[^\s\S]/.source
                }
                )),
                e.languages.rust = {
                    comment: [{
                        pattern: RegExp(/(^|[^\\])/.source + t),
                        lookbehind: !0,
                        greedy: !0
                    }, {
                        pattern: /(^|[^\\:])\/\/.*/,
                        lookbehind: !0,
                        greedy: !0
                    }],
                    string: {
                        pattern: /b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,
                        greedy: !0
                    },
                    char: {
                        pattern: /b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,
                        greedy: !0,
                        alias: "string"
                    },
                    attribute: {
                        pattern: /#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,
                        greedy: !0,
                        alias: "attr-name",
                        inside: {
                            string: null
                        }
                    },
                    "closure-params": {
                        pattern: /([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,
                        lookbehind: !0,
                        greedy: !0,
                        inside: {
                            "closure-punctuation": {
                                pattern: /^\||\|$/,
                                alias: "punctuation"
                            },
                            rest: null
                        }
                    },
                    "lifetime-annotation": {
                        pattern: /'\w+/,
                        alias: "symbol"
                    },
                    "fragment-specifier": {
                        pattern: /(\$\w+:)[a-z]+/,
                        lookbehind: !0,
                        alias: "punctuation"
                    },
                    variable: /\$\w+/,
                    "function-definition": {
                        pattern: /(\bfn\s+)\w+/,
                        lookbehind: !0,
                        alias: "function"
                    },
                    "type-definition": {
                        pattern: /(\b(?:enum|struct|union)\s+)\w+/,
                        lookbehind: !0,
                        alias: "class-name"
                    },
                    "module-declaration": [{
                        pattern: /(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,
                        lookbehind: !0,
                        alias: "namespace"
                    }, {
                        pattern: /(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,
                        lookbehind: !0,
                        alias: "namespace",
                        inside: {
                            punctuation: /::/
                        }
                    }],
                    keyword: [/\b(?:abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|Self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/, /\b(?:[ui](?:8|16|32|64|128|size)|f(?:32|64)|bool|char|str)\b/],
                    function: /\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,
                    macro: {
                        pattern: /\b\w+!/,
                        alias: "property"
                    },
                    constant: /\b[A-Z_][A-Z_\d]+\b/,
                    "class-name": /\b[A-Z]\w*\b/,
                    namespace: {
                        pattern: /(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,
                        inside: {
                            punctuation: /::/
                        }
                    },
                    number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:[iu](?:8|16|32|64|size)?|f32|f64))?\b/,
                    boolean: /\b(?:false|true)\b/,
                    punctuation: /->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,
                    operator: /[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/
                },
                e.languages.rust["closure-params"].inside.rest = e.languages.rust,
                e.languages.rust.attribute.inside.string = e.languages.rust.string
            }(e)
        }
        e.exports = a,
        a.displayName = "rust",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                var t = /(?:"(?:""|[^"])*"(?!")|'(?:''|[^'])*'(?!'))/.source
                  , n = /\b(?:\d[\da-f]*x|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b/i
                  , a = {
                    pattern: RegExp(t + "[bx]"),
                    alias: "number"
                }
                  , r = {
                    pattern: /&[a-z_]\w*/i
                }
                  , i = {
                    pattern: /((?:^|\s|=|\())%(?:ABORT|BY|CMS|COPY|DISPLAY|DO|ELSE|END|EVAL|GLOBAL|GO|GOTO|IF|INC|INCLUDE|INDEX|INPUT|KTRIM|LENGTH|LET|LIST|LOCAL|PUT|QKTRIM|QSCAN|QSUBSTR|QSYSFUNC|QUPCASE|RETURN|RUN|SCAN|SUBSTR|SUPERQ|SYMDEL|SYMGLOBL|SYMLOCAL|SYMEXIST|SYSCALL|SYSEVALF|SYSEXEC|SYSFUNC|SYSGET|SYSRPUT|THEN|TO|TSO|UNQUOTE|UNTIL|UPCASE|WHILE|WINDOW)\b/i,
                    lookbehind: !0,
                    alias: "keyword"
                }
                  , o = {
                    pattern: /(^|\s)(?:proc\s+\w+|quit|run|data(?!=))\b/i,
                    alias: "keyword",
                    lookbehind: !0
                }
                  , s = [/\/\*[\s\S]*?\*\//, {
                    pattern: /(^[ \t]*|;\s*)\*[^;]*;/m,
                    lookbehind: !0
                }]
                  , l = {
                    pattern: RegExp(t),
                    greedy: !0
                }
                  , c = /[$%@.(){}\[\];,\\]/
                  , u = {
                    pattern: /%?\b\w+(?=\()/,
                    alias: "keyword"
                }
                  , d = {
                    function: u,
                    "arg-value": {
                        pattern: /(=\s*)[A-Z\.]+/i,
                        lookbehind: !0
                    },
                    operator: /=/,
                    "macro-variable": r,
                    arg: {
                        pattern: /[A-Z]+/i,
                        alias: "keyword"
                    },
                    number: n,
                    "numeric-constant": a,
                    punctuation: c,
                    string: l
                }
                  , p = {
                    pattern: /\b(?:format|put)\b=?[\w'$.]+/im,
                    inside: {
                        keyword: /^(?:format|put)(?==)/i,
                        equals: /=/,
                        format: {
                            pattern: /(?:\w|\$\d)+\.\d?/i,
                            alias: "number"
                        }
                    }
                }
                  , g = {
                    pattern: /\b(?:format|put)\s+[\w']+(?:\s+[$.\w]+)+(?=;)/i,
                    inside: {
                        keyword: /^(?:format|put)/i,
                        format: {
                            pattern: /[\w$]+\.\d?/,
                            alias: "number"
                        }
                    }
                }
                  , m = {
                    pattern: /((?:^|\s)=?)(?:catname|checkpoint execute_always|dm|endsas|filename|footnote|%include|libname|%list|lock|missing|options|page|resetline|%run|sasfile|skip|sysecho|title\d?)\b/i,
                    lookbehind: !0,
                    alias: "keyword"
                }
                  , b = {
                    pattern: /(^|\s)(?:submit(?:\s+(?:load|parseonly|norun))?|endsubmit)\b/i,
                    lookbehind: !0,
                    alias: "keyword"
                }
                  , f = /accessControl|cdm|aggregation|aStore|ruleMining|audio|autotune|bayesianNetClassifier|bioMedImage|boolRule|builtins|cardinality|sccasl|clustering|copula|countreg|dataDiscovery|dataPreprocess|dataSciencePilot|dataStep|decisionTree|deepLearn|deepNeural|varReduce|simSystem|ds2|deduplication|ecm|entityRes|espCluster|explainModel|factmac|fastKnn|fcmpact|fedSql|freqTab|gam|gleam|graphSemiSupLearn|gVarCluster|hiddenMarkovModel|hyperGroup|image|iml|ica|kernalPca|langModel|ldaTopic|sparseML|mlTools|mixed|modelPublishing|mbc|network|optNetwork|neuralNet|nonlinear|nmf|nonParametricBayes|optimization|panel|pls|percentile|pca|phreg|qkb|qlim|quantreg|recommend|tsReconcile|deepRnn|regression|reinforcementLearn|robustPca|sampling|sparkEmbeddedProcess|search(?:Analytics)?|sentimentAnalysis|sequence|configuration|session(?:Prop)?|severity|simple|smartData|sandwich|spatialreg|stabilityMonitoring|spc|loadStreams|svDataDescription|svm|table|conditionalRandomFields|text(?:Rule(?:Develop|Score)|Mining|Parse|Topic|Util|Filters|Frequency)|tsInfo|timeData|transpose|uniTimeSeries/.source
                  , E = {
                    pattern: RegExp(/(^|\s)(?:action\s+)?(?:<act>)\.[a-z]+\b[^;]+/.source.replace(/<act>/g, (function() {
                        return f
                    }
                    )), "i"),
                    lookbehind: !0,
                    inside: {
                        keyword: RegExp(/(?:<act>)\.[a-z]+\b/.source.replace(/<act>/g, (function() {
                            return f
                        }
                        )), "i"),
                        action: {
                            pattern: /(?:action)/i,
                            alias: "keyword"
                        },
                        comment: s,
                        function: u,
                        "arg-value": d["arg-value"],
                        operator: d.operator,
                        argument: d.arg,
                        number: n,
                        "numeric-constant": a,
                        punctuation: c,
                        string: l
                    }
                }
                  , h = {
                    pattern: /((?:^|\s)=?)(?:after|analysis|and|array|barchart|barwidth|begingraph|by|call|cas|cbarline|cfill|class(?:lev)?|close|column|computed?|contains|continue|data(?==)|define|delete|describe|document|do\s+over|do|dol|drop|dul|end(?:source|comp)?|entryTitle|else|eval(?:uate)?|exec(?:ute)?|exit|fill(?:attrs)?|file(?:name)?|flist|fnc|function(?:list)?|goto|global|group(?:by)?|headline|headskip|histogram|if|infile|keep|keylabel|keyword|label|layout|leave|legendlabel|length|libname|loadactionset|merge|midpoints|name|noobs|nowd|_?null_|ods|options|or|otherwise|out(?:put)?|over(?:lay)?|plot|put|print|raise|ranexp|rannor|rbreak|retain|return|select|set|session|sessref|source|statgraph|sum|summarize|table|temp|terminate|then\s+do|then|title\d?|to|var|when|where|xaxisopts|yaxisopts|y2axisopts)\b/i,
                    lookbehind: !0
                };
                e.languages.sas = {
                    datalines: {
                        pattern: /^([ \t]*)(?:(?:data)?lines|cards);[\s\S]+?^[ \t]*;/im,
                        lookbehind: !0,
                        alias: "string",
                        inside: {
                            keyword: {
                                pattern: /^(?:(?:data)?lines|cards)/i
                            },
                            punctuation: /;/
                        }
                    },
                    "proc-sql": {
                        pattern: /(^proc\s+(?:fed)?sql(?:\s+[\w|=]+)?;)[\s\S]+?(?=^(?:proc\s+\w+|quit|run|data);|(?![\s\S]))/im,
                        lookbehind: !0,
                        inside: {
                            sql: {
                                pattern: RegExp(/^[ \t]*(?:select|alter\s+table|(?:create|describe|drop)\s+(?:index|table(?:\s+constraints)?|view)|create\s+unique\s+index|insert\s+into|update)(?:<str>|[^;"'])+;/.source.replace(/<str>/g, (function() {
                                    return t
                                }
                                )), "im"),
                                alias: "language-sql",
                                inside: e.languages.sql
                            },
                            "global-statements": m,
                            "sql-statements": {
                                pattern: /(^|\s)(?:disconnect\s+from|exec(?:ute)?|begin|commit|rollback|reset|validate)\b/i,
                                lookbehind: !0,
                                alias: "keyword"
                            },
                            number: n,
                            "numeric-constant": a,
                            punctuation: c,
                            string: l
                        }
                    },
                    "proc-groovy": {
                        pattern: /(^proc\s+groovy(?:\s+[\w|=]+)?;)[\s\S]+?(?=^(?:proc\s+\w+|quit|run|data);|(?![\s\S]))/im,
                        lookbehind: !0,
                        inside: {
                            comment: s,
                            groovy: {
                                pattern: RegExp(/(^[ \t]*submit(?:\s+(?:load|parseonly|norun))?)(?:<str>|[^"'])+?(?=endsubmit;)/.source.replace(/<str>/g, (function() {
                                    return t
                                }
                                )), "im"),
                                lookbehind: !0,
                                alias: "language-groovy",
                                inside: e.languages.groovy
                            },
                            keyword: h,
                            "submit-statement": b,
                            "global-statements": m,
                            number: n,
                            "numeric-constant": a,
                            punctuation: c,
                            string: l
                        }
                    },
                    "proc-lua": {
                        pattern: /(^proc\s+lua(?:\s+[\w|=]+)?;)[\s\S]+?(?=^(?:proc\s+\w+|quit|run|data);|(?![\s\S]))/im,
                        lookbehind: !0,
                        inside: {
                            comment: s,
                            lua: {
                                pattern: RegExp(/(^[ \t]*submit(?:\s+(?:load|parseonly|norun))?)(?:<str>|[^"'])+?(?=endsubmit;)/.source.replace(/<str>/g, (function() {
                                    return t
                                }
                                )), "im"),
                                lookbehind: !0,
                                alias: "language-lua",
                                inside: e.languages.lua
                            },
                            keyword: h,
                            "submit-statement": b,
                            "global-statements": m,
                            number: n,
                            "numeric-constant": a,
                            punctuation: c,
                            string: l
                        }
                    },
                    "proc-cas": {
                        pattern: /(^proc\s+cas(?:\s+[\w|=]+)?;)[\s\S]+?(?=^(?:proc\s+\w+|quit|data);|(?![\s\S]))/im,
                        lookbehind: !0,
                        inside: {
                            comment: s,
                            "statement-var": {
                                pattern: /((?:^|\s)=?)saveresult\s[^;]+/im,
                                lookbehind: !0,
                                inside: {
                                    statement: {
                                        pattern: /^saveresult\s+\S+/i,
                                        inside: {
                                            keyword: /^(?:saveresult)/i
                                        }
                                    },
                                    rest: d
                                }
                            },
                            "cas-actions": E,
                            statement: {
                                pattern: /((?:^|\s)=?)(?:default|(?:un)?set|on|output|upload)[^;]+/im,
                                lookbehind: !0,
                                inside: d
                            },
                            step: o,
                            keyword: h,
                            function: u,
                            format: p,
                            altformat: g,
                            "global-statements": m,
                            number: n,
                            "numeric-constant": a,
                            punctuation: c,
                            string: l
                        }
                    },
                    "proc-args": {
                        pattern: RegExp(/(^proc\s+\w+\s+)(?!\s)(?:[^;"']|<str>)+;/.source.replace(/<str>/g, (function() {
                            return t
                        }
                        )), "im"),
                        lookbehind: !0,
                        inside: d
                    },
                    "macro-keyword": i,
                    "macro-variable": r,
                    "macro-string-functions": {
                        pattern: /((?:^|\s|=))%(?:NRBQUOTE|NRQUOTE|NRSTR|BQUOTE|QUOTE|STR)\(.*?(?:[^%]\))/i,
                        lookbehind: !0,
                        inside: {
                            function: {
                                pattern: /%(?:NRBQUOTE|NRQUOTE|NRSTR|BQUOTE|QUOTE|STR)/i,
                                alias: "keyword"
                            },
                            "macro-keyword": i,
                            "macro-variable": r,
                            "escaped-char": {
                                pattern: /%['"()<>=\xac^~;,#]/i
                            },
                            punctuation: c
                        }
                    },
                    "macro-declaration": {
                        pattern: /^%macro[^;]+(?=;)/im,
                        inside: {
                            keyword: /%macro/i
                        }
                    },
                    "macro-end": {
                        pattern: /^%mend[^;]+(?=;)/im,
                        inside: {
                            keyword: /%mend/i
                        }
                    },
                    macro: {
                        pattern: /%_\w+(?=\()/,
                        alias: "keyword"
                    },
                    input: {
                        pattern: /\binput\s[-\w\s/*.$&]+;/i,
                        inside: {
                            input: {
                                alias: "keyword",
                                pattern: /^input/i
                            },
                            comment: s,
                            number: n,
                            "numeric-constant": a
                        }
                    },
                    "options-args": {
                        pattern: /(^options)[-'"|/\\<>*+=:()\w\s]*(?=;)/im,
                        lookbehind: !0,
                        inside: d
                    },
                    "cas-actions": E,
                    comment: s,
                    function: u,
                    format: p,
                    altformat: g,
                    "numeric-constant": a,
                    datetime: {
                        pattern: RegExp(t + "(?:dt?|t)"),
                        alias: "number"
                    },
                    string: l,
                    step: o,
                    keyword: h,
                    "operator-keyword": {
                        pattern: /\b(?:eq|ne|gt|lt|ge|le|in|not)\b/i,
                        alias: "operator"
                    },
                    number: n,
                    operator: /\*\*?|\|\|?|!!?|\xa6\xa6?|<[>=]?|>[<=]?|[-+\/=&]|[~\xac^]=?/i,
                    punctuation: c
                }
            }(e)
        }
        e.exports = a,
        a.displayName = "sas",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                e.languages.sass = e.languages.extend("css", {
                    comment: {
                        pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,
                        lookbehind: !0
                    }
                }),
                e.languages.insertBefore("sass", "atrule", {
                    "atrule-line": {
                        pattern: /^(?:[ \t]*)[@+=].+/m,
                        inside: {
                            atrule: /(?:@[\w-]+|[+=])/m
                        }
                    }
                }),
                delete e.languages.sass.atrule;
                var t = /\$[-\w]+|#\{\$[-\w]+\}/
                  , n = [/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/, {
                    pattern: /(\s)-(?=\s)/,
                    lookbehind: !0
                }];
                e.languages.insertBefore("sass", "property", {
                    "variable-line": {
                        pattern: /^[ \t]*\$.+/m,
                        inside: {
                            punctuation: /:/,
                            variable: t,
                            operator: n
                        }
                    },
                    "property-line": {
                        pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,
                        inside: {
                            property: [/[^:\s]+(?=\s*:)/, {
                                pattern: /(:)[^:\s]+/,
                                lookbehind: !0
                            }],
                            punctuation: /:/,
                            variable: t,
                            operator: n,
                            important: e.languages.sass.important
                        }
                    }
                }),
                delete e.languages.sass.property,
                delete e.languages.sass.important,
                e.languages.insertBefore("sass", "punctuation", {
                    selector: {
                        pattern: /([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/,
                        lookbehind: !0
                    }
                })
            }(e)
        }
        e.exports = a,
        a.displayName = "sass",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        var a = n(190);
        function r(e) {
            e.register(a),
            e.languages.scala = e.languages.extend("java", {
                "triple-quoted-string": {
                    pattern: /"""[\s\S]*?"""/,
                    greedy: !0,
                    alias: "string"
                },
                string: {
                    pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
                    greedy: !0
                },
                keyword: /<-|=>|\b(?:abstract|case|catch|class|def|do|else|extends|final|finally|for|forSome|if|implicit|import|lazy|match|new|null|object|override|package|private|protected|return|sealed|self|super|this|throw|trait|try|type|val|var|while|with|yield)\b/,
                number: /\b0x(?:[\da-f]*\.)?[\da-f]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e\d+)?[dfl]?/i,
                builtin: /\b(?:String|Int|Long|Short|Byte|Boolean|Double|Float|Char|Any|AnyRef|AnyVal|Unit|Nothing)\b/,
                symbol: /'[^\d\s\\]\w*/
            }),
            delete e.languages.scala["class-name"],
            delete e.languages.scala.function
        }
        e.exports = r,
        r.displayName = "scala",
        r.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.scss = e.languages.extend("css", {
                comment: {
                    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
                    lookbehind: !0
                },
                atrule: {
                    pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
                    inside: {
                        rule: /@[\w-]+/
                    }
                },
                url: /(?:[-a-z]+-)?url(?=\()/i,
                selector: {
                    pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/m,
                    inside: {
                        parent: {
                            pattern: /&/,
                            alias: "important"
                        },
                        placeholder: /%[-\w]+/,
                        variable: /\$[-\w]+|#\{\$[-\w]+\}/
                    }
                },
                property: {
                    pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
                    inside: {
                        variable: /\$[-\w]+|#\{\$[-\w]+\}/
                    }
                }
            }),
            e.languages.insertBefore("scss", "atrule", {
                keyword: [/@(?:if|else(?: if)?|forward|for|each|while|import|use|extend|debug|warn|mixin|include|function|return|content)\b/i, {
                    pattern: /( )(?:from|through)(?= )/,
                    lookbehind: !0
                }]
            }),
            e.languages.insertBefore("scss", "important", {
                variable: /\$[-\w]+|#\{\$[-\w]+\}/
            }),
            e.languages.insertBefore("scss", "function", {
                "module-modifier": {
                    pattern: /\b(?:as|with|show|hide)\b/i,
                    alias: "keyword"
                },
                placeholder: {
                    pattern: /%[-\w]+/,
                    alias: "selector"
                },
                statement: {
                    pattern: /\B!(?:default|optional)\b/i,
                    alias: "keyword"
                },
                boolean: /\b(?:true|false)\b/,
                null: {
                    pattern: /\bnull\b/,
                    alias: "keyword"
                },
                operator: {
                    pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
                    lookbehind: !0
                }
            }),
            e.languages.scss.atrule.inside.rest = e.languages.scss
        }
        e.exports = a,
        a.displayName = "scss",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        var a = n(242);
        function r(e) {
            e.register(a),
            function(e) {
                var t = [/"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/.source, /'[^']*'/.source, /\$'(?:[^'\\]|\\[\s\S])*'/.source, /<<-?\s*(["']?)(\w+)\1\s[\s\S]*?[\r\n]\2/.source].join("|");
                e.languages["shell-session"] = {
                    command: {
                        pattern: RegExp(/^(?:[^\s@:$#*!/\\]+@[^\r\n@:$#*!/\\]+(?::[^\0-\x1F$#*?"<>:;|]+)?|[^\0-\x1F$#*?"<>@:;|]+)?/.source + /[$#]/.source + /(?:[^\\\r\n'"<$]|\\(?:[^\r]|\r\n?)|\$(?!')|<<str>>)+/.source.replace(/<<str>>/g, (function() {
                            return t
                        }
                        )), "m"),
                        greedy: !0,
                        inside: {
                            info: {
                                pattern: /^[^#$]+/,
                                alias: "punctuation",
                                inside: {
                                    user: /^[^\s@:$#*!/\\]+@[^\r\n@:$#*!/\\]+/,
                                    punctuation: /:/,
                                    path: /[\s\S]+/
                                }
                            },
                            bash: {
                                pattern: /(^[$#]\s*)\S[\s\S]*/,
                                lookbehind: !0,
                                alias: "language-bash",
                                inside: e.languages.bash
                            },
                            "shell-symbol": {
                                pattern: /^[$#]/,
                                alias: "important"
                            }
                        }
                    },
                    output: /.(?:.*(?:[\r\n]|.$))*/
                },
                e.languages["sh-session"] = e.languages.shellsession = e.languages["shell-session"]
            }(e)
        }
        e.exports = r,
        r.displayName = "shellSession",
        r.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.smali = {
                comment: /#.*/,
                string: {
                    pattern: /"(?:[^\r\n\\"]|\\.)*"|'(?:[^\r\n\\']|\\(?:.|u[\da-fA-F]{4}))'/,
                    greedy: !0
                },
                "class-name": {
                    pattern: /(^|[^L])L(?:(?:\w+|`[^`\r\n]*`)\/)*(?:[\w$]+|`[^`\r\n]*`)(?=\s*;)/,
                    lookbehind: !0,
                    inside: {
                        "class-name": {
                            pattern: /(^L|\/)(?:[\w$]+|`[^`\r\n]*`)$/,
                            lookbehind: !0
                        },
                        namespace: {
                            pattern: /^(L)(?:(?:\w+|`[^`\r\n]*`)\/)+/,
                            lookbehind: !0,
                            inside: {
                                punctuation: /\//
                            }
                        },
                        builtin: /^L/
                    }
                },
                builtin: [{
                    pattern: /([();\[])[BCDFIJSVZ]+/,
                    lookbehind: !0
                }, {
                    pattern: /([\w$>]:)[BCDFIJSVZ]/,
                    lookbehind: !0
                }],
                keyword: [{
                    pattern: /(\.end\s+)[\w-]+/,
                    lookbehind: !0
                }, {
                    pattern: /(^|[^\w.-])\.(?!\d)[\w-]+/,
                    lookbehind: !0
                }, {
                    pattern: /(^|[^\w.-])(?:abstract|annotation|bridge|constructor|enum|final|interface|private|protected|public|runtime|static|synthetic|system|transient)(?![\w.-])/,
                    lookbehind: !0
                }],
                function: {
                    pattern: /(^|[^\w.-])(?:\w+|<[\w$-]+>)(?=\()/,
                    lookbehind: !0
                },
                field: {
                    pattern: /[\w$]+(?=:)/,
                    alias: "variable"
                },
                register: {
                    pattern: /(^|[^\w.-])[vp]\d(?![\w.-])/,
                    lookbehind: !0,
                    alias: "variable"
                },
                boolean: {
                    pattern: /(^|[^\w.-])(?:true|false)(?![\w.-])/,
                    lookbehind: !0
                },
                number: {
                    pattern: /(^|[^/\w.-])-?(?:NAN|INFINITY|0x(?:[\dA-F]+(?:\.[\dA-F]*)?|\.[\dA-F]+)(?:p[+-]?[\dA-F]+)?|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?)[dflst]?(?![\w.-])/i,
                    lookbehind: !0
                },
                label: {
                    pattern: /(:)\w+/,
                    lookbehind: !0,
                    alias: "property"
                },
                operator: /->|\.\.|[\[=]/,
                punctuation: /[{}(),;:]/
            }
        }
        e.exports = a,
        a.displayName = "smali",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.smalltalk = {
                comment: /"(?:""|[^"])*"/,
                character: {
                    pattern: /\$./,
                    alias: "string"
                },
                string: /'(?:''|[^'])*'/,
                symbol: /#[\da-z]+|#(?:-|([+\/\\*~<>=@%|&?!])\1?)|#(?=\()/i,
                "block-arguments": {
                    pattern: /(\[\s*):[^\[|]*\|/,
                    lookbehind: !0,
                    inside: {
                        variable: /:[\da-z]+/i,
                        punctuation: /\|/
                    }
                },
                "temporary-variables": {
                    pattern: /\|[^|]+\|/,
                    inside: {
                        variable: /[\da-z]+/i,
                        punctuation: /\|/
                    }
                },
                keyword: /\b(?:nil|true|false|self|super|new)\b/,
                number: [/\d+r-?[\dA-Z]+(?:\.[\dA-Z]+)?(?:e-?\d+)?/, /\b\d+(?:\.\d+)?(?:e-?\d+)?/],
                operator: /[<=]=?|:=|~[~=]|\/\/?|\\\\|>[>=]?|[!^+\-*&|,@]/,
                punctuation: /[.;:?\[\](){}]/
            }
        }
        e.exports = a,
        a.displayName = "smalltalk",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        var a = n(156);
        function r(e) {
            e.register(a),
            function(e) {
                e.languages.smarty = {
                    comment: /\{\*[\s\S]*?\*\}/,
                    delimiter: {
                        pattern: /^\{|\}$/i,
                        alias: "punctuation"
                    },
                    string: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
                    number: /\b0x[\dA-Fa-f]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][-+]?\d+)?/,
                    variable: [/\$(?!\d)\w+/, /#(?!\d)\w+#/, {
                        pattern: /(\.|->)(?!\d)\w+/,
                        lookbehind: !0
                    }, {
                        pattern: /(\[)(?!\d)\w+(?=\])/,
                        lookbehind: !0
                    }],
                    function: [{
                        pattern: /(\|\s*)@?(?!\d)\w+/,
                        lookbehind: !0
                    }, /^\/?(?!\d)\w+/, /(?!\d)\w+(?=\()/],
                    "attr-name": {
                        pattern: /\w+\s*=\s*(?:(?!\d)\w+)?/,
                        inside: {
                            variable: {
                                pattern: /(=\s*)(?!\d)\w+/,
                                lookbehind: !0
                            },
                            operator: /=/
                        }
                    },
                    punctuation: [/[\[\]().,:`]|->/],
                    operator: [/[+\-*\/%]|==?=?|[!<>]=?|&&|\|\|?/, /\bis\s+(?:not\s+)?(?:div|even|odd)(?:\s+by)?\b/, /\b(?:eq|neq?|gt|lt|gt?e|lt?e|not|mod|or|and)\b/],
                    keyword: /\b(?:false|off|on|no|true|yes)\b/
                },
                e.hooks.add("before-tokenize", (function(t) {
                    var n = !1;
                    e.languages["markup-templating"].buildPlaceholders(t, "smarty", /\{\*[\s\S]*?\*\}|\{[\s\S]+?\}/g, (function(e) {
                        return "{/literal}" === e && (n = !1),
                        !n && ("{literal}" === e && (n = !0),
                        !0)
                    }
                    ))
                }
                )),
                e.hooks.add("after-tokenize", (function(t) {
                    e.languages["markup-templating"].tokenizePlaceholders(t, "smarty")
                }
                ))
            }(e)
        }
        e.exports = r,
        r.displayName = "smarty",
        r.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                var t = /\b(?:abstype|and|andalso|as|case|datatype|do|else|end|eqtype|exception|fn|fun|functor|handle|if|in|include|infix|infixr|let|local|nonfix|of|op|open|orelse|raise|rec|sharing|sig|signature|struct|structure|then|type|val|where|while|with|withtype)\b/i;
                e.languages.sml = {
                    comment: /\(\*(?:[^*(]|\*(?!\))|\((?!\*)|\(\*(?:[^*(]|\*(?!\))|\((?!\*))*\*\))*\*\)/,
                    string: {
                        pattern: /#?"(?:[^"\\]|\\.)*"/,
                        greedy: !0
                    },
                    "class-name": [{
                        pattern: RegExp(/((?:^|[^:]):\s*)<TERMINAL>(?:\s*(?:(?:\*|->)\s*<TERMINAL>|,\s*<TERMINAL>(?:(?=<NOT-LAST>)|(?!<NOT-LAST>)\s+<LONG-ID>)))*/.source.replace(/<NOT-LAST>/g, (function() {
                            return /\s*(?:[*,]|->)/.source
                        }
                        )).replace(/<TERMINAL>/g, (function() {
                            return /(?:'[\w']*|<LONG-ID>|\((?:[^()]|\([^()]*\))*\)|\{(?:[^{}]|\{[^{}]*\})*\})(?:\s+<LONG-ID>)*/.source
                        }
                        )).replace(/<LONG-ID>/g, (function() {
                            return /(?!<KEYWORD>)[a-z\d_][\w'.]*/.source
                        }
                        )).replace(/<KEYWORD>/g, (function() {
                            return t.source
                        }
                        )), "i"),
                        lookbehind: !0,
                        greedy: !0,
                        inside: null
                    }, {
                        pattern: /((?:^|[^\w'])(?:datatype|exception|functor|signature|structure|type)\s+)[a-z_][\w'.]*/i,
                        lookbehind: !0
                    }],
                    function: {
                        pattern: /((?:^|[^\w'])fun\s+)[a-z_][\w'.]*/i,
                        lookbehind: !0
                    },
                    keyword: t,
                    variable: {
                        pattern: /(^|[^\w'])'[\w']*/,
                        lookbehind: !0
                    },
                    number: /~?\b(?:\d+(?:\.\d+)?(?:e~?\d+)?|0x[\da-f]+)\b/i,
                    word: {
                        pattern: /\b0w(?:\d+|x[\da-f]+)\b/i,
                        alias: "constant"
                    },
                    boolean: /\b(?:false|true)\b/i,
                    operator: /\.\.\.|:[>=:]|=>?|->|[<>]=?|[!+\-*/^#|@~]/,
                    punctuation: /[(){}\[\].:,;]/
                },
                e.languages.sml["class-name"][0].inside = e.languages.sml,
                e.languages.smlnj = e.languages.sml
            }(e)
        }
        e.exports = a,
        a.displayName = "sml",
        a.aliases = ["smlnj"]
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.solidity = e.languages.extend("clike", {
                "class-name": {
                    pattern: /(\b(?:contract|enum|interface|library|new|struct|using)\s+)(?!\d)[\w$]+/,
                    lookbehind: !0
                },
                keyword: /\b(?:_|anonymous|as|assembly|assert|break|calldata|case|constant|constructor|continue|contract|default|delete|do|else|emit|enum|event|external|for|from|function|if|import|indexed|inherited|interface|internal|is|let|library|mapping|memory|modifier|new|payable|pragma|private|public|pure|require|returns?|revert|selfdestruct|solidity|storage|struct|suicide|switch|this|throw|using|var|view|while)\b/,
                operator: /=>|->|:=|=:|\*\*|\+\+|--|\|\||&&|<<=?|>>=?|[-+*/%^&|<>!=]=?|[~?]/
            }),
            e.languages.insertBefore("solidity", "keyword", {
                builtin: /\b(?:address|bool|string|u?int(?:8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?|byte|bytes(?:[1-9]|[12]\d|3[0-2])?)\b/
            }),
            e.languages.insertBefore("solidity", "number", {
                version: {
                    pattern: /([<>]=?|\^)\d+\.\d+\.\d+\b/,
                    lookbehind: !0,
                    alias: "number"
                }
            }),
            e.languages.sol = e.languages.solidity
        }
        e.exports = a,
        a.displayName = "solidity",
        a.aliases = ["sol"]
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                var t = {
                    pattern: /\{[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}\}/i,
                    alias: "constant",
                    inside: {
                        punctuation: /[{}]/
                    }
                };
                e.languages["solution-file"] = {
                    comment: {
                        pattern: /#.*/,
                        greedy: !0
                    },
                    string: {
                        pattern: /"[^"\r\n]*"|'[^'\r\n]*'/,
                        greedy: !0,
                        inside: {
                            guid: t
                        }
                    },
                    object: {
                        pattern: /^([ \t]*)(?:([A-Z]\w*)\b(?=.*(?:\r\n?|\n)(?:\1[ \t].*(?:\r\n?|\n))*\1End\2(?=[ \t]*$))|End[A-Z]\w*(?=[ \t]*$))/m,
                        lookbehind: !0,
                        greedy: !0,
                        alias: "keyword"
                    },
                    property: {
                        pattern: /^([ \t]*)(?!\s)[^\r\n"#=()]*[^\s"#=()](?=\s*=)/m,
                        lookbehind: !0,
                        inside: {
                            guid: t
                        }
                    },
                    guid: t,
                    number: /\b\d+(?:\.\d+)*\b/,
                    boolean: /\b(?:FALSE|TRUE)\b/,
                    operator: /=/,
                    punctuation: /[(),]/
                },
                e.languages.sln = e.languages["solution-file"]
            }(e)
        }
        e.exports = a,
        a.displayName = "solutionFile",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        var a = n(156);
        function r(e) {
            e.register(a),
            function(e) {
                var t = /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/
                  , n = /\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b|\b0x[\dA-F]+\b/;
                e.languages.soy = {
                    comment: [/\/\*[\s\S]*?\*\//, {
                        pattern: /(\s)\/\/.*/,
                        lookbehind: !0,
                        greedy: !0
                    }],
                    "command-arg": {
                        pattern: /(\{+\/?\s*(?:alias|call|delcall|delpackage|deltemplate|namespace|template)\s+)\.?[\w.]+/,
                        lookbehind: !0,
                        alias: "string",
                        inside: {
                            punctuation: /\./
                        }
                    },
                    parameter: {
                        pattern: /(\{+\/?\s*@?param\??\s+)\.?[\w.]+/,
                        lookbehind: !0,
                        alias: "variable"
                    },
                    keyword: [{
                        pattern: /(\{+\/?[^\S\r\n]*)(?:\\[nrt]|alias|call|case|css|default|delcall|delpackage|deltemplate|else(?:if)?|fallbackmsg|for(?:each)?|if(?:empty)?|lb|let|literal|msg|namespace|nil|@?param\??|rb|sp|switch|template|xid)/,
                        lookbehind: !0
                    }, /\b(?:any|as|attributes|bool|css|float|in|int|js|html|list|map|null|number|string|uri)\b/],
                    delimiter: {
                        pattern: /^\{+\/?|\/?\}+$/,
                        alias: "punctuation"
                    },
                    property: /\w+(?==)/,
                    variable: {
                        pattern: /\$[^\W\d]\w*(?:\??(?:\.\w+|\[[^\]]+\]))*/,
                        inside: {
                            string: {
                                pattern: t,
                                greedy: !0
                            },
                            number: n,
                            punctuation: /[\[\].?]/
                        }
                    },
                    string: {
                        pattern: t,
                        greedy: !0
                    },
                    function: [/\w+(?=\()/, {
                        pattern: /(\|[^\S\r\n]*)\w+/,
                        lookbehind: !0
                    }],
                    boolean: /\b(?:true|false)\b/,
                    number: n,
                    operator: /\?:?|<=?|>=?|==?|!=|[+*/%-]|\b(?:and|not|or)\b/,
                    punctuation: /[{}()\[\]|.,:]/
                },
                e.hooks.add("before-tokenize", (function(t) {
                    var n = !1;
                    e.languages["markup-templating"].buildPlaceholders(t, "soy", /\{\{.+?\}\}|\{.+?\}|\s\/\/.*|\/\*[\s\S]*?\*\//g, (function(e) {
                        return "{/literal}" === e && (n = !1),
                        !n && ("{literal}" === e && (n = !0),
                        !0)
                    }
                    ))
                }
                )),
                e.hooks.add("after-tokenize", (function(t) {
                    e.languages["markup-templating"].tokenizePlaceholders(t, "soy")
                }
                ))
            }(e)
        }
        e.exports = r,
        r.displayName = "soy",
        r.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        var a = n(246);
        function r(e) {
            e.register(a),
            e.languages.sparql = e.languages.extend("turtle", {
                boolean: /\b(?:true|false)\b/i,
                variable: {
                    pattern: /[?$]\w+/,
                    greedy: !0
                }
            }),
            e.languages.insertBefore("sparql", "punctuation", {
                keyword: [/\b(?:A|ADD|ALL|AS|ASC|ASK|BNODE|BY|CLEAR|CONSTRUCT|COPY|CREATE|DATA|DEFAULT|DELETE|DESC|DESCRIBE|DISTINCT|DROP|EXISTS|FILTER|FROM|GROUP|HAVING|INSERT|INTO|LIMIT|LOAD|MINUS|MOVE|NAMED|NOT|NOW|OFFSET|OPTIONAL|ORDER|RAND|REDUCED|SELECT|SEPARATOR|SERVICE|SILENT|STRUUID|UNION|USING|UUID|VALUES|WHERE)\b/i, /\b(?:ABS|AVG|BIND|BOUND|CEIL|COALESCE|CONCAT|CONTAINS|COUNT|DATATYPE|DAY|ENCODE_FOR_URI|FLOOR|GROUP_CONCAT|HOURS|IF|IRI|isBLANK|isIRI|isLITERAL|isNUMERIC|isURI|LANG|LANGMATCHES|LCASE|MAX|MD5|MIN|MINUTES|MONTH|ROUND|REGEX|REPLACE|sameTerm|SAMPLE|SECONDS|SHA1|SHA256|SHA384|SHA512|STR|STRAFTER|STRBEFORE|STRDT|STRENDS|STRLANG|STRLEN|STRSTARTS|SUBSTR|SUM|TIMEZONE|TZ|UCASE|URI|YEAR)\b(?=\s*\()/i, /\b(?:GRAPH|BASE|PREFIX)\b/i]
            }),
            e.languages.rq = e.languages.sparql
        }
        e.exports = r,
        r.displayName = "sparql",
        r.aliases = ["rq"]
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages["splunk-spl"] = {
                comment: /`comment\("(?:\\.|[^\\"])*"\)`/,
                string: {
                    pattern: /"(?:\\.|[^\\"])*"/,
                    greedy: !0
                },
                keyword: /\b(?:abstract|accum|addcoltotals|addinfo|addtotals|analyzefields|anomalies|anomalousvalue|anomalydetection|append|appendcols|appendcsv|appendlookup|appendpipe|arules|associate|audit|autoregress|bin|bucket|bucketdir|chart|cluster|cofilter|collect|concurrency|contingency|convert|correlate|datamodel|dbinspect|dedup|delete|delta|diff|erex|eval|eventcount|eventstats|extract|fieldformat|fields|fieldsummary|filldown|fillnull|findtypes|folderize|foreach|format|from|gauge|gentimes|geom|geomfilter|geostats|head|highlight|history|iconify|input|inputcsv|inputlookup|iplocation|join|kmeans|kv|kvform|loadjob|localize|localop|lookup|makecontinuous|makemv|makeresults|map|mcollect|metadata|metasearch|meventcollect|mstats|multikv|multisearch|mvcombine|mvexpand|nomv|outlier|outputcsv|outputlookup|outputtext|overlap|pivot|predict|rangemap|rare|regex|relevancy|reltime|rename|replace|rest|return|reverse|rex|rtorder|run|savedsearch|script|scrub|search|searchtxn|selfjoin|sendemail|set|setfields|sichart|sirare|sistats|sitimechart|sitop|sort|spath|stats|strcat|streamstats|table|tags|tail|timechart|timewrap|top|transaction|transpose|trendline|tscollect|tstats|typeahead|typelearner|typer|union|uniq|untable|where|x11|xmlkv|xmlunescape|xpath|xyseries)\b/i,
                "operator-word": {
                    pattern: /\b(?:and|as|by|not|or|xor)\b/i,
                    alias: "operator"
                },
                function: /\b\w+(?=\s*\()/,
                property: /\b\w+(?=\s*=(?!=))/,
                date: {
                    pattern: /\b\d{1,2}\/\d{1,2}\/\d{1,4}(?:(?::\d{1,2}){3})?\b/,
                    alias: "number"
                },
                number: /\b\d+(?:\.\d+)?\b/,
                boolean: /\b(?:f|false|t|true)\b/i,
                operator: /[<>=]=?|[-+*/%|]/,
                punctuation: /[()[\],]/
            }
        }
        e.exports = a,
        a.displayName = "splunkSpl",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.sqf = e.languages.extend("clike", {
                string: {
                    pattern: /"(?:(?:"")?[^"])*"(?!")|'(?:[^'])*'/,
                    greedy: !0
                },
                keyword: /\b(?:breakOut|breakTo|call|case|catch|default|do|echo|else|execVM|execFSM|exitWith|for|forEach|forEachMember|forEachMemberAgent|forEachMemberTeam|from|goto|if|nil|preprocessFile|preprocessFileLineNumbers|private|scopeName|spawn|step|switch|then|throw|to|try|while|with)\b/i,
                boolean: /\b(?:true|false)\b/i,
                function: /\b(?:abs|accTime|acos|action|actionIDs|actionKeys|actionKeysImages|actionKeysNames|actionKeysNamesArray|actionName|actionParams|activateAddons|activatedAddons|activateKey|add3DENConnection|add3DENEventHandler|add3DENLayer|addAction|addBackpack|addBackpackCargo|addBackpackCargoGlobal|addBackpackGlobal|addCamShake|addCuratorAddons|addCuratorCameraArea|addCuratorEditableObjects|addCuratorEditingArea|addCuratorPoints|addEditorObject|addEventHandler|addForce|addForceGeneratorRTD|addGoggles|addGroupIcon|addHandgunItem|addHeadgear|addItem|addItemCargo|addItemCargoGlobal|addItemPool|addItemToBackpack|addItemToUniform|addItemToVest|addLiveStats|addMagazine|addMagazineAmmoCargo|addMagazineCargo|addMagazineCargoGlobal|addMagazineGlobal|addMagazinePool|addMagazines|addMagazineTurret|addMenu|addMenuItem|addMissionEventHandler|addMPEventHandler|addMusicEventHandler|addOwnedMine|addPlayerScores|addPrimaryWeaponItem|addPublicVariableEventHandler|addRating|addResources|addScore|addScoreSide|addSecondaryWeaponItem|addSwitchableUnit|addTeamMember|addToRemainsCollector|addTorque|addUniform|addVehicle|addVest|addWaypoint|addWeapon|addWeaponCargo|addWeaponCargoGlobal|addWeaponGlobal|addWeaponItem|addWeaponPool|addWeaponTurret|admin|agent|agents|AGLToASL|aimedAtTarget|aimPos|airDensityCurveRTD|airDensityRTD|airplaneThrottle|airportSide|AISFinishHeal|alive|all3DENEntities|allAirports|allControls|allCurators|allCutLayers|allDead|allDeadMen|allDisplays|allGroups|allMapMarkers|allMines|allMissionObjects|allow3DMode|allowCrewInImmobile|allowCuratorLogicIgnoreAreas|allowDamage|allowDammage|allowFileOperations|allowFleeing|allowGetIn|allowSprint|allPlayers|allSimpleObjects|allSites|allTurrets|allUnits|allUnitsUAV|allVariables|ammo|ammoOnPylon|animate|animateBay|animateDoor|animatePylon|animateSource|animationNames|animationPhase|animationSourcePhase|animationState|append|apply|armoryPoints|arrayIntersect|asin|ASLToAGL|ASLToATL|assert|assignAsCargo|assignAsCargoIndex|assignAsCommander|assignAsDriver|assignAsGunner|assignAsTurret|assignCurator|assignedCargo|assignedCommander|assignedDriver|assignedGunner|assignedItems|assignedTarget|assignedTeam|assignedVehicle|assignedVehicleRole|assignItem|assignTeam|assignToAirport|atan|atan2|atg|ATLToASL|attachedObject|attachedObjects|attachedTo|attachObject|attachTo|attackEnabled|backpack|backpackCargo|backpackContainer|backpackItems|backpackMagazines|backpackSpaceFor|behaviour|benchmark|binocular|blufor|boundingBox|boundingBoxReal|boundingCenter|briefingName|buildingExit|buildingPos|buldozer_EnableRoadDiag|buldozer_IsEnabledRoadDiag|buldozer_LoadNewRoads|buldozer_reloadOperMap|buttonAction|buttonSetAction|cadetMode|callExtension|camCommand|camCommit|camCommitPrepared|camCommitted|camConstuctionSetParams|camCreate|camDestroy|cameraEffect|cameraEffectEnableHUD|cameraInterest|cameraOn|cameraView|campaignConfigFile|camPreload|camPreloaded|camPrepareBank|camPrepareDir|camPrepareDive|camPrepareFocus|camPrepareFov|camPrepareFovRange|camPreparePos|camPrepareRelPos|camPrepareTarget|camSetBank|camSetDir|camSetDive|camSetFocus|camSetFov|camSetFovRange|camSetPos|camSetRelPos|camSetTarget|camTarget|camUseNVG|canAdd|canAddItemToBackpack|canAddItemToUniform|canAddItemToVest|cancelSimpleTaskDestination|canFire|canMove|canSlingLoad|canStand|canSuspend|canTriggerDynamicSimulation|canUnloadInCombat|canVehicleCargo|captive|captiveNum|cbChecked|cbSetChecked|ceil|channelEnabled|cheatsEnabled|checkAIFeature|checkVisibility|civilian|className|clear3DENAttribute|clear3DENInventory|clearAllItemsFromBackpack|clearBackpackCargo|clearBackpackCargoGlobal|clearForcesRTD|clearGroupIcons|clearItemCargo|clearItemCargoGlobal|clearItemPool|clearMagazineCargo|clearMagazineCargoGlobal|clearMagazinePool|clearOverlay|clearRadio|clearVehicleInit|clearWeaponCargo|clearWeaponCargoGlobal|clearWeaponPool|clientOwner|closeDialog|closeDisplay|closeOverlay|collapseObjectTree|collect3DENHistory|collectiveRTD|combatMode|commandArtilleryFire|commandChat|commander|commandFire|commandFollow|commandFSM|commandGetOut|commandingMenu|commandMove|commandRadio|commandStop|commandSuppressiveFire|commandTarget|commandWatch|comment|commitOverlay|compile|compileFinal|completedFSM|composeText|configClasses|configFile|configHierarchy|configName|configNull|configProperties|configSourceAddonList|configSourceMod|configSourceModList|confirmSensorTarget|connectTerminalToUAV|controlNull|controlsGroupCtrl|copyFromClipboard|copyToClipboard|copyWaypoints|cos|count|countEnemy|countFriendly|countSide|countType|countUnknown|create3DENComposition|create3DENEntity|createAgent|createCenter|createDialog|createDiaryLink|createDiaryRecord|createDiarySubject|createDisplay|createGearDialog|createGroup|createGuardedPoint|createLocation|createMarker|createMarkerLocal|createMenu|createMine|createMissionDisplay|createMPCampaignDisplay|createSimpleObject|createSimpleTask|createSite|createSoundSource|createTask|createTeam|createTrigger|createUnit|createVehicle|createVehicleCrew|createVehicleLocal|crew|ctAddHeader|ctAddRow|ctClear|ctCurSel|ctData|ctFindHeaderRows|ctFindRowHeader|ctHeaderControls|ctHeaderCount|ctRemoveHeaders|ctRemoveRows|ctrlActivate|ctrlAddEventHandler|ctrlAngle|ctrlAutoScrollDelay|ctrlAutoScrollRewind|ctrlAutoScrollSpeed|ctrlChecked|ctrlClassName|ctrlCommit|ctrlCommitted|ctrlCreate|ctrlDelete|ctrlEnable|ctrlEnabled|ctrlFade|ctrlHTMLLoaded|ctrlIDC|ctrlIDD|ctrlMapAnimAdd|ctrlMapAnimClear|ctrlMapAnimCommit|ctrlMapAnimDone|ctrlMapCursor|ctrlMapMouseOver|ctrlMapScale|ctrlMapScreenToWorld|ctrlMapWorldToScreen|ctrlModel|ctrlModelDirAndUp|ctrlModelScale|ctrlParent|ctrlParentControlsGroup|ctrlPosition|ctrlRemoveAllEventHandlers|ctrlRemoveEventHandler|ctrlScale|ctrlSetActiveColor|ctrlSetAngle|ctrlSetAutoScrollDelay|ctrlSetAutoScrollRewind|ctrlSetAutoScrollSpeed|ctrlSetBackgroundColor|ctrlSetChecked|ctrlSetDisabledColor|ctrlSetEventHandler|ctrlSetFade|ctrlSetFocus|ctrlSetFont|ctrlSetFontH1|ctrlSetFontH1B|ctrlSetFontH2|ctrlSetFontH2B|ctrlSetFontH3|ctrlSetFontH3B|ctrlSetFontH4|ctrlSetFontH4B|ctrlSetFontH5|ctrlSetFontH5B|ctrlSetFontH6|ctrlSetFontH6B|ctrlSetFontHeight|ctrlSetFontHeightH1|ctrlSetFontHeightH2|ctrlSetFontHeightH3|ctrlSetFontHeightH4|ctrlSetFontHeightH5|ctrlSetFontHeightH6|ctrlSetFontHeightSecondary|ctrlSetFontP|ctrlSetFontPB|ctrlSetFontSecondary|ctrlSetForegroundColor|ctrlSetModel|ctrlSetModelDirAndUp|ctrlSetModelScale|ctrlSetPixelPrecision|ctrlSetPosition|ctrlSetScale|ctrlSetStructuredText|ctrlSetText|ctrlSetTextColor|ctrlSetTextColorSecondary|ctrlSetTextSecondary|ctrlSetTooltip|ctrlSetTooltipColorBox|ctrlSetTooltipColorShade|ctrlSetTooltipColorText|ctrlShow|ctrlShown|ctrlText|ctrlTextHeight|ctrlTextSecondary|ctrlTextWidth|ctrlType|ctrlVisible|ctRowControls|ctRowCount|ctSetCurSel|ctSetData|ctSetHeaderTemplate|ctSetRowTemplate|ctSetValue|ctValue|curatorAddons|curatorCamera|curatorCameraArea|curatorCameraAreaCeiling|curatorCoef|curatorEditableObjects|curatorEditingArea|curatorEditingAreaType|curatorMouseOver|curatorPoints|curatorRegisteredObjects|curatorSelected|curatorWaypointCost|current3DENOperation|currentChannel|currentCommand|currentMagazine|currentMagazineDetail|currentMagazineDetailTurret|currentMagazineTurret|currentMuzzle|currentNamespace|currentTask|currentTasks|currentThrowable|currentVisionMode|currentWaypoint|currentWeapon|currentWeaponMode|currentWeaponTurret|currentZeroing|cursorObject|cursorTarget|customChat|customRadio|cutFadeOut|cutObj|cutRsc|cutText|damage|date|dateToNumber|daytime|deActivateKey|debriefingText|debugFSM|debugLog|deg|delete3DENEntities|deleteAt|deleteCenter|deleteCollection|deleteEditorObject|deleteGroup|deleteGroupWhenEmpty|deleteIdentity|deleteLocation|deleteMarker|deleteMarkerLocal|deleteRange|deleteResources|deleteSite|deleteStatus|deleteTeam|deleteVehicle|deleteVehicleCrew|deleteWaypoint|detach|detectedMines|diag_activeMissionFSMs|diag_activeScripts|diag_activeSQFScripts|diag_activeSQSScripts|diag_captureFrame|diag_captureFrameToFile|diag_captureSlowFrame|diag_codePerformance|diag_drawMode|diag_dynamicSimulationEnd|diag_enable|diag_enabled|diag_fps|diag_fpsMin|diag_frameNo|diag_lightNewLoad|diag_list|diag_log|diag_logSlowFrame|diag_mergeConfigFile|diag_recordTurretLimits|diag_setLightNew|diag_tickTime|diag_toggle|dialog|diarySubjectExists|didJIP|didJIPOwner|difficulty|difficultyEnabled|difficultyEnabledRTD|difficultyOption|direction|directSay|disableAI|disableCollisionWith|disableConversation|disableDebriefingStats|disableMapIndicators|disableNVGEquipment|disableRemoteSensors|disableSerialization|disableTIEquipment|disableUAVConnectability|disableUserInput|displayAddEventHandler|displayCtrl|displayNull|displayParent|displayRemoveAllEventHandlers|displayRemoveEventHandler|displaySetEventHandler|dissolveTeam|distance|distance2D|distanceSqr|distributionRegion|do3DENAction|doArtilleryFire|doFire|doFollow|doFSM|doGetOut|doMove|doorPhase|doStop|doSuppressiveFire|doTarget|doWatch|drawArrow|drawEllipse|drawIcon|drawIcon3D|drawLine|drawLine3D|drawLink|drawLocation|drawPolygon|drawRectangle|drawTriangle|driver|drop|dynamicSimulationDistance|dynamicSimulationDistanceCoef|dynamicSimulationEnabled|dynamicSimulationSystemEnabled|east|edit3DENMissionAttributes|editObject|editorSetEventHandler|effectiveCommander|emptyPositions|enableAI|enableAIFeature|enableAimPrecision|enableAttack|enableAudioFeature|enableAutoStartUpRTD|enableAutoTrimRTD|enableCamShake|enableCaustics|enableChannel|enableCollisionWith|enableCopilot|enableDebriefingStats|enableDiagLegend|enableDynamicSimulation|enableDynamicSimulationSystem|enableEndDialog|enableEngineArtillery|enableEnvironment|enableFatigue|enableGunLights|enableInfoPanelComponent|enableIRLasers|enableMimics|enablePersonTurret|enableRadio|enableReload|enableRopeAttach|enableSatNormalOnDetail|enableSaving|enableSentences|enableSimulation|enableSimulationGlobal|enableStamina|enableStressDamage|enableTeamSwitch|enableTraffic|enableUAVConnectability|enableUAVWaypoints|enableVehicleCargo|enableVehicleSensor|enableWeaponDisassembly|endl|endLoadingScreen|endMission|engineOn|enginesIsOnRTD|enginesPowerRTD|enginesRpmRTD|enginesTorqueRTD|entities|environmentEnabled|estimatedEndServerTime|estimatedTimeLeft|evalObjectArgument|everyBackpack|everyContainer|exec|execEditorScript|exp|expectedDestination|exportJIPMessages|eyeDirection|eyePos|face|faction|fadeMusic|fadeRadio|fadeSound|fadeSpeech|failMission|fillWeaponsFromPool|find|findCover|findDisplay|findEditorObject|findEmptyPosition|findEmptyPositionReady|findIf|findNearestEnemy|finishMissionInit|finite|fire|fireAtTarget|firstBackpack|flag|flagAnimationPhase|flagOwner|flagSide|flagTexture|fleeing|floor|flyInHeight|flyInHeightASL|fog|fogForecast|fogParams|forceAddUniform|forceAtPositionRTD|forcedMap|forceEnd|forceFlagTexture|forceFollowRoad|forceGeneratorRTD|forceMap|forceRespawn|forceSpeed|forceWalk|forceWeaponFire|forceWeatherChange|forgetTarget|format|formation|formationDirection|formationLeader|formationMembers|formationPosition|formationTask|formatText|formLeader|freeLook|fromEditor|fuel|fullCrew|gearIDCAmmoCount|gearSlotAmmoCount|gearSlotData|get3DENActionState|get3DENAttribute|get3DENCamera|get3DENConnections|get3DENEntity|get3DENEntityID|get3DENGrid|get3DENIconsVisible|get3DENLayerEntities|get3DENLinesVisible|get3DENMissionAttribute|get3DENMouseOver|get3DENSelected|getAimingCoef|getAllEnvSoundControllers|getAllHitPointsDamage|getAllOwnedMines|getAllSoundControllers|getAmmoCargo|getAnimAimPrecision|getAnimSpeedCoef|getArray|getArtilleryAmmo|getArtilleryComputerSettings|getArtilleryETA|getAssignedCuratorLogic|getAssignedCuratorUnit|getBackpackCargo|getBleedingRemaining|getBurningValue|getCameraViewDirection|getCargoIndex|getCenterOfMass|getClientState|getClientStateNumber|getCompatiblePylonMagazines|getConnectedUAV|getContainerMaxLoad|getCursorObjectParams|getCustomAimCoef|getDammage|getDescription|getDir|getDirVisual|getDLCAssetsUsage|getDLCAssetsUsageByName|getDLCs|getDLCUsageTime|getEditorCamera|getEditorMode|getEditorObjectScope|getElevationOffset|getEngineTargetRpmRTD|getEnvSoundController|getFatigue|getFieldManualStartPage|getForcedFlagTexture|getFriend|getFSMVariable|getFuelCargo|getGroupIcon|getGroupIconParams|getGroupIcons|getHideFrom|getHit|getHitIndex|getHitPointDamage|getItemCargo|getMagazineCargo|getMarkerColor|getMarkerPos|getMarkerSize|getMarkerType|getMass|getMissionConfig|getMissionConfigValue|getMissionDLCs|getMissionLayerEntities|getMissionLayers|getModelInfo|getMousePosition|getMusicPlayedTime|getNumber|getObjectArgument|getObjectChildren|getObjectDLC|getObjectMaterials|getObjectProxy|getObjectTextures|getObjectType|getObjectViewDistance|getOxygenRemaining|getPersonUsedDLCs|getPilotCameraDirection|getPilotCameraPosition|getPilotCameraRotation|getPilotCameraTarget|getPlateNumber|getPlayerChannel|getPlayerScores|getPlayerUID|getPlayerUIDOld|getPos|getPosASL|getPosASLVisual|getPosASLW|getPosATL|getPosATLVisual|getPosVisual|getPosWorld|getPylonMagazines|getRelDir|getRelPos|getRemoteSensorsDisabled|getRepairCargo|getResolution|getRotorBrakeRTD|getShadowDistance|getShotParents|getSlingLoad|getSoundController|getSoundControllerResult|getSpeed|getStamina|getStatValue|getSuppression|getTerrainGrid|getTerrainHeightASL|getText|getTotalDLCUsageTime|getTrimOffsetRTD|getUnitLoadout|getUnitTrait|getUserMFDText|getUserMFDValue|getVariable|getVehicleCargo|getWeaponCargo|getWeaponSway|getWingsOrientationRTD|getWingsPositionRTD|getWPPos|glanceAt|globalChat|globalRadio|goggles|group|groupChat|groupFromNetId|groupIconSelectable|groupIconsVisible|groupId|groupOwner|groupRadio|groupSelectedUnits|groupSelectUnit|grpNull|gunner|gusts|halt|handgunItems|handgunMagazine|handgunWeapon|handsHit|hasInterface|hasPilotCamera|hasWeapon|hcAllGroups|hcGroupParams|hcLeader|hcRemoveAllGroups|hcRemoveGroup|hcSelected|hcSelectGroup|hcSetGroup|hcShowBar|hcShownBar|headgear|hideBody|hideObject|hideObjectGlobal|hideSelection|hint|hintC|hintCadet|hintSilent|hmd|hostMission|htmlLoad|HUDMovementLevels|humidity|image|importAllGroups|importance|in|inArea|inAreaArray|incapacitatedState|independent|inflame|inflamed|infoPanel|infoPanelComponentEnabled|infoPanelComponents|infoPanels|inGameUISetEventHandler|inheritsFrom|initAmbientLife|inPolygon|inputAction|inRangeOfArtillery|insertEditorObject|intersect|is3DEN|is3DENMultiplayer|isAbleToBreathe|isAgent|isAimPrecisionEnabled|isArray|isAutoHoverOn|isAutonomous|isAutoStartUpEnabledRTD|isAutotest|isAutoTrimOnRTD|isBleeding|isBurning|isClass|isCollisionLightOn|isCopilotEnabled|isDamageAllowed|isDedicated|isDLCAvailable|isEngineOn|isEqualTo|isEqualType|isEqualTypeAll|isEqualTypeAny|isEqualTypeArray|isEqualTypeParams|isFilePatchingEnabled|isFlashlightOn|isFlatEmpty|isForcedWalk|isFormationLeader|isGroupDeletedWhenEmpty|isHidden|isInRemainsCollector|isInstructorFigureEnabled|isIRLaserOn|isKeyActive|isKindOf|isLaserOn|isLightOn|isLocalized|isManualFire|isMarkedForCollection|isMultiplayer|isMultiplayerSolo|isNil|isNull|isNumber|isObjectHidden|isObjectRTD|isOnRoad|isPipEnabled|isPlayer|isRealTime|isRemoteExecuted|isRemoteExecutedJIP|isServer|isShowing3DIcons|isSimpleObject|isSprintAllowed|isStaminaEnabled|isSteamMission|isStreamFriendlyUIEnabled|isStressDamageEnabled|isText|isTouchingGround|isTurnedOut|isTutHintsEnabled|isUAVConnectable|isUAVConnected|isUIContext|isUniformAllowed|isVehicleCargo|isVehicleRadarOn|isVehicleSensorEnabled|isWalking|isWeaponDeployed|isWeaponRested|itemCargo|items|itemsWithMagazines|join|joinAs|joinAsSilent|joinSilent|joinString|kbAddDatabase|kbAddDatabaseTargets|kbAddTopic|kbHasTopic|kbReact|kbRemoveTopic|kbTell|kbWasSaid|keyImage|keyName|knowsAbout|land|landAt|landResult|language|laserTarget|lbAdd|lbClear|lbColor|lbColorRight|lbCurSel|lbData|lbDelete|lbIsSelected|lbPicture|lbPictureRight|lbSelection|lbSetColor|lbSetColorRight|lbSetCurSel|lbSetData|lbSetPicture|lbSetPictureColor|lbSetPictureColorDisabled|lbSetPictureColorSelected|lbSetPictureRight|lbSetPictureRightColor|lbSetPictureRightColorDisabled|lbSetPictureRightColorSelected|lbSetSelectColor|lbSetSelectColorRight|lbSetSelected|lbSetText|lbSetTextRight|lbSetTooltip|lbSetValue|lbSize|lbSort|lbSortByValue|lbText|lbTextRight|lbValue|leader|leaderboardDeInit|leaderboardGetRows|leaderboardInit|leaderboardRequestRowsFriends|leaderboardRequestRowsGlobal|leaderboardRequestRowsGlobalAroundUser|leaderboardsRequestUploadScore|leaderboardsRequestUploadScoreKeepBest|leaderboardState|leaveVehicle|libraryCredits|libraryDisclaimers|lifeState|lightAttachObject|lightDetachObject|lightIsOn|lightnings|limitSpeed|linearConversion|lineBreak|lineIntersects|lineIntersectsObjs|lineIntersectsSurfaces|lineIntersectsWith|linkItem|list|listObjects|listRemoteTargets|listVehicleSensors|ln|lnbAddArray|lnbAddColumn|lnbAddRow|lnbClear|lnbColor|lnbColorRight|lnbCurSelRow|lnbData|lnbDeleteColumn|lnbDeleteRow|lnbGetColumnsPosition|lnbPicture|lnbPictureRight|lnbSetColor|lnbSetColorRight|lnbSetColumnsPos|lnbSetCurSelRow|lnbSetData|lnbSetPicture|lnbSetPictureColor|lnbSetPictureColorRight|lnbSetPictureColorSelected|lnbSetPictureColorSelectedRight|lnbSetPictureRight|lnbSetText|lnbSetTextRight|lnbSetValue|lnbSize|lnbSort|lnbSortByValue|lnbText|lnbTextRight|lnbValue|load|loadAbs|loadBackpack|loadFile|loadGame|loadIdentity|loadMagazine|loadOverlay|loadStatus|loadUniform|loadVest|local|localize|locationNull|locationPosition|lock|lockCameraTo|lockCargo|lockDriver|locked|lockedCargo|lockedDriver|lockedTurret|lockIdentity|lockTurret|lockWP|log|logEntities|logNetwork|logNetworkTerminate|lookAt|lookAtPos|magazineCargo|magazines|magazinesAllTurrets|magazinesAmmo|magazinesAmmoCargo|magazinesAmmoFull|magazinesDetail|magazinesDetailBackpack|magazinesDetailUniform|magazinesDetailVest|magazinesTurret|magazineTurretAmmo|mapAnimAdd|mapAnimClear|mapAnimCommit|mapAnimDone|mapCenterOnCamera|mapGridPosition|markAsFinishedOnSteam|markerAlpha|markerBrush|markerColor|markerDir|markerPos|markerShape|markerSize|markerText|markerType|max|members|menuAction|menuAdd|menuChecked|menuClear|menuCollapse|menuData|menuDelete|menuEnable|menuEnabled|menuExpand|menuHover|menuPicture|menuSetAction|menuSetCheck|menuSetData|menuSetPicture|menuSetValue|menuShortcut|menuShortcutText|menuSize|menuSort|menuText|menuURL|menuValue|min|mineActive|mineDetectedBy|missionConfigFile|missionDifficulty|missionName|missionNamespace|missionStart|missionVersion|modelToWorld|modelToWorldVisual|modelToWorldVisualWorld|modelToWorldWorld|modParams|moonIntensity|moonPhase|morale|move|move3DENCamera|moveInAny|moveInCargo|moveInCommander|moveInDriver|moveInGunner|moveInTurret|moveObjectToEnd|moveOut|moveTime|moveTo|moveToCompleted|moveToFailed|musicVolume|name|nameSound|nearEntities|nearestBuilding|nearestLocation|nearestLocations|nearestLocationWithDubbing|nearestObject|nearestObjects|nearestTerrainObjects|nearObjects|nearObjectsReady|nearRoads|nearSupplies|nearTargets|needReload|netId|netObjNull|newOverlay|nextMenuItemIndex|nextWeatherChange|nMenuItems|numberOfEnginesRTD|numberToDate|objectCurators|objectFromNetId|objectParent|objNull|objStatus|onBriefingGear|onBriefingGroup|onBriefingNotes|onBriefingPlan|onBriefingTeamSwitch|onCommandModeChanged|onDoubleClick|onEachFrame|onGroupIconClick|onGroupIconOverEnter|onGroupIconOverLeave|onHCGroupSelectionChanged|onMapSingleClick|onPlayerConnected|onPlayerDisconnected|onPreloadFinished|onPreloadStarted|onShowNewObject|onTeamSwitch|openCuratorInterface|openDLCPage|openDSInterface|openMap|openSteamApp|openYoutubeVideo|opfor|orderGetIn|overcast|overcastForecast|owner|param|params|parseNumber|parseSimpleArray|parseText|parsingNamespace|particlesQuality|pi|pickWeaponPool|pitch|pixelGrid|pixelGridBase|pixelGridNoUIScale|pixelH|pixelW|playableSlotsNumber|playableUnits|playAction|playActionNow|player|playerRespawnTime|playerSide|playersNumber|playGesture|playMission|playMove|playMoveNow|playMusic|playScriptedMission|playSound|playSound3D|position|positionCameraToWorld|posScreenToWorld|posWorldToScreen|ppEffectAdjust|ppEffectCommit|ppEffectCommitted|ppEffectCreate|ppEffectDestroy|ppEffectEnable|ppEffectEnabled|ppEffectForceInNVG|precision|preloadCamera|preloadObject|preloadSound|preloadTitleObj|preloadTitleRsc|primaryWeapon|primaryWeaponItems|primaryWeaponMagazine|priority|processDiaryLink|processInitCommands|productVersion|profileName|profileNamespace|profileNameSteam|progressLoadingScreen|progressPosition|progressSetPosition|publicVariable|publicVariableClient|publicVariableServer|pushBack|pushBackUnique|putWeaponPool|queryItemsPool|queryMagazinePool|queryWeaponPool|rad|radioChannelAdd|radioChannelCreate|radioChannelRemove|radioChannelSetCallSign|radioChannelSetLabel|radioVolume|rain|rainbow|random|rank|rankId|rating|rectangular|registeredTasks|registerTask|reload|reloadEnabled|remoteControl|remoteExec|remoteExecCall|remoteExecutedOwner|remove3DENConnection|remove3DENEventHandler|remove3DENLayer|removeAction|removeAll3DENEventHandlers|removeAllActions|removeAllAssignedItems|removeAllContainers|removeAllCuratorAddons|removeAllCuratorCameraAreas|removeAllCuratorEditingAreas|removeAllEventHandlers|removeAllHandgunItems|removeAllItems|removeAllItemsWithMagazines|removeAllMissionEventHandlers|removeAllMPEventHandlers|removeAllMusicEventHandlers|removeAllOwnedMines|removeAllPrimaryWeaponItems|removeAllWeapons|removeBackpack|removeBackpackGlobal|removeCuratorAddons|removeCuratorCameraArea|removeCuratorEditableObjects|removeCuratorEditingArea|removeDrawIcon|removeDrawLinks|removeEventHandler|removeFromRemainsCollector|removeGoggles|removeGroupIcon|removeHandgunItem|removeHeadgear|removeItem|removeItemFromBackpack|removeItemFromUniform|removeItemFromVest|removeItems|removeMagazine|removeMagazineGlobal|removeMagazines|removeMagazinesTurret|removeMagazineTurret|removeMenuItem|removeMissionEventHandler|removeMPEventHandler|removeMusicEventHandler|removeOwnedMine|removePrimaryWeaponItem|removeSecondaryWeaponItem|removeSimpleTask|removeSwitchableUnit|removeTeamMember|removeUniform|removeVest|removeWeapon|removeWeaponAttachmentCargo|removeWeaponCargo|removeWeaponGlobal|removeWeaponTurret|reportRemoteTarget|requiredVersion|resetCamShake|resetSubgroupDirection|resistance|resize|resources|respawnVehicle|restartEditorCamera|reveal|revealMine|reverse|reversedMouseY|roadAt|roadsConnectedTo|roleDescription|ropeAttachedObjects|ropeAttachedTo|ropeAttachEnabled|ropeAttachTo|ropeCreate|ropeCut|ropeDestroy|ropeDetach|ropeEndPosition|ropeLength|ropes|ropeUnwind|ropeUnwound|rotorsForcesRTD|rotorsRpmRTD|round|runInitScript|safeZoneH|safeZoneW|safeZoneWAbs|safeZoneX|safeZoneXAbs|safeZoneY|save3DENInventory|saveGame|saveIdentity|saveJoysticks|saveOverlay|saveProfileNamespace|saveStatus|saveVar|savingEnabled|say|say2D|say3D|score|scoreSide|screenshot|screenToWorld|scriptDone|scriptName|scriptNull|scudState|secondaryWeapon|secondaryWeaponItems|secondaryWeaponMagazine|select|selectBestPlaces|selectDiarySubject|selectedEditorObjects|selectEditorObject|selectionNames|selectionPosition|selectLeader|selectMax|selectMin|selectNoPlayer|selectPlayer|selectRandom|selectRandomWeighted|selectWeapon|selectWeaponTurret|sendAUMessage|sendSimpleCommand|sendTask|sendTaskResult|sendUDPMessage|serverCommand|serverCommandAvailable|serverCommandExecutable|serverName|serverTime|set|set3DENAttribute|set3DENAttributes|set3DENGrid|set3DENIconsVisible|set3DENLayer|set3DENLinesVisible|set3DENLogicType|set3DENMissionAttribute|set3DENMissionAttributes|set3DENModelsVisible|set3DENObjectType|set3DENSelected|setAccTime|setActualCollectiveRTD|setAirplaneThrottle|setAirportSide|setAmmo|setAmmoCargo|setAmmoOnPylon|setAnimSpeedCoef|setAperture|setApertureNew|setArmoryPoints|setAttributes|setAutonomous|setBehaviour|setBleedingRemaining|setBrakesRTD|setCameraInterest|setCamShakeDefParams|setCamShakeParams|setCamUseTI|setCaptive|setCenterOfMass|setCollisionLight|setCombatMode|setCompassOscillation|setConvoySeparation|setCuratorCameraAreaCeiling|setCuratorCoef|setCuratorEditingAreaType|setCuratorWaypointCost|setCurrentChannel|setCurrentTask|setCurrentWaypoint|setCustomAimCoef|setCustomWeightRTD|setDamage|setDammage|setDate|setDebriefingText|setDefaultCamera|setDestination|setDetailMapBlendPars|setDir|setDirection|setDrawIcon|setDriveOnPath|setDropInterval|setDynamicSimulationDistance|setDynamicSimulationDistanceCoef|setEditorMode|setEditorObjectScope|setEffectCondition|setEngineRpmRTD|setFace|setFaceAnimation|setFatigue|setFeatureType|setFlagAnimationPhase|setFlagOwner|setFlagSide|setFlagTexture|setFog|setForceGeneratorRTD|setFormation|setFormationTask|setFormDir|setFriend|setFromEditor|setFSMVariable|setFuel|setFuelCargo|setGroupIcon|setGroupIconParams|setGroupIconsSelectable|setGroupIconsVisible|setGroupId|setGroupIdGlobal|setGroupOwner|setGusts|setHideBehind|setHit|setHitIndex|setHitPointDamage|setHorizonParallaxCoef|setHUDMovementLevels|setIdentity|setImportance|setInfoPanel|setLeader|setLightAmbient|setLightAttenuation|setLightBrightness|setLightColor|setLightDayLight|setLightFlareMaxDistance|setLightFlareSize|setLightIntensity|setLightnings|setLightUseFlare|setLocalWindParams|setMagazineTurretAmmo|setMarkerAlpha|setMarkerAlphaLocal|setMarkerBrush|setMarkerBrushLocal|setMarkerColor|setMarkerColorLocal|setMarkerDir|setMarkerDirLocal|setMarkerPos|setMarkerPosLocal|setMarkerShape|setMarkerShapeLocal|setMarkerSize|setMarkerSizeLocal|setMarkerText|setMarkerTextLocal|setMarkerType|setMarkerTypeLocal|setMass|setMimic|setMousePosition|setMusicEffect|setMusicEventHandler|setName|setNameSound|setObjectArguments|setObjectMaterial|setObjectMaterialGlobal|setObjectProxy|setObjectTexture|setObjectTextureGlobal|setObjectViewDistance|setOvercast|setOwner|setOxygenRemaining|setParticleCircle|setParticleClass|setParticleFire|setParticleParams|setParticleRandom|setPilotCameraDirection|setPilotCameraRotation|setPilotCameraTarget|setPilotLight|setPiPEffect|setPitch|setPlateNumber|setPlayable|setPlayerRespawnTime|setPos|setPosASL|setPosASL2|setPosASLW|setPosATL|setPosition|setPosWorld|setPylonLoadOut|setPylonsPriority|setRadioMsg|setRain|setRainbow|setRandomLip|setRank|setRectangular|setRepairCargo|setRotorBrakeRTD|setShadowDistance|setShotParents|setSide|setSimpleTaskAlwaysVisible|setSimpleTaskCustomData|setSimpleTaskDescription|setSimpleTaskDestination|setSimpleTaskTarget|setSimpleTaskType|setSimulWeatherLayers|setSize|setSkill|setSlingLoad|setSoundEffect|setSpeaker|setSpeech|setSpeedMode|setStamina|setStaminaScheme|setStatValue|setSuppression|setSystemOfUnits|setTargetAge|setTaskMarkerOffset|setTaskResult|setTaskState|setTerrainGrid|setText|setTimeMultiplier|setTitleEffect|setToneMapping|setToneMappingParams|setTrafficDensity|setTrafficDistance|setTrafficGap|setTrafficSpeed|setTriggerActivation|setTriggerArea|setTriggerStatements|setTriggerText|setTriggerTimeout|setTriggerType|setType|setUnconscious|setUnitAbility|setUnitLoadout|setUnitPos|setUnitPosWeak|setUnitRank|setUnitRecoilCoefficient|setUnitTrait|setUnloadInCombat|setUserActionText|setUserMFDText|setUserMFDValue|setVariable|setVectorDir|setVectorDirAndUp|setVectorUp|setVehicleAmmo|setVehicleAmmoDef|setVehicleArmor|setVehicleCargo|setVehicleId|setVehicleInit|setVehicleLock|setVehiclePosition|setVehicleRadar|setVehicleReceiveRemoteTargets|setVehicleReportOwnPosition|setVehicleReportRemoteTargets|setVehicleTIPars|setVehicleVarName|setVelocity|setVelocityModelSpace|setVelocityTransformation|setViewDistance|setVisibleIfTreeCollapsed|setWantedRpmRTD|setWaves|setWaypointBehaviour|setWaypointCombatMode|setWaypointCompletionRadius|setWaypointDescription|setWaypointForceBehaviour|setWaypointFormation|setWaypointHousePosition|setWaypointLoiterRadius|setWaypointLoiterType|setWaypointName|setWaypointPosition|setWaypointScript|setWaypointSpeed|setWaypointStatements|setWaypointTimeout|setWaypointType|setWaypointVisible|setWeaponReloadingTime|setWind|setWindDir|setWindForce|setWindStr|setWingForceScaleRTD|setWPPos|show3DIcons|showChat|showCinemaBorder|showCommandingMenu|showCompass|showCuratorCompass|showGPS|showHUD|showLegend|showMap|shownArtilleryComputer|shownChat|shownCompass|shownCuratorCompass|showNewEditorObject|shownGPS|shownHUD|shownMap|shownPad|shownRadio|shownScoretable|shownUAVFeed|shownWarrant|shownWatch|showPad|showRadio|showScoretable|showSubtitles|showUAVFeed|showWarrant|showWatch|showWaypoint|showWaypoints|side|sideAmbientLife|sideChat|sideEmpty|sideEnemy|sideFriendly|sideLogic|sideRadio|sideUnknown|simpleTasks|simulationEnabled|simulCloudDensity|simulCloudOcclusion|simulInClouds|simulWeatherSync|sin|size|sizeOf|skill|skillFinal|skipTime|sleep|sliderPosition|sliderRange|sliderSetPosition|sliderSetRange|sliderSetSpeed|sliderSpeed|slingLoadAssistantShown|soldierMagazines|someAmmo|sort|soundVolume|speaker|speed|speedMode|splitString|sqrt|squadParams|stance|startLoadingScreen|stop|stopEngineRTD|stopped|str|sunOrMoon|supportInfo|suppressFor|surfaceIsWater|surfaceNormal|surfaceType|swimInDepth|switchableUnits|switchAction|switchCamera|switchGesture|switchLight|switchMove|synchronizedObjects|synchronizedTriggers|synchronizedWaypoints|synchronizeObjectsAdd|synchronizeObjectsRemove|synchronizeTrigger|synchronizeWaypoint|systemChat|systemOfUnits|tan|targetKnowledge|targets|targetsAggregate|targetsQuery|taskAlwaysVisible|taskChildren|taskCompleted|taskCustomData|taskDescription|taskDestination|taskHint|taskMarkerOffset|taskNull|taskParent|taskResult|taskState|taskType|teamMember|teamMemberNull|teamName|teams|teamSwitch|teamSwitchEnabled|teamType|terminate|terrainIntersect|terrainIntersectASL|terrainIntersectAtASL|text|textLog|textLogFormat|tg|time|timeMultiplier|titleCut|titleFadeOut|titleObj|titleRsc|titleText|toArray|toFixed|toLower|toString|toUpper|triggerActivated|triggerActivation|triggerArea|triggerAttachedVehicle|triggerAttachObject|triggerAttachVehicle|triggerDynamicSimulation|triggerStatements|triggerText|triggerTimeout|triggerTimeoutCurrent|triggerType|turretLocal|turretOwner|turretUnit|tvAdd|tvClear|tvCollapse|tvCollapseAll|tvCount|tvCurSel|tvData|tvDelete|tvExpand|tvExpandAll|tvPicture|tvPictureRight|tvSetColor|tvSetCurSel|tvSetData|tvSetPicture|tvSetPictureColor|tvSetPictureColorDisabled|tvSetPictureColorSelected|tvSetPictureRight|tvSetPictureRightColor|tvSetPictureRightColorDisabled|tvSetPictureRightColorSelected|tvSetSelectColor|tvSetText|tvSetTooltip|tvSetValue|tvSort|tvSortByValue|tvText|tvTooltip|tvValue|type|typeName|typeOf|UAVControl|uiNamespace|uiSleep|unassignCurator|unassignItem|unassignTeam|unassignVehicle|underwater|uniform|uniformContainer|uniformItems|uniformMagazines|unitAddons|unitAimPosition|unitAimPositionVisual|unitBackpack|unitIsUAV|unitPos|unitReady|unitRecoilCoefficient|units|unitsBelowHeight|unlinkItem|unlockAchievement|unregisterTask|updateDrawIcon|updateMenuItem|updateObjectTree|useAIOperMapObstructionTest|useAISteeringComponent|useAudioTimeForMoves|userInputDisabled|vectorAdd|vectorCos|vectorCrossProduct|vectorDiff|vectorDir|vectorDirVisual|vectorDistance|vectorDistanceSqr|vectorDotProduct|vectorFromTo|vectorMagnitude|vectorMagnitudeSqr|vectorModelToWorld|vectorModelToWorldVisual|vectorMultiply|vectorNormalized|vectorUp|vectorUpVisual|vectorWorldToModel|vectorWorldToModelVisual|vehicle|vehicleCargoEnabled|vehicleChat|vehicleRadio|vehicleReceiveRemoteTargets|vehicleReportOwnPosition|vehicleReportRemoteTargets|vehicles|vehicleVarName|velocity|velocityModelSpace|verifySignature|vest|vestContainer|vestItems|vestMagazines|viewDistance|visibleCompass|visibleGPS|visibleMap|visiblePosition|visiblePositionASL|visibleScoretable|visibleWatch|waitUntil|waves|waypointAttachedObject|waypointAttachedVehicle|waypointAttachObject|waypointAttachVehicle|waypointBehaviour|waypointCombatMode|waypointCompletionRadius|waypointDescription|waypointForceBehaviour|waypointFormation|waypointHousePosition|waypointLoiterRadius|waypointLoiterType|waypointName|waypointPosition|waypoints|waypointScript|waypointsEnabledUAV|waypointShow|waypointSpeed|waypointStatements|waypointTimeout|waypointTimeoutCurrent|waypointType|waypointVisible|weaponAccessories|weaponAccessoriesCargo|weaponCargo|weaponDirection|weaponInertia|weaponLowered|weapons|weaponsItems|weaponsItemsCargo|weaponState|weaponsTurret|weightRTD|west|WFSideText|wind|windDir|windRTD|windStr|wingsForcesRTD|worldName|worldSize|worldToModel|worldToModelVisual|worldToScreen)\b/i,
                number: /(?:\$|\b0x)[\da-f]+\b|(?:\B\.\d+|\b\d+(?:\.\d+)?)(?:e[+-]?\d+)?\b/i,
                operator: /##|>>|&&|\|\||[!=<>]=?|[-+*/%#^]|\b(?:and|mod|not|or)\b/i,
                "magic-variable": {
                    pattern: /\b(?:_exception|_fnc_scriptName|_fnc_scriptNameParent|_forEachIndex|_this|_thisEventHandler|_thisFSM|_thisScript|_x|this|thisList|thisTrigger)\b/i,
                    alias: "keyword"
                },
                constant: /\bDIK(?:_[a-z\d]+)+\b/i
            }),
            e.languages.insertBefore("sqf", "string", {
                macro: {
                    pattern: /(^[ \t]*)#[a-z](?:[^\r\n\\]|\\(?:\r\n|[\s\S]))*/im,
                    lookbehind: !0,
                    greedy: !0,
                    alias: "property",
                    inside: {
                        directive: {
                            pattern: /#[a-z]+\b/i,
                            alias: "keyword"
                        },
                        comment: e.languages.sqf.comment
                    }
                }
            }),
            delete e.languages.sqf["class-name"]
        }
        e.exports = a,
        a.displayName = "sqf",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.squirrel = e.languages.extend("clike", {
                comment: [e.languages.clike.comment[0], {
                    pattern: /(^|[^\\:])(?:\/\/|#).*/,
                    lookbehind: !0,
                    greedy: !0
                }],
                string: [{
                    pattern: /(^|[^\\"'@])(?:@"(?:[^"]|"")*"(?!")|"(?:[^\\\r\n"]|\\.)*")/,
                    lookbehind: !0,
                    greedy: !0
                }, {
                    pattern: /(^|[^\\"'])'(?:[^\\']|\\(?:[xuU][0-9a-fA-F]{0,8}|[\s\S]))'/,
                    lookbehind: !0,
                    greedy: !0
                }],
                "class-name": {
                    pattern: /(\b(?:class|enum|extends|instanceof)\s+)\w+(?:\.\w+)*/,
                    lookbehind: !0,
                    inside: {
                        punctuation: /\./
                    }
                },
                keyword: /\b(?:base|break|case|catch|class|clone|const|constructor|continue|default|delete|else|enum|extends|for|foreach|function|if|in|instanceof|local|null|resume|return|static|switch|this|throw|try|typeof|while|yield|__LINE__|__FILE__)\b/,
                number: /\b(?:0x[0-9a-fA-F]+|\d+(?:\.(?:\d+|[eE][+-]?\d+))?)\b/,
                operator: /\+\+|--|<=>|<[-<]|>>>?|&&?|\|\|?|[-+*/%!=<>]=?|[~^]|::?/,
                punctuation: /[(){}\[\],;.]/
            }),
            e.languages.insertBefore("squirrel", "operator", {
                "attribute-punctuation": {
                    pattern: /<\/|\/>/,
                    alias: "important"
                },
                lambda: {
                    pattern: /@(?=\()/,
                    alias: "operator"
                }
            })
        }
        e.exports = a,
        a.displayName = "squirrel",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.stan = {
                comment: /\/\/.*|\/\*[\s\S]*?\*\/|#(?!include).*/,
                string: {
                    pattern: /"[\x20\x21\x23-\x5B\x5D-\x7E]*"/,
                    greedy: !0
                },
                directive: {
                    pattern: /^([ \t]*)#include\b.*/m,
                    lookbehind: !0,
                    alias: "property"
                },
                "function-arg": {
                    pattern: /(\b(?:algebra_solver|integrate_1d|integrate_ode|integrate_ode_bdf|integrate_ode_rk45|map_rect)\s*\(\s*)[a-zA-Z]\w*/,
                    lookbehind: !0,
                    alias: "function"
                },
                constraint: {
                    pattern: /(\b(?:int|matrix|real|row_vector|vector)\s*)<[^<>]*>/,
                    lookbehind: !0,
                    inside: {
                        expression: {
                            pattern: /(=\s*)\S(?:\S|\s+(?!\s))*?(?=\s*(?:>$|,\s*\w+\s*=))/,
                            lookbehind: !0,
                            inside: null
                        },
                        property: /\b[a-z]\w*(?=\s*=)/i,
                        operator: /=/,
                        punctuation: /^<|>$|,/
                    }
                },
                keyword: [/\b(?:break|cholesky_factor_corr|cholesky_factor_cov|continue|corr_matrix|cov_matrix|data|else|for|functions|generated|if|in|increment_log_prob|int|matrix|model|ordered|parameters|positive_ordered|print|quantities|real|reject|return|row_vector|simplex|target|transformed|unit_vector|vector|void|while)\b/, /\b(?:algebra_solver|integrate_1d|integrate_ode|integrate_ode_bdf|integrate_ode_rk45|map_rect)\b/],
                function: /\b[a-z]\w*(?=\s*\()/i,
                number: /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:E[+-]?\d+)?\b/i,
                boolean: /\b(?:false|true)\b/,
                operator: /<-|\.[*/]=?|\|\|?|&&|[!=<>+\-*/]=?|['^%~?:]/,
                punctuation: /[()\[\]{},;]/
            },
            e.languages.stan.constraint.inside.expression.inside = e.languages.stan
        }
        e.exports = a,
        a.displayName = "stan",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                var t = {
                    pattern: /(\b\d+)(?:%|[a-z]+)/,
                    lookbehind: !0
                }
                  , n = {
                    pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
                    lookbehind: !0
                }
                  , a = {
                    comment: {
                        pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
                        lookbehind: !0
                    },
                    url: {
                        pattern: /\burl\((["']?).*?\1\)/i,
                        greedy: !0
                    },
                    string: {
                        pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
                        greedy: !0
                    },
                    interpolation: null,
                    func: null,
                    important: /\B!(?:important|optional)\b/i,
                    keyword: {
                        pattern: /(^|\s+)(?:(?:if|else|for|return|unless)(?=\s|$)|@[\w-]+)/,
                        lookbehind: !0
                    },
                    hexcode: /#[\da-f]{3,6}/i,
                    color: [/\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i, {
                        pattern: /\b(?:rgb|hsl)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:rgb|hsl)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
                        inside: {
                            unit: t,
                            number: n,
                            function: /[\w-]+(?=\()/,
                            punctuation: /[(),]/
                        }
                    }],
                    entity: /\\[\da-f]{1,8}/i,
                    unit: t,
                    boolean: /\b(?:true|false)\b/,
                    operator: [/~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.{2,3}|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/],
                    number: n,
                    punctuation: /[{}()\[\];:,]/
                };
                a.interpolation = {
                    pattern: /\{[^\r\n}:]+\}/,
                    alias: "variable",
                    inside: {
                        delimiter: {
                            pattern: /^\{|\}$/,
                            alias: "punctuation"
                        },
                        rest: a
                    }
                },
                a.func = {
                    pattern: /[\w-]+\([^)]*\).*/,
                    inside: {
                        function: /^[^(]+/,
                        rest: a
                    }
                },
                e.languages.stylus = {
                    "atrule-declaration": {
                        pattern: /(^[ \t]*)@.+/m,
                        lookbehind: !0,
                        inside: {
                            atrule: /^@[\w-]+/,
                            rest: a
                        }
                    },
                    "variable-declaration": {
                        pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:\{[^{}]*\}|\S.*|$)/m,
                        lookbehind: !0,
                        inside: {
                            variable: /^\S+/,
                            rest: a
                        }
                    },
                    statement: {
                        pattern: /(^[ \t]*)(?:if|else|for|return|unless)[ \t].+/m,
                        lookbehind: !0,
                        inside: {
                            keyword: /^\S+/,
                            rest: a
                        }
                    },
                    "property-declaration": {
                        pattern: /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)(?!\s)[^{\r\n]*(?:;|[^{\r\n,]$(?!(?:\r?\n|\r)(?:\{|\2[ \t])))/m,
                        lookbehind: !0,
                        inside: {
                            property: {
                                pattern: /^[^\s:]+/,
                                inside: {
                                    interpolation: a.interpolation
                                }
                            },
                            rest: a
                        }
                    },
                    selector: {
                        pattern: /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t])))/m,
                        lookbehind: !0,
                        inside: {
                            interpolation: a.interpolation,
                            comment: a.comment,
                            punctuation: /[{},]/
                        }
                    },
                    func: a.func,
                    string: a.string,
                    comment: {
                        pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
                        lookbehind: !0,
                        greedy: !0
                    },
                    interpolation: a.interpolation,
                    punctuation: /[{}()\[\];:.]/
                }
            }(e)
        }
        e.exports = a,
        a.displayName = "stylus",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.swift = e.languages.extend("clike", {
                string: {
                    pattern: /("|')(?:\\(?:\((?:[^()]|\([^)]+\))+\)|\r\n|[^(])|(?!\1)[^\\\r\n])*\1/,
                    greedy: !0,
                    inside: {
                        interpolation: {
                            pattern: /\\\((?:[^()]|\([^)]+\))+\)/,
                            inside: {
                                delimiter: {
                                    pattern: /^\\\(|\)$/,
                                    alias: "variable"
                                }
                            }
                        }
                    }
                },
                keyword: /\b(?:as|associativity|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic(?:Type)?|else|enum|extension|fallthrough|final|for|func|get|guard|if|import|in|infix|init|inout|internal|is|lazy|left|let|mutating|new|none|nonmutating|operator|optional|override|postfix|precedence|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|Self|set|some|static|struct|subscript|super|switch|throws?|try|Type|typealias|unowned|unsafe|var|weak|where|while|willSet|__(?:COLUMN__|FILE__|FUNCTION__|LINE__))\b/,
                number: /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,
                constant: /\b(?:nil|[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,
                atrule: /@\b(?:IB(?:Outlet|Designable|Action|Inspectable)|class_protocol|exported|noreturn|NS(?:Copying|Managed)|objc|UIApplicationMain|auto_closure)\b/,
                builtin: /\b(?:[A-Z]\S+|abs|advance|alignof(?:Value)?|assert|contains|count(?:Elements)?|debugPrint(?:ln)?|distance|drop(?:First|Last)|dump|enumerate|equal|filter|find|first|getVaList|indices|isEmpty|join|last|lexicographicalCompare|map|max(?:Element)?|min(?:Element)?|numericCast|overlaps|partition|print(?:ln)?|reduce|reflect|reverse|sizeof(?:Value)?|sort(?:ed)?|split|startsWith|stride(?:of(?:Value)?)?|suffix|swap|toDebugString|toString|transcode|underestimateCount|unsafeBitCast|with(?:ExtendedLifetime|Unsafe(?:MutablePointers?|Pointers?)|VaList))\b/
            }),
            e.languages.swift.string.inside.interpolation.inside.rest = e.languages.swift
        }
        e.exports = a,
        a.displayName = "swift",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        var a = n(194)
          , r = n(188);
        function i(e) {
            e.register(a),
            e.register(r),
            e.languages.t4 = e.languages["t4-cs"] = e.languages["t4-templating"].createT4("csharp")
        }
        e.exports = i,
        i.displayName = "t4Cs",
        i.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        var a = n(194)
          , r = n(247);
        function i(e) {
            e.register(a),
            e.register(r),
            e.languages["t4-vb"] = e.languages["t4-templating"].createT4("vbnet")
        }
        e.exports = i,
        i.displayName = "t4Vb",
        i.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        var a = n(248);
        function r(e) {
            e.register(a),
            e.languages.tap = {
                fail: /not ok[^#{\n\r]*/,
                pass: /ok[^#{\n\r]*/,
                pragma: /pragma [+-][a-z]+/,
                bailout: /bail out!.*/i,
                version: /TAP version \d+/i,
                plan: /\b\d+\.\.\d+(?: +#.*)?/,
                subtest: {
                    pattern: /# Subtest(?:: .*)?/,
                    greedy: !0
                },
                punctuation: /[{}]/,
                directive: /#.*/,
                yamlish: {
                    pattern: /(^[ \t]*)---[\s\S]*?[\r\n][ \t]*\.\.\.$/m,
                    lookbehind: !0,
                    inside: e.languages.yaml,
                    alias: "language-yaml"
                }
            }
        }
        e.exports = r,
        r.displayName = "tap",
        r.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.tcl = {
                comment: {
                    pattern: /(^|[^\\])#.*/,
                    lookbehind: !0
                },
                string: {
                    pattern: /"(?:[^"\\\r\n]|\\(?:\r\n|[\s\S]))*"/,
                    greedy: !0
                },
                variable: [{
                    pattern: /(\$)(?:::)?(?:[a-zA-Z0-9]+::)*\w+/,
                    lookbehind: !0
                }, {
                    pattern: /(\$)\{[^}]+\}/,
                    lookbehind: !0
                }, {
                    pattern: /(^[\t ]*set[ \t]+)(?:::)?(?:[a-zA-Z0-9]+::)*\w+/m,
                    lookbehind: !0
                }],
                function: {
                    pattern: /(^[\t ]*proc[ \t]+)\S+/m,
                    lookbehind: !0
                },
                builtin: [{
                    pattern: /(^[\t ]*)(?:proc|return|class|error|eval|exit|for|foreach|if|switch|while|break|continue)\b/m,
                    lookbehind: !0
                }, /\b(?:elseif|else)\b/],
                scope: {
                    pattern: /(^[\t ]*)(?:global|upvar|variable)\b/m,
                    lookbehind: !0,
                    alias: "constant"
                },
                keyword: {
                    pattern: /(^[\t ]*|\[)(?:after|append|apply|array|auto_(?:execok|import|load|mkindex|qualify|reset)|automkindex_old|bgerror|binary|catch|cd|chan|clock|close|concat|dde|dict|encoding|eof|exec|expr|fblocked|fconfigure|fcopy|file(?:event|name)?|flush|gets|glob|history|http|incr|info|interp|join|lappend|lassign|lindex|linsert|list|llength|load|lrange|lrepeat|lreplace|lreverse|lsearch|lset|lsort|math(?:func|op)|memory|msgcat|namespace|open|package|parray|pid|pkg_mkIndex|platform|puts|pwd|re_syntax|read|refchan|regexp|registry|regsub|rename|Safe_Base|scan|seek|set|socket|source|split|string|subst|Tcl|tcl(?:_endOfWord|_findLibrary|startOf(?:Next|Previous)Word|wordBreak(?:After|Before)|test|vars)|tell|time|tm|trace|unknown|unload|unset|update|uplevel|vwait)\b/m,
                    lookbehind: !0
                },
                operator: /!=?|\*\*?|==|&&?|\|\|?|<[=<]?|>[=>]?|[-+~\/%?^]|\b(?:eq|ne|in|ni)\b/,
                punctuation: /[{}()\[\]]/
            }
        }
        e.exports = a,
        a.displayName = "tcl",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                var t = /\([^|()\n]+\)|\[[^\]\n]+\]|\{[^}\n]+\}/.source
                  , n = /\)|\((?![^|()\n]+\))/.source;
                function a(e, a) {
                    return RegExp(e.replace(/<MOD>/g, (function() {
                        return "(?:" + t + ")"
                    }
                    )).replace(/<PAR>/g, (function() {
                        return "(?:" + n + ")"
                    }
                    )), a || "")
                }
                var r = {
                    css: {
                        pattern: /\{[^{}]+\}/,
                        inside: {
                            rest: e.languages.css
                        }
                    },
                    "class-id": {
                        pattern: /(\()[^()]+(?=\))/,
                        lookbehind: !0,
                        alias: "attr-value"
                    },
                    lang: {
                        pattern: /(\[)[^\[\]]+(?=\])/,
                        lookbehind: !0,
                        alias: "attr-value"
                    },
                    punctuation: /[\\\/]\d+|\S/
                }
                  , i = e.languages.textile = e.languages.extend("markup", {
                    phrase: {
                        pattern: /(^|\r|\n)\S[\s\S]*?(?=$|\r?\n\r?\n|\r\r)/,
                        lookbehind: !0,
                        inside: {
                            "block-tag": {
                                pattern: a(/^[a-z]\w*(?:<MOD>|<PAR>|[<>=])*\./.source),
                                inside: {
                                    modifier: {
                                        pattern: a(/(^[a-z]\w*)(?:<MOD>|<PAR>|[<>=])+(?=\.)/.source),
                                        lookbehind: !0,
                                        inside: r
                                    },
                                    tag: /^[a-z]\w*/,
                                    punctuation: /\.$/
                                }
                            },
                            list: {
                                pattern: a(/^[*#]+<MOD>*\s+\S.*/.source, "m"),
                                inside: {
                                    modifier: {
                                        pattern: a(/(^[*#]+)<MOD>+/.source),
                                        lookbehind: !0,
                                        inside: r
                                    },
                                    punctuation: /^[*#]+/
                                }
                            },
                            table: {
                                pattern: a(/^(?:(?:<MOD>|<PAR>|[<>=^~])+\.\s*)?(?:\|(?:(?:<MOD>|<PAR>|[<>=^~_]|[\\/]\d+)+\.|(?!(?:<MOD>|<PAR>|[<>=^~_]|[\\/]\d+)+\.))[^|]*)+\|/.source, "m"),
                                inside: {
                                    modifier: {
                                        pattern: a(/(^|\|(?:\r?\n|\r)?)(?:<MOD>|<PAR>|[<>=^~_]|[\\/]\d+)+(?=\.)/.source),
                                        lookbehind: !0,
                                        inside: r
                                    },
                                    punctuation: /\||^\./
                                }
                            },
                            inline: {
                                pattern: a(/(^|[^a-zA-Z\d])(\*\*|__|\?\?|[*_%@+\-^~])<MOD>*.+?\2(?![a-zA-Z\d])/.source),
                                lookbehind: !0,
                                inside: {
                                    bold: {
                                        pattern: a(/(^(\*\*?)<MOD>*).+?(?=\2)/.source),
                                        lookbehind: !0
                                    },
                                    italic: {
                                        pattern: a(/(^(__?)<MOD>*).+?(?=\2)/.source),
                                        lookbehind: !0
                                    },
                                    cite: {
                                        pattern: a(/(^\?\?<MOD>*).+?(?=\?\?)/.source),
                                        lookbehind: !0,
                                        alias: "string"
                                    },
                                    code: {
                                        pattern: a(/(^@<MOD>*).+?(?=@)/.source),
                                        lookbehind: !0,
                                        alias: "keyword"
                                    },
                                    inserted: {
                                        pattern: a(/(^\+<MOD>*).+?(?=\+)/.source),
                                        lookbehind: !0
                                    },
                                    deleted: {
                                        pattern: a(/(^-<MOD>*).+?(?=-)/.source),
                                        lookbehind: !0
                                    },
                                    span: {
                                        pattern: a(/(^%<MOD>*).+?(?=%)/.source),
                                        lookbehind: !0
                                    },
                                    modifier: {
                                        pattern: a(/(^\*\*|__|\?\?|[*_%@+\-^~])<MOD>+/.source),
                                        lookbehind: !0,
                                        inside: r
                                    },
                                    punctuation: /[*_%?@+\-^~]+/
                                }
                            },
                            "link-ref": {
                                pattern: /^\[[^\]]+\]\S+$/m,
                                inside: {
                                    string: {
                                        pattern: /(^\[)[^\]]+(?=\])/,
                                        lookbehind: !0
                                    },
                                    url: {
                                        pattern: /(^\])\S+$/,
                                        lookbehind: !0
                                    },
                                    punctuation: /[\[\]]/
                                }
                            },
                            link: {
                                pattern: a(/"<MOD>*[^"]+":.+?(?=[^\w/]?(?:\s|$))/.source),
                                inside: {
                                    text: {
                                        pattern: a(/(^"<MOD>*)[^"]+(?=")/.source),
                                        lookbehind: !0
                                    },
                                    modifier: {
                                        pattern: a(/(^")<MOD>+/.source),
                                        lookbehind: !0,
                                        inside: r
                                    },
                                    url: {
                                        pattern: /(:).+/,
                                        lookbehind: !0
                                    },
                                    punctuation: /[":]/
                                }
                            },
                            image: {
                                pattern: a(/!(?:<MOD>|<PAR>|[<>=])*(?![<>=])[^!\s()]+(?:\([^)]+\))?!(?::.+?(?=[^\w/]?(?:\s|$)))?/.source),
                                inside: {
                                    source: {
                                        pattern: a(/(^!(?:<MOD>|<PAR>|[<>=])*)(?![<>=])[^!\s()]+(?:\([^)]+\))?(?=!)/.source),
                                        lookbehind: !0,
                                        alias: "url"
                                    },
                                    modifier: {
                                        pattern: a(/(^!)(?:<MOD>|<PAR>|[<>=])+/.source),
                                        lookbehind: !0,
                                        inside: r
                                    },
                                    url: {
                                        pattern: /(:).+/,
                                        lookbehind: !0
                                    },
                                    punctuation: /[!:]/
                                }
                            },
                            footnote: {
                                pattern: /\b\[\d+\]/,
                                alias: "comment",
                                inside: {
                                    punctuation: /\[|\]/
                                }
                            },
                            acronym: {
                                pattern: /\b[A-Z\d]+\([^)]+\)/,
                                inside: {
                                    comment: {
                                        pattern: /(\()[^()]+(?=\))/,
                                        lookbehind: !0
                                    },
                                    punctuation: /[()]/
                                }
                            },
                            mark: {
                                pattern: /\b\((?:TM|R|C)\)/,
                                alias: "comment",
                                inside: {
                                    punctuation: /[()]/
                                }
                            }
                        }
                    }
                })
                  , o = i.phrase.inside
                  , s = {
                    inline: o.inline,
                    link: o.link,
                    image: o.image,
                    footnote: o.footnote,
                    acronym: o.acronym,
                    mark: o.mark
                };
                i.tag.pattern = /<\/?(?!\d)[a-z0-9]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i;
                var l = o.inline.inside;
                l.bold.inside = s,
                l.italic.inside = s,
                l.inserted.inside = s,
                l.deleted.inside = s,
                l.span.inside = s;
                var c = o.table.inside;
                c.inline = s.inline,
                c.link = s.link,
                c.image = s.image,
                c.footnote = s.footnote,
                c.acronym = s.acronym,
                c.mark = s.mark
            }(e)
        }
        e.exports = a,
        a.displayName = "textile",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                var t = /(?:[\w-]+|'[^'\n\r]*'|"(?:\\.|[^\\"\r\n])*")/.source;
                function n(e) {
                    return e.replace(/__/g, (function() {
                        return t
                    }
                    ))
                }
                e.languages.toml = {
                    comment: {
                        pattern: /#.*/,
                        greedy: !0
                    },
                    table: {
                        pattern: RegExp(n(/(^[\t ]*\[\s*(?:\[\s*)?)__(?:\s*\.\s*__)*(?=\s*\])/.source), "m"),
                        lookbehind: !0,
                        greedy: !0,
                        alias: "class-name"
                    },
                    key: {
                        pattern: RegExp(n(/(^[\t ]*|[{,]\s*)__(?:\s*\.\s*__)*(?=\s*=)/.source), "m"),
                        lookbehind: !0,
                        greedy: !0,
                        alias: "property"
                    },
                    string: {
                        pattern: /"""(?:\\[\s\S]|[^\\])*?"""|'''[\s\S]*?'''|'[^'\n\r]*'|"(?:\\.|[^\\"\r\n])*"/,
                        greedy: !0
                    },
                    date: [{
                        pattern: /\b\d{4}-\d{2}-\d{2}(?:[T\s]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})?)?\b/i,
                        alias: "number"
                    }, {
                        pattern: /\b\d{2}:\d{2}:\d{2}(?:\.\d+)?\b/,
                        alias: "number"
                    }],
                    number: /(?:\b0(?:x[\da-zA-Z]+(?:_[\da-zA-Z]+)*|o[0-7]+(?:_[0-7]+)*|b[10]+(?:_[10]+)*))\b|[-+]?\b\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?\b|[-+]?\b(?:inf|nan)\b/,
                    boolean: /\b(?:true|false)\b/,
                    punctuation: /[.,=[\]{}]/
                }
            }(e)
        }
        e.exports = a,
        a.displayName = "toml",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        var a = n(245)
          , r = n(191);
        function i(e) {
            e.register(a),
            e.register(r),
            function(e) {
                var t = e.util.clone(e.languages.typescript);
                e.languages.tsx = e.languages.extend("jsx", t);
                var n = e.languages.tsx.tag;
                n.pattern = RegExp(/(^|[^\w$]|(?=<\/))/.source + "(?:" + n.pattern.source + ")", n.pattern.flags),
                n.lookbehind = !0
            }(e)
        }
        e.exports = i,
        i.displayName = "tsx",
        i.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        var a = n(156);
        function r(e) {
            e.register(a),
            function(e) {
                e.languages.tt2 = e.languages.extend("clike", {
                    comment: /#.*|\[%#[\s\S]*?%\]/,
                    keyword: /\b(?:BLOCK|CALL|CASE|CATCH|CLEAR|DEBUG|DEFAULT|ELSE|ELSIF|END|FILTER|FINAL|FOREACH|GET|IF|IN|INCLUDE|INSERT|LAST|MACRO|META|NEXT|PERL|PROCESS|RAWPERL|RETURN|SET|STOP|TAGS|THROW|TRY|SWITCH|UNLESS|USE|WHILE|WRAPPER)\b/,
                    punctuation: /[[\]{},()]/
                }),
                e.languages.insertBefore("tt2", "number", {
                    operator: /=[>=]?|!=?|<=?|>=?|&&|\|\|?|\b(?:and|or|not)\b/,
                    variable: {
                        pattern: /\b[a-z]\w*(?:\s*\.\s*(?:\d+|\$?[a-z]\w*))*\b/i
                    }
                }),
                e.languages.insertBefore("tt2", "keyword", {
                    delimiter: {
                        pattern: /^(?:\[%|%%)-?|-?%\]$/,
                        alias: "punctuation"
                    }
                }),
                e.languages.insertBefore("tt2", "string", {
                    "single-quoted-string": {
                        pattern: /'[^\\']*(?:\\[\s\S][^\\']*)*'/,
                        greedy: !0,
                        alias: "string"
                    },
                    "double-quoted-string": {
                        pattern: /"[^\\"]*(?:\\[\s\S][^\\"]*)*"/,
                        greedy: !0,
                        alias: "string",
                        inside: {
                            variable: {
                                pattern: /\$(?:[a-z]\w*(?:\.(?:\d+|\$?[a-z]\w*))*)/i
                            }
                        }
                    }
                }),
                delete e.languages.tt2.string,
                e.hooks.add("before-tokenize", (function(t) {
                    e.languages["markup-templating"].buildPlaceholders(t, "tt2", /\[%[\s\S]+?%\]/g)
                }
                )),
                e.hooks.add("after-tokenize", (function(t) {
                    e.languages["markup-templating"].tokenizePlaceholders(t, "tt2")
                }
                ))
            }(e)
        }
        e.exports = r,
        r.displayName = "tt2",
        r.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.twig = {
                comment: /\{#[\s\S]*?#\}/,
                tag: {
                    pattern: /\{\{[\s\S]*?\}\}|\{%[\s\S]*?%\}/,
                    inside: {
                        ld: {
                            pattern: /^(?:\{\{-?|\{%-?\s*\w+)/,
                            inside: {
                                punctuation: /^(?:\{\{|\{%)-?/,
                                keyword: /\w+/
                            }
                        },
                        rd: {
                            pattern: /-?(?:%\}|\}\})$/,
                            inside: {
                                punctuation: /.+/
                            }
                        },
                        string: {
                            pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
                            inside: {
                                punctuation: /^['"]|['"]$/
                            }
                        },
                        keyword: /\b(?:even|if|odd)\b/,
                        boolean: /\b(?:true|false|null)\b/,
                        number: /\b0x[\dA-Fa-f]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][-+]?\d+)?/,
                        operator: [{
                            pattern: /(\s)(?:and|b-and|b-xor|b-or|ends with|in|is|matches|not|or|same as|starts with)(?=\s)/,
                            lookbehind: !0
                        }, /[=<>]=?|!=|\*\*?|\/\/?|\?:?|[-+~%|]/],
                        property: /\b[a-zA-Z_]\w*\b/,
                        punctuation: /[()\[\]{}:.,]/
                    }
                },
                other: {
                    pattern: /\S(?:[\s\S]*\S)?/,
                    inside: e.languages.markup
                }
            }
        }
        e.exports = a,
        a.displayName = "twig",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                var t = /\b(?:ACT|ACTIFSUB|CARRAY|CASE|CLEARGIF|COA|COA_INT|CONSTANTS|CONTENT|CUR|EDITPANEL|EFFECT|EXT|FILE|FLUIDTEMPLATE|FORM|FRAME|FRAMESET|GIFBUILDER|GMENU|GMENU_FOLDOUT|GMENU_LAYERS|GP|HMENU|HRULER|HTML|IENV|IFSUB|IMAGE|IMGMENU|IMGMENUITEM|IMGTEXT|IMG_RESOURCE|INCLUDE_TYPOSCRIPT|JSMENU|JSMENUITEM|LLL|LOAD_REGISTER|NO|PAGE|RECORDS|RESTORE_REGISTER|TEMPLATE|TEXT|TMENU|TMENUITEM|TMENU_LAYERS|USER|USER_INT|_GIFBUILDER|global|globalString|globalVar)\b/;
                e.languages.typoscript = {
                    comment: [{
                        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
                        lookbehind: !0
                    }, {
                        pattern: /(^|[^\\:= \t]|(?:^|[^= \t])[ \t]+)\/\/.*/,
                        lookbehind: !0,
                        greedy: !0
                    }, {
                        pattern: /(^|[^"'])#.*/,
                        lookbehind: !0,
                        greedy: !0
                    }],
                    function: [{
                        pattern: /<INCLUDE_TYPOSCRIPT:\s*source\s*=\s*(?:"[^"\r\n]*"|'[^'\r\n]*')\s*>/,
                        inside: {
                            string: {
                                pattern: /"[^"\r\n]*"|'[^'\r\n]*'/,
                                inside: {
                                    keyword: t
                                }
                            },
                            keyword: {
                                pattern: /INCLUDE_TYPOSCRIPT/
                            }
                        }
                    }, {
                        pattern: /@import\s*(?:"[^"\r\n]*"|'[^'\r\n]*')/,
                        inside: {
                            string: /"[^"\r\n]*"|'[^'\r\n]*'/
                        }
                    }],
                    string: {
                        pattern: /^([^=]*=[< ]?)(?:(?!\]\n).)*/,
                        lookbehind: !0,
                        inside: {
                            function: /\{\$.*\}/,
                            keyword: t,
                            number: /^[0-9]+$/,
                            punctuation: /[,|:]/
                        }
                    },
                    keyword: t,
                    number: {
                        pattern: /\b[0-9]+\s*[.{=]/,
                        inside: {
                            operator: /[.{=]/
                        }
                    },
                    tag: {
                        pattern: /\.?[-\w\\]+\.?/,
                        inside: {
                            punctuation: /\./
                        }
                    },
                    punctuation: /[{}[\];(),.:|]/,
                    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/
                },
                e.languages.tsconfig = e.languages.typoscript
            }(e)
        }
        e.exports = a,
        a.displayName = "typoscript",
        a.aliases = ["tsconfig"]
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.unrealscript = {
                comment: /\/\/.*|\/\*[\s\S]*?\*\//,
                string: {
                    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
                    greedy: !0
                },
                category: {
                    pattern: /(\b(?:(?:autoexpand|hide|show)categories|var)\s*\()[^()]+(?=\))/,
                    lookbehind: !0,
                    greedy: !0,
                    alias: "property"
                },
                metadata: {
                    pattern: /(\w\s*)<\s*\w+\s*=[^<>|=\r\n]+(?:\|\s*\w+\s*=[^<>|=\r\n]+)*>/,
                    lookbehind: !0,
                    greedy: !0,
                    inside: {
                        property: /\b\w+(?=\s*=)/,
                        operator: /=/,
                        punctuation: /[<>|]/
                    }
                },
                macro: {
                    pattern: /`\w+/,
                    alias: "property"
                },
                "class-name": {
                    pattern: /(\b(?:class|enum|extends|interface|state(?:\(\))?|struct|within)\s+)\w+/,
                    lookbehind: !0
                },
                keyword: /\b(?:abstract|actor|array|auto|autoexpandcategories|bool|break|byte|case|class|classgroup|client|coerce|collapsecategories|config|const|continue|default|defaultproperties|delegate|dependson|deprecated|do|dontcollapsecategories|editconst|editinlinenew|else|enum|event|exec|export|extends|final|float|for|forcescriptorder|foreach|function|goto|guid|hidecategories|hidedropdown|if|ignores|implements|inherits|input|int|interface|iterator|latent|local|material|name|native|nativereplication|noexport|nontransient|noteditinlinenew|notplaceable|operator|optional|out|pawn|perobjectconfig|perobjectlocalized|placeable|postoperator|preoperator|private|protected|reliable|replication|return|server|showcategories|simulated|singular|state|static|string|struct|structdefault|structdefaultproperties|switch|texture|transient|travel|unreliable|until|var|vector|while|within)\b/,
                function: /\b[a-z_]\w*(?=\s*\()/i,
                boolean: /\b(?:false|true)\b/,
                number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
                operator: />>|<<|--|\+\+|\*\*|[-+*/~!=<>$@]=?|&&?|\|\|?|\^\^?|[?:%]|\b(?:Cross|Dot|ClockwiseFrom)\b/,
                punctuation: /[()[\]{};,.]/
            },
            e.languages.uc = e.languages.uscript = e.languages.unrealscript
        }
        e.exports = a,
        a.displayName = "unrealscript",
        a.aliases = ["uc", "uscript"]
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.uri = {
                scheme: {
                    pattern: /^[a-z][a-z0-9+.-]*:/im,
                    greedy: !0,
                    inside: {
                        "scheme-delimiter": /:$/
                    }
                },
                fragment: {
                    pattern: /#[\w\-.~!$&'()*+,;=%:@/?]*/,
                    inside: {
                        "fragment-delimiter": /^#/
                    }
                },
                query: {
                    pattern: /\?[\w\-.~!$&'()*+,;=%:@/?]*/,
                    inside: {
                        "query-delimiter": {
                            pattern: /^\?/,
                            greedy: !0
                        },
                        "pair-delimiter": /[&;]/,
                        pair: {
                            pattern: /^[^=][\s\S]*/,
                            inside: {
                                key: /^[^=]+/,
                                value: {
                                    pattern: /(^=)[\s\S]+/,
                                    lookbehind: !0
                                }
                            }
                        }
                    }
                },
                authority: {
                    pattern: RegExp(/^\/\//.source + /(?:[\w\-.~!$&'()*+,;=%:]*@)?/.source + "(?:" + /\[(?:[0-9a-fA-F:.]{2,48}|v[0-9a-fA-F]+\.[\w\-.~!$&'()*+,;=]+)\]/.source + "|" + /[\w\-.~!$&'()*+,;=%]*/.source + ")" + /(?::\d*)?/.source, "m"),
                    inside: {
                        "authority-delimiter": /^\/\//,
                        "user-info-segment": {
                            pattern: /^[\w\-.~!$&'()*+,;=%:]*@/,
                            inside: {
                                "user-info-delimiter": /@$/,
                                "user-info": /^[\w\-.~!$&'()*+,;=%:]+/
                            }
                        },
                        "port-segment": {
                            pattern: /:\d*$/,
                            inside: {
                                "port-delimiter": /^:/,
                                port: /^\d+/
                            }
                        },
                        host: {
                            pattern: /[\s\S]+/,
                            inside: {
                                "ip-literal": {
                                    pattern: /^\[[\s\S]+\]$/,
                                    inside: {
                                        "ip-literal-delimiter": /^\[|\]$/,
                                        "ipv-future": /^v[\s\S]+/,
                                        "ipv6-address": /^[\s\S]+/
                                    }
                                },
                                "ipv4-address": /^(?:(?:[03-9]\d?|[12]\d{0,2})\.){3}(?:[03-9]\d?|[12]{0,2})$/
                            }
                        }
                    }
                },
                path: {
                    pattern: /^[\w\-.~!$&'()*+,;=%:@/]+/m,
                    inside: {
                        "path-separator": /\//
                    }
                }
            },
            e.languages.url = e.languages.uri
        }
        e.exports = a,
        a.displayName = "uri",
        a.aliases = ["url"]
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                var t = {
                    pattern: /[\s\S]+/,
                    inside: null
                };
                e.languages.v = e.languages.extend("clike", {
                    string: [{
                        pattern: /`(?:\\`|\\?[^`]{1,2})`/,
                        alias: "rune"
                    }, {
                        pattern: /r?(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
                        alias: "quoted-string",
                        greedy: !0,
                        inside: {
                            interpolation: {
                                pattern: /((?:^|[^\\])(?:\\{2})*)\$(?:\{[^{}]*\}|\w+(?:\.\w+(?:\([^\(\)]*\))?|\[[^\[\]]+\])*)/,
                                lookbehind: !0,
                                inside: {
                                    "interpolation-variable": {
                                        pattern: /^\$\w[\s\S]*$/,
                                        alias: "variable"
                                    },
                                    "interpolation-punctuation": {
                                        pattern: /^\$\{|\}$/,
                                        alias: "punctuation"
                                    },
                                    "interpolation-expression": t
                                }
                            }
                        }
                    }],
                    "class-name": {
                        pattern: /(\b(?:enum|interface|struct|type)\s+)(?:C\.)?\w+/,
                        lookbehind: !0
                    },
                    keyword: /(?:\b(?:as|asm|assert|atomic|break|chan|const|continue|defer|else|embed|enum|fn|for|__global|go(?:to)?|if|import|in|interface|is|lock|match|module|mut|none|or|pub|return|rlock|select|shared|sizeof|static|struct|type(?:of)?|union|unsafe)|\$(?:if|else|for)|#(?:include|flag))\b/,
                    number: /\b(?:0x[a-f\d]+(?:_[a-f\d]+)*|0b[01]+(?:_[01]+)*|0o[0-7]+(?:_[0-7]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?)\b/i,
                    operator: /~|\?|[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\.?/,
                    builtin: /\b(?:any(?:_int|_float)?|bool|byte(?:ptr)?|charptr|f(?:32|64)|i(?:8|16|nt|64|128)|rune|size_t|string|u(?:16|32|64|128)|voidptr)\b/
                }),
                t.inside = e.languages.v,
                e.languages.insertBefore("v", "operator", {
                    attribute: {
                        pattern: /(^[\t ]*)\[(?:deprecated|unsafe_fn|typedef|live|inline|flag|ref_only|windows_stdcall|direct_array_access)\]/m,
                        lookbehind: !0,
                        alias: "annotation",
                        inside: {
                            punctuation: /[\[\]]/,
                            keyword: /\w+/
                        }
                    },
                    generic: {
                        pattern: /<\w+>(?=\s*[\)\{])/,
                        inside: {
                            punctuation: /[<>]/,
                            "class-name": /\w+/
                        }
                    }
                }),
                e.languages.insertBefore("v", "function", {
                    "generic-function": {
                        pattern: /\b\w+\s*<\w+>(?=\()/,
                        inside: {
                            function: /^\w+/,
                            generic: {
                                pattern: /<\w+>/,
                                inside: e.languages.v.generic.inside
                            }
                        }
                    }
                })
            }(e)
        }
        e.exports = a,
        a.displayName = "v",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.vala = e.languages.extend("clike", {
                "class-name": [{
                    pattern: /\b[A-Z]\w*(?:\.\w+)*\b(?=(?:\?\s+|\*?\s+\*?)\w)/,
                    inside: {
                        punctuation: /\./
                    }
                }, {
                    pattern: /(\[)[A-Z]\w*(?:\.\w+)*\b/,
                    lookbehind: !0,
                    inside: {
                        punctuation: /\./
                    }
                }, {
                    pattern: /(\b(?:class|interface)\s+[A-Z]\w*(?:\.\w+)*\s*:\s*)[A-Z]\w*(?:\.\w+)*\b/,
                    lookbehind: !0,
                    inside: {
                        punctuation: /\./
                    }
                }, {
                    pattern: /((?:\b(?:class|interface|new|struct|enum)\s+)|(?:catch\s+\())[A-Z]\w*(?:\.\w+)*\b/,
                    lookbehind: !0,
                    inside: {
                        punctuation: /\./
                    }
                }],
                keyword: /\b(?:bool|char|double|float|null|size_t|ssize_t|string|unichar|void|int|int8|int16|int32|int64|long|short|uchar|uint|uint8|uint16|uint32|uint64|ulong|ushort|class|delegate|enum|errordomain|interface|namespace|struct|break|continue|do|for|foreach|return|while|else|if|switch|assert|case|default|abstract|const|dynamic|ensures|extern|inline|internal|override|private|protected|public|requires|signal|static|virtual|volatile|weak|async|owned|unowned|try|catch|finally|throw|as|base|construct|delete|get|in|is|lock|new|out|params|ref|sizeof|set|this|throws|typeof|using|value|var|yield)\b/i,
                function: /\b\w+(?=\s*\()/,
                number: /(?:\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)(?:f|u?l?)?/i,
                operator: /\+\+|--|&&|\|\||<<=?|>>=?|=>|->|~|[+\-*\/%&^|=!<>]=?|\?\??|\.\.\./,
                punctuation: /[{}[\];(),.:]/,
                constant: /\b[A-Z0-9_]+\b/
            }),
            e.languages.insertBefore("vala", "string", {
                "raw-string": {
                    pattern: /"""[\s\S]*?"""/,
                    greedy: !0,
                    alias: "string"
                },
                "template-string": {
                    pattern: /@"[\s\S]*?"/,
                    greedy: !0,
                    inside: {
                        interpolation: {
                            pattern: /\$(?:\([^)]*\)|[a-zA-Z]\w*)/,
                            inside: {
                                delimiter: {
                                    pattern: /^\$\(?|\)$/,
                                    alias: "punctuation"
                                },
                                rest: e.languages.vala
                            }
                        },
                        string: /[\s\S]+/
                    }
                }
            }),
            e.languages.insertBefore("vala", "keyword", {
                regex: {
                    pattern: /\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[imsx]{0,4}(?=\s*(?:$|[\r\n,.;})\]]))/,
                    greedy: !0,
                    inside: {
                        "regex-source": {
                            pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                            lookbehind: !0,
                            alias: "language-regex",
                            inside: e.languages.regex
                        },
                        "regex-delimiter": /^\//,
                        "regex-flags": /^[a-z]+$/
                    }
                }
            })
        }
        e.exports = a,
        a.displayName = "vala",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                e.languages.velocity = e.languages.extend("markup", {});
                var t = {
                    variable: {
                        pattern: /(^|[^\\](?:\\\\)*)\$!?(?:[a-z][\w-]*(?:\([^)]*\))?(?:\.[a-z][\w-]*(?:\([^)]*\))?|\[[^\]]+\])*|\{[^}]+\})/i,
                        lookbehind: !0,
                        inside: {}
                    },
                    string: {
                        pattern: /"[^"]*"|'[^']*'/,
                        greedy: !0
                    },
                    number: /\b\d+\b/,
                    boolean: /\b(?:true|false)\b/,
                    operator: /[=!<>]=?|[+*/%-]|&&|\|\||\.\.|\b(?:eq|g[et]|l[et]|n(?:e|ot))\b/,
                    punctuation: /[(){}[\]:,.]/
                };
                t.variable.inside = {
                    string: t.string,
                    function: {
                        pattern: /([^\w-])[a-z][\w-]*(?=\()/,
                        lookbehind: !0
                    },
                    number: t.number,
                    boolean: t.boolean,
                    punctuation: t.punctuation
                },
                e.languages.insertBefore("velocity", "comment", {
                    unparsed: {
                        pattern: /(^|[^\\])#\[\[[\s\S]*?\]\]#/,
                        lookbehind: !0,
                        greedy: !0,
                        inside: {
                            punctuation: /^#\[\[|\]\]#$/
                        }
                    },
                    "velocity-comment": [{
                        pattern: /(^|[^\\])#\*[\s\S]*?\*#/,
                        lookbehind: !0,
                        greedy: !0,
                        alias: "comment"
                    }, {
                        pattern: /(^|[^\\])##.*/,
                        lookbehind: !0,
                        greedy: !0,
                        alias: "comment"
                    }],
                    directive: {
                        pattern: /(^|[^\\](?:\\\\)*)#@?(?:[a-z][\w-]*|\{[a-z][\w-]*\})(?:\s*\((?:[^()]|\([^()]*\))*\))?/i,
                        lookbehind: !0,
                        inside: {
                            keyword: {
                                pattern: /^#@?(?:[a-z][\w-]*|\{[a-z][\w-]*\})|\bin\b/,
                                inside: {
                                    punctuation: /[{}]/
                                }
                            },
                            rest: t
                        }
                    },
                    variable: t.variable
                }),
                e.languages.velocity.tag.inside["attr-value"].inside.rest = e.languages.velocity
            }(e)
        }
        e.exports = a,
        a.displayName = "velocity",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.verilog = {
                comment: /\/\/.*|\/\*[\s\S]*?\*\//,
                string: {
                    pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
                    greedy: !0
                },
                property: /\B\$\w+\b/,
                constant: /\B`\w+\b/,
                function: /\b\w+(?=\()/,
                keyword: /\b(?:alias|and|assert|assign|assume|automatic|before|begin|bind|bins|binsof|bit|break|buf|bufif0|bufif1|byte|class|case|casex|casez|cell|chandle|clocking|cmos|config|const|constraint|context|continue|cover|covergroup|coverpoint|cross|deassign|default|defparam|design|disable|dist|do|edge|else|end|endcase|endclass|endclocking|endconfig|endfunction|endgenerate|endgroup|endinterface|endmodule|endpackage|endprimitive|endprogram|endproperty|endspecify|endsequence|endtable|endtask|enum|event|expect|export|extends|extern|final|first_match|for|force|foreach|forever|fork|forkjoin|function|generate|genvar|highz0|highz1|if|iff|ifnone|ignore_bins|illegal_bins|import|incdir|include|initial|inout|input|inside|instance|int|integer|interface|intersect|join|join_any|join_none|large|liblist|library|local|localparam|logic|longint|macromodule|matches|medium|modport|module|nand|negedge|new|nmos|nor|noshowcancelled|not|notif0|notif1|null|or|output|package|packed|parameter|pmos|posedge|primitive|priority|program|property|protected|pull0|pull1|pulldown|pullup|pulsestyle_onevent|pulsestyle_ondetect|pure|rand|randc|randcase|randsequence|rcmos|real|realtime|ref|reg|release|repeat|return|rnmos|rpmos|rtran|rtranif0|rtranif1|scalared|sequence|shortint|shortreal|showcancelled|signed|small|solve|specify|specparam|static|string|strong0|strong1|struct|super|supply0|supply1|table|tagged|task|this|throughout|time|timeprecision|timeunit|tran|tranif0|tranif1|tri|tri0|tri1|triand|trior|trireg|type|typedef|union|unique|unsigned|use|uwire|var|vectored|virtual|void|wait|wait_order|wand|weak0|weak1|while|wildcard|wire|with|within|wor|xnor|xor)\b/,
                important: /\b(?:always_latch|always_comb|always_ff|always)\b ?@?/,
                number: /\B##?\d+|(?:\b\d+)?'[odbh] ?[\da-fzx_?]+|\b(?:\d*[._])?\d+(?:e[-+]?\d+)?/i,
                operator: /[-+{}^~%*\/?=!<>&|]+/,
                punctuation: /[[\];(),.:]/
            }
        }
        e.exports = a,
        a.displayName = "verilog",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.vhdl = {
                comment: /--.+/,
                "vhdl-vectors": {
                    pattern: /\b[oxb]"[\da-f_]+"|"[01uxzwlh-]+"/i,
                    alias: "number"
                },
                "quoted-function": {
                    pattern: /"\S+?"(?=\()/,
                    alias: "function"
                },
                string: /"(?:[^\\"\r\n]|\\(?:\r\n|[\s\S]))*"/,
                constant: /\b(?:use|library)\b/i,
                keyword: /\b(?:'active|'ascending|'base|'delayed|'driving|'driving_value|'event|'high|'image|'instance_name|'last_active|'last_event|'last_value|'left|'leftof|'length|'low|'path_name|'pos|'pred|'quiet|'range|'reverse_range|'right|'rightof|'simple_name|'stable|'succ|'transaction|'val|'value|access|after|alias|all|architecture|array|assert|attribute|begin|block|body|buffer|bus|case|component|configuration|constant|disconnect|downto|else|elsif|end|entity|exit|file|for|function|generate|generic|group|guarded|if|impure|in|inertial|inout|is|label|library|linkage|literal|loop|map|new|next|null|of|on|open|others|out|package|port|postponed|procedure|process|pure|range|record|register|reject|report|return|select|severity|shared|signal|subtype|then|to|transport|type|unaffected|units|until|use|variable|wait|when|while|with)\b/i,
                boolean: /\b(?:true|false)\b/i,
                function: /\w+(?=\()/,
                number: /'[01uxzwlh-]'|\b(?:\d+#[\da-f_.]+#|\d[\d_.]*)(?:e[-+]?\d+)?/i,
                operator: /[<>]=?|:=|[-+*/&=]|\b(?:abs|not|mod|rem|sll|srl|sla|sra|rol|ror|and|or|nand|xnor|xor|nor)\b/i,
                punctuation: /[{}[\];(),.:]/
            }
        }
        e.exports = a,
        a.displayName = "vhdl",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.vim = {
                string: /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\r\n]|'')*'/,
                comment: /".*/,
                function: /\b\w+(?=\()/,
                keyword: /\b(?:ab|abbreviate|abc|abclear|abo|aboveleft|al|all|arga|argadd|argd|argdelete|argdo|arge|argedit|argg|argglobal|argl|arglocal|ar|args|argu|argument|as|ascii|bad|badd|ba|ball|bd|bdelete|be|bel|belowright|bf|bfirst|bl|blast|bm|bmodified|bn|bnext|bN|bNext|bo|botright|bp|bprevious|brea|break|breaka|breakadd|breakd|breakdel|breakl|breaklist|br|brewind|bro|browse|bufdo|b|buffer|buffers|bun|bunload|bw|bwipeout|ca|cabbrev|cabc|cabclear|caddb|caddbuffer|cad|caddexpr|caddf|caddfile|cal|call|cat|catch|cb|cbuffer|cc|ccl|cclose|cd|ce|center|cex|cexpr|cf|cfile|cfir|cfirst|cgetb|cgetbuffer|cgete|cgetexpr|cg|cgetfile|c|change|changes|chd|chdir|che|checkpath|checkt|checktime|cla|clast|cl|clist|clo|close|cmapc|cmapclear|cnew|cnewer|cn|cnext|cN|cNext|cnf|cnfile|cNfcNfile|cnorea|cnoreabbrev|col|colder|colo|colorscheme|comc|comclear|comp|compiler|conf|confirm|con|continue|cope|copen|co|copy|cpf|cpfile|cp|cprevious|cq|cquit|cr|crewind|cuna|cunabbrev|cu|cunmap|cw|cwindow|debugg|debuggreedy|delc|delcommand|d|delete|delf|delfunction|delm|delmarks|diffg|diffget|diffoff|diffpatch|diffpu|diffput|diffsplit|diffthis|diffu|diffupdate|dig|digraphs|di|display|dj|djump|dl|dlist|dr|drop|ds|dsearch|dsp|dsplit|earlier|echoe|echoerr|echom|echomsg|echon|e|edit|el|else|elsei|elseif|em|emenu|endfo|endfor|endf|endfunction|endfun|en|endif|endt|endtry|endw|endwhile|ene|enew|ex|exi|exit|exu|exusage|f|file|files|filetype|fina|finally|fin|find|fini|finish|fir|first|fix|fixdel|fo|fold|foldc|foldclose|folddoc|folddoclosed|foldd|folddoopen|foldo|foldopen|for|fu|fun|function|go|goto|gr|grep|grepa|grepadd|ha|hardcopy|h|help|helpf|helpfind|helpg|helpgrep|helpt|helptags|hid|hide|his|history|ia|iabbrev|iabc|iabclear|if|ij|ijump|il|ilist|imapc|imapclear|in|inorea|inoreabbrev|isearch|isp|isplit|iuna|iunabbrev|iu|iunmap|j|join|ju|jumps|k|keepalt|keepj|keepjumps|kee|keepmarks|laddb|laddbuffer|lad|laddexpr|laddf|laddfile|lan|language|la|last|later|lb|lbuffer|lc|lcd|lch|lchdir|lcl|lclose|let|left|lefta|leftabove|lex|lexpr|lf|lfile|lfir|lfirst|lgetb|lgetbuffer|lgete|lgetexpr|lg|lgetfile|lgr|lgrep|lgrepa|lgrepadd|lh|lhelpgrep|l|list|ll|lla|llast|lli|llist|lmak|lmake|lm|lmap|lmapc|lmapclear|lnew|lnewer|lne|lnext|lN|lNext|lnf|lnfile|lNf|lNfile|ln|lnoremap|lo|loadview|loc|lockmarks|lockv|lockvar|lol|lolder|lop|lopen|lpf|lpfile|lp|lprevious|lr|lrewind|ls|lt|ltag|lu|lunmap|lv|lvimgrep|lvimgrepa|lvimgrepadd|lw|lwindow|mak|make|ma|mark|marks|mat|match|menut|menutranslate|mk|mkexrc|mks|mksession|mksp|mkspell|mkvie|mkview|mkv|mkvimrc|mod|mode|m|move|mzf|mzfile|mz|mzscheme|nbkey|new|n|next|N|Next|nmapc|nmapclear|noh|nohlsearch|norea|noreabbrev|nu|number|nun|nunmap|omapc|omapclear|on|only|o|open|opt|options|ou|ounmap|pc|pclose|ped|pedit|pe|perl|perld|perldo|po|pop|popu|popup|pp|ppop|pre|preserve|prev|previous|p|print|P|Print|profd|profdel|prof|profile|promptf|promptfind|promptr|promptrepl|ps|psearch|pta|ptag|ptf|ptfirst|ptj|ptjump|ptl|ptlast|ptn|ptnext|ptN|ptNext|ptp|ptprevious|ptr|ptrewind|pts|ptselect|pu|put|pw|pwd|pyf|pyfile|py|python|qa|qall|q|quit|quita|quitall|r|read|rec|recover|redi|redir|red|redo|redr|redraw|redraws|redrawstatus|reg|registers|res|resize|ret|retab|retu|return|rew|rewind|ri|right|rightb|rightbelow|rub|ruby|rubyd|rubydo|rubyf|rubyfile|ru|runtime|rv|rviminfo|sal|sall|san|sandbox|sa|sargument|sav|saveas|sba|sball|sbf|sbfirst|sbl|sblast|sbm|sbmodified|sbn|sbnext|sbN|sbNext|sbp|sbprevious|sbr|sbrewind|sb|sbuffer|scripte|scriptencoding|scrip|scriptnames|se|set|setf|setfiletype|setg|setglobal|setl|setlocal|sf|sfind|sfir|sfirst|sh|shell|sign|sil|silent|sim|simalt|sla|slast|sl|sleep|sm|smagic|smap|smapc|smapclear|sme|smenu|sn|snext|sN|sNext|sni|sniff|sno|snomagic|snor|snoremap|snoreme|snoremenu|sor|sort|so|source|spelld|spelldump|spe|spellgood|spelli|spellinfo|spellr|spellrepall|spellu|spellundo|spellw|spellwrong|sp|split|spr|sprevious|sre|srewind|sta|stag|startg|startgreplace|star|startinsert|startr|startreplace|stj|stjump|st|stop|stopi|stopinsert|sts|stselect|sun|sunhide|sunm|sunmap|sus|suspend|sv|sview|syncbind|t|tab|tabc|tabclose|tabd|tabdo|tabe|tabedit|tabf|tabfind|tabfir|tabfirst|tabl|tablast|tabm|tabmove|tabnew|tabn|tabnext|tabN|tabNext|tabo|tabonly|tabp|tabprevious|tabr|tabrewind|tabs|ta|tag|tags|tc|tcl|tcld|tcldo|tclf|tclfile|te|tearoff|tf|tfirst|th|throw|tj|tjump|tl|tlast|tm|tmenu|tn|tnext|tN|tNext|to|topleft|tp|tprevious|tr|trewind|try|ts|tselect|tu|tunmenu|una|unabbreviate|u|undo|undoj|undojoin|undol|undolist|unh|unhide|unlet|unlo|unlockvar|unm|unmap|up|update|verb|verbose|ve|version|vert|vertical|vie|view|vim|vimgrep|vimgrepa|vimgrepadd|vi|visual|viu|viusage|vmapc|vmapclear|vne|vnew|vs|vsplit|vu|vunmap|wa|wall|wh|while|winc|wincmd|windo|winp|winpos|win|winsize|wn|wnext|wN|wNext|wp|wprevious|wq|wqa|wqall|w|write|ws|wsverb|wv|wviminfo|X|xa|xall|x|xit|xm|xmap|xmapc|xmapclear|xme|xmenu|XMLent|XMLns|xn|xnoremap|xnoreme|xnoremenu|xu|xunmap|y|yank)\b/,
                builtin: /\b(?:autocmd|acd|ai|akm|aleph|allowrevins|altkeymap|ambiwidth|ambw|anti|antialias|arab|arabic|arabicshape|ari|arshape|autochdir|autoindent|autoread|autowrite|autowriteall|aw|awa|background|backspace|backup|backupcopy|backupdir|backupext|backupskip|balloondelay|ballooneval|balloonexpr|bdir|bdlay|beval|bex|bexpr|bg|bh|bin|binary|biosk|bioskey|bk|bkc|bomb|breakat|brk|browsedir|bs|bsdir|bsk|bt|bufhidden|buflisted|buftype|casemap|ccv|cdpath|cedit|cfu|ch|charconvert|ci|cin|cindent|cink|cinkeys|cino|cinoptions|cinw|cinwords|clipboard|cmdheight|cmdwinheight|cmp|cms|columns|com|comments|commentstring|compatible|complete|completefunc|completeopt|consk|conskey|copyindent|cot|cpo|cpoptions|cpt|cscopepathcomp|cscopeprg|cscopequickfix|cscopetag|cscopetagorder|cscopeverbose|cspc|csprg|csqf|cst|csto|csverb|cuc|cul|cursorcolumn|cursorline|cwh|debug|deco|def|define|delcombine|dex|dg|dict|dictionary|diff|diffexpr|diffopt|digraph|dip|dir|directory|dy|ea|ead|eadirection|eb|ed|edcompatible|ef|efm|ei|ek|enc|encoding|endofline|eol|ep|equalalways|equalprg|errorbells|errorfile|errorformat|esckeys|et|eventignore|expandtab|exrc|fcl|fcs|fdc|fde|fdi|fdl|fdls|fdm|fdn|fdo|fdt|fen|fenc|fencs|fex|ff|ffs|fileencoding|fileencodings|fileformat|fileformats|fillchars|fk|fkmap|flp|fml|fmr|foldcolumn|foldenable|foldexpr|foldignore|foldlevel|foldlevelstart|foldmarker|foldmethod|foldminlines|foldnestmax|foldtext|formatexpr|formatlistpat|formatoptions|formatprg|fp|fs|fsync|ft|gcr|gd|gdefault|gfm|gfn|gfs|gfw|ghr|gp|grepformat|grepprg|gtl|gtt|guicursor|guifont|guifontset|guifontwide|guiheadroom|guioptions|guipty|guitablabel|guitabtooltip|helpfile|helpheight|helplang|hf|hh|hi|hidden|highlight|hk|hkmap|hkmapp|hkp|hl|hlg|hls|hlsearch|ic|icon|iconstring|ignorecase|im|imactivatekey|imak|imc|imcmdline|imd|imdisable|imi|iminsert|ims|imsearch|inc|include|includeexpr|incsearch|inde|indentexpr|indentkeys|indk|inex|inf|infercase|insertmode|isf|isfname|isi|isident|isk|iskeyword|isprint|joinspaces|js|key|keymap|keymodel|keywordprg|km|kmp|kp|langmap|langmenu|laststatus|lazyredraw|lbr|lcs|linebreak|lines|linespace|lisp|lispwords|listchars|loadplugins|lpl|lsp|lz|macatsui|magic|makeef|makeprg|matchpairs|matchtime|maxcombine|maxfuncdepth|maxmapdepth|maxmem|maxmempattern|maxmemtot|mco|mef|menuitems|mfd|mh|mis|mkspellmem|ml|mls|mm|mmd|mmp|mmt|modeline|modelines|modifiable|modified|more|mouse|mousef|mousefocus|mousehide|mousem|mousemodel|mouses|mouseshape|mouset|mousetime|mp|mps|msm|mzq|mzquantum|nf|nrformats|numberwidth|nuw|odev|oft|ofu|omnifunc|opendevice|operatorfunc|opfunc|osfiletype|pa|para|paragraphs|paste|pastetoggle|patchexpr|patchmode|path|pdev|penc|pex|pexpr|pfn|ph|pheader|pi|pm|pmbcs|pmbfn|popt|preserveindent|previewheight|previewwindow|printdevice|printencoding|printexpr|printfont|printheader|printmbcharset|printmbfont|printoptions|prompt|pt|pumheight|pvh|pvw|qe|quoteescape|readonly|remap|report|restorescreen|revins|rightleft|rightleftcmd|rl|rlc|ro|rs|rtp|ruf|ruler|rulerformat|runtimepath|sbo|sc|scb|scr|scroll|scrollbind|scrolljump|scrolloff|scrollopt|scs|sect|sections|secure|sel|selection|selectmode|sessionoptions|sft|shcf|shellcmdflag|shellpipe|shellquote|shellredir|shellslash|shelltemp|shelltype|shellxquote|shiftround|shiftwidth|shm|shortmess|shortname|showbreak|showcmd|showfulltag|showmatch|showmode|showtabline|shq|si|sidescroll|sidescrolloff|siso|sj|slm|smartcase|smartindent|smarttab|smc|smd|softtabstop|sol|spc|spell|spellcapcheck|spellfile|spelllang|spellsuggest|spf|spl|splitbelow|splitright|sps|sr|srr|ss|ssl|ssop|stal|startofline|statusline|stl|stmp|su|sua|suffixes|suffixesadd|sw|swapfile|swapsync|swb|swf|switchbuf|sws|sxq|syn|synmaxcol|syntax|tabline|tabpagemax|tabstop|tagbsearch|taglength|tagrelative|tagstack|tal|tb|tbi|tbidi|tbis|tbs|tenc|term|termbidi|termencoding|terse|textauto|textmode|textwidth|tgst|thesaurus|tildeop|timeout|timeoutlen|title|titlelen|titleold|titlestring|toolbar|toolbariconsize|top|tpm|tsl|tsr|ttimeout|ttimeoutlen|ttm|tty|ttybuiltin|ttyfast|ttym|ttymouse|ttyscroll|ttytype|tw|tx|uc|ul|undolevels|updatecount|updatetime|ut|vb|vbs|vdir|verbosefile|vfile|viewdir|viewoptions|viminfo|virtualedit|visualbell|vop|wak|warn|wb|wc|wcm|wd|weirdinvert|wfh|wfw|whichwrap|wi|wig|wildchar|wildcharm|wildignore|wildmenu|wildmode|wildoptions|wim|winaltkeys|window|winfixheight|winfixwidth|winheight|winminheight|winminwidth|winwidth|wiv|wiw|wm|wmh|wmnu|wmw|wop|wrap|wrapmargin|wrapscan|writeany|writebackup|writedelay|ww|noacd|noai|noakm|noallowrevins|noaltkeymap|noanti|noantialias|noar|noarab|noarabic|noarabicshape|noari|noarshape|noautochdir|noautoindent|noautoread|noautowrite|noautowriteall|noaw|noawa|nobackup|noballooneval|nobeval|nobin|nobinary|nobiosk|nobioskey|nobk|nobl|nobomb|nobuflisted|nocf|noci|nocin|nocindent|nocompatible|noconfirm|noconsk|noconskey|nocopyindent|nocp|nocscopetag|nocscopeverbose|nocst|nocsverb|nocuc|nocul|nocursorcolumn|nocursorline|nodeco|nodelcombine|nodg|nodiff|nodigraph|nodisable|noea|noeb|noed|noedcompatible|noek|noendofline|noeol|noequalalways|noerrorbells|noesckeys|noet|noex|noexpandtab|noexrc|nofen|nofk|nofkmap|nofoldenable|nogd|nogdefault|noguipty|nohid|nohidden|nohk|nohkmap|nohkmapp|nohkp|nohls|noic|noicon|noignorecase|noim|noimc|noimcmdline|noimd|noincsearch|noinf|noinfercase|noinsertmode|nois|nojoinspaces|nojs|nolazyredraw|nolbr|nolinebreak|nolisp|nolist|noloadplugins|nolpl|nolz|noma|nomacatsui|nomagic|nomh|noml|nomod|nomodeline|nomodifiable|nomodified|nomore|nomousef|nomousefocus|nomousehide|nonu|nonumber|noodev|noopendevice|nopaste|nopi|nopreserveindent|nopreviewwindow|noprompt|nopvw|noreadonly|noremap|norestorescreen|norevins|nori|norightleft|norightleftcmd|norl|norlc|noro|nors|noru|noruler|nosb|nosc|noscb|noscrollbind|noscs|nosecure|nosft|noshellslash|noshelltemp|noshiftround|noshortname|noshowcmd|noshowfulltag|noshowmatch|noshowmode|nosi|nosm|nosmartcase|nosmartindent|nosmarttab|nosmd|nosn|nosol|nospell|nosplitbelow|nosplitright|nospr|nosr|nossl|nosta|nostartofline|nostmp|noswapfile|noswf|nota|notagbsearch|notagrelative|notagstack|notbi|notbidi|notbs|notermbidi|noterse|notextauto|notextmode|notf|notgst|notildeop|notimeout|notitle|noto|notop|notr|nottimeout|nottybuiltin|nottyfast|notx|novb|novisualbell|nowa|nowarn|nowb|noweirdinvert|nowfh|nowfw|nowildmenu|nowinfixheight|nowinfixwidth|nowiv|nowmnu|nowrap|nowrapscan|nowrite|nowriteany|nowritebackup|nows|invacd|invai|invakm|invallowrevins|invaltkeymap|invanti|invantialias|invar|invarab|invarabic|invarabicshape|invari|invarshape|invautochdir|invautoindent|invautoread|invautowrite|invautowriteall|invaw|invawa|invbackup|invballooneval|invbeval|invbin|invbinary|invbiosk|invbioskey|invbk|invbl|invbomb|invbuflisted|invcf|invci|invcin|invcindent|invcompatible|invconfirm|invconsk|invconskey|invcopyindent|invcp|invcscopetag|invcscopeverbose|invcst|invcsverb|invcuc|invcul|invcursorcolumn|invcursorline|invdeco|invdelcombine|invdg|invdiff|invdigraph|invdisable|invea|inveb|inved|invedcompatible|invek|invendofline|inveol|invequalalways|inverrorbells|invesckeys|invet|invex|invexpandtab|invexrc|invfen|invfk|invfkmap|invfoldenable|invgd|invgdefault|invguipty|invhid|invhidden|invhk|invhkmap|invhkmapp|invhkp|invhls|invhlsearch|invic|invicon|invignorecase|invim|invimc|invimcmdline|invimd|invincsearch|invinf|invinfercase|invinsertmode|invis|invjoinspaces|invjs|invlazyredraw|invlbr|invlinebreak|invlisp|invlist|invloadplugins|invlpl|invlz|invma|invmacatsui|invmagic|invmh|invml|invmod|invmodeline|invmodifiable|invmodified|invmore|invmousef|invmousefocus|invmousehide|invnu|invnumber|invodev|invopendevice|invpaste|invpi|invpreserveindent|invpreviewwindow|invprompt|invpvw|invreadonly|invremap|invrestorescreen|invrevins|invri|invrightleft|invrightleftcmd|invrl|invrlc|invro|invrs|invru|invruler|invsb|invsc|invscb|invscrollbind|invscs|invsecure|invsft|invshellslash|invshelltemp|invshiftround|invshortname|invshowcmd|invshowfulltag|invshowmatch|invshowmode|invsi|invsm|invsmartcase|invsmartindent|invsmarttab|invsmd|invsn|invsol|invspell|invsplitbelow|invsplitright|invspr|invsr|invssl|invsta|invstartofline|invstmp|invswapfile|invswf|invta|invtagbsearch|invtagrelative|invtagstack|invtbi|invtbidi|invtbs|invtermbidi|invterse|invtextauto|invtextmode|invtf|invtgst|invtildeop|invtimeout|invtitle|invto|invtop|invtr|invttimeout|invttybuiltin|invttyfast|invtx|invvb|invvisualbell|invwa|invwarn|invwb|invweirdinvert|invwfh|invwfw|invwildmenu|invwinfixheight|invwinfixwidth|invwiv|invwmnu|invwrap|invwrapscan|invwrite|invwriteany|invwritebackup|invws|t_AB|t_AF|t_al|t_AL|t_bc|t_cd|t_ce|t_Ce|t_cl|t_cm|t_Co|t_cs|t_Cs|t_CS|t_CV|t_da|t_db|t_dl|t_DL|t_EI|t_F1|t_F2|t_F3|t_F4|t_F5|t_F6|t_F7|t_F8|t_F9|t_fs|t_IE|t_IS|t_k1|t_K1|t_k2|t_k3|t_K3|t_k4|t_K4|t_k5|t_K5|t_k6|t_K6|t_k7|t_K7|t_k8|t_K8|t_k9|t_K9|t_KA|t_kb|t_kB|t_KB|t_KC|t_kd|t_kD|t_KD|t_ke|t_KE|t_KF|t_KG|t_kh|t_KH|t_kI|t_KI|t_KJ|t_KK|t_kl|t_KL|t_kN|t_kP|t_kr|t_ks|t_ku|t_le|t_mb|t_md|t_me|t_mr|t_ms|t_nd|t_op|t_RI|t_RV|t_Sb|t_se|t_Sf|t_SI|t_so|t_sr|t_te|t_ti|t_ts|t_ue|t_us|t_ut|t_vb|t_ve|t_vi|t_vs|t_WP|t_WS|t_xs|t_ZH|t_ZR)\b/,
                number: /\b(?:0x[\da-f]+|\d+(?:\.\d+)?)\b/i,
                operator: /\|\||&&|[-+.]=?|[=!](?:[=~][#?]?)?|[<>]=?[#?]?|[*\/%?]|\b(?:is(?:not)?)\b/,
                punctuation: /[{}[\](),;:]/
            }
        }
        e.exports = a,
        a.displayName = "vim",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages["visual-basic"] = {
                comment: {
                    pattern: /(?:['\u2018\u2019]|REM\b)(?:[^\r\n_]|_(?:\r\n?|\n)?)*/i,
                    inside: {
                        keyword: /^REM/i
                    }
                },
                directive: {
                    pattern: /#(?:Const|Else|ElseIf|End|ExternalChecksum|ExternalSource|If|Region)(?:[^\S\r\n]_[^\S\r\n]*(?:\r\n?|\n)|.)+/i,
                    alias: "comment",
                    greedy: !0
                },
                string: {
                    pattern: /\$?["\u201c\u201d](?:["\u201c\u201d]{2}|[^"\u201c\u201d])*["\u201c\u201d]C?/i,
                    greedy: !0
                },
                date: {
                    pattern: /#[^\S\r\n]*(?:\d+([/-])\d+\1\d+(?:[^\S\r\n]+(?:\d+[^\S\r\n]*(?:AM|PM)|\d+:\d+(?::\d+)?(?:[^\S\r\n]*(?:AM|PM))?))?|\d+[^\S\r\n]*(?:AM|PM)|\d+:\d+(?::\d+)?(?:[^\S\r\n]*(?:AM|PM))?)[^\S\r\n]*#/i,
                    alias: "builtin"
                },
                number: /(?:(?:\b\d+(?:\.\d+)?|\.\d+)(?:E[+-]?\d+)?|&[HO][\dA-F]+)(?:U?[ILS]|[FRD])?/i,
                boolean: /\b(?:True|False|Nothing)\b/i,
                keyword: /\b(?:AddHandler|AddressOf|Alias|And(?:Also)?|As|Boolean|ByRef|Byte|ByVal|Call|Case|Catch|C(?:Bool|Byte|Char|Date|Dbl|Dec|Int|Lng|Obj|SByte|Short|Sng|Str|Type|UInt|ULng|UShort)|Char|Class|Const|Continue|Currency|Date|Decimal|Declare|Default|Delegate|Dim|DirectCast|Do|Double|Each|Else(?:If)?|End(?:If)?|Enum|Erase|Error|Event|Exit|Finally|For|Friend|Function|Get(?:Type|XMLNamespace)?|Global|GoSub|GoTo|Handles|If|Implements|Imports|In|Inherits|Integer|Interface|Is|IsNot|Let|Lib|Like|Long|Loop|Me|Mod|Module|Must(?:Inherit|Override)|My(?:Base|Class)|Namespace|Narrowing|New|Next|Not(?:Inheritable|Overridable)?|Object|Of|On|Operator|Option(?:al)?|Or(?:Else)?|Out|Overloads|Overridable|Overrides|ParamArray|Partial|Private|Property|Protected|Public|RaiseEvent|ReadOnly|ReDim|RemoveHandler|Resume|Return|SByte|Select|Set|Shadows|Shared|short|Single|Static|Step|Stop|String|Structure|Sub|SyncLock|Then|Throw|To|Try|TryCast|Type|TypeOf|U(?:Integer|Long|Short)|Using|Variant|Wend|When|While|Widening|With(?:Events)?|WriteOnly|Until|Xor)\b/i,
                operator: [/[+\-*/\\^<=>&#@$%!]/, {
                    pattern: /([^\S\r\n])_(?=[^\S\r\n]*[\r\n])/,
                    lookbehind: !0
                }],
                punctuation: /[{}().,:?]/
            },
            e.languages.vb = e.languages["visual-basic"],
            e.languages.vba = e.languages["visual-basic"]
        }
        e.exports = a,
        a.displayName = "visualBasic",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.warpscript = {
                comment: /#.*|\/\/.*|\/\*[\s\S]*?\*\//,
                string: {
                    pattern: /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'|<'(?:[^\\']|'(?!>)|\\.)*'>/,
                    greedy: !0
                },
                variable: /\$\S+/,
                macro: {
                    pattern: /@\S+/,
                    alias: "property"
                },
                keyword: /\b(?:BREAK|CHECKMACRO|CONTINUE|CUDF|DEFINED|DEFINEDMACRO|EVAL|FAIL|FOR|FOREACH|FORSTEP|IFT|IFTE|MSGFAIL|NRETURN|RETHROW|RETURN|SWITCH|TRY|UDF|UNTIL|WHILE)\b/,
                number: /[+-]?\b(?:NaN|Infinity|\d+(?:\.\d*)?(?:[Ee][+-]?\d+)?|0x[\da-fA-F]+|0b[01]+)\b/,
                boolean: /\b(?:false|true|F|T)\b/,
                punctuation: /<%|%>|[{}[\]()]/,
                operator: /==|&&?|\|\|?|\*\*?|>>>?|<<|[<>!~]=?|[-/%^]|\+!?|\b(?:AND|NOT|OR)\b/
            }
        }
        e.exports = a,
        a.displayName = "warpscript",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.wasm = {
                comment: [/\(;[\s\S]*?;\)/, {
                    pattern: /;;.*/,
                    greedy: !0
                }],
                string: {
                    pattern: /"(?:\\[\s\S]|[^"\\])*"/,
                    greedy: !0
                },
                keyword: [{
                    pattern: /\b(?:align|offset)=/,
                    inside: {
                        operator: /=/
                    }
                }, {
                    pattern: /\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,
                    inside: {
                        punctuation: /\./
                    }
                }, /\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/],
                variable: /\$[\w!#$%&'*+\-./:<=>?@\\^`|~]+/i,
                number: /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,
                punctuation: /[()]/
            }
        }
        e.exports = a,
        a.displayName = "wasm",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.wiki = e.languages.extend("markup", {
                "block-comment": {
                    pattern: /(^|[^\\])\/\*[\s\S]*?\*\//,
                    lookbehind: !0,
                    alias: "comment"
                },
                heading: {
                    pattern: /^(=+)[^=\r\n].*?\1/m,
                    inside: {
                        punctuation: /^=+|=+$/,
                        important: /.+/
                    }
                },
                emphasis: {
                    pattern: /('{2,5}).+?\1/,
                    inside: {
                        "bold-italic": {
                            pattern: /(''''').+?(?=\1)/,
                            lookbehind: !0,
                            alias: ["bold", "italic"]
                        },
                        bold: {
                            pattern: /(''')[^'](?:.*?[^'])?(?=\1)/,
                            lookbehind: !0
                        },
                        italic: {
                            pattern: /('')[^'](?:.*?[^'])?(?=\1)/,
                            lookbehind: !0
                        },
                        punctuation: /^''+|''+$/
                    }
                },
                hr: {
                    pattern: /^-{4,}/m,
                    alias: "punctuation"
                },
                url: [/ISBN +(?:97[89][ -]?)?(?:\d[ -]?){9}[\dx]\b|(?:RFC|PMID) +\d+/i, /\[\[.+?\]\]|\[.+?\]/],
                variable: [/__[A-Z]+__/, /\{{3}.+?\}{3}/, /\{\{.+?\}\}/],
                symbol: [/^#redirect/im, /~{3,5}/],
                "table-tag": {
                    pattern: /((?:^|[|!])[|!])[^|\r\n]+\|(?!\|)/m,
                    lookbehind: !0,
                    inside: {
                        "table-bar": {
                            pattern: /\|$/,
                            alias: "punctuation"
                        },
                        rest: e.languages.markup.tag.inside
                    }
                },
                punctuation: /^(?:\{\||\|\}|\|-|[*#:;!|])|\|\||!!/m
            }),
            e.languages.insertBefore("wiki", "tag", {
                nowiki: {
                    pattern: /<(nowiki|pre|source)\b[^>]*>[\s\S]*?<\/\1>/i,
                    inside: {
                        tag: {
                            pattern: /<(?:nowiki|pre|source)\b[^>]*>|<\/(?:nowiki|pre|source)>/i,
                            inside: e.languages.markup.tag.inside
                        }
                    }
                }
            })
        }
        e.exports = a,
        a.displayName = "wiki",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.wolfram = {
                comment: /\(\*(?:\(\*(?:[^*]|\*(?!\)))*\*\)|(?!\(\*)[\s\S])*?\*\)/,
                string: {
                    pattern: /"(?:\\.|[^"\\\r\n])*"/,
                    greedy: !0
                },
                keyword: /\b(?:Abs|AbsArg|Accuracy|Block|Do|For|Function|If|Manipulate|Module|Nest|NestList|None|Return|Switch|Table|Which|While)\b/,
                context: {
                    pattern: /\w+`+\w*/,
                    alias: "class-name"
                },
                blank: {
                    pattern: /\b\w+_\b/,
                    alias: "regex"
                },
                "global-variable": {
                    pattern: /\$\w+/,
                    alias: "variable"
                },
                boolean: /\b(?:True|False)\b/,
                number: /(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?j?\b/i,
                operator: /\/\.|;|=\.|\^=|\^:=|:=|<<|>>|<\||\|>|:>|\|->|->|<-|@@@|@@|@|\/@|=!=|===|==|=|\+|-|\^|\[\/-+%=\]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
                punctuation: /[\|{}[\];(),.:]/
            },
            e.languages.mathematica = e.languages.wolfram,
            e.languages.wl = e.languages.wolfram,
            e.languages.nb = e.languages.wolfram
        }
        e.exports = a,
        a.displayName = "wolfram",
        a.aliases = ["mathematica", "wl", "nb"]
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                e.languages.xeora = e.languages.extend("markup", {
                    constant: {
                        pattern: /\$(?:DomainContents|PageRenderDuration)\$/,
                        inside: {
                            punctuation: {
                                pattern: /\$/
                            }
                        }
                    },
                    variable: {
                        pattern: /\$@?(?:#+|[-+*~=^])?[\w.]+\$/,
                        inside: {
                            punctuation: {
                                pattern: /[$.]/
                            },
                            operator: {
                                pattern: /#+|[-+*~=^@]/
                            }
                        }
                    },
                    "function-inline": {
                        pattern: /\$F:[-\w.]+\?[-\w.]+(?:,(?:(?:@[-#]*\w+\.[\w+.]\.*)*\|)*(?:(?:[\w+]|[-#*.~^]+[\w+]|=\S)(?:[^$=]|=+[^=])*=*|(?:@[-#]*\w+\.[\w+.]\.*)+(?:(?:[\w+]|[-#*~^][-#*.~^]*[\w+]|=\S)(?:[^$=]|=+[^=])*=*)?)?)?\$/,
                        inside: {
                            variable: {
                                pattern: /(?:[,|])@?(?:#+|[-+*~=^])?[\w.]+/,
                                inside: {
                                    punctuation: {
                                        pattern: /[,.|]/
                                    },
                                    operator: {
                                        pattern: /#+|[-+*~=^@]/
                                    }
                                }
                            },
                            punctuation: {
                                pattern: /\$\w:|[$:?.,|]/
                            }
                        },
                        alias: "function"
                    },
                    "function-block": {
                        pattern: /\$XF:\{[-\w.]+\?[-\w.]+(?:,(?:(?:@[-#]*\w+\.[\w+.]\.*)*\|)*(?:(?:[\w+]|[-#*.~^]+[\w+]|=\S)(?:[^$=]|=+[^=])*=*|(?:@[-#]*\w+\.[\w+.]\.*)+(?:(?:[\w+]|[-#*~^][-#*.~^]*[\w+]|=\S)(?:[^$=]|=+[^=])*=*)?)?)?\}:XF\$/,
                        inside: {
                            punctuation: {
                                pattern: /[$:{}?.,|]/
                            }
                        },
                        alias: "function"
                    },
                    "directive-inline": {
                        pattern: /\$\w(?:#\d+\+?)?(?:\[[-\w.]+\])?:[-\/\w.]+\$/,
                        inside: {
                            punctuation: {
                                pattern: /\$(?:\w:|C(?:\[|#\d))?|[:{[\]]/,
                                inside: {
                                    tag: {
                                        pattern: /#\d/
                                    }
                                }
                            }
                        },
                        alias: "function"
                    },
                    "directive-block-open": {
                        pattern: /\$\w+:\{|\$\w(?:#\d+\+?)?(?:\[[-\w.]+\])?:[-\w.]+:\{(?:![A-Z]+)?/,
                        inside: {
                            punctuation: {
                                pattern: /\$(?:\w:|C(?:\[|#\d))?|[:{[\]]/,
                                inside: {
                                    tag: {
                                        pattern: /#\d/
                                    }
                                }
                            },
                            attribute: {
                                pattern: /![A-Z]+$/,
                                inside: {
                                    punctuation: {
                                        pattern: /!/
                                    }
                                },
                                alias: "keyword"
                            }
                        },
                        alias: "function"
                    },
                    "directive-block-separator": {
                        pattern: /\}:[-\w.]+:\{/,
                        inside: {
                            punctuation: {
                                pattern: /[:{}]/
                            }
                        },
                        alias: "function"
                    },
                    "directive-block-close": {
                        pattern: /\}:[-\w.]+\$/,
                        inside: {
                            punctuation: {
                                pattern: /[:{}$]/
                            }
                        },
                        alias: "function"
                    }
                }),
                e.languages.insertBefore("inside", "punctuation", {
                    variable: e.languages.xeora["function-inline"].inside.variable
                }, e.languages.xeora["function-block"]),
                e.languages.xeoracube = e.languages.xeora
            }(e)
        }
        e.exports = a,
        a.displayName = "xeora",
        a.aliases = ["xeoracube"]
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                function t(t, n) {
                    e.languages[t] && e.languages.insertBefore(t, "comment", {
                        "doc-comment": n
                    })
                }
                var n = e.languages.markup.tag
                  , a = {
                    pattern: /\/\/\/.*/,
                    greedy: !0,
                    alias: "comment",
                    inside: {
                        tag: n
                    }
                }
                  , r = {
                    pattern: /'''.*/,
                    greedy: !0,
                    alias: "comment",
                    inside: {
                        tag: n
                    }
                };
                t("csharp", a),
                t("fsharp", a),
                t("vbnet", r)
            }(e)
        }
        e.exports = a,
        a.displayName = "xmlDoc",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.xojo = {
                comment: {
                    pattern: /(?:'|\/\/|Rem\b).+/i
                },
                string: {
                    pattern: /"(?:""|[^"])*"/,
                    greedy: !0
                },
                number: [/(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:E[+-]?\d+)?/i, /&[bchou][a-z\d]+/i],
                symbol: /#(?:If|Else|ElseIf|Endif|Pragma)\b/i,
                keyword: /\b(?:AddHandler|App|Array|As(?:signs)?|Auto|By(?:Ref|Val)|Boolean|Break|Byte|Call|Case|Catch|CFStringRef|CGFloat|Class|Color|Const|Continue|CString|Currency|CurrentMethodName|Declare|Delegate|Dim|Do(?:uble|wnTo)?|Each|Else(?:If)?|End|Enumeration|Event|Exception|Exit|Extends|False|Finally|For|Function|Get|GetTypeInfo|Global|GOTO|If|Implements|In|Inherits|Int(?:erface|eger|8|16|32|64)?|Lib|Loop|Me|Module|Next|Nil|Object|Optional|OSType|ParamArray|Private|Property|Protected|PString|Ptr|Raise(?:Event)?|ReDim|RemoveHandler|Return|Select(?:or)?|Self|Set|Single|Shared|Short|Soft|Static|Step|String|Sub|Super|Text|Then|To|True|Try|Ubound|UInt(?:eger|8|16|32|64)?|Until|Using|Var(?:iant)?|Wend|While|WindowPtr|WString)\b/i,
                operator: /<[=>]?|>=?|[+\-*\/\\^=]|\b(?:AddressOf|And|Ctype|IsA?|Mod|New|Not|Or|Xor|WeakAddressOf)\b/i,
                punctuation: /[.,;:()]/
            }
        }
        e.exports = a,
        a.displayName = "xojo",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                e.languages.xquery = e.languages.extend("markup", {
                    "xquery-comment": {
                        pattern: /\(:[\s\S]*?:\)/,
                        greedy: !0,
                        alias: "comment"
                    },
                    string: {
                        pattern: /(["'])(?:\1\1|(?!\1)[\s\S])*\1/,
                        greedy: !0
                    },
                    extension: {
                        pattern: /\(#.+?#\)/,
                        alias: "symbol"
                    },
                    variable: /\$[-\w:]+/,
                    axis: {
                        pattern: /(^|[^-])(?:ancestor(?:-or-self)?|attribute|child|descendant(?:-or-self)?|following(?:-sibling)?|parent|preceding(?:-sibling)?|self)(?=::)/,
                        lookbehind: !0,
                        alias: "operator"
                    },
                    "keyword-operator": {
                        pattern: /(^|[^:-])\b(?:and|castable as|div|eq|except|ge|gt|idiv|instance of|intersect|is|le|lt|mod|ne|or|union)\b(?=$|[^:-])/,
                        lookbehind: !0,
                        alias: "operator"
                    },
                    keyword: {
                        pattern: /(^|[^:-])\b(?:as|ascending|at|base-uri|boundary-space|case|cast as|collation|construction|copy-namespaces|declare|default|descending|else|empty (?:greatest|least)|encoding|every|external|for|function|if|import|in|inherit|lax|let|map|module|namespace|no-inherit|no-preserve|option|order(?: by|ed|ing)?|preserve|return|satisfies|schema|some|stable|strict|strip|then|to|treat as|typeswitch|unordered|validate|variable|version|where|xquery)\b(?=$|[^:-])/,
                        lookbehind: !0
                    },
                    function: /[\w-]+(?::[\w-]+)*(?=\s*\()/,
                    "xquery-element": {
                        pattern: /(element\s+)[\w-]+(?::[\w-]+)*/,
                        lookbehind: !0,
                        alias: "tag"
                    },
                    "xquery-attribute": {
                        pattern: /(attribute\s+)[\w-]+(?::[\w-]+)*/,
                        lookbehind: !0,
                        alias: "attr-name"
                    },
                    builtin: {
                        pattern: /(^|[^:-])\b(?:attribute|comment|document|element|processing-instruction|text|xs:(?:anyAtomicType|anyType|anyURI|base64Binary|boolean|byte|date|dateTime|dayTimeDuration|decimal|double|duration|ENTITIES|ENTITY|float|gDay|gMonth|gMonthDay|gYear|gYearMonth|hexBinary|ID|IDREFS?|int|integer|language|long|Name|NCName|negativeInteger|NMTOKENS?|nonNegativeInteger|nonPositiveInteger|normalizedString|NOTATION|positiveInteger|QName|short|string|time|token|unsigned(?:Byte|Int|Long|Short)|untyped(?:Atomic)?|yearMonthDuration))\b(?=$|[^:-])/,
                        lookbehind: !0
                    },
                    number: /\b\d+(?:\.\d+)?(?:E[+-]?\d+)?/,
                    operator: [/[+*=?|@]|\.\.?|:=|!=|<[=<]?|>[=>]?/, {
                        pattern: /(\s)-(?=\s)/,
                        lookbehind: !0
                    }],
                    punctuation: /[[\](){},;:/]/
                }),
                e.languages.xquery.tag.pattern = /<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|\{(?!\{)(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,
                e.languages.xquery.tag.inside["attr-value"].pattern = /=(?:("|')(?:\\[\s\S]|\{(?!\{)(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}|(?!\1)[^\\])*\1|[^\s'">=]+)/i,
                e.languages.xquery.tag.inside["attr-value"].inside.punctuation = /^="|"$/,
                e.languages.xquery.tag.inside["attr-value"].inside.expression = {
                    pattern: /\{(?!\{)(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}/,
                    inside: e.languages.xquery,
                    alias: "language-xquery"
                };
                var t = function e(t) {
                    return "string" === typeof t ? t : "string" === typeof t.content ? t.content : t.content.map(e).join("")
                }
                  , n = function n(a) {
                    for (var r = [], i = 0; i < a.length; i++) {
                        var o = a[i]
                          , s = !1;
                        if ("string" !== typeof o && ("tag" === o.type && o.content[0] && "tag" === o.content[0].type ? "</" === o.content[0].content[0].content ? r.length > 0 && r[r.length - 1].tagName === t(o.content[0].content[1]) && r.pop() : "/>" === o.content[o.content.length - 1].content || r.push({
                            tagName: t(o.content[0].content[1]),
                            openedBraces: 0
                        }) : !(r.length > 0 && "punctuation" === o.type && "{" === o.content) || a[i + 1] && "punctuation" === a[i + 1].type && "{" === a[i + 1].content || a[i - 1] && "plain-text" === a[i - 1].type && "{" === a[i - 1].content ? r.length > 0 && r[r.length - 1].openedBraces > 0 && "punctuation" === o.type && "}" === o.content ? r[r.length - 1].openedBraces-- : "comment" !== o.type && (s = !0) : r[r.length - 1].openedBraces++),
                        (s || "string" === typeof o) && r.length > 0 && 0 === r[r.length - 1].openedBraces) {
                            var l = t(o);
                            i < a.length - 1 && ("string" === typeof a[i + 1] || "plain-text" === a[i + 1].type) && (l += t(a[i + 1]),
                            a.splice(i + 1, 1)),
                            i > 0 && ("string" === typeof a[i - 1] || "plain-text" === a[i - 1].type) && (l = t(a[i - 1]) + l,
                            a.splice(i - 1, 1),
                            i--),
                            /^\s+$/.test(l) ? a[i] = l : a[i] = new e.Token("plain-text",l,null,l)
                        }
                        o.content && "string" !== typeof o.content && n(o.content)
                    }
                };
                e.hooks.add("after-tokenize", (function(e) {
                    "xquery" === e.language && n(e.tokens)
                }
                ))
            }(e)
        }
        e.exports = a,
        a.displayName = "xquery",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            e.languages.yang = {
                comment: /\/\*[\s\S]*?\*\/|\/\/.*/,
                string: {
                    pattern: /"(?:[^\\"]|\\.)*"|'[^']*'/,
                    greedy: !0
                },
                keyword: {
                    pattern: /(^|[{};\r\n][ \t]*)[a-z_][\w.-]*/i,
                    lookbehind: !0
                },
                namespace: {
                    pattern: /(\s)[a-z_][\w.-]*(?=:)/i,
                    lookbehind: !0
                },
                boolean: /\b(?:false|true)\b/,
                operator: /\+/,
                punctuation: /[{};:]/
            }
        }
        e.exports = a,
        a.displayName = "yang",
        a.aliases = []
    }
    , function(e, t, n) {
        "use strict";
        function a(e) {
            !function(e) {
                function t(e) {
                    return function() {
                        return e
                    }
                }
                var n = /\b(?:align|allowzero|and|asm|async|await|break|cancel|catch|comptime|const|continue|defer|else|enum|errdefer|error|export|extern|fn|for|if|inline|linksection|nakedcc|noalias|null|or|orelse|packed|promise|pub|resume|return|stdcallcc|struct|suspend|switch|test|threadlocal|try|undefined|union|unreachable|usingnamespace|var|volatile|while)\b/
                  , a = "\\b(?!" + n.source + ")(?!\\d)\\w+\\b"
                  , r = /align\s*\((?:[^()]|\([^()]*\))*\)/.source
                  , i = "(?!\\s)(?:!?\\s*(?:" + /(?:\?|\bpromise->|(?:\[[^[\]]*\]|\*(?!\*)|\*\*)(?:\s*<ALIGN>|\s*const\b|\s*volatile\b|\s*allowzero\b)*)/.source.replace(/<ALIGN>/g, t(r)) + "\\s*)*" + /(?:\bpromise\b|(?:\berror\.)?<ID>(?:\.<ID>)*(?!\s+<ID>))/.source.replace(/<ID>/g, t(a)) + ")+";
                e.languages.zig = {
                    comment: [{
                        pattern: /\/{3}.*/,
                        alias: "doc-comment"
                    }, /\/{2}.*/],
                    string: [{
                        pattern: /(^|[^\\@])c?"(?:[^"\\\r\n]|\\.)*"/,
                        lookbehind: !0,
                        greedy: !0
                    }, {
                        pattern: /([\r\n])([ \t]+c?\\{2}).*(?:(?:\r\n?|\n)\2.*)*/,
                        lookbehind: !0,
                        greedy: !0
                    }, {
                        pattern: /(^|[^\\])'(?:[^'\\\r\n]|\\(?:.|x[a-fA-F\d]{2}|u\{[a-fA-F\d]{1,6}\}))'/,
                        lookbehind: !0,
                        greedy: !0
                    }],
                    builtin: /\B@(?!\d)\w+(?=\s*\()/,
                    label: {
                        pattern: /(\b(?:break|continue)\s*:\s*)\w+\b|\b(?!\d)\w+\b(?=\s*:\s*(?:\{|while\b))/,
                        lookbehind: !0
                    },
                    "class-name": [/\b(?!\d)\w+(?=\s*=\s*(?:(?:extern|packed)\s+)?(?:enum|struct|union)\s*[({])/, {
                        pattern: RegExp(/(:\s*)<TYPE>(?=\s*(?:<ALIGN>\s*)?[=;,)])|<TYPE>(?=\s*(?:<ALIGN>\s*)?\{)/.source.replace(/<TYPE>/g, t(i)).replace(/<ALIGN>/g, t(r))),
                        lookbehind: !0,
                        inside: null
                    }, {
                        pattern: RegExp(/(\)\s*)<TYPE>(?=\s*(?:<ALIGN>\s*)?;)/.source.replace(/<TYPE>/g, t(i)).replace(/<ALIGN>/g, t(r))),
                        lookbehind: !0,
                        inside: null
                    }],
                    "builtin-types": {
                        pattern: /\b(?:anyerror|bool|c_u?(?:short|int|long|longlong)|c_longdouble|c_void|comptime_(?:float|int)|[iu](?:8|16|32|64|128|size)|f(?:16|32|64|128)|noreturn|type|void)\b/,
                        alias: "keyword"
                    },
                    keyword: n,
                    function: /\b(?!\d)\w+(?=\s*\()/,
                    number: /\b(?:0b[01]+|0o[0-7]+|0x[a-fA-F\d]+(?:\.[a-fA-F\d]*)?(?:[pP][+-]?[a-fA-F\d]+)?|\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)\b/,
                    boolean: /\b(?:false|true)\b/,
                    operator: /\.[*?]|\.{2,3}|[-=]>|\*\*|\+\+|\|\||(?:<<|>>|[-+*]%|[-+*/%^&|<>!=])=?|[?~]/,
                    punctuation: /[.:,;(){}[\]]/
                },
                e.languages.zig["class-name"].forEach((function(t) {
                    null === t.inside && (t.inside = e.languages.zig)
                }
                ))
            }(e)
        }
        e.exports = a,
        a.displayName = "zig",
        a.aliases = []
    }
    , function(e, t, n) {
        var a = n(632);
        e.exports = function(e, t) {
            if (null == e)
                return {};
            var n, r, i = a(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++)
                    n = o[r],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
            }
            return i
        }
    }
    , function(e, t) {
        e.exports = function(e, t) {
            if (null == e)
                return {};
            var n, a, r = {}, i = Object.keys(e);
            for (a = 0; a < i.length; a++)
                n = i[a],
                t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r
        }
    }
    , function(e, t) {
        e.exports = function(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
    }
    , function(e, t) {
        function n() {
            return e.exports = n = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n)
                        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }
            ,
            n.apply(this, arguments)
        }
        e.exports = n
    }
    , , , , , , , , , , , , , , , , , , function(e, t, n) {
        "use strict";
        var a = n(631)
          , r = n.n(a)
          , i = n(236)
          , o = n.n(i)
          , s = n(249)
          , l = n.n(s)
          , c = n(0)
          , u = n.n(c)
          , d = n(634)
          , p = n.n(d);
        var g = {};
        function m(e) {
            if (0 === e.length || 1 === e.length)
                return e;
            var t = e.join(".");
            return g[t] || (g[t] = function(e) {
                var t = e.length;
                return 0 === t || 1 === t ? e : 2 === t ? [e[0], e[1], "".concat(e[0], ".").concat(e[1]), "".concat(e[1], ".").concat(e[0])] : 3 === t ? [e[0], e[1], e[2], "".concat(e[0], ".").concat(e[1]), "".concat(e[0], ".").concat(e[2]), "".concat(e[1], ".").concat(e[0]), "".concat(e[1], ".").concat(e[2]), "".concat(e[2], ".").concat(e[0]), "".concat(e[2], ".").concat(e[1]), "".concat(e[0], ".").concat(e[1], ".").concat(e[2]), "".concat(e[0], ".").concat(e[2], ".").concat(e[1]), "".concat(e[1], ".").concat(e[0], ".").concat(e[2]), "".concat(e[1], ".").concat(e[2], ".").concat(e[0]), "".concat(e[2], ".").concat(e[0], ".").concat(e[1]), "".concat(e[2], ".").concat(e[1], ".").concat(e[0])] : t >= 4 ? [e[0], e[1], e[2], e[3], "".concat(e[0], ".").concat(e[1]), "".concat(e[0], ".").concat(e[2]), "".concat(e[0], ".").concat(e[3]), "".concat(e[1], ".").concat(e[0]), "".concat(e[1], ".").concat(e[2]), "".concat(e[1], ".").concat(e[3]), "".concat(e[2], ".").concat(e[0]), "".concat(e[2], ".").concat(e[1]), "".concat(e[2], ".").concat(e[3]), "".concat(e[3], ".").concat(e[0]), "".concat(e[3], ".").concat(e[1]), "".concat(e[3], ".").concat(e[2]), "".concat(e[0], ".").concat(e[1], ".").concat(e[2]), "".concat(e[0], ".").concat(e[1], ".").concat(e[3]), "".concat(e[0], ".").concat(e[2], ".").concat(e[1]), "".concat(e[0], ".").concat(e[2], ".").concat(e[3]), "".concat(e[0], ".").concat(e[3], ".").concat(e[1]), "".concat(e[0], ".").concat(e[3], ".").concat(e[2]), "".concat(e[1], ".").concat(e[0], ".").concat(e[2]), "".concat(e[1], ".").concat(e[0], ".").concat(e[3]), "".concat(e[1], ".").concat(e[2], ".").concat(e[0]), "".concat(e[1], ".").concat(e[2], ".").concat(e[3]), "".concat(e[1], ".").concat(e[3], ".").concat(e[0]), "".concat(e[1], ".").concat(e[3], ".").concat(e[2]), "".concat(e[2], ".").concat(e[0], ".").concat(e[1]), "".concat(e[2], ".").concat(e[0], ".").concat(e[3]), "".concat(e[2], ".").concat(e[1], ".").concat(e[0]), "".concat(e[2], ".").concat(e[1], ".").concat(e[3]), "".concat(e[2], ".").concat(e[3], ".").concat(e[0]), "".concat(e[2], ".").concat(e[3], ".").concat(e[1]), "".concat(e[3], ".").concat(e[0], ".").concat(e[1]), "".concat(e[3], ".").concat(e[0], ".").concat(e[2]), "".concat(e[3], ".").concat(e[1], ".").concat(e[0]), "".concat(e[3], ".").concat(e[1], ".").concat(e[2]), "".concat(e[3], ".").concat(e[2], ".").concat(e[0]), "".concat(e[3], ".").concat(e[2], ".").concat(e[1]), "".concat(e[0], ".").concat(e[1], ".").concat(e[2], ".").concat(e[3]), "".concat(e[0], ".").concat(e[1], ".").concat(e[3], ".").concat(e[2]), "".concat(e[0], ".").concat(e[2], ".").concat(e[1], ".").concat(e[3]), "".concat(e[0], ".").concat(e[2], ".").concat(e[3], ".").concat(e[1]), "".concat(e[0], ".").concat(e[3], ".").concat(e[1], ".").concat(e[2]), "".concat(e[0], ".").concat(e[3], ".").concat(e[2], ".").concat(e[1]), "".concat(e[1], ".").concat(e[0], ".").concat(e[2], ".").concat(e[3]), "".concat(e[1], ".").concat(e[0], ".").concat(e[3], ".").concat(e[2]), "".concat(e[1], ".").concat(e[2], ".").concat(e[0], ".").concat(e[3]), "".concat(e[1], ".").concat(e[2], ".").concat(e[3], ".").concat(e[0]), "".concat(e[1], ".").concat(e[3], ".").concat(e[0], ".").concat(e[2]), "".concat(e[1], ".").concat(e[3], ".").concat(e[2], ".").concat(e[0]), "".concat(e[2], ".").concat(e[0], ".").concat(e[1], ".").concat(e[3]), "".concat(e[2], ".").concat(e[0], ".").concat(e[3], ".").concat(e[1]), "".concat(e[2], ".").concat(e[1], ".").concat(e[0], ".").concat(e[3]), "".concat(e[2], ".").concat(e[1], ".").concat(e[3], ".").concat(e[0]), "".concat(e[2], ".").concat(e[3], ".").concat(e[0], ".").concat(e[1]), "".concat(e[2], ".").concat(e[3], ".").concat(e[1], ".").concat(e[0]), "".concat(e[3], ".").concat(e[0], ".").concat(e[1], ".").concat(e[2]), "".concat(e[3], ".").concat(e[0], ".").concat(e[2], ".").concat(e[1]), "".concat(e[3], ".").concat(e[1], ".").concat(e[0], ".").concat(e[2]), "".concat(e[3], ".").concat(e[1], ".").concat(e[2], ".").concat(e[0]), "".concat(e[3], ".").concat(e[2], ".").concat(e[0], ".").concat(e[1]), "".concat(e[3], ".").concat(e[2], ".").concat(e[1], ".").concat(e[0])] : void 0
            }(e)),
            g[t]
        }
        function b(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = arguments.length > 2 ? arguments[2] : void 0
              , a = e.filter((function(e) {
                return "token" !== e
            }
            ))
              , r = m(a);
            return r.reduce((function(e, t) {
                return l()({}, e, n[t])
            }
            ), t)
        }
        function f(e) {
            return e.join(" ")
        }
        function E(e) {
            var t = e.node
              , n = e.stylesheet
              , a = e.style
              , r = void 0 === a ? {} : a
              , i = e.useInlineStyles
              , o = e.key
              , s = t.properties
              , c = t.type
              , d = t.tagName
              , g = t.value;
            if ("text" === c)
                return g;
            if (d) {
                var m, h = function(e, t) {
                    var n = 0;
                    return function(a) {
                        return n += 1,
                        a.map((function(a, r) {
                            return E({
                                node: a,
                                stylesheet: e,
                                useInlineStyles: t,
                                key: "code-segment-".concat(n, "-").concat(r)
                            })
                        }
                        ))
                    }
                }(n, i);
                if (i) {
                    var S = Object.keys(n).reduce((function(e, t) {
                        return t.split(".").forEach((function(t) {
                            e.includes(t) || e.push(t)
                        }
                        )),
                        e
                    }
                    ), [])
                      , y = s.className && s.className.includes("token") ? ["token"] : []
                      , T = s.className && y.concat(s.className.filter((function(e) {
                        return !S.includes(e)
                    }
                    )));
                    m = l()({}, s, {
                        className: f(T) || void 0,
                        style: b(s.className, Object.assign({}, s.style, r), n)
                    })
                } else
                    m = l()({}, s, {
                        className: f(s.className)
                    });
                var A = h(t.children);
                return u.a.createElement(d, p()({
                    key: o
                }, m), A)
            }
        }
        var h = /\n/g;
        function S(e) {
            var t = e.codeString
              , n = e.codeStyle
              , a = e.containerStyle
              , r = void 0 === a ? {
                float: "left",
                paddingRight: "10px"
            } : a
              , i = e.numberStyle
              , o = void 0 === i ? {} : i
              , s = e.startingLineNumber;
            return u.a.createElement("code", {
                style: Object.assign({}, n, r)
            }, function(e) {
                var t = e.lines
                  , n = e.startingLineNumber
                  , a = e.style;
                return t.map((function(e, t) {
                    var r = t + n;
                    return u.a.createElement("span", {
                        key: "line-".concat(t),
                        className: "react-syntax-highlighter-line-number",
                        style: "function" === typeof a ? a(r) : a
                    }, "".concat(r, "\n"))
                }
                ))
            }({
                lines: t.replace(/\n$/, "").split("\n"),
                style: o,
                startingLineNumber: s
            }))
        }
        function y(e, t) {
            return {
                type: "element",
                tagName: "span",
                properties: {
                    key: "line-number--".concat(e),
                    className: ["comment", "linenumber", "react-syntax-highlighter-line-number"],
                    style: t
                },
                children: [{
                    type: "text",
                    value: e
                }]
            }
        }
        function T(e, t, n) {
            var a, r = {
                display: "inline-block",
                minWidth: (a = n,
                "".concat(a.toString().length, ".25em")),
                paddingRight: "1em",
                textAlign: "right",
                userSelect: "none"
            }, i = "function" === typeof e ? e(t) : e;
            return l()({}, r, i)
        }
        function A(e) {
            var t = e.children
              , n = e.lineNumber
              , a = e.lineNumberStyle
              , r = e.largestLineNumber
              , i = e.showInlineLineNumbers
              , o = e.lineProps
              , s = void 0 === o ? {} : o
              , c = e.className
              , u = void 0 === c ? [] : c
              , d = e.showLineNumbers
              , p = e.wrapLongLines
              , g = "function" === typeof s ? s(n) : s;
            if (g.className = u,
            n && i) {
                var m = T(a, n, r);
                t.unshift(y(n, m))
            }
            return p & d && (g.style = l()({}, g.style, {
                display: "flex"
            })),
            {
                type: "element",
                tagName: "span",
                properties: g,
                children: t
            }
        }
        function R(e) {
            for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [], a = 0; a < e.length; a++) {
                var r = e[a];
                if ("text" === r.type)
                    n.push(A({
                        children: [r],
                        className: o()(new Set(t))
                    }));
                else if (r.children) {
                    var i = t.concat(r.properties.className);
                    n = n.concat(R(r.children, i))
                }
            }
            return n
        }
        function I(e, t, n, a, r, i, o, s, l) {
            var c, u = R(e.value), d = [], p = -1, g = 0;
            function m(e, t) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                return A({
                    children: e,
                    lineNumber: t,
                    lineNumberStyle: s,
                    largestLineNumber: o,
                    showInlineLineNumbers: r,
                    lineProps: n,
                    className: i,
                    showLineNumbers: a,
                    wrapLongLines: l
                })
            }
            function b(e, t) {
                if (a && t && r) {
                    var n = T(s, t, o);
                    e.unshift(y(t, n))
                }
                return e
            }
            function f(e, n) {
                var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                return t || a.length > 0 ? m(e, n, a) : b(e, n)
            }
            for (var E = function() {
                var e = u[g]
                  , t = e.children[0].value;
                if (t.match(h)) {
                    var n = t.split("\n");
                    n.forEach((function(t, r) {
                        var o = a && d.length + i
                          , s = {
                            type: "text",
                            value: "".concat(t, "\n")
                        };
                        if (0 === r) {
                            var l = f(u.slice(p + 1, g).concat(A({
                                children: [s],
                                className: e.properties.className
                            })), o);
                            d.push(l)
                        } else if (r === n.length - 1) {
                            if (u[g + 1] && u[g + 1].children && u[g + 1].children[0]) {
                                var c = A({
                                    children: [{
                                        type: "text",
                                        value: "".concat(t)
                                    }],
                                    className: e.properties.className
                                });
                                u.splice(g + 1, 0, c)
                            } else {
                                var m = f([s], o, e.properties.className);
                                d.push(m)
                            }
                        } else {
                            var b = f([s], o, e.properties.className);
                            d.push(b)
                        }
                    }
                    )),
                    p = g
                }
                g++
            }; g < u.length; )
                E();
            if (p !== u.length - 1) {
                var S = u.slice(p + 1, u.length);
                if (S && S.length) {
                    var I = f(S, a && d.length + i);
                    d.push(I)
                }
            }
            return t ? d : (c = []).concat.apply(c, d)
        }
        function N(e) {
            var t = e.rows
              , n = e.stylesheet
              , a = e.useInlineStyles;
            return t.map((function(e, t) {
                return E({
                    node: e,
                    stylesheet: n,
                    useInlineStyles: a,
                    key: "code-segement".concat(t)
                })
            }
            ))
        }
        function _(e) {
            return e && "undefined" !== typeof e.highlightAuto
        }
        var v, w, O = n(381), C = (v = n.n(O).a,
        w = {
            'code[class*="language-"]': {
                color: "black",
                background: "none",
                textShadow: "0 1px white",
                fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
                fontSize: "1em",
                textAlign: "left",
                whiteSpace: "pre",
                wordSpacing: "normal",
                wordBreak: "normal",
                wordWrap: "normal",
                lineHeight: "1.5",
                MozTabSize: "4",
                OTabSize: "4",
                tabSize: "4",
                WebkitHyphens: "none",
                MozHyphens: "none",
                msHyphens: "none",
                hyphens: "none"
            },
            'pre[class*="language-"]': {
                color: "black",
                background: "#f5f2f0",
                textShadow: "0 1px white",
                fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
                fontSize: "1em",
                textAlign: "left",
                whiteSpace: "pre",
                wordSpacing: "normal",
                wordBreak: "normal",
                wordWrap: "normal",
                lineHeight: "1.5",
                MozTabSize: "4",
                OTabSize: "4",
                tabSize: "4",
                WebkitHyphens: "none",
                MozHyphens: "none",
                msHyphens: "none",
                hyphens: "none",
                padding: "1em",
                margin: ".5em 0",
                overflow: "auto"
            },
            'pre[class*="language-"]::-moz-selection': {
                textShadow: "none",
                background: "#b3d4fc"
            },
            'pre[class*="language-"] ::-moz-selection': {
                textShadow: "none",
                background: "#b3d4fc"
            },
            'code[class*="language-"]::-moz-selection': {
                textShadow: "none",
                background: "#b3d4fc"
            },
            'code[class*="language-"] ::-moz-selection': {
                textShadow: "none",
                background: "#b3d4fc"
            },
            'pre[class*="language-"]::selection': {
                textShadow: "none",
                background: "#b3d4fc"
            },
            'pre[class*="language-"] ::selection': {
                textShadow: "none",
                background: "#b3d4fc"
            },
            'code[class*="language-"]::selection': {
                textShadow: "none",
                background: "#b3d4fc"
            },
            'code[class*="language-"] ::selection': {
                textShadow: "none",
                background: "#b3d4fc"
            },
            ':not(pre) > code[class*="language-"]': {
                background: "#f5f2f0",
                padding: ".1em",
                borderRadius: ".3em",
                whiteSpace: "normal"
            },
            comment: {
                color: "slategray"
            },
            prolog: {
                color: "slategray"
            },
            doctype: {
                color: "slategray"
            },
            cdata: {
                color: "slategray"
            },
            punctuation: {
                color: "#999"
            },
            namespace: {
                Opacity: ".7"
            },
            property: {
                color: "#905"
            },
            tag: {
                color: "#905"
            },
            boolean: {
                color: "#905"
            },
            number: {
                color: "#905"
            },
            constant: {
                color: "#905"
            },
            symbol: {
                color: "#905"
            },
            deleted: {
                color: "#905"
            },
            selector: {
                color: "#690"
            },
            "attr-name": {
                color: "#690"
            },
            string: {
                color: "#690"
            },
            char: {
                color: "#690"
            },
            builtin: {
                color: "#690"
            },
            inserted: {
                color: "#690"
            },
            operator: {
                color: "#9a6e3a",
                background: "hsla(0, 0%, 100%, .5)"
            },
            entity: {
                color: "#9a6e3a",
                background: "hsla(0, 0%, 100%, .5)",
                cursor: "help"
            },
            url: {
                color: "#9a6e3a",
                background: "hsla(0, 0%, 100%, .5)"
            },
            ".language-css .token.string": {
                color: "#9a6e3a",
                background: "hsla(0, 0%, 100%, .5)"
            },
            ".style .token.string": {
                color: "#9a6e3a",
                background: "hsla(0, 0%, 100%, .5)"
            },
            atrule: {
                color: "#07a"
            },
            "attr-value": {
                color: "#07a"
            },
            keyword: {
                color: "#07a"
            },
            function: {
                color: "#DD4A68"
            },
            "class-name": {
                color: "#DD4A68"
            },
            regex: {
                color: "#e90"
            },
            important: {
                color: "#e90",
                fontWeight: "bold"
            },
            variable: {
                color: "#e90"
            },
            bold: {
                fontWeight: "bold"
            },
            italic: {
                fontStyle: "italic"
            }
        },
        function(e) {
            var t = e.language
              , n = e.children
              , a = e.style
              , i = void 0 === a ? w : a
              , o = e.customStyle
              , s = void 0 === o ? {} : o
              , c = e.codeTagProps
              , d = void 0 === c ? {
                className: t ? "language-".concat(t) : void 0,
                style: l()({}, i['code[class*="language-"]'], i['code[class*="language-'.concat(t, '"]')])
            } : c
              , p = e.useInlineStyles
              , g = void 0 === p || p
              , m = e.showLineNumbers
              , b = void 0 !== m && m
              , f = e.showInlineLineNumbers
              , E = void 0 === f || f
              , h = e.startingLineNumber
              , y = void 0 === h ? 1 : h
              , T = e.lineNumberContainerStyle
              , A = e.lineNumberStyle
              , R = void 0 === A ? {} : A
              , O = e.wrapLines
              , C = e.wrapLongLines
              , k = void 0 !== C && C
              , L = e.lineProps
              , x = void 0 === L ? {} : L
              , D = e.renderer
              , P = e.PreTag
              , M = void 0 === P ? "pre" : P
              , F = e.CodeTag
              , U = void 0 === F ? "code" : F
              , B = e.code
              , G = void 0 === B ? Array.isArray(n) ? n[0] : n : B
              , $ = e.astGenerator
              , H = r()(e, ["language", "children", "style", "customStyle", "codeTagProps", "useInlineStyles", "showLineNumbers", "showInlineLineNumbers", "startingLineNumber", "lineNumberContainerStyle", "lineNumberStyle", "wrapLines", "wrapLongLines", "lineProps", "renderer", "PreTag", "CodeTag", "code", "astGenerator"]);
            $ = $ || v;
            var z = b ? u.a.createElement(S, {
                containerStyle: T,
                codeStyle: d.style || {},
                numberStyle: R,
                startingLineNumber: y,
                codeString: G
            }) : null
              , V = i.hljs || i['pre[class*="language-"]'] || {
                backgroundColor: "#fff"
            }
              , j = _($) ? "hljs" : "prismjs"
              , W = g ? Object.assign({}, H, {
                style: Object.assign({}, V, s)
            }) : Object.assign({}, H, {
                className: H.className ? "".concat(j, " ").concat(H.className) : j,
                style: Object.assign({}, s)
            });
            if (!$)
                return u.a.createElement(M, W, z, u.a.createElement(U, d, G));
            (void 0 === O && D || k) && (O = !0),
            D = D || N;
            var q = [{
                type: "text",
                value: G
            }]
              , Y = function(e) {
                var t = e.astGenerator
                  , n = e.language
                  , a = e.code
                  , r = e.defaultCodeValue;
                if (_(t)) {
                    var i = function(e, t) {
                        return -1 !== e.listLanguages().indexOf(t)
                    }(t, n);
                    return "text" === n ? {
                        value: r,
                        language: "text"
                    } : i ? t.highlight(n, a) : t.highlightAuto(a)
                }
                try {
                    return n && "text" !== n ? {
                        value: t.highlight(a, n)
                    } : {
                        value: r
                    }
                } catch (o) {
                    return {
                        value: r
                    }
                }
            }({
                astGenerator: $,
                language: t,
                code: G,
                defaultCodeValue: q
            });
            null === Y.language && (Y.value = q);
            var K = I(Y, O, x, b, E, y, Y.value.length + y, R, k);
            return d.style = k ? l()({}, d.style, {
                whiteSpace: "pre-wrap"
            }) : l()({}, d.style, {
                whiteSpace: "pre"
            }),
            u.a.createElement(M, W, u.a.createElement(U, d, !E && z, D({
                rows: K,
                stylesheet: i,
                useInlineStyles: g
            })))
        }
        );
        C.supportedLanguages = ["abap", "abnf", "actionscript", "ada", "agda", "al", "antlr4", "apacheconf", "apl", "applescript", "aql", "arduino", "arff", "asciidoc", "asm6502", "aspnet", "autohotkey", "autoit", "bash", "basic", "batch", "bbcode", "birb", "bison", "bnf", "brainfuck", "brightscript", "bro", "bsl", "c", "cil", "clike", "clojure", "cmake", "coffeescript", "concurnas", "cpp", "crystal", "csharp", "csp", "css-extras", "css", "cypher", "d", "dart", "dax", "dhall", "diff", "django", "dns-zone-file", "docker", "ebnf", "editorconfig", "eiffel", "ejs", "elixir", "elm", "erb", "erlang", "etlua", "excel-formula", "factor", "firestore-security-rules", "flow", "fortran", "fsharp", "ftl", "gcode", "gdscript", "gedcom", "gherkin", "git", "glsl", "gml", "go", "graphql", "groovy", "haml", "handlebars", "haskell", "haxe", "hcl", "hlsl", "hpkp", "hsts", "http", "ichigojam", "icon", "iecst", "ignore", "inform7", "ini", "io", "j", "java", "javadoc", "javadoclike", "javascript", "javastacktrace", "jolie", "jq", "js-extras", "js-templates", "jsdoc", "json", "json5", "jsonp", "jsstacktrace", "jsx", "julia", "keyman", "kotlin", "latex", "latte", "less", "lilypond", "liquid", "lisp", "livescript", "llvm", "lolcode", "lua", "makefile", "markdown", "markup-templating", "markup", "matlab", "mel", "mizar", "mongodb", "monkey", "moonscript", "n1ql", "n4js", "nand2tetris-hdl", "naniscript", "nasm", "neon", "nginx", "nim", "nix", "nsis", "objectivec", "ocaml", "opencl", "oz", "parigp", "parser", "pascal", "pascaligo", "pcaxis", "peoplecode", "perl", "php-extras", "php", "phpdoc", "plsql", "powerquery", "powershell", "processing", "prolog", "properties", "protobuf", "pug", "puppet", "pure", "purebasic", "purescript", "python", "q", "qml", "qore", "r", "racket", "reason", "regex", "renpy", "rest", "rip", "roboconf", "robotframework", "ruby", "rust", "sas", "sass", "scala", "scheme", "scss", "shell-session", "smali", "smalltalk", "smarty", "sml", "solidity", "solution-file", "soy", "sparql", "splunk-spl", "sqf", "sql", "stan", "stylus", "swift", "t4-cs", "t4-templating", "t4-vb", "tap", "tcl", "textile", "toml", "tsx", "tt2", "turtle", "twig", "typescript", "typoscript", "unrealscript", "vala", "vbnet", "velocity", "verilog", "vhdl", "vim", "visual-basic", "warpscript", "wasm", "wiki", "xeora", "xml-doc", "xojo", "xquery", "yaml", "yang", "zig"];
        t.a = C
    }
    ])]);
    