System.config({
        transpiler: 'typescript', 
        typescriptOptions: { emitDecoratorMetadata: true }, 
        packages: {'src': {defaultExtension: 'ts'}} 
      });

System.import('angular2/platform/browser').then(function(ng){
        System.import('sites/all/modules/custom/hms_search_name_directory/src/hello_world.ts').then(function(src) {
          ng.bootstrap(src.HelloWorld);
        });
      });
