(function () {
  var UTM_KEYS = [
    'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term',
    'xcod', 'fbclid', 'gclid', 'ref', 'referencia', '_fbp',
    'tel', 'celular'
  ];

  function fromUrl() {
    var url = new URLSearchParams(window.location.search);
    var out = {};
    UTM_KEYS.forEach(function (k) {
      var v = url.get(k);
      if (v) out[k] = v;
    });
    return out;
  }

  function persistFromUrl() {
    var data = fromUrl();
    Object.keys(data).forEach(function (k) {
      sessionStorage.setItem('funnel_' + k, data[k]);
    });
  }

  function getAll() {
    var out = {};
    var urlData = fromUrl();
    UTM_KEYS.forEach(function (k) {
      var v = urlData[k] || sessionStorage.getItem('funnel_' + k);
      if (v) out[k] = v;
    });
    return out;
  }

  function buildQuery(extra) {
    var merged = Object.assign({}, getAll(), extra || {});
    var params = new URLSearchParams();
    Object.keys(merged).forEach(function (k) {
      if (merged[k] != null && merged[k] !== '') params.set(k, merged[k]);
    });
    return params.toString();
  }

  window.FunnelUtm = {
    persist: persistFromUrl,
    getAll: getAll,
    appendToUrl: function (base, extra) {
      var qs = buildQuery(extra);
      if (!qs) return base;
      return base + (base.indexOf('?') > -1 ? '&' : '?') + qs;
    },
    appendToPath: function (path, extra) {
      var qs = buildQuery(extra);
      return qs ? path + '?' + qs : path;
    }
  };

  persistFromUrl();
})();
