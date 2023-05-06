import{_ as n,c as s}from"./app.dcda0402.js";const a={},t=s(`<h1 id="vuex\u6301\u4E45\u5316" tabindex="-1"><a class="header-anchor" href="#vuex\u6301\u4E45\u5316" aria-hidden="true">#</a> Vuex\u6301\u4E45\u5316</h1><p>\u5728\u6211\u4EEC\u9875\u9762\u767B\u5F55\u7684\u65F6\u5019\u4F1A\u6709\u4E00\u4E2A\u51ED\u8BC1token\uFF0C\u4E00\u822C\u8FD9\u4E2Atoken,\u6211\u4EEC\u662F\u8981\u5B58\u5165\u672C\u5730\u7684\uFF0C\u6240\u4EE5\uFF0C\u5C01\u88C5\u4E00\u4E0BlocalStorage\u672C\u5730\u5B58\u50A8\u7684\u4E09\u4E2A\u65B9\u6CD5</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u57FA\u4E8Elocalstorage\u5C01\u88C5</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">setToken</span> <span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> window<span class="token punctuation">.</span>localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> data<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getToken</span> <span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> window<span class="token punctuation">.</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">removeToken</span> <span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> window<span class="token punctuation">.</span>localStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>\u5B9E\u73B0\u903B\u8F91</strong></p><p>\u5176\u5B9E\u5C31\u662F\u5C06\u6570\u636E\u5B58\u5165Vuex\u4E00\u4EFD\uFF0C\u518D\u5B58\u5165\u672C\u5730\u4E00\u4EFD\uFF0C\u4F18\u5148\u83B7\u53D6\u672C\u5730token</p><div class="language-text ext-text"><pre class="language-text"><code>vuex\u662F\u57FA\u4E8E\u5185\u5B58\u7684,\u5B58\u53D6\u867D\u7136\u5F88\u5FEB,\u4F46\u662F\u9875\u9762\u5237\u65B0\u5C31\u4F1A\u4E22\u5931
ls\u662F\u57FA\u4E8E\u78C1\u76D8\u7684,\u5B58\u53D6\u867D\u7136\u6162,\u4F46\u662F\u5237\u65B0\u4E0D\u4F1A\u4E22\u5931
\u6B63\u662F\u56E0\u4E3Als\u4E0D\u4F1A\u5237\u65B0\u4E22\u5931\u7684\u7279\u70B9
\u6240\u4EE5\u6211\u4EECvuex+ls\u5C31\u4EAB\u53D7vuex\u7684\u5B58\u53D6\u901F\u5EA6\u5FEB\u548Cls\u7684\u6301\u4E45\u5316
</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// vuex\u7684\u6A21\u5757user.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getToken<span class="token punctuation">,</span> setToken <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/utils/ls&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">namespaced</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">token</span><span class="token operator">:</span> <span class="token function">getToken</span><span class="token punctuation">(</span><span class="token string">&#39;TOKEN&#39;</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">&#39;&#39;</span>  <span class="token comment">//\u4F18\u5148\u4F7F\u7528\u672C\u5730token</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">settoken</span><span class="token punctuation">(</span> <span class="token parameter">state<span class="token punctuation">,</span> token</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>token <span class="token operator">=</span> token
      <span class="token function">setToken</span><span class="token punctuation">(</span> <span class="token string">&#39;TOKEN&#39;</span><span class="token punctuation">,</span> token <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u5F15\u5165</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
<span class="token keyword">import</span> user <span class="token keyword">from</span> <span class="token string">&#39;./modules/user&#39;</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// \u7EC4\u5408\u6A21\u5757\u7684\u914D\u7F6E\u9879</span>
  <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    user
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  getters
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> store
</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u8C03\u7528</span>
<span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
  <span class="token function">initMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token operator">...</span>  
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;user/settoken&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;sjlkdjlajidhwigi123&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">initMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div>`,9);function p(o,e){return t}var u=n(a,[["render",p],["__file","index.html.vue"]]);export{u as default};
