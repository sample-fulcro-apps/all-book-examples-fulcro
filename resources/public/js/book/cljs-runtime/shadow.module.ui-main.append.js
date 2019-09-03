
book.demos.dynamic_ui_main.init();
shadow.cljs.devtools.client.browser.module_loaded('ui-main');

shadow.loader.set_loaded();;
SHADOW_ENV.setLoaded("shadow.module.ui-main.prepend.js");
SHADOW_ENV.setLoaded("book.demos.dynamic_ui_main.js");
SHADOW_ENV.setLoaded("shadow.module.ui-main.append.js");