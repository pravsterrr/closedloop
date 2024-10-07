'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "f393d3c16b631f36852323de8e583132",
"CNAME": "0bf532c42d7dc65e356d36653ef56c27",
"main.dart.js": "c4f1225a3fddbd1be499caf71b786149",
"splash/img/light-3x.png": "6d6e62e757e580c5410bf9fc208f4e90",
"splash/img/light-1x.png": "a5faf14bfdbf8dee6aa9bb6524795513",
"splash/img/light-2x.gif": "4977b93bc5df5fbc9582346b06881926",
"splash/img/light-2x.png": "0b51d91e08ab9d96b2f3770415875353",
"splash/img/light-1x.gif": "bfe242cc94a9cae978cf481c75edc3c3",
"splash/img/dark-3x.png": "6d6e62e757e580c5410bf9fc208f4e90",
"splash/img/dark-1x.gif": "bfe242cc94a9cae978cf481c75edc3c3",
"splash/img/dark-3x.gif": "86b4cd29fa03c58c22105a663b9db4a0",
"splash/img/dark-1x.png": "a5faf14bfdbf8dee6aa9bb6524795513",
"splash/img/light-4x.gif": "aae83990a35d97924823d7324dc32334",
"splash/img/dark-4x.gif": "aae83990a35d97924823d7324dc32334",
"splash/img/dark-4x.png": "f6c78ab950469e3b067be5da36589de5",
"splash/img/dark-2x.gif": "4977b93bc5df5fbc9582346b06881926",
"splash/img/light-4x.png": "f6c78ab950469e3b067be5da36589de5",
"splash/img/dark-2x.png": "0b51d91e08ab9d96b2f3770415875353",
"splash/img/light-3x.gif": "86b4cd29fa03c58c22105a663b9db4a0",
"assets/FontManifest.json": "160e70a04d63fba7a8f37ac1095e403a",
"assets/AssetManifest.bin": "c941b3a7c2e6c34125f912d2703a95d2",
"assets/fonts/Inter-Black.ttf": "118c5868c7cc1370fcf5a1fc2f569883",
"assets/fonts/Inter-Bold.ttf": "ba74cc325d5f67d0efbeda51616352db",
"assets/fonts/Amaranth-Italic.ttf": "c85c1fd776003a6893dabf7bb234fec1",
"assets/fonts/Amaranth-Regular.ttf": "5f274104168dac1f3c25b18ffb59878f",
"assets/fonts/Avenir-Heavy.ttf": "1950c9e43b1737cb535ed2aaa354da06",
"assets/fonts/Avenir.ttf": "77ce85fec67e99ffc50ed8edac7a4890",
"assets/fonts/Inter-Medium.ttf": "cad1054327a25f42f2447d1829596bfe",
"assets/fonts/Inter-Light.ttf": "a3fe4e0f9fdf3119c62a34b1937640dd",
"assets/fonts/NunitoSans-Variable.ttf": "e7f409eb0d8afdc0e025cc2bd0987e4f",
"assets/fonts/Inter-ExtraBold.ttf": "72ac147c98056996b2a31e95a56d6e66",
"assets/fonts/Inter-Thin.ttf": "4558ff85abeab91af24c86aab81509a7",
"assets/fonts/Inter-Regular.ttf": "ea5879884a95551632e9eb1bba5b2128",
"assets/fonts/Inter-SemiBold.ttf": "465266b2b986e33ef7e395f4df87b300",
"assets/fonts/Amaranth-Bold.ttf": "0de7f8709503676ff5699e995ce2fec9",
"assets/fonts/Inter-ExtraLight.ttf": "7a177fa21fece72dfaa5639d8f1c114a",
"assets/fonts/MaterialIcons-Regular.otf": "c9622bedbbf9e4d616a30474ac60c84f",
"assets/fonts/Amaranth-BoldItalic.ttf": "e782869d62430d706b843604dbb5300c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "f2163b9d4e6f1ea52063f498c8878bb9",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/assets/allergychecks.png": "a86f682875067cb1f269b7e14573a994",
"assets/assets/cprSplashhh.gif": "e310bcb58e8dcf7b4787a4160bade0f9",
"assets/assets/assessThumb.jpg": "aee3dc52a1a8758a95ba5d161d754bf0",
"assets/assets/cprSplash.gif": "5cd014123a74c7153bf00ece2923f21e",
"assets/assets/newIcon.png": "65afa7e8cd6c1a2484f873a61c00026b",
"assets/assets/cardiacEmergencyThumb.jpg": "dd81dd2c9fcb530d52616421ea6db7f4",
"assets/assets/drabcThumb.jpg": "3692c4b5390f091d83131d77aa2b2eca",
"assets/assets/drabc.png": "9408b14de25a7693ab8665eb80cfa4d9",
"assets/assets/cprThumb.jpg": "78f6499633f8548fa9d8a50d3d1d0290",
"assets/assets/newLogo.svg": "e935c7193c42f4e873e3bac32abac428",
"assets/assets/cpricon.gif": "aecaab0dec11894acc9762aec94a0c29",
"assets/assets/inhaler.png": "d394adced031a712eebb6af8bc563a4c",
"assets/assets/questionmark.png": "c701dc2adca1ad537d9a3b537f66a825",
"assets/assets/cprSplashh.gif": "feb0bfc778aebae5c3cc7fe984e3debb",
"assets/assets/cpr.png": "ffde2449f0794954150d235962e177b0",
"assets/assets/cprSplash.png": "0711f07d2f1d02e3b51f7056fbf10267",
"assets/assets/flowchart.png": "343a4f128aef3f696b3f390ff3de5232",
"assets/assets/recovery.png": "ff3b23d8e672a267dc992269c22973b1",
"assets/NOTICES": "40651773ef4f3b948568cace0f02c342",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "7d436063831843ff2f666ee66650fcc9",
"assets/AssetManifest.bin.json": "bfd1b08dfdfc2cb22ec75b3720c4d2ad",
"index.html": "32effc9bac8882e4deec532d761f9d7e",
"/": "32effc9bac8882e4deec532d761f9d7e",
"manifest.json": "47eb95031037abab9b5b0d3f7220b1de",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"icons/Icon-maskable-192.png": "3f56beb88adea6c00847c289e236707a",
"icons/Icon-192.png": "3f56beb88adea6c00847c289e236707a",
"icons/Icon-512.png": "2f44e9b5c4e8e567348972c4a6ae031c",
"icons/Icon-maskable-512.png": "2f44e9b5c4e8e567348972c4a6ae031c",
"favicon.png": "1724095cbbc28352fd5641f136c93f06",
"version.json": "f691a524d243b17905dee239871e6517",
"flutter_bootstrap.js": "63ff0f8d85afad7e119ae58671fc84bc"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
