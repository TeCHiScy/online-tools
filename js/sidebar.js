(function () {
  var menuData = [
    {
      title: "Hash",
      groups: [
        { summary: "CRC", items: [{ href: "/crc/", text: "CRC" }] },
        {
          summary: "MD",
          items: [
            { href: "/md2.html", text: "MD2" },
            { href: "/md2_file_hash.html", text: "MD2 File" },
            { href: "/md4.html", text: "MD4" },
            { href: "/md4_file_hash.html", text: "MD4 File" },
            { href: "/md5.html", text: "MD5" },
            { href: "/md5_checksum.html", text: "MD5 File" },
          ],
        },
        {
          summary: "SHA1",
          items: [
            { href: "/sha1.html", text: "SHA1" },
            { href: "/sha1_checksum.html", text: "SHA1 File" },
          ],
        },
        {
          summary: "SHA2",
          items: [
            { href: "/sha224.html", text: "SHA224" },
            { href: "/sha224_checksum.html", text: "SHA224 File" },
            { href: "/sha256.html", text: "SHA256" },
            { href: "/sha256_checksum.html", text: "SHA256 File" },
            { href: "/double_sha256.html", text: "Double SHA256" },
          ],
        },
        {
          summary: "SHA2-512",
          items: [
            { href: "/sha384.html", text: "SHA384" },
            { href: "/sha384_file_hash.html", text: "SHA384 File" },
            { href: "/sha512.html", text: "SHA512" },
            { href: "/sha512_file_hash.html", text: "SHA512 File" },
            { href: "/sha512_224.html", text: "SHA512/224" },
            { href: "/sha512_224_file_hash.html", text: "SHA512/224 File" },
            { href: "/sha512_256.html", text: "SHA512/256" },
            { href: "/sha512_256_file_hash.html", text: "SHA512/256 File" },
          ],
        },
        {
          summary: "SHA3",
          items: [
            { href: "/sha3_224.html", text: "SHA3-224" },
            { href: "/sha3_224_checksum.html", text: "SHA3-224 File" },
            { href: "/sha3_256.html", text: "SHA3-256" },
            { href: "/sha3_256_checksum.html", text: "SHA3-256 File" },
            { href: "/sha3_384.html", text: "SHA3-384" },
            { href: "/sha3_384_checksum.html", text: "SHA3-384 File" },
            { href: "/sha3_512.html", text: "SHA3-512" },
            { href: "/sha3_512_checksum.html", text: "SHA3-512 File" },
          ],
        },
        {
          summary: "Keccak",
          items: [
            { href: "/keccak_224.html", text: "Keccak-224" },
            { href: "/keccak_224_checksum.html", text: "Keccak-224 File" },
            { href: "/keccak_256.html", text: "Keccak-256" },
            { href: "/keccak_256_checksum.html", text: "Keccak-256 File" },
            { href: "/keccak_384.html", text: "Keccak-384" },
            { href: "/keccak_384_checksum.html", text: "Keccak-384 File" },
            { href: "/keccak_512.html", text: "Keccak-512" },
            { href: "/keccak_512_checksum.html", text: "Keccak-512 File" },
          ],
        },
        {
          summary: "SHAKE",
          items: [
            { href: "/shake128/", text: "SHAKE128" },
            { href: "/shake128/file/", text: "SHAKE128 File" },
            { href: "/shake256/", text: "SHAKE256" },
            { href: "/shake256/file/", text: "SHAKE256 File" },
          ],
        },
        {
          summary: "cSHAKE",
          items: [
            { href: "/cshake128/", text: "cSHAKE128" },
            { href: "/cshake128/file/", text: "cSHAKE128 File" },
            { href: "/cshake256/", text: "cSHAKE256" },
            { href: "/cshake256/file/", text: "cSHAKE256 File" },
          ],
        },
        {
          summary: "KMAC",
          items: [
            { href: "/kmac128/", text: "KMAC128" },
            { href: "/kmac128/file/", text: "KMAC128 File" },
            { href: "/kmac256/", text: "KMAC256" },
            { href: "/kmac256/file/", text: "KMAC256 File" },
          ],
        },
        {
          summary: "RIPEMD",
          items: [
            { href: "/ripemd-128/", text: "RIPEMD-128" },
            { href: "/ripemd-128/file/", text: "RIPEMD-128 File" },
            { href: "/ripemd-160/", text: "RIPEMD-160" },
            { href: "/ripemd-160/file/", text: "RIPEMD-160 File" },
            { href: "/ripemd-256/", text: "RIPEMD-256" },
            { href: "/ripemd-256/file/", text: "RIPEMD-256 File" },
            { href: "/ripemd-320/", text: "RIPEMD-320" },
            { href: "/ripemd-320/file/", text: "RIPEMD-320 File" },
          ],
        },
        {
          summary: "BLAKE",
          items: [
            { href: "/blake2b/", text: "BLAKE2b" },
            { href: "/blake2b/file/", text: "BLAKE2b File" },
            { href: "/blake2s/", text: "BLAKE2s" },
            { href: "/blake2s/file/", text: "BLAKE2s File" },
            { href: "/blake3/", text: "BLAKE3" },
            { href: "/blake3/file/", text: "BLAKE3 File" },
          ],
        },
      ],
    },
    {
      title: "Cryptography",
      groups: [
        {
          summary: "AES",
          items: [
            { href: "/aes/encrypt/", text: "Encryption" },
            { href: "/aes/decrypt/", text: "Decryption" },
          ],
        },
        {
          summary: "DES",
          items: [
            { href: "/des/encrypt/", text: "Encryption" },
            { href: "/des/decrypt/", text: "Decryption" },
          ],
        },
        {
          summary: "Triple DES",
          items: [
            { href: "/triple-des/encrypt/", text: "Encryption" },
            { href: "/triple-des/decrypt/", text: "Decryption" },
          ],
        },
        {
          summary: "RC4",
          items: [
            { href: "/rc4/encrypt/", text: "Encryption" },
            { href: "/rc4/decrypt/", text: "Decryption" },
          ],
        },
        {
          summary: "ECDSA",
          items: [
            { href: "/ecdsa/key-generator/", text: "Key Generator" },
            { href: "/ecdsa/sign/", text: "Sign Message" },
            { href: "/ecdsa/verify/", text: "Verify Signature" },
          ],
        },
        {
          summary: "RSA",
          items: [
            { href: "/rsa/key-generator/", text: "Key Generator" },
            { href: "/rsa/sign/", text: "Sign Message" },
            { href: "/rsa/verify/", text: "Verify Signature" },
            { href: "/rsa/encrypt/", text: "Encryption" },
            { href: "/rsa/decrypt/", text: "Decryption" },
          ],
        },
      ],
    },
    {
      title: "Encoding",
      groups: [
        {
          summary: "Hex (Base16)",
          items: [
            { href: "/hex_encode.html", text: "Encode" },
            { href: "/hex_decode.html", text: "Decode" },
            { href: "/hex_encode_file.html", text: "File to Hex" },
            { href: "/hex_decode_file.html", text: "Hex to File" },
          ],
        },
        {
          summary: "Base32",
          items: [
            { href: "/base32_encode.html", text: "Encode" },
            { href: "/base32_decode.html", text: "Decode" },
            { href: "/base32_encode_file.html", text: "File to Base32" },
            { href: "/base32_decode_file.html", text: "Base32 to File" },
          ],
        },
        {
          summary: "Base58",
          items: [
            { href: "/base58/encode/", text: "Encode" },
            { href: "/base58/decode/", text: "Decode" },
            { href: "/base58/encode/file/", text: "File to Base58" },
            { href: "/base58/decode/file/", text: "Base58 to File" },
          ],
        },
        {
          summary: "Base64",
          items: [
            { href: "/base64_encode.html", text: "Encode" },
            { href: "/base64_decode.html", text: "Decode" },
            { href: "/base64_encode_file.html", text: "File to Base64" },
            { href: "/base64_decode_file.html", text: "Base64 to File" },
          ],
        },
        {
          summary: "HTML",
          items: [
            { href: "/html_encode.html", text: "Encode" },
            { href: "/html_decode.html", text: "Decode" },
          ],
        },
        {
          summary: "URL",
          items: [
            { href: "/url_encode.html", text: "Encode" },
            { href: "/url_decode.html", text: "Decode" },
          ],
        },
      ],
    },
    {
      title: "Format",
      groups: [
        {
          summary: "JSON",
          items: [
            { href: "/json/validator/", text: "Validator" },
            { href: "/json/minifier/", text: "Minifier" },
            { href: "/json/formatter/", text: "Formatter" },
            { href: "/json/viewer/", text: "Viewer" },
          ],
        },
        {
          summary: "XML",
          items: [
            { href: "/xml/validator/", text: "Validator" },
            { href: "/xml/minifier/", text: "Minifier" },
            { href: "/xml/formatter/", text: "Formatter" },
          ],
        },
      ],
    },
    {
      title: "Convert",
      groups: [
        {
          summary: "Case",
          items: [
            { href: "/case/lower/", text: "lower case" },
            { href: "/case/upper/", text: "UPPER CASE" },
            { href: "/case/lower-camel/", text: "lowerCamelCase" },
            { href: "/case/upper-camel/", text: "UpperCamelCase" },
            { href: "/case/snake/", text: "snake_case" },
            { href: "/case/kebab/", text: "kebab-case" },
            { href: "/case/constant/", text: "CONSTANT_CASE" },
          ],
        },
      ],
    },
    {
      title: "Others",
      groups: [
        {
          summary: "Others",
          items: [
            { href: "/qr-code/generator/", text: "QR Code Generator" },
            { href: "/syntax-highlight/", text: "Syntax Highlight" },
          ],
        },
      ],
    },
    {
      title: "Links",
      groups: [],
      links: [
        { href: "/https://github.com/emn178/online-tools/issues", text: "Contact" },
      ],
    },
  ];

  function buildSections(data) {
    return data
      .map(function (section) {
        if (section.links) {
          var linkItems = section.links
            .map(function (l) {
              return "<li><a href=\"" + l.href + "\">" + l.text + "</a></li>";
            })
            .join("");
          return (
            '<div class="section"><h3>' +
            section.title +
            '</h3><nav class="links"><ol>' +
            linkItems +
            "</ol></nav></div>"
          );
        }
        var groups = section.groups
          .map(function (g) {
            var items = g.items
              .map(function (item) {
                return "<li><a href=\"" + item.href + "\">" + item.text + "</a></li>";
              })
              .join("");
            return (
              "<details><summary>" +
              g.summary +
              "</summary><nav><ol>" +
              items +
              "</ol></nav></details>"
            );
          })
          .join("");
        return '<div class="section"><h3>' + section.title + "</h3>" + groups + "</div>";
      })
      .join("");
  }

  var html =
    '<div id="sidebar"><div class="mask"></div><div class="container">' +
    "<header>" +
    '<a href="./"><img alt="Logo" height="18" src="/images/logo.svg" width="18" /><h2>Online Tools</h2></a>' +
    '<div class="toolbar">' +
    '<button class="icon theme">' +
    '<img alt="Dark mode" class="light" src="/images/light.svg" title="Dark mode" />' +
    '<img alt="Dark mode" class="dark" src="/images/dark.svg" title="Dark mode" />' +
    "</button></div></header>" +
    buildSections(menuData) +
    "</div></div>";

  var el = document.getElementById("sidebar");
  if (!el) return;
  el.outerHTML = html;

  // Auto-detect and mark active link based on current pathname
  var pathname = window.location.pathname.replace(/\/index\.html$/, "/");
  var bestMatch = null;
  var bestLen = 0;

  var matchedHref = null;
  menuData.forEach(function (section) {
    section.groups.forEach(function (group) {
      group.items.forEach(function (item) {
        var href = item.href.replace(/^\.\//, "");
        if (!href || href === "./") return;
        if (pathname === href || pathname === href.replace(/\.html$/, "") || (pathname + "index.html") === href || pathname === href.replace(/\/index\.html$/, "/")) {
          if (href.length > bestLen) {
            matchedHref = href;
            bestLen = href.length;
          }
        }
      });
    });
  });

  if (matchedHref) {
    var matchedAnchor = document.querySelector('#sidebar a[href="' + matchedHref + '"]');
    if (!matchedAnchor) matchedAnchor = document.querySelector('#sidebar a[href="./' + matchedHref + '"]');
    if (matchedAnchor) {
      var li = matchedAnchor.parentElement;
      if (li) li.classList.add("active");
      var details = li && li.closest("details");
      if (details) {
        details.classList.add("active");
        details.open = true;
      }
    }
  }
})();
