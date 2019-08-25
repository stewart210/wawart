(function(window, undefined) {
  var dictionary = {
    "4d821d40-6d84-449c-b745-3ab1302d22cb": "function",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "d4cee271-df08-4194-8e3e-a9431ba791f3": "validation",
    "0cf28372-e7a9-4430-a42e-0bfca4c563d4": "login",
    "88b8be61-2dd7-4888-b457-7c49494ea82e": "get started",
    "3c516720-4b00-4f3b-8882-591f39da28bb": "Terms and conditions",
    "1cd6c00e-f55d-4208-a166-ad845ae9f320": "signup",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);