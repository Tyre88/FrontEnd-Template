var require = 
    {
        paths:
        {
            "angular": "dependencies/angular/angularjs.min",
            "ui-router": "dependencies/angular/ui-router.min",
            "app": "app",
            "domready": "dependencies/require/domready",
            "ui-bootstrap": "dependencies/ui-bootstrap-tpls-0.11.0.min",
            "jquery": "dependencies/jquery/jquery.min"
        },
        shim:
        {
            "app":
            {
                deps: ["ui-router", "ui-bootstrap"]
            },
            "ui-router":
            {
                deps: ["angular"]
            },
            "angular": 
            {
                exports: "angular",
                deps: ["jquery"]
            },
            "ui-bootstrap":
            {
                deps: ["angular"]
            }
        },
        deps:
        [
            "domready"
        ]
    };